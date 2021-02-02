import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  Renderer2,
} from "@angular/core";
import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Subscription } from "rxjs/Subscription";
import { HeaderService } from "./header.service";
import { environment } from "../../../../src/environments/environment";
import { MessageService } from "../../shared/message.service";
import { AuthService, FacebookLoginProvider } from "angular5-social-login";
declare var FB: any;
declare const gapi: any;
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit, OnDestroy {
  @ViewChild("bell") bell: ElementRef;
  @ViewChild("box") box: ElementRef;
  user: any = "";
  login_form: FormGroup;
  forget_form: FormGroup;
  show_spinner = false;
  login_validation = false;
  forget_validation = false;
  userdata: any = {};
  forget_pwd_data: any = {};
  auth2: any;
  subscription: Subscription;
  toggleMenu = false;
  public userType;
  private modalRef: NgbModalRef;
  private modalForgetRef: NgbModalRef;
  notificationOpen = false;
  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private headerService: HeaderService,
    private toastr: ToastrService,
    private router: Router,
    private messageService: MessageService,
    private socialAuthService: AuthService,
    private renderer: Renderer2
  ) {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.messageService.sendMessage({ loggedin_user: this.user });

    if (this.user && this.user.artist) {
      this.user.artist["image"] =
        typeof this.user.artist["image"] !== "undefined"
          ? environment.API_URL +
            environment.ARTIST_IMG +
            this.user.artist["image"]
          : "";
    } else if (this.user && this.user.user) {
      // const data = JSON.parse(localStorage.getItem("user"));
      console.log(
        ' : "http" ==> ',
        this.user.user["image"].substring(0, 4) === "http"
      );
      if (
        (this.user.user.provider &&
          this.user.user.provider === "facebook" &&
          this.user.user["image"].includes("graph.facebook.com")) ||
        (this.user.user.provider &&
          this.user.user.provider === "gmail" &&
          this.user.user["image"].includes("lh3.googleusercontent.com")) ||
        this.user.user["image"].substring(0, 4) === "http"
      ) {
        this.user.user["image"] = this.user.user["image"];
      } else {
        this.user.user["image"] =
          typeof this.user.user["image"] !== "undefined"
            ? environment.API_URL +
              environment.USER_IMG +
              this.user.user["image"]
            : "";
      }
    }
    this.subscription = this.messageService
      .getMessage()
      .subscribe((response) => {
        if (response && response["updateProfile"]) {
          setTimeout(() => {
            this.user = JSON.parse(localStorage.getItem("user"));
            if (this.user && this.user.artist) {
              this.user.artist["image"] =
                typeof this.user.artist["image"] !== "undefined"
                  ? environment.API_URL +
                    environment.ARTIST_IMG +
                    this.user.artist["image"]
                  : "";
            } else if (this.user && this.user.user) {
              if (
                (this.user.user.provider &&
                  this.user.user.provider === "facebook" &&
                  this.user.user["image"].includes("graph.facebook.com")) ||
                (this.user.user.provider &&
                  this.user.user.provider === "gmail" &&
                  this.user.user["image"].includes(
                    "lh3.googleusercontent.com"
                  )) ||
                this.user.user["image"].substring(0, 4) === "http"
              ) {
                // this.user.user["image"] = this.user.user["image"];
                console.log("image same");
              } else {
                this.user.user["image"] =
                  typeof this.user.user["image"] !== "undefined"
                    ? environment.API_URL +
                      environment.USER_IMG +
                      this.user.user["image"]
                    : "";
              }
            }
          }, 1000);
        }
        if (response && response["loggedin_user"]) {
          this.user = response["loggedin_user"];
        }
        if (response && response["upgrade_artist"]) {
          this.user = "";
        }
      });
    this.login_form = this.fb.group({
      email: ["", [Validators.required]],
      password: ["", [Validators.required]],

      // ******************************* updated code **************************************
      // type: ['', [Validators.required]]
    });
    this.forget_form = this.fb.group({
      email: ["", [Validators.required, Validators.email]],

      // ******************************* updated code **************************************
      // type: ['', [Validators.required]]
    });

    this.renderer.listen("window", "click", (e: Event) => {
      if (
        e.target !== this.bell.nativeElement &&
        e.target !== this.box.nativeElement
      ) {
        this.notificationOpen = false;
      }
    });
  }

  // Code for initialize google login button
  public googleInit() {
    gapi.load("auth2", () => {
      this.auth2 = gapi.auth2.init({
        client_id: environment.GOOGLE_CLIENT_ID,
        cookiepolicy: "single_host_origin",
        scope: "profile email",
      });
      this.attachSignin(document.getElementById("googleBtn"));
    });
  }
  // Code for open google signin popup and do login
  public attachSignin(element) {
    this.auth2.attachClickHandler(
      element,
      {},
      (googleUser) => {
        const profile = googleUser.getBasicProfile();
        // console.log('Token || ' + googleUser.getAuthResponse().id_token);
        // console.log('ID: ' + profile.getId());
        // console.log('Name: ' + profile.getName());
        // console.log('Image URL: ' + profile.getImageUrl());
        // console.log('Email: ' + profile.getEmail());
        // console.log('token :', googleUser.getAuthResponse().id_token, profile);
        console.log("profile => ", profile);
        const data = {
          U3: profile.getEmail(),
          // First name
          ofa: profile.qW,
          // Last name
          wea: profile.vU,
          // ofa: profile.ofa,
          // wea: profile.wea,
          provider: "gmail",
          Eea: profile.getId(),
          image: profile.getImageUrl(),
          token: googleUser.getAuthResponse().id_token,
        };
        console.log("data :: Google response => ", data);
        this.headerService.userGoogleLogin(data).subscribe(
          (response) => {
            this.toastr.success(response["message"], "Success!");
            localStorage.setItem("user", JSON.stringify(response));
            this.modalRef.close();
            this.user = JSON.parse(localStorage.getItem("user"));
            this.messageService.sendMessage({ loggedin_user: this.user });
            this.router.navigate([""]);
          },
          (error) => {
            this.toastr.error(error["error"].message, "Error!");
          }
        );
      },
      (error) => {
        // console.log(JSON.stringify(error, undefined, 2));
      }
    );
  }
  ngOnInit() {}

  ngOnDestroy() {
    // console.log('header destroy');
    if (this.modalRef) {
      this.modalRef.close();
    }
    if (this.modalForgetRef) {
      this.modalForgetRef.close();
    }
    this.subscription.unsubscribe();
  }
  openVerticallyCentered(content) {
    this.show_spinner = false;
    this.userdata = {};
    this.login_validation = false;
    this.modalRef = this.modalService.open(content, {
      centered: true,
      windowClass: "modal-wrapper",
      backdrop: "static",
    });
    this.googleInit();
  }

  openForgetPasswordModal(content) {
    this.modalRef.close();
    this.forget_pwd_data = {};
    this.forget_validation = false;
    this.modalForgetRef = this.modalService.open(content, {
      centered: true,
      backdrop: "static",
    });
  }

  login(flag: boolean) {
    console.log("flag => ", flag);
    // ******************************* updated code **************************************
    if (flag) {
      this.show_spinner = true;
      this.login_validation = !flag;
      this.headerService.login(this.userdata).subscribe(
        (response) => {
          if (response["user"]) {
            this.userType = response["user"].type;
            this.toastr.success("Login Done", "Success!");
            localStorage.setItem("user", JSON.stringify(response));
            this.modalRef.close();
            this.user = JSON.parse(localStorage.getItem("user"));
            if (this.user && this.user.artist) {
              this.user.artist["image"] =
                typeof this.user.artist["image"] !== "undefined"
                  ? environment.API_URL +
                    environment.ARTIST_IMG +
                    this.user.artist["image"]
                  : "";
            } else if (this.user && this.user.user) {
              this.user.user["image"] =
                typeof this.user.user["image"] !== "undefined"
                  ? environment.API_URL +
                    environment.USER_IMG +
                    this.user.user["image"]
                  : "";
            }
            this.messageService.sendMessage({ loggedin_user: this.user });
            this.router.navigate([""]);
          } else if (response["artist"]) {
            this.userType = response["artist"].type;
            localStorage.setItem("user", JSON.stringify(response));
            this.toastr.success("Login Done", "Success!");
            this.modalRef.close();
            this.user = JSON.parse(localStorage.getItem("user"));
            if (this.user && this.user.artist) {
              this.user.artist["image"] =
                typeof this.user.artist["image"] !== "undefined"
                  ? environment.API_URL +
                    environment.ARTIST_IMG +
                    this.user.artist["image"]
                  : "";
            } else if (this.user && this.user.user) {
              this.user.user["image"] =
                typeof this.user.user["image"] !== "undefined"
                  ? environment.API_URL +
                    environment.USER_IMG +
                    this.user.user["image"]
                  : "";
            }
            this.messageService.sendMessage({ loggedin_user: this.user });
            this.router.navigate([""]);
          }
        },
        (error) => {
          console.log(error);
          this.show_spinner = false;
          this.toastr.error(error["error"].message, "Error!");
        },
        () => {
          this.show_spinner = false;
        }
      );
    } else {
      this.login_validation = !flag;
    }
    // ******************************* updated code **************************************

    /***************************************** old code ***********************************/
    // if (this.userdata['type'] === 'artist' && flag) {
    //   this.show_spinner = true;
    //   this.login_validation = !flag;
    //   // this.HeaderService.artist_login(this.userdata).subscribe(response => {
    //   this.HeaderService.login(this.userdata).subscribe(response => {
    //     console.log(response);
    //     localStorage.setItem('user', JSON.stringify(response));
    //     this.toastr.success('Login Done', 'Success!');
    //     this.modalRef.close();
    //     this.user = JSON.parse(localStorage.getItem('user'));
    //     console.log('this.user => ', this.user);
    //     if (this.user && this.user.artist) {
    //       this.user.artist['image'] = typeof this.user.artist['image'] !== 'undefined' ?
    //         environment.API_URL + environment.ARTIST_IMG + this.user.artist['image'] : '';
    //     } else if (this.user && this.user.user) {
    //       this.user.user['image'] = typeof this.user.user['image'] !== 'undefined' ?
    //         environment.API_URL + environment.USER_IMG + this.user.user['image'] : '';
    //     }
    //     this.MessageService.sendMessage({ 'loggedin_user': this.user });
    //     this.router.navigate(['']);
    //   }, error => {
    //     console.log(error);
    //     this.show_spinner = false;
    //     this.toastr.error(error['error'].message, 'Error!');
    //   }, () => {
    //     this.show_spinner = false;
    //   });
    // } else {
    //   this.login_validation = !flag;
    // }

    // if (this.userdata['type'] === 'listener' && flag) {
    //   this.show_spinner = true;
    //   this.login_validation = !flag;
    //   this.HeaderService.user_login(this.userdata).subscribe(response => {
    //     console.log(response);
    //     this.toastr.success('Login Done', 'Success!');
    //     localStorage.setItem('user', JSON.stringify(response));
    //     this.modalRef.close();
    //     this.user = JSON.parse(localStorage.getItem('user'));
    //     if (this.user && this.user.artist) {
    //       this.user.artist['image'] = typeof this.user.artist['image'] !== 'undefined' ?
    //         environment.API_URL + environment.ARTIST_IMG + this.user.artist['image'] : '';
    //     } else if (this.user && this.user.user) {
    //       this.user.user['image'] = typeof this.user.user['image'] !== 'undefined' ?
    //         environment.API_URL + environment.USER_IMG + this.user.user['image'] : '';
    //     }
    //     this.MessageService.sendMessage({ 'loggedin_user': this.user });
    //     this.router.navigate(['']);
    //   }, error => {
    //     console.log(error);
    //     this.show_spinner = false;
    //     this.toastr.error(error['error'].message, 'Error!');
    //   }, () => {
    //     this.show_spinner = false;
    //   });
    // } else {
    //   this.login_validation = !flag;
    // }
    /***************************************** old code ***********************************/
  }

  forgetPassword(flag: boolean) {
    if (flag) {
      this.show_spinner = true;
      // this.headerService.artistForgetPassword({
      this.headerService
        .forgetPassword({
          email: this.forget_pwd_data.email,
        })
        .subscribe(
          (response) => {
            this.toastr.success(response["message"], "Success!");
            this.modalForgetRef.close();
          },
          (error) => {
            if (
              error["error"].message[0] &&
              error["error"].message[0]["param"] &&
              error["error"].message[0]["param"] === "email"
            ) {
              this.toastr.error(error["error"].message[0]["msg"], "Error!");
            } else {
              this.toastr.error(error["error"].message, "Error!");
            }
            this.show_spinner = false;
          },
          () => {
            this.forget_pwd_data = {};
            this.show_spinner = false;
          }
        );
      // if (this.forget_pwd_data && this.forget_pwd_data.type == 'artist') {
      //   this.HeaderService.artistForgetPassword({
      //     email: this.forget_pwd_data.email
      //     // , type: this.forget_pwd_data.type
      //   }).subscribe(response => {
      //     this.toastr.success(response['message'], 'Success!');
      //     this.modalForgetRef.close();
      //   }, error => {
      //     if (error['error'].message[0] && error['error'].message[0]['param'] && error['error'].message[0]['param'] == 'email') {
      //       this.toastr.error(error['error'].message[0]['msg'], 'Error!');
      //     } else {
      //       this.toastr.error(error['error'].message, 'Error!');
      //     }
      //     this.show_spinner = false;
      //   }, () => {
      //     this.forget_pwd_data = {};
      //     this.show_spinner = false;
      //   });
      // } else {
      //   this.HeaderService.userForgetPassword(
      //     {
      //       email: this.forget_pwd_data.email
      //       // , type: this.forget_pwd_data.type
      //     }
      //   ).subscribe(response => {
      //     console.log('user ', response);
      //     this.toastr.success(response['message'], 'Success!');
      //     this.modalForgetRef.close();
      //   }, error => {
      //     if (error['error'].message[0] && error['error'].message[0]['param'] && error['error'].message[0]['param'] == 'email') {
      //       this.toastr.error(error['error'].message[0]['msg'], 'Error!');
      //     } else {
      //       this.toastr.error(error['error'].message, 'Error!');
      //     }
      //     this.show_spinner = false;
      //   }, () => {
      //     this.forget_pwd_data = {};
      //     this.show_spinner = false;
      //   });
      // }
    }
    this.forget_validation = !flag;
  }
  // Logout
  logout() {
    this.toastr.success("Logged off", "Success!");
    localStorage.removeItem("user");
    this.user = "";
    // window.location.replace('');
    this.router.navigate([""]);
  }
  toggleMainMenu() {
    this.toggleMenu = !this.toggleMenu;
  }

  fbLogin() {
    const socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    this.socialAuthService.signIn(socialPlatformProvider).then((data) => {
      console.log(" sign in data : ", data);
      this.headerService.userFacebookLogin(data).subscribe(
        (response) => {
          this.toastr.success(response["message"], "Success!");
          localStorage.setItem("user", JSON.stringify(response));
          this.modalRef.close();
          this.user = JSON.parse(localStorage.getItem("user"));
          this.messageService.sendMessage({ loggedin_user: this.user });
          this.router.navigate([""]);
        },
        (error) => {
          // this.toastr.error(error['error'].message, 'Error!');
        }
      );
    });
  }

  public openNotification() {
    if (this.notificationOpen) {
      this.notificationOpen = false;
    } else {
      this.notificationOpen = true;
    }
  }

  public ClickedOut() {
    console.log(" : out ==> ");
  }
}
