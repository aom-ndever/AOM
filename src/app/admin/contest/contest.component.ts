import { Component, OnInit, ViewChild } from "@angular/core";
import { ContestService } from "./contest.service";
import { DataTableDirective } from "angular-datatables";
import { ToastrService } from "ngx-toastr";
import { BsModalService } from "ngx-bootstrap/modal";
import { BsModalRef } from "ngx-bootstrap/modal/bs-modal-ref.service";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  AbstractControl,
  NG_VALIDATORS,
  Validator,
  FormArray,
} from "@angular/forms";

@Component({
  selector: "app-contest",
  templateUrl: "./contest.component.html",
  styleUrls: [],
})
export class ContestComponent implements OnInit {
  @ViewChild(DataTableDirective)
  datatableElement: DataTableDirective;
  modalRef: BsModalRef;
  contestModelRef: BsModalRef;
  dtOptions: DataTables.Settings = {};
  is_new_or_existing: any = 1;
  contest_data: any = [];
  existing_contest_list: any = [];
  exist_contest: any = {};
  allRegion_list: any = [];
  region_list: any = [];
  state_list: any = [];
  search_str: any = "";
  sort: any = -1;
  participant_data: any = [];
  day: any = [];
  month: any = [];
  year: any = [];
  music_type: any = [];
  contest_detail: any = {};
  contestant: any = {};
  show_spinner = false;
  isSpecialContest: boolean;
  contest_validation: FormGroup;
  is_valid = false;
  round_list: any = [];
  contest_row_cnt = 1;
  contestant_per_round = [];
  singleState = false;
  multiState = false;
  isSubmitted = false;
  constructor(
    private contestService: ContestService,
    private toastr: ToastrService,
    private modalService: BsModalService,
    private fb: FormBuilder
  ) {
    this.isSpecialContest = false;
    this.day = [];
    this.month = [];
    this.year = [];
    for (let i = 1; i <= 31; i++) {
      this.day.push(i);
    }
    for (let i = 1; i <= 12; i++) {
      this.month.push(i);
    }
    for (let i = new Date().getFullYear(); i <= 2100; i++) {
      this.year.push(i);
    }
    this.contest_validation = this.fb.group({
      // type: ['', [Validators.required]],
      name: ["", [Validators.required, this.noWhitespaceValidator]],
      day: ["", [Validators.required]],
      month: ["", [Validators.required]],
      year: ["", [Validators.required]],
      // duration: ['', [Validators.required]],
      duration: [""],
      round: [""],
      contest_type: ["", [Validators.required]],
      music_type: ["", [Validators.required]],
      region: ["", [Validators.required]],
      state: [""],
      states: [""],
    });
  }

  ngOnInit() {
    const that = this;
    this.dtOptions = {
      pagingType: "full_numbers",
      pageLength: 10,
      serverSide: true,
      processing: true,
      searching: false,
      ordering: false,
      lengthChange: false,
      responsive: true,
      scrollCollapse: true,
      language: {
        processing: '<i class="fa fa-spinner fa-spin loader"></i>',
      },
      ajax: (dataTablesParameters: any, callback) => {
        setTimeout(() => {
          dataTablesParameters["search"] = that.search_str;
          dataTablesParameters["sort"] = [
            this.sort === -1
              ? { field: "end_date", value: -1 }
              : { field: "start_date", value: 1 },
          ];
          that.contestService
            .getAllContest(dataTablesParameters)
            .subscribe((response) => {
              that.contest_data = response["contest"]["contest"];
              // that.contest_data.forEach((ele) => {
              //   ele['days'] = that.getDaysDiff(ele['start_date'], new Date());
              // });
              callback({
                recordsTotal: response["contest"]["recordsTotal"],
                recordsFiltered: response["contest"]["recordsTotal"],
                data: [],
              });
              that.contest_row_cnt = dataTablesParameters["start"] + 1;
            });
        }, 0);
      },
    };
    this.getAllMusicTypes();
    this.getAllExistingContest();
    this.getAllRegion();
  }

  selectedState(value, key) {
    if (key === "multi") {
      if (value.length > 0) {
        this.multiState = true;
      } else {
        this.multiState = false;
      }
    } else {
      if (value) {
        this.singleState = true;
      } else {
        this.singleState = false;
      }
    }
  }
  noWhitespaceValidator(control: FormControl) {
    if (
      typeof (control.value || "") === "string" ||
      (control.value || "") instanceof String
    ) {
      const isWhitespace = (control.value || "").trim().length === 0;
      const isValid = !isWhitespace;
      return isValid ? null : { whitespace: true };
    }
  }

  // Get day difference between dates
  getDaysDiff(dt1: any, dt2: any) {
    const date1 = new Date(dt1);
    const date2 = new Date(dt2);
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return diffDays;
  }

  openModal(template: any, id: any) {
    const data = {
      contest_id: id,
    };
    this.contestService.getContestParticipants(data).subscribe((response) => {
      this.participant_data = response["artist"];
    });
    this.is_valid = false;
    this.modalRef = this.modalService.show(template, { backdrop: "static" });
  }

  openContestModel(template: any) {
    // this.is_valid = false;
    this.contest_detail = {
      no_of_round: "",
      duration: "",
    };
    this.is_new_or_existing = 1;
    this.contestModelRef = this.modalService.show(template, {
      backdrop: "static",
    });
  }

  openRoundModel(template: any, id: any) {
    this.getContestRound(id);
    this.modalRef = this.modalService.show(template, { backdrop: "static" });
  }

  getContestRound(id) {
    const data = {
      contest_id: id,
    };
    this.contestService.getContestRound(data).subscribe((response) => {
      this.round_list = response["contest"]["contest"];
    });
  }
  onChangeRound(e) {
    if (e.target.value > 1) {
      this.contestant_per_round = [];
      this.contestant = {};
      for (let index = 0; index < e.target.value; index++) {
        if (index !== 0) {
          var obj = {};
          obj[`label`] = `Round${index + 1}`;

          this.contestant[obj["label"]] = "";
          this.contestant_per_round.push(obj);
        }
      }
    }
  }

  sortArtist() {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.draw();
    });
  }

  // Get all music type
  getAllMusicTypes() {
    this.contestService.getAllMusicType().subscribe((response) => {
      this.music_type = response["music"];
    });
  }

  // Get all existing contest
  getAllExistingContest() {
    this.contestService.getExistingContest().subscribe((response) => {
      this.existing_contest_list = response["contest"]["contest"];
    });
  }

  // get all region
  getAllRegion() {
    this.contestService.getAllRegion().subscribe((response) => {
      this.allRegion_list = response["Region"];
      if (this.allRegion_list) {
        this.region_list = [];
        response["Region"].map((res) => {
          if (res.name !== "no region") {
            this.region_list.push(res);
          }
        });
      }
    });
  }

  changeContest(type) {
    if (this.allRegion_list && type !== "special") {
      this.region_list = [];
      this.allRegion_list.map((res) => {
        if (res.name !== "no region") {
          this.region_list.push(res);
        }
      });
    } else {
      this.region_list = this.allRegion_list;
    }
    this.contest_validation.controls["region"].setValue("");
  }

  // Get state from region
  getStateFromRegion(id: any) {
    if (id && id !== "" && id !== "603e0a76ed61126334a38044") {
      this.multiState = false;
      const data = {
        region: id,
      };
      this.contestService.getStateByRegion(data).subscribe((response) => {
        this.state_list = response["state"];
        // if (this.contest_detail) {
        //   this.contest_detail["state"] = this.contest_detail["state"]
        //     ? this.contest_detail["state"]["_id"]
        //     : "";
        // }
      });
    } else {
      this.singleState = false;
      this.contestService.getAllState().subscribe((response) => {
        this.state_list = response["state"];
        // if (this.contest_detail) {
        //   this.contest_detail["state"] = this.contest_detail["state"]
        //     ? this.contest_detail["state"]["_id"]
        //     : "";
        // }
      });
    }
    this.contest_validation.controls["states"].setValue("");
    this.contest_validation.controls["state"].setValue("");
  }

  // Add new contest
  saveContest(flag) {
    // if (flag) {
    //   this.is_valid = !flag;
    // if (this.is_new_or_existing == 1) {
    // let stdt = new Date(this.contest_detail['year'] + '-' + this.contest_detail['month'] + '-' + this.contest_detail['day']);
    // let timestamp = Date.UTC(dt.getFullYear(), dt.getMonth(), dt.getDate());
    // let stdt = new Date(timestamp);
    // //let enddt = new Date(stdt.getTime() + this.contest_detail['duration'] * 24 * 60 * 60 * 1000);
    // console.log(this.getDaysDiff(stdt, new Date()));
    // if(stdt.getTime() < (new Date()).getTime() ) {
    //   this.toastr.info('The date must be bigger or equal to today date');
    //   return;
    // }
    this.isSubmitted = true;
    this.is_valid = !flag;
    if (
      this.contest_validation.get("region").value ===
        "603e0a76ed61126334a38044" &&
      this.multiState === true &&
      this.singleState === false
    ) {
      let states = [];
      let allstates = this.contest_validation.get("states").value;
      setTimeout(async () => {
        await allstates.map((res) => {
          states.push({ state_id: res._id });
        });
        var obj = {
          contest_type: this.contest_validation.get("contest_type").value,
          day: this.contest_validation.get("day").value,
          duration: this.contest_validation.get("duration").value,
          month: this.contest_validation.get("month").value,
          music_type: this.contest_validation.get("music_type").value,
          name: this.contest_validation.get("name").value,
          region: this.contest_validation.get("region").value,
          round: this.contest_validation.get("round").value,
          states: states,
          year: this.contest_validation.get("year").value,
        };
        console.log(" : obj ==> ", obj);
        this.addContest(flag, obj);
      }, 1000);
    } else if (
      this.contest_validation.get("region").value !==
        "603e0a76ed61126334a38044" &&
      this.singleState === true &&
      this.multiState === false
    ) {
      var obj1 = {
        contest_type: this.contest_validation.get("contest_type").value,
        day: this.contest_validation.get("day").value,
        duration: this.contest_validation.get("duration").value,
        month: this.contest_validation.get("month").value,
        music_type: this.contest_validation.get("music_type").value,
        name: this.contest_validation.get("name").value,
        region: this.contest_validation.get("region").value,
        round: this.contest_validation.get("round").value,
        states: [{ state_id: this.contest_validation.get("state").value }],
        year: this.contest_validation.get("year").value,
      };
      console.log(" : obj1 ==> ", obj1);
      this.addContest(flag, obj1);
    }
  }

  addContest(flag, contestData) {
    if (flag) {
      // this.show_spinner = true;
      let data;

      if (this.contest_detail["duration"]) {
        data = {
          name: contestData.name,
          contest_type: contestData.contest_type,
          music_type: contestData.music_type,
          region: contestData.region,
          states: contestData.states,
          round: contestData.round,
          day: contestData.day,
          month: contestData.month,
          year: contestData.year,
          duration: contestData.duration,
        };
        if (contestData.round > 1) {
          for (const key in this.contestant) {
            let array = [];
            for (const key in this.contestant) {
              array.push({ [key]: this.contestant[key] });
            }
            data["contestant"] = array;
          }
        }
      } else {
        data = {
          name: contestData.name,
          contest_type: contestData.contest_type,
          music_type: contestData.music_type,
          region: contestData.region,
          round: 1,
          states: contestData.states,
          day: contestData.day,
          month: contestData.month,
          year: contestData.year,
        };
      }

      // commented for testing purpose only
      this.contestService.addNewContest(data).subscribe(
        (response) => {
          this.datatableElement.dtInstance.then(
            (dtInstance: DataTables.Api) => {
              dtInstance.draw();
            }
          );
          this.contest_detail = {};
          this.contestant = {};
          this.isSpecialContest = false;
          this.isSubmitted = false;
          this.contestModelRef.hide();
          this.getAllExistingContest();
          this.toastr.success(response["message"], "Success!");
        },
        (error) => {
          this.toastr.error(error["error"].message, "Error!");
          this.show_spinner = false;
        },
        () => {
          this.show_spinner = false;
        }
      );
      // commented for testing purpose only

      // } else {
      //   //let stdt = new Date(this.contest_detail['year'] + '-' + this.contest_detail['month'] + '-' + this.contest_detail['day']);
      //   // let timestamp = Date.UTC(dt.getFullYear(), dt.getMonth(), dt.getDate());
      //   // let stdt = new Date(timestamp);
      //   //let enddt = new Date(stdt.getTime() + this.contest_detail['duration'] * 24 * 60 * 60 * 1000);
      //   // if(stdt.getTime() < (new Date()).getTime() ) {
      //   //   this.toastr.info('The date must be bigger or equal to today date');
      //   //   return;
      //   // }
      //   let data = {
      //     contest_id: this.contest_detail['contest_id']['_id'],
      //     // music_type : this.contest_detail['music_type'],
      //     region: this.contest_detail['region'],
      //     state: this.contest_detail['state'],
      //     round: this.contest_detail['no_of_round'],
      //     day: this.contest_detail['day'],
      //     month: this.contest_detail['month'],
      //     year: this.contest_detail['year'],
      //     duration: +this.contest_detail['duration']
      //   };
      //   this.show_spinner = true;
      //   this.ContestService.addExistingContest(data).subscribe((response) => {
      //     this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      //       dtInstance.draw();
      //     });
      //     this.contest_detail = {};
      //     this.contestModelRef.hide();
      //     this.getAllExistingContest();
      //     this.toastr.success(response['message'], 'Success!');
      //   }, (error) => {
      //     this.toastr.error(error['error'].message, 'Error!');
      //     this.show_spinner = false;
      //   }, () => {
      //     this.show_spinner = false;
      //   });
      // }
      // } else {
      //   this.is_valid = !flag;
      // }
    }
  }
  // Select exisiting contest
  selectContest(idx: any) {
    this.contest_detail = this.existing_contest_list[idx];
    const dt = new Date(this.contest_detail["start_date"]);
    this.contest_detail["no_of_round"] = this.contest_detail["round"] + 1;
    this.contest_detail["day"] = dt.getUTCDate();
    this.contest_detail["month"] = dt.getUTCMonth() + 1;
    this.contest_detail["year"] = dt.getUTCFullYear();
    this.contest_detail["music_type"] = this.contest_detail["contest_id"][
      "music_type"
    ]["_id"];
    this.getStateFromRegion(this.contest_detail["region"]);
  }

  specialContest() {
    if (this.contest_detail.contest_type === "special") {
      this.contest_validation.controls["state"].setValue("");
      this.contest_detail["duration"] = 1;
      this.contest_detail["no_of_round"] = 1;
      this.changeContest("special");
      this.isSpecialContest = true;
    } else {
      this.changeContest("beta");
      this.isSpecialContest = false;
      this.contest_detail["duration"] = "";
      this.contest_detail["no_of_round"] = "";
      this.contest_validation.controls["duration"].setValue("");
      this.contest_validation.controls["round"].setValue("");
    }
    this.state_list = [];
  }

  closeAddContestModel() {
    this.contest_detail["duration"] = "";
    this.contest_detail["no_of_round"] = "";
    this.contest_validation.controls["duration"].setValue("");
    this.contest_validation.controls["round"].setValue("");
    this.isSpecialContest = false;
    this.contestModelRef.hide();
  }
}
