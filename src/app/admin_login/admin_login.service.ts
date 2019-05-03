import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../../src/environments/environment';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
@Injectable()
export class AdminLoginService {
  private api_host : any = environment.API_URL;
  private user : any = '';
  private headers : any = '';

  constructor(private http: HttpClient) { 
    // this.user = JSON.parse(localStorage.getItem('user'));
    // this.headers = new HttpHeaders({ 'x-access-token' : this.user.token });  
  }
  
  login(data : any) {
    return this.http.post(`${this.api_host}/admin_login`, data);
  }
  // Forget passowrd
  forgetPassword(data : any) {
    return this.http.post(`${this.api_host}/admin_forgot_password`, data);
  }
}