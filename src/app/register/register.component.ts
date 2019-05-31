import { Component, OnInit, Directive, forwardRef, Attribute } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from './register.service';
import { environment } from '../../../src/environments/environment';
import { Router } from '@angular/router';
import { AuthService, FacebookLoginProvider } from 'angular5-social-login';
import { MessageService } from '../shared/message.service';
declare const gapi: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: []
})
export class RegisterComponent implements OnInit {
  user: any = '';
  public artist_cnt: any = 0;
  public listner_cnt: any = 0;
  public step_flag = true;
  public auth2: any;
  public show_spinner = false;
  public music_types: any = [];
  public region_list: any = [];
  public state_list: any = [];
  public artist_data: any = {
    'share_url': {
      'facebook': '',
      'instagram': '',
      'twitter': '',
      'youtube': '',
      'sound_cloud': ''
    },
    day: '',
    month: '',
    year: '',
    gender: '',
    // region: '',
    // state: ''
  };
  public listener_data: any = {
    'music_type': [],
    day: '',
    month: '',
    year: '',
    gender: '',
    // region: '',
    // state: ''
  };
  public user_data: any = {};
  public location: any = '';
  public formattedState: any = '';
  public day: any = [];
  public month: any = [];
  public year: any = [];
  imageChangedEvent: any = '';
  croppedImage: any = '';
  cropperReady = false;
  artist_validation = [false, false, false, false, false, false, false];
  listener_validation = [false, false, false, false, false];
  // Artist From Group for validation
  artist_step1: FormGroup;
  artist_step2: FormGroup;
  passwordFormGroup: FormGroup;
  passwordFormGroup1: FormGroup;
  artist_step3: FormGroup;
  artist_step4: FormGroup;
  // Listener Form Group for validation
  listener_step1: FormGroup;
  listener_step2: FormGroup;
  listener_step3: FormGroup;
  listener_step4: FormGroup;

  constructor(private fb: FormBuilder,
    private RegisterService: RegisterService,
    private toastr: ToastrService,
    private router: Router,
    private socialAuthService: AuthService,
    private MessageService: MessageService
  ) {
    this.artist_cnt = 0;
    this.listner_cnt = 0;
    this.day = [];
    this.month = [];
    this.year = [];
    for (let i = 1; i <= 31; i++) {
      this.day.push(i);
    }
    for (let i = 1; i <= 12; i++) {
      this.month.push(i);
    }
    for (let i = 1900; i <= (new Date()).getFullYear(); i++) {
      this.year.push(i);
    }
    this.artist_step1 = this.fb.group({
      terms_condtion: ['', Validators.required]
    });
    this.passwordFormGroup1 = this.fb.group({
      artist_password: ['', Validators.minLength(6)],
      artist_conf: ['', Validators.minLength(6)]
    }, {
        validator: this.passwordMatchValidator
      });
    this.passwordFormGroup = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      conf: ['', [Validators.required, Validators.minLength(6)]]
    }, {
        validator: this.passwordMatchValidatorListener
      });
    this.artist_step2 = this.fb.group({
      'email': ['', [Validators.required, Validators.email]],
      passwordFormGroup1: this.passwordFormGroup1
    });
    this.artist_step3 = this.fb.group({
      fname: ['', [Validators.required, this.noWhitespaceValidator, Validators.pattern('[A-Za-z]+')]],
      lname: ['', [Validators.required, this.noWhitespaceValidator, Validators.pattern('[A-Za-z]+')]],
      gender: ['', [Validators.required]],
      day: ['', [Validators.required]],
      month: ['', [Validators.required]],
      year: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]+'), Validators.minLength(10), Validators.maxLength(10)]]
    });
    this.artist_step4 = this.fb.group({
      zipcode: ['', [Validators.required, Validators.pattern('^[A-Za-z0-9]+$')]],
      // region: ['', [Validators.required]],
      // state: ['', [Validators.required]]
    });

    this.listener_step1 = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      passwordFormGroup: this.passwordFormGroup
    });

    this.listener_step2 = this.fb.group({
      terms_condtion: ['', Validators.required]
    });
    this.listener_step3 = this.fb.group({
      fname: ['', [Validators.required, Validators.pattern('[A-Za-z]+')]],
      lname: ['', [Validators.required, Validators.pattern('[A-Za-z]+')]],
      day: ['', [Validators.required]],
      month: ['', [Validators.required]],
      year: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]+'), Validators.minLength(10), Validators.maxLength(10)]]
    });
    this.listener_step4 = this.fb.group({
      zipcode: ['', [Validators.required, Validators.pattern('^[A-Za-z0-9]+$')]],
      // region: ['', [Validators.required]],
      // state: ['', [Validators.required]]
    });
    this.RegisterService.getAllMusicType().subscribe(response => {
      this.music_types = response['music'];
    });
    this.getRegionList();
  }

  noWhitespaceValidator(control: FormControl) {
    if (typeof (control.value || '') === 'string' || (control.value || '') instanceof String) {
      const isWhitespace = (control.value || '').trim().length === 0;
      const isValid = !isWhitespace;
      return isValid ? null : { 'whitespace': true };
    }
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
        const profile = googleUser.getBasicProfile();
        const data = {
          U3: profile.getEmail(),
          ofa: profile.ofa,
          wea: profile.wea,
          provider: 'gmail',
          Eea: profile.getId(),
          image: profile.getImageUrl(),
          token: googleUser.getAuthResponse().id_token
        };
        this.RegisterService.userGoogleLogin(data).subscribe((response) => {
          this.toastr.success(response['message'], 'Success!');
          localStorage.setItem('user', JSON.stringify(response));
          this.user = JSON.parse(localStorage.getItem('user'));
          this.MessageService.sendMessage({ 'loggedin_user': this.user });
          this.router.navigate(['']);
        }, (error) => {
          this.toastr.error(error['error'].message, 'Error!');
        });
      }, (error) => {
        alert(JSON.stringify(error, undefined, 2));
      });
  }

  ngOnInit() {
    this.googleInit();
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('artist_password').value === g.get('artist_conf').value ? null : g.get('artist_conf').setErrors({ 'mismatch': true });
  }

  passwordMatchValidatorListener(g: FormGroup) {
    return g.get('password').value === g.get('conf').value ? null : g.get('conf').setErrors({ 'mismatch': true });
  }

  // get location details based on zipcode
  getLocation() {
    if (this.artist_data['zipcode']) {
      this.RegisterService.getLocationFromZipCode(this.artist_data['zipcode']).subscribe(response => {
        console.log('response => ', response);
        const res = response;
        if (res['results'].length > 0 && res['results'][0].hasOwnProperty('address_components')) {
          /***************************************** old code ***********************************/
          // if (res['results'][0]['address_components'].length > 3) {
          //   this.location = res['results'][0]['address_components'][1]['long_name'] +
          //     ', ' + res['results'][0]['address_components'][3]['long_name'];
          //   // console.log('greater than 3 => ', this.location);
          //   this.formattedState = res['results'][0]['address_components'][1]['long_name'];
          //   // console.log('this.formattedState => ', this.formattedState);
          // } else if (res['results'][0]['address_components'].length > 2) {
          //   this.location = res['results'][0]['address_components'][1]['long_name'] +
          //     ', ' + res['results'][0]['address_components'][2]['long_name'];
          //   // console.log('greater than 2 => ', this.location);
          // }
          /***************************************** old code ***********************************/

          // ******************************* updated code **************************************
          for (var i = 0; i < res['results'][0].address_components.length; i++) {
            var addressType = res['results'][0].address_components[i].types[0];
            if (addressType === 'administrative_area_level_1') {
              this.formattedState = res['results'][0].address_components[i].long_name;
              console.log('state => ', this.formattedState);
            }
            if (addressType === 'locality') {
              var city = res['results'][0].address_components[i].long_name;
              // console.log('city => ', city);
            }
            // console.log('city => ', city);
            if (city !== undefined) {
              // console.log('city is not undefined => ');
              this.location = city + ',' + this.formattedState;
            } else {
              // console.log('here in else city undefined  => ');
              this.location = '';
            }
          }

        } else {
          this.location = '';
          // console.log('no location => ', this.location);
          // ******************************* updated code **************************************

        }
      });
    } else {
      this.location = '';
      // console.log('no zip code => ', this.location);
    }
  }

  // get location details based on zipcode for listener
  getLocationForListener() {
    if (this.listener_data['zipcode']) {
      this.RegisterService.getLocationFromZipCode(this.listener_data['zipcode']).subscribe(response => {
        const res = response;
        if (res['results'].length > 0 && res['results'][0].hasOwnProperty('address_components')) {
          /***************************************** old code ***********************************/
          //   if (res['results'][0]['address_components'].length > 3) {
          //     this.location = res['results'][0]['address_components'][1]['long_name'] +
          //       ', ' + res['results'][0]['address_components'][3]['long_name'];
          //     // console.log('this.location > 3 => ', this.location);
          //   } else if (res['results'][0]['address_components'].length > 2) {
          //     this.location = res['results'][0]['address_components'][1]['long_name'] +
          //       ', ' + res['results'][0]['address_components'][2]['long_name'];
          //     // console.log('this.location > 2 => ', this.location);
          //   }
          // } else {
          //   this.location = '';
          // }
          // console.log('res[results][0].address_components => ', res['results'][0].address_components);
          /***************************************** old code ***********************************/

          // ******************************* updated code **************************************
          for (var i = 0; i < res['results'][0].address_components.length; i++) {
            var addressType = res['results'][0].address_components[i].types[0];
            if (addressType === 'administrative_area_level_1') {
              this.formattedState = res['results'][0].address_components[i].long_name;
              console.log('state => ', this.formattedState);
            }
            if (addressType === 'locality') {
              var city = res['results'][0].address_components[i].long_name;
              // console.log('city => ', city);
            }
            // console.log('city => ', city);
            if (city !== undefined) {
              // console.log('city is not undefined => ');
              this.location = city + ',' + this.formattedState;
            } else {
              // console.log('here in else city undefined  => ');
              this.location = '';
            }
          }
          console.log('this.location => ', this.location);
        }
        // ******************************* updated code **************************************
      });
    } else {
      this.location = '';
      // console.log('this.location = "" => ', this.location);
    }
  }

  // manage music type selection for artist
  onChange(type: string, isChecked: boolean) {
    if (isChecked) {
      this.artist_data.music_type.push(type);
    } else {
      const index = this.artist_data.music_type.findIndex(x => x === type);
      this.artist_data.music_type.splice(index, 1);
    }
  }

  // manage music type selection for artist
  onChangeForListener(type: string, isChecked: boolean) {
    if (isChecked) {
      this.listener_data.music_type.push(type);
    } else {
      const index = this.listener_data.music_type.findIndex(x => x === type);
      this.listener_data.music_type.splice(index, 1);
    }
  }

  fileChangeEvent(event: any) {
    const fileList: FileList = event.target.files;
    const file = <File>event.target.files[0];
    let isValidPic = false;
    if (event.target.files.length > 0) {
      this.artist_validation[5] = false;
      // const allow_types = ['image/png', 'image/jpg', 'image/jpeg'];
      if (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg') {
        isValidPic = true;
        if (file.size >= 500000) {
          this.toastr.error('Please choose Image less then 500 kb.', 'Error!');
          isValidPic = false;
          return 0;
        } else {
          isValidPic = true;
        }
      } else {
        isValidPic = false;
        this.toastr.error('Invalid Image Format.', 'Error!');
        return 0;
      }
      // if (allow_types.indexOf(fileList[0].type) === -1) {
      //   this.toastr.error('Invalid file format.', 'Error!');
      //   return false;
      // }
      this.imageChangedEvent = event;
      if (event.target.files.length <= 0) {
        this.cropperReady = false;
      }
    }
  }

  imageCropped(image: string) {
    console.log('image => ', image);
    this.croppedImage = image;
  }

  imageLoaded() {
    this.cropperReady = true;
  }

  imageLoadFailed() {
    console.log('Load failed');
  }

  // Select music genre
  selectMusciGenre(id: any) {
    this.artist_data['music_type'] = id;
  }

  // Handle submit event of artist form
  artist_submit() {
    console.log('on submit => ');
    const file = this.imageChangedEvent.target.files[0];
    const new_file = this.dataURLtoFile(this.croppedImage, file.name);
    const formData: FormData = new FormData();
    formData.append('email', this.artist_data['email']);
    formData.append('password', this.artist_data['password']);
    formData.append('first_name', this.artist_data['fname']);
    formData.append('last_name', this.artist_data['lname']);
    formData.append('zipcode', this.artist_data['zipcode']);
    formData.append('gender', this.artist_data['gender']);
    formData.append('music_type', this.artist_data['music_type']);
    formData.append('image', new_file);
    formData.append('phone_no', this.artist_data['phone_no']);
    // formData.append('state', this.artist_data['state']);
    formData.append('state', this.formattedState);
    formData.append('share_url', JSON.stringify(this.artist_data['share_url']));
    formData.append('dob', (new Date(this.artist_data['year'], this.artist_data['month'], this.artist_data['day']).toString()));

    this.show_spinner = true;
    this.RegisterService.artistRegistration(formData).subscribe(response => {
      console.log('response of artist submit => ', response);
      this.step_flag = true;
      this.location = '';
      this.artist_cnt = 0;
      this.artist_data = {
        'share_url': {
          'facebook': '',
          'instagram': '',
          'twitter': '',
          'youtube': '',
          'sound_cloud': ''
        },
        day: '',
        month: '',
        year: '',
        gender: '',
        // region: '',
        // state: ''
      };
      this.toastr.success('Registration done successfully and confirmation email sent to your account please verify to do login.',
        'Success!');
      this.show_spinner = false;
      this.router.navigate(['']);
    }, error => {
      this.toastr.error(error['error'].message, 'Error!');
      this.show_spinner = false;
    }, () => {
      this.show_spinner = false;
    });
  }

  // Handle submit event of listener form
  listener_submit() {
    if (this.listener_data.music_type && this.listener_data.music_type.length <= 0) {
      this.listener_validation[4] = true;
    } else {
      this.listener_validation[4] = false;
      const data = {
        email: this.listener_data['email'],
        password: this.listener_data['password'],
        first_name: this.listener_data['fname'],
        last_name: this.listener_data['lname'],
        zipcode: this.listener_data['zipcode'],
        music_type: this.listener_data['music_type'],
        gender: this.listener_data['gender'],
        phone_no: this.listener_data['phone_no'],
        // state: this.listener_data['state'],
        state: this.formattedState,
        dob: new Date(this.listener_data['year'], this.listener_data['month'], this.listener_data['day'])
      };
      this.show_spinner = true;
      this.RegisterService.listenerRegistration(data).subscribe(response => {
        console.log('response of listener submit => ', response);
        this.step_flag = true;
        this.listner_cnt = 0;
        this.location = '';
        this.listener_data = {
          'music_type': [],
          day: '',
          month: '',
          year: '',
          gender: '',
          // region: '',
          // state: ''
        };
        this.toastr.success('Registration done successfully and confirmation email sent to your account please verify to do login.',
          'Success!');
        this.show_spinner = false;
        this.router.navigate(['']);
      }, error => {
        this.toastr.error(error['error'].message, 'Error!');
        this.show_spinner = false;
      }, () => {
        this.show_spinner = false;
      });
    }

  }

  public nxt_btn(step_lbl: any, flag: any, index: number) {
    console.log('next button  => ');
    this.step_flag = false;
    if (step_lbl === 'artist' && flag) {
      this.artist_validation[index] = !flag;
      this.artist_cnt++;
    } else if (step_lbl === 'artist') {
      this.artist_validation[index] = !flag;
    }
    if (step_lbl === 'listener' && flag) {
      this.listner_cnt++;
      this.listener_validation[index] = !flag;
    } else if (step_lbl === 'listener') {
      this.listener_validation[index] = !flag;
    }
  }

  public back_btn(step_lbl) {
    if (step_lbl === 'artist') {
      this.artist_cnt--;
      if (this.artist_cnt === 0) {
        this.step_flag = true;
      }
    } else {
      this.listner_cnt--;
      if (this.listner_cnt === 0) {
        this.step_flag = true;
      }
    }
  }

  private dataURLtoFile(dataurl, filename) {
    let arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }

  getRegionList() {
    this.RegisterService.getAllRegion().subscribe((response) => {
      console.log('response of region => ', response);
      this.region_list = response['Region'];
    });
  }

  getStateByRegion(id: any) {
    if (id && id !== '') {
      this.RegisterService.getStateByRegion({ region: id }).subscribe((response) => {
        console.log('response of state => ', response);
        this.state_list = response['state'];
        console.log('this.this.state_list => ', this.state_list);
      });
    }
  }

  // Login or registration with facebook
  fbLogin() {
    const socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (data) => {
        this.RegisterService.userFacebookLogin(data).subscribe((response) => {
          this.toastr.success(response['message'], 'Success!');
          localStorage.setItem('user', JSON.stringify(response));
          this.user = JSON.parse(localStorage.getItem('user'));
          this.MessageService.sendMessage({ 'loggedin_user': this.user });
          this.router.navigate(['']);
        }, (error) => {
          this.toastr.error(error['error'].message, 'Error!');
        });
      }
    );
  }

}
