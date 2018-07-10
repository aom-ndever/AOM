import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { RolesService } from './roles.service';
import { DataTableDirective } from 'angular-datatables';
import { ToastrService } from 'ngx-toastr';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
declare var swal: any;
@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: []
})
export class RolesComponent implements OnInit {
  @ViewChild(DataTableDirective)
  datatableElement: DataTableDirective;
  show_spinner : boolean = false;
  modalRef: BsModalRef;
  contestModelRef : BsModalRef;
  dtOptions: DataTables.Settings = {};
  roles_data : any = [];
  search_str : any = '';
  sort : any = -1;
  year : any = [];
  music_type : any = [];
  user_data : any = {};
  add_admin : FormGroup;
  passwordFormGroup: FormGroup;
  user : any = {};
  constructor(
    private RolesService : RolesService,
    private toastr: ToastrService,
    private modalService: BsModalService,
    private fb: FormBuilder
  ) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.passwordFormGroup = this.fb.group({
      password: ['', Validators.minLength(6)],
      conf: ['',  Validators.minLength(6)]
    }, {
      validator : this.passwordMatchValidator
    });
    this.add_admin = this.fb.group({
      'fname' : ['', [Validators.required]],
      'lname' : ['', [Validators.required]],
      'account_type' : ['', [Validators.required]],
      'email' : ['', [Validators.required, Validators.email]],
      passwordFormGroup1 : this.passwordFormGroup
    });
  }

  passwordMatchValidator(g: FormGroup) {
      return g.get('password').value === g.get('conf').value ? null : g.get('conf').setErrors({'mismatch': true});
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
      ajax: (dataTablesParameters: any, callback) => {
        setTimeout(() => {
          dataTablesParameters['sort'] = [this.sort == -1 ? {"field" : "end_date", value : -1} : {"field" : "start_date", value : 1}];
          that.RolesService.getAllAdministrator(dataTablesParameters).subscribe(response => {
            that.roles_data = response['admin'];
            
            callback({
              recordsTotal: response['recordsTotal'],
              recordsFiltered: response['recordsTotal'],
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
    this.RolesService.getAllMusicType().subscribe((response) => {
      this.music_type = response['music'];
    });
  }

  // Create new admin
  addNewAdmin() {
    this.show_spinner = true;
    this.RolesService.addNewAdmin(this.user_data).subscribe((response) => {
      this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.draw();
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
  // remove admin 
  removeAdmin(id : any) {
    let thi = this;
    swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(function(flag) {
      thi.RolesService.deleteAdmin(id).subscribe(response =>{
        thi.toastr.success(response['message'], 'Success!');
        thi.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.draw();
        });
      }, error => {
        thi.toastr.error(error['error'].message, 'Error!');
      });
    });
  }
  // suspend admin account
  suspendAdmin(id : any) {
    let thi = this;
    swal({
      title: 'Are you sure?',
      text: "You want to suspend this account!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, suspend it!'
    }).then(function(flag) {
      thi.RolesService.suspendAdmin(id).subscribe(response =>{
        thi.toastr.success(response['message'], 'Success!');
        thi.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.draw();
        });
      }, error => {
        thi.toastr.error(error['error'].message, 'Error!');
      });
    });
  }
}