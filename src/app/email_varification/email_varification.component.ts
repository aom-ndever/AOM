import { Component, OnInit, Directive, forwardRef, Attribute } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EamilVarificationService } from './email_varification.service';
import { environment } from '../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router'; 
declare const gapi: any;

@Component({
  selector: 'app-register',
  templateUrl: './email_varification.component.html',
  styleUrls: []
})
export class EmailVarificationComponent implements OnInit {
 

  constructor(private fb: FormBuilder,
     private EamilVarificationService : EamilVarificationService, 
     private toastr: ToastrService,
     private route: ActivatedRoute,
     private router: Router
    ) {
    this.route.params.subscribe(res =>  {
      if(res.type && res.type == 'artist') {
        this.EamilVarificationService.artistEmailVarification(res.id).subscribe(response => {
          console.log('verification done artist', response);
          this.toastr.success(response['message'], 'Success!');
          this.router.navigate(['']);
        }, error => {
          this.toastr.error(error['error'].message, 'Error!');
          console.log('artist error', error.error);
        });
      } else {
        this.EamilVarificationService.userEmailVarification(res.id).subscribe(response => {
          console.log('verification done user', response);
          this.toastr.success(response['message'], 'Success!');
          this.router.navigate(['dashboard/']);
        }, error => {
          this.toastr.error(error['error'].message, 'Error!');
          console.log('user error', error);
        });
      }
       console.log(res.id, res.type);
    });
  }

  ngOnInit() {
  
  }
  
}