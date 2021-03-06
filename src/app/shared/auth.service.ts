import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from "@angular/router";

@Injectable()
export class AuthService implements CanActivate {
  public authToken;
  private isAuthenticated = true; // Set this value dynamically

  constructor(private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(" : user ==> ", user);

    console.log(" : test ==>> ", state.url.includes("/admin"), user);

    if (state.url.includes("/admin") && user && !user.hasOwnProperty("admin")) {
      this.router.navigate([""]);
    } else if (state.url.includes("/admin")) {
      console.log(" : here ==> ");
      this.router.navigate(["/admin/login"]);
    } else {
      this.router.navigate([""]);
    }
    return false;
  }
}
