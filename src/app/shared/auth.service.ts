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

    console.log(
      ' : state.url.includes("/admin") ==> ',
      state.url.includes("/admin")
    );
    console.log(
      ' : user.hasOwnProperty("admin") ==> ',
      user.hasOwnProperty("admin")
    );

    if (state.url.includes("/admin")) {
      if (user.hasOwnProperty("admin")) {
        return true;
      } else {
        this.router.navigate(["/admin/login"]);
      }
    } else if (state.url.includes("/admin") && !user.hasOwnProperty("admin")) {
      this.router.navigate([""]);
    } else {
      this.router.navigate([""]);
    }
    // if (user) {
    //   return true;
    // }
    return false;
  }
}
