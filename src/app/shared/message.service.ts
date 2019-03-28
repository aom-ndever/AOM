
//import { Subject } from 'rxjs/Subject';

import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class MessageService {
    private subject = new Subject<any>();

    @Output() change: EventEmitter<boolean> = new EventEmitter();

    count;

    checkCount(data: any) {
        this.count = data.count;
        this.change.emit(this.count);
    }

    sendMessage(obj: any) {
        this.subject.next(obj);
    }

    clearMessage() {
        this.subject.next();
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}