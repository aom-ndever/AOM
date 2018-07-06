import { Component, OnInit } from '@angular/core';
import { AdminLoginService } from './admin_login.service';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin_login',
  templateUrl: './admin_login.component.html',
  styleUrls: []
})
export class AdminLoginComponent implements OnInit {

  admin_data : any = {};
  show_spinner : Boolean = false;
  admin_formgroup : FormGroup;
  constructor(private AdminLoginService : AdminLoginService, private fb: FormBuilder, private toastr: ToastrService,private router: Router) {
    this.admin_formgroup = this.fb.group({
      'email' : ['', [Validators.required, Validators.email]],
      'password' : ['', [Validators.required]],
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
  
}
