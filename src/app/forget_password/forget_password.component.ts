import { Component, OnInit, Directive, forwardRef, Attribute } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ForgetPasswordService } from './forget_password.service';
import { environment } from '../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router'; 
declare const gapi: any;

@Component({
  selector: 'app-register',
  templateUrl: './forget_password.component.html',
  styleUrls: []
})
export class ForgetPasswordComponent implements OnInit {
 
  passwordFormGroup : FormGroup;
  show_spinner : boolean = false;
  forget_password : any = '';
  conf : any = '';
  param : any = {}
  constructor(private fb: FormBuilder,
     private ForgetPasswordService : ForgetPasswordService, 
     private toastr: ToastrService,
     private route: ActivatedRoute,
     private router: Router
    ) {
    this.passwordFormGroup = this.fb.group({
      password : ['', [Validators.required, Validators.maxLength(6)]],
      conf : ['', [Validators.required, Validators.maxLength(6)]]
    }, {
      validator : this.passwordMatchValidator
    });
    this.route.params.subscribe(res =>  {
      this.param = res;
       console.log(res.id, res.type);
    });
  }

  passwordMatchValidator(g: FormGroup) {
      return g.get('password').value === g.get('conf').value ? null : g.get('conf').setErrors({'mismatch': true});
  }
  ngOnInit() {
  
  }
  
  resetPassword() {
    if(this.param && this.param.type == 'artist') {
      const data = {
        token : this.param.id,
        password : this.forget_password
      };
      this.show_spinner = true;
      this.ForgetPasswordService.artistChangePassword(data).subscribe(response => {
        this.forget_password = '';
        this.conf = '';
        this.toastr.success(response['message'], 'Success!');
      }, error => {
        this.toastr.error(error['error'].message, 'Error!');
        this.show_spinner = false;
      }, () => {
        this.show_spinner = false;
      });
    } else {
      const data = {
        token : this.param.id,
        password : this.forget_password
      };
      this.show_spinner = true;
      this.ForgetPasswordService.artistChangePassword(data).subscribe(response => {
        console.log(response);
        this.forget_password = '';
        this.conf = '';
        this.toastr.success(response['message'], 'Success!');
      }, error => {
        this.toastr.error(error['error'].message, 'Error!');
        this.show_spinner = false;
      }, () => {
        this.show_spinner = false;
      });
    }
  }
}