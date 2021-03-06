import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from './users.service';
import { DataTableDirective } from 'angular-datatables';
import { ToastrService } from 'ngx-toastr';
import { BsModalService } from 'ngx-bootstrap/modal';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { environment } from '../../../../src/environments/environment';
import swal from 'sweetalert2';
class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: []
})
export class UsersComponent implements OnInit {
  @ViewChild(DataTableDirective)
  datatableElement: DataTableDirective;
  modalRef: BsModalRef;
  dtOptions: DataTables.Settings = {};
  user_data: any = [];
  search_str: any = '';
  region_filter: any = [];
  state_list: any = [];
  sort_by: any = -1;
  user_flag: any = [];
  user_detail: any = [];
  user_following: any = [];
  user_id: any = '';
  user_img_url: any = environment.API_URL + environment.USER_IMG;
  user_role: any = '';
  user_row_cnt = 1;
  constructor(
    private usersService: UsersService,
    private toastr: ToastrService,
    private modalService: BsModalService
  ) {
    this.getAllState();
    this.user_role = JSON.parse(localStorage.getItem('user'));
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
      responsive: true,
      scrollCollapse: true,
      lengthChange: false,
      language: {
        'processing': '<i class="fa fa-spinner fa-spin loader"></i>',
      },
      ajax: (dataTablesParameters: any, callback) => {
        setTimeout(() => {
          dataTablesParameters['search'] = that.search_str;
          dataTablesParameters['sort_by'] = that.sort_by;
          dataTablesParameters['filter'] = [];
          if (that.region_filter.length) {
            dataTablesParameters['filter'].push(
              { 'field': 'state', value: this.region_filter }
            );
          }
          that.usersService.getAllUser(dataTablesParameters).subscribe(response => {
            that.user_data = response['user']['user'];
            callback({
              recordsTotal: response['user']['recordsTotal'],
              recordsFiltered: response['user']['recordsTotal'],
              data: []
            });
            that.user_row_cnt = (dataTablesParameters['start'] + 1);
          });
        }, 0);
      }
    };
  }

  // suspend user
  suspendUser(id: any) {
    swal({
      title: 'Are you sure?',
      text: '',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((flag) => {
      if (flag.value) {
        this.usersService.suspendUser(id).subscribe((response) => {
          this.toastr.success(response['message'], 'Success!');
          this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
            dtInstance.draw();
          });
        }, (error) => {
          this.toastr.error(error['error'].message, 'Error!');
        });
      }
    });

  }
  // Filter user based on search string
  filterBasedOnSearch(e: any) {
    if (e.keyCode === 13) {
      const that = this;
      this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.draw();
      });
    }
  }
  // Sort user data
  sortUser(val: any) {
    const that = this;
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.draw();
    });
  }
  openModal(template: any, id: any) {
    const data = {
      user_id: id
    };
    this.modalRef = this.modalService.show(template, { backdrop: 'static' });

    this.usersService.getUserFollowingArtist(data).subscribe((response) => {
      this.user_following = response['user'];
    });
    this.usersService.getUserById(data).subscribe((response) => {
      this.user_detail = response['user'];
      if (this.user_detail['dob']) {
        const dob = new Date(this.user_detail['dob']);
        const dt = new Date();
        this.user_detail['old'] = dt.getFullYear() - dob.getFullYear();
      }
    });
    this.usersService.getFlagedUser(data).subscribe((response) => {
      this.user_flag = response['user'];
    });
  }
  // get all state
  getAllState() {
    this.usersService.getAllState().subscribe((response) => {
      this.state_list = response['state'];
    });
  }
  // Add region for filtering
  addRegionForFilter(flag: any, val: any) {
    if (flag) {
      this.region_filter.push(val);
    } else {
      const index = this.region_filter.indexOf(val);
      this.region_filter.splice(index, 1);
    }
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.draw();
    });
  }
}
