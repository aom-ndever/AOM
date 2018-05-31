import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HeaderService } from './header.service'; 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user : any = ''; 
  login_form : FormGroup;
  show_spinner : boolean = false;
  userdata : any = {};
  private modalRef: NgbModalRef;
  constructor(private modalService: NgbModal,
     private fb: FormBuilder, 
     private HeaderService : HeaderService, 
     private toastr: ToastrService,
     private router: Router
    ) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.login_form = this.fb.group({
      email : ['', [Validators.required]],
      password : ['', [Validators.required]],
      type : []
    });
   }

  ngOnInit() {
  }

  openVerticallyCentered(content) {
    this.show_spinner = false;
    this.userdata = {};
    this.modalRef = this.modalService.open(content, { centered: true });
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
        this.router.navigate(['']);
      }, error => {
        console.log(error);
        this.show_spinner = false;
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
        this.router.navigate(['']);
      }, error => {
        console.log(error);
        this.show_spinner = false;
      }, () => {
        this.show_spinner = false;
      });
    }
  }

}
