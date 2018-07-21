import { Component, OnInit, OnDestroy } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs/Subscription';
import { HeaderService } from './header.service'; 
import { environment } from '../../../environments/environment';
import { MessageService } from '../../shared/message.service';
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
  login_validation : boolean = false;
  userdata : any = {};
  forget_pwd_data : any = {};
  subscription: Subscription;
  toggleMenu : boolean = false;
  private modalRef: NgbModalRef;
  private modalForgetRef: NgbModalRef;
  constructor(private modalService: NgbModal,
     private fb: FormBuilder, 
     private HeaderService : HeaderService, 
     private toastr: ToastrService,
     private router: Router,
     private MessageService : MessageService
    ) {
    this.user = JSON.parse(localStorage.getItem('user'));
    if(this.user && this.user.artist) {
      this.user.artist['image'] = typeof this.user.artist['image'] != 'undefined' ? environment.API_URL+environment.ARTIST_IMG+this.user.artist['image'] : '';
    } else if(this.user && this.user.user) {
      this.user.user['image'] = typeof this.user.user['image'] != 'undefined' ? environment.API_URL+environment.USER_IMG+this.user.user['image'] : '';
    }
    this.subscription = this.MessageService.getMessage().subscribe((response) => {
      if(response && response['updateProfile']) {
        setTimeout(() => {
          this.user = JSON.parse(localStorage.getItem('user'));
          if(this.user && this.user.artist) {
            this.user.artist['image'] = typeof this.user.artist['image'] != 'undefined' ? environment.API_URL+environment.ARTIST_IMG+this.user.artist['image'] : '';
          } else if(this.user && this.user.user) {
            this.user.user['image'] = typeof this.user.user['image'] != 'undefined' ? environment.API_URL+environment.USER_IMG+this.user.user['image'] : '';
          }
        }, 1000);
      }
    });
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
    this.subscription.unsubscribe();
   }
  openVerticallyCentered(content) {
    this.show_spinner = false;
    this.userdata = {};
    this.modalRef = this.modalService.open(content, { centered: true, windowClass : 'modal-wrapper' });
  }

  openForgetPasswordModal(content) {
    this.modalRef.close();
    this.modalForgetRef = this.modalService.open(content, { centered: true });
  }
  login(flag : boolean) { 
    console.log('login', this.userdata);
    
    if(this.userdata['type'] == 'artist' && flag) {
      this.show_spinner = true;
      this.login_validation = !flag;
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
      this.login_validation = !flag;
    } 

    if (this.userdata['type'] == 'listener' && flag) {
      this.show_spinner = true;
      this.login_validation = !flag;
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
    } else {
      this.login_validation = !flag;
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
  // Logout
  logout() {
    localStorage.removeItem('user');
    this.user = '';
    this.router.navigate(['']);
    this.toastr.success('Logged off', 'Success!');
  }
  toggleMainMenu() {
    this.toggleMenu = !this.toggleMenu;
  }
}
