import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { AlertService } from './alerts.service';
import { DataTableDirective } from 'angular-datatables';
import { ToastrService } from 'ngx-toastr';
import swal from 'sweetalert2';
@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: []
})
export class AlertsComponent implements OnInit {
  @ViewChildren(DataTableDirective) 
  dtElements: QueryList<DataTableDirective>;
  dtOptions: DataTables.Settings[] = [];
  flagged_list : any = [];
  constructor(
    private AlertService : AlertService,
    private toastr: ToastrService,
  ) {
    console.log("Admin dashboard component");
  }

  ngOnInit() {
    const that = this;
    this.dtOptions[0] = {
      pagingType: 'full_numbers',
      pageLength: 5,
      serverSide: true,
      processing: true,
      searching: false,
      ordering: false,
      lengthChange: false,
      scrollY :'200px',
      scrollCollapse: true,
      ajax: (dataTablesParameters: any, callback) => {
        setTimeout(() => {
          // dataTablesParameters['sort'] = [{"field" : this.sort, value : 1}];
          that.AlertService.getFlagedData(dataTablesParameters).subscribe((response) => {
            that.flagged_list = response['contest']['admin'];
            
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
          });
        },0);
      }
    };
  }

}
