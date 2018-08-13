import { Injectable } from '@angular/core';
// import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../../environments/environment';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
@Injectable()
export class HeaderService {
  private api_host : any = environment.API_URL;
  constructor(private http: HttpClient) { }

  private headers = new Headers({ 'Content-Type': 'application/json' });

  //Artist login
  artist_login(data : any) {
    return this.http.post(`${this.api_host}/artist_login`, data);
  }
  //user login
  user_login(data : any) {
    return this.http.post(`${this.api_host}/user_login`, data);
  }
  // Forget password for artist
  artistForgetPassword(data : any) {
    return this.http.post(`${this.api_host}/artist_forgot_password`, data);
  }
  // Forget password for user
  userForgetPassword(data : any) {
    return this.http.post(`${this.api_host}/user_forgot_password`, data);
  }
  // Facebook login
  userFacebookLogin(data : any) {
    return this.http.post(`${this.api_host}/user_registration_facebook`, data);
  }
  // Google login
  userGoogleLogin(data : any) {
    return this.http.post(`${this.api_host}/user_registration_gmail`, data);
  }
}
