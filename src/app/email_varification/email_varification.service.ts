import { Injectable } from '@angular/core';
// import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../../src/environments/environment';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
@Injectable()
export class EamilVarificationService {
  private api_host: any = environment.API_URL;
  constructor(private http: HttpClient) { }

  private headers = new Headers({ 'Content-Type': 'application/json' });

  // Artist email varification
  artistEmailVarification(id: any) {
    return this.http.get(`${this.api_host}/artist_email_verify/${id}`);
  }

  // User email varification
  userEmailVarification(id: any) {
    return this.http.get(`${this.api_host}/user_email_verify/${id}`);
  }
}
