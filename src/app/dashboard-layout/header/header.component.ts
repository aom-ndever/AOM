import { Component, OnInit, OnDestroy } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs/Subscription';
import { HeaderService } from './header.service'; 
import { environment } from '../../../environments/environment';
import { MessageService } from '../../shared/message.service';
import { AuthService,FacebookLoginProvider } from 'angular5-social-login';
declare var FB : any;
declare const gapi: any;
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
  auth2: any;
  subscription: Subscription;
  toggleMenu : boolean = false;
  private modalRef: NgbModalRef;
  private modalForgetRef: NgbModalRef;
  constructor(private modalService: NgbModal,
     private fb: FormBuilder, 
     private HeaderService : HeaderService, 
     private toastr: ToastrService,
     private router: Router,
     private MessageService : MessageService,
     private socialAuthService: AuthService 
    ) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.MessageService.sendMessage({loggedin_user : this.user});
    
    if(this.user && this.user.artist) {
      this.user.artist['image'] = typeof this.user.artist['image'] != 'undefined' ? environment.API_URL+environment.ARTIST_IMG+this.user.artist['image'] : '';
    } else if(this.user && this.user.user) {
      let data = JSON.parse(localStorage.getItem('user'));
      
      if(!(this.user.user.provider && this.user.user.provider == "facebook" && this.user.user['image'].includes('graph.facebook.com')) || !(this.user.provider == "gmail" && this.user['image'].includes('lh3.googleusercontent.com'))) {
        this.user.user['image'] = typeof this.user.user['image'] != 'undefined' ? environment.API_URL+environment.USER_IMG+this.user.user['image'] : '';
      } else {
        this.user.user['image'] = data['user']['image'];
      }
    }
    this.subscription = this.MessageService.getMessage().subscribe((response) => {
      if(response && response['updateProfile']) {
        setTimeout(() => {
          this.user = JSON.parse(localStorage.getItem('user'));
          if(this.user && this.user.artist) {
            this.user.artist['image'] = typeof this.user.artist['image'] != 'undefined' ? environment.API_URL+environment.ARTIST_IMG+this.user.artist['image'] : '';
          } else if(this.user && this.user.user) {
            if(!(this.user.provider && this.user.provider == "facebook" && this.user['image'].includes('graph.facebook.com')) || !(this.user.provider == "gmail" && this.user['image'].includes('lh3.googleusercontent.com'))) {
              this.user.user['image'] = typeof this.user.user['image'] != 'undefined' ? environment.API_URL+environment.USER_IMG+this.user.user['image'] : '';
            } 
          }
        }, 1000);
      }
      if(response && response['loggedin_user']) {
        setTimeout(()=>{
          this.user = response['loggedin_user'];
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

   // Code for initialize google login button
  public googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: environment.GOOGLE_CLIENT_ID,
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
      this.attachSignin(document.getElementById('googleBtn'));
    });
  }
  // Code for open google signin popup and do login
  public attachSignin(element) {
    this.auth2.attachClickHandler(element, {},
      (googleUser) => {

        let profile = googleUser.getBasicProfile();
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
        //YOUR CODE HERE
        console.log('token :',googleUser.getAuthResponse().id_token, profile);
        
        let data = {
          U3 : profile.getEmail(),
          ofa : profile.ofa,
          wea : profile.wea,
          provider : 'gmail',
          Eea : profile.getId(),
          image : profile.getImageUrl(),
          token : googleUser.getAuthResponse().id_token
        };
        this.HeaderService.userGoogleLogin(data).subscribe((response) => {
          this.toastr.success(response['message'], 'Success!');
          localStorage.setItem('user', JSON.stringify(response));
          this.modalRef.close();
          this.user = JSON.parse(localStorage.getItem('user'));
          this.MessageService.sendMessage({'loggedin_user': this.user});
          this.router.navigate(['']);
        }, (error) => {
          this.toastr.error(error['error'].message, 'Error!');
        });
      }, (error) => {
        console.log(JSON.stringify(error, undefined, 2));
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
    this.login_validation = false;
    this.modalRef = this.modalService.open(content, { centered: true, windowClass : 'modal-wrapper', backdrop : true });
    this.googleInit();
  }

  openForgetPasswordModal(content) {
    this.modalRef.close();
    this.forget_pwd_data = {};
    this.modalForgetRef = this.modalService.open(content, { centered: true, backdrop : true });
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
        this.MessageService.sendMessage({'loggedin_user': this.user});
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
        this.MessageService.sendMessage({'loggedin_user': this.user});
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
      this.HeaderService.artistForgetPassword({email : this.forget_pwd_data.email, type : this.forget_pwd_data.type}).subscribe(response => {
        this.toastr.success(response['message'], 'Success!');
        this.modalForgetRef.close();
      }, error => {
        if(error['error'].message[0] && error['error'].message[0]['param'] && error['error'].message[0]['param'] == 'email') {
          this.toastr.error(error['error'].message[0]['msg'], 'Error!');
        } else {
          this.toastr.error(error['error'].message, 'Error!');
        }
        this.show_spinner = false;
      }, () => {
        this.forget_pwd_data = {};
        this.show_spinner = false;
      });
    } else {
      this.HeaderService.userForgetPassword({email : this.forget_pwd_data.email, type : this.forget_pwd_data.type}).subscribe(response => {
        console.log('user ', response);
        this.toastr.success(response['message'], 'Success!');
        this.modalForgetRef.close();
      }, error => {
        if(error['error'].message[0] && error['error'].message[0]['param'] && error['error'].message[0]['param'] == 'email') {
          this.toastr.error(error['error'].message[0]['msg'], 'Error!');
        } else {
          this.toastr.error(error['error'].message, 'Error!');
        }
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

  fbLogin() {
   let socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
   this.socialAuthService.signIn(socialPlatformProvider).then(
      (data) => {
        console.log(" sign in data : " , data);
        this.HeaderService.userFacebookLogin(data).subscribe((response) => {
          this.toastr.success(response['message'], 'Success!');
          localStorage.setItem('user', JSON.stringify(response));
          this.modalRef.close();
          this.user = JSON.parse(localStorage.getItem('user'));
          this.MessageService.sendMessage({'loggedin_user': this.user});
          this.router.navigate(['']);
        }, (error) => {
          this.toastr.error(error['error'].message, 'Error!');
        });
      }
    );
  }
}
