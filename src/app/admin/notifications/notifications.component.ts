import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NotificationsService } from "./notifications.service";
import { NgxUiLoaderService } from "ngx-ui-loader";
import { ToastrService } from "ngx-toastr";
import { environment } from "../../../../src/environments/environment";
import { MessageService } from "../../shared/message.service";
import * as socketClient from "socket.io-client";

@Component({
  selector: "app-notification",
  templateUrl: "./notifications.component.html",
  styleUrls: ["./notifications.component.css"],
})
export class NotificationsComponent implements OnInit, OnDestroy {
  notifications: any = [];
  show_spinner: Boolean = false;
  user: any = "";
  count: 0;
  imagePath = "";
  private socket;
  constructor(
    private NotificationsService: NotificationsService,
    private messageService: MessageService,
    private ngxService: NgxUiLoaderService,
    private toastr: ToastrService
  ) {
    this.imagePath = environment.API_URL + environment.ARTIST_IMG;
    console.log(" : this.imagePath ==> ", this.imagePath);
    this.messageService.getSocketValue.subscribe((res: any) => {
      console.log(" : res ==> ", res);
      if (res.newNotification) {
        this.init();
      }
    });
    this.user = JSON.parse(localStorage.getItem("user"));
    // this.ngxService.start();
    // this.NotificationsService.getAllContest().subscribe(
    //   (res) => {
    //     console.log(" : res ==> ", res["contest"]);
    //     res["contest"].map((e) => {
    //       console.log(" : e ==> ", e);
    //       var obj = {
    //         label: e.name,
    //         value: e._id,
    //       };
    //       this.contest.push(obj);
    //     });
    //     // this.ngxService.stop();
    //   },
    //   (err) => {
    //     console.log(" : err ==> ", err);
    //     // this.ngxService.stop();
    //   }
    // );
  }

  ngOnInit() {
    this.init();
  }

  init() {
    this.NotificationsService.getAllNotifications().subscribe(
      (res) => {
        this.notifications = res["notifications"];
        this.UpdateNotificationCounts();
      },
      (error) => {
        console.log(" : error ==> ", error);
      }
    );
  }

  UpdateNotificationCounts() {
    this.user["count"] = 0;
    localStorage.setItem("user", JSON.stringify(this.user));
    this.user = JSON.parse(localStorage.getItem("user"));
    this.count = this.user.count;
    var obj = {
      isSeen: 1,
    };
    this.NotificationsService.updateCounts(obj).subscribe(
      (res) => {
        this.messageService.setupdatedUserDetail({ count: 0 });
      },
      (err) => {
        console.log(" : err ==> ", err);
      }
    );
  }

  ngOnDestroy() {}
}
