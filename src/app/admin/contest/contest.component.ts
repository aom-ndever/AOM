import { Component, OnInit, ViewChild } from '@angular/core';
import { ContestService } from './contest.service';
import { DataTableDirective } from 'angular-datatables';
import { ToastrService } from 'ngx-toastr';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Component({
  selector: 'app-contest',
  templateUrl: './contest.component.html',
  styleUrls: []
})
export class ContestComponent implements OnInit {
  @ViewChild(DataTableDirective)
  datatableElement: DataTableDirective;
  modalRef: BsModalRef;
  contestModelRef : BsModalRef;
  dtOptions: DataTables.Settings = {};
  is_new_or_existing : any = 1;
  contest_data : any = [];
  existing_contest_list : any = [];
  exist_contest : any = {};
  region_list : any = [];
  state_list : any = [];
  search_str : any = '';
  sort : any = -1;
  participant_data : any = [];
  day : any = [];
  month : any = [];
  year : any = [];
  music_type : any = [];
  contest_detail : any = {};
  show_spinner : boolean = false;
  contest_validation : FormGroup;
  is_valid : boolean =  false;
  constructor(
    private ContestService : ContestService,
    private toastr: ToastrService,
    private modalService: BsModalService,
    private fb: FormBuilder
  ) {
    this.day = [];
    this.month = [];
    this.year = [];
    for(let i = 1; i<= 31; i++ ) {
      this.day.push(i);
    }
    for(let i = 1; i<= 12; i++ ) {
      this.month.push(i);
    }
    for(let i = (new Date()).getFullYear(); i<= 2100; i++ ) {
      this.year.push(i);
    }
    this.contest_validation = this.fb.group({
      type : [],
      name : ['', [Validators.required]],
      day : ['', [Validators.required]],
      month : ['', [Validators.required]],
      year : ['', [Validators.required]],
      duration : ['', [Validators.required]],
      round : [],
      music_type : ['', [Validators.required]],
      region : ['', [Validators.required]],
      state : ['', [Validators.required]],
      participate : []
      
    });
  }

  ngOnInit() {
    const that = this;
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      serverSide: true,
      processing: true,
      searching: false,
      ordering: false,
      lengthChange: false,
      responsive: true,
      scrollY :'200px',
      scrollCollapse: true,
      ajax: (dataTablesParameters: any, callback) => {
        setTimeout(() => {
          dataTablesParameters['search'] = that.search_str;
          dataTablesParameters['sort'] = [this.sort == -1 ? {"field" : "end_date", value : -1} : {"field" : "start_date", value : 1}];
          that.ContestService.getAllContest(dataTablesParameters).subscribe(response => {
            that.contest_data = response['contest']['participate'];
            that.contest_data.forEach((ele) => {
              ele['days'] = that.getDaysDiff(ele['start_date'], new Date());
            });
                callback({
                  recordsTotal: response['contest']['recordsTotal'],
                  recordsFiltered: response['contest']['recordsTotal'],
                  data: []
                });
          });
        },0);
      }
    };
    this.getAllMusicTypes();
    this.getAllExistingContest();
    this.getAllRegion();
  }

  // Get day difference between dates
  getDaysDiff(dt1 : any, dt2 : any) {
    let date1 = new Date(dt1);
    let date2 = new Date(dt2);
    let timeDiff = Math.abs(date2.getTime() - date1.getTime());
    let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
    return diffDays;
  }

  openModal(template: any, id : any) {
    let data = {
      contest_id : id
    };
    this.ContestService.getContestParticipants(data).subscribe((response) => {
      this.participant_data =  response['artist'];
    });
    this.modalRef = this.modalService.show(template, { backdrop : 'static' });
  }

  openContestModel(template : any) {
    this.contestModelRef = this.modalService.show(template, {backdrop : 'static'});
    this.is_valid = false;
    this.contest_detail = {
      no_of_round : 0
    };
  }

  sortArtist() {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.draw();
    });
  }

  // Get all music type
  getAllMusicTypes() {
    this.ContestService.getAllMusicType().subscribe((response) => {
      this.music_type = response['music'];
    });
  }

  // Get all existing contest
  getAllExistingContest() {
    this.ContestService.getExistingContest().subscribe((response) => {
      this.existing_contest_list = response['contest']['contest'];
    });
  }

  // get all region
  getAllRegion() {
    this.ContestService.getAllRegion().subscribe((response) => {
      this.region_list = response['Region'];
    });
  }

  // Get state from region
  getStateFromRegion(id : any) {
    if(id && id != '') {
      let data = {
        region : id
      };
      this.ContestService.getStateByRegion(data).subscribe((response) => {
        this.state_list = response['state'];
      });
    }
  }

  // Add new contest 
  saveContest(flag : boolean) {
    if(flag) { 
      this.is_valid = !flag;
      if(this.is_new_or_existing == 1) {
        let stdt = new Date(this.contest_detail['year'], this.contest_detail['month'], this.contest_detail['day']);
        //let enddt = new Date(stdt.getTime() + this.contest_detail['duration'] * 24 * 60 * 60 * 1000);
        let data = {
          name : this.contest_detail['name'],
          music_type : this.contest_detail['music_type'],
          region : this.contest_detail['region'],
          state : this.contest_detail['state'],
          round : 1,
          start_date : stdt,
          duration : this.contest_detail['duration']
        };
        this.show_spinner = true;
        this.ContestService.addNewContest(data).subscribe((response) => {
          this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
            dtInstance.draw();
          });
          this.contest_detail = {};
          this.contestModelRef.hide();
          this.toastr.success(response['message'], 'Success!');
        }, (error) => {
          this.toastr.error(error['error'].message,  'Error!');
          this.show_spinner = false;
        }, () => {
          this.show_spinner = false;
        });
      } else {
        let stdt = new Date(this.contest_detail['year'], this.contest_detail['month'], this.contest_detail['day']);
        //let enddt = new Date(stdt.getTime() + this.contest_detail['duration'] * 24 * 60 * 60 * 1000);
        let data = {
          contest_id : this.contest_detail['contest_id']['_id'],
          // music_type : this.contest_detail['music_type'],
          region : this.contest_detail['region'],
          state : this.contest_detail['state'],
          round : this.contest_detail['no_of_round'],
          start_date : stdt,
          duration : +this.contest_detail['duration']
        };
        this.show_spinner = true;
        this.ContestService.addExistingContest(data).subscribe((response) => {
          this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
            dtInstance.draw();
          });
          this.contest_detail = {};
          this.contestModelRef.hide();
          this.toastr.success(response['message'], 'Success!');
        }, (error) => {
          this.toastr.error(error['error'].message,  'Error!');
          this.show_spinner = false;
        }, () => {
          this.show_spinner = false;
        });
      }
    } else {
      this.is_valid = !flag;
    }
    
  }

  // Select exisiting contest
  selectContest(idx : any) {
    this.contest_detail = this.existing_contest_list[idx];
    console.log(this.contest_detail);
    console.log(this.contest_detail['start_date']);
    let dt = new Date(this.contest_detail['start_date']);
    console.log(dt);
    this.contest_detail['no_of_round'] = this.contest_detail['round'] + 1;
    this.contest_detail['day'] = dt.getDay();
    this.contest_detail['month'] = dt.getMonth();
    this.contest_detail['year'] = dt.getFullYear();
    this.contest_detail['music_type'] = this.contest_detail['contest_id']['music_type'];
    this.contest_detail['region'] = this.contest_detail['region']['_id'];
    this.getStateFromRegion(this.contest_detail['region']);
    this.contest_detail['state'] = this.contest_detail['state']['_id'];
  }
}