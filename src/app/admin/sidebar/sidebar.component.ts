import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { environment } from "../../../../src/environments/environment";
import * as socketClient from "socket.io-client";
import { MessageService } from "../../shared/message.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: [],
})
export class SidebarComponent implements OnInit {
  user: any = {};
  private socket;
  count = 0;
  currentRoute = "";
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private messageService: MessageService
  ) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = this.router.url;
      }
    });
    this.messageService.getupdatedUserDetail.subscribe((res: any) => {
      this.count = res.count;
    });
    this.user = JSON.parse(localStorage.getItem("user"));
  }

  ngOnInit() {
    this.socket = socketClient(environment.socketUrl);
    if (
      (this.user && this.user.token !== null) ||
      this.user.token !== undefined
    ) {
      this.count = this.user.count;
      this.socket.emit("join", this.user.token);
      if (
        this.user.admin &&
        (this.user.admin.account_type === "super_admin" ||
          this.user.admin.account_type === "admin" ||
          this.user.admin.account_type === "moderator")
      ) {
        this.socket.on("receive_admin_notification_count", (data) => {
          if (data) {
            this.user["count"] = data.count;
            localStorage.setItem("user", JSON.stringify(this.user));
          }
          this.user = JSON.parse(localStorage.getItem("user"));
          this.count = this.user.count;
          if (this.currentRoute === "/admin/notifications") {
            this.messageService.setSocketCall({ newNotification: true });
          }
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
