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
  ModelRef: BsModalRef;
  admin_data: any = {};
  show_spinner: Boolean = false;
  admin_formgroup: FormGroup;
  forget_formgroup: FormGroup;
  forget_data: any = {};
  forget_validation: boolean = false;
  constructor(
    private adminLoginService: AdminLoginService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private modalService: BsModalService
  ) {
    this.admin_formgroup = this.fb.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required]],
    });
    this.forget_formgroup = this.fb.group({
      email: ['', [Validators.required, Validators.email, this.noWhitespaceValidator]]
    });
  }

  noWhitespaceValidator(control: FormControl) {
    if (typeof (control.value || '') === 'string' || (control.value || '') instanceof String) {
      const isWhitespace = (control.value || '').trim().length === 0;
      const isValid = !isWhitespace;
      return isValid ? null : { 'whitespace': true };
    }
  }
  ngOnInit() {

  }

  signin() {
    this.show_spinner = true;
    this.adminLoginService.login(this.admin_data).subscribe(response => {
      localStorage.setItem('user', JSON.stringify(response));
      this.router.navigate(['/admin/home']);
    }, error => {
      this.toastr.error(error['error'].message, 'Error!');
      this.show_spinner = false;
    }, () => {
      this.show_spinner = false;
    });
  }

  openContestModel(template: any) {
    this.forget_data = {};
    this.forget_validation = false;
    this.ModelRef = this.modalService.show(template, { backdrop: 'static' });
  }

  // Forget password
  forgetPassword(flag) {
    if (flag) {
      this.show_spinner = true;
      this.adminLoginService.forgetPassword(this.forget_data).subscribe((response) => {
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
    this.forget_validation = !flag;
  }
}
