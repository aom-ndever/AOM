import { Component } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';
import { Location } from '@angular/common';
import { Router, NavigationStart, NavigationCancel, NavigationEnd, NavigationError } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  loading : boolean = true;
  url : any = '';
  constructor(
    private router: Router,
    private location: Location
  ) {
    console.log("App component");
    setTheme('bs4');
  }

  ngAfterViewInit() {
    // this.url = this.location.path().split('/');
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          this.loading = true;
        } else if (
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel
        ) {

          this.loading = false;
          this.url = this.location.path().split('/');
          let pagename = this.url[this.url.length - 1];

          // if (pagename != 'all' && pagename != 'upcoming' && pagename != 'past') {
          //   window.scroll(0, 0);
          // }
          // if (this.url[this.url.length - 1] == 'home') {
          //   document.body.classList.add('home-page');
          // } else {
          //   document.body.className = ''
          // }
        } else if (event instanceof NavigationError) {
          this.loading = false;
          this.router.navigate(['']);
        }
      });
    }
}
