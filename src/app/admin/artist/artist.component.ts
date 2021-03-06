import { Component, OnInit, ViewChild } from '@angular/core';
import { ArtistService } from './artist.service';
import { DataTableDirective } from 'angular-datatables';
import { ToastrService } from 'ngx-toastr';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { environment } from '../../../../src/environments/environment';
import swal from 'sweetalert2';
class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: []
})
export class ArtistComponent implements OnInit {
  @ViewChild(DataTableDirective)
  datatableElement: DataTableDirective;


  modalRef: BsModalRef;
  dtOptions: DataTables.Settings = {};
  artist_data: any = [];
  music_type: any = [];
  region_filter: any = [];
  state_list: any = [];
  search_str: any = '';
  music_type_id: any = '';
  artist_id: any = '';
  sort_by: any = -1;
  artist_detail: any = {};
  artist_track: any = [];
  artist_flag: any = [];
  artist_img_url: any = environment.API_URL + environment.ARTIST_IMG;
  artist_media_url: any = environment.API_URL + environment.ARTIST_MEDIA;
  user: any = '';
  artist_row_cnt = 1;
  constructor(
    private artistService: ArtistService,
    private toastr: ToastrService,
    private modalService: BsModalService
  ) {
    this.getAllState();
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  ngOnInit() {
    const that = this;
    this.getAllMusicType();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      serverSide: true,
      processing: true,
      searching: false,
      ordering: false,
      lengthChange: false,
      responsive: true,
      scrollCollapse: true,
      language: {
        'processing': '<i class="fa fa-spinner fa-spin loader"></i>',
      },
      ajax: (dataTablesParameters: any, callback) => {
        setTimeout(() => {
          dataTablesParameters['search'] = that.search_str;
          dataTablesParameters['order'] = '';
          dataTablesParameters['sort_by'] = that.sort_by;
          dataTablesParameters['filter'] = [];
          if (that.music_type_id) {
            dataTablesParameters['filter'].push(
              { 'field': 'music_type', value: that.music_type_id }
            );
          }
          if (that.region_filter.length) {
            dataTablesParameters['filter'].push(
              { 'field': 'state', value: this.region_filter }
            );
          }
          that.artistService.getAllArtist(dataTablesParameters).subscribe(response => {
            that.artist_data = response['artist']['artist'];
            callback({
              recordsTotal: response['artist']['recordsTotal'],
              recordsFiltered: response['artist']['recordsTotal'],
              data: []
            });
            that.artist_row_cnt = (dataTablesParameters['start'] + 1);
          });
        }, 0);

      },
      columns: [{ data: '' },
      { data: 'first_name' },
      { data: 'status' },
      { data: 'no_of_votes' },
      { data: 'no_of_likes' },
      { data: 'no_of_followers' },
      { data: 'no_of_comments' },
      { data: '' }
      ]
    };
  }


  // get all artist data
  getAllArtistData(data: any) {
    this.artistService.getAllArtist(data).subscribe(response => {
      this.artist_data = response['artist'];
    });
  }
  // get all music type
  getAllMusicType() {
    this.artistService.getAllMusicType().subscribe(response => {
      this.music_type = response['music'];
    });
  }

  // Filter data based on music type
  filterByMusicType(id: any) {
    const that = this;
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.draw();
    });
  }
  // Filter artist based on search string
  filterBasedOnSearch(e: any) {
    if (e.keyCode === 13) {
      const that = this;
      this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.draw();
      });
    }
  }
  // Sort artist data
  sortArtist(val: any) {
    const that = this;
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.draw();
    });
  }
  // suspend artist
  suspendArtist(id: any, flag) {
    swal({
      title: 'Are you sure?',
      text: `You want to ${flag ? 'Un-suspend' : 'Suspend'} this account!`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((flag) => {
      if (flag.value) {
        this.artistService.suspendArtist(id).subscribe((response) => {
          this.toastr.success(response['message'], 'Success!');
          this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
            dtInstance.draw();
          });
        }, (error) => {
          this.toastr.error(error['error'].message, 'Error!');
        });
      }
    });

  }
  openModal(template: any, id: any) {
    const data = {
      artist_id: id
    };
    this.artist_id = id;
    this.artistService.getArtist(data).subscribe((response) => {
      this.artist_detail = response['artist'];
      const dob = new Date(this.artist_detail['dob']);
      const dt = new Date();
      this.artist_detail['old'] = dt.getFullYear() - dob.getFullYear();
    });
    this.artistService.getArtistTrack(data).subscribe((response) => {
      this.artist_track = response['track']['music'];
    });
    this.artistService.getArtistFlagDetails(data).subscribe((response) => {
      this.artist_flag = response['artist'];
    });
    this.modalRef = this.modalService.show(template, { backdrop: 'static' });
  }

  removeTrack(id: any) {
    const thi = this;
    // swal({
    //   title: 'Are you sure?',
    //   text: "You won't be able to revert this!",
    //   type: 'warning',
    //   showCancelButton: true,
    //   confirmButtonColor: '#3085d6',
    //   cancelButtonColor: '#d33',
    //   confirmButtonText: 'Yes, delete it!'
    // }).then((flag) => {
    //   if(flag.value) {
    thi.artistService.removeArtistTrack(id).subscribe(response => {
      const data = { artist_id: thi.artist_id };
      thi.artistService.getArtistTrack(data).subscribe((resp) => {
        thi.artist_track = resp['track']['music'];
      });
      thi.toastr.success(response['message'], 'Success!');
    }, error => {
      thi.toastr.error(error['error'].message, 'Error!');
    });
    //   }
    // });
  }
  // Suspend artist track
  suspendArtistTrack(id: any) {
    this.artistService.suspendArtistTrack(id).subscribe((response) => {
      const data = { artist_id: this.artist_id };
      this.artistService.getArtistTrack(data).subscribe((resp) => {
        this.artist_track = resp['track']['music'];
      });
      this.toastr.success(response['message'], 'Success!');
    }, (error) => {
      this.toastr.error(error['error'].message, 'Error!');
    });
  }

  markAsFeatured() {
    const data = {
      artist_id: this.artist_detail['_id']
    };
    this.artistService.markAsFeatured(data).subscribe((response) => {
      this.toastr.success(response['message'], 'Success!');
      this.artistService.getArtist(data).subscribe((resp) => {
        this.artist_detail = resp['artist'];
        const dob = new Date(this.artist_detail['dob']);
        const dt = new Date();
        this.artist_detail['old'] = dt.getFullYear() - dob.getFullYear();
      });
    }, (error) => {
      this.toastr.error(error['error'].message, 'Error!');
    });
  }

  // get all state
  getAllState() {
    this.artistService.getAllState().subscribe((response) => {
      this.state_list = response['state'];
    });
  }
  // Add region for filtering
  addRegionForFilter(flag: any, val: any) {
    if (flag) {
      this.region_filter.push(val);
    } else {
      const index = this.region_filter.indexOf(val);
      this.region_filter.splice(index, 1);
    }
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.draw();
    });
  }
  // Hide popover
  hidePopover() {
    const data = { artist_id: this.artist_id };
    this.artistService.getArtistTrack(data).subscribe((response) => {
      this.artist_track = response['track']['music'];
    });
  }
}
