import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LightboxModule } from "angular2-lightbox";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ChartModule, HIGHCHARTS_MODULES } from "angular-highcharts";
import * as highmaps from "highcharts/modules/map.src";
import { AmChartsModule } from "@amcharts/amcharts3-angular";
import { BsDropdownModule, ModalModule, PopoverModule } from "ngx-bootstrap";
import { DataTablesModule } from "angular-datatables";
import { AuthService } from "../shared/auth.service";
import { AdminLayoutComponent } from "./layout/admin_layout.component";
import { LayoutModule } from "./layout/admin.layout.module";
import { HomeComponent } from "./home/home.component";
import { AlertsComponent } from "./alerts/alerts.component";
import { ArtistComponent } from "./artist/artist.component";
import { UsersComponent } from "./users/users.component";
import { ContestComponent } from "./contest/contest.component";
import { RolesComponent } from "./roles/roles.component";
import { HomeService } from "./home/home.service";
import { ArtistService } from "./artist/artist.service";
import { UsersService } from "./users/users.service";
import { CustomMessageService } from "./custom_message/custom_message.service";
import { ContestService } from "./contest/contest.service";
import { RolesService } from "./roles/roles.service";
import { AlertService } from "./alerts/alerts.service";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { CustomMessageComponent } from "./custom_message/custom_message.component";
import { DropdownModule } from "primeng/primeng";
import { MultiSelectModule } from "primeng/multiselect";
import { InputTextareaModule } from "primeng/inputtextarea";
import { NotificationsComponent } from "./notifications/notifications.component";
import { NotificationsService } from "./notifications/notifications.service";

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    PopoverModule.forRoot(),
    LightboxModule,
    ChartModule,
    AmChartsModule,
    DataTablesModule,
    LazyLoadImageModule,
    DropdownModule,
    MultiSelectModule,
    InputTextareaModule,
    RouterModule.forChild([
      {
        path: "admin",
        component: AdminLayoutComponent,
        children: [
          { path: "", component: HomeComponent, canActivate: [AuthService] },
          {
            path: "home",
            component: HomeComponent,
            canActivate: [AuthService],
          },
          {
            path: "alerts",
            component: AlertsComponent,
            canActivate: [AuthService],
          },
          {
            path: "artist",
            component: ArtistComponent,
            canActivate: [AuthService],
          },
          {
            path: "users",
            component: UsersComponent,
            canActivate: [AuthService],
          },
          {
            path: "send_instructions",
            component: CustomMessageComponent,
            canActivate: [AuthService],
          },
          {
            path: "notifications",
            component: NotificationsComponent,
            canActivate: [AuthService],
          },
          {
            path: "contest",
            component: ContestComponent,
            canActivate: [AuthService],
          },
          {
            path: "roles",
            component: RolesComponent,
            canActivate: [AuthService],
          },
        ],
      },
    ]),
  ],
  declarations: [
    HomeComponent,
    AlertsComponent,
    ArtistComponent,
    UsersComponent,
    CustomMessageComponent,
    NotificationsComponent,
    ContestComponent,
    RolesComponent,
  ],
  providers: [
    AuthService,
    HomeService,
    ArtistService,
    UsersService,
    CustomMessageService,
    NotificationsService,
    ContestService,
    RolesService,
    AlertService,
    { provide: HIGHCHARTS_MODULES, useFactory: () => [highmaps] },
  ],
})
export class AdminLayoutModule {}
