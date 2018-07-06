import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../../environments/environment';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
@Injectable()
export class UsersService {
  private api_host : any = environment.API_URL;
  private user : any = '';
  private headers : any = '';

  constructor(private http: HttpClient) { 
    this.user = JSON.parse(localStorage.getItem('user'));
    this.headers = new HttpHeaders({ 'x-access-token' : this.user.token });  
  }
  // Get all artist details
  getAllUser(data : any) {
    return this.http.post(`${this.api_host}/admin/get_user`, data, {headers : this.headers});
  }
   // suspend artist
   suspendUser(id : any) {
    return this.http.post(`${this.api_host}/admin/suspend/user/${id}`, null, {headers : this.headers});
  }
}