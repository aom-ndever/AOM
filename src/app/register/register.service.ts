import { Injectable } from "@angular/core";
// import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import "rxjs/add/operator/toPromise";
import { environment } from "../../../src/environments/environment";
import { dashCaseToCamelCase } from "@angular/compiler/src/util";
@Injectable()
export class RegisterService {
  private api_host: any = environment.API_URL;
  constructor(private http: HttpClient) {}

  private headers = new Headers();

  getLocationFromZipCode(code: any) {
    return this.http.get(
      "https://maps.googleapis.com/maps/api/geocode/json?address=" +
        code +
        "&key=" +
        environment.GMAP_KEY
    );
  }
  // verify serial no
  verifySerialNumber(data: any) {
    return this.http.post(`${this.api_host}/serial_no`, data);
  }

  // Artist Registration service
  artistRegistration(data: any) {
    return this.http.post(`${this.api_host}/artist_registration`, data);
  }

  // Listener Registration service
  listenerRegistration(data: any) {
    return this.http.post(`${this.api_host}/user_registration`, data);
  }

  // get All music type
  getAllMusicType() {
    return this.http.get(`${this.api_host}/music_type`);
  }

  // get all region
  getAllRegion() {
    return this.http.get(`${this.api_host}/region`);
  }
  // Get state based on region
  getStateByRegion(data: any) {
    return this.http.post(`${this.api_host}/state_by_region`, data);
  }
  // Facebook login
  userFacebookLogin(data: any) {
    return this.http.post(`${this.api_host}/user_registration_facebook`, data);
  }
  // Google login
  userGoogleLogin(data: any) {
    return this.http.post(`${this.api_host}/user_registration_gmail`, data);
  }
}
