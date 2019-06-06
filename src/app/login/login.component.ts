import { Component, OnInit } from '@angular/core';
import { MessageService } from '../shared/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private MessageService: MessageService) {
    var cnt = {
      count: 0
    };
    this.MessageService.checkCount(cnt);
  }

  ngOnInit() {
  }

}
