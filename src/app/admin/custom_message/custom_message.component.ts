import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CustomMessageService } from "./custom_message.service";
import { NgxUiLoaderService } from "ngx-ui-loader";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-custom-message",
  templateUrl: "./custom_message.component.html",
  styleUrls: ["./custom_message.component.css"],
})
export class CustomMessageComponent implements OnInit, OnDestroy {
  contest: any = [];
  selectedCar: string;
  customMessage: FormGroup;
  submitted = false;
  show_spinner: Boolean = false;

  constructor(
    private CustomMessageService: CustomMessageService,
    private ngxService: NgxUiLoaderService,
    private toastr: ToastrService
  ) {
    this.customMessage = new FormGroup({
      contest_id: new FormControl("", Validators.required),
      message: new FormControl("", Validators.required),
    });
    // this.ngxService.start();
    this.CustomMessageService.getAllContest().subscribe(
      (res) => {
        console.log(" : res ==> ", res["contest"]);
        res["contest"].map((e) => {
          console.log(" : e ==> ", e);
          var obj = {
            label: e.name,
            value: e._id,
          };
          this.contest.push(obj);
        });
        // this.ngxService.stop();
      },
      (err) => {
        console.log(" : err ==> ", err);
        // this.ngxService.stop();
      }
    );
  }

  ngOnInit() {}

  get f() {
    return this.customMessage.controls;
  }

  onSubmit(flag) {
    this.submitted = true;
    if (flag) {
      this.CustomMessageService.sendMessage(this.customMessage.value).subscribe(
        (res) => {
          console.log(" : res ==> ", res);
          if (res["status"] === 1) {
            this.toastr.success(res["message"], "Success!");
            this.customMessage.reset();
            this.submitted = false;
          }
        },
        (err) => {
          console.log(" : err ==> ", err);
          this.toastr.error(err["error"].message, "Error!");
        }
      );
    }
  }

  ngOnDestroy() {}
}
