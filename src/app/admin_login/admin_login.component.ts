import { Component, OnInit } from '@angular/core';
import { AdminLoginService } from './admin_login.service';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-admin_login',
  templateUrl: './admin_login.component.html',
  styleUrls: []
})
export class AdminLoginComponent implements OnInit {
  ModelRef : BsModalRef;
  admin_data : any = {};
  show_spinner : Boolean = false;
  admin_formgroup : FormGroup;
  forget_formgroup : FormGroup;
  forget_data : any = {};
  constructor(private AdminLoginService : AdminLoginService, 
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private modalService: BsModalService
  ) {
    this.admin_formgroup = this.fb.group({
      'email' : ['', [Validators.required, Validators.email]],
      'password' : ['', [Validators.required]],
    });
    this.forget_formgroup = this.fb.group({
      email : ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit() {
   
  }

  signin() {
    this.show_spinner = true;
    this.AdminLoginService.login(this.admin_data).subscribe(response => {
      console.log(response);
      localStorage.setItem('user', JSON.stringify(response));
      this.router.navigate(['/admin']);
    }, error => {
      this.toastr.error(error['error'].message, 'Error!');
      this.show_spinner = false;
    }, () => {
      this.show_spinner = false;
    });
  }
  
  openContestModel(template : any) {
    this.ModelRef = this.modalService.show(template, {backdrop : 'static'});
  }

  // Forget password
  forgetPassword() {
    this.show_spinner = true;
    this.AdminLoginService.forgetPassword(this.forget_data).subscribe((response) => {
      this.forget_data = {};
      this.ModelRef.hide();
      this.toastr.success(response['message'], 'Success!');
    }, (error) => {
      this.toastr.error(error['error'].message, 'Error!');
      this.show_spinner = false;
    }, () => {
      this.show_spinner = false;
    });
  }
}
