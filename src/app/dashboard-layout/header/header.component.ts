import { Component, OnInit, OnDestroy } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HeaderService } from './header.service'; 
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy  {
  user : any = ''; 
  login_form : FormGroup;
  forget_form : FormGroup;
  show_spinner : boolean = false;
  userdata : any = {};
  forget_pwd_data : any = {};
  private modalRef: NgbModalRef;
  private modalForgetRef: NgbModalRef;
  constructor(private modalService: NgbModal,
     private fb: FormBuilder, 
     private HeaderService : HeaderService, 
     private toastr: ToastrService,
     private router: Router
    ) {
    this.user = JSON.parse(localStorage.getItem('user'));
    if(this.user && this.user.artist) {
      this.user.artist['image'] = typeof this.user.artist['image'] != 'undefined' ? environment.API_URL+environment.ARTIST_IMG+this.user.artist['image'] : '';
    } else if(this.user && this.user.user) {
      this.user.user['image'] = typeof this.user.user['image'] != 'undefined' ? environment.API_URL+environment.USER_IMG+this.user.user['image'] : '';
    }
    this.login_form = this.fb.group({
      email : ['', [Validators.required]],
      password : ['', [Validators.required]],
      type : ['', [Validators.required]]
    });
    this.forget_form = this.fb.group({
      email : ['', [Validators.required, Validators.email]],
      type : ['', [Validators.required]]
    });
   }

  ngOnInit() {
  }

  ngOnDestroy() { 
    console.log('header destroy');
    if(this.modalRef) {
      this.modalRef.close();
    } 
    if(this.modalForgetRef) {
      this.modalForgetRef.close();
    }
   }
  openVerticallyCentered(content) {
    this.show_spinner = false;
    this.userdata = {};
    this.modalRef = this.modalService.open(content, { centered: true });
  }

  openForgetPasswordModal(content) {
    this.modalRef.close();
    this.modalForgetRef = this.modalService.open(content, { centered: true });
  }
  login() { 
    console.log('login', this.userdata);
    this.show_spinner = true;
    if(this.userdata['type'] == 'artist') {
      this.HeaderService.artist_login(this.userdata).subscribe(response => {
        console.log(response);
        localStorage.setItem('user', JSON.stringify(response));
        this.toastr.success('Login Done', 'Success!');
        this.modalRef.close();
        this.user = JSON.parse(localStorage.getItem('user'));
        if(this.user && this.user.artist) {
          this.user.artist['image'] = typeof this.user.artist['image'] != 'undefined' ? environment.API_URL+environment.ARTIST_IMG+this.user.artist['image'] : '';
        } else if(this.user && this.user.user) {
          this.user.user['image'] = typeof this.user.user['image'] != 'undefined' ? environment.API_URL+environment.USER_IMG+this.user.user['image'] : '';
        }
        this.router.navigate(['']);
      }, error => {
        console.log(error);
        this.show_spinner = false;
        this.toastr.error(error['error'].message, 'Error!');
      }, () => {
        this.show_spinner = false;
      });
    } else {
      this.HeaderService.user_login(this.userdata).subscribe(response => {
        console.log(response);
        this.toastr.success('Login Done', 'Success!');
        localStorage.setItem('user', JSON.stringify(response));
        this.modalRef.close();
        this.user = JSON.parse(localStorage.getItem('user'));
        if(this.user && this.user.artist) {
          this.user.artist['image'] = typeof this.user.artist['image'] != 'undefined' ? environment.API_URL+environment.ARTIST_IMG+this.user.artist['image'] : '';
        } else if(this.user && this.user.user) {
          this.user.user['image'] = typeof this.user.user['image'] != 'undefined' ? environment.API_URL+environment.USER_IMG+this.user.user['image'] : '';
        }
        this.router.navigate(['']);
      }, error => {
        console.log(error);
        this.show_spinner = false;
        this.toastr.error(error['error'].message, 'Error!');
      }, () => {
        this.show_spinner = false;
      });
    }
  }

  forgetPassword() {
    this.show_spinner = true;
    if(this.forget_pwd_data && this.forget_pwd_data.type == 'artist') {
      this.HeaderService.artistForgetPassword({email : this.forget_pwd_data.email}).subscribe(response => {
        this.toastr.success(response['message'], 'Success!');
      }, error => {
        this.toastr.error(error['error'].message, 'Error!');
        this.show_spinner = false;
      }, () => {
        this.forget_pwd_data = {};
        this.show_spinner = false;
      });
    } else {
      this.HeaderService.userForgetPassword({email : this.forget_pwd_data.email}).subscribe(response => {
        console.log('user ', response);
        this.toastr.success(response['message'], 'Success!');
      }, error => {
        this.toastr.error(error['error'].message, 'Error!');
        this.show_spinner = false;
      }, () => {
        this.forget_pwd_data = {};
        this.show_spinner = false;
      });
    }
  }

}
