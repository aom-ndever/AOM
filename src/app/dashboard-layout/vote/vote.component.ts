import { Component, OnInit, ViewChild } from '@angular/core';
import { VoteService } from './vote.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../environments/environment' ;
import { MessageService } from '../../shared/message.service';
import { Subscription } from 'rxjs/Subscription';
import { DataTableDirective } from 'angular-datatables';
@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: []
})
export class VoteComponent implements OnInit {
  @ViewChild(DataTableDirective)
  datatableElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  show_filter : boolean = false;
  music_list : any = [];
  state_list : any = [];
  toggSearch : boolean = false;
  show_loader : boolean = false;
  search_str : any = '';
  adv_filter : any = {};
  region_filter : any = [];
  artist_img_url : any = environment.API_URL+environment.ARTIST_IMG;
  track_url : any = environment.API_URL+environment.ARTIST_TRACK;
  audio_ins : any = [];
  audio_ins_list : any = [];
  audio_ins1 : any = [];
  audio_ins_list1 : any = [];
  my_follower_list : any = [];
  winner_list : any = [];
  contest_list : any = [];
  contest_data : any = '';
  participants : any = [];
  show_spinner : boolean = false;
  vote_spinner : boolean = false;
  advance_filter : any = {};
  start : any = 0;
  length : any = 10;
  subscription: Subscription;
  constructor(
    private VoteService : VoteService,
    private toastr : ToastrService,
    private MessageService : MessageService
  ) {
    this.getAllState();
    this.getAllMusicType();
    
    this.getAllContest();
    
    this.subscription = this.MessageService.getMessage().subscribe((response) => {
      if(response && response['list'] != 2) {
        this.audio_ins.forEach((ele, idx) => { this.audio_ins[idx] = false; } );
      }
      if(response && response['action'] == 'stop' && response['list'] == 1) {
        this.audio_ins1[response['index']] = false;
      }
      if(response && response['action'] == 'stop' && response['list'] == 2) {
        this.audio_ins[response['index']] = false;
      }
      if(response && response['action'] == 'start' && response['list'] == 1) {
        this.audio_ins1[response['index']] = true;
      }
      if(response && response['action'] == 'start' && response['list'] == 2) {
        this.audio_ins[response['index']] = true;
      }
      if(response && response['list'] == 1 && response['action'] == 'next' || response['action'] == 'prev' ) {
        if(response['track_action'] && response['track_action'] == 'pause') {
          this.audio_ins1.forEach((ele, idx) => { this.audio_ins1[idx] = false; } );
          this.audio_ins1[response['index']] = true;
        }
      }
      if(response && response['list'] == 2 && response['action'] == 'next' || response['action'] == 'prev' ) {
        if(response['track_action'] && response['track_action'] == 'pause') {
          this.audio_ins.forEach((ele, idx) => { this.audio_ins[idx] = false; } );
          this.audio_ins[response['index']] = true;
        }
      }
    });
  }

  ngOnInit() {
    const that = this;
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      serverSide: true,
      processing: true,
      searching: false,
      ordering: false,
      responsive: true,
      scrollCollapse: true,
      lengthChange: false,
      ajax: (dataTablesParameters: any, callback) => {
        setTimeout(() => {
          dataTablesParameters['search'] = that.search_str;
          dataTablesParameters['music_type'] = that.advance_filter.music_type;
          dataTablesParameters['filter'] = [];
          if(that.region_filter.length) {
            dataTablesParameters['filter'].push(
              {'field' : 'state', value :  this.region_filter}
            );
          }
          that.VoteService.getWinnersData(dataTablesParameters).subscribe(response => {
            this.winner_list = response['track'];
              this.audio_ins1 = [];
              this.audio_ins_list1 = [];
              this.winner_list.forEach((ele) => {
                this.audio_ins1.push(false);
                this.audio_ins_list1.push(ele['track_id']);
              });
                callback({
                  recordsTotal: response['user']['recordsTotal'],
                  recordsFiltered: response['user']['recordsTotal'],
                  data: []
                });
          });
        },0);
      }
    };
  }

  toggleFilter() {
    this.show_filter = !this.show_filter;
  }
  // Get all music list
  getAllMusicType() {
    this.VoteService.getAllMusicType().subscribe(response => {
      this.music_list = response['music'];
    });
  }
  // get all state
  getAllState() {
    this.VoteService.getAllState().subscribe((response) => {
      this.state_list = response['state'];
    });
  }
  // Get all participants
  getAllParticipants(data) {
    this.show_loader = true;
    this.participants = [];
    this.VoteService.getAllParticipants(data).subscribe((response) => {
      this.participants = response['track'];
      this.audio_ins =  [];
      this.audio_ins_list = [];
      this.participants.forEach((ele) => {
        this.audio_ins.push(false)
        this.audio_ins_list.push(ele['track_id']);
      });
    }, (error) => {
      this.show_loader = false;
      this.toastr.error(error['error'].message, 'Error!');
    }, () => {
      this.show_loader = false;
    });
  }
  // Get all contest details
  getAllContest() {
    let data = {
      music_type : this.adv_filter.music_type
    }
    this.VoteService.getAllContest(data).subscribe((response) => {
      this.contest_list = response['contest']['winner'];
      if(this.contest_list.length > 0) {
        this.contest_data = this.contest_list[0]['_id'];
        let data = {
          start : this.start,
          length : this.length,
          contest_id : this.contest_data
        };
        this.getAllParticipants(data);
        this.getContestWinner();
      }
    });
  }
   // Follow artist
   followArtist(id : any) {
    let data = JSON.parse(localStorage.getItem('user'));
    if(data && data.user) {
      let data = {
        artist_id : id
      };  
      this.VoteService.followArtist(data).subscribe(response => {
        this.toastr.success(response['message'], 'Success!'); 
      }, error => {
        this.toastr.error(error['error'].message, 'Error!');
      });
    } else {
      this.toastr.info('Please signin as listener to follow the artist.', 'Information!');
    }
  }
  // vote to the track
  voteTrack(track_id, artist_id, index) {
    let user = JSON.parse(localStorage.getItem('user'));
    if(user && user.user) { 
      let data = {
        track_id : track_id,
        artist_id : artist_id
      };
      this.vote_spinner = true;
      this.VoteService.giveVoteToTrack(data).subscribe((response) => {
        if(!(response['message'].toLowerCase() == 'already voted')) {
          this.participants[index]['track_id']['no_of_votes'] += 1; 
        }
        this.getContestWinner();
        this.toastr.success(response['message'], 'Success!');
      },(error) => {
        this.toastr.error(error['error'].message, 'Error!');
        this.vote_spinner = false;
      }, () => {
        this.vote_spinner = false;
      });
    } else {
      this.toastr.info('Please signin as listener to follow the artist.', 'Information!');
    }
    
  }
  // Load more participants
  loadMore() {
    this.show_spinner = true;
    this.start = (this.start + this.length);
    let data = {
      start : this.start,
      length : this.length,
      contest_id : this.contest_data
    };
    this.VoteService.getAllParticipants(data).subscribe((response) => {
      if(response && response['track'].length > 0) {
        this.participants = [...this.participants,...response['track']];
        this.audio_ins = []; 
        this.audio_ins_list = [];
        this.participants.forEach((ele) => {
          this.audio_ins.push(false)
          this.audio_ins_list.push(ele['track_id']);
        });
      }
    },(error) => {
      this.show_spinner = false;
    }, () => {
      this.show_spinner = false;
    });
  }
  // Play audio
  playAudio(name : any, index : any, data : any){
    data.forEach((ele, idx) => {
      this.audio_ins[idx] = false;
    });
    this.audio_ins[index] = true;
    this.MessageService.sendMessage({data : data, index : index, action : 'start', list : 2});
    
  }
  // Stop audio
  stopAudio(index, data : any) {
    data.forEach((ele, idx) => {
      this.audio_ins[idx] = false;
    });
    this.MessageService.sendMessage({data : data, index : index, action : 'stop', list : 2});
    
  }

  // Play audio
  playAudio1(name : any, index : any, data : any){
    data.forEach((ele, idx) => {
      this.audio_ins1[idx] = false;
    });
    this.audio_ins1[index] = true;
    this.MessageService.sendMessage({data : data, index : index, action : 'start', list : 1});
    
  }
  // Stop audio
  stopAudio1(index, data : any) {
    data.forEach((ele, idx) => {
      this.audio_ins1[idx] = false;
    });
    this.MessageService.sendMessage({data : data, index : index, action : 'stop', list : 1});
    
  }
  // change contest
  change_contest () {
    this.start = 0;
    let data = {
      start : this.start,
      length : this.length,
      contest_id : this.contest_data
    };
    this.getAllParticipants(data);
  }
  // get contest winner
  getContestWinner() {
    let data = {
      contest_id : this.contest_data
    };
    this.VoteService.getWinnersData(data).subscribe((response) => {
      this.winner_list = response['track'];
      this.audio_ins1 = [];
      this.audio_ins_list1 = [];
      this.winner_list.forEach((ele) => {
        this.audio_ins1.push(false);
        this.audio_ins_list1.push(ele['track_id']);
      });
    });
  } 
  // Advance filter
  advanceFilter() {
    let data = {
      "filter" : []
    };
    console.log('type', this.advance_filter.music_type);
    if(this.advance_filter.music_type && this.advance_filter.music_type != "") {
      data['music_type'] = this.advance_filter.music_type;
    }
    
    if(this.region_filter.length > 0) {
      data['filter'].push({
        'field' : 'state', value :  this.region_filter
      });
    }
    this.show_spinner = true;
    
    this.VoteService.getAllContest(data).subscribe((response) => {
      this.contest_list = response['contest']['winner'];
      if(this.contest_list.length > 0) {
        this.contest_data = this.contest_list[0]['_id'];
        let data = {
          start : this.start,
          length : this.length,
          contest_id : this.contest_data
        };
        this.getAllParticipants(data);
        this.getContestWinner();
      } else {
        this.participants = [];
        this.winner_list = [];
      }
    }, (error) => {
      this.toastr.error(error['error'].message,'Error!');
      this.show_filter = false;
      this.show_spinner = false;
    }, () => {
      this.show_filter = false;
      this.show_spinner = false;
    });
  }
}
