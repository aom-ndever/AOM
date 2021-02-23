// import { Subject } from 'rxjs/Subject';

import { Injectable, Output, EventEmitter } from "@angular/core";
import { Observable, Subject, BehaviorSubject } from "rxjs";

@Injectable()
export class MessageService {
  private subject = new Subject<any>();
  @Output() change: EventEmitter<boolean> = new EventEmitter();
  count;
  private followerData = new BehaviorSubject(null);
  followList = this.followerData.asObservable();

  private updatedUserDetail = new BehaviorSubject("");
  getupdatedUserDetail = this.updatedUserDetail.asObservable();

  public changeFollower() {
    this.followerData.next({});
  }

  checkCount(data: any) {
    this.count = data.count;
    this.change.emit(this.count);
  }

  checkUserCount(data: any) {
    this.count = data.count;
    this.change.emit(this.count);
  }

  sendMessage(obj: any) {
    // console.log('obj => ', obj);
    this.subject.next(obj);
  }

  clearMessage() {
    this.subject.next();
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  public setupdatedUserDetail(data: any) {
    this.updatedUserDetail.next(data);
  }
}
