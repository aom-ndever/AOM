import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../../environments/environment';
@Injectable()
export class DashboardLayoutService {
    private api_host : any = environment.API_URL;
    private user : any = '';
    private headers : any = '';
    constructor(private http: HttpClient) { 
        // this.user = JSON.parse(localStorage.getItem('user'));
        // this.headers = new HttpHeaders({ 'x-access-token' : this.user.token });  
    }
    // download the track 
    downloadTrack(id : any) {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.headers = new HttpHeaders({ 'x-access-token' : this.user.token });
        return this.http.get(`${this.api_host}/user/track/${id}/download`, {headers : this.headers});
    }
}