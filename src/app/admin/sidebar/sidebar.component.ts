import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: []
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) {
    console.log("Admin dashboard component");
  }

  ngOnInit() {
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/admin/login']);
  }
}
