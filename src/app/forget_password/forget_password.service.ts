import { Injectable } from '@angular/core';
// import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../../src/environments/environment';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
@Injectable()
export class ForgetPasswordService {
  private api_host: any = environment.API_URL;
  constructor(private http: HttpClient) { }

  private headers = new Headers({ 'Content-Type': 'application/json' });

  // Change password
  changePassword(data: any) {
    return this.http.post(`${this.api_host}/reset_password/`, data);
  }

  // Artist Change password
  artistChangePassword(data: any) {
    return this.http.post(`${this.api_host}/artist_reset_password/`, data);
  }

  // User change password
  userChangePassword(data: any) {
    return this.http.post(`${this.api_host}/user_reset_password`, data);
  }

  // Admin user reset password
  adminChangePassword(data: any) {
    return this.http.post(`${this.api_host}/admin_reset_password`, data);
  }

}
