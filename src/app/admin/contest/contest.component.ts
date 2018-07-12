import { Component, OnInit, ViewChild } from '@angular/core';
import { ContestService } from './contest.service';
import { DataTableDirective } from 'angular-datatables';
import { ToastrService } from 'ngx-toastr';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

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
  contest_data : any = [];
  search_str : any = '';
  sort : any = -1;
  participant_data : any = [];
  day : any = [];
  month : any = [];
  year : any = [];
  music_type : any = [];

  constructor(
    private ContestService : ContestService,
    private toastr: ToastrService,
    private modalService: BsModalService
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
    for(let i = 1900; i<= (new Date()).getFullYear(); i++ ) {
      this.year.push(i);
    }
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
}