import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../../../src/environments/environment';
@Injectable()
export class DashboardLayoutService {
    private api_host: any = environment.API_URL;
    private user: any = '';
    private headers: any = '';
    constructor(private http: HttpClient) {
        // this.user = JSON.parse(localStorage.getItem('user'));
        // this.headers = new HttpHeaders({ 'x-access-token' : this.user.token });
    }
    // download the track
    downloadTrack(id: any) {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.headers = new HttpHeaders({ 'x-access-token': this.user.token });
        return this.http.get(`${this.api_host}/user/track/${id}/download`, { headers: this.headers });
    }
    // share track via email
    shareTrackViaEmail(data: any) {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.headers = new HttpHeaders({ 'x-access-token': this.user.token });
        return this.http.post(`${this.api_host}/user/track/share_track_by_mail`, data, { headers: this.headers });
    }
    // share track via email
    shareTrackViaSms(data: any) {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.headers = new HttpHeaders({ 'x-access-token': this.user.token });
        return this.http.post(`${this.api_host}/user/track/share_track_by_sms`, data, { headers: this.headers });
    }
}
