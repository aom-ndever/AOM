import { Component, OnInit, QueryList, ViewChildren  } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { RolesService } from './roles.service';
import { DataTableDirective } from 'angular-datatables';
import { ToastrService } from 'ngx-toastr';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: []
})
export class RolesComponent implements OnInit {
  @ViewChildren(DataTableDirective) 
  dtElements: QueryList<DataTableDirective>;

  show_spinner : boolean = false;
  modalRef: BsModalRef;
  contestModelRef : BsModalRef;
  dtOptions: DataTables.Settings[] = [];
  request_data : any = [];
  roles_data : any = [];
  search_str : any = '';
  sort : any = 'name';
  sort_request : any = -1;
  year : any = [];
  music_type : any = [];
  user_data : any = {};
  add_admin : FormGroup;
  add_admin_validation : boolean = false;
  passwordFormGroup: FormGroup;
  user : any = {};
  role_row_cnt = 1;
  req_row_cnt = 1;
  constructor(
    private RolesService : RolesService,
    private toastr: ToastrService,
    private modalService: BsModalService,
    private fb: FormBuilder
  ) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.passwordFormGroup = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      conf: ['', [Validators.required, Validators.minLength(6)]]
    }, {
      validator : this.passwordMatchValidator
    });
    this.add_admin = this.fb.group({
      'fname' : ['', [Validators.required, this.noWhitespaceValidator]],
      'lname' : ['', [Validators.required, this.noWhitespaceValidator]],
      'account_type' : ['', [Validators.required]],
      'email' : ['', [Validators.required, Validators.email]],
      passwordFormGroup1 : this.passwordFormGroup
    });
  }

  passwordMatchValidator(g: FormGroup) {
      return g.get('password').value === g.get('conf').value ? null : g.get('conf').setErrors({'mismatch': true});
  }
  noWhitespaceValidator(control: FormControl) {
      if(typeof (control.value || '') === 'string' || (control.value || '') instanceof String) {
        let isWhitespace = (control.value || '').trim().length === 0;
        let isValid = !isWhitespace;
        return isValid ? null : { 'whitespace': true }
      }
  }
  ngOnInit() {
    const that = this;
    this.dtOptions[0] = {
      pagingType: 'full_numbers',
      pageLength: 5,
      serverSide: true,
      processing: true,
      searching: false,
      ordering: false,
      lengthChange: false,
      scrollCollapse: true,
      ajax: (dataTablesParameters: any, callback) => {
        setTimeout(() => {
          dataTablesParameters['sort'] = [{"field" : this.sort, value : 1}];
          that.RolesService.getAllAdministrator(dataTablesParameters).subscribe(response => {
            that.roles_data = response['admin'];
            
            callback({
              recordsTotal: response['recordsTotal'],
              recordsFiltered: response['recordsTotal'],
              data: []
            });
            that.role_row_cnt = (dataTablesParameters['start'] + 1);
          });
        },0);
      }
    };
    this.dtOptions[1] = {
      pagingType: 'full_numbers',
      pageLength: 5,
      serverSide: true,
      processing: true,
      searching: false,
      ordering: false,
      lengthChange: false,
      scrollCollapse: true,
      ajax: (dataTablesParameters: any, callback) => {
        setTimeout(() => {
          dataTablesParameters['sort'] = [this.sort_request == -1 ? {"field" : "end_date", value : -1} : {"field" : "start_date", value : 1}];
          that.RolesService.getAllRequest(dataTablesParameters).subscribe(response => {
            that.request_data = response['contest']['contest'];
            
            callback({
              recordsTotal: response['contest']['recordsTotal'],
              recordsFiltered: response['contest']['recordsTotal'],
              data: []
            });
            that.req_row_cnt = (dataTablesParameters['start'] + 1);
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

  openContestModel(template : any) {
    this.user_data = {};
    this.add_admin_validation = false;
    this.contestModelRef = this.modalService.show(template, {backdrop : 'static'});
  }

  sortRole(idx : any) {
    this.dtElements.forEach((dtElement: DataTableDirective, index: number) => {
      if(idx == index) {
        dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.draw();
        });
      }
    });
  }

  sortRequest(idx : any) {
    this.dtElements.forEach((dtElement: DataTableDirective, index: number) => {
      if(idx == index) {
        dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.draw();
        });
      }
    });
  }
  // Accept contest request
  acceptRequest(id : any,idx : any) {
    let thi = this;
    swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Accept it!'
    }).then((flag) =>  {
      if(flag.value) {
        thi.RolesService.acceptContestRequest(id).subscribe(response =>{
          thi.toastr.success(response['message'], 'Success!');
          thi.dtElements.forEach((dtElement: DataTableDirective, index: number) => {
            if(idx == index) {
              dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
                dtInstance.draw();
              });
            }
          });
        }, error => {
          thi.toastr.error(error['error'].message, 'Error!');
        });
      }
    });
  }
  // Reject contest request
  rejectRequest(id : any,idx : any) {
    let thi = this;
    swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Reject it!'
    }).then((flag) =>  {
      if(flag.value) {
        thi.RolesService.rejectContestRequest(id).subscribe(response =>{
          thi.toastr.success(response['message'], 'Success!');
          thi.dtElements.forEach((dtElement: DataTableDirective, index: number) => {
            if(idx == index) {
              dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
                dtInstance.draw();
              });
            }
          });
        }, error => {
          thi.toastr.error(error['error'].message, 'Error!');
        });
      }
    });
  }

  // Get all music type
  getAllMusicTypes() {
    this.RolesService.getAllMusicType().subscribe((response) => {
      this.music_type = response['music'];
    });
  }

  // Create new admin
  addNewAdmin(idx : any, flag) {
    if(flag) {
      this.show_spinner = true;
      this.RolesService.addNewAdmin(this.user_data).subscribe((response) => {
        this.dtElements.forEach((dtElement: DataTableDirective, index: number) => {
          if(idx == index) {
            dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
              dtInstance.draw();
            });
          }
        });
        this.toastr.success(response['message'], 'Success!');
        this.contestModelRef.hide();
      }, (error) => {
        this.toastr.error(error['error'].message, 'Error!');
        this.show_spinner = false;
      }, () => {
        this.show_spinner = false;
      });
    }
    this.add_admin_validation = !flag;
  }
  // remove admin 
  removeAdmin(id : any, idx : any) {
    let thi = this;
    swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((flag) => {
      if(flag.value) {
        thi.RolesService.deleteAdmin(id).subscribe(response =>{
          thi.toastr.success(response['message'], 'Success!');
          thi.dtElements.forEach((dtElement: DataTableDirective, index: number) => {
            if(idx == index) {
              dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
                dtInstance.draw();
              });
            }
          });
        }, error => {
          thi.toastr.error(error['error'].message, 'Error!');
        });
      }
      
    });
  }
  // suspend admin account
  suspendAdmin(id : any, idx : any, status) {
    let thi = this;
    swal({
      title: 'Are you sure?',
      text: "You want to suspend this account!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes,'+(status == 'suspended' ? ' un-suspend' : ' suspend' )+' it!'
    }).then((flag) => {
      if(flag.value) {
        thi.RolesService.suspendAdmin(id).subscribe(response =>{
          thi.toastr.success(response['message'], 'Success!');
          thi.dtElements.forEach((dtElement: DataTableDirective, index: number) => {
            if(idx == index) {
              dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
                dtInstance.draw();
              });
            }
          });
        }, error => {
          thi.toastr.error(error['error'].message, 'Error!');
        });
      }
      
    });
  }
}