import { Component, OnInit, Directive, forwardRef, Attribute } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EamilVarificationService } from './email_varification.service';
import { environment } from '../../../src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
declare const gapi: any;

@Component({
  selector: 'app-register',
  templateUrl: './email_varification.component.html',
  styleUrls: []
})
export class EmailVarificationComponent implements OnInit {


  constructor(private fb: FormBuilder,
    private eamilVarificationService: EamilVarificationService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe(res => {
      if (res.type && res.type === 'artist') {
        this.eamilVarificationService.artistEmailVarification(res.id).subscribe(response => {
          this.toastr.success(response['message'], 'Success!');
          this.router.navigate(['']);
        }, error => {
          this.toastr.error(error['error'].message, 'Error!');
        });
      } else {
        this.eamilVarificationService.userEmailVarification(res.id).subscribe(response => {
          this.toastr.success(response['message'], 'Success!');
          this.router.navigate(['dashboard/']);
        }, error => {
          this.toastr.error(error['error'].message, 'Error!');
        });
      }
    });
  }

  ngOnInit() { }

}
