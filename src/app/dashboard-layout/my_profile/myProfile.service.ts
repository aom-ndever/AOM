import { Injectable } from '@angular/core';
// import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../../environments/environment';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { MessageService } from '../../shared/message.service';
@Injectable()
export class MyProfileService {
  private api_host : any = environment.API_URL;
  private user : any = '';
  private headers : any = '';

  constructor(private http: HttpClient,private MessageService : MessageService,) { 
    this.user = JSON.parse(localStorage.getItem('user'));
    this.headers = new HttpHeaders({ 'x-access-token' : this.user.token });  
    this.MessageService.getMessage().subscribe((response) => {
      if(response && response['loggedin_user']) {
        this.user = response['loggedin_user'];
        this.headers = new HttpHeaders({ 'x-access-token' : this.user.token });
      }
    });
    
  }

  // get All music type
  getAllMusicType() {
    return this.http.get(`${this.api_host}/music_type`);
  }

  // update artist profile
  updateArtistProfile(data : any) {
    return this.http.put(`${this.api_host}/artist`, data, {headers : this.headers});
  }

  // Update user profile pic
  updateArtistProfileImage(data : any) {
    return this.http.put(`${this.api_host}/artist/update_image`, data, {headers : this.headers});
  }

  // Update user profile pic
  updateCoverImage(data : any) {
    return this.http.put(`${this.api_host}/artist/update_cover_image`, data, {headers : this.headers});
  }

  // update user profile
  updateUserProfile(data : any) {
    return this.http.put(`${this.api_host}/user`, data, {headers : this.headers});
  }

  // update user profile image
  updateUserProfileImage(data : any) {
    return this.http.put(`${this.api_host}/user/update_image`, data, {headers : this.headers});
  }

  // Get Artist by id
  getArtistById() {
    return this.http.get(`${this.api_host}/artist/artist_by_id`, {headers : this.headers});
  }

  // Get User by id
  getUserById() {
    return this.http.get(`${this.api_host}/user`, {headers : this.headers});
  }

  // Remove Artist Image
  deleteArtistImage(id : any) {
    return this.http.delete(`${this.api_host}/artist/image/${id}`, {headers : this.headers});
  }
  // Remove Artist Cover Image
  deleteArtistCoverImage(id : any) {
    return this.http.delete(`${this.api_host}/artist/cover_image/${id}`, {headers : this.headers});
  }
  // Remove User Image
  deleteUserImage(id : any) {
    return this.http.delete(`${this.api_host}/user/image/${id}`, {headers : this.headers});
  }
  // Change artist password
  changeArtistEmail(data : any) {
    return this.http.put(`${this.api_host}/artist/settings/email`, data, {headers : this.headers});
  }
  // Change user password
  changeArtistPassword(data : any) {
    return this.http.put(`${this.api_host}/artist/settings/password`, data, {headers : this.headers});
  }
  // Change user email
  changeUserEmail(data : any) {
    return this.http.put(`${this.api_host}/user/change/email`, data, {headers : this.headers});
  }
  // Change user password
  changeUserPassword(data : any) {
    return this.http.put(`${this.api_host}/user/change/password`, data, {headers : this.headers});
  }
  // Upload Artist media
  uploadMedia(data : any) {
    const url = this.api_host+'/artist/media';
    const req = new HttpRequest('POST', url, data, {
      reportProgress: true,
      headers : this.headers
    });
    return this.http.request(req);
  }
  // Get All media
  getAllMedia() {
    return this.http.get(`${this.api_host}/artist/media`, {headers : this.headers});
  }
  // Remove Media
  removeMediaById(id : any) {
    return this.http.delete(`${this.api_host}/artist/media/${id}`, {headers : this.headers});
  }
  // Get analytics data
  getAllAnalyticData(data : any) {
    return this.http.post(`${this.api_host}`, data, {headers : this.headers} );
  }
  // Get all followers analytics
  getAllFollowerAnalytic(data : any) {
    return this.http.post(`${this.api_host}/artist/analytics/followers`, data, {headers : this.headers} );
  }
  // Get all track/contenst 
  getAllTrackContestData(data : any) {
    return this.http.post(`${this.api_host}/artist/track/analytics/track`, data, {headers : this.headers});
  }
  // Get All overview analytics
  getAllOverviewAnalytic(data : any) {
    return this.http.post(`${this.api_host}/artist/analytics/overview`, data, {headers : this.headers});
  }
  // Get all download analytics
  getAllDownloadAnalytic(data : any) {
    return this.http.post(`${this.api_host}/artist/track/downloaded_track`, data, {headers : this.headers});
  }
  // Update notification setting for artist
  updateSettings(data : any) {
    return this.http.put(`${this.api_host}/artist/notification_settings`, data, {headers : this.headers});
  }

  // get bookmarked track
  getBookmarkedTrack(data : any) {
   return this.http.post(`${this.api_host}/user/bookmark`, data, {headers : this.headers});
  }

  // get all playlist of user
  getAllListenerPlaylist(data) {
    return this.http.post(`${this.api_host}/user/playlist`, data, {headers : this.headers});
  }
  // Create new user playlist
  addNewListenerPlaylist(data) {
    return this.http.post(`${this.api_host}/user/playlist/add`, data, {headers : this.headers});
  }
  // update user playlist by id
  updateListenerPlaylist(data, id) {
    return this.http.put(`${this.api_host}/user/playlist/${id}`, data, {headers : this.headers});
  }
  // Delete user playlist by id
  deleteListenerPlaylistById(id) {
    return this.http.delete(`${this.api_host}/user/playlist/${id}`, {headers : this.headers});
  }
  // Get track for playlist
  getPlaylistTrack(data, id) {
    return this.http.post(`${this.api_host}/user/playlist/${id}`, data, {headers:this.headers});
  }
  // Get track list based on search string
  getTrackForPlaylist(data) {
    return this.http.post(`${this.api_host}/get_track_for_playlist`, data);
  }
  // Add listener song to playlist
  addTrackListenerPlaylist(data, id) {
    return this.http.put(`${this.api_host}/user/playlist/add_track/${id}`, data, {headers : this.headers});
  }
  // Remove track from listener playlist
  removeTrackListenerPlaylist(data) {
    return this.http.put(`${this.api_host}/user/playlist/track`, data, {headers:this.headers});
  }
  // Get artist playlist
  getArtistPlaylist(data) {
    return this.http.post(`${this.api_host}/artist/playlist`, data, {headers : this.headers});
  }
  // get artist playlist track
  getArtistPlaylistTrack(data, id) {
    return this.http.post(`${this.api_host}/artist/playlist/${id}`, data, {headers:this.headers});
  }
  // Create artist playlist
  createArtistPlaylist(data) {
    return this.http.post(`${this.api_host}/artist/playlist/add`, data, {headers:this.headers});
  }
  // update artist playlist
  updateArtistPlaylist(data, id) {
    return this.http.post(`${this.api_host}/artist/playlist/${id}`, data, {headers : this.headers});
  }
  // Remove artist playlist
  removeArtistPlaylist(id) {
    return this.http.delete(`${this.api_host}/artist/playlist/${id}`, {headers:this.headers});
  }
  // Add track in artist playlist
  addTrackToArtistPlaylist(data, id) {
    return this.http.put(`${this.api_host}/artist/playlist/add_track/${id}`, data, {headers:this.headers});
  }
  // Remove track from artist playlist
  removeTrackFromArtistPlaylist(data) {
    return this.http.put(`${this.api_host}/artist/playlist/track`, data, {headers:this.headers});
  }
  // get all region
  getAllRegion() {
    return this.http.get(`${this.api_host}/region`);
  }
  // Get state based on region
  getStateByRegion(data : any) {
    return this.http.post(`${this.api_host}/state_by_region`, data);
  }
  // upgrade to artist
  upgradeToArtist(data : any) {
    return this.http.post(`${this.api_host}/user/upgrade_to_artist`, data, {headers:this.headers});
  }
  // Get All Card by artist
  getAllCard() {
    return this.http.get(`${this.api_host}/artist/card`, {headers:this.headers});
  }
  // Add new payment method
  addNewPaymentMethod(data) {
    return this.http.post(`${this.api_host}/artist/add_payment_method`, data, {headers : this.headers});
  }
  // Remove existing card
  removeCard(id) {
    return this.http.delete(`${this.api_host}/artist/card/${id}`, {headers:this.headers});
  }
}