import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: []
})
export class SidebarComponent implements OnInit {

  user : any = {};
  constructor(private router: Router) {
    console.log("Admin dashboard component");
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  ngOnInit() {
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/admin/login']);
  }
}
