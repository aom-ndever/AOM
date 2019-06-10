
//import { Subject } from 'rxjs/Subject';

import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable()
export class MessageService {
    private subject = new Subject<any>();
    // private followdata: followerData;

    // currentFollowers = this.followers.asObservable();

    @Output() change: EventEmitter<boolean> = new EventEmitter();

    count;
    private followerData = new BehaviorSubject(null);
    followList = this.followerData.asObservable();
    public changeFollower() {
        this.followerData.next({});
    }
    checkCount(data: any) {
        this.count = data.count;
        this.change.emit(this.count);
    }

    sendMessage(obj: any) {
        console.log('obj => ', obj);
        this.subject.next(obj);
    }

    clearMessage() {
        this.subject.next();
    }

    getMessage(): Observable<any> {
        console.log('get message  => ');
        console.log('this.subject => ', this.subject);
        return this.subject.asObservable();
    }

    // changeFollowStatus(value) {
    //     this.followers.next(value);
    // }
}
// export interface followerData {
//     user_id: JSON;
//     image: string;
// }
