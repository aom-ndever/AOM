import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: []
})
export class SidebarComponent implements OnInit {

  user: any = {};
  constructor(private router: Router,
    private toastr: ToastrService) {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  ngOnInit() {
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/admin/login']);
    this.toastr.success('Logged off', 'Success!');
  }
}
