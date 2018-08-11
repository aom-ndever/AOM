import { Injectable } from '@angular/core';
// import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../../environments/environment';
@Injectable()
export class CarouselService {
  private api_host : any = environment.API_URL;
  constructor(private http: HttpClient) { }

  private user : any = '';
  private headers : any = '';

  // Follow the artist
  followArtist(data : any) {
    // Follow the artist 
    this.user = JSON.parse(localStorage.getItem('user'));
    this.headers = new HttpHeaders({ 'x-access-token' : this.user.token });  
    return this.http.post(`${this.api_host}/user/artist/follow`, data, {headers : this.headers});
  }
  
}