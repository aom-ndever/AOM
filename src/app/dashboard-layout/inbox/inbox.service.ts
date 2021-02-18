import { Injectable } from "@angular/core";
import { environment } from "../../../../src/environments/environment";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

@Injectable()
export class InboxService {
  private api_host: any = environment.API_URL;
  constructor(private http: HttpClient) {}
  private user: any = "";

  getArtistMessages() {
    this.user = JSON.parse(localStorage.getItem("user"));
    var headers = new HttpHeaders({ "x-access-token": this.user.token });
    return this.http.get(`${this.api_host}/artist/message`, {
      headers: headers,
    });
  }

  deleteMessage(data) {
    console.log(" : data ==> ", data);
    this.user = JSON.parse(localStorage.getItem("user"));
    var headers = new HttpHeaders({ "x-access-token": this.user.token });
    return this.http.post(`${this.api_host}/artist/deleteMessage`, data, {
      headers: headers,
    });
  }

  markAsRead(data) {
    console.log(" : data ==> ", data);
    this.user = JSON.parse(localStorage.getItem("user"));
    var headers = new HttpHeaders({ "x-access-token": this.user.token });
    return this.http.post(`${this.api_host}/artist/message_markAsRead`, data, {
      headers: headers,
    });
  }

  getMessageData(id) {
    console.log(" : data ==> ", id);
    this.user = JSON.parse(localStorage.getItem("user"));
    var headers = new HttpHeaders({ "x-access-token": this.user.token });
    return this.http.get(`${this.api_host}/artist/message/` + id, {
      headers: headers,
    });
  }
}
