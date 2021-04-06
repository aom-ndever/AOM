import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { environment } from "../../../environments/environment";
import { ToastrService } from "ngx-toastr";
import { MyMusicService } from "./my_music.service";
import { MessageService } from "../../shared/message.service";
import { Subscription } from "rxjs/Subscription";
import { DataTableDirective } from "angular-datatables";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import swal from "sweetalert2";
import { NgxUiLoaderService } from "ngx-ui-loader";
import { type } from "os";
declare var FB: any;

class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}
@Component({
  selector: "app-music",
  templateUrl: "./my_music.component.html",
  styleUrls: [],
})
export class MyMusicComponent implements OnInit, OnDestroy {
  public contestid;
  @ViewChild(DataTableDirective)
  datatableElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  contesttrack_data: any = {};
  standard_data: any = {};
  show_filter = false;
  tab_cnt: Number = 1;
  modal_ref: NgbModalRef;
  audio_file: any = "";
  image_upload: any = "";
  edit_image: any = "img/default_img.png";
  trackdata: any = {};
  tracklist: any = [];
  tracklists: any = [];
  show_spinner = false;
  audio_ins: any = [];
  track_url: any = environment.API_URL + environment.ARTIST_TRACK;
  userinfo: any = "";
  music_type_list: any = [];
  contest_list: any = [];
  // contest_id: any = '';
  add_track_img: any = "";
  add_track_audio: any = "";
  subscription: Subscription;
  private modalRef: NgbModalRef;
  private emailmodalRef: NgbModalRef;
  private phonemodalRef: NgbModalRef;
  share_data: any = {};
  share_form: FormGroup;
  share_form_phone: FormGroup;
  share_form_validation = false;
  user: any = "";
  track_data: any = {};
  track_row_cnt = 1;
  public contestType;
  public submitContest;
  contesttrack_form: FormGroup;
  standard_form: FormGroup;
  special_form: FormGroup;
  special_form2: FormGroup;
  special_form3: FormGroup;
  special_form4: FormGroup;
  special_form5: FormGroup;
  special_form6: FormGroup;
  special_form7: FormGroup;
  special_form8: FormGroup;
  closeResult: string;
  public contestDetail;
  public track_img: String;
  public spacialContestData: any;
  constructor(
    private modalService: NgbModal,
    private myMusicService: MyMusicService,
    private toastr: ToastrService,
    private messageService: MessageService,
    private fb: FormBuilder,
    private titleService: Title,
    private route: ActivatedRoute,
    private ngxService: NgxUiLoaderService
  ) {
    console.log("my music component => ");
    this.contesttrack_form = this.fb.group({
      contest_id: new FormControl(),
      preliminary1_track: new FormControl(),
      round1_track: new FormControl(),
      round2_track: new FormControl(),
      round3_track: new FormControl(),
      final_track: new FormControl(),
      semi_final_track: new FormControl(),
    });
    this.standard_form = this.fb.group({
      scontest_id: new FormControl(),
      spreliminary1_track: new FormControl(),
      spreliminary2_track: new FormControl(),
      spreliminary3_track: new FormControl(),
      sround1_track: new FormControl(),
      sround2_track: new FormControl(),
      sround3_track: new FormControl(),
      sfinal_track: new FormControl(),
      ssemi_final_track: new FormControl(),
    });
    this.special_form = this.fb.group({
      special_contest_id: new FormControl(),
      special_round1_track: new FormControl(),
    });
    this.special_form2 = this.fb.group({
      special_contest_id: new FormControl(),
      special_round1_track: new FormControl(),
      special_round2_track: new FormControl(),
    });
    this.special_form3 = this.fb.group({
      special_contest_id: new FormControl(),
      special_round1_track: new FormControl(),
      special_round2_track: new FormControl(),
      special_round3_track: new FormControl(),
    });
    this.special_form4 = this.fb.group({
      special_contest_id: new FormControl(),
      special_round1_track: new FormControl(),
      special_round2_track: new FormControl(),
      special_round3_track: new FormControl(),
      special_round4_track: new FormControl(),
    });
    this.special_form5 = this.fb.group({
      special_contest_id: new FormControl(),
      special_round1_track: new FormControl(),
      special_round2_track: new FormControl(),
      special_round3_track: new FormControl(),
      special_round4_track: new FormControl(),
      special_round5_track: new FormControl(),
    });
    this.special_form6 = this.fb.group({
      special_contest_id: new FormControl(),
      special_round1_track: new FormControl(),
      special_round2_track: new FormControl(),
      special_round3_track: new FormControl(),
      special_round4_track: new FormControl(),
      special_round5_track: new FormControl(),
      special_round6_track: new FormControl(),
    });
    this.special_form7 = this.fb.group({
      special_contest_id: new FormControl(),
      special_round1_track: new FormControl(),
      special_round2_track: new FormControl(),
      special_round3_track: new FormControl(),
      special_round4_track: new FormControl(),
      special_round5_track: new FormControl(),
      special_round6_track: new FormControl(),
      special_round7_track: new FormControl(),
    });
    this.special_form8 = this.fb.group({
      special_contest_id: new FormControl(),
      special_round1_track: new FormControl(),
      special_round2_track: new FormControl(),
      special_round3_track: new FormControl(),
      special_round4_track: new FormControl(),
      special_round5_track: new FormControl(),
      special_round6_track: new FormControl(),
      special_round7_track: new FormControl(),
      special_round8_track: new FormControl(),
    });
    this.titleService.setTitle(this.route.snapshot.data["title"]);
    this.userinfo = JSON.parse(localStorage.getItem("user"));
    this.subscription = this.messageService
      .getMessage()
      .subscribe((response) => {
        if (response && response["list"] !== 1) {
          this.audio_ins.forEach((ele, idx) => {
            this.audio_ins[idx] = false;
          });
        }
        if (
          response &&
          response["action"] === "stop" &&
          response["list"] === 1
        ) {
          this.audio_ins[response["index"]] = false;
        }
        if (
          response &&
          response["action"] === "start" &&
          response["list"] === 1
        ) {
          this.audio_ins[response["index"]] = true;
        }
        if (
          (response &&
            response["list"] === 1 &&
            response["action"] === "next") ||
          response["action"] === "prev"
        ) {
          if (
            response["track_action"] &&
            response["track_action"] === "pause"
          ) {
            this.audio_ins.forEach((ele, idx) => {
              this.audio_ins[idx] = false;
            });
            this.audio_ins[response["index"]] = true;
          }
        }
        if (
          response &&
          response["action"] === "bottom_play" &&
          response["list"] === 1
        ) {
          this.audio_ins.forEach((ele, idx) => {
            this.audio_ins[idx] = false;
          });
          this.audio_ins[response["index"]] = true;
        }
      });
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
      language: {
        processing: '<i class="fa fa-spinner fa-spin loader"></i>',
        // 'processing': '',
      },
      ajax: (dataTablesParameters: any, callback) => {
        setTimeout(() => {
          that.audio_ins = [];
          that.myMusicService
            .getAllTrack(dataTablesParameters)
            .subscribe((response) => {
              that.tracklist = response["track"]["music"];
              that.tracklist.forEach((ele) => {
                that.audio_ins.push(false);
              });
              callback({
                recordsTotal: response["track"]["recordsTotal"],
                recordsFiltered: response["track"]["recordsTotal"],
                data: [],
              });
              that.track_row_cnt = dataTablesParameters["start"] + 1;
            });
        }, 0);
      },
      columns: [
        { data: "" },
        { data: "" },
        { data: "" },
        { data: "" },
        { data: "" },
        { data: "" },
        { data: "" },
      ],
    };
    this.share_form = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
    });
    this.share_form_phone = this.fb.group({
      phone: [
        "",
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(10),
        ],
      ],
    });
  }

  ngOnInit() {
    this.ngxService.start();
    // this.getAllTrack();
    this.getAllMusicType();
    this.getAllContest();
    this.trackListstoJoin();
  }

  trackListstoJoin() {
    this.myMusicService.getTracks().subscribe(
      (res) => {
        console.log(" : res ==> ", res);
        if (res[`status`] === 1) {
          this.tracklists = res["track"];
        }
      },
      (error) => {
        console.log(" : error ==> ", error);
      }
    );
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  openShareTrackModel(content, index: any) {
    this.track_data = this.tracklist[index];
    this.modalRef = this.modalService.open(content, {
      centered: true,
      windowClass: "modal-wrapper",
      backdrop: true,
    });
  }

  openEmailShareTrackModel(content) {
    if (this.userinfo) {
      this.share_data = {};
      this.emailmodalRef = this.modalService.open(content, {
        centered: true,
        backdrop: true,
      });
    } else {
      this.toastr.info("Login first to share track via email", "Information!");
    }
  }

  openPhoneShareTrackModel(content) {
    if (this.userinfo) {
      this.share_data = {};
      this.phonemodalRef = this.modalService.open(content, {
        centered: true,
        backdrop: true,
      });
    } else {
      this.toastr.info("Login first to share track via sms", "Information!");
    }
  }

  toggleFilter() {
    this.show_filter = !this.show_filter;
  }

  tabChanged(val: Number) {
    this.tab_cnt = val;
  }

  changeAudio(event: any) {
    const file = event.target.files[0];
    console.log(" : file ==> ", file);
    let flag;
    let res;
    const fr = new FileReader();
    fr.onload = (e: any) => {
      res = e.target.result;
      console.log(" : res ==> ", res);
      const uint = new Uint8Array(res.slice(0, 4));
      const bytes = [];
      uint.forEach((byte) => {
        bytes.push(byte.toString(16));
      });

      const hex = bytes.join("").toUpperCase();
      const allow_types = this.getMimetype(hex);
      console.log(" : file.type ==> ", file.type);
      if (
        file.type === "audio/mpeg" ||
        file.type === "audio/mp3" ||
        file.type === "audio/aiff" ||
        file.type === "audio/x-aiff" ||
        file.type === "audio/wav" ||
        file.type === "audio/flac" ||
        file.type === "audio/vnd.dlna.adts" ||
        file.type === "audio/m4a" ||
        file.type === "audio/x-m4a"
      ) {
        // if (file.type === "audio/mpeg" && hex !== "4944334") {
        //   if (allow_types.indexOf("audio/mp3") === -1) {
        //     this.toastr.error("Invalid file format.", "Error!");
        //     return false;
        //     // }
        //   } else {
        //     // const file = new Blob([new Uint8Array(res)], { type: binaryFileType });
        //   }
        this.audio_file = file;
      } else {
        this.toastr.error("Invalid file format.", "Error!");
        return false;
        // if (allow_types.indexOf(file.type) === -1) {
        // } else {
        //   // const file = new Blob([new Uint8Array(res)], { type: binaryFileType });
        //   this.audio_file = file;
        // }
      }
    };
    fr.readAsArrayBuffer(file);
    // const allow_types = ["audio/aiff,audio/mp3,audio/wav,audio/flac"];
  }

  changeFile(event: any) {
    const file = event.target.files[0];
    if (
      file.type === "image/png" ||
      file.type === "image/jpg" ||
      file.type === "image/jpeg"
    ) {
      if (file.size <= 20000000) {
        this.image_upload = file;
        this.track_img =
          environment.API_URL + environment.ARTIST_TRACK + file.name;
        const fr = new FileReader();
        fr.onload = (e: any) => {
          this.track_img = e.target.result;
          this.add_track_img = e.target.result;
        };
        fr.readAsDataURL(file);
        this.add_track_img =
          environment.API_URL + environment.ARTIST_TRACK + file;
      } else {
        this.toastr.error("Please choose Image up to 20 mb.", "Error!");
        return false;
      }
    } else {
      this.toastr.error("Invalid file format.", "Error!");
    }
    // let flag;
    // let res;
    // let fr = new FileReader();
    // fr.onload = (e: any) => {
    //   console.log('e => ', e);
    //   res = e.target.result;
    //   console.log('res ======================================================> ', res);
    //   const uint = new Uint8Array(res.slice(0, 4));
    //   const bytes = [];
    //   uint.forEach((byte) => {
    //     bytes.push(byte.toString(16));
    //   });
    //   console.log('bytes => ', bytes);
    //   const hex = bytes.join('').toUpperCase();
    //   console.log('hex => ', hex);
    //   const allow_types = this.getImageMimetype(hex);
    //   if (allow_types.indexOf(file.type) === -1) {
    //     this.toastr.error('Invalid file format.', 'Error!');
    //     return false;
    //   } else {
    //     if (file.size <= 500000) {
    //       this.image_upload = file;
    //       console.log('file => ', file);
    //       this.track_img = environment.API_URL + environment.ARTIST_TRACK + file.name;
    //       console.log('track_image => ', this.track_img);
    //       this.add_track_img = environment.API_URL + environment.ARTIST_TRACK + file;
    //     } else {
    //       this.toastr.error('Please choose Image less then 500 kb.', 'Error!');
    //       return false;
    //     }
    //   }
    // };
    // fr.readAsArrayBuffer(file);
    // const allow_types = ['image/png', 'image/jpg', 'image/jpeg'];
  }

  // on change event of edit track pic
  changeTrackImage(event: any) {
    const file = event.target.files[0];
    if (event.target.files.length > 0) {
      const allow_types = ["image/png", "image/jpg", "image/jpeg"];
      if (allow_types.indexOf(file.type) === -1) {
        this.toastr.error("Invalid file format.", "Error!");
        return false;
      }
      this.trackdata.image = file;
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const data = {};
        const imageBuffer = e.target.result;
        this.edit_image = imageBuffer;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  openModal(content) {
    this.trackdata = {};
    this.add_track_img = "";
    this.track_img = "";
    this.image_upload = "";
    this.edit_image = "";
    this.add_track_audio = "";
    this.modal_ref = this.modalService.open(content, {
      centered: true,
      windowClass: "add-track-popup",
      backdrop: "static",
    });
  }

  // open edit track model
  openEditTrackModal(content: any, obj: any) {
    this.trackdata = { ...obj };
    if (!obj.description || obj.description === "undefined") {
      this.trackdata["description"] = "";
    }
    if (obj.image) {
      this.edit_image =
        environment.API_URL + environment.ARTIST_TRACK + obj.image;
    } else {
      this.edit_image = "img/default_img.png";
    }
    this.modal_ref = this.modalService.open(content, {
      centered: true,
      backdrop: "static",
      windowClass: "add-track-popup",
    });
  }

  // Open contest modal
  // openContestModal(content: any, obj: any) {
  openContestModal(content: any) {
    // this.trackdata = obj;
    // this.modal_ref = this.modalService.open(content, { centered: true, windowClass: 'new-add-track-popup', backdrop: 'static' });
    this.submitContest = this.modalService.open(content, {
      centered: true,
      windowClass: "new-add-track-popup",
      backdrop: "static",
    });
  }

  addContestTrack() {
    let Obj;
    if (this.contestType === "beta") {
      Obj = {
        contest_id: this.contestid,
        preliminary1_track: this.contesttrack_form.value.preliminary1_track,
        round1_track: this.contesttrack_form.value.round1_track,
        round2_track: this.contesttrack_form.value.round2_track,
        round3_track: this.contesttrack_form.value.round3_track,
        semi_final_track: this.contesttrack_form.value.semi_final_track,
        final_track: this.contesttrack_form.value.final_track,
      };
    } else if (this.contestType === "standard") {
      Obj = {
        contest_id: this.contestid,
        preliminary1_track: this.standard_form.value.spreliminary1_track,
        preliminary2_track: this.standard_form.value.spreliminary2_track,
        preliminary3_track: this.standard_form.value.spreliminary3_track,
        round1_track: this.standard_form.value.sround1_track,
        round2_track: this.standard_form.value.sround2_track,
        round3_track: this.standard_form.value.sround3_track,
        semi_final_track: this.standard_form.value.ssemi_final_track,
        final_track: this.standard_form.value.sfinal_track,
      };
    }
    // else if (this.contestType === "special") {
    //   Obj = {
    //     contest_id: this.contestid,
    //     round1_track: this.special_form.value.special_round1_track,
    //   };
    // }
    this.show_spinner = true;
    this.myMusicService.addContestTrack(Obj).subscribe(
      (response) => {
        this.toastr.success(response["message"], "Success!");
        this.show_spinner = false;
        this.contestDetail.close();
        this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.draw();
        });
        this.modal_ref.close();
      },
      (error) => {
        this.toastr.error(error["error"].message, "Error!");
        this.show_spinner = false;
      },
      () => {
        this.show_spinner = false;
      }
    );
  }

  addSpecialContestTrack(totalRounds) {
    let obj;
    if (totalRounds === 1) {
      console.log(" : totalRounds ====> ", totalRounds);
      console.log(" : special_form8 ==> ", this.special_form.value);
      obj = {
        contest_id: this.contestid,
        round1_track: this.special_form.value.special_round1_track,
      };
    } else if (totalRounds === 2) {
      console.log(" : totalRounds ====> ", totalRounds);
      console.log(" : special_form8 ==> ", this.special_form2.value);
      obj = {
        contest_id: this.contestid,
        round1_track: this.special_form2.value.special_round1_track,
        round2_track: this.special_form2.value.special_round2_track,
      };
    } else if (totalRounds === 3) {
      console.log(" : totalRounds ====> ", totalRounds);
      console.log(" : special_form8 ==> ", this.special_form3.value);
      obj = {
        contest_id: this.contestid,
        round1_track: this.special_form3.value.special_round1_track,
        round2_track: this.special_form3.value.special_round2_track,
        round3_track: this.special_form3.value.special_round3_track,
      };
    } else if (totalRounds === 4) {
      console.log(" : totalRounds ====> ", totalRounds);
      console.log(" : special_form8 ==> ", this.special_form4.value);
      obj = {
        contest_id: this.contestid,
        round1_track: this.special_form4.value.special_round1_track,
        round2_track: this.special_form4.value.special_round2_track,
        round3_track: this.special_form4.value.special_round3_track,
        round4_track: this.special_form4.value.special_round4_track,
      };
    } else if (totalRounds === 5) {
      console.log(" : totalRounds ====> ", totalRounds);
      console.log(" : special_form8 ==> ", this.special_form5.value);
      obj = {
        contest_id: this.contestid,
        round1_track: this.special_form5.value.special_round1_track,
        round2_track: this.special_form5.value.special_round2_track,
        round3_track: this.special_form5.value.special_round3_track,
        round4_track: this.special_form5.value.special_round4_track,
        round5_track: this.special_form5.value.special_round5_track,
      };
    } else if (totalRounds === 6) {
      console.log(" : totalRounds ====> ", totalRounds);
      console.log(" : special_form8 ==> ", this.special_form6.value);
      obj = {
        contest_id: this.contestid,
        round1_track: this.special_form6.value.special_round1_track,
        round2_track: this.special_form6.value.special_round2_track,
        round3_track: this.special_form6.value.special_round3_track,
        round4_track: this.special_form6.value.special_round4_track,
        round5_track: this.special_form6.value.special_round5_track,
        round6_track: this.special_form6.value.special_round6_track,
      };
    } else if (totalRounds === 7) {
      console.log(" : totalRounds ====> ", totalRounds);
      console.log(" : special_form8 ==> ", this.special_form7.value);
      obj = {
        contest_id: this.contestid,
        round1_track: this.special_form7.value.special_round1_track,
        round2_track: this.special_form7.value.special_round2_track,
        round3_track: this.special_form7.value.special_round3_track,
        round4_track: this.special_form7.value.special_round4_track,
        round5_track: this.special_form7.value.special_round5_track,
        round6_track: this.special_form7.value.special_round6_track,
        round7_track: this.special_form7.value.special_round7_track,
      };
    } else {
      console.log(" : totalRounds ====> ", totalRounds);
      console.log(" : special_form8 ==> ", this.special_form8.value);
      obj = {
        contest_id: this.contestid,
        round1_track: this.special_form8.value.special_round1_track,
        round2_track: this.special_form8.value.special_round2_track,
        round3_track: this.special_form8.value.special_round3_track,
        round4_track: this.special_form8.value.special_round4_track,
        round5_track: this.special_form8.value.special_round5_track,
        round6_track: this.special_form8.value.special_round6_track,
        round7_track: this.special_form8.value.special_round7_track,
        round8_track: this.special_form8.value.special_round8_track,
      };
    }

    console.log(" : obj ==> ", obj);
    this.show_spinner = true;
    this.myMusicService.addContestTrack(obj).subscribe(
      (response) => {
        this.toastr.success(response["message"], "Success!");
        this.show_spinner = false;
        this.contestDetail.close();
        this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.draw();
        });
        this.modal_ref.close();
      },
      (error) => {
        this.toastr.error(error["error"].message, "Error!");
        this.show_spinner = false;
      },
      () => {
        this.show_spinner = false;
      }
    );
  }

  addTrack() {
    let isWhitespace;
    let isValid;
    if (this.trackdata && this.trackdata.name) {
      isWhitespace = this.trackdata.name.trim().length === 0;
      isValid = !isWhitespace;
    }
    if (
      this.trackdata &&
      this.trackdata.name &&
      isValid &&
      this.trackdata.price &&
      this.trackdata.price > 0 &&
      this.trackdata.price.toString().length <= 3 &&
      this.audio_file &&
      this.image_upload
    ) {
      const formdata = new FormData();
      formdata.append("name", this.trackdata.name);
      formdata.append("price", this.trackdata.price);
      formdata.append("audio", this.audio_file);
      formdata.append("image", this.image_upload);
      formdata.append("description", this.trackdata.description);
      this.show_spinner = true;
      this.myMusicService.addTrack(formdata).subscribe(
        (response) => {
          this.trackdata = {};
          this.audio_file = "";
          this.image_upload = "";
          this.add_track_img = "";
          this.trackListstoJoin();
          this.toastr.success(response["message"], "Success!");
          this.datatableElement.dtInstance.then(
            (dtInstance: DataTables.Api) => {
              dtInstance.draw();
            }
          );
          this.modal_ref.close();
        },
        (error) => {
          this.toastr.error(error["error"].message, "Error!");
          this.show_spinner = false;
        },
        () => {
          this.show_spinner = false;
        }
      );
    } else if (!this.audio_file) {
      this.toastr.error("Please select audio file", "Error!");
    } else if (!this.image_upload) {
      this.toastr.error("Please select track image", "Error!");
    } else if (!this.trackdata.name || !isValid) {
      this.toastr.error("Please enter track name", "Error!");
    } else if (!this.trackdata.price) {
      this.toastr.error("Please enter track price", "Error!");
    } else if (this.trackdata.price < 0) {
      this.toastr.error("Track price must be positive value.", "Error!");
    } else if (this.trackdata.price.toString().length !== 3) {
      this.toastr.error("Track price must be in three digits", "Error!");
    } else {
      this.toastr.error("Please provide necessary details", "Error!");
    }
    // }
  }

  // Get all track
  getAllTrack() {
    this.audio_ins = [];
  }

  // Remove track by id
  removeTrack(id: any) {
    const thi = this;
    swal({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((flag) => {
      if (flag.value) {
        thi.myMusicService.deleteTrackById(id).subscribe(
          (response) => {
            this.trackListstoJoin();
            thi.toastr.success(response["message"], "Success!");
            this.datatableElement.dtInstance.then(
              (dtInstance: DataTables.Api) => {
                dtInstance.draw();
              }
            );
          },
          (error) => {
            thi.toastr.error(error["error"].message, "Error!");
          }
        );
      }
    });
  }

  // update track
  updateTrack() {
    let isWhitespace;
    let isValid;
    if (this.trackdata && this.trackdata.name) {
      isWhitespace = this.trackdata.name.trim().length === 0;
      isValid = !isWhitespace;
    }
    if (
      this.trackdata &&
      this.trackdata.name &&
      isValid &&
      this.trackdata.price &&
      this.trackdata.price > 0 &&
      this.trackdata.price.toString().length <= 3 &&
      this.trackdata.image
    ) {
      const formdata = new FormData();
      formdata.append("name", this.trackdata.name);
      formdata.append("price", this.trackdata.price);
      formdata.append("image", this.trackdata.image);
      formdata.append("description", this.trackdata.description);
      this.show_spinner = true;
      this.myMusicService.updateTrack(formdata, this.trackdata._id).subscribe(
        (response) => {
          if (!response["track"]["image"]) {
            this.edit_image = "img/default_img.png";
          }
          this.trackListstoJoin();
          this.datatableElement.dtInstance.then(
            (dtInstance: DataTables.Api) => {
              dtInstance.draw();
            }
          );
          this.toastr.success(response["message"], "Success!");
          this.modal_ref.close();
        },
        (error) => {
          this.toastr.error(error["error"].message, "Error!");
          this.show_spinner = false;
        },
        () => {
          this.show_spinner = false;
        }
      );
    } else if (!this.trackdata.image) {
      this.toastr.error("Please select track image", "Error!");
    } else if (!this.trackdata.name || !isValid) {
      this.toastr.error("Please enter track name", "Error!");
    } else if (!this.trackdata.price) {
      this.toastr.error("Please enter track price", "Error!");
    } else if (this.trackdata.price < 0) {
      this.toastr.error("Track price must be positive.", "Error!");
    } else if (this.trackdata.price.toString().length !== 3) {
      this.toastr.error("Track price must be in three digits", "Error!");
    } else {
      this.toastr.error("Please provide necessary details", "Error!");
    }
  }

  // Remove track image
  removeTrackImage(id: any) {
    const thi = this;
    swal({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(function (flag) {
      if (flag.value) {
        thi.myMusicService.deleteTrackImageById(id).subscribe(
          (response) => {
            thi.getAllTrack();
            thi.edit_image = "img/default_img.png";
            delete this.trackdata["image"];
            thi.toastr.success(response["message"], "Success!");
          },
          (error) => {
            thi.toastr.error(error["error"].message, "Error!");
          }
        );
      }
    });
  }

  // Play audio
  playAudio(name: any, index: any, data: any) {
    // let audio = new Audio();
    // audio.src = this.track_url+name;
    // audio.load();
    // audio.play();
    // if(!this.audio_ins.hasOwnProperty(index)) {
    //   this.audio_ins[index] = audio;
    // }
    data.forEach((ele, idx) => {
      this.audio_ins[idx] = false;
    });
    this.audio_ins[index] = true;
    this.messageService.sendMessage({
      data: data,
      index: index,
      action: "start",
      list: 1,
    });
  }

  // Stop audio
  stopAudio(index, data: any) {
    // this.audio_ins[index].pause();
    // this.audio_ins[index].currentTime = 0;
    // // this.audio_ins[index].stop();
    // delete this.audio_ins[index];
    data.forEach((ele, idx) => {
      this.audio_ins[idx] = false;
    });
    this.messageService.sendMessage({
      data: data,
      index: index,
      action: "stop",
      list: 1,
    });
  }

  // Get all music type
  getAllMusicType() {
    this.myMusicService.getAllMusicType().subscribe((response) => {
      this.music_type_list = response["music"];
    });
  }

  // Get all contest
  getAllContest() {
    this.myMusicService.getAllContest().subscribe((response) => {
      this.contest_list = response["contest"];
      this.ngxService.stop();
    });
  }

  // Add a track to contest
  // addTrackToContest() {
  //   if (this.contest_id) {
  //     let data = {
  //       contest_id: this.contest_id,
  //       //track_id: this._id,
  //       preliminary1_track: this.preliminary1_track
  //     };
  //     this.show_spinner = true;
  //     this.MyMusicService.addTrackToContest(data).subscribe(response => {
  //       this.contest_id = '';
  //       this.modal_ref.close();
  //       this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
  //         dtInstance.draw();
  //       });
  //       this.toastr.success(response['message'], 'Success!');
  //     }, error => {
  //       this.toastr.error(error['error'].message, 'Error!');
  //       this.show_spinner = false;
  //     }, () => {
  //       this.show_spinner = false;
  //     });
  //   } else {
  //     this.toastr.error('Please select at least one contest', 'Error!');
  //   }
  // }

  // Update download status
  updateTrackDownLoadStatus(id: any) {
    this.myMusicService.trackDownload(id).subscribe(
      (response) => {
        this.toastr.success(response["message"], "Success!");
        this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.draw();
        });
      },
      (error) => {
        this.toastr.error(error["error"].message, "Error!");
      }
    );
  }

  // share on facebook
  shareOnFacebook() {
    const track = this.track_data;
    const url =
      "http://" +
      window.location.host +
      "/artist_profile/" +
      track["artist_id"]["_id"] +
      "/track/" +
      track["_id"] +
      "/comments";
    const str =
      "Track Name: " +
      track["name"] +
      "\nArtist: " +
      track["artist_id"]["first_name"] +
      " " +
      track["artist_id"]["last_name"] +
      "\nDescription: " +
      track["description"];

    // var facebookWindow = window.open('https://www.facebook.com/sharer.php?s=100&p[summary]='+encodeURIComponent(str)+"&p[url]="+encodeURIComponent(url), 'facebook-popup', 'height=350,width=600');
    // if(facebookWindow.focus) { facebookWindow.focus(); }
    FB.ui(
      {
        method: "share_open_graph",
        action_type: "og.likes",
        action_properties: JSON.stringify({
          object: {
            "og:url": url,
            "og:title": "AOM",
            "og:description": str,
          },
        }),
      },
      function (response) {}
    );
  }

  // share on twitter
  shareOnTwitter() {
    const track = this.track_data;
    const url =
      "http://" +
      window.location.host +
      "/artist_profile/" +
      track["artist_id"]["_id"] +
      "/track/" +
      track["_id"] +
      "/comments";
    const str =
      "Track Name: " +
      track["name"] +
      "\nArtist: " +
      track["artist_id"]["first_name"] +
      " " +
      track["artist_id"]["last_name"] +
      "\nDescription: " +
      track["description"];
    const twitterWindow = window.open(
      "https://twitter.com/share?url=" +
        encodeURIComponent(url) +
        "&text=" +
        encodeURIComponent(str),
      "twitter-popup",
      "height=350,width=600"
    );
    if (twitterWindow.focus) {
      twitterWindow.focus();
    }
  }

  // share track via email
  share_via_email(flag: boolean) {
    if (flag) {
      this.share_form_validation = !flag;
      this.show_spinner = true;
      const track = this.track_data;
      const url =
        "http://" +
        window.location.host +
        "/artist_profile/" +
        track["artist_id"]["_id"] +
        "/track/" +
        track["_id"] +
        "/comments";
      const data = {
        email: this.share_data["email"],
        track_id: track["_id"],
        url: url,
      };
      this.myMusicService.shareTrackViaEmail(data).subscribe(
        (response) => {
          this.toastr.success(response["message"], "Success!");
          this.emailmodalRef.close();
        },
        (error) => {
          this.toastr.error(error["error"].message, "Error!");
          this.show_spinner = false;
        },
        () => {
          this.show_spinner = false;
        }
      );
    } else {
      this.share_form_validation = !flag;
    }
  }

  // share via sms
  share_via_sms(flag: boolean) {
    if (flag) {
      this.share_form_validation = !flag;
      this.show_spinner = true;
      const track = this.track_data;
      const url =
        "http://" +
        window.location.host +
        "/artist_profile/" +
        track["artist_id"]["_id"] +
        "/track/" +
        track["_id"] +
        "/comments";
      const data = {
        phone_no: this.share_data["phone_no"],
        track_id: track["_id"],
        url: url,
      };
      this.myMusicService.shareTrackViaSms(data).subscribe(
        (response) => {
          this.toastr.success(response["message"], "Success!");
          this.emailmodalRef.close();
          this.share_data = {};
        },
        (error) => {
          this.toastr.error(error["error"].message, "Error!");
          this.show_spinner = false;
        },
        () => {
          this.show_spinner = false;
        }
      );
    } else {
      this.share_form_validation = !flag;
    }
  }

  // copy share track link
  copy_link() {
    const track = this.track_data;
    const url =
      "http://" +
      window.location.host +
      "/artist_profile/" +
      track["artist_id"]["_id"] +
      "/track/" +
      track["_id"] +
      "/comments";
    const textArea = document.createElement("textarea");
    textArea.value = url;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
  }

  getMimetype = (signature) => {
    switch (signature) {
      // case '89504E47':
      //   return 'image/png';
      // case '47494638':
      //   return 'image/gif';
      // case 'FFD8FFDB':
      // case 'FFD8FFE0':
      // case 'FFD8FFE1':
      //   return 'image/jpeg';
      // case '3C3F786D':
      //   return 'image/svg+xml';
      // case '00018':
      // case '0001C':
      // case '00020':
      //   return 'video/mp4';
      // case '1A45DFA3':
      //   return 'video/webm';
      case "4944333":
      case "FFFB900":
      case "FFFB906C":
      case "FFF340C4":
      case "FFFB904C":
      case "FFFB9240":
        return "audio/mp3";
      // case "4944333":
      //   return "audio/mpeg";
      case "4944334":
        return "audio/mpeg";
      case "464F524D":
        return "audio/aiff";

      case "464F524D":
        return "audio/x-aiff";

      case "52494646":
        return "audio/wav";
      case "664C6143":
        return "audio/flac";
      case "FFF15080":
        return "audio/vnd.dlna.adts";
      // case '4944333':
      //   return 'audio/mp3';
      // case '4357539':
      //   return 'application/x-shockwave-flash';
      // case '504B0304':
      // case '504B34':
      //   return 'application/zip';
      // case '25504446':
      //   return 'application/pdf';
      default:
        return "Unknown filetype";
    }
  };

  getImageMimetype = (signature) => {
    switch (signature) {
      case "89504E47":
        return "image/png";
      // case '47494638':
      //   return 'image/gif';
      case "FFD8FFDB":
      case "FFD8FFE0":
      case "FFD8FFE1":
        return "image/jpeg";
      case "3C3F786D":
        return "image/svg+xml";
      case "00018":
      case "0001C":
      case "00020":
      //   return 'video/mp4';
      // case '1A45DFA3':
      //   return 'video/webm';
      // case '4944333':
      //   return 'audio/mp3';
      // case '4357539':
      //   return 'application/x-shockwave-flash';
      // case '504B0304':
      // case '504B34':
      //   return 'application/zip';
      // case '25504446':
      //   return 'application/pdf';
      default:
        return "Unknown filetype";
    }
  };

  get round1_track() {
    return this.contesttrack_form.get("round1_track1");
  }
  get round2_track() {
    return this.contesttrack_form.get("round2_track");
  }
  get round3_track() {
    return this.contesttrack_form.get("round3_track");
  }
  get semi_final_track() {
    return this.contesttrack_form.get("semi_final_track");
  }
  get final_track() {
    return this.contesttrack_form.get(" final_track");
  }
  get contest_id() {
    return this.contesttrack_form.get(" contest_id");
  }

  get spreliminary1_track() {
    return this.standard_form.get("spreliminary1_track");
  }
  get spreliminary2_track() {
    return this.standard_form.get("spreliminary2_track");
  }
  get sround1_track() {
    return this.standard_form.get("sround1_track1");
  }
  get sround2_track() {
    return this.standard_form.get("sround2_track");
  }
  get sround3_track() {
    return this.standard_form.get("sround3_track");
  }
  get ssemi_final_track() {
    return this.standard_form.get("ssemi_final_track");
  }
  get sfinal_track() {
    return this.standard_form.get("sfinal_track");
  }
  get scontest_id() {
    return this.standard_form.get("scontest_id");
  }

  get special_round1_track() {
    return this.special_form.get("sround1_track1");
  }

  submit_contest_track(id, contestid, type) {
    this.spacialContestData = {};
    this.contestType = type;
    this.contestDetail = this.modalService.open(id, {
      centered: true,
      windowClass: "modal-wrapper",
      backdrop: true,
    });
    this.contestid = contestid;
    this.contesttrack_data["contest_id"] = contestid;
    this.submitContest.close();
    this.myMusicService.contestDetail(this.contestid).subscribe(
      (res) => {
        console.log(" : res ==> ", res);
        if (res["status"] === 1) {
          if (res["contest"].contest_type === "special") {
            this.spacialContestData = res["contest"];
            console.log(
              " : this.spacialContestData ==> ",
              this.spacialContestData
            );
          }
        }
      },
      (error) => {
        console.log(" : error ==> ", error);
      }
    );
  }
}
