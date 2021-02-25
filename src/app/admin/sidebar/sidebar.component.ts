import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { environment } from "../../../../src/environments/environment";
import * as socketClient from "socket.io-client";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: [],
})
export class SidebarComponent implements OnInit {
  user: any = {};
  private socket;

  constructor(private router: Router, private toastr: ToastrService) {
    this.user = JSON.parse(localStorage.getItem("user"));
  }

  ngOnInit() {
    this.socket = socketClient(environment.socketUrl);
    if (
      (this.user && this.user.token !== null) ||
      this.user.token !== undefined
    ) {
      this.socket.emit("join", this.user.token);
      if (
        this.user.admin &&
        (this.user.admin.account_type === "super_admin" ||
          this.user.admin.account_type === "admin" ||
          this.user.admin.account_type === "moderator")
      ) {
        this.socket.on("receive_admin_notification_count", (data) => {
          console.log(" : data ==> ", data);
          // if (data) {
          //   this.user["count"] = data.count;
          //   localStorage.setItem("user", JSON.stringify(this.user));
          // }
          // console.log("artist", { emit: data });
          // this.user = JSON.parse(localStorage.getItem("user"));
          // this.count = this.user.count;
        });
      }
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate(["/admin/login"]);
    this.toastr.success("Logged off", "Success!");
  }
}
