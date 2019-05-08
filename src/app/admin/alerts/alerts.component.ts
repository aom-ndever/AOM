import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { AlertService } from './alerts.service';
import { DataTableDirective } from 'angular-datatables';
import { ToastrService } from 'ngx-toastr';
import swal from 'sweetalert2';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: []
})
export class AlertsComponent implements OnInit {
  @ViewChildren(DataTableDirective)
  dtElements: QueryList<DataTableDirective>;
  dtOptions: DataTables.Settings[] = [];
  flagged_list: any = [];
  flag_row_cnt = 1;
  constructor(
    private AlertService: AlertService,
    private toastr: ToastrService,
    private ngxService: NgxUiLoaderService
  ) {
    console.log('Admin dashboard component');
  }

  ngOnInit() {
    // this.ngxService.start();
    const that = this;
    this.dtOptions[0] = {
      pagingType: 'full_numbers',
      pageLength: 5,
      serverSide: true,
      processing: true,
      searching: false,
      ordering: false,
      lengthChange: false,
      scrollY: '200px',
      scrollCollapse: true,
      language: {
        'processing': '<i class="fa fa-spinner fa-spin loader"></i>',
      },
      ajax: (dataTablesParameters: any, callback) => {
        setTimeout(() => {
          that.AlertService.getFlagedData(dataTablesParameters).subscribe((response) => {
            that.flagged_list = response['contest']['admin'];
            // this.ngxService.stop();
            callback({
              recordsTotal: response['contest']['recordsTotal'],
              recordsFiltered: response['contest']['recordsTotal'],
              data: []
            });
          }, (error) => {
            that.flagged_list = [];

            callback({
              recordsTotal: 0,
              recordsFiltered: 0,
              data: []
            });
            that.flag_row_cnt = (dataTablesParameters['start'] + 1);
          });
        }, 0);
      }
    };
  }

}
