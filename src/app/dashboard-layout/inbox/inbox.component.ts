import { Component, OnInit } from "@angular/core";
import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { ToastrService } from "ngx-toastr";
import { of } from "rxjs/observable/of";
import { InboxService } from "./inbox.service";

@Component({
  selector: "app-inbox",
  templateUrl: "./inbox.component.html",
  styleUrls: ["./inbox.component.css"],
})
export class InboxComponent implements OnInit {
  messages: any;
  masterSelected: Boolean;
  checklist: any = [];
  checkedList: any = [];
  messageData: any;
  private modalRef: NgbModalRef;
  constructor(
    private inboxService: InboxService,
    private toastr: ToastrService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.masterSelected = false;
    this.initial();
  }

  initial() {
    this.inboxService.getArtistMessages().subscribe(
      (res) => {
        this.messages = res["inboxMessages"];
        this.checklist = [];
        this.messages.forEach((element) => {
          this.checklist.push({
            ...element,
            id: element._id,
            isSelected: false,
          });
        });
      },
      (error) => {
        console.log(" : err ==> ", error);
        this.toastr.error(error["error"].message, "Error!");
      }
    );
  }

  checkUncheckAll() {
    this.checklist.map((res, index) => {
      this.checklist[index].isSelected = this.masterSelected;
    });
    this.getCheckedItemList();
  }

  isAllSelected() {
    this.masterSelected = this.checklist.every(function (item: any) {
      return item.isSelected == true;
    });
    this.getCheckedItemList();
  }

  getCheckedItemList() {
    this.checkedList = [];
    this.checklist.map((res, index) => {
      if (this.checklist[index].isSelected) {
        this.checkedList.push(this.checklist[index]);
      }
    });
    this.checkedList = this.checkedList;
  }

  async delete() {
    let deletedMessageIds = [];
    var obj = {};
    if (this.checkedList.length > 0) {
      await this.checkedList.map((res) => {
        deletedMessageIds.push(res.id);
      });

      if (this.masterSelected) {
        obj = {
          ids: deletedMessageIds,
          selectedAll: true,
        };
      } else {
        obj = {
          ids: deletedMessageIds,
          selectedAll: false,
        };
      }
    }
    this.inboxService.deleteMessage(obj).subscribe(
      (res) => {
        this.checklist = [];
        this.messages = res["inboxMessages"];
        this.messages.forEach((element) => {
          this.checklist.push({
            ...element,
            id: element._id,
            isSelected: false,
          });
        });
        this.masterSelected = false;
        if (res["status"] === 1) {
          this.toastr.success(res["message"], "Success!");
        }
      },
      (error) => {
        console.log(" : err ==> ", error);
        this.toastr.error(error["error"].message, "Error!");
      }
    );
  }

  async markAsRead() {
    let markAsReadMessageIds = [];
    var obj = {};
    if (this.checkedList.length > 0) {
      await this.checkedList.map((res) => {
        markAsReadMessageIds.push(res.id);
      });

      if (this.masterSelected) {
        obj = {
          ids: markAsReadMessageIds,
          selectedAll: true,
        };
      } else {
        obj = {
          ids: markAsReadMessageIds,
          selectedAll: false,
        };
      }
    }

    this.inboxService.markAsRead(obj).subscribe(
      (res) => {
        this.checklist = [];
        this.messages = res["inboxMessages"];
        this.messages.forEach((element) => {
          this.checklist.push({
            ...element,
            id: element._id,
            isSelected: false,
          });
        });
        this.masterSelected = false;

        if (res["status"] === 1) {
          this.toastr.success(res["message"], "Success!");
        }
      },
      (error) => {
        console.log(" : err ==> ", error);
        this.toastr.error(error["error"].message, "Error!");
      }
    );
  }

  openMessageDialog(content, id) {
    this.modalRef = this.modalService.open(content, {
      centered: true,
      windowClass: "modal-wrapper",
      backdrop: "static",
    });

    this.inboxService.getMessageData(id).subscribe(
      (res) => {
        console.log(" : res ==> ", res);
        this.messageData = res["messageDetail"];
        this.initial();
      },
      (error) => {
        console.log(" : error ==> ", error);
        this.toastr.error(error["error"].message, "Error!");
      }
    );
  }

  closeMessageDialog() {
    this.modalRef.close();
    this.messageData = {};
  }
}
