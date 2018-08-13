webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/admin/admin_layout.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminLayoutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_lightbox__ = __webpack_require__("../../../../angular2-lightbox/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_lightbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_lightbox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular_highcharts__ = __webpack_require__("../../../../angular-highcharts/angular-highcharts.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_highcharts_modules_map_src__ = __webpack_require__("../../../../highcharts/modules/map.src.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_highcharts_modules_map_src___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_highcharts_modules_map_src__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__amcharts_amcharts3_angular__ = __webpack_require__("../../../../@amcharts/amcharts3-angular/es2015/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular_datatables__ = __webpack_require__("../../../../angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_auth_service__ = __webpack_require__("../../../../../src/app/shared/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__layout_admin_layout_component__ = __webpack_require__("../../../../../src/app/admin/layout/admin_layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__layout_admin_layout_module__ = __webpack_require__("../../../../../src/app/admin/layout/admin.layout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__home_home_component__ = __webpack_require__("../../../../../src/app/admin/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__alerts_alerts_component__ = __webpack_require__("../../../../../src/app/admin/alerts/alerts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__artist_artist_component__ = __webpack_require__("../../../../../src/app/admin/artist/artist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__users_users_component__ = __webpack_require__("../../../../../src/app/admin/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__contest_contest_component__ = __webpack_require__("../../../../../src/app/admin/contest/contest.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__roles_roles_component__ = __webpack_require__("../../../../../src/app/admin/roles/roles.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__home_home_service__ = __webpack_require__("../../../../../src/app/admin/home/home.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__artist_artist_service__ = __webpack_require__("../../../../../src/app/admin/artist/artist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__users_users_service__ = __webpack_require__("../../../../../src/app/admin/users/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__contest_contest_service__ = __webpack_require__("../../../../../src/app/admin/contest/contest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__roles_roles_service__ = __webpack_require__("../../../../../src/app/admin/roles/roles.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











// import more from 'highcharts/highcharts-more.src';

















var AdminLayoutModule = /** @class */ (function () {
    function AdminLayoutModule() {
    }
    AdminLayoutModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_16__layout_admin_layout_module__["a" /* LayoutModule */],
                __WEBPACK_IMPORTED_MODULE_6_ngx_toastr__["a" /* ToastrModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_12_ngx_bootstrap__["a" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_12_ngx_bootstrap__["b" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_angular2_lightbox__["LightboxModule"],
                __WEBPACK_IMPORTED_MODULE_9_angular_highcharts__["b" /* ChartModule */],
                __WEBPACK_IMPORTED_MODULE_11__amcharts_amcharts3_angular__["a" /* AmChartsModule */],
                __WEBPACK_IMPORTED_MODULE_13_angular_datatables__["b" /* DataTablesModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* RouterModule */].forChild([
                    {
                        path: 'admin',
                        component: __WEBPACK_IMPORTED_MODULE_15__layout_admin_layout_component__["a" /* AdminLayoutComponent */],
                        children: [
                            { path: '', component: __WEBPACK_IMPORTED_MODULE_17__home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__shared_auth_service__["a" /* AuthService */]] },
                            { path: 'alerts', component: __WEBPACK_IMPORTED_MODULE_18__alerts_alerts_component__["a" /* AlertsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__shared_auth_service__["a" /* AuthService */]] },
                            { path: 'artist', component: __WEBPACK_IMPORTED_MODULE_19__artist_artist_component__["a" /* ArtistComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__shared_auth_service__["a" /* AuthService */]] },
                            { path: 'users', component: __WEBPACK_IMPORTED_MODULE_20__users_users_component__["a" /* UsersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__shared_auth_service__["a" /* AuthService */]] },
                            { path: 'contest', component: __WEBPACK_IMPORTED_MODULE_21__contest_contest_component__["a" /* ContestComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__shared_auth_service__["a" /* AuthService */]] },
                            { path: 'roles', component: __WEBPACK_IMPORTED_MODULE_22__roles_roles_component__["a" /* RolesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__shared_auth_service__["a" /* AuthService */]] }
                        ]
                    }
                ])
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_17__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_18__alerts_alerts_component__["a" /* AlertsComponent */],
                __WEBPACK_IMPORTED_MODULE_19__artist_artist_component__["a" /* ArtistComponent */],
                __WEBPACK_IMPORTED_MODULE_20__users_users_component__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_21__contest_contest_component__["a" /* ContestComponent */],
                __WEBPACK_IMPORTED_MODULE_22__roles_roles_component__["a" /* RolesComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__shared_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_23__home_home_service__["a" /* HomeService */],
                __WEBPACK_IMPORTED_MODULE_24__artist_artist_service__["a" /* ArtistService */],
                __WEBPACK_IMPORTED_MODULE_25__users_users_service__["a" /* UsersService */],
                __WEBPACK_IMPORTED_MODULE_26__contest_contest_service__["a" /* ContestService */],
                __WEBPACK_IMPORTED_MODULE_27__roles_roles_service__["a" /* RolesService */],
                { provide: __WEBPACK_IMPORTED_MODULE_9_angular_highcharts__["c" /* HIGHCHARTS_MODULES */], useFactory: function () { return [__WEBPACK_IMPORTED_MODULE_10_highcharts_modules_map_src__]; } }
            ]
        })
    ], AdminLayoutModule);
    return AdminLayoutModule;
}());



/***/ }),

/***/ "../../../../../src/app/admin/alerts/alerts.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Page Content -->\n<div id=\"page-content-wrapper\">\n           \n    <div class=\"container-fluid\">\n        <div>\n            <h3 class=\"Audience-Overview\">Copyright Notices </h3>\n            <div class=\"artists_table copyright_table table-responsive\">\n                <table class=\"table\">\n                    <thead>\n                      <tr>\n                        <th>N<sup>O</sup></th>\n                        <th>Artist Name</th>\n                        <th>Date</th>\n                        <th>Message</th>\n                        <th>Actions</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                    <tr>\n                        <td>1.</td>\n                        <td>Shavn Miller</td>\n                        <td>May 12, 2018</td>\n                        <td class=\"td_img\"><div class=\"meassge_td\"><img src=\"img/vote.png\"/>Lorem ipsum dolor sit amet, adipiscing</div></td>\n                        <td class=\"td_img\"><img src=\"img/likes.png\"/>Suspend</td>\n                    </tr>\n                    <tr>\n                        <td>2.</td>\n                        <td>Anna Bill</td>\n                        <td>May 11, 2018</td>\n                        <td class=\"td_img\"><div class=\"meassge_td\"><img src=\"img/vote.png\"/>Lorem ipsum dolor sit amet, adipiscing</div></td>\n                        <td class=\"td_img\"><img src=\"img/likes.png\"/>Suspend</td>\n                    </tr>\n                    <tr>\n                        <td>3.</td>\n                        <td>Lilo</td>\n                        <td>May 11, 2018</td>\n                        <td class=\"td_img\"><div class=\"meassge_td\"><img src=\"img/vote.png\"/>Lorem ipsum dolor sit amet, adipiscing</div></td>\n                        <td class=\"td_img\"><img src=\"img/likes.png\"/>Suspend</td>\n                    </tr>\n                    <tr>\n                        <td>4.</td>\n                        <td>Jocanne Murr</td>\n                        <td>May 11, 2018</td>\n                        <td class=\"td_img\"><div class=\"meassge_td\"><img src=\"img/vote.png\"/>Lorem ipsum dolor sit amet, adipiscing</div></td>\n                        <td class=\"td_img\"><img src=\"img/likes.png\"/>Suspend</td>\n                    </tr>\n                    <tr>\n                        <td>5.</td>\n                        <td>Lordi</td>\n                        <td>May 10, 2018</td>\n                        <td class=\"td_img\"><div class=\"meassge_td\"><img src=\"img/vote.png\"/>Lorem ipsum dolor sit amet, adipiscing</div></td>\n                        <td class=\"td_img\"><img src=\"img/likes.png\"/>Suspend</td>\n                    </tr>             \n                    <tr>\n                        <td>6.</td>\n                        <td>Lordi</td>\n                        <td>May 10, 2018</td>\n                        <td class=\"td_img\"><div class=\"meassge_td\"><img src=\"img/vote.png\"/>Lorem ipsum dolor sit amet, adipiscing</div></td>\n                        <td class=\"td_img\"><img src=\"img/likes.png\"/>Suspend</td>\n                    </tr> \n                    </tbody>\n                  </table>\n            </div>\n        </div>\n        <div>\n            <h3 class=\"Audience-Overview\">Commuinity Notices</h3>\n            <div class=\"artists_table community_tabel table-responsive\">\n                <table class=\"table\">\n                    <thead>\n                      <tr>\n                        <th>N<sup>O</sup></th>\n                        <th>Artist Name</th>\n                        <th>Date</th>\n                        <th>Message</th>\n                        <th>Actions</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                    <tr>\n                        <td>1.</td>\n                        <td>Shavn Miller</td>\n                        <td>May 12, 2018</td>\n                        <td class=\"td_img\"><img src=\"img/vote.png\"/>Lorem ipsum dolor sit amet, adipiscing...</td>\n                        <td class=\"td_img actions\">\n                            <div><img src=\"img/likes.png\"/>Remove</div>\n                            <div><img src=\"img/likes.png\"/>Suspend</div>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>2.</td>\n                        <td>Anna Bill</td>\n                        <td>May 11, 2018</td>\n                        <td class=\"td_img\"><img src=\"img/vote.png\"/>Lorem ipsum dolor sit amet, adipiscing...</td>\n                        <td class=\"td_img actions\">\n                            <div><img src=\"img/likes.png\"/>Remove</div>\n                            <div><img src=\"img/likes.png\"/>Suspend</div>\n                        </td>\n                    </tr>\n\n\n                    </tbody>\n                  </table>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- /#page-content-wrapper -->"

/***/ }),

/***/ "../../../../../src/app/admin/alerts/alerts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlertsComponent = /** @class */ (function () {
    function AlertsComponent() {
        console.log("Admin dashboard component");
    }
    AlertsComponent.prototype.ngOnInit = function () {
    };
    AlertsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-alerts',
            template: __webpack_require__("../../../../../src/app/admin/alerts/alerts.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [])
    ], AlertsComponent);
    return AlertsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/artist/artist.component.html":
/***/ (function(module, exports) {

module.exports = " <!-- Page Content -->\n <div id=\"page-content-wrapper\">           \n    <div class=\"artist_content\" style=\"display: block;\">\n      <div>\n        <h3 class=\"Audience-Overview\">Search Artist </h3>\n        <div class=\"search-input header_search\">\n          <input type=\"text\" name=\"search\" [(ngModel)]=\"search_str\" (keyup)=\"filterBasedOnSearch($event)\" placeholder=\"Search by Artist Name or Song Title\">\n        </div>\n        <div class=\"row top_header_filter\">\n          <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n            <div>\n              <div class=\"artist_heading\">Music Genre</div>\n              <ul>\n                <li>\n                  <div class=\"radio\">\n                      <label>\n                        <input name=\"musicgenre\" type=\"radio\" value=\"\" [(ngModel)]=\"music_type_id\" (click)=\"filterByMusicType('')\">All styles\n                        <div class=\"radio_check\"></div>\n                      </label>\n                  </div>\n                </li>\n                <li *ngFor=\"let music of music_type;\">\n                    <div class=\"radio\">\n                        <label>\n                          <input name=\"musicgenre\" type=\"radio\" [value]=\"music._id\" [(ngModel)]=\"music_type_id\" (click)=\"filterByMusicType(music._id)\">{{music['name']}}\n                          <div class=\"radio_check\"></div>\n                        </label>\n                    </div>\n                </li>\n              </ul>\n            </div>\n            \n          </div>\n          \n          <div class=\"col-lg-10 col-md-9 col-sm-12 col-xs-12\">\n            <div class=\"sub-menu-filter\">\n            <div class=\"artist_heading\">Region</div>\n              <div class=\"row\">\n                  <div class=\"col-lg-2 col-md-4 col-sm-4 col-xs-4\">\n                    <div class=\"filter-subhead\">Northeast</div>\n                    <ul>\n                      <li *ngFor=\"let s of state_list;\" [style.display]=\"s['region']['name'] == 'northeast' ? 'block' : 'none'\">\n                        <div class=\"checkbox\">\n                            <label>\n                              <input type=\"checkbox\" [value]=\"s._id\" (click)=\"addRegionForFilter($event.target.checked, $event.target.value)\">\n                              <div class=\"chk_check\"></div>\n                              <span>{{s.name}}</span>\n                            </label>\n                        </div>\n                      </li>\n                    </ul>\n                  </div>\n                  <div class=\"col-lg-2 col-md-4 col-sm-4 col-xs-4\">\n                    <div class=\"filter-subhead\">southeast</div>\n                    <ul>\n                      <li *ngFor=\"let s of state_list;\" [style.display]=\"s['region']['name'] == 'southeast' ? 'block' : 'none'\">\n                        <div class=\"checkbox\">\n                            <label>\n                              <input type=\"checkbox\" [value]=\"s._id\" (click)=\"addRegionForFilter($event.target.checked, $event.target.value)\">\n                              <div class=\"chk_check\"></div>\n                              <span>{{s.name}}</span>\n                            </label>\n                        </div>\n                      </li>\n                    </ul>\n                  </div>\n                  <div class=\"col-lg-2 col-md-4 col-sm-4 col-xs-4\">\n                    <div class=\"filter-subhead\">Midwest</div>\n                    <ul>\n                      <li *ngFor=\"let s of state_list;\" [style.display]=\"s['region']['name'] == 'midwest' ? 'block' : 'none'\">\n                        <div class=\"checkbox\">\n                            <label>\n                              <input type=\"checkbox\" [value]=\"s._id\" (click)=\"addRegionForFilter($event.target.checked, $event.target.value)\">\n                              <div class=\"chk_check\"></div>\n                              <span>{{s.name}}</span>\n                            </label>\n                        </div>\n                      </li>\n                    </ul>\n                  </div>\n                  <div class=\"col-lg-2 col-md-4 col-sm-4 col-xs-4\">\n                    <div class=\"filter-subhead\">Southwest</div>\n                    <ul>\n                      <li *ngFor=\"let s of state_list;\" [style.display]=\"s['region']['name'] == 'southwest' ? 'block' : 'none'\">\n                        <div class=\"checkbox\">\n                            <label>\n                              <input type=\"checkbox\" [value]=\"s._id\" (click)=\"addRegionForFilter($event.target.checked, $event.target.value)\">\n                              <div class=\"chk_check\"></div>\n                              <span>{{s.name}}</span>\n                            </label>\n                        </div>\n                      </li>\n                    </ul>\n                  </div>\n                  <div class=\"col-lg-2 col-md-4 col-sm-4 col-xs-4\">\n                    <div class=\"filter-subhead\">West</div>\n                    <ul>\n                      <li *ngFor=\"let s of state_list;\" [style.display]=\"s['region']['name'] == 'west' ? 'block' : 'none'\">\n                        <div class=\"checkbox\">\n                            <label>\n                              <input type=\"checkbox\" [value]=\"s._id\" (click)=\"addRegionForFilter($event.target.checked, $event.target.value)\">\n                              <div class=\"chk_check\"></div>\n                              <span>{{s.name}}</span>\n                            </label>\n                        </div>\n                      </li>\n                    </ul>\n                  </div>\n                  <div class=\"col-lg-2 col-md-4 col-sm-4 col-xs-4\">\n                    <div class=\"filter-subhead\">other</div>\n                    <ul>\n                      <li *ngFor=\"let s of state_list;\" [style.display]=\"s['region']['name'] == 'other' ? 'block' : 'none'\">\n                        <div class=\"checkbox\">\n                            <label>\n                              <input type=\"checkbox\" [value]=\"s._id\" (click)=\"addRegionForFilter($event.target.checked, $event.target.value)\">\n                              <div class=\"chk_check\"></div>\n                              <span>{{s.name}}</span>\n                            </label>\n                        </div>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n       <div>\n            <h3 class=\"Audience-Overview\">Artists </h3>\n            <div class=\"dropdown table_dropdown custom_dropdown\">\n              <select class=\"form-control custom_drop_btn\" id=\"sort\" name=\"sort_by\" [(ngModel)]=\"sort_by\" (change)=\"sortArtist($event.target.value)\">\n                <option value=\"-1\">Newest First</option>\n                <option value=\"1\">Newest Last</option>\n              </select>\n            </div> \n            <div class=\"artists_table copyright_table table-responsive\">\n              <table class=\"table\" datatable [dtOptions]=\"dtOptions\">\n                    <thead>\n                      <tr>\n                        <th>N<sup>O</sup></th>\n                        <th>Artist Name</th>\n                        <th>Status</th>\n                        <th>Votes</th>\n                        <th>Likes</th>\n                        <th>Followers</th>\n                        <th>Comments</th>\n                        <th>Actions</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr *ngFor=\"let artist of artist_data; let i = index;\">\n                        <td>{{i+1}}.</td>\n                        <td><a href=\"javascript:;\" (click)=\"openModal(template, artist['_id'])\">{{artist['first_name']+' '+artist['last_name']}}</a></td>\n                        <td class=\"status {{artist['flag'] ? 'active_status' : 'suspended_status' }}\"><span>{{artist['flag'] ? 'Active' : 'suspend'}}</span></td>                               \n                        <td class=\"td_img\"><img src=\"img/vote.png\"/>{{artist['no_of_votes']}}</td>\n                        <td class=\"td_img\"><img src=\"img/likes.png\"/>{{artist['no_of_likes']}}</td>\n                        <td class=\"td_img\"><img src=\"img/followers.png\"/>{{artist['no_of_followers']}}</td>\n                        <td class=\"td_img\"><img src=\"img/comments.png\"/>{{artist['no_of_comments']}}</td> \n                        <td class=\"td_img\"><img src=\"img/suspend.png\">\n                          <a href=\"javascript:;\" (click)=\"suspendArtist(artist['_id'])\">{{artist['flag'] ? 'Un-suspend' : 'Suspend'}}</a>\n                        </td>                               \n                      </tr>\n                      <tr *ngIf=\"artist_data?.length == 0\">\n                        <td colspan=\"8\" class=\"no-data-available\">No data!</td>\n                      </tr>\n                    </tbody>\n                  </table>\n            </div>\n        </div>\n</div>\n<!-- /#page-content-wrapper -->\n<!-- /#page-content-wrapper -->\n<ng-template #template>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n  <div class=\"modal-body\">\n    <div class=\"custom_modal\">\n      <div class=\"row\" style=\"padding: 5px;\" >\n        <div class=\"col-sm-4 artist_img\">\n          <img src=\"{{artist_detail['image'] ? artist_img_url+artist_detail['image'] : 'img/profile-img.png'}}\" />\n        </div>\n        <div class=\"col-sm-8 profile_detail\">\n          <span class=\"pull-right\">{{artist_detail['flag'] ? 'Active' : 'Suspend'}}</span>\n          <h3>{{artist_detail['first_name']+' '+artist_detail['last_name']}}</h3>\n          <div class=\"checkbox custom_check_box\">\n              <label>\n                <input [checked]=\"artist_detail['featured']\" type=\"checkbox\" (click)=\"markAsFeatured()\"> \n                <div class=\"chk_check\"></div>\n                <span>Featured Artist</span>\n              </label>\n          </div>\n \n          <div class=\"gray_font\">\n            <span class=\"cap\">{{artist_detail['gender']}}</span>\n            <span>{{artist_detail['old'] }} y.o.</span>\n            <span>{{artist_detail['location']}}</span>\n          </div>\n          <ul class=\"gray_font\">\n            <li><i class=\"fa fa-star-o\" aria-hidden=\"true\"></i>{{artist_detail['no_of_votes']}}</li>\n            <li><i class=\"fa fa-thumbs-o-up\" aria-hidden=\"true\"></i> {{artist_detail['no_of_likes']}}</li>\n            <li><i class=\"fa fa-heart-o\" aria-hidden=\"true\"></i>{{artist_detail['no_of_followers']}}</li>\n            <li><i class=\"fa fa-commenting-o\" aria-hidden=\"true\"></i> {{artist_detail['no_of_comments']}}</li>\n          </ul>\n          <div class=\"gray_font\">\n            <span class=\"sign_up\">Sign up date : {{artist_detail['created_at'] | date : 'yyyy/MM/dd'}}</span>\n            <span class=\"right_span sign_up\">Last Login : {{artist_detail['last_login'] | date : 'yyyy/MM/dd'}}</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <b class=\"template_modal_name\">Tracks</b>\n        </div>\n        <div class=\"artists_table copyright_table table-responsive col-sm-12\">\n          <table class=\"table\">\n              <thead>\n                <tr>\n                  <th>N<sup>O</sup></th>\n                  <th>Track Name</th>\n                  <th>Duration</th>\n                  <th>Actions</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let track of artist_track; let i = index;\">\n                  <td>{{i+1}}</td>\n                  <td>{{track['name']}}</td>\n                  <td>3:10</td>\n                  <td class=\"td_img\">\n                    <a href=\"javascript:;\" (click)=\"removeTrack(track['_id'])\"><i class=\"fa fa-trash\"></i> Delete</a>&nbsp;\n                    <img src=\"img/suspend.png\">\n                    <a href=\"javascript:;\"> Suspend</a>\n                  </td>\n                </tr>\n                <tr *ngIf=\"artist_track?.length == 0\">\n                  <td colspan=\"4\">No data available.</td>\n                </tr>\n              </tbody>\n          </table>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <b class=\"template_modal_name\">Flags</b>\n        </div>\n        <div class=\"artists_table table-responsive col-sm-12\">\n          <table class=\"table\">\n              <thead>\n                <tr>\n                  <th>Date</th>\n                  <th>Type</th>\n                  <th>Actions</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let val of artist_flag\">\n                  <td>{{val.created_at | date : 'MMMM dd, yyyy'}}</td>\n                  <td>{{val['from']['account_type']}}</td>\n                  <td>Suspended by {{val['from']['account_type']}}</td>\n                </tr>\n              </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/admin/artist/artist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__artist_service__ = __webpack_require__("../../../../../src/app/admin/artist/artist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_datatables__ = __webpack_require__("../../../../angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DataTablesResponse = /** @class */ (function () {
    function DataTablesResponse() {
    }
    return DataTablesResponse;
}());
var ArtistComponent = /** @class */ (function () {
    function ArtistComponent(ArtistService, toastr, modalService) {
        this.ArtistService = ArtistService;
        this.toastr = toastr;
        this.modalService = modalService;
        this.dtOptions = {};
        this.artist_data = [];
        this.music_type = [];
        this.region_filter = [];
        this.state_list = [];
        this.search_str = '';
        this.music_type_id = '';
        this.artist_id = '';
        this.sort_by = -1;
        this.artist_detail = {};
        this.artist_track = [];
        this.artist_flag = [];
        this.artist_img_url = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].ARTIST_IMG;
        this.artist_media_url = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].ARTIST_MEDIA;
        console.log("Admin dashboard component");
        this.getAllState();
    }
    ArtistComponent.prototype.ngOnInit = function () {
        var _this = this;
        var that = this;
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
            scrollY: '200px',
            scrollCollapse: true,
            ajax: function (dataTablesParameters, callback) {
                console.log(dataTablesParameters);
                setTimeout(function () {
                    dataTablesParameters['search'] = that.search_str;
                    dataTablesParameters['order'] = '';
                    dataTablesParameters['sort_by'] = that.sort_by;
                    dataTablesParameters['filter'] = [];
                    if (that.music_type_id) {
                        dataTablesParameters['filter'].push({ 'field': 'music_type', value: that.music_type_id });
                    }
                    if (that.region_filter.length) {
                        dataTablesParameters['filter'].push({ 'field': 'state', value: _this.region_filter });
                    }
                    that.ArtistService.getAllArtist(dataTablesParameters).subscribe(function (response) {
                        that.artist_data = response['artist']['artist'];
                        callback({
                            recordsTotal: response['artist']['recordsTotal'],
                            recordsFiltered: response['artist']['recordsTotal'],
                            data: []
                        });
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
    };
    // get all artist data
    ArtistComponent.prototype.getAllArtistData = function (data) {
        var _this = this;
        this.ArtistService.getAllArtist(data).subscribe(function (response) {
            _this.artist_data = response['artist'];
        });
    };
    // get all music type
    ArtistComponent.prototype.getAllMusicType = function () {
        var _this = this;
        this.ArtistService.getAllMusicType().subscribe(function (response) {
            _this.music_type = response['music'];
        });
    };
    // Filter data based on music type
    ArtistComponent.prototype.filterByMusicType = function (id) {
        var that = this;
        this.datatableElement.dtInstance.then(function (dtInstance) {
            dtInstance.draw();
        });
    };
    // Filter artist based on search string
    ArtistComponent.prototype.filterBasedOnSearch = function (e) {
        if (e.keyCode == 13) {
            var that = this;
            this.datatableElement.dtInstance.then(function (dtInstance) {
                dtInstance.draw();
            });
        }
    };
    // Sort artist data
    ArtistComponent.prototype.sortArtist = function (val) {
        var that = this;
        this.datatableElement.dtInstance.then(function (dtInstance) {
            dtInstance.draw();
        });
    };
    // suspend artist
    ArtistComponent.prototype.suspendArtist = function (id) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default()({
            title: 'Are you sure?',
            text: "",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then(function (flag) {
            if (flag.value) {
                _this.ArtistService.suspendArtist(id).subscribe(function (response) {
                    _this.toastr.success(response['message'], 'Success!');
                    _this.datatableElement.dtInstance.then(function (dtInstance) {
                        dtInstance.draw();
                    });
                }, function (error) {
                    _this.toastr.error(error['error'].message, 'Error!');
                });
            }
        });
    };
    ArtistComponent.prototype.openModal = function (template, id) {
        var _this = this;
        var data = {
            artist_id: id
        };
        this.artist_id = id;
        this.ArtistService.getArtist(data).subscribe(function (response) {
            _this.artist_detail = response['artist'];
            var dob = new Date(_this.artist_detail['dob']);
            var dt = new Date();
            _this.artist_detail['old'] = dt.getFullYear() - dob.getFullYear();
        });
        this.ArtistService.getArtistTrack(data).subscribe(function (response) {
            _this.artist_track = response['track']['music'];
        });
        this.ArtistService.getArtistFlagDetails(data).subscribe(function (response) {
            _this.artist_flag = response['artist'];
        });
        this.modalRef = this.modalService.show(template, { backdrop: 'static' });
    };
    ArtistComponent.prototype.removeTrack = function (id) {
        var thi = this;
        __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default()({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (flag) {
            if (flag.value) {
                thi.ArtistService.removeArtistTrack(id).subscribe(function (response) {
                    var data = { artist_id: thi.artist_id };
                    thi.ArtistService.getArtistTrack(data).subscribe(function (response) {
                        thi.artist_track = response['track'];
                    });
                    thi.toastr.success(response['message'], 'Success!');
                }, function (error) {
                    thi.toastr.error(error['error'].message, 'Error!');
                });
            }
        });
    };
    ArtistComponent.prototype.markAsFeatured = function () {
        var _this = this;
        var data = {
            artist_id: this.artist_detail['_id']
        };
        this.ArtistService.markAsFeatured(data).subscribe(function (response) {
            _this.toastr.success(response['message'], 'Success!');
            _this.ArtistService.getArtist(data).subscribe(function (response) {
                _this.artist_detail = response['artist'];
                var dob = new Date(_this.artist_detail['dob']);
                var dt = new Date();
                _this.artist_detail['old'] = dt.getFullYear() - dob.getFullYear();
            });
        }, function (error) {
            _this.toastr.error(error['error'].message, 'Error!');
        });
    };
    // get all state
    ArtistComponent.prototype.getAllState = function () {
        var _this = this;
        this.ArtistService.getAllState().subscribe(function (response) {
            _this.state_list = response['state'];
        });
    };
    // Add region for filtering
    ArtistComponent.prototype.addRegionForFilter = function (flag, val) {
        if (flag) {
            this.region_filter.push(val);
        }
        else {
            var index = this.region_filter.indexOf(val);
            this.region_filter.splice(index, 1);
        }
        this.datatableElement.dtInstance.then(function (dtInstance) {
            dtInstance.draw();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_angular_datatables__["a" /* DataTableDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_angular_datatables__["a" /* DataTableDirective */])
    ], ArtistComponent.prototype, "datatableElement", void 0);
    ArtistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-artist',
            template: __webpack_require__("../../../../../src/app/admin/artist/artist.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__artist_service__["a" /* ArtistService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* BsModalService */]])
    ], ArtistComponent);
    return ArtistComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/artist/artist.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ArtistService = /** @class */ (function () {
    function ArtistService(http) {
        this.http = http;
        this.api_host = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].API_URL;
        this.user = '';
        this.headers = '';
        this.user = JSON.parse(localStorage.getItem('user'));
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'x-access-token': this.user.token });
    }
    // Get all artist details
    ArtistService.prototype.getAllArtist = function (data) {
        return this.http.post(this.api_host + "/admin/get_artist", data, { headers: this.headers });
    };
    // get All music type
    ArtistService.prototype.getAllMusicType = function () {
        return this.http.get(this.api_host + "/music_type");
    };
    // suspend artist
    ArtistService.prototype.suspendArtist = function (id) {
        return this.http.post(this.api_host + "/admin/flag/artist/" + id, null, { headers: this.headers });
    };
    // Get artist details
    ArtistService.prototype.getArtist = function (data) {
        return this.http.post(this.api_host + "/get_artist", data);
    };
    // Get artist track
    ArtistService.prototype.getArtistTrack = function (data) {
        return this.http.post(this.api_host + "/get_track", data);
    };
    // Get Artist flag details
    ArtistService.prototype.getArtistFlagDetails = function (data) {
        return this.http.post(this.api_host + "/admin/get_flag", data, { headers: this.headers });
    };
    // Remove track 
    ArtistService.prototype.removeArtistTrack = function (id) {
        return this.http.delete(this.api_host + "/admin/track/" + id, { headers: this.headers });
    };
    // Mark as featured
    ArtistService.prototype.markAsFeatured = function (data) {
        return this.http.put(this.api_host + "/admin/featured_artist", data, { headers: this.headers });
    };
    // get all state
    ArtistService.prototype.getAllState = function () {
        return this.http.post(this.api_host + "/state", null);
    };
    ArtistService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ArtistService);
    return ArtistService;
}());



/***/ }),

/***/ "../../../../../src/app/admin/contest/contest.component.html":
/***/ (function(module, exports) {

module.exports = " <!-- Page Content -->\n <div id=\"page-content-wrapper\">  \n  <div class=\"text-right\">\n    <button class=\"create_contest_btn btn\" (click)=\"openContestModel(contest)\">Create Contest</button>\n  </div>         \n           <div>\n                <h3 class=\"Audience-Overview\">Contests </h3>\n                <div class=\"dropdown table_dropdown custom_dropdown\">\n                  <select class=\"form-control custom_drop_btn\" id=\"sort\" name=\"sort_by\" [(ngModel)]=\"sort\" (change)=\"sortArtist()\">\n                    <option value=\"-1\">Sort By End Date</option>\n                    <option value=\"1\">Sort By Start Date</option>\n                  </select>\n                </div> \n                <div class=\"artists_table contest_table table-responsive\">\n                  <table class=\"table\" datatable [dtOptions]=\"dtOptions\">\n                        <thead>\n                          <tr>\n                            <th>N<sup>O</sup></th>\n                            <th>Contest Name</th>\n                            <th>Start Date</th>\n                            <th>End Date</th>\n                            <th>Days Remain</th>\n                            <th>Music Genre</th>\n                            <th>Region</th>\n                            <th>Participants</th>\n                          </tr>\n                        </thead>\n                        <tbody>\n                        <tr *ngFor=\"let contest of contest_data; let i = index;\">\n                          <td>{{i+1}}.</td>\n                          <td><a href=\"javascript:;\" (click)=\"openModal(paricipant, contest['_id'])\">{{contest ['round_name']}}</a></td>\n                          <td>{{contest['start_date'] | date : 'MMMM dd, yyyy'}}</td>\n                          <td>{{contest['end_date'] | date : 'MMMM dd, yyyy'}}</td>\n                          <td>{{contest['days']}}</td>\n                          <td>{{contest['contest_id']['music_type']['name']}}</td>\n                          <td>{{contest['state'] && contest['state']['name'] ? contest['state']['name'] : '' }}</td>\n                          <td>{{contest['no_of_participants']}}</td>\n                        </tr>\n                        </tbody>\n                      </table>\n                </div>\n            </div>\n    </div>\n    <!-- /#page-content-wrapper -->\n<ng-template #paricipant>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n  <div class=\"modal-body\">\n    <div class=\"custom_modal\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <b class=\"template_modal_name\">Participants</b>\n              </div>\n          <div class=\"artists_table copyright_table table-responsive col-sm-12\">\n            <table class=\"table\">\n                <thead>\n                  <tr>\n                    <th>Rank</th>\n                    <th>Artist Name</th>\n                    <th>Track Name</th>\n                    <th>Votes</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let contest of participant_data; let i = index;\">\n                    <td>{{i+1}}</td>\n                    <td>{{contest['artist_id'] != null && contest['artist_id']['first_name'] != '' ? contest['artist_id']['first_name'] : '' +' '+contest['artist_id'] != null && contest['artist_id']['last_name'] != '' ? contest['artist_id']['last_name'] : ''}}</td>\n                    <td>{{contest['track_id'] != null && contest['track_id']['name'] != '' ? contest['track_id']['name'] : '' }}</td>\n                    <td>{{contest['artist_id'] != null && contest['artist_id']['no_of_votes'] != '' ? contest['artist_id']['no_of_votes'] : '' }}</td>\n                  </tr>\n                  <tr *ngIf=\"participant_data?.length == 0\">\n                    <td colspan=\"4\">No data available.</td>\n                  </tr>\n                </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n  </div>\n</ng-template>\n<ng-template #contest>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"contestModelRef.hide()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n  <form [formGroup]=\"contest_validation\">\n    <div class=\"modal-body\">\n      <div class=\"creat_contest_body\">\n          <div class=\"col-sm-12 text-center\">\n            <h4 class=\"custom_modal_head\">Create Contest</h4>\n          </div>\n          <div class=\"form-group custom_modal_form\">\n            <div >\n                <label class=\"radio-inline\">\n                  <input name=\"type\" formControlName=\"type\" type=\"radio\" checked [(ngModel)]=\"is_new_or_existing\" value=\"1\">New\n                  \n                </label>\n                <label class=\"radio-inline\">\n                  <input name=\"type\" formControlName=\"type\" type=\"radio\" [(ngModel)]=\"is_new_or_existing\" value=\"2\">Existing\n                </label>\n            </div>\n          </div>\n          <div class=\"form-group custom_modal_form\" *ngIf=\"is_new_or_existing == 1\">\n            <label class=\"control-label\">Contest Name</label>\n            <input name=\"name\" formControlName=\"name\" class=\"form-control\" [(ngModel)]=\"contest_detail['name']\" />\n            <div class=\"terms_error_msg\" *ngIf=\"is_valid && !contest_validation.controls['name'].valid\">\n              <span *ngIf=\"contest_validation.controls['name'].errors['required']\" class=\"text-danger\">Contest Name is required.</span>\n            </div>\n          </div>\n          <div class=\"form-group custom_modal_form\" *ngIf=\"is_new_or_existing == 2\">\n            <label class=\"control-label\">Contest Name</label>\n            <select class=\"form-control\" name=\"existing_contest\" formControlName=\"name\"  (change)=\"selectContest($event.target.value)\">\n              <option value=\"\">Select Contest</option>\n              <option *ngFor=\"let c of existing_contest_list; let i = index;\" value=\"{{i}}\">{{c['round_name']}}</option>\n            </select>\n            <div class=\"terms_error_msg\" *ngIf=\"is_valid && !contest_validation.controls['name'].valid\">\n              <span *ngIf=\"contest_validation.controls['name'].errors['required']\" class=\"text-danger\">Contest Name is required.</span>\n            </div>\n          </div>\n          <div class=\"custom_modal_form\">\n              <div class=\"date-of-birth row\">\n                  <label class=\"col-sm-12\" for=\"date\">Start Date</label>\n                  <div class=\"form-group custom_modal_form\">\n                      <select class=\"form-control\" id=\"day\" formControlName=\"day\" name=\"day\" [(ngModel)]=\"contest_detail['day']\">\n                          <option value=\"\">Day</option>\n                          <option *ngFor=\"let d of day\" value=\"{{d}}\">{{d}}</option>\n                      </select>\n                      <div class=\"terms_error_msg\" *ngIf=\"is_valid && !contest_validation.controls['day'].valid\">\n                        <span *ngIf=\"contest_validation.controls['day'].errors['required']\" class=\"text-danger\">Day is required.</span>\n                      </div>\n                  </div>\n                  <div class=\"form-group custom_modal_form\">\n                      <select class=\"form-control\" id=\"month\" name=\"month\" formControlName=\"month\" [(ngModel)]=\"contest_detail['month']\">\n                          <option value=\"\">Month</option>\n                          <option *ngFor=\"let m of month\" value=\"{{m}}\">{{m}}</option>\n                      </select>\n                      <div class=\"terms_error_msg\" *ngIf=\"is_valid && !contest_validation.controls['month'].valid\">\n                        <span *ngIf=\"contest_validation.controls['month'].errors['required']\" class=\"text-danger\">Month is required.</span>\n                      </div>\n                  </div>\n                  <div class=\"form-group custom_modal_form\">\n                      <select class=\"form-control\" id=\"year\" name=\"year\" formControlName=\"year\" [(ngModel)]=\"contest_detail['year']\">\n                          <option value=\"\">Year</option>\n                          <option *ngFor=\"let y of year\" value=\"{{y}}\">{{y}}</option>\n                      </select>\n                      <div class=\"terms_error_msg\" *ngIf=\"is_valid && !contest_validation.controls['year'].valid\">\n                        <span *ngIf=\"contest_validation.controls['year'].errors['required']\" class=\"text-danger\">Year is required.</span>\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div >\n            <div class=\"row\">\n            <div class=\"col-sm-6\">\n              <div class=\"form-group custom_modal_form\">\n                <label class=\"control-label\">Duration</label>\n                <select class=\"form-control\" name=\"duration\" formControlName=\"duration\" [(ngModel)]=\"contest_detail['duration']\">\n                  <option value=\"\">Select Duration</option>\n                  <option value=\"1\">1 weeks</option>\n                  <option value=\"2\">2 weeks</option>\n                  <option value=\"3\">3 weeks</option>\n                  <option value=\"4\">4 weeks</option>\n                  <option value=\"8\">8 weeks</option>\n                </select>\n                <div class=\"terms_error_msg\" *ngIf=\"is_valid && !contest_validation.controls['duration'].valid\">\n                  <span *ngIf=\"contest_validation.controls['duration'].errors['required']\" class=\"text-danger\">Duration is required.</span>\n                </div>\n            </div>\n            </div>\n            <div class=\"col-sm-6\">\n                <div class=\"form-group custom_modal_form\">\n                  <label class=\"control-label\">Round Number</label>\n                  <input type=\"number\" name=\"rounds\" max=\"8\" min=\"1\" value=\"1\" readonly formControlName=\"round\" [(ngModel)]=\"contest_detail['no_of_round']\" class=\"form-control\" />\n                  <div class=\"terms_error_msg\" *ngIf=\"is_valid && !contest_validation.controls['round'].valid\">\n                    <span *ngIf=\"contest_validation.controls['round'].errors['required']\" class=\"text-danger\">Number of round is required.</span>\n                  </div>\n                </div>\n            </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"form-group custom_modal_form\">\n              <label class=\"control-label\">Music Genre</label>\n              <select name=\"music_type\" class=\"form-control\" formControlName=\"music_type\" [(ngModel)]=\"contest_detail['music_type']\" *ngIf=\"is_new_or_existing == 1\">\n                <option value=\"\">Select Music Gener</option>\n                <option *ngFor=\"let music of music_type;\" value=\"{{music['_id']}}\">{{music['name']}}</option>\n              </select>\n              <select name=\"music_type\" class=\"form-control\" formControlName=\"music_type\" [(ngModel)]=\"contest_detail['music_type']\" *ngIf=\"is_new_or_existing == 2\" disabled>\n                <option value=\"\">Select Music Gener</option>\n                <option *ngFor=\"let music of music_type;\" value=\"{{music['_id']}}\">{{music['name']}}</option>\n              </select>\n              <div class=\"terms_error_msg\" *ngIf=\"is_valid && !contest_validation.controls['music_type'].valid\">\n                <span *ngIf=\"contest_validation.controls['music_type'].errors['required']\" class=\"text-danger\">Music type is required.</span>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"form-group custom_modal_form\">\n              <label class=\"control-label\">Region</label>\n              <select class=\"form-control\" name=\"region\" formControlName=\"region\" [(ngModel)]=\"contest_detail['region']\" (change)=\"getStateFromRegion($event.target.value)\">\n                <option value=\"\">Select Region</option>\n                <option [value]=\"r['_id']\" *ngFor=\"let r of region_list;\">{{r['name']}}</option>\n              </select>\n              <div class=\"terms_error_msg\" *ngIf=\"is_valid && !contest_validation.controls['region'].valid\">\n                <span *ngIf=\"contest_validation.controls['region'].errors['required']\" class=\"text-danger\">Region is required.</span>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"form-group custom_modal_form\">\n              <label class=\"control-label\">State</label>\n              <select class=\"form-control\" name=\"state\" formControlName=\"state\" [(ngModel)]=\"contest_detail['state']\">\n                <option value=\"\">Select State</option>\n                <option [value]=\"s['_id']\" *ngFor=\"let s of state_list;\">{{s['name']}}</option>\n              </select>\n              <div class=\"terms_error_msg\" *ngIf=\"is_valid && !contest_validation.controls['state'].valid\">\n                <span *ngIf=\"contest_validation.controls['state'].errors['required']\" class=\"text-danger\">State is required.</span>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\" *ngIf=\"is_new_or_existing == 2\">\n            <div class=\"form-group custom_modal_form\">\n              <label class=\"control-label\">Participants</label>\n              <select class=\"form-control\" name=\"participant\" formControlName=\"participate\">\n                <option value=\"\">Select Participants</option>\n                <option value=\"\">Northeast Hiphop Round 3 Finalist</option>\n                <option value=\"\">Southeast Hiphop Round 3 Finalist</option>\n                <option value=\"\">Midwest Hiphop Round 3 Finalist</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row modal_btns\">\n            <div class=\"col-sm-6\">\n                <button class=\"custom_cancel_btn btn\" (click)=\"contestModelRef.hide()\">Cancel</button>\n            </div>\n            <div class=\"col-sm-6 text-right\">\n                <button type=\"submit\" class=\"custom_save btn\" (click)=\"saveContest(contest_validation.valid)\" [disabled]=\"show_spinner\">Create <i *ngIf=\"show_spinner\" class=\"fa fa-spinner fa-spin\"></i></button>\n            </div>\n          </div>\n        </div>\n    </div>\n  </form>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/admin/contest/contest.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contest_service__ = __webpack_require__("../../../../../src/app/admin/contest/contest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_datatables__ = __webpack_require__("../../../../angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ContestComponent = /** @class */ (function () {
    function ContestComponent(ContestService, toastr, modalService, fb) {
        this.ContestService = ContestService;
        this.toastr = toastr;
        this.modalService = modalService;
        this.fb = fb;
        this.dtOptions = {};
        this.is_new_or_existing = 1;
        this.contest_data = [];
        this.existing_contest_list = [];
        this.exist_contest = {};
        this.region_list = [];
        this.state_list = [];
        this.search_str = '';
        this.sort = -1;
        this.participant_data = [];
        this.day = [];
        this.month = [];
        this.year = [];
        this.music_type = [];
        this.contest_detail = {};
        this.show_spinner = false;
        this.is_valid = false;
        this.day = [];
        this.month = [];
        this.year = [];
        for (var i = 1; i <= 31; i++) {
            this.day.push(i);
        }
        for (var i = 1; i <= 12; i++) {
            this.month.push(i);
        }
        for (var i = (new Date()).getFullYear(); i <= 2100; i++) {
            this.year.push(i);
        }
        this.contest_validation = this.fb.group({
            type: [],
            name: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required]],
            day: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required]],
            month: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required]],
            year: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required]],
            duration: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required]],
            round: [],
            music_type: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required]],
            region: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required]],
            state: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required]],
            participate: []
        });
    }
    ContestComponent.prototype.ngOnInit = function () {
        var _this = this;
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 5,
            serverSide: true,
            processing: true,
            searching: false,
            ordering: false,
            lengthChange: false,
            responsive: true,
            scrollY: '200px',
            scrollCollapse: true,
            ajax: function (dataTablesParameters, callback) {
                setTimeout(function () {
                    dataTablesParameters['search'] = that.search_str;
                    dataTablesParameters['sort'] = [_this.sort == -1 ? { "field": "end_date", value: -1 } : { "field": "start_date", value: 1 }];
                    that.ContestService.getAllContest(dataTablesParameters).subscribe(function (response) {
                        that.contest_data = response['contest']['participate'];
                        that.contest_data.forEach(function (ele) {
                            ele['days'] = that.getDaysDiff(ele['start_date'], new Date());
                        });
                        callback({
                            recordsTotal: response['contest']['recordsTotal'],
                            recordsFiltered: response['contest']['recordsTotal'],
                            data: []
                        });
                    });
                }, 0);
            }
        };
        this.getAllMusicTypes();
        this.getAllExistingContest();
        this.getAllRegion();
    };
    // Get day difference between dates
    ContestComponent.prototype.getDaysDiff = function (dt1, dt2) {
        var date1 = new Date(dt1);
        var date2 = new Date(dt2);
        var timeDiff = Math.abs(date2.getTime() - date1.getTime());
        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        return diffDays;
    };
    ContestComponent.prototype.openModal = function (template, id) {
        var _this = this;
        var data = {
            contest_id: id
        };
        this.ContestService.getContestParticipants(data).subscribe(function (response) {
            _this.participant_data = response['artist'];
        });
        this.modalRef = this.modalService.show(template, { backdrop: 'static' });
    };
    ContestComponent.prototype.openContestModel = function (template) {
        this.contestModelRef = this.modalService.show(template, { backdrop: 'static' });
        this.is_valid = false;
        this.contest_detail = {
            no_of_round: 1
        };
    };
    ContestComponent.prototype.sortArtist = function () {
        this.datatableElement.dtInstance.then(function (dtInstance) {
            dtInstance.draw();
        });
    };
    // Get all music type
    ContestComponent.prototype.getAllMusicTypes = function () {
        var _this = this;
        this.ContestService.getAllMusicType().subscribe(function (response) {
            _this.music_type = response['music'];
        });
    };
    // Get all existing contest
    ContestComponent.prototype.getAllExistingContest = function () {
        var _this = this;
        this.ContestService.getExistingContest().subscribe(function (response) {
            _this.existing_contest_list = response['contest']['contest'];
        });
    };
    // get all region
    ContestComponent.prototype.getAllRegion = function () {
        var _this = this;
        this.ContestService.getAllRegion().subscribe(function (response) {
            _this.region_list = response['Region'];
        });
    };
    // Get state from region
    ContestComponent.prototype.getStateFromRegion = function (id) {
        var _this = this;
        if (id && id != '') {
            var data = {
                region: id
            };
            this.ContestService.getStateByRegion(data).subscribe(function (response) {
                _this.state_list = response['state'];
            });
        }
    };
    // Add new contest 
    ContestComponent.prototype.saveContest = function (flag) {
        var _this = this;
        if (flag) {
            this.is_valid = !flag;
            if (this.is_new_or_existing == 1) {
                var stdt = new Date(this.contest_detail['year'], this.contest_detail['month'], this.contest_detail['day']);
                //let enddt = new Date(stdt.getTime() + this.contest_detail['duration'] * 24 * 60 * 60 * 1000);
                var data = {
                    name: this.contest_detail['name'],
                    music_type: this.contest_detail['music_type'],
                    region: this.contest_detail['region'],
                    state: this.contest_detail['state'],
                    round: 1,
                    start_date: stdt,
                    duration: this.contest_detail['duration']
                };
                this.show_spinner = true;
                this.ContestService.addNewContest(data).subscribe(function (response) {
                    _this.datatableElement.dtInstance.then(function (dtInstance) {
                        dtInstance.draw();
                    });
                    _this.contest_detail = {};
                    _this.contestModelRef.hide();
                    _this.toastr.success(response['message'], 'Success!');
                }, function (error) {
                    _this.toastr.error(error['error'].message, 'Error!');
                    _this.show_spinner = false;
                }, function () {
                    _this.show_spinner = false;
                });
            }
            else {
                var stdt = new Date(this.contest_detail['year'], this.contest_detail['month'], this.contest_detail['day']);
                //let enddt = new Date(stdt.getTime() + this.contest_detail['duration'] * 24 * 60 * 60 * 1000);
                var data = {
                    contest_id: this.contest_detail['contest_id']['_id'],
                    // music_type : this.contest_detail['music_type'],
                    region: this.contest_detail['region'],
                    state: this.contest_detail['state'],
                    round: this.contest_detail['no_of_round'],
                    start_date: stdt,
                    duration: +this.contest_detail['duration']
                };
                this.show_spinner = true;
                this.ContestService.addExistingContest(data).subscribe(function (response) {
                    _this.datatableElement.dtInstance.then(function (dtInstance) {
                        dtInstance.draw();
                    });
                    _this.contest_detail = {};
                    _this.contestModelRef.hide();
                    _this.toastr.success(response['message'], 'Success!');
                }, function (error) {
                    _this.toastr.error(error['error'].message, 'Error!');
                    _this.show_spinner = false;
                }, function () {
                    _this.show_spinner = false;
                });
            }
        }
        else {
            this.is_valid = !flag;
        }
    };
    // Select exisiting contest
    ContestComponent.prototype.selectContest = function (idx) {
        this.contest_detail = this.existing_contest_list[idx];
        console.log(this.contest_detail);
        console.log(this.contest_detail['start_date']);
        var dt = new Date(this.contest_detail['start_date']);
        console.log(dt);
        this.contest_detail['no_of_round'] = this.contest_detail['round'] + 1;
        this.contest_detail['day'] = dt.getDay();
        this.contest_detail['month'] = dt.getMonth();
        this.contest_detail['year'] = dt.getFullYear();
        this.contest_detail['music_type'] = this.contest_detail['contest_id']['music_type'];
        this.contest_detail['region'] = this.contest_detail['region']['_id'];
        this.getStateFromRegion(this.contest_detail['region']);
        this.contest_detail['state'] = this.contest_detail['state']['_id'];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_angular_datatables__["a" /* DataTableDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_angular_datatables__["a" /* DataTableDirective */])
    ], ContestComponent.prototype, "datatableElement", void 0);
    ContestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contest',
            template: __webpack_require__("../../../../../src/app/admin/contest/contest.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__contest_service__["a" /* ContestService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */]])
    ], ContestComponent);
    return ContestComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/contest/contest.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContestService = /** @class */ (function () {
    function ContestService(http) {
        this.http = http;
        this.api_host = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].API_URL;
        this.user = '';
        this.headers = '';
        this.user = JSON.parse(localStorage.getItem('user'));
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'x-access-token': this.user.token });
    }
    // Get all artist details
    ContestService.prototype.getAllContest = function (data) {
        return this.http.post(this.api_host + "/admin/contest", data, { headers: this.headers });
    };
    // Get Contest participants by contest id
    ContestService.prototype.getContestParticipants = function (data) {
        return this.http.post(this.api_host + "/admin/get_participants_of_contest", data, { headers: this.headers });
    };
    // get All music type
    ContestService.prototype.getAllMusicType = function () {
        return this.http.get(this.api_host + "/music_type");
    };
    // Get existing contest
    ContestService.prototype.getExistingContest = function () {
        return this.http.get(this.api_host + "/admin/get_contest", { headers: this.headers });
    };
    // get all region
    ContestService.prototype.getAllRegion = function () {
        return this.http.get(this.api_host + "/region");
    };
    // Get state based on region
    ContestService.prototype.getStateByRegion = function (data) {
        return this.http.post(this.api_host + "/state_by_region", data);
    };
    // Add new contest
    ContestService.prototype.addNewContest = function (data) {
        return this.http.post(this.api_host + "/admin/add_contest", data, { headers: this.headers });
    };
    // add existing contest
    ContestService.prototype.addExistingContest = function (data) {
        return this.http.post(this.api_host + "/admin/add_existing_contest", data, { headers: this.headers });
    };
    ContestService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ContestService);
    return ContestService;
}());



/***/ }),

/***/ "../../../../../src/app/admin/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Page Content -->\n<div id=\"page-content-wrapper\">\n           \n        <div class=\"container-fluid\">\n            <h3 class=\"Audience-Overview\">Audience Overview </h3>\n            <div class=\"ana-header\">\n                <div class=\"form-group days-grp custom_dropdown\">\n                    <select class=\"form-control\" id=\"days-select\" name=\"analytics_day\" (change)=\"changeAnalyticsDays()\" [(ngModel)]=\"analytics_days\">\n                        <option value=\"7\">7 Days</option>\n                        <option value=\"14\">14 Days</option>\n                        <option value=\"30\">1 Month</option>\n                    </select>\n\n                </div>\n                <!-- <div class=\"dropdown custom_dropdown\">\n                  <button type=\"button\" class=\"btn dropdown-toggle Days\" data-toggle=\"dropdown\">\n                    7 days\n                  </button>\n                  <div class=\"dropdown-menu\">\n                    <a class=\"dropdown-item\" href=\"javascript:;\">Link 1</a>\n                    <a class=\"dropdown-item\" href=\"javascript:;\">Link 2</a>\n                    <a class=\"dropdown-item\" href=\"javascript:;\">Link 3</a>\n                  </div>\n                </div> -->\n                <ul class=\"header_ul\">\n                    <li class=\"{{home_tab_cnt == 1 ? 'active' : ''}}\" (click)=\"homeTabChange(1)\"><a>Votes</a></li>\n                    <li class=\"{{home_tab_cnt == 2 ? 'active' : ''}}\" (click)=\"homeTabChange(2)\"><a>Likes</a></li>\n                    <li class=\"{{home_tab_cnt == 3 ? 'active' : ''}}\" (click)=\"homeTabChange(3)\"><a>Comments</a></li>\n                </ul>\n            </div>\n            <div>\n                <h3 class=\"Last-7-Days-April-2\">Last {{analytics_days}} Days: {{show_duration_date}}</h3>\n                <div class=\"graph_container\">\n                    <!-- <img src=\"img/graph.jpg\" /> -->\n                    <div [chart]=\"artist_chart\"></div>\n                </div>\n            </div>\n            <div>\n                <h3 class=\"Audience-Overview\">Top Artists </h3>\n                <div class=\"artists_table table-responsive\">\n                    <table class=\"table\">\n                        <thead>\n                          <tr>\n                            <th>N<sup>O</sup></th>\n                            <th>Artist Name</th>\n                            <th>Location</th>\n                            <th>Gender</th>\n                            <th>Music Genre</th>\n                            <th>Tracks</th>\n                            <th>Votes</th>\n                            <th>Likes</th>\n                            <th>Followers</th>\n                            <th>Comments</th>\n                            <th></th>\n                          </tr>\n                        </thead>\n                        <tbody>\n                          <tr *ngFor=\"let artist of artist_vote['artist'];let i = index;\">\n                            <td>{{i+1}}.</td>\n                            <td>{{artist.first_name + ' '+ artist.last_name}}</td>\n                            <td>New York</td>\n                            <td>{{artist.gender | titlecase}}</td>\n                            <td>{{artist['music_type'] ? artist['music_type']['name'] : ''}}</td>\n                            <td>{{artist.no_of_tracks}}</td>\n                            <td class=\"td_img\"><img src=\"img/vote.png\"/>{{artist.no_of_votes}}</td>\n                            <td class=\"td_img\"><img src=\"img/likes.png\"/>{{artist.no_of_likes}}</td>\n                            <td class=\"td_img\"><img src=\"img/followers.png\"/>{{artist.no_of_followers}}</td>\n                            <td class=\"td_img\"><img src=\"img/comments.png\"/>{{artist.no_of_comments}}</td>\n                            <td>\n                                <div dropdown class=\"menu_container\">\n                                    <a href=\"javascript:;\" dropdownToggle><i class=\"fa fa-ellipsis-v\"></i></a>\n                                    <ul id=\"dropdown-basic\" *dropdownMenu class=\"dropdown-menu\" >\n                                        <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"javascript:;\" (click)=\"openModal(track,artist._id, 'track')\">Tracks</a></li>\n                                        <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"javascript:;\" (click)=\"openModal(follower,artist._id, 'follower')\">Followers</a></li>\n                                        <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"javascript:;\" (click)=\"openModal(vote,artist._id, 'vote')\">Votes</a></li>\n                                        <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"javascript:;\" (click)=\"openModal(comment,artist._id, 'comment')\">Comments</a></li>\n                                    </ul>\n                                </div>\n                            </td>                                \n                          </tr>\n                        </tbody>\n                      </table>\n                </div>\n            </div>\n            <div class=\"location_top_container\">\n                <h3 class=\"Audience-Overview\">Top Locations </h3>\n                <div class=\"location_top\">\n                    <!-- <img src=\"img/location_img.jpg\" /> -->\n                    <div class=\"top_location_graph\">\n                        <div class=\"left_graph\">\n                                <div id=\"chartdiv\" [style.height.px]=\"206\" [style.width.%]=\"50\"></div>\n                                <ng-container *ngIf=\"top_location_chart\">\n                                    <!-- <div [chart]=\"top_location_chart\"></div> -->\n                                </ng-container>\n                        </div>\n                        <div class=\"right_graph\">\n                                <div class=\"download-graph\">\n                                    <div [chart]=\"top_location_bar_chart\"></div>\n                                    <!-- <ul>\n                                        <li class=\"ng-star-inserted\">\n                                        <span>New York</span>\n                                        <div class=\"d-num\">\n                                        </div>\n                                        </li><li class=\"ng-star-inserted\">\n                                        <span>New Jersey</span>                                    \n                                        <div class=\"d-num\">\n                                        </div>\n                                        </li><li class=\"ng-star-inserted\"> \n                                                <span>Califirnia</span>                                   \n                                        <div class=\"d-num\">                                  \n\n                                        </div>\n                                        </li><li class=\"ng-star-inserted\">\n                                                <span>Texas</span>                                   \n                                        <div class=\"d-num\">\n                                        </div>\n                                        </li><li class=\"ng-star-inserted\"> \n                                                <span>Maryland</span>                                   \n                                        <div class=\"d-num\">\n                                        </div>\n                                        </li>\n                                    </ul> -->\n                                </div>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n    <!-- /#page-content-wrapper -->\n<ng-template #track>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n    <div class=\"modal-body\">\n        <div class=\"custom_modal\">\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <b class=\"template_modal_name\">Tracks</b>\n                </div>\n                <div class=\"artists_table copyright_table table-responsive col-sm-12\">\n                    <table class=\"table\">\n                        <thead>\n                            <tr>\n                                <th>N<sup>o</sup></th>\n                                <th>Name</th>\n                                <th>Description</th>\n                                <th>Price</th>\n                                <th>Comments</th>\n                                <th>Likes</th>\n                                <th>Votes</th>\n                                <th>Downloads</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let t of artist_info;let i = index;\">\n                                <td>{{i+1}}</td>\n                                <td>{{t.name}}</td>\n                                <td>{{t.description}}</td>\n                                <td>{{t.price}}</td>\n                                <td>{{t.no_of_comments}}</td>\n                                <td>{{t.no_of_likes}}</td>\n                                <td>{{t.no_of_votes}}</td>\n                                <td>{{t.no_of_downloads}}</td>\n                            </tr>\n                            <tr *ngIf=\"artist_info.length <= 0\">\n                                <td colspan=\"8\" >\n                                    No data available.\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</ng-template>\n<ng-template #follower>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n    <div class=\"modal-body\">\n        <div class=\"custom_modal\">\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <b class=\"template_modal_name\">Followers</b>\n                </div>\n                <div class=\"artists_table copyright_table table-responsive col-sm-12\">\n                    <table class=\"table\">\n                        <thead>\n                            <tr>\n                                <th>N<sup>o</sup></th>\n                                <th>Name</th>\n                                <th>Gender</th>\n                                <th>Phone Number</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let f of artist_info;let i = index;\">\n                                <td>{{i+1}}</td>\n                                <td>{{f.user_id ? f.user_id.first_name+' '+f.user_id.last_name : ''}}</td>\n                                <td>{{f.user_id ? f.user_id.gender : '' | titlecase}}</td>\n                                <td>{{f.user_id ? f.user_id.phone_no : ''}}</td>\n                            </tr>\n                            <tr *ngIf=\"artist_info.length <= 0\">\n                                <td colspan=\"4\" >\n                                    No data available.\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</ng-template>\n<ng-template #vote>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n    <div class=\"modal-body\">\n        <div class=\"custom_modal\">\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <b class=\"template_modal_name\">Votes</b>\n                </div>\n                <div class=\"artists_table copyright_table table-responsive col-sm-12\">\n                    <table class=\"table\">\n                        <thead>\n                            <tr>\n                                <th>N<sup>o</sup></th>\n                                <th>Name</th>\n                                <th>Description</th>\n                                <th>Votes</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let t of artist_info;let i = index;\">\n                                <td>{{i+1}}</td>\n                                <td>{{t.track_id ? t.track_id.name : '' }}</td>\n                                <td>{{t.track_id ? t.track_id.description : ''}}</td>\n                                <td>{{t.track_id ? t.track_id.no_of_votes : ''}}</td>\n                            </tr>\n                            <tr *ngIf=\"artist_info.length <= 0\">\n                                <td colspan=\"4\" >\n                                    No data available.\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</ng-template>\n<ng-template #comment>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n    <div class=\"modal-body\">\n        <div class=\"custom_modal\">\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <b class=\"template_modal_name\">Comments</b>\n                </div>\n                <div class=\"artists_table copyright_table table-responsive col-sm-12\">\n                    <table class=\"table\">\n                        <thead>\n                            <tr>\n                                <th>N<sup>o</sup></th>\n                                <th>Track Name</th>\n                                <th>Description</th>\n                                <th>Listener</th>\n                                <th>Listener email</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let t of artist_info;let i = index;\">\n                                <td>{{i+1}}</td>\n                                <td>{{t.track_id ? t.track_id.name : '' }}</td>\n                                <td>{{t.comment ? t.comment : ''}}</td>\n                                <td>{{t.user_id ? t.user_id.first_name+' '+t.user_id.last_name : ''}}</td>\n                                <td>{{t.user_id ? t.user_id.email : ''}}</td>\n                            </tr>\n                            <tr *ngIf=\"artist_info.length <= 0\">\n                                <td colspan=\"5\" >\n                                    No data available.\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/admin/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_service__ = __webpack_require__("../../../../../src/app/admin/home/home.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_highcharts__ = __webpack_require__("../../../../angular-highcharts/angular-highcharts.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__amcharts_amcharts3_angular__ = __webpack_require__("../../../../@amcharts/amcharts3-angular/es2015/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = /** @class */ (function () {
    function HomeComponent(HomeService, AmCharts, modalService) {
        this.HomeService = HomeService;
        this.AmCharts = AmCharts;
        this.modalService = modalService;
        this.artist_vote = {};
        this.home_tab_cnt = 1;
        this.analytics_days = 7;
        this.show_duration_date = '';
        this.artist_chart = '';
        this.top_location_bar_chart = '';
        this.top_location_chart = '';
        this.artist_info = [];
        console.log("Admin dashboard component");
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getMaxVoteAritst({ day: this.analytics_days });
        this.calculateDateFromDays(this.analytics_days);
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        if (this.chart) {
            this.AmCharts.destroyChart(this.chart);
        }
    };
    HomeComponent.prototype.openModal = function (template, id, type) {
        var _this = this;
        var data = {
            artist_id: id
        };
        if (type == 'track') {
            this.HomeService.getArtistTrackById(data).subscribe(function (response) {
                _this.artist_info = response['artist']['track'];
            });
        }
        else if (type == 'follower') {
            this.HomeService.getArtistFollowerById(data).subscribe(function (response) {
                _this.artist_info = response['artist']['artist'];
            });
        }
        else if (type == 'vote') {
            this.HomeService.getArtistVoteById(data).subscribe(function (response) {
                _this.artist_info = response['artist']['vote'];
            });
        }
        else {
            this.HomeService.getArtistCommentById(data).subscribe(function (response) {
                _this.artist_info = response['artist']['comment'];
            });
        }
        this.modalRef = this.modalService.show(template, { backdrop: 'static' });
    };
    HomeComponent.prototype.homeTabChange = function (index) {
        this.home_tab_cnt = index;
        if (index == 1) {
            this.getMaxVoteAritst({ day: this.analytics_days });
        }
        else if (index == 2) {
            this.getMaxLikeAritst({ day: this.analytics_days });
        }
        else {
            this.getMaxCommentAritst({ day: this.analytics_days });
        }
    };
    HomeComponent.prototype.calculateDateFromDays = function (days) {
        var date = new Date();
        var last = new Date(date.getTime() - (days * 24 * 60 * 60 * 1000));
        this.show_duration_date = this.formatDate(last) + ' - ' + this.formatDate(date);
    };
    HomeComponent.prototype.formatDate = function (date) {
        var monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ];
        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();
        return monthNames[monthIndex] + ' ' + day + ', ' + year;
    };
    HomeComponent.prototype.changeAnalyticsDays = function () {
        this.calculateDateFromDays(this.analytics_days);
        if (this.home_tab_cnt == 1) {
            this.getMaxVoteAritst({ day: this.analytics_days });
        }
        else if (this.home_tab_cnt == 2) {
            this.getMaxLikeAritst({ day: this.analytics_days });
        }
        else {
            this.getMaxCommentAritst({ day: this.analytics_days });
        }
    };
    // Get all aritst based on max vote
    HomeComponent.prototype.getMaxVoteAritst = function (data) {
        var _this = this;
        this.HomeService.getMaxVoteArtists(data).subscribe(function (response) {
            _this.artist_vote = response;
            _this.artistChart(response['day_vote']);
            _this.topLocationChart(response['location']);
            _this.topLocationBarChart(response['location']);
        });
    };
    // Get all aritst based on max vote
    HomeComponent.prototype.getMaxLikeAritst = function (data) {
        var _this = this;
        this.HomeService.getMaxLikeArtists(data).subscribe(function (response) {
            _this.artist_vote = response;
            _this.artistChart(response['likes']);
            _this.topLocationChart(response['location']);
            _this.topLocationBarChart(response['location']);
        });
    };
    // Get all aritst based on max vote
    HomeComponent.prototype.getMaxCommentAritst = function (data) {
        var _this = this;
        this.HomeService.getMaxCommentArtists(data).subscribe(function (response) {
            _this.artist_vote = response;
            _this.artistChart(response['comment']);
            _this.topLocationChart(response['location']);
            _this.topLocationBarChart(response['location']);
        });
    };
    // Artist chart
    HomeComponent.prototype.artistChart = function (data) {
        var result = [0, 0, 0, 0, 0, 0, 0];
        data.forEach(function (ele) {
            result[ele['_id']] = ele.count;
        });
        this.artist_chart = new __WEBPACK_IMPORTED_MODULE_2_angular_highcharts__["a" /* Chart */]({
            chart: {
                type: 'area',
                height: 200
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
                labels: {
                    enabled: true
                },
                tickmarkPlacement: 'on',
                minorTickLength: 0,
                tickLength: 0
            },
            yAxis: {
                visible: true
            },
            series: [
                {
                    name: 'Artist',
                    color: '#9b26b0',
                    data: result
                }
            ]
        });
    };
    // Top location chart
    HomeComponent.prototype.topLocationChart = function (data) {
        var final_data = [];
        var min = 0;
        var max = 0;
        if (data.length > 0) {
            max = data[data.length - 1]['value'];
        }
        data.forEach(function (ele) {
            final_data.push({ id: 'US-' + ele['_id']['name'], value: ele['value'] });
        });
        this.chart = this.AmCharts.makeChart("chartdiv", {
            "type": "map",
            "theme": "light",
            "dataProvider": {
                "map": 'usaLow',
                "colorSteps": 10,
                "areas": final_data
            },
            "areasSettings": {
                "autoZoom": true
            },
            "valueLegend": {
                "right": 10,
                "minValue": min,
                "maxValue": max
            }
        });
    };
    // Top location bar chart
    HomeComponent.prototype.topLocationBarChart = function (data) {
        var cat = [];
        var final_data = [];
        data.forEach(function (ele) {
            cat.push(ele['_id']['_id']);
            final_data.push(ele['value']);
        });
        this.top_location_bar_chart = new __WEBPACK_IMPORTED_MODULE_2_angular_highcharts__["a" /* Chart */]({
            chart: {
                type: 'bar',
                height: 200
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: cat,
                labels: {
                    enabled: true
                },
                tickmarkPlacement: 'on',
                minorTickLength: 0,
                tickLength: 0,
                minorGridLineWidth: 0
            },
            yAxis: {
                visible: true,
                min: 0,
                labels: {
                    overflow: 'justify'
                },
                tickLength: 0
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                floating: true,
                borderWidth: 1,
                shadow: true
            },
            series: [
                {
                    name: 'Top Location',
                    color: '#9b26b0',
                    data: final_data
                }
            ]
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/admin/home/home.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__home_service__["a" /* HomeService */],
            __WEBPACK_IMPORTED_MODULE_3__amcharts_amcharts3_angular__["b" /* AmChartsService */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* BsModalService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/home/home.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeService = /** @class */ (function () {
    function HomeService(http) {
        this.http = http;
        this.api_host = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].API_URL;
        this.user = '';
        this.headers = '';
        // this.user = JSON.parse(localStorage.getItem('user'));
        // this.headers = new HttpHeaders({ 'x-access-token' : this.user.token });  
    }
    // Get artist details who has max vote
    HomeService.prototype.getMaxVoteArtists = function (data) {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'x-access-token': this.user.token });
        return this.http.post(this.api_host + "/admin/home_vote", data, { headers: this.headers });
    };
    // Get artist details who has max likes
    HomeService.prototype.getMaxLikeArtists = function (data) {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'x-access-token': this.user.token });
        return this.http.post(this.api_host + "/admin/home_likes", data, { headers: this.headers });
    };
    // Get artist details who has max comments
    HomeService.prototype.getMaxCommentArtists = function (data) {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'x-access-token': this.user.token });
        return this.http.post(this.api_host + "/admin/home_comment", data, { headers: this.headers });
    };
    // Get artist track by id
    HomeService.prototype.getArtistTrackById = function (data) {
        return this.http.post(this.api_host + "/admin/get_artist_tracks", data, { headers: this.headers });
    };
    // Get artist follower by id
    HomeService.prototype.getArtistFollowerById = function (data) {
        return this.http.post(this.api_host + "/admin/get_artist_followers", data, { headers: this.headers });
    };
    // Get artist vote by id
    HomeService.prototype.getArtistVoteById = function (data) {
        return this.http.post(this.api_host + "/admin/get_artist_votes", data, { headers: this.headers });
    };
    // Get artist Comment by id
    HomeService.prototype.getArtistCommentById = function (data) {
        return this.http.post(this.api_host + "/admin/get_artist_comments", data, { headers: this.headers });
    };
    HomeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], HomeService);
    return HomeService;
}());



/***/ }),

/***/ "../../../../../src/app/admin/layout/admin.layout.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_layout_component__ = __webpack_require__("../../../../../src/app/admin/layout/admin_layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/admin/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap__["a" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* RouterModule */].forChild([])
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__admin_layout_component__["a" /* AdminLayoutComponent */], __WEBPACK_IMPORTED_MODULE_4__sidebar_sidebar_component__["a" /* SidebarComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__admin_layout_component__["a" /* AdminLayoutComponent */]],
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "../../../../../src/app/admin/layout/admin_layout.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n  <app-sidebar></app-sidebar>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/layout/admin_layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent() {
        console.log("Admin dashboard component");
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
    };
    AdminLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard-layout',
            template: __webpack_require__("../../../../../src/app/admin/layout/admin_layout.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/roles/roles.component.html":
/***/ (function(module, exports) {

module.exports = " <!-- Page Content -->\n<div id=\"page-content-wrapper\">  \n  <div class=\"text-right\">\n    <button class=\"create_contest_btn btn\" *ngIf=\"user['admin']['account_type'] == 'super_admin'\" (click)=\"openContestModel(contest)\">Create New Admin</button>\n  </div>         \n  <div>\n    <h3 class=\"Audience-Overview\">Administrators</h3>\n    <div class=\"dropdown table_dropdown custom_dropdown\">\n      <select class=\"form-control custom_drop_btn\" id=\"sort\" name=\"sort_by\" [(ngModel)]=\"sort\" (change)=\"sortRole(0)\">\n        <option value=\"name\">Sort by Name</option>\n        <option value=\"account_type\">Role</option>\n        <option value=\"created_at\">Date Creation</option>\n        <option value=\"suspend\">Suspended</option>\n      </select>\n    </div> \n    <div class=\"artists_table contest_table table-responsive\">\n      <table class=\"table\" datatable [dtOptions]=\"dtOptions[0]\">\n            <thead>\n              <tr>\n                <th>N<sup>O</sup></th>\n                <th class=\"admin_name_th\">Administrator Name</th>\n                <th>Role</th>\n                <th>Date Creation</th>\n                <th>Actions</th>\n              </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let role of roles_data; let i = index;\">\n              <td>{{i+1}}.</td>\n              <td>{{role['first_name']+' '+role['last_name']}}</td>\n              <td>{{role['account_type']}}</td>\n              <td>{{role['created_at'] | date : 'MMMM dd, yyyy'}}</td>\n              <td class=\"td_img actions\">\n                <div>\n                    <i class=\"fa fa-trash\"></i>\n                  <a href=\"javascript:;\" *ngIf=\"user['admin']['account_type'] == 'super_admin'\" (click)=\"removeAdmin(role['_id'], 0)\"> Delete</a>&nbsp;\n                  \n                </div>\n                <div>\n                    <img src=\"img/suspend.png\" *ngIf=\"user['admin']['account_type'] == 'super_admin'\">\n                  <a href=\"javascript:;\" *ngIf=\"user['admin']['account_type'] == 'super_admin'\" (click)=\"suspendAdmin(role['_id'], 0)\">\n                    {{role['status'] == 'suspended' ? 'un-suspend' : 'Suspend'}}\n                  </a>\n                </div>\n              </td>\n            </tr>\n            </tbody>\n          </table>\n    </div>\n  </div>\n  <div>\n    <h3 class=\"Audience-Overview\">Requests</h3>\n    <div class=\"dropdown table_dropdown custom_dropdown\">\n      <select class=\"form-control custom_drop_btn\" id=\"sort\" name=\"sort_by\" [(ngModel)]=\"sort_request\" (change)=\"sortRequest(1)\">\n        <option value=\"-1\">Sort by End Date</option>\n        <option value=\"1\">Sort by Start Date</option>\n      </select>\n    </div> \n    <div class=\"artists_table contest_table table-responsive\">\n      <table class=\"table\" datatable [dtOptions]=\"dtOptions[1]\">\n            <thead>\n              <tr>\n                <th>N<sup>O</sup></th>\n                <th class=\"admin_name_th\">Name</th>\n                <th>Date</th>\n                <th>Message</th>\n                <th>Actions</th>\n              </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let role of request_data; let i = index;\">\n              <td>{{i+1}}.</td>\n              <td>{{role['name']}}</td>\n              <td>{{role['created_at'] | date : 'MMMM dd, yyyy'}}</td>\n              <td>{{role['admin_id']['first_name']+\" \"+role['admin_id']['last_name']+ \"(\"+ role['admin_id']['account_type']+\")\"}}</td>\n              <td class=\"td_img actions\">\n                <div *ngIf=\"!role['action']\">\n                  <i class=\"fa fa-check-square-o\"></i>\n                  <a href=\"javascript:;\" (click)=\"acceptRequest(role['_id'], 1)\"> Accept</a>&nbsp;\n                </div>\n                <div *ngIf=\"role['action'] && role['action'] == 'accepted'\">\n                  <i class=\"fa fa-check-square-o\"></i>\n                   Accepted &nbsp;\n                </div>\n                <div *ngIf=\"!role['action']\">\n                  <i class=\"fa fa-ban\"></i>\n                  <a href=\"javascript:;\" (click)=\"rejectRequest(role['_id'], 1)\">\n                    Reject\n                  </a>\n                </div>\n                <div *ngIf=\"role['action'] && role['action'] == 'rejected'\">\n                  <i class=\"fa fa-ban\"></i>\n                   Rejected &nbsp;\n                </div>\n              </td>\n            </tr>\n            </tbody>\n          </table>\n    </div>\n  </div>\n</div>\n<!-- /#page-content-wrapper -->\n<ng-template #contest>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"contestModelRef.hide()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n  <div class=\"modal-body\">\n    <form [formGroup]=\"add_admin\">\n      <div class=\"creat_contest_body\">\n        <div class=\"col-sm-12 text-center\">\n          <h4 class=\"custom_modal_head\">Create New Admin</h4>\n        </div>\n        <div class=\"form-group custom_modal_form\">\n          <label class=\"control-label\">First Name</label>\n          <input name=\"fname\" class=\"form-control\" formControlName=\"fname\"  [(ngModel)]=\"user_data.first_name\" />\n          <div *ngIf=\"!add_admin.controls['fname'].valid && add_admin.controls['fname'].dirty\">\n              <span *ngIf=\"add_admin.controls['fname'].errors['required']\" class=\"text-danger\">First Name is required.</span>\n          </div>\n        </div>\n        <div class=\"form-group custom_modal_form\">\n          <label class=\"control-label\">Last Name</label>\n          <input name=\"lname\" class=\"form-control\" formControlName=\"lname\"  [(ngModel)]=\"user_data.last_name\" />\n          <div *ngIf=\"!add_admin.controls['lname'].valid && add_admin.controls['lname'].dirty\">\n              <span *ngIf=\"add_admin.controls['lname'].errors['required']\" class=\"text-danger\">Last Name is required.</span>\n          </div>\n        </div>\n        <div class=\"form-group custom_modal_form\">\n          <label class=\"control-label\">Account Type</label>\n          <select class=\"form-control\" name=\"account_type\" formControlName=\"account_type\"  [(ngModel)]=\"user_data.account_type\">\n            <option value=\"\">Select Account Type</option>\n            <option value=\"admin\">Admin</option>\n            <option value=\"moderator\">Moderator</option>\n          </select>\n          <div *ngIf=\"!add_admin.controls['account_type'].valid && add_admin.controls['account_type'].dirty\">\n              <span *ngIf=\"add_admin.controls['account_type'].errors['required']\" class=\"text-danger\">Account type is required.</span>\n          </div>\n        </div>\n        <div class=\"form-group custom_modal_form\">\n          <label class=\"control-label\">Email</label>\n          <input type=\"email\" name=\"email\" class=\"form-control\" formControlName=\"email\"  [(ngModel)]=\"user_data.email\"/>\n          <div *ngIf=\"!add_admin.controls['email'].valid && add_admin.controls['email'].dirty\">\n              <span *ngIf=\"add_admin.controls['email'].errors['required']\" class=\"text-danger\">Email is required.</span>\n              <span *ngIf=\"add_admin.controls['email'].errors['email']\" class=\"text-danger\">Email Mismatched.</span>\n          </div>\n        </div>\n        <div [formGroup]=\"passwordFormGroup\">\n          <div class=\"form-group custom_modal_form\">\n            <label class=\"control-label\">Password</label>\n            <input type=\"password\" name=\"password\" class=\"form-control\" formControlName=\"password\"  [(ngModel)]=\"user_data.password\"/>\n            <div class=\"pwd-icon\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i></div>\n            <div *ngIf=\"!passwordFormGroup.controls['password'].valid && passwordFormGroup.controls['password'].dirty\">\n                <span *ngIf=\"passwordFormGroup.controls['password'].errors['required']\" class=\"text-danger\">Password is required.</span>\n                <span *ngIf=\"passwordFormGroup.controls['password'].errors['minlength']\" class=\"text-danger\">Must be longer than 6 characters.</span>\n            </div>\n          </div>\n          <div class=\"form-group custom_modal_form\">\n            <label class=\"control-label\">Confirm Password</label>\n            <input type=\"password\" name=\"conf\" class=\"form-control\" formControlName=\"conf\"/>\n            <div class=\"pwd-icon\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i></div>\n            <div *ngIf=\"!passwordFormGroup.controls['password'].valid && passwordFormGroup.controls['password'].dirty\">\n                <span *ngIf=\"passwordFormGroup.controls['password'].errors['required']\" class=\"text-danger\">Confirm Password is required.</span>\n                <span *ngIf=\"passwordFormGroup.controls['password'].errors['minlength']\" class=\"text-danger\">Must be longer than 6 characters.</span>\n                <span *ngIf=\"passwordFormGroup.controls['password'].errors['mismatch']\" class=\"text-danger\">Please enter correct confirm password.</span>\n            </div>\n          </div>\n        </div>\n        <div class=\"row modal_btns\">\n            <div class=\"col-sm-6\">\n                <button type=\"button\" class=\"custom_cancel_btn btn\" (click)=\"contestModelRef.hide()\">Cancel</button>\n            </div>\n            <div class=\"col-sm-6 text-right\">\n                <button type=\"submit\" class=\"custom_save btn\" (click)=\"addNewAdmin(0)\" [disabled]=\"!add_admin.valid || show_spinner\">Create <i class=\"fa fa-spinner fa-spin\" *ngIf=\"show_spinner\"></i></button>\n            </div>\n          </div>\n      </div>\n    </form>\n  </div>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/admin/roles/roles.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RolesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__roles_service__ = __webpack_require__("../../../../../src/app/admin/roles/roles.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_datatables__ = __webpack_require__("../../../../angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RolesComponent = /** @class */ (function () {
    function RolesComponent(RolesService, toastr, modalService, fb) {
        this.RolesService = RolesService;
        this.toastr = toastr;
        this.modalService = modalService;
        this.fb = fb;
        this.show_spinner = false;
        this.dtOptions = [];
        this.request_data = [];
        this.roles_data = [];
        this.search_str = '';
        this.sort = 'name';
        this.sort_request = -1;
        this.year = [];
        this.music_type = [];
        this.user_data = {};
        this.user = {};
        this.user = JSON.parse(localStorage.getItem('user'));
        this.passwordFormGroup = this.fb.group({
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(6)],
            conf: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(6)]
        }, {
            validator: this.passwordMatchValidator
        });
        this.add_admin = this.fb.group({
            'fname': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]],
            'lname': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]],
            'account_type': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]],
            'email': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].email]],
            passwordFormGroup1: this.passwordFormGroup
        });
    }
    RolesComponent.prototype.passwordMatchValidator = function (g) {
        return g.get('password').value === g.get('conf').value ? null : g.get('conf').setErrors({ 'mismatch': true });
    };
    RolesComponent.prototype.ngOnInit = function () {
        var _this = this;
        var that = this;
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
            ajax: function (dataTablesParameters, callback) {
                setTimeout(function () {
                    dataTablesParameters['sort'] = [{ "field": _this.sort, value: 1 }];
                    that.RolesService.getAllAdministrator(dataTablesParameters).subscribe(function (response) {
                        that.roles_data = response['admin'];
                        callback({
                            recordsTotal: response['recordsTotal'],
                            recordsFiltered: response['recordsTotal'],
                            data: []
                        });
                    });
                }, 0);
            }
        };
        this.dtOptions[1] = {
            pagingType: 'full_numbers',
            pageLength: 5,
            serverSide: true,
            processing: true,
            searching: false,
            ordering: false,
            lengthChange: false,
            scrollY: '200px',
            scrollCollapse: true,
            ajax: function (dataTablesParameters, callback) {
                setTimeout(function () {
                    dataTablesParameters['sort'] = [_this.sort_request == -1 ? { "field": "end_date", value: -1 } : { "field": "start_date", value: 1 }];
                    that.RolesService.getAllRequest(dataTablesParameters).subscribe(function (response) {
                        that.request_data = response['contest']['contest'];
                        callback({
                            recordsTotal: response['contest']['recordsTotal'],
                            recordsFiltered: response['contest']['recordsTotal'],
                            data: []
                        });
                    });
                }, 0);
            }
        };
        this.getAllMusicTypes();
    };
    // Get day difference between dates
    RolesComponent.prototype.getDaysDiff = function (dt1, dt2) {
        var date1 = new Date(dt1);
        var date2 = new Date(dt2);
        var timeDiff = Math.abs(date2.getTime() - date1.getTime());
        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        return diffDays;
    };
    RolesComponent.prototype.openContestModel = function (template) {
        this.contestModelRef = this.modalService.show(template, { backdrop: 'static' });
    };
    RolesComponent.prototype.sortRole = function (idx) {
        this.dtElements.forEach(function (dtElement, index) {
            if (idx == index) {
                dtElement.dtInstance.then(function (dtInstance) {
                    dtInstance.draw();
                });
            }
        });
    };
    RolesComponent.prototype.sortRequest = function (idx) {
        this.dtElements.forEach(function (dtElement, index) {
            if (idx == index) {
                dtElement.dtInstance.then(function (dtInstance) {
                    dtInstance.draw();
                });
            }
        });
    };
    // Accept contest request
    RolesComponent.prototype.acceptRequest = function (id, idx) {
        var thi = this;
        __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default()({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Accept it!'
        }).then(function (flag) {
            if (flag.value) {
                thi.RolesService.acceptContestRequest(id).subscribe(function (response) {
                    thi.toastr.success(response['message'], 'Success!');
                    thi.dtElements.forEach(function (dtElement, index) {
                        if (idx == index) {
                            dtElement.dtInstance.then(function (dtInstance) {
                                dtInstance.draw();
                            });
                        }
                    });
                }, function (error) {
                    thi.toastr.error(error['error'].message, 'Error!');
                });
            }
        });
    };
    // Reject contest request
    RolesComponent.prototype.rejectRequest = function (id, idx) {
        var thi = this;
        __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default()({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Reject it!'
        }).then(function (flag) {
            if (flag.value) {
                thi.RolesService.rejectContestRequest(id).subscribe(function (response) {
                    thi.toastr.success(response['message'], 'Success!');
                    thi.dtElements.forEach(function (dtElement, index) {
                        if (idx == index) {
                            dtElement.dtInstance.then(function (dtInstance) {
                                dtInstance.draw();
                            });
                        }
                    });
                }, function (error) {
                    thi.toastr.error(error['error'].message, 'Error!');
                });
            }
        });
    };
    // Get all music type
    RolesComponent.prototype.getAllMusicTypes = function () {
        var _this = this;
        this.RolesService.getAllMusicType().subscribe(function (response) {
            _this.music_type = response['music'];
        });
    };
    // Create new admin
    RolesComponent.prototype.addNewAdmin = function (idx) {
        var _this = this;
        this.show_spinner = true;
        this.RolesService.addNewAdmin(this.user_data).subscribe(function (response) {
            _this.dtElements.forEach(function (dtElement, index) {
                if (idx == index) {
                    dtElement.dtInstance.then(function (dtInstance) {
                        dtInstance.draw();
                    });
                }
            });
            _this.toastr.success(response['message'], 'Success!');
            _this.contestModelRef.hide();
        }, function (error) {
            _this.toastr.error(error['error'].message, 'Error!');
            _this.show_spinner = false;
        }, function () {
            _this.show_spinner = false;
        });
    };
    // remove admin 
    RolesComponent.prototype.removeAdmin = function (id, idx) {
        var thi = this;
        __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default()({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (flag) {
            if (flag.value) {
                thi.RolesService.deleteAdmin(id).subscribe(function (response) {
                    thi.toastr.success(response['message'], 'Success!');
                    thi.dtElements.forEach(function (dtElement, index) {
                        if (idx == index) {
                            dtElement.dtInstance.then(function (dtInstance) {
                                dtInstance.draw();
                            });
                        }
                    });
                }, function (error) {
                    thi.toastr.error(error['error'].message, 'Error!');
                });
            }
        });
    };
    // suspend admin account
    RolesComponent.prototype.suspendAdmin = function (id, idx) {
        var thi = this;
        __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default()({
            title: 'Are you sure?',
            text: "You want to suspend this account!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, suspend it!'
        }).then(function (flag) {
            if (flag.value) {
                thi.RolesService.suspendAdmin(id).subscribe(function (response) {
                    thi.toastr.success(response['message'], 'Success!');
                    thi.dtElements.forEach(function (dtElement, index) {
                        if (idx == index) {
                            dtElement.dtInstance.then(function (dtInstance) {
                                dtInstance.draw();
                            });
                        }
                    });
                }, function (error) {
                    thi.toastr.error(error['error'].message, 'Error!');
                });
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_3_angular_datatables__["a" /* DataTableDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
    ], RolesComponent.prototype, "dtElements", void 0);
    RolesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-roles',
            template: __webpack_require__("../../../../../src/app/admin/roles/roles.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__roles_service__["a" /* RolesService */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__["a" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], RolesComponent);
    return RolesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/roles/roles.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RolesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RolesService = /** @class */ (function () {
    function RolesService(http) {
        this.http = http;
        this.api_host = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].API_URL;
        this.user = '';
        this.headers = '';
        this.user = JSON.parse(localStorage.getItem('user'));
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'x-access-token': this.user.token });
    }
    // Get all artist details
    RolesService.prototype.getAllContest = function (data) {
        return this.http.post(this.api_host + "/admin/contest", data, { headers: this.headers });
    };
    // Get Contest participants by contest id
    RolesService.prototype.getContestParticipants = function (data) {
        return this.http.post(this.api_host + "/admin/get_participants_of_contest", data, { headers: this.headers });
    };
    // get All music type
    RolesService.prototype.getAllMusicType = function () {
        return this.http.get(this.api_host + "/music_type");
    };
    // Get all administrator
    RolesService.prototype.getAllAdministrator = function (data) {
        return this.http.post(this.api_host + "/admin", data, { headers: this.headers });
    };
    // Add new admin
    RolesService.prototype.addNewAdmin = function (data) {
        return this.http.post(this.api_host + "/admin/add_admin", data, { headers: this.headers });
    };
    // Remove admin
    RolesService.prototype.deleteAdmin = function (id) {
        return this.http.delete(this.api_host + "/admin/delete/" + id, { headers: this.headers });
    };
    // Remove admin
    RolesService.prototype.suspendAdmin = function (id) {
        return this.http.post(this.api_host + "/admin/suspend/" + id, null, { headers: this.headers });
    };
    // Get contest detail
    RolesService.prototype.getAllRequest = function (data) {
        return this.http.post(this.api_host + "/admin/contest_request", data, { headers: this.headers });
    };
    // Contest request accepetd
    RolesService.prototype.acceptContestRequest = function (id) {
        return this.http.post(this.api_host + "/admin/accept/contest_request/" + id, null, { headers: this.headers });
    };
    // Contest request accepetd
    RolesService.prototype.rejectContestRequest = function (id) {
        return this.http.post(this.api_host + "/admin/reject/contest_request/" + id, null, { headers: this.headers });
    };
    RolesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], RolesService);
    return RolesService;
}());



/***/ }),

/***/ "../../../../../src/app/admin/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Sidebar -->\n<div class=\"top_container\">\n    <ul class=\"profile_container\">\n        <li class=\"sidebar-brand\">\n            <a class=\"profile_name\" href=\"javascript:;\">\n                <span class=\"user_profile\">\n                    <img src=\"img/user_profile.jpg\" />\n                </span>\n                <h3 class=\"user_name\">{{user['admin'] ? user['admin']['first_name']+' '+user['admin']['last_name'] : ''}}</h3>\n                <h5 class=\"user_profession\">{{user['admin'] ? user['admin']['account_type']  : '' | titlecase}}</h5>\n                <div class=\"dropdown\" dropdown>\n                    <a href=\"javascript:;\" id=\"button-basic\" dropdownToggle class=\"dropdown-toggle drop_icon\">\n                            <span class=\"caret\"></span>\n                    </a>\n                    <ul id=\"dropdown-basic\" *dropdownMenu class=\"dropdown-menu\" >\n                        <li role=\"menuitem\" (click)=\"logout()\">\n                            <a class=\"dropdown-item\" href=\"javascript:;\">Logout</a>\n                        </li>\n                    </ul>\n                </div>\n            </a>\n        </li>\n    </ul>\n    <a href=\"javascript:;menu-toggle\" class=\"btn btn-secondary\" id=\"menu-toggle\">\n        <i class=\"fa fa-bars\"></i>\n    </a>\n</div>\n<div id=\"sidebar-wrapper\">\n\n    <ul class=\"sidebar-nav\">\n        <li class=\"home\" routerLinkActive=\"active\">\n            <a href=\"javascript:;\" routerLink=\"/admin\">\n                <i></i>Home</a>\n        </li>\n        <li class=\"bell\" routerLinkActive=\"active\">\n            <a href=\"javascript:;\" routerLink=\"/admin/alerts\">\n                <i></i>Alert</a>\n        </li>\n        <li class=\"artist\" routerLinkActive=\"active\">\n            <a href=\"javascript:;\" routerLink=\"/admin/artist\">\n                <i></i>Artist</a>\n        </li>\n        <li class=\"users\" routerLinkActive=\"active\">\n            <a href=\"javascript:;\" routerLink=\"/admin/users\">\n                <i></i>Users</a>\n        </li>\n        <li>\n            <hr/>\n        </li>\n        <li class=\"contest\" routerLinkActive=\"active\">\n            <a href=\"javascript:;\" routerLink=\"/admin/contest\">\n                <i></i>Contest</a>\n        </li>\n        <li class=\"roles\" routerLinkActive=\"active\">\n            <a href=\"javascript:;\" routerLink=\"/admin/roles\">\n                <i></i>Roles</a>\n        </li>\n        <li class=\"log_out\" >\n            <a href=\"javascript:;\" (click)=\"logout()\">\n            <i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i>Logout</a>\n        </li>\n    </ul>\n</div>\n<!-- /#sidebar-wrapper -->"

/***/ }),

/***/ "../../../../../src/app/admin/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(router) {
        this.router = router;
        this.user = {};
        console.log("Admin dashboard component");
        this.user = JSON.parse(localStorage.getItem('user'));
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(['/admin/login']);
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__("../../../../../src/app/admin/sidebar/sidebar.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Page Content -->\n<div id=\"page-content-wrapper\">           \n  <div class=\"artist_content\" style=\"display: block;\">\n    <div class=\"container-fluid\">\n      <h3 class=\"Audience-Overview\">Search Users </h3>\n      <div class=\"search-input header_search\">\n        <input type=\"text\" name=\"search\" [(ngModel)]=\"search_str\" (keyup)=\"filterBasedOnSearch($event)\" placeholder=\"Search by User Name\">\n      </div>\n      <div class=\"row top_header_filter\">\n        \n        <div class=\"col-lg-10 col-md-9 col-sm-12 col-xs-12\">\n          <div class=\"sub-menu-filter\">\n          <div class=\"artist_heading\">Region</div>\n          <div class=\"row\">\n              <div class=\"col-lg-2 col-md-4 col-sm-4 col-xs-4\">\n                <div class=\"filter-subhead\">Northeast</div>\n                <ul>\n                  <li *ngFor=\"let s of state_list;\" [style.display]=\"s['region']['name'] == 'northeast' ? 'block' : 'none'\">\n                    <div class=\"checkbox\">\n                        <label>\n                          <input type=\"checkbox\" [value]=\"s._id\" (click)=\"addRegionForFilter($event.target.checked, $event.target.value)\">\n                          <div class=\"chk_check\"></div>\n                          <span>{{s.name}}</span>\n                        </label>\n                    </div>\n                  </li>\n                </ul>\n              </div>\n              <div class=\"col-lg-2 col-md-4 col-sm-4 col-xs-4\">\n                <div class=\"filter-subhead\">southeast</div>\n                <ul>\n                  <li *ngFor=\"let s of state_list;\" [style.display]=\"s['region']['name'] == 'southeast' ? 'block' : 'none'\">\n                    <div class=\"checkbox\">\n                        <label>\n                          <input type=\"checkbox\" [value]=\"s._id\" (click)=\"addRegionForFilter($event.target.checked, $event.target.value)\">\n                          <div class=\"chk_check\"></div>\n                          <span>{{s.name}}</span>\n                        </label>\n                    </div>\n                  </li>\n                </ul>\n              </div>\n              <div class=\"col-lg-2 col-md-4 col-sm-4 col-xs-4\">\n                <div class=\"filter-subhead\">Midwest</div>\n                <ul>\n                  <li *ngFor=\"let s of state_list;\" [style.display]=\"s['region']['name'] == 'midwest' ? 'block' : 'none'\">\n                    <div class=\"checkbox\">\n                        <label>\n                          <input type=\"checkbox\" [value]=\"s._id\" (click)=\"addRegionForFilter($event.target.checked, $event.target.value)\">\n                          <div class=\"chk_check\"></div>\n                          <span>{{s.name}}</span>\n                        </label>\n                    </div>\n                  </li>\n                </ul>\n              </div>\n              <div class=\"col-lg-2 col-md-4 col-sm-4 col-xs-4\">\n                <div class=\"filter-subhead\">Southwest</div>\n                <ul>\n                  <li *ngFor=\"let s of state_list;\" [style.display]=\"s['region']['name'] == 'southwest' ? 'block' : 'none'\">\n                    <div class=\"checkbox\">\n                        <label>\n                          <input type=\"checkbox\" [value]=\"s._id\" (click)=\"addRegionForFilter($event.target.checked, $event.target.value)\">\n                          <div class=\"chk_check\"></div>\n                          <span>{{s.name}}</span>\n                        </label>\n                    </div>\n                  </li>\n                </ul>\n              </div>\n              <div class=\"col-lg-2 col-md-4 col-sm-4 col-xs-4\">\n                <div class=\"filter-subhead\">West</div>\n                <ul>\n                  <li *ngFor=\"let s of state_list;\" [style.display]=\"s['region']['name'] == 'west' ? 'block' : 'none'\">\n                    <div class=\"checkbox\">\n                        <label>\n                          <input type=\"checkbox\" [value]=\"s._id\" (click)=\"addRegionForFilter($event.target.checked, $event.target.value)\">\n                          <div class=\"chk_check\"></div>\n                          <span>{{s.name}}</span>\n                        </label>\n                    </div>\n                  </li>\n                </ul>\n              </div>\n              <div class=\"col-lg-2 col-md-4 col-sm-4 col-xs-4\">\n                <div class=\"filter-subhead\">other</div>\n                <ul>\n                  <li *ngFor=\"let s of state_list;\" [style.display]=\"s['region']['name'] == 'other' ? 'block' : 'none'\">\n                    <div class=\"checkbox\">\n                        <label>\n                          <input type=\"checkbox\" [value]=\"s._id\" (click)=\"addRegionForFilter($event.target.checked, $event.target.value)\">\n                          <div class=\"chk_check\"></div>\n                          <span>{{s.name}}</span>\n                        </label>\n                    </div>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n     <div>\n          <h3 class=\"Audience-Overview\">Users </h3>\n          <div class=\"dropdown table_dropdown custom_dropdown\">\n            <select class=\"form-control custom_drop_btn\" id=\"sort\" name=\"sort_by\" [(ngModel)]=\"sort_by\" (change)=\"sortUser($event.target.value)\">\n              <option value=\"-1\">Newest First</option>\n              <option value=\"1\">Newest Last</option>\n            </select>\n          </div> \n          <div class=\"artists_table copyright_table table-responsive\">\n            <table class=\"table\" datatable [dtOptions]=\"dtOptions\">\n                  <thead>\n                    <tr>\n                      <th>N<sup>O</sup></th>\n                      <th>User Name</th>\n                      <th>Status</th>\n                      <th>Artist Followers</th>\n                      <th>Votes Casted</th>\n                      <th>Likes Casted</th>\n                      <th>Comments</th>\n                      <th>Actions</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let user of user_data; let i = index;\">\n                      <td>{{i+1}}.</td>\n                      <td><a href=\"javascript:;\" (click)=\"openModal(template, user['_id'])\">{{user['first_name']+' '+user['last_name']}}</a></td>\n                      <td class=\"status {{user['status'] == 'active' ? 'active_status' : user['status'] == 'Suspended' ? 'suspended_status' : ''}}\"><span>{{user['status']}}</span></td>  \n                      <td class=\"td_img\"><img src=\"img/followers.png\"/>{{user['no_of_followers']}}</td>                             \n                      <td class=\"td_img\"><img src=\"img/vote.png\"/>{{user['no_of_votes']}}</td>\n                      <td class=\"td_img\"><img src=\"img/likes.png\"/>{{user['no_of_likes']}}</td>\n                      <td class=\"td_img\"><img src=\"img/comments.png\"/>{{user['no_of_followers']}}</td> \n                      <td class=\"td_img\"><img src=\"img/suspend.png\">\n                        <a href=\"javascript:;\" (click)=\"suspendUser(user['_id'])\">{{user['flag']? 'Un-suspend' : 'Suspend'}}</a>\n                      </td>                               \n                    </tr>                     \n                  </tbody>\n                </table>\n          </div>\n      </div>\n</div>\n<!-- /#page-content-wrapper -->\n\n<ng-template #template>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n  <div class=\"modal-body\">\n    <div class=\"custom_modal\">\n      <div class=\"row\" style=\"padding: 5px;\" >\n          <div class=\"col-sm-12\">\n            <div class=\"following_artist_header\">\n              <h3>{{user_detail['first_name']+' '+user_detail['last_name']}}</h3>\n            </div>\n            <div class=\"template_modal_data\">\n              <div>\n                <span>{{user_detail['gender']}}</span>\n                <span>{{user_detail['old'] }} y.o.</span>\n                <span>{{user_detail['location']}}</span>\n              </div>\n              <div class=\"right_span\"><span>Signup date : {{user_detail['created_at'] | date : 'yyyy/MM/dd'}}</span></div>\n            </div>\n            <div class=\"template_modal_data\">\n              <ul>\n                  <li><i class=\"fa fa-star-o\" aria-hidden=\"true\"></i>Votes {{user_detail['no_of_votes']}}</li>\n                  <li><i class=\"fa fa-thumbs-o-up\" aria-hidden=\"true\"></i>Like {{user_detail['no_of_likes']}}</li>\n                  <li><i class=\"fa fa-heart-o\" aria-hidden=\"true\"></i>Followers {{user_detail['no_of_followers']}}</li>\n                  <li><i class=\"fa fa-commenting-o\" aria-hidden=\"true\"></i>Comments {{user_detail['no_of_comments']}}</li>\n              </ul>\n              <div  class=\"right_span\">\n\n                <span>Last Login : {{user_detail['last_login'] | date : 'yyyy/MM/dd'}}</span>\n              </div>\n           </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <b class=\"template_modal_name\">Artists Following</b>\n          </div>\n          <div class=\"artists_table copyright_table table-responsive col-sm-12\">\n            <table class=\"table\">\n                <thead>\n                  <tr>\n                    <th>N<sup>O</sup></th>\n                    <th>Artist Name</th>\n                    <th>Music Genre</th>\n                    <th>Tracks</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let artist of user_following; let i = index;\" >\n                    <td>{{i+1}}</td>\n                    <td>{{artist['artist_id']['first_name']+' '+artist['artist_id']['last_name']}}</td>\n                    <td>{{artist['artist_id']['music_type']['name']}}</td>\n                    <td >{{artist['artist_id']['no_of_tracks']}}</td>\n                  </tr>\n                  <tr *ngIf=\"artist?.length == 0\">\n                    <td colspan=\"4\">No data available.</td>\n                  </tr>\n                </tbody>\n            </table>\n          </div>\n        </div>\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <b class=\"flag_head\">Flags</b>\n      </div>\n      <div class=\"artists_table  table-responsive col-sm-12\">\n        <table class=\"table\">\n            <thead>\n              <tr>\n                <th>Date</th>\n                <th>Type</th>\n                <th>Actions</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let val of user_flag\">\n                <td>{{val.created_at | date : 'MMMM dd, yyyy'}}</td>\n                <td>{{val['from']['account_type']}}</td>\n                <td>Suspended by {{val['from']['account_type']}}</td>\n              </tr>\n            </tbody>\n        </table>\n      </div>\n    </div>\n</div>\n</div>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/admin/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users_service__ = __webpack_require__("../../../../../src/app/admin/users/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_datatables__ = __webpack_require__("../../../../angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DataTablesResponse = /** @class */ (function () {
    function DataTablesResponse() {
    }
    return DataTablesResponse;
}());
var UsersComponent = /** @class */ (function () {
    function UsersComponent(UsersService, toastr, modalService) {
        this.UsersService = UsersService;
        this.toastr = toastr;
        this.modalService = modalService;
        this.dtOptions = {};
        this.user_data = [];
        this.search_str = '';
        this.region_filter = [];
        this.state_list = [];
        this.sort_by = -1;
        this.user_flag = [];
        this.user_detail = [];
        this.user_following = [];
        this.user_id = '';
        this.user_img_url = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].USER_IMG;
        console.log("Admin dashboard component");
        this.getAllState();
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 5,
            serverSide: true,
            processing: true,
            searching: false,
            ordering: false,
            responsive: true,
            scrollY: '200px',
            scrollCollapse: true,
            lengthChange: false,
            ajax: function (dataTablesParameters, callback) {
                setTimeout(function () {
                    dataTablesParameters['search'] = that.search_str;
                    dataTablesParameters['sort_by'] = that.sort_by;
                    dataTablesParameters['filter'] = [];
                    if (that.region_filter.length) {
                        dataTablesParameters['filter'].push({ 'field': 'state', value: _this.region_filter });
                    }
                    that.UsersService.getAllUser(dataTablesParameters).subscribe(function (response) {
                        that.user_data = response['user']['user'];
                        callback({
                            recordsTotal: response['user']['recordsTotal'],
                            recordsFiltered: response['user']['recordsTotal'],
                            data: []
                        });
                    });
                }, 0);
            }
        };
    };
    // suspend user
    UsersComponent.prototype.suspendUser = function (id) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default()({
            title: 'Are you sure?',
            text: "",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then(function (flag) {
            if (flag.value) {
                _this.UsersService.suspendUser(id).subscribe(function (response) {
                    _this.toastr.success(response['message'], 'Success!');
                    _this.datatableElement.dtInstance.then(function (dtInstance) {
                        dtInstance.draw();
                    });
                }, function (error) {
                    _this.toastr.error(error['error'].message, 'Error!');
                });
            }
        });
    };
    // Filter user based on search string
    UsersComponent.prototype.filterBasedOnSearch = function (e) {
        if (e.keyCode == 13) {
            var that = this;
            this.datatableElement.dtInstance.then(function (dtInstance) {
                dtInstance.draw();
            });
        }
    };
    // Sort user data
    UsersComponent.prototype.sortUser = function (val) {
        var that = this;
        this.datatableElement.dtInstance.then(function (dtInstance) {
            dtInstance.draw();
        });
    };
    UsersComponent.prototype.openModal = function (template, id) {
        var _this = this;
        var data = {
            user_id: id
        };
        this.modalRef = this.modalService.show(template, { backdrop: 'static' });
        this.UsersService.getUserFollowingArtist(data).subscribe(function (response) {
            _this.user_following = response['user'];
        });
        this.UsersService.getUserById(data).subscribe(function (response) {
            _this.user_detail = response['user'];
            if (_this.user_detail['dob']) {
                var dob = new Date(_this.user_detail['dob']);
                var dt = new Date();
                _this.user_detail['old'] = dt.getFullYear() - dob.getFullYear();
            }
        });
        this.UsersService.getFlagedUser(data).subscribe(function (response) {
            _this.user_flag = response['user'];
        });
    };
    // get all state
    UsersComponent.prototype.getAllState = function () {
        var _this = this;
        this.UsersService.getAllState().subscribe(function (response) {
            _this.state_list = response['state'];
        });
    };
    // Add region for filtering
    UsersComponent.prototype.addRegionForFilter = function (flag, val) {
        if (flag) {
            this.region_filter.push(val);
        }
        else {
            var index = this.region_filter.indexOf(val);
            this.region_filter.splice(index, 1);
        }
        this.datatableElement.dtInstance.then(function (dtInstance) {
            dtInstance.draw();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_angular_datatables__["a" /* DataTableDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_angular_datatables__["a" /* DataTableDirective */])
    ], UsersComponent.prototype, "datatableElement", void 0);
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-users',
            template: __webpack_require__("../../../../../src/app/admin/users/users.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__users_service__["a" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* BsModalService */]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/users/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsersService = /** @class */ (function () {
    function UsersService(http) {
        this.http = http;
        this.api_host = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].API_URL;
        this.user = '';
        this.headers = '';
        this.user = JSON.parse(localStorage.getItem('user'));
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'x-access-token': this.user.token });
    }
    // Get all artist details
    UsersService.prototype.getAllUser = function (data) {
        return this.http.post(this.api_host + "/admin/get_user", data, { headers: this.headers });
    };
    // suspend artist
    UsersService.prototype.suspendUser = function (id) {
        return this.http.post(this.api_host + "/admin/flag/user/" + id, null, { headers: this.headers });
    };
    // Flaged user
    UsersService.prototype.getFlagedUser = function (data) {
        return this.http.post(this.api_host + "/admin/get_flagged_user", data, { headers: this.headers });
    };
    // Artist following by user 
    UsersService.prototype.getUserFollowingArtist = function (data) {
        return this.http.post(this.api_host + "/admin/user/artist_follow", data, { headers: this.headers });
    };
    // Get user details by id
    UsersService.prototype.getUserById = function (data) {
        return this.http.post(this.api_host + "/admin/user", data, { headers: this.headers });
    };
    // get all state
    UsersService.prototype.getAllState = function () {
        return this.http.post(this.api_host + "/state", null);
    };
    UsersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "../../../../../src/app/admin_login/admin_login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login_container\">\n  <div>    \n    <div id=\"loginbox\" class=\"mainbox\">                    \n        <div class=\"panel panel-info\" >\n          <div class=\"panel-heading\">\n              <div class=\"panel-title\">Sign In</div>\n          </div>     \n          <div style=\"padding-top:30px\" class=\"panel-body\" >\n            <div style=\"display:none\" id=\"login-alert\" class=\"alert alert-danger col-sm-12\"></div>\n              <form id=\"loginform\" class=\"form-horizontal\" role=\"form\" [formGroup]=\"admin_formgroup\">\n                  <div class=\"form-group\">\n                      <input id=\"login-username\" type=\"text\" formControlName=\"email\"  [(ngModel)]=\"admin_data.email\" class=\"form-control login_form\" name=\"username\" value=\"\" placeholder=\"username or email\">                                        \n                      <div *ngIf=\"!admin_formgroup.controls['email'].valid && admin_formgroup.controls['email'].dirty\">\n                        <span *ngIf=\"admin_formgroup.controls['email'].errors['required']\" class=\"text-danger error_msg\">Email is required.</span>\n                      </div>\n                  </div>\n                  <div class=\"form-group\">\n                      <input id=\"login-password\" type=\"password\" formControlName=\"password\"  [(ngModel)]=\"admin_data.password\" class=\"form-control login_form\" name=\"password\" placeholder=\"password\">\n                      <div *ngIf=\"!admin_formgroup.controls['password'].valid && admin_formgroup.controls['password'].dirty\">\n                        <span *ngIf=\"admin_formgroup.controls['password'].errors['required']\" class=\"text-danger error_msg\">Password is required.</span>\n                      </div>\n                  </div>  \n                  <div class=\"forget_password\">\n                    <a class=\"\" href=\"javascript:;\" (click)=\"openContestModel(forget)\">Forget Password</a>\n                  </div>                        \n                  <!-- <div class=\"input-group\">\n                    <div class=\"checkbox\">\n                      <label>\n                        <input id=\"login-remember\" type=\"checkbox\" name=\"remember\" value=\"1\"> Remember me\n                      </label>\n                    </div>\n                  </div> -->\n                  <div  class=\"form-group\">\n                      <!-- Button -->\n                      <button type=\"submit\" class=\"btn  login_btn\" (click)=\"signin()\" [disabled]=\"!admin_formgroup.valid && show_spinner\">Login <i *ngIf=\"show_spinner\" class=\"fa fa-spinner fa-spin\"></i> </button>\n                  </div> \n                </form>     \n          </div>                     \n      </div>  \n    </div>\n  </div>\n</div>\n<ng-template #forget>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"ModelRef.hide()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n\n  <div class=\"modal-body\">\n    <form [formGroup]=\"forget_formgroup\">\n      <div class=\"creat_contest_body\">\n        <div class=\"col-sm-12 text-center\">\n          <h4 class=\"custom_modal_head\">Forget Password</h4>\n        </div>\n        <div class=\"form-group custom_modal_form\">\n          <label class=\"control-label\">Email</label>\n          <input type=\"email\" name=\"email\" class=\"form-control\" formControlName=\"email\" [(ngModel)]=\"forget_data.email\" />\n          <div *ngIf=\"!forget_formgroup.controls['email'].valid && forget_formgroup.controls['email'].dirty\">\n              <span *ngIf=\"forget_formgroup.controls['email'].errors['required']\" class=\"text-danger\">Email is required.</span>\n              <span *ngIf=\"forget_formgroup.controls['email'].errors['email']\" class=\"text-danger\">Email Mismatched.</span>\n          </div>\n        </div>\n        <div class=\"row modal_btns\">\n          <div class=\"col-sm-12 text-right\">\n              <button class=\"custom_save btn\" (click)=\"forgetPassword()\" [disabled]=\"!forget_formgroup.valid || show_spinner\">Forget <i class=\"fa fa-spinner\" *ngIf=\"show_spinner\"></i></button>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/admin_login/admin_login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__admin_login_service__ = __webpack_require__("../../../../../src/app/admin_login/admin_login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminLoginComponent = /** @class */ (function () {
    function AdminLoginComponent(AdminLoginService, fb, toastr, router, modalService) {
        this.AdminLoginService = AdminLoginService;
        this.fb = fb;
        this.toastr = toastr;
        this.router = router;
        this.modalService = modalService;
        this.admin_data = {};
        this.show_spinner = false;
        this.forget_data = {};
        this.admin_formgroup = this.fb.group({
            'email': ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].email]],
            'password': ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]],
        });
        this.forget_formgroup = this.fb.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].email]]
        });
    }
    AdminLoginComponent.prototype.ngOnInit = function () {
    };
    AdminLoginComponent.prototype.signin = function () {
        var _this = this;
        this.show_spinner = true;
        this.AdminLoginService.login(this.admin_data).subscribe(function (response) {
            console.log(response);
            localStorage.setItem('user', JSON.stringify(response));
            _this.router.navigate(['/admin']);
        }, function (error) {
            _this.toastr.error(error['error'].message, 'Error!');
            _this.show_spinner = false;
        }, function () {
            _this.show_spinner = false;
        });
    };
    AdminLoginComponent.prototype.openContestModel = function (template) {
        this.ModelRef = this.modalService.show(template, { backdrop: 'static' });
    };
    // Forget password
    AdminLoginComponent.prototype.forgetPassword = function () {
        var _this = this;
        this.show_spinner = true;
        this.AdminLoginService.forgetPassword(this.forget_data).subscribe(function (response) {
            _this.forget_data = {};
            _this.ModelRef.hide();
            _this.toastr.success(response['message'], 'Success!');
        }, function (error) {
            _this.toastr.error(error['error'].message, 'Error!');
            _this.show_spinner = false;
        }, function () {
            _this.show_spinner = false;
        });
    };
    AdminLoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin_login',
            template: __webpack_require__("../../../../../src/app/admin_login/admin_login.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__admin_login_service__["a" /* AdminLoginService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__["a" /* BsModalService */]])
    ], AdminLoginComponent);
    return AdminLoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin_login/admin_login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminLoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_login_component__ = __webpack_require__("../../../../../src/app/admin_login/admin_login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_login_service__ = __webpack_require__("../../../../../src/app/admin_login/admin_login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_image_cropper__ = __webpack_require__("../../../../ngx-image-cropper/ngx-image-cropper.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// import { HttpClientModule, HttpClient } from '@angular/common/http';




var AdminLoginModule = /** @class */ (function () {
    function AdminLoginModule() {
    }
    AdminLoginModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_image_cropper__["a" /* ImageCropperModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_9_ngx_toastr__["a" /* ToastrModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* RouterModule */].forChild([
                    { path: 'admin/login', component: __WEBPACK_IMPORTED_MODULE_4__admin_login_component__["a" /* AdminLoginComponent */] }
                ])
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__admin_login_component__["a" /* AdminLoginComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_5__admin_login_service__["a" /* AdminLoginService */]]
        })
    ], AdminLoginModule);
    return AdminLoginModule;
}());



/***/ }),

/***/ "../../../../../src/app/admin_login/admin_login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminLoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminLoginService = /** @class */ (function () {
    function AdminLoginService(http) {
        this.http = http;
        this.api_host = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].API_URL;
        this.user = '';
        this.headers = '';
        // this.user = JSON.parse(localStorage.getItem('user'));
        // this.headers = new HttpHeaders({ 'x-access-token' : this.user.token });  
    }
    AdminLoginService.prototype.login = function (data) {
        return this.http.post(this.api_host + "/admin_login", data);
    };
    // Forget passowrd
    AdminLoginService.prototype.forgetPassword = function (data) {
        return this.http.post(this.api_host + "/admin_forgot_password", data);
    };
    AdminLoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AdminLoginService);
    return AdminLoginService;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_utils__ = __webpack_require__("../../../../ngx-bootstrap/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(router, location) {
        this.router = router;
        this.location = location;
        this.title = 'app';
        this.loading = true;
        this.url = '';
        console.log("App component");
        Object(__WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_utils__["d" /* setTheme */])('bs4');
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // this.url = this.location.path().split('/');
        this.router.events
            .subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["e" /* NavigationStart */]) {
                _this.loading = true;
            }
            else if (event instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* NavigationEnd */] ||
                event instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* NavigationCancel */]) {
                _this.loading = false;
                _this.url = _this.location.path().split('/');
                var pagename = _this.url[_this.url.length - 1];
                // if (pagename != 'all' && pagename != 'upcoming' && pagename != 'past') {
                //   window.scroll(0, 0);
                // }
                // if (this.url[this.url.length - 1] == 'home') {
                //   document.body.classList.add('home-page');
                // } else {
                //   document.body.className = ''
                // }
            }
            else if (event instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* NavigationError */]) {
                _this.loading = false;
                _this.router.navigate(['']);
            }
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_highcharts__ = __webpack_require__("../../../../angular2-highcharts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_highcharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_datatables__ = __webpack_require__("../../../../angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_layout_layout_module__ = __webpack_require__("../../../../../src/app/dashboard-layout/layout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__admin_admin_layout_module__ = __webpack_require__("../../../../../src/app/admin/admin_layout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__register_register_module__ = __webpack_require__("../../../../../src/app/register/register.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__admin_login_admin_login_module__ = __webpack_require__("../../../../../src/app/admin_login/admin_login.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__email_varification_email_varification_module__ = __webpack_require__("../../../../../src/app/email_varification/email_varification.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__forget_password_forget_password_module__ = __webpack_require__("../../../../../src/app/forget_password/forget_password.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_auth_service__ = __webpack_require__("../../../../../src/app/shared/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_message_service__ = __webpack_require__("../../../../../src/app/shared/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




// import { ChartModule } from 'angular-highcharts';













var AppModule = /** @class */ (function () {
    function AppModule(platformId, appId) {
        this.platformId = platformId;
        this.appId = appId;
        var platform = Object(__WEBPACK_IMPORTED_MODULE_15__angular_common__["isPlatformBrowser"])(platformId) ?
            'in the browser' : 'on the server';
        console.log("Running " + platform + " with appId=" + appId);
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"].withServerTransition({ appId: 'AOM' }),
                __WEBPACK_IMPORTED_MODULE_7__dashboard_layout_layout_module__["a" /* LayoutModule */],
                __WEBPACK_IMPORTED_MODULE_9__register_register_module__["a" /* RegisterModule */],
                __WEBPACK_IMPORTED_MODULE_10__admin_login_admin_login_module__["a" /* AdminLoginModule */],
                __WEBPACK_IMPORTED_MODULE_8__admin_admin_layout_module__["a" /* AdminLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_11__email_varification_email_varification_module__["a" /* EamilVarificationModule */],
                __WEBPACK_IMPORTED_MODULE_12__forget_password_forget_password_module__["a" /* ForgetPasswordModule */],
                __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_angular2_highcharts__["ChartModule"].forRoot(__webpack_require__("../../../../highcharts/highmaps.js")),
                __WEBPACK_IMPORTED_MODULE_5_angular_datatables__["b" /* DataTablesModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* RouterModule */].forRoot([], { useHash: false })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13__shared_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_14__shared_message_service__["a" /* MessageService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_core__["PLATFORM_ID"])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_core__["APP_ID"])),
        __metadata("design:paramtypes", [Object, String])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard-layout/artist/artist.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"artist-head artist-highlight\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12 col-sm-12 col-xs-12\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-lg-6 col-md-5 col-sm-6 col-xs-5 plr-0\">\n              <div class=\"head-global artist_header\"><h2>Artists</h2></div>\n            </div>\n            <div class=\"col-lg-6 col-md-7 col-sm-6 col-xs-7\">\n              <div class=\"new-head\">\n                <div class=\"search-wrap\">\n                  <form>\n                    <div class=\"mobile-search\" (click)=\"toggleSearch()\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></div>\n                    <div class=\"search-input\" [style]=\"toggSearch ? 'block' : 'none'\">\n                      <input type=\"text\" placeholder=\"Search by Artist Name or Song Title\" (keyup)=\"filterArtistv1($event)\" name=\"search\" [(ngModel)]=\"search_str\" />\n                    </div>\n                  </form>\n                </div>\n                <div class=\"filter-head sdg\">\n                  <a href=\"javascript:;\" (click)=\"toggleFilter()\">\n                    <div class=\"filter-icon\"><img src=\"img/filter.png\" alt=\"Filter Icon\"></div>\n                    <span>Filters <i class=\"fa fa-caret-right\"></i></span>\n                  </a>\n                  \n                </div>\n              </div>\n            </div>\n            <div class=\"filter-drop-down\" [style.display]=\"show_filter ? 'block' : 'none'\">\n              <div class=\"container\">\n                <div class=\"row\">\n                  <div class=\"col-md-2 col-sm-6 col-xs-6\">\n                    <div class=\"music-genre\">\n                      <div class=\"filter-heading\">Music Genre</div>\n                      <ul>\n                        <li>\n                          <div class=\"radio\">\n                              <label>\n                                <input type=\"radio\" value=\"\" name=\"musicgenre\" [(ngModel)]=\"adv_filter.music_type\">All styles\n                                <div class=\"radio_check\"></div>\n                              </label>\n                          </div>\n                        </li>\n                        <li *ngFor=\"let music of music_list;\">\n                            <div class=\"radio\">\n                                <label>\n                                  <input type=\"radio\" value=\"{{music._id}}\" name=\"musicgenre\" [(ngModel)]=\"adv_filter.music_type\">{{music.name}}\n                                  <div class=\"radio_check\"></div>\n                                </label>\n                            </div>\n                        </li>\n                      </ul>\n                    </div>\n                    \n                  </div>\n                  \n                  <div class=\"col-md-8 col-sm-12 col-xs-12\">\n                    <div class=\"sub-menu-filter\">\n                    <div class=\"filter-heading\">Region</div>\n                      <div class=\"row\">\n                        <div class=\"col-lg-2 col-md-4 col-sm-4 col-xs-4\">\n                          <div class=\"filter-subhead\">Northeast</div>\n                          <ul>\n                            <li *ngFor=\"let s of state_list;\" [style.display]=\"s['region']['name'] == 'northeast' ? 'block' : 'none'\">\n                              <div class=\"checkbox\">\n                                  <label>\n                                    <input type=\"checkbox\" [value]=\"s._id\" (click)=\"addRegionForFilter($event.target.checked, $event.target.value)\">\n                                    <div class=\"chk_check\"></div>\n                                    <span>{{s.name}}</span>\n                                  </label>\n                              </div>\n                            </li>\n                          </ul>\n                        </div>\n                        <div class=\"col-lg-2 col-md-4 col-sm-4 col-xs-4\">\n                          <div class=\"filter-subhead\">southeast</div>\n                          <ul>\n                            <li *ngFor=\"let s of state_list;\" [style.display]=\"s['region']['name'] == 'southeast' ? 'block' : 'none'\">\n                              <div class=\"checkbox\">\n                                  <label>\n                                    <input type=\"checkbox\" [value]=\"s._id\" (click)=\"addRegionForFilter($event.target.checked, $event.target.value)\">\n                                    <div class=\"chk_check\"></div>\n                                    <span>{{s.name}}</span>\n                                  </label>\n                              </div>\n                            </li>\n                          </ul>\n                        </div>\n                        <div class=\"col-lg-2 col-md-4 col-sm-4 col-xs-4\">\n                          <div class=\"filter-subhead\">Midwest</div>\n                          <ul>\n                            <li *ngFor=\"let s of state_list;\" [style.display]=\"s['region']['name'] == 'midwest' ? 'block' : 'none'\">\n                              <div class=\"checkbox\">\n                                  <label>\n                                    <input type=\"checkbox\" [value]=\"s._id\" (click)=\"addRegionForFilter($event.target.checked, $event.target.value)\">\n                                    <div class=\"chk_check\"></div>\n                                    <span>{{s.name}}</span>\n                                  </label>\n                              </div>\n                            </li>\n                          </ul>\n                        </div>\n                        <div class=\"col-lg-2 col-md-4 col-sm-4 col-xs-4\">\n                          <div class=\"filter-subhead\">Southwest</div>\n                          <ul>\n                            <li *ngFor=\"let s of state_list;\" [style.display]=\"s['region']['name'] == 'southwest' ? 'block' : 'none'\">\n                              <div class=\"checkbox\">\n                                  <label>\n                                    <input type=\"checkbox\" [value]=\"s._id\" (click)=\"addRegionForFilter($event.target.checked, $event.target.value)\">\n                                    <div class=\"chk_check\"></div>\n                                    <span>{{s.name}}</span>\n                                  </label>\n                              </div>\n                            </li>\n                          </ul>\n                        </div>\n                        <div class=\"col-lg-2 col-md-4 col-sm-4 col-xs-4\">\n                          <div class=\"filter-subhead\">West</div>\n                          <ul>\n                            <li *ngFor=\"let s of state_list;\" [style.display]=\"s['region']['name'] == 'west' ? 'block' : 'none'\">\n                              <div class=\"checkbox\">\n                                  <label>\n                                    <input type=\"checkbox\" [value]=\"s._id\" (click)=\"addRegionForFilter($event.target.checked, $event.target.value)\">\n                                    <div class=\"chk_check\"></div>\n                                    <span>{{s.name}}</span>\n                                  </label>\n                              </div>\n                            </li>\n                          </ul>\n                        </div>\n                        <div class=\"col-lg-2 col-md-4 col-sm-4 col-xs-4\">\n                          <div class=\"filter-subhead\">other</div>\n                          <ul>\n                            <li *ngFor=\"let s of state_list;\" [style.display]=\"s['region']['name'] == 'other' ? 'block' : 'none'\">\n                              <div class=\"checkbox\">\n                                  <label>\n                                    <input type=\"checkbox\" [value]=\"s._id\" (click)=\"addRegionForFilter($event.target.checked, $event.target.value)\">\n                                    <div class=\"chk_check\"></div>\n                                    <span>{{s.name}}</span>\n                                  </label>\n                              </div>\n                            </li>\n                          </ul>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                    <div class=\"button_group\">\n                      <a href=\"javascript:;\" (click)=\"toggleFilter()\" class=\"cancel-btn\">Cancel</a>\n                      <a href=\"javascript:;\" class=\"apply-btn\" (click)=\"advanceFilter()\">Apply</a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"artist-highlight\">\n  <div class=\"container\">\n    <div class=\"rising-star\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"head-global\"><h2>Rising Stars</h2></div>\n        </div>\n      </div>\n        <div class=\"highlights-wrap mCustomScrollbar \" data-mcs-theme=\"dark-3\">\n          <div class=\"row\">\n            <div class=\"alert alert-info col-sm-12\" *ngIf=\"artistv1['rising_stars'] && artistv1['rising_stars']['length'] <= 0\">No data available.</div>\n            <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-6\" *ngFor=\"let artist_rising of artistv1.rising_stars; let i = index;\">\n                <div class=\"final-wrap \">\n                  <div class=\"img-wrap \">\n                    <a href=\"javascript:;\" routerLink=\"/artist_profile/{{artist_rising && artist_rising._id ? artist_rising._id : '' }}\">\n                    <img src=\"{{artist_rising.image ? artist_img_url+artist_rising.image : 'img/highlight-player.png'}} \" alt=\"Finalists \"></a>\n                    <a href=\"javascript:void(0) \" class=\"fan \" (click)=\"followArtist(artist_rising._id, i)\"><i class=\"fa {{artist_rising && artist_rising['is_followed'] ? 'fa-heart' : 'fa-heart-o'}} \" aria-hidden=\"true \"></i></a>\n                  </div>\n                  <div class=\"content-wrap \">\n                    <div class=\"player \">\n                      <div class=\"title \"><a href=\"javascript:;\" routerLink=\"/artist_profile/{{artist_rising && artist_rising._id ? artist_rising._id : '' }}\">{{artist_rising.first_name +' '+artist_rising.last_name}}</a></div>\n                      <div class=\"cat {{artist_rising && artist_rising.music_type ? artist_rising.music_type.alias : ''}}\">{{artist_rising && artist_rising.music_type ?  artist_rising.music_type.name : ''}}</div>\n                    </div>\n                    <div class=\"location \">\n                      <p><i class=\"fa fa-map-marker \" aria-hidden=\"true \"></i><span>{{artist_rising && artist_rising.state ? artist_rising.state.name : ''}}</span></p>\n                    </div>\n                  </div>\n                </div>\n            </div>        \n  \n          </div>\n        </div>\n     \n    </div>\n\n    <div class=\"chart-topper\" style=\"padding:30px 0;\">\n      <div>\n        <div>\n          <div class=\"head-global\"><h2>Chart Toppers</h2></div>\n        </div>\n        <div class=\"highlights-wrap mCustomScrollbar \" data-mcs-theme=\"dark-3\">\n          <div class=\"row\">\n              <div class=\"alert alert-info col-sm-12\" *ngIf=\"artistv1['chart_toppers'] && artistv1['chart_toppers']['length'] <= 0\">No data available.</div>\n              <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-6\" *ngFor=\"let artist_chart of artistv1.chart_toppers; let i = index;\">\n                  <div class=\"final-wrap \">\n                    <div class=\"img-wrap \">\n                      <a href=\"javascript:;\" routerLink=\"/artist_profile/{{artist_chart['artist']._id}}\">\n                      <img src=\"{{artist_chart['artist'].image ? artist_img_url+artist_chart['artist'].image : 'img/highlight-player.png'}} \" alt=\"Finalists \"></a>\n                      <a href=\"javascript:void(0) \" class=\"fan \" (click)=\"followArtist(artist_chart['artist']._id, i)\"><i class=\"fa {{artist_chart['artist']['is_followed'] ? 'fa-heart' : 'fa-heart-o'}}\" aria-hidden=\"true \"></i></a>\n                    </div>\n                    <div class=\"content-wrap \">\n                      <div class=\"player \">\n                        <div class=\"title \"><a href=\"javascript:;\" routerLink=\"/artist_profile/{{artist_chart['artist']._id}}\">{{artist_chart['artist'].first_name +' '+artist_chart['artist'].last_name}}</a></div>\n                        <div class=\"cat {{artist_chart['artist']['music_type']['alias']}}\">{{artist_chart['artist']['music_type']['name']}}</div>\n                      </div>\n                      <div class=\"location \">\n                        <p><i class=\"fa fa-map-marker \" aria-hidden=\"true \"></i><span>{{artist_chart && artist_chart.state ? artist_chart.state.name : ''}}</span></p>\n                        \n                      </div>\n                    </div>\n                  </div>\n              </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"my-artists\" *ngIf=\"user && user['user']\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"head-global\"><h2>My Artists</h2></div>\n        </div>\n      </div>\n        <div class=\"highlights-wrap\">\n          <div class=\"row\">\n            <div class=\"alert alert-info col-sm-12\" *ngIf=\"my_follower_list && my_follower_list['length'] <= 0\">No data available.</div>\n            <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-6\" *ngFor=\"let my of my_follower_list;let i = index;\">\n              <div class=\"final-wrap\">\n                <div class=\"img-wrap\">\n                  <img src=\"{{my['artist_id']['image'] ? artist_img_url+my['artist_id']['image'] : 'img/highlight-player.png'}}\" alt=\"Finalists\">\n                </div>\n                <div class=\"content-wrap\">\n                  <div class=\"player\">\n                    <div class=\"title\"><a href=\"javascript:;\" routerLink=\"/artist_profile/{{my['artist_id']['_id']}}\">{{my['artist_id']['first_name']+' '+my['artist_id']['last_name']}}</a></div>\n                    <div class=\"cat {{my['artist_id']['music_type']['alias']}}\">{{my['artist_id']['music_type']['name']}}</div>\n                  </div>\n                  <div class=\"location\">\n                    <p><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i><span>{{my && my.state ? my.state.name : ''}}</span></p>\n                    \n                  </div>\n                </div>\n              </div>\n            </div>           \n          </div>\n        </div>\n\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/dashboard-layout/artist/artist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__artist_service__ = __webpack_require__("../../../../../src/app/dashboard-layout/artist/artist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ArtistComponent = /** @class */ (function () {
    function ArtistComponent(ArtistService, toastr) {
        this.ArtistService = ArtistService;
        this.toastr = toastr;
        this.artistdata = {
            artist: []
        };
        this.show_filter = false;
        this.toggSearch = false;
        this.user = {};
        this.search_str = '';
        this.adv_filter = {};
        this.region_filter = [];
        this.artistv1 = {
            chart_toppers: [],
            rising_stars: []
        };
        this.music_list = [];
        this.artist_img_url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].ARTIST_IMG;
        this.track_url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].ARTIST_TRACK;
        this.audio_ins = [];
        this.state_list = [];
        this.my_follower_list = [];
        this.getAllState();
        this.user = JSON.parse(localStorage.getItem('user'));
        console.log(this.user);
    }
    ArtistComponent.prototype.ngOnInit = function () {
        this.getAllData();
        this.getAllArtistV1Data({});
        this.getAllMusicType();
        this.getMyFollower();
    };
    ArtistComponent.prototype.toggleFilter = function () {
        this.show_filter = !this.show_filter;
    };
    // Get all whatsnew data
    ArtistComponent.prototype.getAllData = function () {
        var _this = this;
        var data = {};
        this.ArtistService.getArtistData(data).subscribe(function (response) {
            _this.artistdata = response;
            _this.getAllFollower();
        });
    };
    // Get all artistv1 data
    ArtistComponent.prototype.getAllArtistV1Data = function (data) {
        var _this = this;
        this.ArtistService.getAllArtistv1(data).subscribe(function (response) {
            _this.artistv1 = response;
            _this.show_filter = false;
            //this.getAllFollower();
        });
    };
    // Play audio
    ArtistComponent.prototype.playAudio = function (name, index) {
        var audio = new Audio();
        audio.src = this.track_url + name;
        audio.load();
        audio.play();
        if (!this.audio_ins.hasOwnProperty(index)) {
            this.audio_ins[index] = audio;
        }
    };
    // Stop audio
    ArtistComponent.prototype.stopAudio = function (index) {
        console.log(this.audio_ins[index]);
        this.audio_ins[index].pause();
        this.audio_ins[index].currentTime = 0;
        // this.audio_ins[index].stop();
        delete this.audio_ins[index];
    };
    // Follow artist
    ArtistComponent.prototype.followArtist = function (id, index) {
        var _this = this;
        var data = JSON.parse(localStorage.getItem('user'));
        if (data && data.user) {
            var data_1 = {
                artist_id: id
            };
            this.artistdata['artist'][index]['is_followed'] = true;
            this.ArtistService.followArtist(data_1).subscribe(function (response) {
                _this.toastr.success(response['message'], 'Success!');
            }, function (error) {
                _this.artistdata['artist'][index]['is_followed'] = false;
                _this.toastr.error(error['error'].message, 'Error!');
            });
        }
        else {
            this.toastr.info('Please login first to follow the artist.', 'Information!');
        }
    };
    // get All follower
    ArtistComponent.prototype.getAllFollower = function () {
        // let user = JSON.parse(localStorage.getItem('user'));
        // if(user && user.artsit) {
        //   this.ArtistService.getFollower().subscribe(response => {
        //     let flag = false;
        //     this.artistdata['artist'].forEach(obj => {
        //       response['user'].forEach(data => {
        //         if(obj._id == data['artist_id']._id) {
        //           flag = true;
        //         }
        //       });
        //       if(flag) {
        //         obj['is_followed'] = true;
        //       } else {
        //         obj['is_followed'] = false;
        //       }
        //     });
        //   });
        // }
    };
    // Get all music list
    ArtistComponent.prototype.getAllMusicType = function () {
        var _this = this;
        this.ArtistService.getAllMusicType().subscribe(function (response) {
            _this.music_list = response['music'];
        });
    };
    // Get my follower
    ArtistComponent.prototype.getMyFollower = function () {
        var _this = this;
        var user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            this.ArtistService.getMyFollower().subscribe(function (response) {
                _this.my_follower_list = response['user'];
            });
        }
    };
    // filter artistv1
    ArtistComponent.prototype.filterArtistv1 = function (e) {
        if (e.keyCode == 13) {
            var data = {
                search: this.search_str
            };
            this.getAllArtistV1Data(data);
        }
    };
    // Add region for filtering
    ArtistComponent.prototype.addRegionForFilter = function (flag, val) {
        if (flag) {
            this.region_filter.push(val);
        }
        else {
            var index = this.region_filter.indexOf(val);
            this.region_filter.splice(index, 1);
        }
    };
    // advanceFilter
    ArtistComponent.prototype.advanceFilter = function () {
        var data = {
            "filter": []
        };
        if (this.adv_filter.music_type && this.adv_filter.music_type != "") {
            data['filter'].push({
                'field': 'music_type', value: this.adv_filter.music_type
            });
        }
        if (this.region_filter.length > 0) {
            data['filter'].push({
                'field': 'state', value: this.region_filter
            });
        }
        this.getAllArtistV1Data(data);
    };
    // get all state
    ArtistComponent.prototype.getAllState = function () {
        var _this = this;
        this.ArtistService.getAllState().subscribe(function (response) {
            _this.state_list = response['state'];
        });
    };
    ArtistComponent.prototype.toggleSearch = function () {
        this.toggSearch = !this.toggSearch;
    };
    ArtistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-artist',
            template: __webpack_require__("../../../../../src/app/dashboard-layout/artist/artist.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__artist_service__["a" /* ArtistService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]])
    ], ArtistComponent);
    return ArtistComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard-layout/artist/artist.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ArtistService = /** @class */ (function () {
    function ArtistService(http) {
        this.http = http;
        this.api_host = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].API_URL;
        this.user = '';
        this.headers = '';
        // this.user = JSON.parse(localStorage.getItem('user'));
        // this.headers = new HttpHeaders({ 'x-access-token' : this.user.token });  
    }
    // Get Artist and track
    ArtistService.prototype.getArtistData = function (data) {
        return this.http.post(this.api_host + "/whatsnew", data);
    };
    // Follow the artist 
    ArtistService.prototype.followArtist = function (data) {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'x-access-token': this.user.token });
        return this.http.post(this.api_host + "/user/artist/follow", data, { headers: this.headers });
    };
    // Get followers
    ArtistService.prototype.getFollower = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'x-access-token': this.user.token });
        return this.http.get(this.api_host + "/user/artist/followers", { headers: this.headers });
    };
    // Get my followers
    ArtistService.prototype.getMyFollower = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'x-access-token': this.user.token });
        return this.http.get(this.api_host + "/user/artist/get_followers", { headers: this.headers });
    };
    // Get All Atrist [Rising Star, chart topper, My Artist]
    ArtistService.prototype.getAllArtistv1 = function (data) {
        return this.http.post(this.api_host + "/artistv1", data);
    };
    // get All music type
    ArtistService.prototype.getAllMusicType = function () {
        return this.http.get(this.api_host + "/music_type");
    };
    // get all state
    ArtistService.prototype.getAllState = function () {
        return this.http.post(this.api_host + "/state", null);
    };
    ArtistService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ArtistService);
    return ArtistService;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard-layout/artist_comments/comments.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"comment-wrap\">\n  <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-2 col-sm-3 col-xs-6\">\n          <div class=\"profile-img\">\n            <a href=\"javascript:;\" routerLink=\"/artist_profile/{{artistdata._id}}\"><img src=\"{{artistdata.image ? artist_img_url+artistdata.image : 'img/profile-img.png'}}\" alt=\"Profile Images\"></a>\n          </div>\n        </div>\n        <div class=\"col-md-10 col-sm-8 col-xs-6\">\n          <div class=\"artist-name\"><h2><a href=\"javascript:;\">{{artistdata.first_name+' '+artistdata.last_name}}</a></h2>\n            <span class=\"{{artistdata.music_type['alias']}} tag\">{{artistdata.music_type['name']}}</span>\n          </div>\n          <div class=\"profile-location\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> <span>New York</span></div>\n          <div class=\"profile-description\">\n            <p>{{artistdata.description}}</p>\n          </div>\n        </div>\n        <div class=\"col-md-12\">\n          <div class=\"profile-detail-wrap\">\n            <div class=\"row\">\n              <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                <div class=\"comments\">\n                  <h3 class=\"num-cmt\">{{artistcomments.length}} Comments</h3>\n                  <div class=\"login-alert\" *ngIf=\"!user\">Please Login to leave your comment</div>\n                  <div class=\"comment-block col-md-12 col-sm-12 col-xs-12\" *ngFor=\"let comment of artistcomments;\">\n                    <div class=\"s-name\" *ngIf=\"comment.track_id\">{{comment.track_id.name}}</div>\n                    <div class=\"pull-right\" *ngIf=\"user && user.user && comment['user_id']['_id'] != user['user']['_id']\">\n                        <a href=\"javascript:;\"  (click)=\"flagUser(comment['user_id']['_id'])\"><i class=\"fa fa-flag\"></i></a>\n                      </div>\n                    <div class=\"s-img\"><img src=\"{{comment.user_id.image ? user_img_url+comment.user_id.image : 'img/fan1.png' }}\" alt=\"img\"></div>\n                    <div class=\"cm-date-name\">\n                      <h6>{{comment.user_id.first_name+ ' '+comment.user_id.last_name}}.</h6>\n                      <p>{{comment.created_at | timeAgo}}</p>\n                      <div class=\"profile-descriptions\">\n                        <p>{{comment.comment}}</p>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard-layout/artist_comments/comments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConmmentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__comments_service__ = __webpack_require__("../../../../../src/app/dashboard-layout/artist_comments/comments.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ConmmentsComponent = /** @class */ (function () {
    function ConmmentsComponent(CommentsService, toastr, route) {
        this.CommentsService = CommentsService;
        this.toastr = toastr;
        this.route = route;
        this.artistdata = {};
        this.artistcomments = [];
        this.artist_img_url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].ARTIST_IMG;
        this.track_url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].ARTIST_TRACK;
        this.user_img_url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].USER_IMG;
        this.artistdata = this.route.snapshot.data['artist'].artist;
        this.artistcomments = this.route.snapshot.data['comments'].comment;
        this.user = JSON.parse(localStorage.getItem('user'));
    }
    ConmmentsComponent.prototype.ngOnInit = function () {
    };
    ConmmentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-artist-comments',
            template: __webpack_require__("../../../../../src/app/dashboard-layout/artist_comments/comments.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__comments_service__["a" /* CommentsService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]])
    ], ConmmentsComponent);
    return ConmmentsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard-layout/artist_comments/comments.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommentsService = /** @class */ (function () {
    function CommentsService(http) {
        this.http = http;
        this.api_host = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].API_URL;
        this.user = '';
        this.headers = '';
        // this.user = JSON.parse(localStorage.getItem('user'));
        // this.headers = new HttpHeaders({ 'x-access-token' : this.user.token });  
    }
    // Get Artist and track
    CommentsService.prototype.getArtistData = function (data) {
        return this.http.post(this.api_host + "/whatsnew", data);
    };
    // Follow the artist 
    CommentsService.prototype.followArtist = function (data) {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'x-access-token': this.user.token });
        return this.http.post(this.api_host + "/user/artist/follow", data, { headers: this.headers });
    };
    // Get followers
    CommentsService.prototype.getFollower = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'x-access-token': this.user.token });
        return this.http.get(this.api_host + "/user/artist/followers", { headers: this.headers });
    };
    CommentsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CommentsService);
    return CommentsService;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard-layout/artist_profile/artist_profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"artist-profile-wrap\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"cover-img\">\n          <img src=\"{{artistdata['cover_image'] ? artist_img_url +artistdata['cover_image'] : 'img/cover.png'}}\" alt=\"Cover Image\">\n        </div>\n      </div>\n      <div class=\"col-md-12\">\n        <div class=\"profile-detail-wrap\">\n          <div class=\"row\">\n            <div class=\"col-md-3 col-sm-4 col-xs-4\">\n              <div class=\"profile-img\">\n                <a href=\"javascript:;\">\n                  <img src=\"{{artistdata['image'] ? artist_img_url +artistdata['image'] : 'img/profile-img.png'}}\" alt=\"Profile Images\">\n                </a>\n              </div>\n              <div class=\"follow-btn\">\n                <a href=\"javascript:;\" (click)=\"followArtist(artistdata._id, i)\">\n                  <i class=\"fa fa-heart\" aria-hidden=\"true\"></i> Follow\n                </a>\n              </div>\n              <div class=\"social\">\n                <h3>Social</h3>\n                <ul>\n                  <li>\n                    <a [href]=\"artistdata.social_media['facebook']\">\n                      <i class=\"fa fa-facebook-official\" aria-hidden=\"true\"></i>\n                    </a>\n                  </li>\n                  <li>\n                    <a [href]=\"artistdata.social_media['instagram']\">\n                      <i class=\"fa fa-instagram\" aria-hidden=\"true\"></i>\n                    </a>\n                  </li>\n                  <li>\n                    <a [href]=\"artistdata.social_media['instagram']\">\n                      <i aria-hidden=\"true\" class=\"fa fa-twitter\"></i>\n                    </a>\n                  </li>\n\n                  <li>\n                    <a [href]=\"artistdata.social_media['youtube']\">\n                      <i class=\"fa fa-youtube-play\" aria-hidden=\"true\"></i>\n                    </a>\n                  </li>\n                  <li>\n                    <a [href]=\"artistdata.social_media['sound_cloud']\">\n                      <i class=\"fa fa-soundcloud\" aria-hidden=\"true\"></i>\n                    </a>\n                  </li>\n                </ul>\n              </div>\n              <div class=\"follower\">\n                <h3>Followers</h3>\n                <span>{{artistfollower.length}}</span>\n                <ul>\n                  <li *ngFor=\"let follower of artistfollower;\">\n                    <img src=\"{{follower && follower['user_id'].image ? user_img_url+follower['user_id'].image : 'img/fan1.png'}}\" alt=\"Fan\">\n                  </li>\n                </ul>\n              </div>\n\n              <div class=\"comments\">\n                <h3>\n                  <a href=\"javascript:;\" routerLink=\"/artist_profile/{{artistdata._id}}/comments\">Comments</a>\n                </h3>\n                <span>{{artistcomments.length}}</span>\n                <div class=\"comment-block\" *ngFor=\"let comment of display_comment;\">\n                  <div class=\"s-name\" *ngIf=\"comment.track_id\">{{comment.track_id.name}}</div>\n                  <div class=\"s-img\">\n                    <img src=\"{{comment.user_id.image ? user_img_url+comment.user_id.image : 'img/fan1.png' }}\" alt=\"img\">\n                  </div>\n                  <div class=\"cm-date-name\">\n                    <h6>{{comment.user_id.first_name+ ' '+comment.user_id.last_name}}.</h6>\n                    <p>{{comment.created_at | timeAgo}}</p>\n                  </div>\n                  <div class=\"profile-description\">\n                    <p>{{comment.comment}}</p>\n                  </div>\n\n                </div>\n              </div>\n\n            </div>\n            <div class=\"col-md-9 col-sm-8 col-xs-8\">\n              <div class=\"artist-name\">\n                <h2>\n                  <a href=\"javascript:;\">{{artistdata['first_name']+' '+artistdata['last_name']}}</a>\n                </h2>\n                <span class=\"{{artistdata.music_type['alias']}} cat\" >{{artistdata.music_type['name']}}</span>\n              </div>\n              <div class=\"profile-location\">\n                <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\n                <span>New York</span>\n              </div>\n              <div class=\"profile-description\">\n                <p>{{artistdata.description}}</p>\n              </div>\n              <div class=\"profile-tabs-det\">\n                <!-- Nav tabs -->\n                <ul class=\"nav nav-tabs\" role=\"tablist\">\n                  <li class=\"nav-item \">\n                    <a class=\"nav-link {{active_tab_index == 1 ? 'active show' : ''}}\" (click)=\"manageTabChange(1)\" data-toggle=\"tab\" href=\"javascript:;\">Tracks</a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link {{active_tab_index == 2 ? 'active show' : ''}}\" (click)=\"manageTabChange(2)\" data-toggle=\"tab\" href=\"javascript:;\">Media</a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link {{active_tab_index == 3 ? 'active show' : ''}}\" (click)=\"manageTabChange(3)\" data-toggle=\"tab\" href=\"javascript:;\">Ranking</a>\n                  </li>\n                </ul>\n\n                <!-- Tab panes -->\n                <div class=\"tab-content\">\n                  <div id=\"tracks\" class=\"tab-pane fade {{active_tab_index == 1 ? 'active show' : ''}}\">\n                    <div class=\"track-wrapper\">\n                      <div class=\"track-select-wrap\">\n                        <select class=\"form-control\" name=\"artist_track\" id=\"gender\" (change)=\"sortArtistTrack(0, $event.target.value)\">\n                          <option value=\"0\">Newest First</option>\n                          <option value=\"1\">Newest Last</option>\n                        </select>\n                      </div>\n                      <div class=\"track-table\">\n                        <!-- <div class=\"alert alert-info\" *ngIf=\"artisttrack && artisttrack.length <= 0\">No data available.</div> -->\n                        <table datatable [dtOptions]=\"dtOptions[0]\">\n                          <tbody>\n                            <tr *ngFor=\"let artist of artisttrack;let i=index;\">\n                              <td class=\"serial-num music_numb\">{{i+1}}.</td>\n                              <td class=\"music_play\">\n                                    <div class=\"artist-profile-custom-action-btn\">\n                                      <a [style.display]=\"!audio_ins[i] ? 'block' : 'none'\" (click)=\"playAudio(artist.audio, i, artisttrack)\" class=\"play_img\" ><img src=\"img/play_icon.png\"/></a>\n                                      <a [style.display]=\"audio_ins[i] ? 'block' : 'none'\" (click)=\"stopAudio(i, artisttrack)\" class=\"pause_img\"><img src=\"img/pause_icon.png\"/></a>\n                                    </div>\n                                    <!-- <img src=\"img/play.png \" alt=\"Pause \"  [style.display]=\"!audio_ins[i] ? 'block' : 'none'\" (click)=\"playAudio(artist.audio, i, artisttrack)\">\n                                    <img src=\"img/pause.png \" alt=\"Pause \"  [style.display]=\"audio_ins[i] ? 'block' : 'none'\" (click)=\"stopAudio(i, artisttrack)\"> -->\n                                \n                              </td>\n                              <td class=\"track-pic\">\n                                <a href=\"javascript:;\">\n                                  <img src=\"{{artist.image ? track_url+artist.image : 'img/track-img.png'}}\" style=\"height:50px;width:50px;\" alt=\"Track Image\">\n                                </a>\n                              </td>\n                              <td class=\"track-det\" colspan=\"2\">\n                                <p class=\"track-name\">{{artist.name}}</p>\n                                <p class=\"track-singer\">{{artist.artist_id.name}}</p>\n                                <p class=\"track-year\">{{artist.created_at | date : 'yyyy'}}</p>\n                                <p class=\"track-date\">{{artist.created_at | date : 'MMMM dd,yyyy'}}</p>\n                              </td>\n                              \n                              <td class=\"td track-vote music_vote\">\n                                <img src=\"img/start.png\" alt=\"start\">\n                                <span>{{artist.no_of_votes}}\n                                  <br>\n                                  <span>Votes</span>\n                                </span>\n                              </td>\n                              <td class=\"action music_action\" colspan=\"2\">\n                                <div class=\"cmt-like\">\n                                  <a href=\"javascript:;\" class=\"liked\" (click)=\"likeTrack(artist._id, i)\">\n                                    <img src=\"img/like-color.jpg\" alt=\"\">{{artist.no_of_likes}}</a>\n                                </div>\n                                <div class=\"cmt\">\n                                  <a href=\"javascript:;\" (click)=\"goToComment(artistdata['_id'], artist._id)\">\n                                    <img src=\"img/comment.png\" alt=\"\">{{artist.no_of_comments}}</a>\n                                </div>\n                                <div class=\"download\">\n                                  <a href=\"javascript:;\" >\n                                    <img src=\"img/download.png\" *ngIf=\"artist.is_downloadable\" (click)=\"downloadTrack(artist._id)\" alt=\"\">${{artist.price}}</a>\n                                </div>\n                                <div class=\"share\">\n                                  <a href=\"javascript:;\" (click)=\"openShareTrackModel(shareTrack, i, 'track')\">\n                                    <img src=\"img/share.png\" alt=\"\">\n                                  </a>\n                                </div>\n                              </td>\n                            </tr>\n                          </tbody>\n                        </table>\n                      </div>\n                    </div>\n                  </div>\n                  <div id=\"media\" class=\"tab-pane fade {{active_tab_index == 2 ? 'active show' : ''}}\">\n                    <div class=\"media-wrapper\">\n                      <div class=\"row\">\n                        <div class=\"alert alert-info col-sm-12\" *ngIf=\"artistmedia.length <= 0\">No data available.</div>\n                        <div class=\"col-md-4 col-sm-6 col-xs-12\" *ngFor=\"let media of artistmedia; let i = index;\">\n                          <a class=\"img-wrap\" href=\"javascript:;\" data-fancybox=\"images\" data-width=\"1500\" data-height=\"1000\" (click)=\"open(i)\">\n                            <img src=\"{{media.image ? artist_media_url+media.image : 'img/media-1.png'}}\" alt=\"Media\">\n                          </a>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div id=\"ranking\" class=\"tab-pane fade {{active_tab_index == 3 ? 'active show' : ''}}\">\n                    <div class=\"track-wrapper\">\n                      <div class=\"track-select-wrap\">\n                        <select class=\"form-control\" id=\"sort\" (change)=\"sortRankingTrack(1, $event.target.value)\">\n                          <option value=\"0\">Newest First</option>\n                          <option value=\"1\">Newest Last</option>\n                        </select>\n                      </div>\n                      <div class=\"track-table\">\n                        <!-- <div class=\"alert alert-info\" *ngIf=\"rankingtrack.length <= 0\">No data available.</div> -->\n                        <table datatable [dtOptions]=\"dtOptions[1]\">\n                          <tbody>\n                            <tr *ngFor=\"let rank of rankingtrack;let i=index;\">\n                              <td class=\"serial-num\">{{i+1}}.</td>\n                              <td class=\"play-option\">\n                                  <div class=\"artist-profile-custom-action-btn\">\n                                      <a [style.display]=\"!audio_ins[i] ? 'block' : 'none'\" (click)=\"playRankAudio(rank.audio, i, rankingtrack)\" class=\"play_img\" ><img src=\"img/play_icon.png\"/></a>\n                                      <a [style.display]=\"audio_ins[i] ? 'block' : 'none'\" (click)=\"stopRankAudio(i, rankingtrack)\" class=\"pause_img\"><img src=\"img/pause_icon.png\"/></a>\n                                  </div>\n                                <!-- <a href=\"javascript:;\">\n                                    <img src=\"img/play.png \" alt=\"Pause \"  [style.display]=\"!rank_audio_ins[i] ? 'block' : 'none'\" (click)=\"playRankAudio(rank.audio, i, rankingtrack)\">\n                                    <img src=\"img/pause.png \" alt=\"Pause \"  [style.display]=\"rank_audio_ins[i] ? 'block' : 'none'\" (click)=\"stopRankAudio(i, rankingtrack)\">\n                                </a> -->\n                              </td>\n                              <td class=\"track-pic\">\n                                <a href=\"javascript:;\">\n                                  <img src=\"{{rank.image ? track_url+rank.image : 'img/track-img.png'}}\" alt=\"Track Image\" style=\"height: 50px;width: 50px;;\">\n                                </a>\n                              </td>\n                              <td class=\"track-det\" colspan=\"2\">\n                                <p class=\"track-name\">{{rank.name}}</p>\n                                <p class=\"track-singer\">{{rank.artist_id.first_name+' '+rank.artist_id.last_name}}</p>\n                                <p class=\"track-year\">{{rank.created_at | date  : 'yyyy'}}</p>\n                                <p class=\"track-date\">{{rank.created_at | date  : 'MMMM dd,yyyy'}}</p>\n                              </td>\n                      \n                              <td class=\"td track-vote\">\n                                <img src=\"img/start.png\" alt=\"start\">\n                                <span>{{rank.no_of_votes}}\n                                  <br>\n                                  <span>Votes</span>\n                                </span>\n                              </td>\n                              <td class=\"action\" colspan=\"2\">\n                                <div class=\"cmt-like\">\n                                  <a href=\"javascript:;\" (click)=\"likeRankTrack(rank._id, i)\">\n                                    <img src=\"img/like-color.jpg\" alt=\"\">{{rank.no_of_likes}}</a>\n                                </div>\n                                <div class=\"cmt\">\n                                  <a href=\"javascript:;\" (click)=\"goToComment(rank._id)\">\n                                    <img src=\"img/comment.png\" alt=\"\">{{rank.no_of_comments}}</a>\n                                </div>\n                                <div class=\"download\">\n                                  <a href=\"javascript:;\" >\n                                    <img src=\"img/download.png\" *ngIf=\"rank.is_downloadable\" (click)=\"downloadTrack(rank._id)\" alt=\"\">${{rank.price}}</a>\n                                </div>\n                                <div class=\"share\">\n                                  <a href=\"javascript:;\" (click)=\"openShareTrackModel(shareTrack, i, 'rank')\">\n                                    <img src=\"img/share.png\" alt=\"\">\n                                  </a>\n                                </div>\n                              </td>\n                            </tr>\n                          </tbody>\n                        </table>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  </div>\n  <ng-template #shareTrack let-c=\"close\" let-d=\"dismiss\" >\n    <div class=\"modal_login_wrapper\">\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"shared_popup\">\n            <div class=\"col-12 text-center shared_popup_header\">\n                <h4>Share This Track</h4>\n                <span>You are Sharing the \"{{audio_list && audio_list[this.song_cnt] ? audio_list[this.song_cnt]['name'] : '' }}\" Track</span>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-sm-6\">\n                    <div class=\"col-12\">\n                        <button class=\"btn btn-primary social_button fb_btn\" (click)=\"shareOnFacebook()\">\n                            <i class=\"fa fa-facebook\"></i> Facebook\n                        </button>\n                    </div>\n                    <div class=\"col-12\">\n                        <button class=\"btn btn-success social_button comment_btn\" (click)=\"openPhoneShareTrackModel(phoneno)\">\n                            <i class=\"fa fa-comment \"></i> SMS\n                        </button>\n                    </div>\n                    <div class=\"col-12\">\n                        <button class=\"btn btn-primary social_button link_btn\" (click)=\"copy_link()\" tooltip=\"Link Coppied\" triggers=\"click\">\n                            <i class=\"fa fa-link\"></i> Copy Link\n                        </button>\n                    </div>\n                </div>\n                <div class=\"col-sm-6\">\n                    <div class=\"col-12\">\n                        <button class=\"btn btn-info social_button twitter_btn\" (click)=\"shareOnTwitter()\">\n                            <i class=\"fa fa-twitter\"></i> Twitter\n                        </button>\n                    </div>\n                    <div class=\"col-12\">\n                        <button class=\"btn btn-danger social_button email_btn\" (click)=\"openEmailShareTrackModel(email)\">\n                            <i class=\"fa fa-envelope\"></i> Email\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #email let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-body\">\n    <div class=\"forget_password_modal\">\n      <!-- <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n          <span aria-hidden=\"true\">&times;</span>\n      </button> -->\n      <form [formGroup]=\"share_form\">\n          <h3 class=\"forget_password_header\">Share through email</h3>\n          <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                  <label class=\"control-label custom_form_label\">Email Id</label>\n                  <input type=\"email\" class=\"form-control custom_form\" formControlName=\"email\" name=\"email\" [(ngModel)]=\"share_data['email']\"  placeholder=\"Enter Email\"/>\n                  <div class=\"cust_err_msg\" *ngIf=\"share_form_validation && !share_form.controls['email'].valid\">\n                      <span *ngIf=\"share_form.controls['email'].errors['required']\" class=\"text-danger\">Email is required.</span>\n                      <span *ngIf=\"!share_form.controls['email'].errors['required'] && share_form.controls['email'].errors['email']\" class=\"text-danger\">Enter valid email.</span>\n                  </div>\n              </div>\n              <div class=\"form-group text-right\">\n                  <button class=\"btn forget_btn\" (click)=\"share_via_email(share_form.valid)\" [disabled]=\"show_spinner\">Submit <i *ngIf=\"show_spinner\" class=\"fa fa-spinner fa-spin\"></i></button>\n              </div>\n          </div>\n      </form>\n   </div>\n  </div>\n</ng-template>\n\n<ng-template #phoneno let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-body\">\n    <div class=\"forget_password_modal\">\n      <!-- <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n          <span aria-hidden=\"true\">&times;</span>\n      </button> -->\n      <form [formGroup]=\"share_form_phone\">\n          <h3 class=\"forget_password_header\">Share through sms</h3>\n          <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                  <label class=\"control-label custom_form_label\">Phone Number</label>\n                  <input type=\"email\" class=\"form-control custom_form\" formControlName=\"phone\" name=\"phone\" [(ngModel)]=\"share_data['phone_no']\"  placeholder=\"Enter Phone Number\"/>\n                  <div class=\"cust_err_msg\" *ngIf=\"share_form_validation && !share_form_phone.controls['phone'].valid\">\n                      <span *ngIf=\"share_form_phone.controls['phone'].errors['required']\" class=\"text-danger\">Phone Number is required.</span>\n                      <span *ngIf=\"!share_form_phone.controls['phone'].errors['required'] && share_form_phone.controls['phone'].errors['minlength'] || share_form_phone.controls['phone'].errors['maxlength'] \" class=\"text-danger\">Enter valid phone Number.</span>\n                  </div>\n              </div>\n              <div class=\"form-group text-right\">\n                  <button class=\"btn forget_btn\" (click)=\"share_via_sms(share_form_phone.valid)\" [disabled]=\"show_spinner\">Submit <i *ngIf=\"show_spinner\" class=\"fa fa-spinner fa-spin\"></i></button>\n              </div>\n          </div>\n      </form>\n   </div>\n  </div>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/dashboard-layout/artist_profile/artist_profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__artist_profile_service__ = __webpack_require__("../../../../../src/app/dashboard-layout/artist_profile/artist_profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_datatables__ = __webpack_require__("../../../../angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_lightbox__ = __webpack_require__("../../../../angular2-lightbox/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_lightbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_lightbox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_message_service__ = __webpack_require__("../../../../../src/app/shared/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ArtistProfileComponent = /** @class */ (function () {
    function ArtistProfileComponent(ArtistProfileService, toastr, route, router, lightbox, MessageService, modalService, fb) {
        var _this = this;
        this.ArtistProfileService = ArtistProfileService;
        this.toastr = toastr;
        this.route = route;
        this.router = router;
        this.lightbox = lightbox;
        this.MessageService = MessageService;
        this.modalService = modalService;
        this.fb = fb;
        this.dtOptions = [];
        this.artistdata = {};
        this.artisttrack = [];
        this.artistmedia = [];
        this.rankingtrack = [];
        this.artistfollower = {};
        this.artistcomments = [];
        this.display_comment = [];
        this.sort_artist_track = '';
        this.sort_ranking_tack = '';
        this.artist_img_url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].ARTIST_IMG;
        this.track_url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].ARTIST_TRACK;
        this.artist_media_url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].ARTIST_MEDIA;
        this.user_img_url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].USER_IMG;
        this.audio_ins = [];
        this.rank_audio_ins = [];
        this.active_tab_index = 1;
        this.media_list = [];
        this._albums = [];
        this.sort_by = '';
        this.share_data = {};
        this.share_form_validation = false;
        this.user = '';
        this.show_spinner = false;
        this.track_data = {};
        this.user = JSON.parse(localStorage.getItem('user'));
        // this.getAllData();
        this.subscription = this.MessageService.getMessage().subscribe(function (response) {
            if (response && response['list'] != 1) {
                _this.audio_ins.forEach(function (ele, idx) { _this.audio_ins[idx] = false; });
            }
            if (response && response['list'] != 2) {
                _this.rank_audio_ins.forEach(function (ele, idx) { _this.rank_audio_ins[idx] = false; });
            }
            if (response && response['action'] == 'stop' && response['list'] == 1) {
                _this.audio_ins[response['index']] = false;
            }
            if (response && response['action'] == 'stop' && response['list'] == 2) {
                _this.rank_audio_ins[response['index']] = false;
            }
            if (response && response['action'] == 'start' && response['list'] == 1) {
                _this.audio_ins[response['index']] = true;
            }
            if (response && response['action'] == 'start' && response['list'] == 2) {
                _this.rank_audio_ins[response['index']] = true;
            }
            if (response && response['list'] == 1 && response['action'] == 'next' || response['action'] == 'prev') {
                if (response['track_action'] && response['track_action'] == 'pause') {
                    _this.audio_ins.forEach(function (ele, idx) { _this.audio_ins[idx] = false; });
                    _this.audio_ins[response['index']] = true;
                }
            }
            if (response && response['list'] == 2 && response['action'] == 'next' || response['action'] == 'prev') {
                if (response['track_action'] && response['track_action'] == 'pause') {
                    _this.rank_audio_ins.forEach(function (ele, idx) { _this.rank_audio_ins[idx] = false; });
                    _this.rank_audio_ins[response['index']] = true;
                }
            }
        });
        this.share_form = this.fb.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_9__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_9__angular_forms__["g" /* Validators */].email]]
        });
        this.share_form_phone = this.fb.group({
            phone: ['', [__WEBPACK_IMPORTED_MODULE_9__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_9__angular_forms__["g" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_9__angular_forms__["g" /* Validators */].minLength(10)]]
        });
    }
    ArtistProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.artistdata = this.route.snapshot.data['artist'].artist;
        // this.artisttrack = this.route.snapshot.data['track'].track;
        this.artistmedia = this.route.snapshot.data['media'].media;
        this.artistfollower = this.route.snapshot.data['follower'].artist;
        this.artistcomments = this.route.snapshot.data['comments'].comment;
        // this.rankingtrack = this.route.snapshot.data['ranking'].track;
        if (this.artistcomments.length > 3) {
            this.display_comment = this.artistcomments.slice(0, 3).map(function (i) {
                return i;
            });
        }
        else {
            this.display_comment = this.artistcomments;
        }
        for (var i = 0; i < this.artistmedia.length; i++) {
            if (this.artistmedia[i].image)
                this._albums.push({ src: this.artist_media_url + this.artistmedia[i].image });
        }
        console.log(this.artistfollower);
        var that = this;
        this.route.params.subscribe(function (params) {
            _this.dtOptions[0] = {
                pagingType: 'full_numbers',
                pageLength: 5,
                serverSide: true,
                processing: true,
                searching: false,
                ordering: false,
                lengthChange: false,
                responsive: true,
                // scrollY :'315px',
                // scrollCollapse: true,
                ajax: function (dataTablesParameters, callback) {
                    console.log(dataTablesParameters);
                    setTimeout(function () {
                        that.audio_ins = [];
                        dataTablesParameters['artist_id'] = params['id'];
                        dataTablesParameters['sort'] = _this.sort_by;
                        that.ArtistProfileService.getAllTrack(dataTablesParameters).subscribe(function (response) {
                            that.artisttrack = response['track']['music'];
                            if (that.artisttrack.length > 0) {
                                that.artisttrack.forEach(function (ele) { that.audio_ins.push(false); });
                            }
                            callback({
                                recordsTotal: response['track']['recordsTotal'],
                                recordsFiltered: response['track']['recordsTotal'],
                                data: []
                            });
                        });
                    }, 0);
                },
                columns: [
                    { data: '' },
                    { data: '' },
                    { data: '' },
                    { data: '' },
                    { data: '' },
                    { data: '' },
                    { data: '' }
                ]
            };
            _this.dtOptions[1] = {
                pagingType: 'full_numbers',
                pageLength: 5,
                serverSide: true,
                processing: true,
                searching: false,
                ordering: false,
                lengthChange: false,
                responsive: true,
                ajax: function (dataTablesParameters, callback) {
                    console.log(dataTablesParameters);
                    setTimeout(function () {
                        that.audio_ins = [];
                        dataTablesParameters['artist_id'] = params['id'];
                        that.ArtistProfileService.getAllRanking(dataTablesParameters).subscribe(function (response) {
                            that.rankingtrack = response['track']['music'];
                            that.rankingtrack.forEach(function (ele) { that.audio_ins.push(false); });
                            callback({
                                recordsTotal: response['track']['recordsTotal'],
                                recordsFiltered: response['track']['recordsTotal'],
                                data: []
                            });
                        });
                    }, 0);
                },
                columns: [
                    { data: '' },
                    { data: '' },
                    { data: '' },
                    { data: '' },
                    { data: '' },
                    { data: '' },
                    { data: '' }
                ]
            };
        });
    };
    ArtistProfileComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    };
    ArtistProfileComponent.prototype.openShareTrackModel = function (content, index, type) {
        if (type == 'track') {
            this.track_data = this.artisttrack[index];
        }
        else {
            this.track_data = this.rankingtrack[index];
        }
        this.modalRef = this.modalService.open(content, { centered: true, windowClass: 'modal-wrapper', backdrop: true });
    };
    ArtistProfileComponent.prototype.openEmailShareTrackModel = function (content) {
        if (this.user) {
            this.share_data = {};
            this.emailmodalRef = this.modalService.open(content, { centered: true, backdrop: true });
        }
        else {
            this.toastr.info('Login first to share track via email', 'Information!');
        }
    };
    ArtistProfileComponent.prototype.openPhoneShareTrackModel = function (content) {
        if (this.user) {
            this.share_data = {};
            this.phonemodalRef = this.modalService.open(content, { centered: true, backdrop: true });
        }
        else {
            this.toastr.info('Login first to share track via sms', 'Information!');
        }
    };
    ArtistProfileComponent.prototype.manageTabChange = function (index) {
        this.active_tab_index = index;
    };
    // Play audio
    ArtistProfileComponent.prototype.playAudio = function (name, index, data) {
        var _this = this;
        // let audio = new Audio();
        // audio.src = this.track_url+name;
        // audio.load();
        // audio.play();
        // if(!this.audio_ins.hasOwnProperty(index)) {
        //   this.audio_ins[index] = audio;
        // }
        data.forEach(function (ele, idx) {
            _this.audio_ins[idx] = false;
        });
        this.audio_ins[index] = true;
        this.MessageService.sendMessage({ data: data, index: index, action: 'start', list: 1 });
    };
    // Stop audio
    ArtistProfileComponent.prototype.stopAudio = function (index, data) {
        var _this = this;
        // console.log(this.audio_ins[index]);
        // this.audio_ins[index].pause();
        // this.audio_ins[index].currentTime = 0;
        // // this.audio_ins[index].stop();
        // delete this.audio_ins[index];
        data.forEach(function (ele, idx) {
            _this.audio_ins[idx] = false;
        });
        this.MessageService.sendMessage({ data: data, index: index, action: 'stop', list: 1 });
    };
    // Play audio
    ArtistProfileComponent.prototype.playRankAudio = function (name, index, data) {
        var _this = this;
        // let audio = new Audio();
        // audio.src = this.track_url+name;
        // audio.load();
        // audio.play();
        // if(!this.rank_audio_ins.hasOwnProperty(index)) {
        //   this.rank_audio_ins[index] = audio;
        // }
        data.forEach(function (ele, idx) {
            _this.rank_audio_ins[idx] = false;
        });
        this.rank_audio_ins[index] = true;
        this.MessageService.sendMessage({ data: data, index: index, action: 'start', list: 2 });
    };
    // Stop audio
    ArtistProfileComponent.prototype.stopRankAudio = function (index, data) {
        var _this = this;
        // console.log(this.audio_ins[index]);
        // this.rank_audio_ins[index].pause();
        // this.rank_audio_ins[index].currentTime = 0;
        // // this.audio_ins[index].stop();
        // delete this.rank_audio_ins[index];
        data.forEach(function (ele, idx) {
            _this.rank_audio_ins[idx] = false;
        });
        this.MessageService.sendMessage({ data: data, index: index, action: 'stop', list: 2 });
    };
    // Follow artist
    ArtistProfileComponent.prototype.followArtist = function (id, index) {
        var _this = this;
        var data = JSON.parse(localStorage.getItem('user'));
        if (data) {
            var data_1 = {
                artist_id: id
            };
            this.ArtistProfileService.followArtist(data_1).subscribe(function (response) {
                _this.toastr.success(response['message'], 'Success!');
            }, function (error) {
                _this.toastr.error(error['error'].message, 'Error!');
            });
        }
        else {
            this.toastr.info('Please login first to follow the artist.', 'Information!');
        }
    };
    // Open artist media in lightbox
    ArtistProfileComponent.prototype.open = function (index) {
        // open lightbox
        this.lightbox.open(this._albums, index);
    };
    // Like the track
    ArtistProfileComponent.prototype.likeTrack = function (track_id, index) {
        var _this = this;
        var user = JSON.parse(localStorage.getItem('user'));
        if (user && user.user) {
            this.artisttrack[index].no_of_likes += 1;
            var data = {
                "track_id": track_id,
                "artist_id": this.artistdata._id,
                "status": true
            };
            this.ArtistProfileService.trackLike(data).subscribe(function (response) {
                if (response['message'] == 'Already liked') {
                    _this.artisttrack[index].no_of_likes -= 1;
                }
                _this.toastr.success(response['message'], 'Success!');
            }, function (error) {
                _this.artisttrack[index].no_of_likes -= 1;
                _this.toastr.error(error['error'].message, 'Error!');
            });
        }
        else {
            this.toastr.info('Please login to like the track.');
        }
    };
    // Like the track
    ArtistProfileComponent.prototype.likeRankTrack = function (track_id, index) {
        var _this = this;
        var user = JSON.parse(localStorage.getItem('user'));
        if (user && user.user) {
            this.rankingtrack[index].no_of_likes += 1;
            var data = {
                "track_id": track_id,
                "artist_id": this.artistdata._id,
                "status": true
            };
            this.ArtistProfileService.trackLike(data).subscribe(function (response) {
                if (response['message'] == 'Already liked') {
                    _this.rankingtrack[index].no_of_likes -= 1;
                }
                _this.toastr.success(response['message'], 'Success!');
            }, function (error) {
                _this.rankingtrack[index].no_of_likes -= 1;
                _this.toastr.error(error['error'].message, 'Error!');
            });
        }
        else {
            this.toastr.info('Please login to like the track.');
        }
    };
    // Vist track comment page
    ArtistProfileComponent.prototype.goToComment = function (artist_id, id) {
        this.router.navigate(['artist_profile/' + artist_id + '/track/' + id + '/comments']);
    };
    // sortArtistTrack
    ArtistProfileComponent.prototype.sortArtistTrack = function (idx, sortBy) {
        // let data = {
        //   "artist_id": artist_id,
        //   "sort_by" : sortBy
        // };
        // this.ArtistProfileService.getAllTrack(data).subscribe(response => {
        //   this.artisttrack = response['track'];
        // });
        this.sort_by = sortBy;
        this.dtElements.forEach(function (dtElement, index) {
            if (idx == index) {
                dtElement.dtInstance.then(function (dtInstance) {
                    dtInstance.draw();
                });
            }
        });
    };
    // sortRankingTrack
    ArtistProfileComponent.prototype.sortRankingTrack = function (idx, sortBy) {
        // let data = {
        //   "artist_id": artist_id,
        //   "sort_by" : sortBy
        // };
        // this.ArtistProfileService.getAllRanking(data).subscribe(response => {
        //   this.rankingtrack = response['track'];
        // });
        this.sort_by = sortBy;
        this.dtElements.forEach(function (dtElement, index) {
            if (idx == index) {
                dtElement.dtInstance.then(function (dtInstance) {
                    dtInstance.draw();
                });
            }
        });
    };
    // Download track
    ArtistProfileComponent.prototype.downloadTrack = function (id) {
        var _this = this;
        var user = JSON.parse(localStorage.getItem('user'));
        if (user && user.user) {
            this.ArtistProfileService.downloadTrack(id).subscribe(function (response) {
                console.log(response);
                window.location.href = _this.user_img_url + response['filename'];
            }, function (error) {
                _this.toastr.error(error['error'].message, 'Error!');
            });
        }
        else if (user && user.artist) {
            this.toastr.info('Only listenr can download this track.', 'Info!');
        }
        else {
            this.toastr.info('Please login to download this track.', 'Info!');
        }
    };
    // share on facebook
    ArtistProfileComponent.prototype.shareOnFacebook = function () {
        var track = this.track_data;
        console.log(track);
        var url = 'http://' + window.location.host + '/artist_profile/' + track['artist_id']['_id'] + '/track/' + track['_id'] + '/comments';
        var str = "Track Name: " + track['name'] + "\nArtist: " + track['artist_id']['first_name'] + ' ' + track['artist_id']['last_name'] + '\nDescription: ' + track['description'];
        // var facebookWindow = window.open('https://www.facebook.com/sharer.php?s=100&p[summary]='+encodeURIComponent(str)+"&p[url]="+encodeURIComponent(url), 'facebook-popup', 'height=350,width=600');
        // if(facebookWindow.focus) { facebookWindow.focus(); }
        FB.ui({
            method: 'share_open_graph',
            action_type: 'og.likes',
            action_properties: JSON.stringify({
                object: {
                    'og:url': url,
                    'og:title': 'AOM',
                    'og:description': str
                }
            })
        }, function (response) { });
    };
    // share on twitter
    ArtistProfileComponent.prototype.shareOnTwitter = function () {
        var track = this.track_data;
        console.log(track);
        var url = 'http://' + window.location.host + '/artist_profile/' + track['artist_id']['_id'] + '/track/' + track['_id'] + '/comments';
        var str = "Track Name: " + track['name'] + "\nArtist: " + track['artist_id']['first_name'] + ' ' + track['artist_id']['last_name'] + '\nDescription: ' + track['description'];
        var twitterWindow = window.open('https://twitter.com/share?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(str), 'twitter-popup', 'height=350,width=600');
        if (twitterWindow.focus) {
            twitterWindow.focus();
        }
    };
    // share track via email
    ArtistProfileComponent.prototype.share_via_email = function (flag) {
        var _this = this;
        if (flag) {
            this.share_form_validation = !flag;
            this.show_spinner = true;
            var track = this.track_data;
            var url = 'http://' + window.location.host + '/artist_profile/' + track['artist_id']['_id'] + '/track/' + track['_id'] + '/comments';
            var data = {
                email: this.share_data['email'],
                track_id: track['_id'],
                url: url
            };
            this.ArtistProfileService.shareTrackViaEmail(data).subscribe(function (response) {
                _this.toastr.success(response['message'], 'Success!');
                _this.emailmodalRef.close();
            }, function (error) {
                _this.toastr.error(error['error'].message, 'Error!');
                _this.show_spinner = false;
            }, function () {
                _this.show_spinner = false;
            });
        }
        else {
            this.share_form_validation = !flag;
        }
    };
    // share via sms
    ArtistProfileComponent.prototype.share_via_sms = function (flag) {
        var _this = this;
        if (flag) {
            this.share_form_validation = !flag;
            this.show_spinner = true;
            var track = this.track_data;
            var url = 'http://' + window.location.host + '/artist_profile/' + track['artist_id']['_id'] + '/track/' + track['_id'] + '/comments';
            var data = {
                phone_no: this.share_data['phone_no'],
                track_id: track['_id'],
                url: url
            };
            this.ArtistProfileService.shareTrackViaSms(data).subscribe(function (response) {
                _this.toastr.success(response['message'], 'Success!');
                _this.emailmodalRef.close();
                _this.share_data = {};
            }, function (error) {
                _this.toastr.error(error['error'].message, 'Error!');
                _this.show_spinner = false;
            }, function () {
                _this.show_spinner = false;
            });
        }
        else {
            this.share_form_validation = !flag;
        }
    };
    // copy share track link
    ArtistProfileComponent.prototype.copy_link = function () {
        var track = this.track_data;
        console.log(track);
        var url = 'http://' + window.location.host + '/artist_profile/' + track['artist_id']['_id'] + '/track/' + track['_id'] + '/comments';
        var textArea = document.createElement("textarea");
        textArea.value = url;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_4_angular_datatables__["a" /* DataTableDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
    ], ArtistProfileComponent.prototype, "dtElements", void 0);
    ArtistProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-artist_profile',
            template: __webpack_require__("../../../../../src/app/dashboard-layout/artist_profile/artist_profile.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__artist_profile_service__["a" /* ArtistProfileService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_6_angular2_lightbox__["Lightbox"],
            __WEBPACK_IMPORTED_MODULE_7__shared_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["a" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormBuilder */]])
    ], ArtistProfileComponent);
    return ArtistProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard-layout/artist_profile/artist_profile.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistProfileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ArtistProfileService = /** @class */ (function () {
    function ArtistProfileService(http) {
        this.http = http;
        this.api_host = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].API_URL;
        this.user = '';
        this.headers = '';
        // this.user = JSON.parse(localStorage.getItem('user'));
        // this.headers = new HttpHeaders({ 'x-access-token' : this.user.token });  
    }
    // Get Artist and track
    ArtistProfileService.prototype.getArtistData = function (data) {
        return this.http.post(this.api_host + "/get_artist", data);
    };
    // Follow the artist 
    ArtistProfileService.prototype.followArtist = function (data) {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'x-access-token': this.user.token });
        return this.http.post(this.api_host + "/user/artist/follow", data, { headers: this.headers });
    };
    // Get followers
    ArtistProfileService.prototype.getFollower = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'x-access-token': this.user.token });
        return this.http.get(this.api_host + "/user/artist/followers", { headers: this.headers });
    };
    // Get all track of artist
    ArtistProfileService.prototype.getAllTrack = function (data) {
        return this.http.post(this.api_host + "/get_track", data);
    };
    // Get all media of artist
    ArtistProfileService.prototype.getAllMedia = function (data) {
        return this.http.post(this.api_host + "/get_media", data);
    };
    // get all follower of artist
    ArtistProfileService.prototype.getAllFollower = function (data) {
        return this.http.post(this.api_host + "/followers", data);
    };
    // Get all comments of artist
    ArtistProfileService.prototype.getAllComments = function (data) {
        return this.http.post(this.api_host + "/comment", data);
    };
    // Get all ranking of artist
    ArtistProfileService.prototype.getAllRanking = function (data) {
        return this.http.post(this.api_host + "/get_ranking", data);
    };
    // Like the track
    ArtistProfileService.prototype.trackLike = function (data) {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'x-access-token': this.user.token });
        return this.http.post(this.api_host + "/user/track/like_track", data, { headers: this.headers });
    };
    // Track comment
    ArtistProfileService.prototype.getAllTrackComment = function (data) {
        return this.http.post(this.api_host + "/get_comment_by_track_id", data);
    };
    // Get track detail by track id
    ArtistProfileService.prototype.getTrackById = function (id) {
        return this.http.get(this.api_host + "/tracks/" + id);
    };
    // download the track 
    ArtistProfileService.prototype.downloadTrack = function (id) {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'x-access-token': this.user.token });
        return this.http.get(this.api_host + "/user/track/" + id + "/download", { headers: this.headers });
    };
    // share track via email
    ArtistProfileService.prototype.shareTrackViaEmail = function (data) {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'x-access-token': this.user.token });
        return this.http.post(this.api_host + "/user/track/share_track_by_mail", data, { headers: this.headers });
    };
    // share track via email
    ArtistProfileService.prototype.shareTrackViaSms = function (data) {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'x-access-token': this.user.token });
        return this.http.post(this.api_host + "/user/track/share_track_by_sms", data, { headers: this.headers });
    };
    ArtistProfileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ArtistProfileService);
    return ArtistProfileService;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard-layout/artist_track_comments/artist_track_comments.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"track-comment-wrap\">\n  <div class=\"container\">\n      <div class=\"col-md-12\">\n        <div class=\"profile-detail-wrap\">\n          <div class=\"row\">\n            <div class=\"col-md-12 col-sm-12 col-xs-12\">\n              <div class=\"comments\">\n                <h3 class=\"num-cmt\">{{trackcomments.length}} Comments</h3>\n                <div class=\"add-comment\" *ngIf=\"user && user.user\">\n                    <form>\n                      <div class=\"s-img\"><img src=\"{{user['user'].image ? user_img_url+user['user'].image : 'img/fan1.png'}}\" alt=\"img\"></div>\n                        <div class=\"form-group\">\n                            <label for=\"cmmt\">Write a Comment</label>\n                            <input type=\"text\" class=\"form-control\" id=\"cmmt\" name=\"comment\" [(ngModel)]=\"comment_txt\" placeholder=\"Write a comment\">\n                          </div>\n                          <div class=\"button_group\">\n                        <button type=\"submit\" (click)=\"postComment()\" [disabled]=\"show_spinner\" class=\"update-btn\">Post <i class=\"fa fa-spinner fa-spin\" *ngIf=\"show_spinner\"></i></button>\n                      </div>\n                    </form>\n\t\t\t\t\t\t\t\t\t</div>\n                <div class=\"login-alert\" *ngIf=\"!user\">Please Login to leave your comment</div>\n                <div class=\"comment-block col-md-12\" *ngFor=\"let comment of trackcomments; let i=index;\">\n                  <div class=\"s-name\">{{comment['track_id']['name']}}</div>\n                  <div class=\"pull-right\">\n                    <a href=\"javascript:;\" *ngIf=\"comment['user_id']['status'] == 'active'\" (click)=\"blockUnblockUser(comment['user_id']['_id'])\"><i class=\"fa fa-unlock\"></i></a>\n                    <a  href=\"javascript:;\" *ngIf=\"comment['user_id']['status'] == 'suspended'\" (click)=\"blockUnblockUser(comment['user_id']['_id'])\"><i class=\"fa fa-lock\"></i></a>\n                    <a href=\"javascript:;\" (click)=\"removeComment(comment._id)\"><i class=\"fa fa-trash\"></i></a>\n                  </div>\n                  <div class=\"s-img\"><img src=\"{{comment['user_id']['image'] ? user_img_url+comment['user_id']['image'] : 'img/fan1.png'}}\" alt=\"img\"></div>\n                  <div class=\"cm-date-name\">\n                    <h6>{{comment['user_id']['first_name']+' '+comment['user_id']['last_name']}}.</h6>\n                    <p>{{comment['created_at'] | timeAgo}}</p>\n                    <div class=\"profile-descriptions\">\n                      <p>{{comment['comment']}}</p>\n                    </div>\n                  </div>\n                  \n\n                </div>\n              </div>\n            </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard-layout/artist_track_comments/artist_track_comments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistTrackConmmentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__artist_track_comments_service__ = __webpack_require__("../../../../../src/app/dashboard-layout/artist_track_comments/artist_track_comments.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ArtistTrackConmmentsComponent = /** @class */ (function () {
    function ArtistTrackConmmentsComponent(ArtistTrackCommentsService, toastr, route) {
        var _this = this;
        this.ArtistTrackCommentsService = ArtistTrackCommentsService;
        this.toastr = toastr;
        this.route = route;
        this.artistdata = {};
        this.track = {};
        this.trackcomments = [];
        this.artist_img_url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].ARTIST_IMG;
        this.track_url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].ARTIST_TRACK;
        this.user_img_url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].USER_IMG;
        this.audio_ins = [];
        this.comment_txt = '';
        this.show_spinner = false;
        this.track_id = '';
        this.route.params.subscribe(function (params) {
            _this.track_id = params['id'];
        });
        this.user = JSON.parse(localStorage.getItem('user'));
    }
    ArtistTrackConmmentsComponent.prototype.ngOnInit = function () {
        this.getAllTrackComment({ track_id: this.track_id });
    };
    // Play audio
    ArtistTrackConmmentsComponent.prototype.playAudio = function (name, index) {
        var audio = new Audio();
        audio.src = this.track_url + name;
        audio.load();
        audio.play();
        if (!this.audio_ins.hasOwnProperty(index)) {
            this.audio_ins[index] = audio;
        }
    };
    // Stop audio
    ArtistTrackConmmentsComponent.prototype.stopAudio = function (index) {
        console.log(this.audio_ins[index]);
        this.audio_ins[index].pause();
        this.audio_ins[index].currentTime = 0;
        // this.audio_ins[index].stop();
        delete this.audio_ins[index];
    };
    // Get all comment of track
    ArtistTrackConmmentsComponent.prototype.getAllTrackComment = function (data) {
        var _this = this;
        this.ArtistTrackCommentsService.getAllTrackComment(data).subscribe(function (response) {
            _this.trackcomments = response['comment'];
        });
    };
    // Remove comment
    ArtistTrackConmmentsComponent.prototype.removeComment = function (id) {
        var thi = this;
        swal({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (flag) {
            if (flag) {
                thi.ArtistTrackCommentsService.removeTrackComment(id).subscribe(function (response) {
                    thi.toastr.success(response['message'], 'Success!');
                    thi.getAllTrackComment(thi.track_id);
                }, function (error) {
                    thi.toastr.error(error['error'].message, 'Error!');
                });
            }
        });
    };
    // Block or unblock the user
    ArtistTrackConmmentsComponent.prototype.blockUnblockUser = function (id) {
        var _this = this;
        this.ArtistTrackCommentsService.blockUser(id).subscribe(function (response) {
            _this.toastr.success(response['message'], 'Success!');
            _this.getAllTrackComment({ track_id: _this.track_id });
        }, function (error) {
            _this.toastr.error(error['error'].message, 'Error!');
        });
    };
    ArtistTrackConmmentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-track-comments',
            template: __webpack_require__("../../../../../src/app/dashboard-layout/artist_track_comments/artist_track_comments.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__artist_track_comments_service__["a" /* ArtistTrackCommentsService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]])
    ], ArtistTrackConmmentsComponent);
    return ArtistTrackConmmentsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard-layout/artist_track_comments/artist_track_comments.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistTrackCommentsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ArtistTrackCommentsService = /** @class */ (function () {
    function ArtistTrackCommentsService(http) {
        this.http = http;
        this.api_host = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].API_URL;
        this.user = '';
        this.headers = '';
        // this.user = JSON.parse(localStorage.getItem('user'));
        // this.headers = new HttpHeaders({ 'x-access-token' : this.user.token });  
    }
    // Get Artist and track
    ArtistTrackCommentsService.prototype.getArtistData = function (data) {
        return this.http.post(this.api_host + "/whatsnew", data);
    };
    // Follow the artist 
    ArtistTrackCommentsService.prototype.followArtist = function (data) {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'x-access-token': this.user.token });
        return this.http.post(this.api_host + "/user/artist/follow", data, { headers: this.headers });
    };
    // Get followers
    ArtistTrackCommentsService.prototype.getFollower = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'x-access-token': this.user.token });
        return this.http.get(this.api_host + "/user/artist/followers", { headers: this.headers });
    };
    // Post a comment on track
    ArtistTrackCommentsService.prototype.addCommentToTrack = function (data) {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'x-access-token': this.user.token });
        return this.http.post(this.api_host + "/user/comment", data, { headers: this.headers });
    };
    // Track comment
    ArtistTrackCommentsService.prototype.getAllTrackComment = function (data) {
        return this.http.post(this.api_host + "/get_comment_by_track_id", data);
    };
    // delete track comment
    ArtistTrackCommentsService.prototype.removeTrackComment = function (id) {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'x-access-token': this.user.token });
        return this.http.delete(this.api_host + "/artist/delete_comment/" + id, { headers: this.headers });
    };
    // Block the user
    ArtistTrackCommentsService.prototype.blockUser = function (id) {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'x-access-token': this.user.token });
        return this.http.post(this.api_host + "/artist/suspend/user/" + id, {}, { headers: this.headers });
    };
    ArtistTrackCommentsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ArtistTrackCommentsService);
    return ArtistTrackCommentsService;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard-layout/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard-layout/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "\n<section class=\"banner-wrap\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <div class=\"banner-content\">\n          <h2>Lorem ipsum dolor sit amet</h2>\n          <p>ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoco</p>\n          <div class=\"btn-grp\"><a href=\"javascript:;\" class=\"vote-now-btn\" >vote now</a></div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"filter-wrap\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-8 col-md-8 col-6\">\n        <div class=\"mobile-filter-list\" (click)=\"toggleFilter()\"><i class=\"fa fa-filter\" aria-hidden=\"true\"></i></div>\n        <div class=\"filter-list\" [style.display]=\"toggFleilter ? 'block' : 'none' \">\n          <ul>\n            <li class=\"{{music_type_index == -1 ? 'active' : ''}}\"><a href=\"javascript:;\" (click)=\"getDataByMusicType({}, -1)\">All Styles</a></li>\n            <li class=\"{{music_type_index == i ? 'active' : ''}}\" *ngFor=\"let music of music_type_list; let i = index;\">\n              <a href=\"javascript:;\" (click)=\"getDataByMusicType({music_type:music._id}, i)\">{{music.name}}</a>\n            </li>\n          </ul>\n        </div>\n      </div> \n      <div class=\"col-lg-4 col-md-4  col-6\">\n        <div class=\"search-wrap custom_search_wrap\">\n          <form>\n            <div class=\"mobile-search\" (click)=\"toggleSearch()\" ><i class=\"fa fa-search\" aria-hidden=\"true\"></i></div>\n            <div class=\"search-input\" [style.display]=\"toggSearch ? 'block' : 'none' \">\n              <input type=\"text\" placeholder=\"Search by Artist Name or Song Title\" name=\"filter\" (keyup)=\"filter($event)\"  [(ngModel)]=\"search_str\"/>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section class=\"finalist-wrap\">\n  <div class=\"container\">\n    <div>\n      <div>\n        <div class=\"head-global\"><h2>Round Two Finalists</h2></div>\n      </div>\n      <div class=\"finalists-container\">\n        \n          <app-carousel-scroll [images]=\"images\" [showFavourit]='true' [carouselType]='\"normal\"'></app-carousel-scroll>\n         \n      </div>\n    </div>\n  </div>\n</section>\n\n\n<section class=\"newuploads-wrap\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"head-global\"><h2>New Uploads</h2></div>\n      </div>\n    </div>\n      <div class=\"uploads-container\">\n        <div class=\"row\">\n          <div class=\"col-lg-4 col-md-6 col-sm-6 col-xs-12\" *ngFor=\"let nupload of data['new_uploads']; let i = index;\">\n            <div class=\"upload\">\n              <div class=\"img-wrap\">\n                <img src=\"{{track_url+nupload.image}}\" alt=\"New Uploads\">\n              </div>\n              <div class=\"content-wrap\">\n                <div class=\"player\">\n                  <div class=\"title\"><a href=\"javascript:;\">{{nupload.name ? nupload.name : ''}}</a></div>\n                  <div class=\"finalist-name\">{{nupload.artist_id && nupload.artist_id['first_name'] ? nupload.artist_id['first_name'] : ''}}</div>\n                  <!-- <div class=\"finalist-name\">{{nupload.artist_id['first_name'] ? nupload.artist_id['first_name'] : '' +' '+nupload.artist_id['last_name'] ? nupload.artist_id['last_name'] : ''}}</div> -->\n                  <div class=\"action-btn custom-action-btn\">       \n                      <a [style.display]=\"!audio_ins[i] ? 'block' : 'none'\" (click)=\"playAudio(nupload.audio, i, data['new_uploads'])\" class=\"play_img\" ><img src=\"img/play_icon.png\"/></a>\n                      <a [style.display]=\"audio_ins[i] ? 'block' : 'none'\" (click)=\"stopAudio(i, data['new_uploads'])\" class=\"pause_img\"><img src=\"img/pause_icon.png\"/></a>\n                  </div>\n                  <!-- <div class=\"action-btn\"><a href=\"javascript:;\">\n                    <img src=\"img/play.png \" alt=\"Pause \"  [style.display]=\"!audio_ins[i] ? 'block' : 'none'\" (click)=\"playAudio(nupload.audio, i)\">\n                    <img src=\"img/pause.png \" alt=\"Pause \"  [style.display]=\"audio_ins[i] ? 'block' : 'none'\" (click)=\"stopAudio(i)\">\n                  </a></div> -->\n                </div>\n                <div class=\"location\">\n                  <p><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i><span>New York</span></p>\n                  <div class=\"cat {{nupload.artist_id && nupload.artist_id.music_type['alias'] ? nupload.artist_id.music_type['alias'] : '' }}\">{{nupload.artist_id && nupload.artist_id.music_type['name'] ? nupload.artist_id.music_type['name'] : ''}}</div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n  </div>\n</section>\n\n"

/***/ }),

/***/ "../../../../../src/app/dashboard-layout/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_service__ = __webpack_require__("../../../../../src/app/dashboard-layout/dashboard/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_message_service__ = __webpack_require__("../../../../../src/app/shared/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(DashboardService, toastr, MessageService) {
        var _this = this;
        this.DashboardService = DashboardService;
        this.toastr = toastr;
        this.MessageService = MessageService;
        this.images = [];
        this.data = {
            finalist: [],
            new_uploads: []
        };
        this.artist_img_url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].ARTIST_IMG;
        this.track_url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].ARTIST_TRACK;
        this.audio_ins = [];
        this.music_type_index = -1;
        this.music_type_list = [];
        this.toggFleilter = false;
        this.toggSearch = false;
        this.search_str = '';
        this.getAllData({});
        this.getAllMusicType();
        this.subscription = this.MessageService.getMessage().subscribe(function (response) {
            if (response && response['list'] != 2) {
                _this.audio_ins.forEach(function (ele, idx) { _this.audio_ins[idx] = false; });
            }
            if (response && response['action'] == 'stop' && response['list'] == 2) {
                _this.audio_ins[response['index']] = false;
            }
            if (response && response['action'] == 'start' && response['list'] == 2) {
                _this.audio_ins[response['index']] = true;
            }
            if (response && response['list'] == 2 && response['action'] == 'next' || response['action'] == 'prev') {
                if (response['track_action'] && response['track_action'] == 'pause') {
                    _this.audio_ins.forEach(function (ele, idx) { _this.audio_ins[idx] = false; });
                    _this.audio_ins[response['index']] = true;
                }
            }
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
        console.log('Dashboard componenet is running');
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    };
    DashboardComponent.prototype.onChange = function (index) {
        console.log(this.images[index]);
        if (this.images[index]['enable']) {
            this.images[index]['enable'] = false;
        }
        else {
            this.images[index]['enable'] = true;
        }
    };
    DashboardComponent.prototype.getDataByMusicType = function (obj, index) {
        this.music_type_index = index;
        this.getAllData(obj);
    };
    DashboardComponent.prototype.toggleFilter = function () {
        this.toggFleilter = !this.toggFleilter;
    };
    DashboardComponent.prototype.toggleSearch = function () {
        this.toggSearch = !this.toggSearch;
    };
    // Get all whatsnew data
    DashboardComponent.prototype.getAllData = function (data) {
        var _this = this;
        this.audio_ins = [];
        this.DashboardService.getAllData(data).subscribe(function (response) {
            _this.data = response;
            response['new_uploads'].forEach(function (ele) {
                _this.audio_ins.push(false);
            });
            _this.InitializeSider(_this.data['finalist']);
        });
    };
    // Play audio
    DashboardComponent.prototype.playAudio = function (name, index, data) {
        var _this = this;
        data.forEach(function (ele, idx) {
            _this.audio_ins[idx] = false;
        });
        this.audio_ins[index] = true;
        this.MessageService.sendMessage({ data: data, index: index, action: 'start', list: 2 });
    };
    // Stop audio
    DashboardComponent.prototype.stopAudio = function (index, data) {
        var _this = this;
        data.forEach(function (ele, idx) {
            _this.audio_ins[idx] = false;
        });
        this.MessageService.sendMessage({ data: data, index: index, action: 'stop', list: 2 });
    };
    // Initialize slider
    DashboardComponent.prototype.InitializeSider = function (data) {
        var _this = this;
        this.images = [];
        data.forEach(function (ele) {
            _this.images.push({
                "source": ele.image ? _this.track_url + ele.image : 'img/finalist1.png',
                "alt": "",
                "title": ele.name,
                "name": ele.artist_id['first_name'] + ' ' + ele.artist_id['last_name'],
                "location": "Title 1",
                "type": ele.music_type['name'],
                "alias": ele.music_type['alias'],
                "audio": ele.audio,
                "enable": true,
                "artist_id": ele['artist_id'] ? ele['artist_id']['_id'] : null
            });
        });
    };
    // Get All music type
    DashboardComponent.prototype.getAllMusicType = function () {
        var _this = this;
        this.DashboardService.getAllMusicType().subscribe(function (response) {
            _this.music_type_list = response['music'];
        });
    };
    // Fiter
    DashboardComponent.prototype.filter = function (e) {
        if (e.keyCode == 13) {
            var data = {
                search: this.search_str,
                music_type: this.music_type_index != -1 ? this.music_type_list[this.music_type_index]._id : ''
            };
            this.getAllData(data);
        }
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard-layout/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard-layout/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__dashboard_service__["a" /* DashboardService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_message_service__["a" /* MessageService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard-layout/dashboard/dashboard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardService = /** @class */ (function () {
    function DashboardService(http) {
        this.http = http;
        this.api_host = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].API_URL;
        this.user = '';
        this.headers = '';
        // this.user = JSON.parse(localStorage.getItem('user'));
        // this.headers = new HttpHeaders({ 'x-access-token' : this.user.token });  
    }
    // Get Artist and track
    DashboardService.prototype.getAllData = function (data) {
        return this.http.post(this.api_host + "/mainpage", data);
    };
    // get All music type
    DashboardService.prototype.getAllMusicType = function () {
        return this.http.get(this.api_host + "/music_type");
    };
    DashboardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DashboardService);
    return DashboardService;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard-layout/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard-layout/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"custom_footer\">\n  <div class=\"container\">\n\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n      <div class=\"foo-top \">\n        <div class=\"row\">\n          <div class=\"col-lg-2 col-md-3 col-sm-4 col-xs-6\">\n            <ul class=\"foo-links\">\n              <li>\n                <a href=\"#\">Whats New</a>\n              </li>\n              <li>\n                <a href=\"#\">Artists</a>\n              </li>\n              <li>\n                <a href=\"#\">Vote</a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"col-lg-2 col-md-3 col-sm-4 col-xs-6\">\n            <ul class=\"foo-links\">\n              <li>\n                <a href=\"#\">FAQ</a>\n              </li>\n              <li>\n                <a href=\"#\">Privacy Policy</a>\n              </li>\n              <li>\n                <a href=\"#\">Terms & Conditions</a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"col-lg-8 col-md-6 col-sm-4 col-xs-12 social-right\">\n            <ul class=\"social-list\">\n              <li>\n                <a href=\"#\">\n                  <i class=\"fa fa-instagram-square\" aria-hidden=\"true\"></i>\n                </a>\n              </li>\n              <li>\n                <a href=\"#\">\n                  <i class=\"fa fa-facebook-square\" aria-hidden=\"true\"></i>\n                </a>\n              </li>\n              <li>\n                <a href=\"#\">\n                  <i class=\"fa fa-twitter-square\" aria-hidden=\"true\"></i>\n                </a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n      <div class=\"foo-bottom col-sm-12\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"copyright\">\n              <a class=\"foo-logo\" href=\"#\">\n                <img src=\"img/foo-logo.png\" alt=\"\">\n              </a>\n              <span>© America’s Original Music</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/dashboard-layout/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/dashboard-layout/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard-layout/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard-layout/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard-layout/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"custom_header\">\n  <div class=\"container\">\n    <div class=\"row\" *ngIf=\"!user || user.admin\">\n      <div class=\"col-md-3 col-sm-3 col-xs-3\">\n        <div class=\"logo-wrap\">\n          <a href=\"javascript:;\" routerLink=\"\">\n            <img src=\"img/logo.png\" alt=\"\">\n          </a>\n        </div>\n      </div>\n      <div class=\"col-md-9 col-sm-9 col-xs-9\">\n        <div class=\"mobile-nav\" (click)=\"toggleMainMenu()\">\n          <a href=\"javascript:;\" >\n            <i class=\"fa fa-bars\"></i>\n          </a>\n        </div>\n        <nav class=\"navigation\" [style.display]=\"toggleMenu ? 'block' : 'none'\">\n          <ul>\n            <li routerLinkActive=\"active\">\n              <a href=\"javascript:;\" routerLink=\"/whats-new\">Whats new</a>\n            </li>\n            <li routerLinkActive=\"active\">\n              <a href=\"javascript:;\" routerLink=\"/artist\">Artists</a>\n            </li>\n            <li routerLinkActive=\"active\">\n              <a href=\"javascript:;\" routerLink=\"/vote\">Vote</a>\n            </li>\n            <li data-fancybox data-animation-duration=\"700\" data-src=\"javascript:;login\">\n              <a href=\"javascript:;\" (click)=\"openVerticallyCentered(content)\">Log In</a>\n            </li>\n            <li class=\"register-btn\">\n              <a href=\"javascript:;\" routerLink=\"/register\">Register</a>\n            </li>\n          </ul>\n        </nav>\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"user && user.artist\">\n\t\t\t\t<div class=\"col-md-2 col-sm-2 col-xs-2\">\n\t\t\t\t\t<div class=\"logo-wrap\">\n\t\t\t\t\t\t<a href=\"javascript:;\" routerLink=\"\"><img src=\"img/logo.png\" alt=\"\"></a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-10 col-sm-10 col-xs-10\">\n\t\t\t\t\t<div class=\"nav-header\">\n\t\t\t\t\t\t<div class=\"mobile-nav\" (click)=\"toggleMainMenu()\"><a href=\"javascript:;\"><i class=\"fa fa-bars\"></i></a></div>\n\t\t\t\t\t\t<nav class=\"navigation\" [style.display]=\"toggleMenu ? 'block' : 'none'\">\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li routerLinkActive=\"active\"><a href=\"javascript:;\" routerLink=\"/whats-new\">Whats new</a></li>\n\t\t\t\t\t\t\t\t<li routerLinkActive=\"active\"><a href=\"javascript:;\" routerLink=\"/artist\">Artists</a></li>\n\t\t\t\t\t\t\t\t<li routerLinkActive=\"active\"><a href=\"javascript:;\" routerLink=\"/vote\">Vote</a></li>\n\t\t\t\t\t\t\t\t<li routerLinkActive=\"active\"><a href=\"javascript:;\" routerLink=\"/my-music\">My Music</a></li>\n\t\t\t\t\t\t\t\t<li routerLinkActive=\"active\"><a href=\"javascript:;\" routerLink=\"/my-profile\">My Profile</a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</nav>\n\t\t\t\t\t\t<div class=\"logged-in-header\">\n\t\t\t\t\t\t\t<ul class=\"update-option\">\n\t\t\t\t\t\t\t\t<li class=\"message\"><a href=\"javascript:;\"><i class=\"fa fa-envelope-o\" aria-hidden=\"true\"></i> <span class=\"new-up\"></span></a></li>\n\t\t\t\t\t\t\t\t<li class=\"notification\"><a href=\"javascript:;\"><i class=\"fa fa-bell\" aria-hidden=\"true\"></i> <span class=\"new-up\"></span></a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t<div class=\"profile-picture\" ngbDropdown >\n\t\t\t\t\t\t\t\t<a href=\"javascirpt:;\" ngbDropdownToggle>\n                  <img src=\"{{user.artist.image != '' ? user.artist.image : 'img/upload1.png'}}\" *ngIf=\"user.artist\" alt=\"Profile Picture\">\n                  <img src=\"{{user.user.image != '' ? user.user.image : 'img/upload1.png'}}\" *ngIf=\"user.user\" alt=\"Profile Picture\">\n                </a>\n                <!-- <div ngbDropdownMenu>\n                    <button class=\"dropdown-item\">Logout</button>\n                </div> -->\n\t\t\t\t\t\t\t</div>\n            </div>\n            <ul class=\"logout_ul\">\n              <li>\n                <a href=\"javascript:;\" (click)=\"logout()\">LogOut</a></li>\n            </ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n    </div>\n    <div class=\"row\" *ngIf=\"user && user.user\">\n\t\t\t\t<div class=\"col-md-2 col-sm-2 col-xs-2\">\n\t\t\t\t\t<div class=\"logo-wrap\">\n\t\t\t\t\t\t<a href=\"javascript:;\" routerLink=\"\"><img src=\"img/logo.png\" alt=\"\"></a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-10 col-sm-10 col-xs-10\">\n\t\t\t\t\t<div class=\"nav-header\">\n\t\t\t\t\t\t<div class=\"mobile-nav\" (click)=\"toggleMainMenu()\"><a href=\"javascript:;\"><i class=\"fa fa-bars\"></i></a></div>\n\t\t\t\t\t\t<nav class=\"navigation\" [style.display]=\"toggleMenu ? 'block' : 'none'\">\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li routerLinkActive=\"active\"><a href=\"javascript:;\" routerLink=\"/whats-new\">Whats new</a></li>\n\t\t\t\t\t\t\t\t<li routerLinkActive=\"active\"><a href=\"javascript:;\" routerLink=\"/artist\">Artists</a></li>\n\t\t\t\t\t\t\t\t<li routerLinkActive=\"active\"><a href=\"javascript:;\" routerLink=\"/vote\">Vote</a></li>\n\t\t\t\t\t\t\t\t<li routerLinkActive=\"active\"><a href=\"javascript:;\" routerLink=\"/my-profile\">My Profile</a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</nav>\n\t\t\t\t\t\t<div class=\"logged-in-header\">\n\t\t\t\t\t\t\t<ul class=\"update-option\">\n\t\t\t\t\t\t\t\t<li class=\"notification\"><a href=\"javascript:;\"><i class=\"fa fa-bell\" aria-hidden=\"true\"></i> <span class=\"new-up\"></span></a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t<div class=\"profile-picture\" ngbDropdown>\n\t\t\t\t\t\t\t\t<a href=\"javascirpt:;\" ngbDropdownToggle>\n                  <img src=\"{{user.artist.image != '' ? user.artist.image : 'img/upload1.png'}}\" *ngIf=\"user.artist\" alt=\"Profile Picture\">\n                  <img src=\"{{user.user.image != '' ? user.user.image : 'img/upload1.png'}}\" *ngIf=\"user.user\" alt=\"Profile Picture\">\n                </a>\n                \n\t\t\t\t\t\t\t</div>\n            </div>\n            <ul class=\"logout_ul\">\n              <li>\n                <a href=\"javascript:;\" (click)=\"logout()\">LogOut</a></li>\n            </ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n    </div>\n  </div>\n</header>\n<ng-template #content let-c=\"close\" let-d=\"dismiss\" >\n  <div class=\"modal_login_wrapper\">\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n  <div class=\"modal-body\">\n    <div class=\"login-modal\">\n\t\t\t<div class=\"social-login\">\n\t\t\t\t<div class=\"google-login\" >\n\t\t\t\t\t<a href=\"javascript:;\" id=\"googleBtn\"><i class=\"fa fa-google\" aria-hidden=\"true\"></i> <span>Login with Google</span></a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"fb-login\">\n\t\t\t\t\t<a href=\"javascript:;\" (click)=\"fbLogin()\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i> <span>Login with Facebook</span></a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"or\">or with email</div>\n\t\t\t<div class=\"email-form\">\n\t\t\t\t<form [formGroup]=\"login_form\">\n\t\t\t\t\t<div class=\"form-group\">\n            <label for=\"email\">Email</label>\n            <input type=\"email\" class=\"form-control\" formControlName=\"email\" name=\"email\" id=\"email\" [(ngModel)]=\"userdata.email\" placeholder=\"Email\">\n            <div class=\"cust_err_msg\" *ngIf=\"login_validation && !login_form.controls['email'].valid\">\n              <span *ngIf=\"login_form.controls['email'].errors['required']\" class=\"text-danger\">Email is required.</span>\n            </div>\n          </div>\n          <div class=\"form-group pwd-grp\">\n            <label for=\"pwd\">Password</label>\n            <input type=\"password\" class=\"form-control\" formControlName=\"password\" name=\"password\" id=\"pwd\" [(ngModel)]=\"userdata.password\" placeholder=\"Password\">\n            <div class=\"pwd-icon\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i></div>\n            <div class=\"cust_err_msg\" *ngIf=\"login_validation && !login_form.controls['password'].valid\">\n              <span *ngIf=\"login_form.controls['password'].errors['required']\" class=\"text-danger\">Password is required.</span>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"pwd\">Type</label>\n            <select class=\"form-control\" name=\"type\" formControlName=\"type\" [(ngModel)]=\"userdata.type\">\n              <option value=\"artist\">Artist</option>\n              <option value=\"listener\">Listener</option>\n            </select>\n            <div class=\"cust_err_msg\" *ngIf=\"login_validation && !login_form.controls['type'].valid\">\n              <span *ngIf=\"login_form.controls['type'].errors['required']\" class=\"text-danger\">Type is required.</span>\n            </div>\n          </div>\n          <div class=\"login-btn\"><button (click)=\"login(login_form.valid)\" [disabled]=\"show_spinner\">Log In <i *ngIf=\"show_spinner\" class=\"fa fa-spinner fa-spin\"></i></button></div>\n          <div class=\"forgot-link\"><a href=\"javascript:;\" (click)=\"openForgetPasswordModal(forget)\">Forgot Password</a></div>\n          <div class=\"register-link\">Don't have an account yet? <a href=\"javascript:;\" routerLink=\"/register\">Register</a></div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n  </div>\n</div>\n</ng-template>\n<ng-template #forget let-c=\"close\" let-d=\"dismiss\">\n\n    <div class=\"modal-body\">\n      <div class=\"forget_password_modal\">\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        <form [formGroup]=\"forget_form\">\n            <h3 class=\"forget_password_header\">Forget Password</h3>\n          <div class=\"col-sm-12\">\n            <div class=\"form-group\">\n              <label class=\"control-label custom_form_label\">Account Type</label>\n              <select class=\"form-control custom_form\" formControlName=\"type\" name=\"type\" [(ngModel)]=\"forget_pwd_data.type\" placeholder='Enter login type'>\n                <option value=\"artist\">Artist</option>\n                <option value=\"user\">Listener</option>\n              </select>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"control-label custom_form_label\">Email Id</label>\n              <input class=\"form-control custom_form\" name=\"email\" formControlName=\"email\" [(ngModel)]=\"forget_pwd_data.email\" placeholder=\"Enter Email\"/>\n              <div *ngIf=\"!forget_form.controls['email'].valid && forget_form.controls['email'].dirty && forget_form.controls['email'].touched\">\n                <span *ngIf=\"forget_form.controls['email'].errors['required']\" class=\"text-danger\">Email is required.</span>\n                <span *ngIf=\"!forget_form.controls['email'].errors['required'] && forget_form.controls['email'].errors['email']\" class=\"text-danger\">Enter valid email.</span>\n              </div>\n            </div>\n            <div class=\"form-group text-right\">\n              <button class=\"btn forget_btn\" (click)=\"forgetPassword()\" [disabled]=\"!forget_form.valid || show_spinner\">Submit <i *ngIf=\"show_spinner\" class=\"fa fa-spinner fa-spin\"></i></button>\n            </div>\n          </div>\n        </form>\n     </div>\n    </div>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/dashboard-layout/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header_service__ = __webpack_require__("../../../../../src/app/dashboard-layout/header/header.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_message_service__ = __webpack_require__("../../../../../src/app/shared/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular5_social_login__ = __webpack_require__("../../../../angular5-social-login/angular5-social-login.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular5_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular5_social_login__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(modalService, fb, HeaderService, toastr, router, MessageService, socialAuthService) {
        var _this = this;
        this.modalService = modalService;
        this.fb = fb;
        this.HeaderService = HeaderService;
        this.toastr = toastr;
        this.router = router;
        this.MessageService = MessageService;
        this.socialAuthService = socialAuthService;
        this.user = '';
        this.show_spinner = false;
        this.login_validation = false;
        this.userdata = {};
        this.forget_pwd_data = {};
        this.toggleMenu = false;
        this.user = JSON.parse(localStorage.getItem('user'));
        if (this.user && this.user.artist) {
            this.user.artist['image'] = typeof this.user.artist['image'] != 'undefined' ? __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].ARTIST_IMG + this.user.artist['image'] : '';
        }
        else if (this.user && this.user.user) {
            var data = JSON.parse(localStorage.getItem('user'));
            if (!(this.user.user.provider && this.user.user.provider == "facebook" && this.user.user['image'].includes('graph.facebook.com')) || !(this.user.provider == "gmail" && this.user['image'].includes('lh3.googleusercontent.com'))) {
                this.user.user['image'] = typeof this.user.user['image'] != 'undefined' ? __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].USER_IMG + this.user.user['image'] : '';
            }
            else {
                this.user.user['image'] = data['user']['image'];
            }
        }
        this.subscription = this.MessageService.getMessage().subscribe(function (response) {
            if (response && response['updateProfile']) {
                setTimeout(function () {
                    _this.user = JSON.parse(localStorage.getItem('user'));
                    if (_this.user && _this.user.artist) {
                        _this.user.artist['image'] = typeof _this.user.artist['image'] != 'undefined' ? __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].ARTIST_IMG + _this.user.artist['image'] : '';
                    }
                    else if (_this.user && _this.user.user) {
                        if (!(_this.user.provider && _this.user.provider == "facebook" && _this.user['image'].includes('graph.facebook.com')) || !(_this.user.provider == "gmail" && _this.user['image'].includes('lh3.googleusercontent.com'))) {
                            _this.user.user['image'] = typeof _this.user.user['image'] != 'undefined' ? __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].USER_IMG + _this.user.user['image'] : '';
                        }
                    }
                }, 1000);
            }
            if (response && response['loggedin_user']) {
                setTimeout(function () {
                    _this.user = response['loggedin_user'];
                }, 1000);
            }
        });
        this.login_form = this.fb.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]],
            type: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]]
        });
        this.forget_form = this.fb.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].email]],
            type: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]]
        });
    }
    // Code for initialize google login button
    HeaderComponent.prototype.googleInit = function () {
        var _this = this;
        gapi.load('auth2', function () {
            _this.auth2 = gapi.auth2.init({
                client_id: __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].GOOGLE_CLIENT_ID,
                cookiepolicy: 'single_host_origin',
                scope: 'profile email'
            });
            _this.attachSignin(document.getElementById('googleBtn'));
        });
    };
    // Code for open google signin popup and do login
    HeaderComponent.prototype.attachSignin = function (element) {
        var _this = this;
        this.auth2.attachClickHandler(element, {}, function (googleUser) {
            var profile = googleUser.getBasicProfile();
            console.log('Token || ' + googleUser.getAuthResponse().id_token);
            console.log('ID: ' + profile.getId());
            console.log('Name: ' + profile.getName());
            console.log('Image URL: ' + profile.getImageUrl());
            console.log('Email: ' + profile.getEmail());
            //YOUR CODE HERE
            console.log('token :', googleUser.getAuthResponse().id_token, profile);
            var data = {
                U3: profile.getEmail(),
                ofa: profile.ofa,
                wea: profile.wea,
                provider: 'gmail',
                Eea: profile.getId(),
                image: profile.getImageUrl(),
                token: googleUser.getAuthResponse().id_token
            };
            _this.HeaderService.userGoogleLogin(data).subscribe(function (response) {
                _this.toastr.success(response['message'], 'Success!');
                localStorage.setItem('user', JSON.stringify(response));
                _this.modalRef.close();
                _this.user = JSON.parse(localStorage.getItem('user'));
                _this.MessageService.sendMessage({ 'loggedin_user': _this.user });
                _this.router.navigate(['']);
            }, function (error) {
                _this.toastr.error(error['error'].message, 'Error!');
            });
        }, function (error) {
            console.log(JSON.stringify(error, undefined, 2));
        });
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        console.log('header destroy');
        if (this.modalRef) {
            this.modalRef.close();
        }
        if (this.modalForgetRef) {
            this.modalForgetRef.close();
        }
        this.subscription.unsubscribe();
    };
    HeaderComponent.prototype.openVerticallyCentered = function (content) {
        this.show_spinner = false;
        this.userdata = {};
        this.login_validation = false;
        this.modalRef = this.modalService.open(content, { centered: true, windowClass: 'modal-wrapper', backdrop: true });
        this.googleInit();
    };
    HeaderComponent.prototype.openForgetPasswordModal = function (content) {
        this.modalRef.close();
        this.forget_pwd_data = {};
        this.modalForgetRef = this.modalService.open(content, { centered: true, backdrop: true });
    };
    HeaderComponent.prototype.login = function (flag) {
        var _this = this;
        console.log('login', this.userdata);
        if (this.userdata['type'] == 'artist' && flag) {
            this.show_spinner = true;
            this.login_validation = !flag;
            this.HeaderService.artist_login(this.userdata).subscribe(function (response) {
                console.log(response);
                localStorage.setItem('user', JSON.stringify(response));
                _this.toastr.success('Login Done', 'Success!');
                _this.modalRef.close();
                _this.user = JSON.parse(localStorage.getItem('user'));
                if (_this.user && _this.user.artist) {
                    _this.user.artist['image'] = typeof _this.user.artist['image'] != 'undefined' ? __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].ARTIST_IMG + _this.user.artist['image'] : '';
                }
                else if (_this.user && _this.user.user) {
                    _this.user.user['image'] = typeof _this.user.user['image'] != 'undefined' ? __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].USER_IMG + _this.user.user['image'] : '';
                }
                _this.MessageService.sendMessage({ 'loggedin_user': _this.user });
                _this.router.navigate(['']);
            }, function (error) {
                console.log(error);
                _this.show_spinner = false;
                _this.toastr.error(error['error'].message, 'Error!');
            }, function () {
                _this.show_spinner = false;
            });
        }
        else {
            this.login_validation = !flag;
        }
        if (this.userdata['type'] == 'listener' && flag) {
            this.show_spinner = true;
            this.login_validation = !flag;
            this.HeaderService.user_login(this.userdata).subscribe(function (response) {
                console.log(response);
                _this.toastr.success('Login Done', 'Success!');
                localStorage.setItem('user', JSON.stringify(response));
                _this.modalRef.close();
                _this.user = JSON.parse(localStorage.getItem('user'));
                if (_this.user && _this.user.artist) {
                    _this.user.artist['image'] = typeof _this.user.artist['image'] != 'undefined' ? __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].ARTIST_IMG + _this.user.artist['image'] : '';
                }
                else if (_this.user && _this.user.user) {
                    _this.user.user['image'] = typeof _this.user.user['image'] != 'undefined' ? __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].USER_IMG + _this.user.user['image'] : '';
                }
                _this.MessageService.sendMessage({ 'loggedin_user': _this.user });
                _this.router.navigate(['']);
            }, function (error) {
                console.log(error);
                _this.show_spinner = false;
                _this.toastr.error(error['error'].message, 'Error!');
            }, function () {
                _this.show_spinner = false;
            });
        }
        else {
            this.login_validation = !flag;
        }
    };
    HeaderComponent.prototype.forgetPassword = function () {
        var _this = this;
        this.show_spinner = true;
        if (this.forget_pwd_data && this.forget_pwd_data.type == 'artist') {
            this.HeaderService.artistForgetPassword({ email: this.forget_pwd_data.email, type: this.forget_pwd_data.type }).subscribe(function (response) {
                _this.toastr.success(response['message'], 'Success!');
                _this.modalForgetRef.close();
            }, function (error) {
                if (error['error'].message[0] && error['error'].message[0]['param'] && error['error'].message[0]['param'] == 'email') {
                    _this.toastr.error(error['error'].message[0]['msg'], 'Error!');
                }
                else {
                    _this.toastr.error(error['error'].message, 'Error!');
                }
                _this.show_spinner = false;
            }, function () {
                _this.forget_pwd_data = {};
                _this.show_spinner = false;
            });
        }
        else {
            this.HeaderService.userForgetPassword({ email: this.forget_pwd_data.email, type: this.forget_pwd_data.type }).subscribe(function (response) {
                console.log('user ', response);
                _this.toastr.success(response['message'], 'Success!');
                _this.modalForgetRef.close();
            }, function (error) {
                if (error['error'].message[0] && error['error'].message[0]['param'] && error['error'].message[0]['param'] == 'email') {
                    _this.toastr.error(error['error'].message[0]['msg'], 'Error!');
                }
                else {
                    _this.toastr.error(error['error'].message, 'Error!');
                }
                _this.show_spinner = false;
            }, function () {
                _this.forget_pwd_data = {};
                _this.show_spinner = false;
            });
        }
    };
    // Logout
    HeaderComponent.prototype.logout = function () {
        localStorage.removeItem('user');
        this.user = '';
        this.router.navigate(['']);
        this.toastr.success('Logged off', 'Success!');
    };
    HeaderComponent.prototype.toggleMainMenu = function () {
        this.toggleMenu = !this.toggleMenu;
    };
    HeaderComponent.prototype.fbLogin = function () {
        var _this = this;
        var socialPlatformProvider = __WEBPACK_IMPORTED_MODULE_8_angular5_social_login__["FacebookLoginProvider"].PROVIDER_ID;
        this.socialAuthService.signIn(socialPlatformProvider).then(function (data) {
            console.log(" sign in data : ", data);
            _this.HeaderService.userFacebookLogin(data).subscribe(function (response) {
                _this.toastr.success(response['message'], 'Success!');
                localStorage.setItem('user', JSON.stringify(response));
                _this.modalRef.close();
                _this.user = JSON.parse(localStorage.getItem('user'));
                _this.MessageService.sendMessage({ 'loggedin_user': _this.user });
                _this.router.navigate(['']);
            }, function (error) {
                _this.toastr.error(error['error'].message, 'Error!');
            });
        });
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/dashboard-layout/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard-layout/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__header_service__["a" /* HeaderService */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_7__shared_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_8_angular5_social_login__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard-layout/header/header.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { Http, Headers, RequestOptions, Response } from '@angular/http';



var HeaderService = /** @class */ (function () {
    function HeaderService(http) {
        this.http = http;
        this.api_host = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].API_URL;
        this.headers = new Headers({ 'Content-Type': 'application/json' });
    }
    //Artist login
    HeaderService.prototype.artist_login = function (data) {
        return this.http.post(this.api_host + "/artist_login", data);
    };
    //user login
    HeaderService.prototype.user_login = function (data) {
        return this.http.post(this.api_host + "/user_login", data);
    };
    // Forget password for artist
    HeaderService.prototype.artistForgetPassword = function (data) {
        return this.http.post(this.api_host + "/artist_forgot_password", data);
    };
    // Forget password for user
    HeaderService.prototype.userForgetPassword = function (data) {
        return this.http.post(this.api_host + "/user_forgot_password", data);
    };
    // Facebook login
    HeaderService.prototype.userFacebookLogin = function (data) {
        return this.http.post(this.api_host + "/user_registration_facebook", data);
    };
    // Google login
    HeaderService.prototype.userGoogleLogin = function (data) {
        return this.http.post(this.api_host + "/user_registration_gmail", data);
    };
    HeaderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], HeaderService);
    return HeaderService;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard-layout/layout.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_highcharts__ = __webpack_require__("../../../../angular-highcharts/angular-highcharts.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__amcharts_amcharts3_angular__ = __webpack_require__("../../../../@amcharts/amcharts3-angular/es2015/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_datatables__ = __webpack_require__("../../../../angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_io_slimscroll__ = __webpack_require__("../../../../angular-io-slimscroll/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_io_slimscroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular_io_slimscroll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard-layout/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__layout_dashboard_layout_component__ = __webpack_require__("../../../../../src/app/dashboard-layout/layout/dashboard-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__layout_dashboard_layout_service__ = __webpack_require__("../../../../../src/app/dashboard-layout/layout/dashboard-layout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__whatsnew_whatsnew_component__ = __webpack_require__("../../../../../src/app/dashboard-layout/whatsnew/whatsnew.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__artist_artist_component__ = __webpack_require__("../../../../../src/app/dashboard-layout/artist/artist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__artist_comments_comments_component__ = __webpack_require__("../../../../../src/app/dashboard-layout/artist_comments/comments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__track_comments_track_comments_component__ = __webpack_require__("../../../../../src/app/dashboard-layout/track_comments/track_comments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__artist_track_comments_artist_track_comments_component__ = __webpack_require__("../../../../../src/app/dashboard-layout/artist_track_comments/artist_track_comments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__artist_profile_artist_profile_component__ = __webpack_require__("../../../../../src/app/dashboard-layout/artist_profile/artist_profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__vote_vote_component__ = __webpack_require__("../../../../../src/app/dashboard-layout/vote/vote.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__my_profile_myProfile_component__ = __webpack_require__("../../../../../src/app/dashboard-layout/my_profile/myProfile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__my_music_my_music_component__ = __webpack_require__("../../../../../src/app/dashboard-layout/my_music/my_music.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__layout_dashboard_layout_module__ = __webpack_require__("../../../../../src/app/dashboard-layout/layout/dashboard-layout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_carousel_carousel_module__ = __webpack_require__("../../../../../src/app/shared/carousel/carousel.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__header_header_service__ = __webpack_require__("../../../../../src/app/dashboard-layout/header/header.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__my_profile_myProfile_service__ = __webpack_require__("../../../../../src/app/dashboard-layout/my_profile/myProfile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__my_music_my_music_service__ = __webpack_require__("../../../../../src/app/dashboard-layout/my_music/my_music.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__whatsnew_whatsnew_service__ = __webpack_require__("../../../../../src/app/dashboard-layout/whatsnew/whatsnew.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__artist_artist_service__ = __webpack_require__("../../../../../src/app/dashboard-layout/artist/artist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__artist_comments_comments_service__ = __webpack_require__("../../../../../src/app/dashboard-layout/artist_comments/comments.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__track_comments_track_comments_service__ = __webpack_require__("../../../../../src/app/dashboard-layout/track_comments/track_comments.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__artist_track_comments_artist_track_comments_service__ = __webpack_require__("../../../../../src/app/dashboard-layout/artist_track_comments/artist_track_comments.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__artist_profile_artist_profile_service__ = __webpack_require__("../../../../../src/app/dashboard-layout/artist_profile/artist_profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__resolve_artist_resolve__ = __webpack_require__("../../../../../src/app/dashboard-layout/resolve/artist_resolve/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__resolve_track_comment_resolve__ = __webpack_require__("../../../../../src/app/dashboard-layout/resolve/track_comment_resolve/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__dashboard_dashboard_service__ = __webpack_require__("../../../../../src/app/dashboard-layout/dashboard/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_angular2_lightbox__ = __webpack_require__("../../../../angular2-lightbox/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_angular2_lightbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_37_angular2_lightbox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_time_ago_pipe__ = __webpack_require__("../../../../time-ago-pipe/esm5/time-ago-pipe.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__shared_auth_service__ = __webpack_require__("../../../../../src/app/shared/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









































var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_19__layout_dashboard_layout_module__["a" /* DashboardLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_20__shared_carousel_carousel_module__["a" /* CarouselModule */],
                __WEBPACK_IMPORTED_MODULE_21__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_35__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_35__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_39__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_36_ngx_toastr__["a" /* ToastrModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_1_angular_highcharts__["b" /* ChartModule */],
                __WEBPACK_IMPORTED_MODULE_2__amcharts_amcharts3_angular__["a" /* AmChartsModule */],
                __WEBPACK_IMPORTED_MODULE_37_angular2_lightbox__["LightboxModule"],
                __WEBPACK_IMPORTED_MODULE_5_angular_datatables__["b" /* DataTablesModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["g" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_8__layout_dashboard_layout_component__["a" /* DashboardLayoutComponent */],
                        children: [
                            { path: '', component: __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__["a" /* DashboardComponent */] },
                            { path: 'whats-new', component: __WEBPACK_IMPORTED_MODULE_10__whatsnew_whatsnew_component__["a" /* WhatsNewComponent */] },
                            { path: 'artist', component: __WEBPACK_IMPORTED_MODULE_11__artist_artist_component__["a" /* ArtistComponent */] },
                            { path: 'artist_track_comment/:id', component: __WEBPACK_IMPORTED_MODULE_14__artist_track_comments_artist_track_comments_component__["a" /* ArtistTrackConmmentsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_40__shared_auth_service__["a" /* AuthService */]] },
                            { path: 'artist_profile/:artist_id/track/:id/comments', component: __WEBPACK_IMPORTED_MODULE_13__track_comments_track_comments_component__["a" /* TrackConmmentsComponent */], resolve: { comment: __WEBPACK_IMPORTED_MODULE_33__resolve_track_comment_resolve__["b" /* TrackCommentResolve */], artist: __WEBPACK_IMPORTED_MODULE_33__resolve_track_comment_resolve__["a" /* TrackArtistProfileResolve */], track: __WEBPACK_IMPORTED_MODULE_33__resolve_track_comment_resolve__["c" /* TrackDetailResolve */] } },
                            { path: 'artist_profile/:id/comments', component: __WEBPACK_IMPORTED_MODULE_12__artist_comments_comments_component__["a" /* ConmmentsComponent */], resolve: { artist: __WEBPACK_IMPORTED_MODULE_32__resolve_artist_resolve__["d" /* ArtistProfileResolve */], comments: __WEBPACK_IMPORTED_MODULE_32__resolve_artist_resolve__["a" /* ArtistCommentsResolve */] } },
                            { path: 'artist_profile/:id', component: __WEBPACK_IMPORTED_MODULE_15__artist_profile_artist_profile_component__["a" /* ArtistProfileComponent */], resolve: { artist: __WEBPACK_IMPORTED_MODULE_32__resolve_artist_resolve__["d" /* ArtistProfileResolve */], media: __WEBPACK_IMPORTED_MODULE_32__resolve_artist_resolve__["c" /* ArtistMediaResolve */], follower: __WEBPACK_IMPORTED_MODULE_32__resolve_artist_resolve__["b" /* ArtistFollowerResolve */], comments: __WEBPACK_IMPORTED_MODULE_32__resolve_artist_resolve__["a" /* ArtistCommentsResolve */] } },
                            { path: 'vote', component: __WEBPACK_IMPORTED_MODULE_16__vote_vote_component__["a" /* VoteComponent */] },
                            { path: 'my-music', component: __WEBPACK_IMPORTED_MODULE_18__my_music_my_music_component__["a" /* MyMusicComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_40__shared_auth_service__["a" /* AuthService */]] },
                            { path: 'my-profile', component: __WEBPACK_IMPORTED_MODULE_17__my_profile_myProfile_component__["a" /* MyProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_40__shared_auth_service__["a" /* AuthService */]] }
                        ]
                    }
                ])
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_10__whatsnew_whatsnew_component__["a" /* WhatsNewComponent */],
                __WEBPACK_IMPORTED_MODULE_11__artist_artist_component__["a" /* ArtistComponent */],
                __WEBPACK_IMPORTED_MODULE_12__artist_comments_comments_component__["a" /* ConmmentsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__vote_vote_component__["a" /* VoteComponent */],
                __WEBPACK_IMPORTED_MODULE_17__my_profile_myProfile_component__["a" /* MyProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_18__my_music_my_music_component__["a" /* MyMusicComponent */],
                __WEBPACK_IMPORTED_MODULE_6_angular_io_slimscroll__["SlimScroll"],
                __WEBPACK_IMPORTED_MODULE_15__artist_profile_artist_profile_component__["a" /* ArtistProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_13__track_comments_track_comments_component__["a" /* TrackConmmentsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__artist_track_comments_artist_track_comments_component__["a" /* ArtistTrackConmmentsComponent */],
                __WEBPACK_IMPORTED_MODULE_38_time_ago_pipe__["a" /* TimeAgoPipe */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_23__header_header_service__["a" /* HeaderService */],
                __WEBPACK_IMPORTED_MODULE_40__shared_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_24__my_profile_myProfile_service__["a" /* MyProfileService */],
                __WEBPACK_IMPORTED_MODULE_25__my_music_my_music_service__["a" /* MyMusicService */],
                __WEBPACK_IMPORTED_MODULE_26__whatsnew_whatsnew_service__["a" /* WhatsNewService */],
                __WEBPACK_IMPORTED_MODULE_27__artist_artist_service__["a" /* ArtistService */],
                __WEBPACK_IMPORTED_MODULE_28__artist_comments_comments_service__["a" /* CommentsService */],
                __WEBPACK_IMPORTED_MODULE_34__dashboard_dashboard_service__["a" /* DashboardService */],
                __WEBPACK_IMPORTED_MODULE_30__artist_track_comments_artist_track_comments_service__["a" /* ArtistTrackCommentsService */],
                __WEBPACK_IMPORTED_MODULE_31__artist_profile_artist_profile_service__["a" /* ArtistProfileService */],
                __WEBPACK_IMPORTED_MODULE_32__resolve_artist_resolve__["d" /* ArtistProfileResolve */],
                __WEBPACK_IMPORTED_MODULE_32__resolve_artist_resolve__["f" /* ArtistTrackResolve */],
                __WEBPACK_IMPORTED_MODULE_32__resolve_artist_resolve__["c" /* ArtistMediaResolve */],
                __WEBPACK_IMPORTED_MODULE_32__resolve_artist_resolve__["a" /* ArtistCommentsResolve */],
                __WEBPACK_IMPORTED_MODULE_32__resolve_artist_resolve__["b" /* ArtistFollowerResolve */],
                __WEBPACK_IMPORTED_MODULE_32__resolve_artist_resolve__["e" /* ArtistRankingResolve */],
                __WEBPACK_IMPORTED_MODULE_29__track_comments_track_comments_service__["a" /* TrackCommentsService */],
                __WEBPACK_IMPORTED_MODULE_33__resolve_track_comment_resolve__["b" /* TrackCommentResolve */],
                __WEBPACK_IMPORTED_MODULE_33__resolve_track_comment_resolve__["a" /* TrackArtistProfileResolve */],
                __WEBPACK_IMPORTED_MODULE_33__resolve_track_comment_resolve__["c" /* TrackDetailResolve */],
                __WEBPACK_IMPORTED_MODULE_9__layout_dashboard_layout_service__["a" /* DashboardLayoutService */]
            ]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard-layout/layout/dashboard-layout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard-layout/layout/dashboard-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n<div id=\"loader\" *ngIf=\"loading\">\n    <i class=\"fa fa-spinner fa-spin fa-3x\" aria-hidden=\"true\"></i>\n</div>\n\n<section class=\"player-wrapper\" [style.display]=\"audio_instance_list.length > 0 ? 'block' : 'none'\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-11 col-md-12 audio_container\">\n          <div id=\"audioplayer\">\n\n              <button class=\"btn  prev_icon\" (click)=\"prev()\"><img src=\"img/next.png\"/></button>\n              <button id=\"pButton\" class=\"play\" (click)=\"play()\"></button>\n              <button class=\"btn  next_icon\" (click)=\"next()\"><img src=\"img/next.png\"/></button>\n              <div class=\"audio_profile\">\n                  <img src=\"{{audio_list[song_cnt] &&  audio_list[song_cnt]['image'] ? track_url+audio_list[song_cnt]['image'] : 'img/profile-img.png' }}\"/>\n              </div>\n              <div class=\"audio_content\">\n                <div class=\"audio_profile_name\">\n                    <h3>{{audio_list[song_cnt] && audio_list[song_cnt]['name'] ? audio_list[song_cnt]['name'] : ''}}</h3>\n                    <span>{{audio_list.length > 0 && audio_list[song_cnt] && audio_list[song_cnt]['artist_id'] && audio_list[song_cnt]['artist_id']['first_name'] ? audio_list[song_cnt]['artist_id']['first_name'] : '' +\" \"+audio_list.length > 0 && audio_list[song_cnt] && audio_list[song_cnt]['artist_id'] &&  audio_list[song_cnt]['artist_id']['last_name'] ? audio_list[song_cnt]['artist_id']['last_name'] : ''  }}</span>\n                </div> \n                <div class=\"volume_section\">\n                    <img class=\"volume_btn\" src=\"img/volume.png\"/>\n                    <span>\n                        <input type=\"range\" id=\"myRange\" min=\"1\" value=\"100\" (change)=\"mangeVolumn($event)\">\n                    </span>\n                    <div class=\"audio_time\"><span id=\"running_time\"></span> / <span id=\"total_time\"></span></div>\n                </div>  \n                <div class=\"progress\">\n                    <input type=\"range\" id=\"song_prog\" min=\"0\" (change)=\"manageProgress($event)\">\n                </div>\n                <!-- <div class=\"progress \" id=\"timeline\">\n                        <div class=\"progress-bar\" id=\"playhead\" role=\"progressbar\"  aria-valuemax=\"100\" style=\"width:10%\">\n                          <span class=\"sr-only\">70% Complete</span>\n                        </div>\n                </div> -->\n              </div>\n              <div class=\"music_icons\">\n                  <a href=\"javascript:;\" *ngIf=\"user && audio_list[song_cnt] && audio_list[song_cnt]['is_downloadable']\" (click)=\"downloadTrack()\"><img src=\"img/download.png\"/></a>\n                  <a href=\"javascript:;\" (click)=\"openShareTrackModel(shareTrack)\"><img src=\"img/share.png\"/></a>\n              </div>\n          </div>\n        <div class=\"aom_audio_player\">\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<ng-template #shareTrack let-c=\"close\" let-d=\"dismiss\" >\n    <div class=\"modal_login_wrapper\">\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"shared_popup\">\n            <div class=\"col-12 text-center shared_popup_header\">\n                <h4>Share This Track</h4>\n                <span>You are Sharing the \"{{audio_list && audio_list[this.song_cnt] ? audio_list[this.song_cnt]['name'] : '' }}\" Track</span>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-sm-6\">\n                    <div class=\"col-12\">\n                        <button class=\"btn btn-primary social_button fb_btn\" (click)=\"shareOnFacebook()\">\n                            <i class=\"fa fa-facebook\"></i> Facebook\n                        </button>\n                    </div>\n                    <div class=\"col-12\">\n                        <button class=\"btn btn-success social_button comment_btn\" (click)=\"openPhoneShareTrackModel(phoneno)\">\n                            <i class=\"fa fa-comment \"></i> SMS\n                        </button>\n                    </div>\n                    <div class=\"col-12\">\n                        <button class=\"btn btn-primary social_button link_btn\" (click)=\"copy_link()\" tooltip=\"Link Coppied\" triggers=\"click\">\n                            <i class=\"fa fa-link\"></i> Copy Link\n                        </button>\n                    </div>\n                </div>\n                <div class=\"col-sm-6\">\n                    <div class=\"col-12\">\n                        <button class=\"btn btn-info social_button twitter_btn\" (click)=\"shareOnTwitter()\">\n                            <i class=\"fa fa-twitter\"></i> Twitter\n                        </button>\n                    </div>\n                    <div class=\"col-12\">\n                        <button class=\"btn btn-danger social_button email_btn\" (click)=\"openEmailShareTrackModel(email)\">\n                            <i class=\"fa fa-envelope\"></i> Email\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #email let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-body\">\n      <div class=\"forget_password_modal\">\n        <!-- <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button> -->\n        <form [formGroup]=\"share_form\">\n            <h3 class=\"forget_password_header\">Share through email</h3>\n            <div class=\"col-sm-12\">\n                <div class=\"form-group\">\n                    <label class=\"control-label custom_form_label\">Email Id</label>\n                    <input type=\"email\" class=\"form-control custom_form\" formControlName=\"email\" name=\"email\" [(ngModel)]=\"share_data['email']\"  placeholder=\"Enter Email\"/>\n                    <div class=\"cust_err_msg\" *ngIf=\"share_form_validation && !share_form.controls['email'].valid\">\n                        <span *ngIf=\"share_form.controls['email'].errors['required']\" class=\"text-danger\">Email is required.</span>\n                        <span *ngIf=\"!share_form.controls['email'].errors['required'] && share_form.controls['email'].errors['email']\" class=\"text-danger\">Enter valid email.</span>\n                    </div>\n                </div>\n                <div class=\"form-group text-right\">\n                    <button class=\"btn forget_btn\" (click)=\"share_via_email(share_form.valid)\" [disabled]=\"show_spinner\">Submit <i *ngIf=\"show_spinner\" class=\"fa fa-spinner fa-spin\"></i></button>\n                </div>\n            </div>\n        </form>\n     </div>\n    </div>\n</ng-template>\n\n<ng-template #phoneno let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-body\">\n      <div class=\"forget_password_modal\">\n        <!-- <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button> -->\n        <form [formGroup]=\"share_form_phone\">\n            <h3 class=\"forget_password_header\">Share through sms</h3>\n            <div class=\"col-sm-12\">\n                <div class=\"form-group\">\n                    <label class=\"control-label custom_form_label\">Phone Number</label>\n                    <input type=\"email\" class=\"form-control custom_form\" formControlName=\"phone\" name=\"phone\" [(ngModel)]=\"share_data['phone_no']\"  placeholder=\"Enter Phone Number\"/>\n                    <div class=\"cust_err_msg\" *ngIf=\"share_form_validation && !share_form_phone.controls['phone'].valid\">\n                        <span *ngIf=\"share_form_phone.controls['phone'].errors['required']\" class=\"text-danger\">Phone Number is required.</span>\n                        <span *ngIf=\"!share_form_phone.controls['phone'].errors['required'] && share_form_phone.controls['phone'].errors['minlength'] || share_form_phone.controls['phone'].errors['maxlength'] \" class=\"text-danger\">Enter valid phone Number.</span>\n                    </div>\n                </div>\n                <div class=\"form-group text-right\">\n                    <button class=\"btn forget_btn\" (click)=\"share_via_sms(share_form_phone.valid)\" [disabled]=\"show_spinner\">Submit <i *ngIf=\"show_spinner\" class=\"fa fa-spinner fa-spin\"></i></button>\n                </div>\n            </div>\n        </form>\n     </div>\n    </div>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/dashboard-layout/layout/dashboard-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_message_service__ = __webpack_require__("../../../../../src/app/shared/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_layout_service__ = __webpack_require__("../../../../../src/app/dashboard-layout/layout/dashboard-layout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DashboardLayoutComponent = /** @class */ (function () {
    function DashboardLayoutComponent(MessageService, DashboardLayoutService, toastr, modalService, fb) {
        var _this = this;
        this.MessageService = MessageService;
        this.DashboardLayoutService = DashboardLayoutService;
        this.toastr = toastr;
        this.modalService = modalService;
        this.fb = fb;
        this.track_url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].ARTIST_TRACK;
        this.audio_list = [
            this.track_url + "/audio_152939725821967008.mp4",
            this.track_url + "/audio_152940920498523176.mp4",
            this.track_url + "/audio_152940899013172582.mp4"
        ];
        this.show_spinner = false;
        this.user = '';
        this.audio_instance_list = [];
        this.timeline = '';
        this.playhead = '';
        this.pButton = '';
        this.timelineWidth = '';
        this.audio_ins = '';
        this.onplayhead = false;
        this.duration = '';
        this.song_cnt = 0;
        this.total_time = 0;
        this.list_no = '';
        this.user_img_url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].USER_IMG;
        this.share_form_validation = false;
        this.share_data = {};
        console.log("dashboard component");
        this.audio_instance_list = [];
        this.audio_list = [];
        this.user = JSON.parse(localStorage.getItem('user'));
        this.subscription = this.MessageService.getMessage().subscribe(function (response) {
            console.log(response);
            if (response['action'] == 'start') {
                _this.audio_list = response['data'];
                response['data'].forEach(function (ele) {
                    var audio = new Audio();
                    audio.src = _this.track_url + '/' + ele['audio'];
                    audio.load();
                    _this.audio_instance_list.push(audio);
                    audio.addEventListener('timeupdate', _this.timeUpdate, false);
                    audio.addEventListener("canplaythrough", function () {
                        _this.duration = audio.duration;
                        // this.total_time = this.format_seconds(this.duration);
                        // this.dur_sec = this.duration - this.dur_min * 60;
                    }, false);
                });
            }
            _this.list_no = response['list'];
            if (response['action'] == 'start') {
                _this.song_cnt = response['index'];
                if (_this.audio_ins) {
                    _this.audio_ins.currentTime = 0;
                    _this.audio_ins.pause();
                    _this.total_time = "0:0";
                }
                _this.play();
            }
            else if (response['action'] == 'stop') {
                var pButton = document.getElementById('pButton');
                pButton.className = "";
                pButton.className = "play";
                if (_this.audio_ins) {
                    _this.audio_ins.currentTime = 0;
                    _this.audio_ins.pause();
                }
            }
        });
        this.share_form = this.fb.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].email]]
        });
        this.share_form_phone = this.fb.group({
            phone: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(10)]]
        });
    }
    DashboardLayoutComponent.prototype.ngOnInit = function () {
    };
    DashboardLayoutComponent.prototype.ngAfterViewInit = function () {
    };
    DashboardLayoutComponent.prototype.ngAfterViewChecked = function () {
    };
    DashboardLayoutComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
        if (this.modalRef) {
            this.modalRef.close();
        }
        if (this.emailmodalRef) {
            this.emailmodalRef.close();
        }
        if (this.phonemodalRef) {
            this.phonemodalRef.close();
        }
    };
    DashboardLayoutComponent.prototype.openShareTrackModel = function (content) {
        this.modalRef = this.modalService.open(content, { centered: true, windowClass: 'modal-wrapper', backdrop: true });
    };
    DashboardLayoutComponent.prototype.openEmailShareTrackModel = function (content) {
        if (this.user) {
            this.share_data = {};
            this.emailmodalRef = this.modalService.open(content, { centered: true, backdrop: true });
        }
        else {
            this.toastr.info('Login first to share track via email', 'Information!');
        }
    };
    DashboardLayoutComponent.prototype.openPhoneShareTrackModel = function (content) {
        if (this.user) {
            this.share_data = {};
            this.phonemodalRef = this.modalService.open(content, { centered: true, backdrop: true });
        }
        else {
            this.toastr.info('Login first to share track via sms', 'Information!');
        }
    };
    DashboardLayoutComponent.prototype.play = function () {
        try {
            var pButton = document.getElementById('pButton');
            this.audio_ins = this.audio_instance_list[this.song_cnt];
            if (this.audio_instance_list[this.song_cnt] && this.audio_instance_list[this.song_cnt].paused) {
                this.audio_instance_list[this.song_cnt].play();
                pButton.className = "";
                pButton.className = "pause";
            }
            else {
                this.audio_instance_list[this.song_cnt].pause();
                this.MessageService.sendMessage({ index: this.song_cnt, action: 'stop', list: this.list_no });
                pButton.className = "";
                pButton.className = "play";
            }
        }
        catch (err) {
            console.log(err);
        }
    };
    DashboardLayoutComponent.prototype.timeUpdate = function ($event) {
        var pButton = document.getElementById('pButton');
        var nprogres = document.getElementById('song_prog');
        var playPercent = (100 * $event.target.currentTime / $event.target.duration);
        nprogres['value'] = $event.target.currentTime;
        nprogres['max'] = $event.target.duration;
        var minutes = Math.floor($event.target.currentTime / 60);
        var seconds = $event.target.currentTime - minutes * 60;
        var running_time = document.getElementById('running_time');
        running_time.innerHTML = minutes + ':' + Math.round(seconds);
        minutes = Math.floor($event.target.duration / 60);
        seconds = $event.target.duration - minutes * 60;
        var total_time = document.getElementById('total_time');
        var str = ((isNaN(minutes) ? 0 : minutes) + ':' + (isNaN(seconds) ? 0 : Math.round(seconds)));
        console.log('total_time', str);
        total_time.innerHTML = str.toString();
        if ($event.target.currentTime == $event.target.duration) {
            // this.next();          
            pButton.className = "";
            pButton.className = "play";
        }
    };
    DashboardLayoutComponent.prototype.next = function () {
        if (this.audio_instance_list[this.song_cnt]) {
            this.audio_instance_list[this.song_cnt].pause();
            this.audio_instance_list[this.song_cnt].currentTime = 0;
        }
        var cnt = this.song_cnt + 1;
        if (cnt <= (this.audio_instance_list.length - 1))
            this.song_cnt = cnt;
        else
            this.song_cnt = this.audio_instance_list.length - 1;
        var pButton = document.getElementById('pButton');
        if (pButton.className == 'pause') {
            this.MessageService.sendMessage({ index: this.song_cnt, action: 'next', track_action: 'pause', list: this.list_no });
            this.play();
        }
    };
    DashboardLayoutComponent.prototype.prev = function () {
        if (this.audio_instance_list[this.song_cnt]) {
            this.audio_instance_list[this.song_cnt].pause();
            this.audio_instance_list[this.song_cnt].currentTime = 0;
        }
        var cnt = this.song_cnt - 1;
        if (cnt > 0)
            this.song_cnt = cnt;
        else
            this.song_cnt = 0;
        var pButton = document.getElementById('pButton');
        if (pButton.className == 'pause') {
            this.MessageService.sendMessage({ index: this.song_cnt, action: 'prev', track_action: 'pause', list: this.list_no });
            this.play();
        }
    };
    DashboardLayoutComponent.prototype.pad = function (num, size) {
        var s = num + '';
        while (s.length < size) {
            s = '0' + s;
        }
        return s;
    };
    DashboardLayoutComponent.prototype.format_seconds = function (secs) {
        return Math.floor(secs / 60) + ':' + Math.round((+(this.pad(secs % 60, 2))));
    };
    DashboardLayoutComponent.prototype.mangeVolumn = function (e) {
        this.audio_ins.volume = e.target.value / 100;
    };
    DashboardLayoutComponent.prototype.manageProgress = function (e) {
        var _this = this;
        this.audio_ins.removeEventListener('timeupdate', this.timeUpdate, false);
        console.log('prog => ', e.target.value);
        var nprogres = document.getElementById('song_prog');
        var minutes = Math.floor(e.target.value / 60);
        var seconds = e.target.value - minutes * 60;
        var running_time = document.getElementById('running_time');
        setTimeout(function () {
            nprogres['value'] = e.target.value;
            _this.audio_ins['currentTime'] = e.target.value;
            running_time.innerHTML = minutes + ':' + Math.round(seconds);
        }, 500);
    };
    DashboardLayoutComponent.prototype.downloadTrack = function () {
        var _this = this;
        console.log(this.audio_list[this.song_cnt]);
        this.DashboardLayoutService.downloadTrack(this.audio_list[this.song_cnt]['_id']).subscribe(function (response) {
            if (response['message']) {
                _this.toastr.info(response['message'], 'Info!');
            }
            if (response['filename']) {
                window.location.href = _this.user_img_url + response['filename'];
            }
        });
    };
    // share on facebook
    DashboardLayoutComponent.prototype.shareOnFacebook = function () {
        var track = this.audio_list[this.song_cnt];
        console.log(track);
        var url = 'http://' + window.location.host + '/artist_profile/' + track['artist_id']['_id'] + '/track/' + track['_id'] + '/comments';
        var str = "Track Name: " + track.name + "\nArtist: " + track['artist_id']['first_name'] + ' ' + track['artist_id']['last_name'] + '\nDescription: ' + track.description;
        // var facebookWindow = window.open('https://www.facebook.com/sharer.php?s=100&p[summary]='+encodeURIComponent(str)+"&p[url]="+encodeURIComponent(url), 'facebook-popup', 'height=350,width=600');
        // if(facebookWindow.focus) { facebookWindow.focus(); }
        FB.ui({
            method: 'share_open_graph',
            action_type: 'og.likes',
            action_properties: JSON.stringify({
                object: {
                    'og:url': url,
                    'og:title': 'AOM',
                    'og:description': str
                }
            })
        }, function (response) { });
    };
    // share on twitter
    DashboardLayoutComponent.prototype.shareOnTwitter = function () {
        var track = this.audio_list[this.song_cnt];
        console.log(track);
        var url = 'http://' + window.location.host + '/artist_profile/' + track['artist_id']['_id'] + '/track/' + track['_id'] + '/comments';
        var str = "Track Name: " + track.name + "\nArtist: " + track['artist_id']['first_name'] + ' ' + track['artist_id']['last_name'] + '\nDescription: ' + track.description;
        var twitterWindow = window.open('https://twitter.com/share?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(str), 'twitter-popup', 'height=350,width=600');
        if (twitterWindow.focus) {
            twitterWindow.focus();
        }
    };
    // share track via email
    DashboardLayoutComponent.prototype.share_via_email = function (flag) {
        var _this = this;
        if (flag) {
            this.share_form_validation = !flag;
            this.show_spinner = true;
            var track = this.audio_list[this.song_cnt];
            var url = 'http://' + window.location.host + '/artist_profile/' + track['artist_id']['_id'] + '/track/' + track['_id'] + '/comments';
            var data = {
                email: this.share_data['email'],
                track_id: track['_id'],
                url: url
            };
            this.DashboardLayoutService.shareTrackViaEmail(data).subscribe(function (response) {
                _this.toastr.success(response['message'], 'Success!');
                _this.emailmodalRef.close();
            }, function (error) {
                _this.toastr.error(error['error'].message, 'Error!');
                _this.show_spinner = false;
            }, function () {
                _this.show_spinner = false;
            });
        }
        else {
            this.share_form_validation = !flag;
        }
    };
    // share via sms
    DashboardLayoutComponent.prototype.share_via_sms = function (flag) {
        var _this = this;
        if (flag) {
            this.share_form_validation = !flag;
            this.show_spinner = true;
            var track = this.audio_list[this.song_cnt];
            var url = 'http://' + window.location.host + '/artist_profile/' + track['artist_id']['_id'] + '/track/' + track['_id'] + '/comments';
            var data = {
                phone_no: this.share_data['phone_no'],
                track_id: track['_id'],
                url: url
            };
            this.DashboardLayoutService.shareTrackViaSms(data).subscribe(function (response) {
                _this.toastr.success(response['message'], 'Success!');
                _this.emailmodalRef.close();
                _this.share_data = {};
            }, function (error) {
                _this.toastr.error(error['error'].message, 'Error!');
                _this.show_spinner = false;
            }, function () {
                _this.show_spinner = false;
            });
        }
        else {
            this.share_form_validation = !flag;
        }
    };
    // copy share track link
    DashboardLayoutComponent.prototype.copy_link = function () {
        var track = this.audio_list[this.song_cnt];
        console.log(track);
        var url = 'http://' + window.location.host + '/artist_profile/' + track['artist_id']['_id'] + '/track/' + track['_id'] + '/comments';
        var textArea = document.createElement("textarea");
        textArea.value = url;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
    };
    DashboardLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard-layout',
            template: __webpack_require__("../../../../../src/app/dashboard-layout/layout/dashboard-layout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard-layout/layout/dashboard-layout.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_4__dashboard_layout_service__["a" /* DashboardLayoutService */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["a" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], DashboardLayoutComponent);
    return DashboardLayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard-layout/layout/dashboard-layout.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getAuthServiceConfigs */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardLayoutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_layout_component__ = __webpack_require__("../../../../../src/app/dashboard-layout/layout/dashboard-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_header_component__ = __webpack_require__("../../../../../src/app/dashboard-layout/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__ = __webpack_require__("../../../../../src/app/dashboard-layout/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular5_social_login__ = __webpack_require__("../../../../angular5-social-login/angular5-social-login.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular5_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular5_social_login__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// Configs 
function getAuthServiceConfigs() {
    var config = new __WEBPACK_IMPORTED_MODULE_9_angular5_social_login__["AuthServiceConfig"]([
        {
            id: __WEBPACK_IMPORTED_MODULE_9_angular5_social_login__["FacebookLoginProvider"].PROVIDER_ID,
            provider: new __WEBPACK_IMPORTED_MODULE_9_angular5_social_login__["FacebookLoginProvider"](__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].FB_APPID.toString())
        }
    ]);
    return config;
}
var DashboardLayoutModule = /** @class */ (function () {
    function DashboardLayoutModule() {
    }
    DashboardLayoutModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_9_angular5_social_login__["SocialLoginModule"],
                __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap__["c" /* TooltipModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* RouterModule */].forChild([])
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_9_angular5_social_login__["AuthServiceConfig"], useFactory: getAuthServiceConfigs }
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__dashboard_layout_component__["a" /* DashboardLayoutComponent */], __WEBPACK_IMPORTED_MODULE_4__header_header_component__["a" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__["a" /* FooterComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__dashboard_layout_component__["a" /* DashboardLayoutComponent */]]
        })
    ], DashboardLayoutModule);
    return DashboardLayoutModule;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard-layout/layout/dashboard-layout.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardLayoutService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardLayoutService = /** @class */ (function () {
    function DashboardLayoutService(http) {
        this.http = http;
        this.api_host = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].API_URL;
        this.user = '';
        this.headers = '';
        // this.user = JSON.parse(localStorage.getItem('user'));
        // this.headers = new HttpHeaders({ 'x-access-token' : this.user.token });  
    }
    // download the track 
    DashboardLayoutService.prototype.downloadTrack = function (id) {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'x-access-token': this.user.token });
        return this.http.get(this.api_host + "/user/track/" + id + "/download", { headers: this.headers });
    };
    // share track via email
    DashboardLayoutService.prototype.shareTrackViaEmail = function (data) {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'x-access-token': this.user.token });
        return this.http.post(this.api_host + "/user/track/share_track_by_mail", data, { headers: this.headers });
    };
    // share track via email
    DashboardLayoutService.prototype.shareTrackViaSms = function (data) {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'x-access-token': this.user.token });
        return this.http.post(this.api_host + "/user/track/share_track_by_sms", data, { headers: this.headers });
    };
    DashboardLayoutService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DashboardLayoutService);
    return DashboardLayoutService;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard-layout/my_music/my_music.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"mymusic-wrap\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-12\">\n        <div class=\"track-menu\">\n          <ul class=\"nav nav-tabs\" id=\"myTab\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link {{tab_cnt == 1 ? 'active' : ''}}\" (click)=\"tabChanged(1)\" data-toggle=\"tab\" href=\"javascript:;\" >My Track</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link {{tab_cnt == 2 ? 'active' : ''}}\" (click)=\"tabChanged(2)\"  data-toggle=\"tab\" href=\"javascript:;\" >Stats</a>\n            </li>\n          </ul>\n          \n          <p><a data-fancybox data-animation-duration=\"700\" data-src=\"#addtrack\" (click)=\"openModal(content)\"  href=\"javascript:;\"><img src=\"img/icons8-plus_mathNormal.png\" alt=\"Plus Icone\"> Add Track</a></p>\n        </div>\n      </div>\n      <div class=\"col-lg-10 col-md-9 col-sm-8 col-xs-12\">\n        <div class=\"tab-content\">\n          <div class=\"tab-pane fade {{tab_cnt == 1 ? 'show active' : ''}}\" id=\"mytracks\">\n            <div class=\"track-table\">\n              <!-- <div class=\"alert alert-info\" *ngIf=\"tracklist.length == 0\">\n                No data available.\n              </div> -->\n              <table datatable [dtOptions]=\"dtOptions\" class=\"my_track_table\">\n                <tbody>\n                  <tr *ngFor=\"let t of tracklist; let i =  index;\">\n                    <td class=\"serial-num\">{{i+1}}.</td>\n                    <td class=\"play-option\">\n                      <a href=\"javascript:;\" [style.display]=\"!audio_ins[i] ? 'block' : 'none'\" (click)=\"playAudio(t.audio, i, tracklist)\" >\n                        <img src=\"img/new-play.png\" alt=\"Play\" >\n                      </a>\n                      <a href=\"javascript:;\" [style.display]=\"audio_ins[i] ? 'block' : 'none'\" (click)=\"stopAudio(i, tracklist)\" >\n                        <img src=\"img/pause.png\" alt=\"Play\" >\n                      </a>\n                    </td>\n\n                    <td class=\"track-det\" colspan=\"2\">\n                      <div class=\"track-pic\">\n                        <a href=\"javascript:;\">\n                          <img src=\"{{track_url+t.image}}\" *ngIf=\"t.image\" width=\"50\" height=\"50\" alt=\"Track Image\">\n                          <img src=\"img/track-img.png\" *ngIf=\"!t.image\" alt=\"Track Image\">\n                        </a>\n                      </div>\n                      <div class=\"track_title\">\n                        <p class=\"track-name\">{{t.name}}</p>\n                        <p class=\"track-singer\">{{userinfo.artist.first_name + ' '+ userinfo.artist.last_name}}</p>\n                        <p class=\"track-year\">{{t.created_at | date : 'MMMM dd, yyyy'}}</p>\n                      </div>\n                    </td>\n                    <td class=\"td track-vote\" style=\"display: none;\">\n                      <img src=\"img/start.png\" alt=\"start\">\n                      <span>1300 <br> <span>Votes</span></span>\n                    </td>\n                    <td class=\"td track-vote\" *ngIf=\"t.is_submit\">\n                      <img src=\"img/start.png\" alt=\"start\">\n                      <span>{{t.no_of_votes}} <br> <span>Votes</span></span>\n                    </td>\n                    <td class=\"contest-btn\" *ngIf=\"!t.is_submit\">\n                      <a  data-fancybox data-animation-duration=\"700\" (click)=\"openContestModal(contest, t)\" data-src=\"#submitcontest\" href=\"javascript:;\">Submit for a Contest</a>\n                    </td>\n                    <td class=\"action\" colspan=\"2\">\n                      <div class=\"track-like\" style=\"top:10px;\">\n                          <label class=\"switch\" title=\"Track Download status\">\n                              <input type=\"checkbox\"  [checked]=\"t.is_downloadable\" (change)=\"updateTrackDownLoadStatus(t._id)\" />\n                              <!-- <input type=\"checkbox\" *ngIf=\"!t.is_downloadable\" (change)=\"updateTrackDownLoadStatus(t._id)\" /> -->\n                              <span class=\"slider round\"></span>\n                          </label>\n                      </div>\n                      <div class=\"track-like\">\n                        <a href=\"javascript:;\"><img src=\"img/likehand.png\" alt=\"Like Thumb\"></a>\n                        <span class=\"new-up\"></span>\n                      </div>\n                      <div class=\"track-comment\">\n                        <a href=\"javascript:;\" routerLink=\"/artist_track_comment/{{t._id}}\"><img src=\"img/comment.png\" alt=\"Comment\"></a>\n                        <span class=\"new-up\"></span>\n                      </div>\n                      <div class=\"track-price\"><a href=\"javascript:;\">${{t.price}}</a></div>\n                      <div class=\"share\"><a href=\"javascript:;\" (click)=\"openShareTrackModel(shareTrack, i)\"><img src=\"img/share.png\" alt=\"Track Share\"></a></div>\n                      <div class=\"track-edit\"><a data-fancybox data-animation-duration=\"700\" data-src=\"#edittrack\" (click)=\"openEditTrackModal(editTrack, t)\"  href=\"javascript:;\"><img src=\"img/edit.png\" alt=\"Track Edit\"></a></div>\n                      <div class=\"track-del\"><a data-fancybox data-animation-duration=\"700\" data-src=\"#delete\" (click)=\"removeTrack(t._id)\" href=\"javascript:;\"><img src=\"img/del.png\" alt=\"Track Delete\"></a></div>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n          <div class=\"tab-pane fade {{tab_cnt == 2 ? 'show active' : ''}}\" id=\"stats\">\n            <div class=\"track-table\">\n                <!-- <div class=\"alert alert-info\" *ngIf=\"tracklist.length == 0\">\n                  No data available.\n                </div> -->\n              <table>\n                <tbody>\n                  <tr *ngFor=\"let t of tracklist; let i =  index;\">\n                    <td class=\"serial-num\">{{i+1}}.</td>\n                    <td class=\"play-option\">\n                        <a href=\"javascript:;\" [style.display]=\"!audio_ins[i] ? 'block' : 'none'\" (click)=\"playAudio(t.audio, i, tracklist)\" >\n                            <img src=\"img/new-play.png\" alt=\"Play\" >\n                        </a>\n                        <a href=\"javascript:;\" [style.display]=\"audio_ins[i] ? 'block' : 'none'\" (click)=\"stopAudio(i, tracklist)\" >\n                          <img src=\"img/pause.png\" alt=\"Play\" >\n                        </a>\n                        \n                    </td>\n                    <td class=\"track-pic\"><a href=\"javascript:;\">\n                        <img src=\"{{track_url+t.image}}\" *ngIf=\"t.image\" width=\"50\" height=\"50\" alt=\"Track Image\">\n                        <img src=\"img/track-img.png\" *ngIf=\"!t.image\" alt=\"Track Image\">\n                    </a></td>\n                    <td class=\"track-det\" colspan=\"2\">\n                      <p class=\"track-name\">{{t.name}}</p>\n                      <p class=\"track-singer\">{{userinfo.artist.first_name + ' '+ userinfo.artist.last_name}}</p>\n                      <p class=\"track-year\">{{t.created_at | date : 'MMMM dd, yyyy'}}</p>\n                    </td>\n                    <td class=\"td track-vote\">\n                      <img src=\"img/start.png\" alt=\"start\">\n                      <span>{{t.no_of_votes}} <br> <span>Votes</span></span>\n                    </td>\n                    <td class=\"action\" colspan=\"2\">\n                      <div class=\"track-like\">\n                        <a href=\"javascript:;\"><img src=\"img/likehand.png\" alt=\"Like Thumb\"></a>\n                        <span class=\"new-up\"></span>\n                      </div>\n                      <div class=\"track-comment\">\n                        <a href=\"javascript:;\" routerLink=\"/artist_track_comment/{{t._id}}\"><img src=\"img/comment.png\" alt=\"Comment\"></a>\n                        <span class=\"new-up\"></span>\n                      </div>\n                      <div class=\"track-price\"><a href=\"javascript:;\">${{t.price}}</a></div>\n                      <div class=\"share\"><a href=\"javascript:;\" (click)=\"openShareTrackModel(shareTrack, i)\"><img src=\"img/share.png\" alt=\"Track Share\"></a></div>\n                      <div class=\"track-edit\"><a data-fancybox data-animation-duration=\"700\" data-src=\"#edittrack\"  href=\"javascript:;\"><img src=\"img/edit.png\" alt=\"Track Edit\"></a></div>\n                      <div class=\"track-del\"><a data-fancybox data-animation-duration=\"700\" data-src=\"#delete\"  href=\"javascript:;\"><img src=\"img/del.png\" alt=\"Track Delete\"></a></div>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<ng-template #content let-c=\"close\" let-d=\"dismiss\" >\n\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t</button>\n  <div class=\"modal-body\">\n    <div class=\"add-track-modal\">\n\t\t\t<h3>Add New Track</h3>\n\t\t\t<div class=\"media-upload-btn\" *ngIf=\"!audio_file\"> \n\t\t\t\t<span class=\"upl-img\"><i class=\"fa fa-cloud-upload\" aria-hidden=\"true\"></i></span> \n\t\t\t\t<span class=\"up_text\">Select Music</span> \n\t\t\t\t<input type=\"file\" name=\"my_doc_upload\" id=\"my_doc_upload\" (change)=\"changeAudio($event)\" multiple=\"false\"> \n\t\t\t\t<p class=\"instrution\">AIFF,WAV,FLAC,MP3 or AAC, 3GB or less</p>\n      </div>\n      <div class=\"media-upload-btn\" *ngIf=\"audio_file\">\n        <span class=\"track_name\">{{audio_file.name}}</span>\n        <div class=\"upload-btn-div\">\n          <label for=\"fileUpload\">Upload a Different Track</label>\n          <input type=\"file\" name=\"my_doc_upload\" (change)=\"changeAudio($event)\" id=\"my_doc_upload\" multiple=\"false\"> \n        </div>\n      </div>\n\t\t\t<div class=\"media_progress_bar\">\n\t\t\t\t<div class=\"det\">\n\t\t\t\t\t<div class=\"upl-file-name\">My Summer.mp3</div>\n\t\t\t\t\t<div class=\"upl-time-rem\">5 sec remaining</div>\n\t\t\t\t\t<div class=\"close-btn\"><img src=\"img/closeNormal.png\" alt=\"Close-btn\"></div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"progress\">\n\t\t\t\t    <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:70%\">\n\t\t\t\t      <span class=\"sr-only\">70% Complete</span>\n\t\t\t\t    </div>\n\t\t\t\t  </div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group tr-name\">\n\t\t\t    <label for=\"tname\">Track Name</label>\n\t\t\t    <input type=\"text\" class=\"form-control\" id=\"tname\" name=\"name\" [(ngModel)]=\"trackdata.name\" placeholder=\"Track Name\">\n\t\t  \t</div>\n\t\t  \t<div class=\"form-group tr-price\">\n\t\t\t    <label for=\"tname\">Price</label>\n\t\t\t    <input type=\"number\" class=\"form-control\" id=\"tname\" name=\"price\" [(ngModel)]=\"trackdata.price\" placeholder=\"$ 1399\">\n\t\t  \t</div>\n\t\t  \t<div class=\"textarea-upload\">\n\t\t\t  \t<div class=\"media-upload-btn song-photo\" *ngIf=\"!add_track_img\"> \n  \t\t\t\t\t<span class=\"upl-img\"><i class=\"fa fa-cloud-upload\" aria-hidden=\"true\"></i></span> \n  \t\t\t\t\t<span class=\"up_text\">Upload <br>Photo</span> \n  \t\t\t\t\t<input type=\"file\" name=\"my_doc_upload\" id=\"my_doc_upload\" (change)=\"changeFile($event)\" multiple=\"false\"> \n          </div>\n          <div class=\"upload-cover\" *ngIf=\"add_track_img\" style=\"width:92.5px;height:85px;\"> \n            <img src=\"{{add_track_img}}\" alt=\"Edit cover Image\" >\n            <input type=\"file\" name=\"my_doc_upload\" id=\"my_doc_upload\" (change)=\"changeFile($event)\" multiple=\"false\">\n          </div>\n\t\t\t\t  <div class=\"form-group\">\n            <label>Describe Yourself</label>\n            <textarea name=\"description\" placeholder=\"Describe Yourself\" [(ngModel)]=\"trackdata.description\" class=\"form-control\" ></textarea>\n          </div>\n      </div>\n\t\t\t<div class=\"button_group\">\n\t\t\t\t<button class=\"add-btn\" (click)=\"addTrack()\" [disabled]=\"show_spinner\">Add Track <i  *ngIf=\"show_spinner\" class=\"fa fa-spinner fa-spin\"></i></button>\n\t\t\t</div>\n\t  </div>\n  </div>\n</ng-template>\n<ng-template #editTrack let-c=\"close\" let-d=\"dismiss\">\n  \t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t</button>\n  <div class=\"modal-body\">\n    <form>\n    <div class=\"edit-track-modal\">\n        <h3>Edit Track</h3>\n        <div class=\"form-group tr-name\">\n            <label for=\"tname\">Track Name</label>\n            <input type=\"text\" class=\"form-control\" id=\"tname\" name=\"name\" [(ngModel)]=\"trackdata.name\" placeholder=\"Track Name\">\n          </div>\n          <div class=\"form-group tr-price\">\n            <label for=\"tname\">Price</label>\n            <input type=\"text\" class=\"form-control\" id=\"tname\" name=\"price\" placeholder=\"$ 1399\" [(ngModel)]=\"trackdata.price\">\n          </div>\n          <div class=\"textarea-upload\">\n            <div class=\"edit-profile-picture\">\n            <div class=\"upload-cover\"> \n              <img src=\"{{edit_image}}\" alt=\"Edit cover Image\">\n              <input type=\"file\" name=\"my_doc_upload\" id=\"my_doc_upload\" (change)=\"changeTrackImage($event)\" multiple=\"false\">\n              <a data-fancybox=\"\" data-animation-duration=\"700\" data-src=\"#delete\" *ngIf=\"trackdata.image\" href=\"javascript:;\" (click)=\"removeTrackImage(trackdata._id)\" class=\"delete\"><i class=\"fa fa-trash\"></i></a>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label>Describe Yourself</label>\n            <textarea name=\"description\" [(ngModel)]=\"trackdata.description\" class=\"form-control\"></textarea>\n          </div>\n        </div>\n        <div class=\"button_group\">\n            <a href=\"javascript:;\" class=\"pull-left\"  (click)=\"d('Cross click')\">\n              <span aria-hidden=\"true\">Cancel</span>\n            </a>\n          <button type=\"submit\" (click)=\"updateTrack()\" [disabled]=\"show_spinner\" class=\"update-btn pull-right\">Save <i *ngIf=\"show_spinner\" class=\"fa fa-spinner fa-spin\"></i></button>\n        </div>\n    </div>\n    </form>\n  </div>\n</ng-template>\n<ng-template #contest let-c=\"close\" let-d=\"dismiss\">\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    <div class=\"modal-body\">\n        <div class=\"contest-wrap\" >\n          <h3>Submit for a contest</h3>\n          <div class=\"contest-table\" data-mcs-theme=\"dark-3\">\n            <table>\n              <tr *ngFor=\"let con of contest_list; let i = index;\">\n                <td>\n                    <!-- <input type=\"radio\" value=\"{{con._id}}\" name=\"card\" [(ngModel)]=\"contest_id\" /> -->\n                  <div class=\"radio\">\n                      <label>\n                        <input type=\"radio\" value=\"{{con._id}}\" name=\"card\" [(ngModel)]=\"contest_id\" />\n                        <span class=\"radio_check\"></span>\n                      </label>\n                  </div>\n                </td>\n                <td><img src=\"img/conest-img.jpg\" alt=\"Contest Image\"></td>\n                <td>\n                  <h3 class=\"c-name\">{{con.name}}</h3>\n                  <div class=\"c-dates\">{{con.start_date | date : 'MMMM dd, yyyy'}} - {{con.end_date | date : 'MMMM dd, yyyy'}}</div>\n                  <div class=\"c-part\">{{con.no_of_participants}} Contest Participants</div>\n                </td>\n              </tr>\n            </table>\n          </div>\n          <div class=\"button_group\">\n            <button type=\"submit\" [disabled]=\"show_spinner\" (click)=\"addTrackToContest()\" class=\"add-btn\">Submit <i *ngIf=\"show_spinner\" class=\"fa fa-spinner fa-spin\"></i></button>\n          </div>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #shareTrack let-c=\"close\" let-d=\"dismiss\" >\n  <div class=\"modal_login_wrapper\">\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n          <span aria-hidden=\"true\">&times;</span>\n      </button>\n  </div>\n  <div class=\"modal-body\">\n      <div class=\"shared_popup\">\n          <div class=\"col-12 text-center shared_popup_header\">\n              <h4>Share This Track</h4>\n              <span>You are Sharing the \"{{audio_list && audio_list[this.song_cnt] ? audio_list[this.song_cnt]['name'] : '' }}\" Track</span>\n          </div>\n          <div class=\"row\">\n              <div class=\"col-sm-6\">\n                  <div class=\"col-12\">\n                      <button class=\"btn btn-primary social_button fb_btn\" (click)=\"shareOnFacebook()\">\n                          <i class=\"fa fa-facebook\"></i> Facebook\n                      </button>\n                  </div>\n                  <div class=\"col-12\">\n                      <button class=\"btn btn-success social_button comment_btn\" (click)=\"openPhoneShareTrackModel(phoneno)\">\n                          <i class=\"fa fa-comment \"></i> SMS\n                      </button>\n                  </div>\n                  <div class=\"col-12\">\n                      <button class=\"btn btn-primary social_button link_btn\" (click)=\"copy_link()\" tooltip=\"Link Coppied\" triggers=\"click\">\n                          <i class=\"fa fa-link\"></i> Copy Link\n                      </button>\n                  </div>\n              </div>\n              <div class=\"col-sm-6\">\n                  <div class=\"col-12\">\n                      <button class=\"btn btn-info social_button twitter_btn\" (click)=\"shareOnTwitter()\">\n                          <i class=\"fa fa-twitter\"></i> Twitter\n                      </button>\n                  </div>\n                  <div class=\"col-12\">\n                      <button class=\"btn btn-danger social_button email_btn\" (click)=\"openEmailShareTrackModel(email)\">\n                          <i class=\"fa fa-envelope\"></i> Email\n                      </button>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</ng-template>\n\n<ng-template #email let-c=\"close\" let-d=\"dismiss\">\n<div class=\"modal-body\">\n  <div class=\"forget_password_modal\">\n    <!-- <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button> -->\n    <form [formGroup]=\"share_form\">\n        <h3 class=\"forget_password_header\">Share through email</h3>\n        <div class=\"col-sm-12\">\n            <div class=\"form-group\">\n                <label class=\"control-label custom_form_label\">Email Id</label>\n                <input type=\"email\" class=\"form-control custom_form\" formControlName=\"email\" name=\"email\" [(ngModel)]=\"share_data['email']\"  placeholder=\"Enter Email\"/>\n                <div class=\"cust_err_msg\" *ngIf=\"share_form_validation && !share_form.controls['email'].valid\">\n                    <span *ngIf=\"share_form.controls['email'].errors['required']\" class=\"text-danger\">Email is required.</span>\n                    <span *ngIf=\"!share_form.controls['email'].errors['required'] && share_form.controls['email'].errors['email']\" class=\"text-danger\">Enter valid email.</span>\n                </div>\n            </div>\n            <div class=\"form-group text-right\">\n                <button class=\"btn forget_btn\" (click)=\"share_via_email(share_form.valid)\" [disabled]=\"show_spinner\">Submit <i *ngIf=\"show_spinner\" class=\"fa fa-spinner fa-spin\"></i></button>\n            </div>\n        </div>\n    </form>\n </div>\n</div>\n</ng-template>\n\n<ng-template #phoneno let-c=\"close\" let-d=\"dismiss\">\n<div class=\"modal-body\">\n  <div class=\"forget_password_modal\">\n    <!-- <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button> -->\n    <form [formGroup]=\"share_form_phone\">\n        <h3 class=\"forget_password_header\">Share through sms</h3>\n        <div class=\"col-sm-12\">\n            <div class=\"form-group\">\n                <label class=\"control-label custom_form_label\">Phone Number</label>\n                <input type=\"email\" class=\"form-control custom_form\" formControlName=\"phone\" name=\"phone\" [(ngModel)]=\"share_data['phone_no']\"  placeholder=\"Enter Phone Number\"/>\n                <div class=\"cust_err_msg\" *ngIf=\"share_form_validation && !share_form_phone.controls['phone'].valid\">\n                    <span *ngIf=\"share_form_phone.controls['phone'].errors['required']\" class=\"text-danger\">Phone Number is required.</span>\n                    <span *ngIf=\"!share_form_phone.controls['phone'].errors['required'] && share_form_phone.controls['phone'].errors['minlength'] || share_form_phone.controls['phone'].errors['maxlength'] \" class=\"text-danger\">Enter valid phone Number.</span>\n                </div>\n            </div>\n            <div class=\"form-group text-right\">\n                <button class=\"btn forget_btn\" (click)=\"share_via_sms(share_form_phone.valid)\" [disabled]=\"show_spinner\">Submit <i *ngIf=\"show_spinner\" class=\"fa fa-spinner fa-spin\"></i></button>\n            </div>\n        </div>\n    </form>\n </div>\n</div>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/dashboard-layout/my_music/my_music.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyMusicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__my_music_service__ = __webpack_require__("../../../../../src/app/dashboard-layout/my_music/my_music.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_message_service__ = __webpack_require__("../../../../../src/app/shared/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_datatables__ = __webpack_require__("../../../../angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_sweetalert2__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DataTablesResponse = /** @class */ (function () {
    function DataTablesResponse() {
    }
    return DataTablesResponse;
}());
var MyMusicComponent = /** @class */ (function () {
    function MyMusicComponent(modalService, MyMusicService, toastr, MessageService, fb) {
        var _this = this;
        this.modalService = modalService;
        this.MyMusicService = MyMusicService;
        this.toastr = toastr;
        this.MessageService = MessageService;
        this.fb = fb;
        this.dtOptions = {};
        this.show_filter = false;
        this.tab_cnt = 1;
        this.audio_file = '';
        this.image_upload = '';
        this.edit_image = 'img/profile-img.png';
        this.trackdata = {};
        this.tracklist = [];
        this.show_spinner = false;
        this.audio_ins = [];
        this.track_url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].ARTIST_TRACK;
        this.userinfo = '';
        this.music_type_list = [];
        this.contest_list = [];
        this.contest_id = '';
        this.add_track_img = '';
        this.add_track_audio = '';
        this.share_data = {};
        this.share_form_validation = false;
        this.user = '';
        this.track_data = {};
        this.userinfo = JSON.parse(localStorage.getItem('user'));
        this.subscription = this.MessageService.getMessage().subscribe(function (response) {
            if (response && response['list'] != 1) {
                _this.audio_ins.forEach(function (ele, idx) { _this.audio_ins[idx] = false; });
            }
            if (response && response['action'] == 'stop' && response['list'] == 1) {
                _this.audio_ins[response['index']] = false;
            }
            if (response && response['action'] == 'start' && response['list'] == 1) {
                _this.audio_ins[response['index']] = true;
            }
            if (response && response['list'] == 1 && response['action'] == 'next' || response['action'] == 'prev') {
                if (response['track_action'] && response['track_action'] == 'pause') {
                    _this.audio_ins.forEach(function (ele, idx) { _this.audio_ins[idx] = false; });
                    _this.audio_ins[response['index']] = true;
                }
            }
        });
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            serverSide: true,
            processing: true,
            searching: false,
            ordering: false,
            lengthChange: false,
            responsive: true,
            ajax: function (dataTablesParameters, callback) {
                console.log(dataTablesParameters);
                setTimeout(function () {
                    that.audio_ins = [];
                    that.MyMusicService.getAllTrack(dataTablesParameters).subscribe(function (response) {
                        that.tracklist = response['track']['music'];
                        that.tracklist.forEach(function (ele) { that.audio_ins.push(false); });
                        callback({
                            recordsTotal: response['track']['recordsTotal'],
                            recordsFiltered: response['track']['recordsTotal'],
                            data: []
                        });
                    });
                }, 0);
            },
            columns: [
                { data: '' },
                { data: '' },
                { data: '' },
                { data: '' },
                { data: '' },
                { data: '' },
                { data: '' }
            ]
        };
        this.share_form = this.fb.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].email]]
        });
        this.share_form_phone = this.fb.group({
            phone: ['', [__WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].minLength(10)]]
        });
    }
    MyMusicComponent.prototype.ngOnInit = function () {
        // this.getAllTrack();
        this.getAllMusicType();
        this.getAllContest();
    };
    MyMusicComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    };
    MyMusicComponent.prototype.openShareTrackModel = function (content, index) {
        this.track_data = this.tracklist[index];
        this.modalRef = this.modalService.open(content, { centered: true, windowClass: 'modal-wrapper', backdrop: true });
    };
    MyMusicComponent.prototype.openEmailShareTrackModel = function (content) {
        if (this.userinfo) {
            this.share_data = {};
            this.emailmodalRef = this.modalService.open(content, { centered: true, backdrop: true });
        }
        else {
            this.toastr.info('Login first to share track via email', 'Information!');
        }
    };
    MyMusicComponent.prototype.openPhoneShareTrackModel = function (content) {
        if (this.userinfo) {
            this.share_data = {};
            this.phonemodalRef = this.modalService.open(content, { centered: true, backdrop: true });
        }
        else {
            this.toastr.info('Login first to share track via sms', 'Information!');
        }
    };
    MyMusicComponent.prototype.toggleFilter = function () {
        this.show_filter = !this.show_filter;
    };
    MyMusicComponent.prototype.tabChanged = function (val) {
        this.tab_cnt = val;
    };
    MyMusicComponent.prototype.changeAudio = function (event) {
        var file = event.target.files[0];
        console.log('audio file', file);
        var allow_types = ['audio/mpeg', 'audio/x-aiff', 'audio/vnd.wav', "audio/mp3", "audio/wav"];
        if (event.target.files.length > 0) {
            if (allow_types.indexOf(file.type) == -1) {
                this.toastr.error('Invalid file format.', 'Error!');
                return false;
            }
            this.audio_file = file;
        }
    };
    MyMusicComponent.prototype.changeFile = function (event) {
        var _this = this;
        var file = event.target.files[0];
        if (event.target.files.length > 0) {
            var allow_types = ['image/png', 'image/jpg', 'image/jpeg'];
            if (allow_types.indexOf(file.type) == -1) {
                this.toastr.error('Invalid file format.', 'Error!');
                return false;
            }
            this.image_upload = file;
            var reader = new FileReader();
            reader.onload = function (e) {
                var data = {};
                var imageBuffer = e.target.result;
                _this.add_track_img = imageBuffer;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    MyMusicComponent.prototype.changeTrackImage = function (event) {
        var _this = this;
        var file = event.target.files[0];
        if (event.target.files.length > 0) {
            var allow_types = ['image/png', 'image/jpg', 'image/jpeg'];
            if (allow_types.indexOf(file.type) == -1) {
                this.toastr.error('Invalid file format.', 'Error!');
                return false;
            }
            this.trackdata.image = file;
            var reader = new FileReader();
            reader.onload = function (e) {
                var data = {};
                var imageBuffer = e.target.result;
                _this.edit_image = imageBuffer;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    MyMusicComponent.prototype.openModal = function (content) {
        this.trackdata = {};
        this.add_track_img = '';
        this.add_track_audio = '';
        this.modal_ref = this.modalService.open(content, { centered: true, windowClass: 'add-track-popup', backdrop: 'static' });
    };
    // open edit track model
    MyMusicComponent.prototype.openEditTrackModal = function (content, obj) {
        this.trackdata = __assign({}, obj);
        console.log(obj);
        if (!obj.description || obj.description == "undefined") {
            this.trackdata['description'] = '';
        }
        if (obj.image) {
            this.edit_image = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].ARTIST_TRACK + obj.image;
        }
        else {
            this.edit_image = 'img/profile-img.png';
        }
        this.modal_ref = this.modalService.open(content, { centered: true, backdrop: 'static', windowClass: 'add-track-popup' });
    };
    // Open contest modal
    MyMusicComponent.prototype.openContestModal = function (content, obj) {
        this.trackdata = obj;
        this.modal_ref = this.modalService.open(content, { centered: true, windowClass: 'new-add-track-popup', backdrop: 'static' });
    };
    MyMusicComponent.prototype.addTrack = function () {
        var _this = this;
        if (this.trackdata && this.trackdata.name && this.trackdata.price && this.trackdata.price > 0 && this.audio_file && this.image_upload) {
            var formdata = new FormData();
            formdata.append('name', this.trackdata.name);
            formdata.append('price', this.trackdata.price);
            formdata.append('audio', this.audio_file);
            formdata.append('image', this.image_upload);
            formdata.append('description', this.trackdata.description);
            this.show_spinner = true;
            this.MyMusicService.addTrack(formdata).subscribe(function (response) {
                _this.trackdata = {};
                _this.audio_file = '';
                _this.image_upload = '';
                _this.toastr.success(response['message'], 'Success!');
                _this.datatableElement.dtInstance.then(function (dtInstance) {
                    dtInstance.draw();
                });
                _this.modal_ref.close();
            }, function (error) {
                _this.toastr.error(error['error'].message, 'Error!');
                _this.show_spinner = false;
            }, function () {
                _this.show_spinner = false;
            });
        }
        else if (!this.audio_file) {
            this.toastr.error('Please select audio file', 'Error!');
        }
        else if (!this.image_upload) {
            this.toastr.error('Please select track image', 'Error!');
        }
        else if (!this.trackdata.name) {
            this.toastr.error('Please select track name', 'Error!');
        }
        else if (!this.trackdata.price) {
            this.toastr.error('Please select track price', 'Error!');
        }
        else if (this.trackdata.price < 0) {
            this.toastr.error('Track price must be positive value.', 'Error!');
        }
        else {
            this.toastr.error('Please provide necessary details', 'Error!');
        }
    };
    // Get all track
    MyMusicComponent.prototype.getAllTrack = function () {
        this.audio_ins = [];
        // this.MyMusicService.getAllTrack().subscribe(response => {
        //   this.tracklist = response['track'];
        //   this.tracklist.forEach((ele) => {this.audio_ins.push(false);});
        // });
    };
    // Remove track by id
    MyMusicComponent.prototype.removeTrack = function (id) {
        var _this = this;
        var thi = this;
        __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default()({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (flag) {
            if (flag.value) {
                thi.MyMusicService.deleteTrackById(id).subscribe(function (response) {
                    thi.toastr.success(response['message'], 'Success!');
                    _this.datatableElement.dtInstance.then(function (dtInstance) {
                        dtInstance.draw();
                    });
                }, function (error) {
                    thi.toastr.error(error['error'].message, 'Error!');
                });
            }
        });
    };
    // update track
    MyMusicComponent.prototype.updateTrack = function () {
        var _this = this;
        this.show_spinner = true;
        if (this.trackdata && this.trackdata.name && this.trackdata.price && this.trackdata.price > 0 && this.trackdata.image) {
            var formdata = new FormData();
            formdata.append('name', this.trackdata.name);
            formdata.append('price', this.trackdata.price);
            formdata.append('image', this.trackdata.image);
            formdata.append('description', this.trackdata.description);
            this.MyMusicService.updateTrack(formdata, this.trackdata._id).subscribe(function (response) {
                if (!response['track']['image']) {
                    _this.edit_image = 'img/profile-img.png';
                }
                _this.datatableElement.dtInstance.then(function (dtInstance) {
                    dtInstance.draw();
                });
                _this.toastr.success(response['message'], 'Success!');
                _this.modal_ref.close();
            }, function (error) {
                _this.toastr.error(error['error'].message, 'Error!');
                _this.show_spinner = false;
            }, function () {
                _this.show_spinner = false;
            });
        }
        else if (!this.trackdata.image) {
            this.toastr.error('Please select track image', 'Error!');
        }
        else if (!this.trackdata.name) {
            this.toastr.error('Please select track name', 'Error!');
        }
        else if (!this.trackdata.price) {
            this.toastr.error('Please select track price', 'Error!');
        }
        else if (this.trackdata.price < 0) {
            this.toastr.error('Track price must be positive.', 'Error!');
        }
        else {
            this.toastr.error('Please provide necessary details', 'Error!');
        }
    };
    // Remove track image
    MyMusicComponent.prototype.removeTrackImage = function (id) {
        var thi = this;
        __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default()({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (flag) {
            var _this = this;
            if (flag.value) {
                thi.MyMusicService.deleteTrackImageById(id).subscribe(function (response) {
                    thi.getAllTrack();
                    thi.edit_image = 'img/profile-img.png';
                    delete _this.trackdata['image'];
                    thi.toastr.success(response['message'], 'Success!');
                }, function (error) {
                    thi.toastr.error(error['error'].message, 'Error!');
                });
            }
        });
    };
    // Play audio
    MyMusicComponent.prototype.playAudio = function (name, index, data) {
        var _this = this;
        // let audio = new Audio();
        // audio.src = this.track_url+name;
        // audio.load();
        // audio.play();
        // if(!this.audio_ins.hasOwnProperty(index)) {
        //   this.audio_ins[index] = audio;
        // }
        data.forEach(function (ele, idx) {
            _this.audio_ins[idx] = false;
        });
        this.audio_ins[index] = true;
        this.MessageService.sendMessage({ data: data, index: index, action: 'start', list: 1 });
    };
    // Stop audio
    MyMusicComponent.prototype.stopAudio = function (index, data) {
        var _this = this;
        // console.log(this.audio_ins[index]);
        // this.audio_ins[index].pause();
        // this.audio_ins[index].currentTime = 0;
        // // this.audio_ins[index].stop();
        // delete this.audio_ins[index];
        data.forEach(function (ele, idx) {
            _this.audio_ins[idx] = false;
        });
        this.MessageService.sendMessage({ data: data, index: index, action: 'stop', list: 1 });
    };
    // Get all music type
    MyMusicComponent.prototype.getAllMusicType = function () {
        var _this = this;
        this.MyMusicService.getAllMusicType().subscribe(function (response) {
            _this.music_type_list = response['music'];
        });
    };
    // Get all contest
    MyMusicComponent.prototype.getAllContest = function () {
        var _this = this;
        this.MyMusicService.getAllContest().subscribe(function (response) {
            _this.contest_list = response['contest'];
        });
    };
    // Add a track to contest
    MyMusicComponent.prototype.addTrackToContest = function () {
        var _this = this;
        if (this.contest_id) {
            var data = {
                contest_id: this.contest_id,
                track_id: this.trackdata._id
            };
            this.show_spinner = true;
            this.MyMusicService.addTrackToContest(data).subscribe(function (response) {
                _this.contest_id = '';
                _this.modal_ref.close();
                _this.datatableElement.dtInstance.then(function (dtInstance) {
                    dtInstance.draw();
                });
                _this.toastr.success(response['message'], 'Success!');
            }, function (error) {
                _this.toastr.error(error['error'].message, 'Error!');
                _this.show_spinner = false;
            }, function () {
                _this.show_spinner = false;
            });
        }
        else {
            this.toastr.error('Please select at least one contest', 'Error!');
        }
    };
    // Update download status
    MyMusicComponent.prototype.updateTrackDownLoadStatus = function (id) {
        var _this = this;
        this.MyMusicService.trackDownload(id).subscribe(function (response) {
            _this.toastr.success(response['message'], 'Success!');
            _this.datatableElement.dtInstance.then(function (dtInstance) {
                dtInstance.draw();
            });
        }, function (error) {
            _this.toastr.error(error['error'].message, 'Error!');
        });
    };
    // share on facebook
    MyMusicComponent.prototype.shareOnFacebook = function () {
        var track = this.track_data;
        console.log(track);
        var url = 'http://' + window.location.host + '/artist_profile/' + track['artist_id']['_id'] + '/track/' + track['_id'] + '/comments';
        var str = "Track Name: " + track['name'] + "\nArtist: " + track['artist_id']['first_name'] + ' ' + track['artist_id']['last_name'] + '\nDescription: ' + track['description'];
        // var facebookWindow = window.open('https://www.facebook.com/sharer.php?s=100&p[summary]='+encodeURIComponent(str)+"&p[url]="+encodeURIComponent(url), 'facebook-popup', 'height=350,width=600');
        // if(facebookWindow.focus) { facebookWindow.focus(); }
        FB.ui({
            method: 'share_open_graph',
            action_type: 'og.likes',
            action_properties: JSON.stringify({
                object: {
                    'og:url': url,
                    'og:title': 'AOM',
                    'og:description': str
                }
            })
        }, function (response) { });
    };
    // share on twitter
    MyMusicComponent.prototype.shareOnTwitter = function () {
        var track = this.track_data;
        console.log(track);
        var url = 'http://' + window.location.host + '/artist_profile/' + track['artist_id']['_id'] + '/track/' + track['_id'] + '/comments';
        var str = "Track Name: " + track['name'] + "\nArtist: " + track['artist_id']['first_name'] + ' ' + track['artist_id']['last_name'] + '\nDescription: ' + track['description'];
        var twitterWindow = window.open('https://twitter.com/share?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(str), 'twitter-popup', 'height=350,width=600');
        if (twitterWindow.focus) {
            twitterWindow.focus();
        }
    };
    // share track via email
    MyMusicComponent.prototype.share_via_email = function (flag) {
        var _this = this;
        if (flag) {
            this.share_form_validation = !flag;
            this.show_spinner = true;
            var track = this.track_data;
            var url = 'http://' + window.location.host + '/artist_profile/' + track['artist_id']['_id'] + '/track/' + track['_id'] + '/comments';
            var data = {
                email: this.share_data['email'],
                track_id: track['_id'],
                url: url
            };
            this.MyMusicService.shareTrackViaEmail(data).subscribe(function (response) {
                _this.toastr.success(response['message'], 'Success!');
                _this.emailmodalRef.close();
            }, function (error) {
                _this.toastr.error(error['error'].message, 'Error!');
                _this.show_spinner = false;
            }, function () {
                _this.show_spinner = false;
            });
        }
        else {
            this.share_form_validation = !flag;
        }
    };
    // share via sms
    MyMusicComponent.prototype.share_via_sms = function (flag) {
        var _this = this;
        if (flag) {
            this.share_form_validation = !flag;
            this.show_spinner = true;
            var track = this.track_data;
            var url = 'http://' + window.location.host + '/artist_profile/' + track['artist_id']['_id'] + '/track/' + track['_id'] + '/comments';
            var data = {
                phone_no: this.share_data['phone_no'],
                track_id: track['_id'],
                url: url
            };
            this.MyMusicService.shareTrackViaSms(data).subscribe(function (response) {
                _this.toastr.success(response['message'], 'Success!');
                _this.emailmodalRef.close();
                _this.share_data = {};
            }, function (error) {
                _this.toastr.error(error['error'].message, 'Error!');
                _this.show_spinner = false;
            }, function () {
                _this.show_spinner = false;
            });
        }
        else {
            this.share_form_validation = !flag;
        }
    };
    // copy share track link
    MyMusicComponent.prototype.copy_link = function () {
        var track = this.track_data;
        console.log(track);
        var url = 'http://' + window.location.host + '/artist_profile/' + track['artist_id']['_id'] + '/track/' + track['_id'] + '/comments';
        var textArea = document.createElement("textarea");
        textArea.value = url;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_6_angular_datatables__["a" /* DataTableDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6_angular_datatables__["a" /* DataTableDirective */])
    ], MyMusicComponent.prototype, "datatableElement", void 0);
    MyMusicComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-music',
            template: __webpack_require__("../../../../../src/app/dashboard-layout/my_music/my_music.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_4__my_music_service__["a" /* MyMusicService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_5__shared_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormBuilder */]])
    ], MyMusicComponent);
    return MyMusicComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard-layout/my_music/my_music.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyMusicService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { Http, Headers, RequestOptions, Response } from '@angular/http';



var MyMusicService = /** @class */ (function () {
    function MyMusicService(http) {
        this.http = http;
        this.api_host = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].API_URL;
        this.user = '';
        this.headers = '';
        this.user = JSON.parse(localStorage.getItem('user'));
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'x-access-token': this.user.token });
    }
    // Add artist track
    MyMusicService.prototype.addTrack = function (data) {
        return this.http.post(this.api_host + "/artist/track", data, { headers: this.headers });
    };
    // Get All track details
    MyMusicService.prototype.getAllTrack = function (data) {
        return this.http.post(this.api_host + "/artist/track/tracks", data, { headers: this.headers });
    };
    // Remove track by id
    MyMusicService.prototype.deleteTrackById = function (id) {
        return this.http.delete(this.api_host + "/artist/track/" + id, { headers: this.headers });
    };
    // Edit track detail
    MyMusicService.prototype.updateTrack = function (data, id) {
        return this.http.put(this.api_host + "/artist/track/" + id, data, { headers: this.headers });
    };
    // Remove track image by id
    MyMusicService.prototype.deleteTrackImageById = function (id) {
        return this.http.delete(this.api_host + "/artist/track/image/" + id, { headers: this.headers });
    };
    // get All music type
    MyMusicService.prototype.getAllMusicType = function () {
        return this.http.get(this.api_host + "/music_type");
    };
    // Get All contest details
    MyMusicService.prototype.getAllContest = function () {
        return this.http.get(this.api_host + "/artist/contest", { headers: this.headers });
    };
    // Add track to contest
    MyMusicService.prototype.addTrackToContest = function (data) {
        return this.http.post(this.api_host + "/artist/participate", data, { headers: this.headers });
    };
    // change status of track download
    MyMusicService.prototype.trackDownload = function (id) {
        return this.http.post(this.api_host + "/artist/track/change_status_of_download", { track_id: id }, { headers: this.headers });
    };
    // share track via email
    MyMusicService.prototype.shareTrackViaEmail = function (data) {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'x-access-token': this.user.token });
        return this.http.post(this.api_host + "/user/track/share_track_by_mail", data, { headers: this.headers });
    };
    // share track via email
    MyMusicService.prototype.shareTrackViaSms = function (data) {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'x-access-token': this.user.token });
        return this.http.post(this.api_host + "/user/track/share_track_by_sms", data, { headers: this.headers });
    };
    MyMusicService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], MyMusicService);
    return MyMusicService;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard-layout/my_profile/myProfile.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"edit-profile-wrap\" *ngIf=\"userdata.type == 'artist'\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-3\">\n                <div class=\"profile-tabs\">\n                    <ul class=\"nav nav-tabs\" id=\"myTab\">\n                        <li class=\"nav-item\"><a class=\"nav-link {{tab_cnt == 1 ? 'active' : '' }}\" (click)=\"tabChange(1)\" data-toggle=\"tab\" href=\"javascript:;\">Profile</a></li>\n                        <li class=\"nav-item\"><a class=\"nav-link {{tab_cnt == 2 ? 'active' : '' }}\" data-toggle=\"tab\" (click)=\"tabChange(2)\" href=\"javascript:;\">Settings</a></li>\n                        <li class=\"nav-item\"><a class=\"nav-link {{tab_cnt == 3 ? 'active' : '' }}\" data-toggle=\"tab\" (click)=\"tabChange(3)\" href=\"javascript:;\">Payments</a></li>\n                        <li class=\"nav-item\"><a class=\"nav-link {{tab_cnt == 4 ? 'active' : '' }}\" data-toggle=\"tab\" (click)=\"tabChange(4)\" href=\"javascript:;\">Media</a></li>\n                        <li class=\"nav-item\"><a class=\"nav-link {{tab_cnt == 5 ? 'active' : '' }}\" data-toggle=\"tab\" (click)=\"tabChange(5)\" href=\"javascript:;\">Analytics</a></li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"col-lg-10 col-md-9 col-sm-9 col-xs-9\">\n                <div class=\"rofile-tab-content\">\n                    <div class=\"tab-content\">\n                        <div class=\"tab-pane fade {{tab_cnt == 1 ? 'show active' : '' }} \" id=\"profile\">\n                            <div class=\"edit-cover\">\n                                <form [formGroup]=\"artist_profile\">\n                                    <div class=\"upload-cover\">\n                                        <img [src]=\"default_cover_img\" alt=\"Edit cover Image\">\n                                        <span class=\"up_text\">Update Photo</span>\n                                        <input type=\"file\" name=\"my_doc_upload\" formControlName=\"upload\" id=\"cover_upload1\" multiple=\"false\" (change)=\"updateCoverImage($event)\">\n                                        <a data-fancybox data-animation-duration=\"700\" data-src=\"#delete\" href=\"javascript:;\" *ngIf=\"userdata.cover_image\" (click)=\"removeArtistCoverImage()\" class=\"delete\"><i class=\"fa fa-trash\"></i></a>\n                                    </div>\n                                    <div class=\"edit-details\">\n                                        <div class=\"edit-head\" >Your Details</div>\n                                        <div class=\"row\">\n                                            <div class=\"col-md-3 col-sm-12 col-xs-12\">\n                                                <div class=\"edit-profile-picture\">\n                                                    <div class=\"upload-cover\">\n                                                        <img [src]=\"default_profile_img\" alt=\"Edit cover Image\">\n                                                        <span class=\"up_text\">Update Photo</span>\n                                                        <input type=\"file\" formControlName=\"cover\" name=\"upload\" id=\"cover_upload\" (change)=\"updateProfileImage($event)\">\n                                                        <a data-fancybox data-animation-duration=\"700\" data-src=\"#delete\" *ngIf=\"userdata.image\" href=\"javascript:;\" class=\"delete\" (click)=\"removeArtistImage()\"><i class=\"fa fa-trash\"></i></a>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-9 col-sm-12 col-xs-12\">\n                                                <div class=\"form-details\">\n\n                                                    <div class=\"form-group\">\n                                                        <label for=\"fname\">First Name</label>\n                                                        <input type=\"text\" class=\"form-control\" formControlName=\"fname\" id=\"fname5\" name=\"fname\" [(ngModel)]=\"userdata.first_name\" placeholder=\"First Name\">\n                                                        <div class=\"cust_err_msg\" *ngIf=\"artistProfileValidation && !artist_profile.controls['fname'].valid\">\n                                                            <span *ngIf=\"artist_profile.controls['fname'].errors['required']\" class=\"text-danger\">First name is required.</span>\n                                                        </div>\n                                                    </div>\n\n                                                    <div class=\"form-group pwd-grp\">\n                                                        <label for=\"lanem\">Last Name</label>\n                                                        <input type=\"text\" class=\"form-control\" id=\"lname2\" formControlName=\"lname\" name=\"lname\" [(ngModel)]=\"userdata.last_name\" placeholder=\"Last Name\">\n                                                        <div class=\"cust_err_msg\" *ngIf=\"artistProfileValidation && !artist_profile.controls['lname'].valid\">\n                                                            <span *ngIf=\"artist_profile.controls['lname'].errors['required']\" class=\"text-danger\">Last name is required.</span>\n                                                        </div>\n                                                    </div>\n\n                                                    <div class=\"form-group gender-grp\">\n                                                        <label for=\"geder\">Gender</label>\n                                                        <select class=\"form-control\" id=\"gender\" formControlName=\"gender\" name=\"gender\" [(ngModel)]=\"userdata.gender\">\n                                                            <option value=\"male\">Male</option>\n                                                            <option value=\"female\">Female</option>\n                                                        </select>\n                                                        <div class=\"cust_err_msg\" *ngIf=\"artistProfileValidation && !artist_profile.controls['gender'].valid\">\n                                                            <span *ngIf=\"artist_profile.controls['gender'].errors['required']\" class=\"text-danger\">Gender is required.</span>\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"form-group\">\n                                                        <div class=\"date-of-birth\">\n                                                            <label for=\"date\">Birthday Date</label>\n                                                            <div class=\"form-group\">\n                                                                <select class=\"form-control\" id=\"day\" formControlName=\"day\" name=\"day\" [(ngModel)]=\"userdata.day\">\n                                                                    <option value=\"\">Day</option>\n                                                                    <option *ngFor=\"let d of day\" value=\"{{d}}\">{{d}}</option>\n                                                                </select>\n                                                                <div class=\"cust_err_msg\" *ngIf=\"artistProfileValidation && !artist_profile.controls['day'].valid\">\n                                                                    <span *ngIf=\"artist_profile.controls['day'].errors['required']\" class=\"text-danger\">Day is required.</span>\n                                                                </div>\n                                                            </div>\n                                                            <div class=\"form-group\">\n                                                                <select class=\"form-control\" id=\"month\" formControlName=\"month\" name=\"month\" [(ngModel)]=\"userdata.month\">\n                                                                    <option value=\"\">Month</option>\n                                                                    <option *ngFor=\"let m of month\" value=\"{{m}}\">{{m}}</option>\n                                                                </select>\n                                                                <div class=\"cust_err_msg\" *ngIf=\"artistProfileValidation && !artist_profile.controls['month'].valid\">\n                                                                    <span *ngIf=\"artist_profile.controls['month'].errors['required']\" class=\"text-danger\">Month is required.</span>\n                                                                </div>\n                                                            </div>\n                                                            <div class=\"form-group\">\n                                                                <select class=\"form-control\" id=\"year\" formControlName=\"year\" name=\"year\" [(ngModel)]=\"userdata.year\">\n                                                                    <option value=\"\">Year</option>\n                                                                    <option *ngFor=\"let y of year\" value=\"{{y}}\">{{y}}</option>\n                                                                </select>\n                                                                <div class=\"cust_err_msg\" *ngIf=\"artistProfileValidation && !artist_profile.controls['year'].valid\">\n                                                                    <span *ngIf=\"artist_profile.controls['year'].errors['required']\" class=\"text-danger\">Year is required.</span>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n\n                                                    <div class=\"form-group music-grp\">\n                                                        <label for=\"musictype\">Music Type</label>\n                                                        <select class=\"form-control\" id=\"musictype\" formControlName=\"music_type\" name=\"music_type\" [(ngModel)]=\"userdata.music_type['_id']\">\n                                                            <option *ngFor=\"let type of music_types\" value=\"{{type._id}}\">{{type.name}}</option>\n                                                        </select>\n                                                        <div class=\"cust_err_msg\" *ngIf=\"artistProfileValidation && !artist_profile.controls['music_type'].valid\">\n                                                            <span *ngIf=\"artist_profile.controls['music_type'].errors['required']\" class=\"text-danger\">Music is required.</span>\n                                                        </div>\n                                                    </div>\n                                                    \n                                                    <div class=\"form-group home-grp\">\n                                                        <label for=\"hometown\">Home Town</label>\n                                                        <input class=\"form-control\" placeholder=\"zipcode\" formControlName=\"zipcode\" name=\"zipcode\" [(ngModel)]=\"userdata.zipcode\" />\n                                                        <div class=\"cust_err_msg\" *ngIf=\"artistProfileValidation && !artist_profile.controls['zipcode'].valid\">\n                                                            <span *ngIf=\"artist_profile.controls['zipcode'].errors['required']\" class=\"text-danger\">Zipcode is required.</span>\n                                                        </div>\n                                                    </div>\n\n                                                    <div class=\"form-group home-grp\">\n                                                        <label for=\"hometown\">Phone Number</label>\n                                                        <input class=\"form-control\" placeholder=\"phone number\" formControlName=\"phone\" name=\"phone\" [(ngModel)]=\"userdata.phone_no\" />\n                                                        <div class=\"cust_err_msg\" *ngIf=\"artistProfileValidation && !artist_profile.controls['phone'].valid\">\n                                                            <span *ngIf=\"artist_profile.controls['phone'].errors['required']\" class=\"text-danger\">Phone Number is required.</span>\n                                                            <span *ngIf=\"(artist_profile.controls['phone'].errors['maxlength'] || artist_profile.controls['phone'].errors['minlength'])  && artist_profile.controls['phone'].dirty\" class=\"text-danger\">Please enter valid phone number.</span>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"additional-details\">\n                                        <div class=\"edit-head\">Additional Information</div>\n                                        <div class=\"about-you\">\n                                            <label for=\"fname\">Describe Yourself</label>\n                                            <textarea class=\"form-control\" name=\"description\" formControlName=\"description\" [(ngModel)]=\"userdata.description\" placeholder=\"Add about yourself...\"></textarea>\n                                        </div>\n                                    </div>\n                                    <div class=\"social-details\">\n                                        <div class=\"edit-head\">Social Media</div>\n                                        <div class=\"social-acc\">\n                                            <div class=\"social-block\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"facebook\">Facebook</label>\n                                                    <input type=\"text\" class=\"form-control\" id=\"fb\" formControlName=\"share_url_fb\" placeholder=\"Add Account\" name=\"fb\" [(ngModel)]=\"userdata.social_media['facebook']\">\n                                                    <img src=\"img/fb.png\" alt=\"Facebook\">\n                                                </div>\n                                            </div>\n                                            <div class=\"social-block\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"inst\">Instagram</label>\n                                                    <input type=\"text\" class=\"form-control\" id=\"fname\" formControlName=\"share_url_insta\" placeholder=\"Add Account\" name=\"insta\" [(ngModel)]=\"userdata.social_media['instagram']\">\n                                                    <img src=\"img/inst.png\" alt=\"Facebook\">\n                                                </div>\n                                            </div>\n                                            <div class=\"social-block\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"facebook\">Twitter</label>\n                                                    <input type=\"text\" class=\"form-control\" id=\"fb1\" formControlName=\"share_url_twit\" placeholder=\"Add Account\" name=\"twit\" [(ngModel)]=\"userdata.social_media['twitter']\">\n                                                    <img src=\"img/twitter.png\" alt=\"Facebook\">\n                                                </div>\n                                            </div>\n                                            <div class=\"social-block\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"inst\">Youtube</label>\n                                                    <input type=\"text\" class=\"form-control\" id=\"fname1\" formControlName=\"share_url_youtube\" placeholder=\"Add Account\" name=\"youtube\" [(ngModel)]=\"userdata.social_media['youtube']\">\n                                                    <img src=\"img/youtube.png\" alt=\"Facebook\">\n                                                </div>\n                                            </div>\n                                            <div class=\"social-block\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"inst\">Soundcloud</label>\n                                                    <input type=\"text\" class=\"form-control\" id=\"fname2\" formControlName=\"share_url_sound\" placeholder=\"Add Account\" name=\"sound\" [(ngModel)]=\"userdata.social_media['sound_cloud']\">\n                                                    <img src=\"img/soundcloud.png\" alt=\"Facebook\">\n                                                </div>\n                                            </div>\n\n                                        </div>\n                                    </div>\n                                    <div class=\"button_group\">\n                                        <a href=\"#\" class=\"cancel-btn\">Cancel</a>\n                                        <button type=\"submit\" (click)=\"update(artist_profile.valid)\" [disabled]=\"show_spinner\" class=\"save-btn btn btn-primary\">Save <i *ngIf=\"show_spinner\" class=\"fa fa-spinner fa-spin\"></i></button>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n\n                        <div class=\"tab-pane fade {{tab_cnt == 2 ? 'show active' : '' }}\" id=\"settings\">\n                            <div class=\"update-email\">\n                                <div class=\"email-form\">\n                                    <div class=\"edit-head\">Update Your Email</div>\n                                    <form (ngSubmit)=\"changeEmail()\">\n                                        <div class=\"form-group\">\n                                            <label for=\"yemail\">Your Email</label>\n                                            <input type=\"email\" name=\"old\" [(ngModel)]=\"change_email.old\" class=\"form-control\" id=\"yemail\" placeholder=\"Your Email\" required>\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <label for=\"nemail\">New Email</label>\n                                            <input type=\"email\" name=\"new\" [(ngModel)]=\"change_email.new\" class=\"form-control\" id=\"nemail\" placeholder=\"New Name\" required>\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <label for=\"remail\">Repeat New Email</label>\n                                            <input type=\"email\" name=\"repeat\" [(ngModel)]=\"change_email.repeat\" class=\"form-control\" id=\"remail\" placeholder=\"Repeat Email\" required>\n                                        </div>\n                                        <div class=\"button_group\">\n                                            <button type=\"submit\" [disabled]=\"show_spinner\" class=\"update-btn\">update <i *ngIf=\"show_spinner\" class=\"fa fa-spinner fa-spin\"></i></button>\n                                        </div>\n                                    </form>\n                                </div>\n                                <div class=\"password-form\">\n                                    <div class=\"edit-head\">Update Password</div>\n                                    <form (ngSubmit)=\"changePassword()\">\n                                        <div class=\"form-group\">\n                                            <label for=\"ypwd\">Your Password</label>\n                                            <input type=\"password\" class=\"form-control\" id=\"ypwd\" name=\"old\" [(ngModel)]=\"change_pwd.old\" placeholder=\"Your Email\">\n                                            <div class=\"pwd-icon\">\n                                                <i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n                                                <!-- <i class=\"fa fa-eye-slash\" aria-hidden=\"true\"></i> -->\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <label for=\"npwd\">New Password</label>\n                                            <input type=\"password\" class=\"form-control\" name=\"old\" [(ngModel)]=\"change_pwd.new\" id=\"npwd\" placeholder=\"New Name\">\n                                            <div class=\"pwd-icon\">\n                                                <i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n                                                <!-- <i class=\"fa fa-eye-slash\" aria-hidden=\"true\"></i> -->\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <label for=\"rpwd\">Repeat New Password</label>\n                                            <input type=\"password\" class=\"form-control\" id=\"rpwd\" name=\"old\" [(ngModel)]=\"change_pwd.repeat\" placeholder=\"Repeat Email\">\n                                            <div class=\"pwd-icon\">\n                                                <i class=\"fa fa-eye \" aria-hidden=\"true\"></i>\n                                                <!-- <i class=\"fa fa-eye-slash\" aria-hidden=\"true\"></i> -->\n                                            </div>\n                                        </div>\n                                        <div class=\"button_group\">\n                                            <button type=\"submit\" class=\"update-btn\">update</button>\n                                        </div>\n                                    </form>\n                                </div>\n                                <div class=\"notification\">\n                                    <div class=\"edit-head\">Notifications</div>\n                                    <div class=\"notify-by-email\">\n                                        <div class=\"edit-head\">Notifications by Email</div>\n                                        <ul>\n                                            <li class=\"followers\">\n                                                <p>New Followers</p>\n                                                <div class=\"f-toggle\">\n                                                    <label class=\"switch\">\n                                                        <input type=\"checkbox\" (click)=\"updateNotificationSetting('like_by_email', $event.target.checked)\" [checked]=\"userdata['notification_settings']['like_by_email']\">\n                                                        <span class=\"slider round\"></span>\n                                                    </label>\n                                                </div>\n                                            </li>\n                                            <li class=\"comments\">\n                                                <p>Comments</p>\n                                                <div class=\"f-toggle\">\n                                                    <label class=\"switch\">\n                                                        <input type=\"checkbox\" (click)=\"updateNotificationSetting('comment_by_email', $event.target.checked)\" [checked]=\"userdata['notification_settings']['comment_by_email']\">\n                                                        <span class=\"slider round\"></span>\n                                                    </label>\n                                                </div>\n                                            </li>\n                                            <li class=\"message\">\n                                                <p>Message</p>\n                                                <div class=\"f-toggle\">\n                                                    <label class=\"switch\">\n                                                        <input type=\"checkbox\" checked>\n                                                        <span class=\"slider round\"></span>\n                                                    </label>\n                                                </div>\n                                            </li>\n                                        </ul>\n                                    </div>\n                                    <div class=\"notify-by-sms\">\n                                        <div class=\"edit-head\">Notifications by SMS</div>\n                                        <ul>\n                                            <li class=\"followers\">\n                                                <p>New Followers</p>\n                                                <div class=\"f-toggle\">\n                                                    <label class=\"switch\">\n                                                        <input type=\"checkbox\" (click)=\"updateNotificationSetting('like_by_sms', $event.target.checked)\" [checked]=\"userdata['notification_settings']['like_by_sms']\">\n                                                        <span class=\"slider round\"></span>\n                                                    </label>\n                                                </div>\n                                            </li>\n                                            <li class=\"comments\">\n                                                <p>Comments</p>\n                                                <div class=\"f-toggle\">\n                                                    <label class=\"switch\">\n                                                        <input type=\"checkbox\" (click)=\"updateNotificationSetting('comment_by_sms', $event.target.checked)\" [checked]=\"userdata['notification_settings']['comment_by_sms']\">\n                                                        <span class=\"slider round\"></span>\n                                                    </label>\n                                                </div>\n                                            </li>\n                                            <li class=\"message\">\n                                                <p>Message</p>\n                                                <div class=\"f-toggle\">\n                                                    <label class=\"switch\">\n                                                        <input type=\"checkbox\" checked>\n                                                        <span class=\"slider round\"></span>\n                                                    </label>\n                                                </div>\n                                            </li>\n                                        </ul>\n                                    </div>\n                                    <div class=\"on-side-alert\">\n                                        <div class=\"edit-head\">On Side Alerts</div>\n                                        <ul>\n                                            <li class=\"followers\">\n                                                <p>New Followers</p>\n                                                <div class=\"f-toggle\">\n                                                    <label class=\"switch\">\n                                                        <input type=\"checkbox\" checked>\n                                                        <span class=\"slider round\"></span>\n                                                    </label>\n                                                </div>\n                                            </li>\n                                            <li class=\"comments\">\n                                                <p>Comments</p>\n                                                <div class=\"f-toggle\">\n                                                    <label class=\"switch\">\n                                                        <input type=\"checkbox\">\n                                                        <span class=\"slider round\"></span>\n                                                    </label>\n                                                </div>\n                                            </li>\n                                            <li class=\"message\">\n                                                <p>Message</p>\n                                                <div class=\"f-toggle\">\n                                                    <label class=\"switch\">\n                                                        <input type=\"checkbox\" checked>\n                                                        <span class=\"slider round\"></span>\n                                                    </label>\n                                                </div>\n                                            </li>\n                                        </ul>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"tab-pane fade {{tab_cnt == 3 ? 'show active' : '' }}\" id=\"payment\">\n\n                            <ul class=\"nav nav-tabs\">\n                                <li class=\"nav-item\"><a class=\"nav-link active\" data-toggle=\"tab\" href=\"#paymentmethod\">Payment Method</a></li>\n                                <li class=\"nav-item\"><a class=\"nav-link\" data-toggle=\"tab\" href=\"#proceeds\">Your Proceeds</a></li>\n                            </ul>\n                            <div class=\"tab-content\">\n                                <div id=\"paymentmethod\" class=\"tab-pane fade show active\">\n                                    <div class=\"pay-method\">\n                                        <div class=\"edit-head\">Your Payment Method</div>\n                                        <div class=\"select-payemnt-table\">\n                                            <table>\n                                                <tr>\n                                                    <td>\n                                                        <div class=\"radio\">\n                                                            <label>\n                                                                <input type=\"radio\" value=\"\" name=\"musicgenre\" checked>\n                                                                <div class=\"radio_check\"></div>\n                                                            </label>\n                                                        </div>\n                                                    </td>\n                                                    <td>\n                                                        <img src=\"img/visa.png\" alt=\"Visa Card\">\n                                                    </td>\n                                                    <td>\n                                                        <p class=\"pay-name\">Visa</p>\n                                                    </td>\n                                                    <td>\n                                                        <p class=\"card-num\">XXXXXXXXXXX0000</p>\n                                                    </td>\n                                                    <td>\n                                                        <p class=\"pay-name\">01/2020</p>\n                                                    </td>\n                                                    <td>\n                                                        <div class=\"pay-delete\">\n                                                            <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n                                                            <span>Delete</span>\n                                                        </div>\n                                                    </td>\n                                                </tr>\n\n                                                <tr>\n                                                    <td>\n                                                        <div class=\"radio\">\n                                                            <label>\n                                                                <input type=\"radio\" value=\"\" name=\"musicgenre\">\n                                                                <div class=\"radio_check\"></div>\n                                                            </label>\n                                                        </div>\n                                                    </td>\n                                                    <td>\n                                                        <img src=\"img/paypal.png\" alt=\"Visa Card\">\n                                                    </td>\n                                                    <td>\n                                                        <p class=\"pay-name\">Paypal</p>\n                                                    </td>\n                                                    <td>\n                                                        <p class=\"card-num\">shavnmiller@gmail.com</p>\n                                                    </td>\n                                                    <td>\n                                                    </td>\n                                                    <td>\n                                                        <div class=\"pay-delete\">\n                                                            <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n                                                            <span>Delete</span>\n                                                        </div>\n                                                    </td>\n                                                </tr>\n                                            </table>\n                                            <a data-fancybox data-animation-duration=\"700\" data-src=\"#addpayment\" href=\"javascript:;\" class=\"add-payment\">\n                                                <img src=\"img/icons8-plus_mathNormal.png\" alt=\"\"> Add Payment Method\n                                            </a>\n                                        </div>\n                                    </div>\n                                    <div class=\"billing-method\">\n                                        <div class=\"edit-head\">Billing Method</div>\n                                        <form>\n                                            <div class=\"form-group\">\n                                                <label for=\"fname\">First Name</label>\n                                                <input type=\"text\" class=\"form-control\" id=\"fname4\" placeholder=\"First Name\">\n                                            </div>\n                                            <div class=\"form-group\">\n                                                <label for=\"lname\">Last Name</label>\n                                                <input type=\"text\" class=\"form-control\" id=\"lname1\" placeholder=\"Last Name\">\n                                            </div>\n                                            <div class=\"form-group\">\n                                                <label for=\"area\">Area Code</label>\n                                                <input type=\"text\" class=\"form-control\" id=\"area\" placeholder=\"Area Code\">\n                                            </div>\n                                            <div class=\"form-group street\">\n                                                <label for=\"street\">Street</label>\n                                                <input type=\"text\" class=\"form-control\" id=\"street\" placeholder=\"Street Name\">\n                                            </div>\n                                            <div class=\"form-group appartment-suit\">\n                                                <label for=\"appt\">Apartment, Suite, Building</label>\n                                                <input type=\"text\" class=\"form-control\" id=\"appt\" placeholder=\"Apartment, Suite, Building\">\n                                            </div>\n                                            <div class=\"form-group\">\n                                                <label for=\"city\">City</label>\n                                                <input type=\"text\" class=\"form-control\" id=\"city\" placeholder=\"City\">\n                                            </div>\n                                            <div class=\"form-group\">\n                                                <label for=\"state\">State</label>\n                                                <input type=\"text\" class=\"form-control\" id=\"state\" placeholder=\"State\">\n                                            </div>\n                                            <div class=\"form-group\">\n                                                <label for=\"zip\">Zip</label>\n                                                <input type=\"text\" class=\"form-control\" id=\"zip\" placeholder=\"State\">\n                                            </div>\n                                            <div class=\"button_group\">\n                                                <a href=\"#\" class=\"cancel-btn\">Cancel</a>\n                                                <a href=\"#\" class=\"update-btn\">update</a>\n                                            </div>\n                                        </form>\n                                    </div>\n                                </div>\n                                <div id=\"proceeds\" class=\"tab-pane fade\">\n                                    <div class=\"pay-meth\">\n                                        <div class=\"edit-head\">Payout Method</div>\n                                        <table>\n                                            <tr>\n                                                <td><img src=\"img/visa.png\" alt=\"Visa Card\"></td>\n                                                <td>\n                                                    <p class=\"pay-name\">Visa</p>\n                                                </td>\n                                                <td>\n                                                    <p class=\"card-num\">XXXXXXXXXXX0000</p>\n                                                </td>\n                                                <td>\n                                                    <div class=\"button_group\">\n                                                        <a href=\"#\" class=\"update-btn\">update</a>\n                                                    </div>\n                                                </td>\n                                            </tr>\n                                        </table>\n                                    </div>\n                                    <div class=\"trans-history\">\n                                        <div class=\"edit-head\">Transaction History</div>\n                                        <div class=\"transaction-table mCustomScrollbar \" data-mcs-theme=\"dark-3\">\n                                            <table>\n                                                <thead>\n                                                    <tr>\n                                                        <td>N°</td>\n                                                        <td>Track</td>\n                                                        <td>Date</td>\n                                                        <td>Time</td>\n                                                        <td>Price</td>\n                                                        <td>Status</td>\n                                                    </tr>\n                                                </thead>\n                                                <tbody>\n                                                    <tr>\n                                                        <td>1.</td>\n                                                        <td>Say Thanks</td>\n                                                        <td>May 10,2018</td>\n                                                        <td>10:34:12</td>\n                                                        <td>$1.99</td>\n                                                        <td>Finised</td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>2.</td>\n                                                        <td>Blue State of Mind</td>\n                                                        <td>May 10,2018</td>\n                                                        <td>10:34:12</td>\n                                                        <td>$1.99</td>\n                                                        <td>Finised</td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>3.</td>\n                                                        <td>Blue State of Mind</td>\n                                                        <td>May 10,2018</td>\n                                                        <td>10:34:12</td>\n                                                        <td>$1.99</td>\n                                                        <td>Finised</td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>4.</td>\n                                                        <td>Blue State of Mind</td>\n                                                        <td>May 10,2018</td>\n                                                        <td>10:34:12</td>\n                                                        <td>$1.99</td>\n                                                        <td>Finised</td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>5.</td>\n                                                        <td>Say Thanks</td>\n                                                        <td>May 10,2018</td>\n                                                        <td>10:34:12</td>\n                                                        <td>$1.99</td>\n                                                        <td>Finised</td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>6.</td>\n                                                        <td>Say Thanks</td>\n                                                        <td>May 10,2018</td>\n                                                        <td>10:34:12</td>\n                                                        <td>$1.99</td>\n                                                        <td>Finised</td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>7.</td>\n                                                        <td>Blue State of Mind</td>\n                                                        <td>May 10,2018</td>\n                                                        <td>10:34:12</td>\n                                                        <td>$1.99</td>\n                                                        <td>Finised</td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>8.</td>\n                                                        <td>Blue State of Mind</td>\n                                                        <td>May 10,2018</td>\n                                                        <td>10:34:12</td>\n                                                        <td>$1.99</td>\n                                                        <td>Finised</td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>9.</td>\n                                                        <td>Blue State of Mind</td>\n                                                        <td>May 10,2018</td>\n                                                        <td>10:34:12</td>\n                                                        <td>$1.99</td>\n                                                        <td>Finised</td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>10.</td>\n                                                        <td>Say Thanks</td>\n                                                        <td>May 10,2018</td>\n                                                        <td>10:34:12</td>\n                                                        <td>$1.99</td>\n                                                        <td>Finised</td>\n                                                    </tr>\n                                                </tbody>\n                                            </table>\n                                        </div>\n                                        <div class=\"proceeds\">\n                                            <div class=\"edit-head\">$5,200.87 Proceeds</div>\n                                            <img src=\"img/proceeds.jpg\" alt=\"Proceeds Graph\">\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"tab-pane fade {{tab_cnt == 4 ? 'show active' : '' }}\" id=\"media\">\n                            <div class=\"media-wrapper\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-12\">\n                                        <div class=\"edit-head\">Your Media</div>\n                                    </div>\n                                    <div class=\"col-md-12\">\n                                        <a data-fancybox data-animation-duration=\"700\" data-src=\"#addmedia\" (click)=\"openAddMediaModal(content)\" href=\"javascript:;\" class=\"add-payment\"><img src=\"img/icons8-plus_mathNormal.png\" alt=\"\">Add Media</a>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"alert alert-info col-sm-12\" *ngIf=\"media_list.length == 0\">\n                                        No data available.\n                                    </div>\n                                    <div class=\"col-md-4 col-sm-6 col-xs-12 uploaded-img\" *ngFor=\"let obj of media_list; let i=index;\" >\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"obj.image\">\n                                        <!-- <a class=\"img-wrap\" href=\"{{artist_media_url+obj.image}}\" *ngIf=\"obj.image\" data-fancybox=\"images\" data-width=\"1500\" data-height=\"1000\"> -->\n                                            <img src=\"{{artist_media_url+obj.image}}\" alt=\"Media\" (click)=\"open(i)\">\n                                        <!-- </a> -->\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"obj.link\">\n\t\t\t\t\t\t\t\t\t\t\t<object width=\"420\" height=\"315\" data=\"obj.link\"></object>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<a data-fancybox data-animation-duration=\"700\" data-src=\"#delete\" (click)=\"removeMedia(obj._id)\" href=\"javascript:;\" class=\"delete\"><i class=\"fa fa-trash\"></i></a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"tab-pane fade {{tab_cnt == 5 ? 'show active' : '' }}\" id=\"analytics\">\n                            <div class=\"ana-header\">\n                                <div class=\"form-group days-grp\">\n                                    <select class=\"form-control\" id=\"days-select\" name=\"analytics_day\" (change)=\"changeAnalyticsDays()\" [(ngModel)]=\"analytics_days\">\n                                        <option value=\"7\">7 Days</option>\n                                        <option value=\"14\">14 Days</option>\n                                        <option value=\"30\">1 Month</option>\n                                    </select>\n\n                                </div>\n                                <ul class=\"ana-tabs nav nav-tabs\">\n                                    <li class=\"nav-item\"><a class=\"{{analytic_tab == 1 ? 'active' : ''}}\" (click)=\"changeAnlyticTab(1)\" data-toggle=\"tab\" href=\"javascript:;\">Overview</a></li>\n                                    <li class=\"nav-item\"><a class=\"{{analytic_tab == 2 ? 'active' : ''}}\" (click)=\"changeAnlyticTab(2)\" data-toggle=\"tab\" href=\"javascript:;\">Followers</a></li>\n                                    <li class=\"nav-item\"><a class=\"{{analytic_tab == 3 ? 'active' : ''}}\" (click)=\"changeAnlyticTab(3)\" data-toggle=\"tab\" href=\"javascript:;\">Tracks/Contents</a></li>\n                                    <li class=\"nav-item\"><a class=\"{{analytic_tab == 4 ? 'active' : ''}}\" (click)=\"changeAnlyticTab(4)\" data-toggle=\"tab\" href=\"javascript:;\">Downloads</a></li>\n                                </ul>\n                                <div class=\"time-frame\">\n                                    <h3>Last {{analytics_days}} Days: {{show_duration_date}}</h3>\n                                </div>\n                            </div>\n                            <div class=\"tab-content ana-content\">\n                                <div class=\"tab-pane fade {{analytic_tab == 1 ? 'active show' : ''}}\" id=\"overview\">\n                                    <div class=\"new-follow\">\n                                        <div class=\"edit-head\">New Followers</div>\n                                        <div class=\"progress-bar-chart\">\n                                            <!-- <span class=\"inner-text\"><p>45</p><span>New Followers</span></span> -->\n                                            <!--ul class=\"chart-skills\">\n\n                                                <li class=\"follow-women\">\n                                                    <span>Women</span>\n                                                </li>\n                                                <li class=\"follow-men\">\n                                                     <span>Men</span>\n                                                </li>\n                                                <li class=\"follow-other\">\n                                                     <span>other</span>\n                                                </li>\n                                            </ul-->\n                                            <div  [chart]=\"overview_gender_chart\"></div>\n                                        </div>\n                                        <div class=\"graph-states\">\n                                             <ul>\n                                                <li class=\"state-women\">\n                                                    <p>{{overview_female_per}}%</p>\n                                                    <span>Women</span>\n                                                </li>\n                                                <li class=\"state-men\">\n                                                    <p>{{overview_male_per}}%</p>\n                                                    <span>Men</span>\n                                                </li>\n                                                <!-- <li class=\"state-other\">\n                                                    <p>2%</p>\n                                                    <span>Other</span>\n                                                </li> -->\n                                            </ul> \n                                        </div>\n                                    </div>\n                                    <div class=\"artist-vote\">\n                                        <div class=\"edit-head\">{{overview_vote_count}} Votes</div>\n                                        <!-- <div class=\"vote-graph\">\n                                            <img src=\"img/vote-map.jpg\" alt=\"Vote Map\">\n                                        </div> -->\n                                        <div [chart]=\"overview_vote_chart\"></div>\n                                    </div>\n                                    <div class=\"artist-downloads\">\n                                        <div class=\"edit-head\">{{overview_download_total}} Downloads</div>\n                                        <div class=\"download-graph\">\n                                            <ul>\n                                                <li *ngFor=\"let track of overview_analytic_data['track']\">\n                                                    <span>{{track.name}}</span>\n                                                    <div class=\"d-num\">\n                                                        <p>{{track.no_of_downloads}}</p> <span>Downloads</span></div>\n                                                </li>\n                                            </ul>\n                                        </div>\n                                    </div>\n                                    <div class=\"location-downloads\">\n                                        <div class=\"edit-head\">Top Locations</div>\n                                        <div class=\"loc-icon-group\">\n                                            <a href=\"javascript:;\" (click)=\"togglelocBarChart(false)\"><img src=\"img/top-location-icon.png\" alt=\"top-location-icon.png\" ></a>\n                                            <a href=\"javascript:;\" (click)=\"togglelocBarChart(true)\"><img src=\"img/infographic-not-active.png\" alt=\"infographic-not-active.png\" ></a>\n                                        </div>\n                                        <div class=\"loc-graph\">\n                                            <div id=\"overviewLoc\" [style.display]=\"!location_flag ? 'block' : 'none'\" [style.height.px]=\"229.42\" [style.width.%]=\"100\"></div>\n                                            <div [style.display]=\"location_flag ? 'block' : 'none'\" [chart]=\"location_bar_chart\"></div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"tab-pane fade {{analytic_tab == 2 ? 'active show' : ''}}\" id=\"followers\">\n                                    <div class=\"new-follow\">\n                                        <div class=\"edit-head\">New Followers</div>\n                                        <div class=\"progress-bar-chart\">\n                                            <!-- <span class=\"inner-text\"><p>45</p><span>New Followers</span></span> -->\n                                            \n                                            <div [chart]=\"follower_gender_chart\"></div>\n                                        </div>  \n                            \n                                        <div class=\"graph-states\">\n                                            <ul>\n                                                <li class=\"state-women\">\n                                                    <p>{{follower_male_per}}%</p>\n                                                    <span>Women</span>\n                                                </li>\n                                                <li class=\"state-men\">\n                                                    <p>{{follower_female_per}}%</p>\n                                                    <span>Men</span>\n                                                </li>\n                                                <!-- <li class=\"state-other\">\n                                                    <p>2%</p>\n                                                    <span>Other</span>\n                                                </li> -->\n                                            </ul>\n                                        </div>\n                                    </div>\n                                    <div class=\"artist-vote\">\n                                        <div class=\"edit-head\">{{follower_vote_count}} Votes</div>\n                                        <!-- <div class=\"vote-graph\">\n                                            <img src=\"img/vote-map.jpg\" alt=\"Vote Map\">\n                                        </div> -->\n                                        <div [chart]=\"follower_vote_chart\"></div>\n                                    </div>\n                                    <div class=\"breakdown-age\">\n                                        <div class=\"edit-head\">Age Breakdown</div>\n                                        <!-- <img src=\"img/age-breakdown.jpg\" alt=\"Age Break Down\"> -->\n                                        <div [chart]=\"follower_age_chart\"></div>\n                                    </div>\n                                    <div class=\"location-downloads\">\n                                        <div class=\"edit-head\">Top Locations</div>\n                                        <div class=\"loc-icon-group\">\n                                            <a href=\"javascript:;\" (click)=\"togglelocBarChart(false)\"><img src=\"img/top-location-icon.png\" alt=\"top-location-icon.png\" ></a>\n                                            <a href=\"javascript:;\" (click)=\"togglelocBarChart(true)\"><img src=\"img/infographic-not-active.png\" alt=\"infographic-not-active.png\" ></a>\n                                        </div>\n                                        <div class=\"loc-graph\" >\n                                            <div id=\"followLoc\" [style.display]=\"!location_flag ? 'block' : 'none'\" [style.height.px]=\"229.42\" [style.width.%]=\"100\"></div>\n                                            <div [style.display]=\"location_flag ? 'block' : 'none'\" [chart]=\"follower_location_bar_chart\"></div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"tab-pane fade {{analytic_tab == 3 ? 'active show' : ''}}\" id=\"trackscontent\">\n                                    <div class=\"track-table mCustomScrollbar \" data-mcs-theme=\"dark-3\">\n                                        <table>\n                                            <tbody>\n                                                <tr *ngFor=\"let track of track_analytic['track']; let i=index;\">\n                                                    <td class=\"serial-num\">{{i+1}}.</td>\n                                                    <td class=\"track-pic\">\n                                                        <a href=\"javascript:;\"><img style=\"height: 50px;width:50px;\" src=\"{{track.image ? track_url+track.image : 'img/track-img.png' }}\" alt=\"Track Image\"></a>\n                                                    </td>\n                                                    <td class=\"track-det\" colspan=\"2\">\n                                                        <p class=\"track-name\">{{track.name}}</p>\n                                                        <p class=\"track-singer\">{{track['artist_id']['first_name']+' '+track['artist_id']['last_name']}}</p>\n                                                        <p class=\"track-year\">{{track['created_at'] | date : 'yyyy'}}</p>\n                                                    </td>\n                                                    <td class=\"track-download\">{{track['no_of_downloads']}} <span>Downloads</span></td>\n                                                    <td class=\"track-share\">{{track['no_of_shares']}} <span>Shares</span></td>\n                                                    <td class=\"track-likes\">{{track['no_of_likes']}} <span>Likes</span></td>\n                                                    <td class=\"track-comment\">{{track['no_of_comments']}}<span>Comments</span></td>\n                                                    <td class=\"td track-vote\">\n                                                        <img src=\"img/start.png\" alt=\"start\">\n                                                        <span>{{track['no_of_votes']}} <br> <span>Votes</span></span>\n                                                    </td>\n                                                </tr>\n                                            </tbody>\n                                        </table>\n                                    </div>\n                                    <div class=\"new-follow\">\n                                        <div class=\"edit-head\">New Followers</div>\n                                        <div class=\"progress-bar-chart\">\n                                            <span class=\"inner-text\"><p>{{track_vote_count}}</p><span>New Followers</span></span>\n                                            <div [chart]=\"track_gender_chart\"></div>\n                                        </div>\n                                        <div class=\"graph-states\">\n                                            <ul>\n                                                <li class=\"state-women\">\n                                                    <p>{{track_male_per}}%</p>\n                                                    <span>Women</span>\n                                                </li>\n                                                <li class=\"state-men\">\n                                                    <p>{{track_female_per}}%</p>\n                                                    <span>Men</span>\n                                                </li>\n                                            </ul>\n                                        </div>\n                                    </div>\n                                    <div class=\"artist-vote\">\n                                        <div class=\"edit-head\">{{track_vote_count}} Votes</div>\n                                        <div class=\"vote-graph\">\n                                            <div [chart]=\"track_vote_chart\"></div>\n                                        </div>\n                                    </div>\n                                    <div class=\"artist-downloads\">\n                                        <div class=\"edit-head\">Rank</div>\n                                        <div class=\"transaction-table mCustomScrollbar table-responsive \" data-mcs-theme=\"dark-3\">\n                                            <table>\n                                                <thead>\n                                                    <tr>\n                                                        <td>Contest</td>\n                                                        <td>Rank</td>\n                                                        <td>Number of votes</td>\n                                                    </tr>\n                                                </thead>\n                                                <tbody>\n                                                    <tr>\n                                                        <td>Regionals</td>\n                                                        <td>3</td>\n                                                        <td class=\"td track-vote\">\n                                                            <img src=\"img/start.png\" alt=\"start\">\n                                                            <span>1300 <span>Votes</span></span>\n                                                        </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>Round 3</td>\n                                                        <td>5</td>\n                                                        <td class=\"td track-vote\">\n                                                            <img src=\"img/start.png\" alt=\"start\">\n                                                            <span>680 <span>Votes</span></span>\n                                                        </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>Round 1</td>\n                                                        <td>12</td>\n                                                        <td class=\"td track-vote\">\n                                                            <img src=\"img/start.png\" alt=\"start\">\n                                                            <span>450 <span>Votes</span></span>\n                                                        </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>Regionals</td>\n                                                        <td>3</td>\n                                                        <td class=\"td track-vote\">\n                                                            <img src=\"img/start.png\" alt=\"start\">\n                                                            <span>1300 <span>Votes</span></span>\n                                                        </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>Round 3</td>\n                                                        <td>5</td>\n                                                        <td class=\"td track-vote\">\n                                                            <img src=\"img/start.png\" alt=\"start\">\n                                                            <span>680 <span>Votes</span></span>\n                                                        </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>Round 1</td>\n                                                        <td>12</td>\n                                                        <td class=\"td track-vote\">\n                                                            <img src=\"img/start.png\" alt=\"start\">\n                                                            <span>450 <span>Votes</span></span>\n                                                        </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>Regionals</td>\n                                                        <td>3</td>\n                                                        <td class=\"td track-vote\">\n                                                            <img src=\"img/start.png\" alt=\"start\">\n                                                            <span>1300 <span>Votes</span></span>\n                                                        </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>Round 3</td>\n                                                        <td>5</td>\n                                                        <td class=\"td track-vote\">\n                                                            <img src=\"img/start.png\" alt=\"start\">\n                                                            <span>680 <span>Votes</span></span>\n                                                        </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>Round 1</td>\n                                                        <td>12</td>\n                                                        <td class=\"td track-vote\">\n                                                            <img src=\"img/start.png\" alt=\"start\">\n                                                            <span>450 <span>Votes</span></span>\n                                                        </td>\n                                                    </tr>\n\n                                                </tbody>\n                                            </table>\n                                        </div>\n                                    </div>\n                                    <div class=\"location-downloads\">\n                                        <div class=\"edit-head\">Top Locations</div>\n                                        <div class=\"loc-icon-group\">\n                                            <a href=\"javascript:;\" (click)=\"togglelocBarChart(false)\"><img src=\"img/top-location-icon.png\" alt=\"top-location-icon.png\" ></a>\n                                            <a href=\"javascript:;\" (click)=\"togglelocBarChart(true)\"><img src=\"img/infographic-not-active.png\" alt=\"infographic-not-active.png\" ></a>\n                                        </div>\n                                        <div class=\"loc-graph\">\n                                            <div id=\"trackLoc\" [style.display]=\"!location_flag ? 'block' : 'none'\" [style.height.px]=\"229.42\" [style.width.%]=\"100\"></div>\n                                            <div [style.display]=\"location_flag ? 'block' : 'none'\" [chart]=\"track_location_bar_chart\"></div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"tab-pane fade {{analytic_tab == 4 ? 'active show' : ''}}\" id=\"download\">\n                                    <div class=\"track-table mCustomScrollbar \" data-mcs-theme=\"dark-3\">\n                                        <table>\n                                            <tbody>\n                                                <tr *ngFor=\"let download of download_analytic_data['track']; let i=index;\">\n                                                    <td class=\"serial-num\">{{i+1}}.</td>\n                                                    <td class=\"track-pic\">\n                                                        <a href=\"javascript:;\"><img style=\"height: 50px;width:50px;\" src=\"{{download.image ? track_url+download.image : 'img/track-img.png'}}\" alt=\"Track Image\"></a>\n                                                    </td>\n                                                    <td class=\"track-det\" colspan=\"2\">\n                                                        <p class=\"track-name\">{{download.name}}</p>\n                                                        <p class=\"track-singer\">{{download['artist_id']['name']}}</p>\n                                                        <p class=\"track-year\">{{download.created_at | date : 'yyyy'}}</p>\n                                                    </td>\n                                                    <td class=\"track-date\">{{download.created_at | date : 'MMMM dd, yyyy'}}</td>\n                                                    <td class=\"track-download\">{{download.no_of_downloads}} <span>Downloads</span></td>\n\n                                                    <td class=\"track-share\">{{download.no_of_shares}} <span>Shares</span></td>\n                                                </tr>\n                                            </tbody>\n                                        </table>\n                                    </div>\n                                    <div class=\"artist-downloads\">\n                                        <div class=\"edit-head\">{{download_analytic_count}} Downloads</div>\n                                        <div class=\"vote-graph\">\n                                            <!-- img src=\"img/d-download.jpg\" alt=\"Downloads Map\"> -->\n                                            <div [chart]=\"download_chart\"></div>\n                                        </div>\n                                    </div>\n                                    <div class=\"artist-proceeds\">\n                                        <div class=\"edit-head\">$2600 Proceeds</div>\n                                        <div class=\"vote-graph\">\n                                            <img src=\"img/d-download.jpg\" alt=\"Downloads Map\">\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\t\t</div>\n\t</div>\n</section>\n<section class=\"edit-profile-wrap\" *ngIf=\"userdata.type == 'user'\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-2 col-sm-3 col-xs-3\">\n                <div class=\"profile-tabs\">\n                    <ul class=\"nav nav-tabs\" id=\"myTab\">\n                        <li class=\"nav-item\"><a class=\"nav-link {{tab_cnt == 1 ? 'active' : '' }}\" (click)=\"tabChange(1)\" data-toggle=\"tab\" href=\"javascript:;\">Profile</a></li>\n                        <li class=\"nav-item\"><a class=\"nav-link {{tab_cnt == 2 ? 'active' : '' }}\" data-toggle=\"tab\" (click)=\"tabChange(2)\" href=\"javascript:;\">Settings</a></li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"col-md-10 col-sm-9 col-xs-9\">\n                <div class=\"rofile-tab-content\">\n                    <div class=\"tab-content\">\n                        <div class=\"tab-pane fade {{tab_cnt == 1 ? 'show active' : '' }} \" id=\"profile\">\n                            <div class=\"edit-cover\">\n                                <form [formGroup]=\"listener_profile\">\n                                    <div class=\"edit-details\">\n                                        <!-- <div class=\"edit-head\">Your Details</div> -->\n                                        <div class=\"row\">\n                                            <div class=\"col-md-3 col-sm-12 col-xs-12\">\n                                                <div class=\"edit-profile-picture\">\n                                                    <div class=\"upload-cover\">\n                                                        <img src=\"{{default_profile_img}}\" alt=\"Edit cover Image\">\n                                                        <span class=\"up_text\">Update Photo</span>\n                                                        <input type=\"file\" name=\"upload\" formControlName=\"upload\" id=\"cover_upload\" (change)=\"updateProfileImage($event)\">\n                                                        <a data-fancybox data-animation-duration=\"700\" data-src=\"#delete\" *ngIf=\"userdata.image\" (click)=\"removeUserImage()\" href=\"javascript:;\" class=\"delete\"><i class=\"fa fa-trash\"></i></a>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-9 col-sm-12 col-xs-12\">\n                                                <div class=\"form-details\">\n\n                                                    <div class=\"form-group\">\n                                                        <label for=\"fname\">First Name</label>\n                                                        <input type=\"text\" class=\"form-control\" id=\"fname5\" formControlName=\"fname\" name=\"fname\" [(ngModel)]=\"userdata.first_name\" placeholder=\"First Name\">\n                                                        <div class=\"cust_err_msg\" *ngIf=\"listenerProfileValidation && !listener_profile.controls['fname'].valid\">\n                                                            <span *ngIf=\"listener_profile.controls['fname'].errors['required']\" class=\"text-danger\">First name is required.</span>\n                                                        </div>\n                                                    </div>\n\n                                                    <div class=\"form-group pwd-grp\">\n                                                        <label for=\"lanem\">Last Name</label>\n                                                        <input type=\"text\" class=\"form-control\" id=\"lname2\" formControlName=\"lname\" name=\"lname\" [(ngModel)]=\"userdata.last_name\" placeholder=\"Last Name\">\n                                                        <div class=\"cust_err_msg\" *ngIf=\"listenerProfileValidation && !listener_profile.controls['lname'].valid\">\n                                                            <span *ngIf=\"listener_profile.controls['lname'].errors['required']\" class=\"text-danger\">Last name is required.</span>\n                                                        </div>\n                                                    </div>\n\n                                                    <div class=\"form-group gender-grp\">\n                                                        <label for=\"geder\">Gender</label>\n                                                        <select class=\"form-control\" id=\"gender\" name=\"gender\" formControlName=\"gender\" [(ngModel)]=\"userdata.gender\">\n                                                            <option value=\"male\">Male</option>\n                                                            <option value=\"female\">Female</option>\n                                                        </select>\n                                                        <div class=\"cust_err_msg\" *ngIf=\"listenerProfileValidation && !listener_profile.controls['gender'].valid\">\n                                                            <span *ngIf=\"listener_profile.controls['gender'].errors['required']\" class=\"text-danger\">Gender is required.</span>\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"form-group\">\n                                                        <div class=\"date-of-birth\">\n                                                            <label for=\"date\">Birthday Date</label>\n                                                            <div class=\"form-group\">\n                                                                <select class=\"form-control\" id=\"day\" formControlName=\"day\" name=\"day\" [(ngModel)]=\"userdata.day\">\n                                                                    <option value=\"\">Day</option>\n                                                                    <option *ngFor=\"let d of day\" value=\"{{d}}\">{{d}}</option>\n                                                                </select>\n                                                                <div class=\"cust_err_msg\" *ngIf=\"listenerProfileValidation && !listener_profile.controls['day'].valid\">\n                                                                    <span *ngIf=\"listener_profile.controls['day'].errors['required']\" class=\"text-danger\">Day is required.</span>\n                                                                </div>\n                                                            </div>\n                                                            <div class=\"form-group\">\n                                                                <select class=\"form-control\" id=\"month\" formControlName=\"month\" name=\"month\" [(ngModel)]=\"userdata.month\">\n                                                                    <option value=\"\">Month</option>\n                                                                    <option *ngFor=\"let m of month\" value=\"{{m}}\">{{m}}</option>\n                                                                </select>\n                                                                <div class=\"cust_err_msg\" *ngIf=\"listenerProfileValidation && !listener_profile.controls['month'].valid\">\n                                                                    <span *ngIf=\"listener_profile.controls['month'].errors['required']\" class=\"text-danger\">Month is required.</span>\n                                                                </div>\n                                                            </div>\n                                                            <div class=\"form-group\">\n                                                                <select class=\"form-control\" id=\"year\" formControlName=\"year\" name=\"year\" [(ngModel)]=\"userdata.year\">\n                                                                    <option value=\"\">Year</option>\n                                                                    <option *ngFor=\"let y of year\" value=\"{{y}}\">{{y}}</option>\n                                                                </select>\n                                                                <div class=\"cust_err_msg\" *ngIf=\"listenerProfileValidation && !listener_profile.controls['year'].valid\">\n                                                                    <span *ngIf=\"listener_profile.controls['year'].errors['required']\" class=\"text-danger\">Year is required.</span>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n\n                                                    <div class=\"form-group music-grp\">\n                                                        <label for=\"musictype\">Music Type</label>\n                                                        <select class=\"form-control\" id=\"musictype\" formControlName=\"music_type\" multiple name=\"music_type\" [(ngModel)]=\"userdata.music_type\">\n                                                            <option *ngFor=\"let type of music_types\" value=\"{{type._id}}\">{{type.name}}</option>\n                                                        </select>\n                                                        <div class=\"cust_err_msg\" *ngIf=\"listenerProfileValidation && !listener_profile.controls['music_type'].valid\">\n                                                            <span *ngIf=\"listener_profile.controls['music_type'].errors['required']\" class=\"text-danger\">Music type is required.</span>\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"form-group home-grp\">\n                                                        <label for=\"hometown\">Home Town</label>\n                                                        <input class=\"form-control\" placeholder=\"zipcode\" formControlName=\"zipcode\" name=\"zipcode\" [(ngModel)]=\"userdata.zipcode\" />\n                                                        <div class=\"cust_err_msg\" *ngIf=\"listenerProfileValidation && !listener_profile.controls['zipcode'].valid\">\n                                                            <span *ngIf=\"listener_profile.controls['zipcode'].errors['required']\" class=\"text-danger\">Zipcode is required.</span>\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"form-group home-grp\">\n                                                        <label for=\"hometown\">Phone Number</label>\n                                                        <input class=\"form-control\" placeholder=\"phone number\" name=\"phone\" [(ngModel)]=\"userdata.phone_no\" />\n                                                        <div class=\"cust_err_msg\" *ngIf=\"listenerProfileValidation && !listener_profile.controls['phone'].valid\">\n                                                            <span *ngIf=\"listener_profile.controls['phone'].errors['required']\" class=\"text-danger\">Phone Number is required.</span>\n                                                            <span *ngIf=\"(listener_profile.controls['phone'].errors['maxlength'] || listener_profile.controls['phone'].errors['minlength'])  && listener_profile.controls['phone'].dirty\" class=\"text-danger\">Please enter valid phone number.</span>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"button_group\">\n                                        <button type=\"submit\" (click)=\"update(listener_profile.valid)\" [disabled]=\"show_spinner\" class=\"save-btn btn btn-primary\">Save <i *ngIf=\"show_spinner\" class=\"fa fa-spinner fa-spin\"></i></button>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                        <div class=\"tab-pane fade {{tab_cnt == 2 ? 'show active' : '' }}\" id=\"settings\">\n\t\t\t\t\t\t\t\t<div class=\"update-email\">\n\t\t\t\t\t\t\t\t\t<div class=\"email-form\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"edit-head\">Update Your Email</div>\n\t\t\t\t\t\t\t\t\t\t<form (ngSubmit)=\"changeEmail()\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"yemail\">Your Email</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"email\" name=\"old\" [(ngModel)]=\"change_email.old\" class=\"form-control\" id=\"yemail\" placeholder=\"Your Email\" required>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"nemail\">New Email</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"email\" name=\"new\" [(ngModel)]=\"change_email.new\" class=\"form-control\" id=\"nemail\" placeholder=\"New Name\" required>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"remail\">Repeat New Email</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"email\" name=\"repeat\" [(ngModel)]=\"change_email.repeat\" class=\"form-control\" id=\"remail\" placeholder=\"Repeat Email\" required>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"button_group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" [disabled]=\"show_spinner\" class=\"update-btn\">update <i *ngIf=\"show_spinner\" class=\"fa fa-spinner fa-spin\"></i></button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"password-form\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"edit-head\">Update Password</div>\n\t\t\t\t\t\t\t\t\t\t<form (ngSubmit)=\"changePassword()\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"ypwd\">Your Password</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" id=\"ypwd\" name=\"old\" [(ngModel)]=\"change_pwd.old\" placeholder=\"Your Email\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pwd-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <i class=\"fa fa-eye-slash\" aria-hidden=\"true\"></i> -->\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"npwd\">New Password</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" name=\"old\" [(ngModel)]=\"change_pwd.new\" id=\"npwd\" placeholder=\"New Name\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pwd-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <i class=\"fa fa-eye-slash\" aria-hidden=\"true\"></i> -->\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"rpwd\">Repeat New Password</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" id=\"rpwd\" name=\"old\" [(ngModel)]=\"change_pwd.repeat\" placeholder=\"Repeat Email\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pwd-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-eye \" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <i class=\"fa fa-eye-slash\" aria-hidden=\"true\"></i> -->\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"button_group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"update-btn\">update</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"notification\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"edit-head\">Notifications</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"notify-by-email\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"edit-head\">Notifications by Email</div>\n\t\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"followers\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>New Followers</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"f-toggle\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"switch\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" checked>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"slider round\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"comments\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Comments</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"f-toggle\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"switch\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"slider round\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"message\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Message</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"f-toggle\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"switch\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" checked>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"slider round\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"notify-by-sms\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"edit-head\">Notifications by SMS</div>\n\t\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"followers\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>New Followers</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"f-toggle\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"switch\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" checked>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"slider round\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"comments\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Comments</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"f-toggle\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"switch\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"slider round\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"message\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Message</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"f-toggle\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"switch\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" checked>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"slider round\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"on-side-alert\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"edit-head\">On Side Alerts</div>\n\t\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"followers\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>New Followers</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"f-toggle\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"switch\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" checked>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"slider round\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"comments\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Comments</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"f-toggle\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"switch\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"slider round\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"message\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Message</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"f-toggle\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"switch\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" checked>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"slider round\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n\t<div class=\"modal-body\">\n\t\t<div class=\"media-modal\">\n\t\t\t<h3>Add Media</h3>\n\t\t\t<p>Upload Photo</p>\n\t\t\t<div class=\"media-upload-btn\" *ngIf=\"!show_progress\"> \n\t\t\t\t<span class=\"upl-img\"><i class=\"fa fa-cloud-upload\" aria-hidden=\"true\"></i></span> \n\t\t\t\t<span class=\"up_text\">Upload Photo</span> \n\t\t\t\t<input type=\"file\" name=\"my_doc_upload\" id=\"my_doc_upload\" (change)=\"uploadImage($event)\" multiple=\"false\"> \n\t\t\t\t<p class=\"instrution\">320x320px .png, .jpg 5MB or less</p>\n\t\t\t</div>\n\t\t\t<div class=\"media_progress_bar\" *ngIf=\"show_progress\">\n\t\t\t\t<div class=\"det\">\n\t\t\t\t\t<div class=\"upl-file-name\">IMG20185.JPG</div>\n\t\t\t\t\t<div class=\"upl-time-rem\">5 sec remaining</div>\n\t\t\t\t\t<div class=\"close-btn\"><img src=\"img/closeNormal.png\" alt=\"Close-btn\"></div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"progress\">\n\t\t\t\t\t<div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:{{progress_cnt}}%\">\n\t\t\t\t\t\t<span class=\"sr-only\">70% Complete</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<p class=\"or\">Or Add Video Link</p>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"vlink\">Video Link</label>\n\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"vlink\" placeholder=\"Video Link\" name=\"video_link\" [(ngModel)]=\"video_url\">\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"button_group\">\n\t\t\t<button  class=\"add-btn\" (click)=\"addLink()\">Add Media</button>\n\t\t</div>\n\t</div>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/dashboard-layout/my_profile/myProfile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__myProfile_service__ = __webpack_require__("../../../../../src/app/dashboard-layout/my_profile/myProfile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_lightbox__ = __webpack_require__("../../../../angular2-lightbox/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_lightbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_lightbox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular_highcharts__ = __webpack_require__("../../../../angular-highcharts/angular-highcharts.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__amcharts_amcharts3_angular__ = __webpack_require__("../../../../@amcharts/amcharts3-angular/es2015/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_message_service__ = __webpack_require__("../../../../../src/app/shared/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_sweetalert2__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var MyProfileComponent = /** @class */ (function () {
    function MyProfileComponent(MyProfileService, toastr, router, modalService, lightbox, MessageService, AmCharts, fb) {
        var _this = this;
        this.MyProfileService = MyProfileService;
        this.toastr = toastr;
        this.router = router;
        this.modalService = modalService;
        this.lightbox = lightbox;
        this.MessageService = MessageService;
        this.AmCharts = AmCharts;
        this.fb = fb;
        this.show_spinner = false;
        this.tab_cnt = 1;
        this.userdata = {
            day: '',
            month: '',
            year: ''
        };
        this.default_profile_img = 'img/profile-img.png';
        this.default_cover_img = 'img/edit-cover.jpg';
        this.day = [];
        this.month = [];
        this.year = [];
        this.music_types = [];
        this.change_email = {};
        this.change_pwd = {};
        this.show_progress = false;
        this.progress_cnt = 0;
        this.media_list = [];
        this._albums = [];
        this.artist_media_url = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].ARTIST_MEDIA;
        this.track_url = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].ARTIST_TRACK;
        this.video_url = '';
        this.analytic_tab = 1;
        this.analytics_days = 7;
        this.follower_analytic_data = {};
        this.overview_analytic_data = {};
        this.download_analytic_data = {};
        this.location_flag = false;
        this.chart = '';
        this.location_bar_chart = '';
        this.follower_location_bar_chart = '';
        this.track_location_bar_chart = '';
        this.follower_age_chart = '';
        this.follower_gender_chart = '';
        this.overview_gender_chart = '';
        this.track_gender_chart = '';
        this.track_vote_chart = '';
        this.track_vote_count = 0;
        this.track_male_per = 0;
        this.track_female_per = 0;
        this.track_analytic = '';
        this.follower_vote_chart = '';
        this.follower_vote_count = 0;
        this.follower_male_per = 0;
        this.follower_female_per = 0;
        this.overview_vote_chart = '';
        this.overview_vote_count = 0;
        this.overview_male_per = 0;
        this.overview_female_per = 0;
        this.overview_download_total = 0;
        this.download_chart = '';
        this.download_analytic_count = 0;
        this.show_duration_date = '';
        this.artistProfileValidation = false;
        this.listenerProfileValidation = false;
        var data = JSON.parse(localStorage.getItem('user'));
        this.day = [];
        this.month = [];
        this.year = [];
        for (var i = 1; i <= 31; i++) {
            this.day.push(i);
        }
        for (var i = 1; i <= 12; i++) {
            this.month.push(i);
        }
        for (var i = 1900; i <= (new Date()).getFullYear(); i++) {
            this.year.push(i);
        }
        if (data && data.artist) {
            this.userdata = __assign({}, data['artist']);
            this.userdata['type'] = 'artist';
            if (this.userdata.dob) {
                var dt = new Date(this.userdata.dob);
                this.userdata['day'] = dt.getDate();
                this.userdata['month'] = dt.getMonth();
                this.userdata['year'] = dt.getFullYear();
            }
            if (this.userdata.image) {
                this.default_profile_img = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].ARTIST_IMG + this.userdata.image;
            }
            if (this.userdata.cover_image) {
                this.default_cover_img = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].ARTIST_IMG + this.userdata.cover_image;
            }
            if (!this.userdata.social_media) {
                this.userdata['social_media'] = {
                    'facebook': '',
                    'instagram': '',
                    'twitter': '',
                    'youtube': '',
                    'sound_cloud': ''
                };
            }
        }
        else {
            this.userdata = __assign({}, data['user']);
            this.userdata['type'] = 'user';
            delete this.userdata['token'];
            if (this.userdata.dob) {
                var dt = new Date(this.userdata.dob);
                this.userdata['day'] = dt.getDate();
                this.userdata['month'] = dt.getMonth();
                this.userdata['year'] = dt.getFullYear();
            }
            if (this.userdata.image) {
                if (this.userdata.provider && this.userdata.provider == 'facebook' && this.userdata['image'].includes('graph.facebook.com') || (this.userdata.provider == "gmail" && this.userdata['image'].includes('lh3.googleusercontent.com'))) {
                    this.default_profile_img = this.userdata.image;
                }
                else {
                    this.default_profile_img = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].USER_IMG + this.userdata.image;
                }
            }
            var tmp_1 = [];
            this.userdata['music_type'].forEach(function (ele) {
                if (ele)
                    tmp_1.push(ele['_id']);
            });
            this.userdata['music_type'] = tmp_1;
        }
        this.MyProfileService.getAllMusicType().subscribe(function (response) {
            _this.music_types = response['music'];
        });
        this.artist_profile = this.fb.group({
            upload: [''],
            cover: [''],
            fname: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]],
            lname: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]],
            gender: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]],
            day: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]],
            month: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]],
            year: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]],
            phone: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].pattern('[0-9]+'), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].maxLength(10)]],
            music_type: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]],
            zipcode: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]],
            description: [''],
            share_url_fb: [''],
            share_url_insta: [''],
            share_url_twit: [''],
            share_url_youtube: [''],
            share_url_sound: ['']
        });
        this.listener_profile = this.fb.group({
            upload: [''],
            fname: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]],
            lname: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]],
            gender: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]],
            day: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]],
            month: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]],
            year: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]],
            phone: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].pattern('[0-9]+'), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].maxLength(10)]],
            music_type: [''],
            zipcode: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]]
        });
    }
    MyProfileComponent.prototype.ngOnInit = function () {
        if (this.userdata['type'] == 'artist') {
            this.getMediaList();
            this.calculateDateFromDays(this.analytics_days);
            //this.getAllTrackAnalytic({day : this.analytics_days});
            this.getAllOverviewAnalytic({ day: 14 });
            this.getAllDownloadAnalytic({ day: this.analytics_days });
        }
    };
    MyProfileComponent.prototype.ngOnDestroy = function () {
        if (this.follower_location_chart) {
            this.AmCharts.destroyChart(this.follower_location_chart);
        }
        if (this.track_location_chart) {
            this.AmCharts.destroyChart(this.track_location_chart);
        }
        if (this.overview_location_chart) {
            this.AmCharts.destroyChart(this.overview_location_chart);
        }
    };
    MyProfileComponent.prototype.calculateDateFromDays = function (days) {
        var date = new Date();
        var last = new Date(date.getTime() - (days * 24 * 60 * 60 * 1000));
        this.show_duration_date = this.formatDate(last) + ' - ' + this.formatDate(date);
    };
    MyProfileComponent.prototype.formatDate = function (date) {
        var monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ];
        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();
        return monthNames[monthIndex] + ' ' + day + ', ' + year;
    };
    MyProfileComponent.prototype.changeAnalyticsDays = function () {
        this.calculateDateFromDays(this.analytics_days);
        this.getAllFollowerAnalytics({ day: this.analytics_days });
        this.getAllTrackAnalytic({ day: this.analytics_days });
        this.getAllOverviewAnalytic({ day: this.analytics_days });
        this.getAllDownloadAnalytic({ day: this.analytics_days });
    };
    MyProfileComponent.prototype.tabChange = function (cnt) {
        this.tab_cnt = cnt;
    };
    MyProfileComponent.prototype.togglelocBarChart = function (flag) {
        this.location_flag = flag;
    };
    MyProfileComponent.prototype.changeAnlyticTab = function (cnt) {
        this.analytic_tab = cnt;
        this.location_flag = false;
        if (cnt == 1) {
            this.getAllOverviewAnalytic({ day: this.analytics_days });
        }
        else if (cnt == 2) {
            this.getAllFollowerAnalytics({ day: this.analytics_days });
        }
        else if (cnt == 3) {
            this.getAllTrackAnalytic({ day: this.analytics_days });
        }
        else if (cnt == 4) {
            this.getAllDownloadAnalytic({ day: this.analytics_days });
        }
    };
    // Update user profile
    MyProfileComponent.prototype.update = function (flag) {
        var _this = this;
        if (this.userdata.type == 'artist') {
            if (flag) {
                this.artistProfileValidation = !flag;
                this.show_spinner = true;
                this.userdata['dob'] = new Date(this.userdata['year'], this.userdata['month'], this.userdata['day']);
                this.userdata['share_url'] = JSON.stringify(this.userdata['social_media']);
                this.MyProfileService.updateArtistProfile(this.userdata).subscribe(function (response) {
                    console.log(response);
                    _this.toastr.success(response['message'], 'Success!');
                    _this.updateLocalStorage();
                    _this.MessageService.sendMessage({ updateProfile: true });
                }, function (error) {
                    _this.toastr.error(error['error'].message, 'Error!');
                    _this.show_spinner = false;
                }, function () {
                    _this.show_spinner = false;
                });
            }
            else {
                this.artistProfileValidation = !flag;
            }
        }
        else {
            if (flag) {
                this.listenerProfileValidation = !flag;
                this.show_spinner = true;
                this.userdata['dob'] = new Date(this.userdata['year'], this.userdata['month'], this.userdata['day']);
                this.MyProfileService.updateUserProfile(this.userdata).subscribe(function (response) {
                    console.log(response);
                    _this.toastr.success(response['message'], 'Success!');
                    _this.updateLocalStorage();
                    _this.MessageService.sendMessage({ updateProfile: true });
                }, function (error) {
                    _this.toastr.error(error['error'].message, 'Error!');
                    _this.show_spinner = false;
                }, function () {
                    _this.show_spinner = false;
                });
            }
            else {
                this.listenerProfileValidation = !flag;
            }
        }
    };
    MyProfileComponent.prototype.updateProfileImage = function (event) {
        var _this = this;
        var fileList = event.target.files;
        if (event.target.files.length > 0) {
            var allow_types = ['image/png', 'image/jpg', 'image/jpeg'];
            if (allow_types.indexOf(fileList[0].type) == -1) {
                this.toastr.error('Invalid file format.', 'Error!');
                return false;
            }
            console.log(fileList);
            var formData = new FormData();
            formData.append('image', fileList[0]);
            console.log(formData);
            if (this.userdata.type == 'artist') {
                this.MyProfileService.updateArtistProfileImage(formData).subscribe(function (response) {
                    console.log('uploaded image', response);
                    _this.default_profile_img = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].ARTIST_IMG + response['image'];
                    _this.updateLocalStorage();
                    _this.MessageService.sendMessage({ updateProfile: true });
                }, function (error) {
                    _this.toastr.error(error['error'].message, 'Error!');
                }, function () {
                });
            }
            else {
                this.MyProfileService.updateUserProfileImage(formData).subscribe(function (response) {
                    console.log('uploaded image', response);
                    _this.default_profile_img = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].USER_IMG + response['image'];
                    _this.updateLocalStorage();
                    _this.MessageService.sendMessage({ updateProfile: true });
                }, function (error) {
                    _this.toastr.error(error['error'].message, 'Error!');
                }, function () {
                });
            }
            if (fileList.length > 0) {
                var fileExtention = fileList[0].name.split('.');
                var file = fileList[0];
                var reader = new FileReader();
                reader.onload = function (e) {
                    var data = {};
                    var imageBuffer = e.target.result;
                    _this.default_profile_img = imageBuffer;
                };
                reader.readAsDataURL(event.target.files[0]);
            }
        }
    };
    MyProfileComponent.prototype.updateCoverImage = function (event) {
        var _this = this;
        var fileList = event.target.files;
        console.log(fileList);
        if (event.target.files.length > 0) {
            var allow_types = ['image/png', 'image/jpg', 'image/jpeg'];
            if (allow_types.indexOf(fileList[0].type) == -1) {
                this.toastr.error('Invalid file format.', 'Error!');
                return false;
            }
            var formData = new FormData();
            formData.append('cover_image', fileList[0], fileList[0]['name']);
            this.MyProfileService.updateCoverImage(formData).subscribe(function (response) {
                console.log('uploaded image', response);
                _this.updateLocalStorage();
            }, function (error) {
                _this.toastr.error(error['error'].message, 'Error!');
            }, function () {
            });
            if (fileList.length > 0) {
                var fileExtention = fileList[0].name.split('.');
                var file = fileList[0];
                var reader = new FileReader();
                reader.onload = function (e) {
                    var data = {};
                    var imageBuffer = e.target.result;
                    _this.default_cover_img = imageBuffer;
                };
                reader.readAsDataURL(event.target.files[0]);
            }
        }
    };
    MyProfileComponent.prototype.updateLocalStorage = function () {
        var _this = this;
        if (this.userdata.type == 'artist') {
            this.userdata = {
                day: '',
                month: '',
                year: ''
            };
            this.MyProfileService.getArtistById().subscribe(function (res) {
                console.log('artist', res);
                var data = JSON.parse(localStorage.getItem('user'));
                data['artist'] = res['artist'];
                _this.userdata = res['artist'];
                _this.userdata['type'] = 'artist';
                if (_this.userdata.dob) {
                    var dt = new Date(_this.userdata.dob);
                    _this.userdata['day'] = dt.getDate();
                    _this.userdata['month'] = dt.getMonth();
                    _this.userdata['year'] = dt.getFullYear();
                }
                if (!_this.userdata.social_media) {
                    _this.userdata['social_media'] = {
                        'facebook': '',
                        'instagram': '',
                        'twitter': '',
                        'youtube': '',
                        'sound_cloud': ''
                    };
                }
                if (_this.userdata.image) {
                    _this.default_profile_img = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].ARTIST_IMG + _this.userdata.image;
                }
                if (_this.userdata.cover_image) {
                    _this.default_cover_img = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].ARTIST_IMG + _this.userdata.cover_image;
                }
                localStorage.setItem('user', JSON.stringify(data));
            });
        }
        else {
            this.userdata = {
                day: '',
                month: '',
                year: ''
            };
            this.MyProfileService.getUserById().subscribe(function (res) {
                var data = JSON.parse(localStorage.getItem('user'));
                data['user'] = res['user'];
                _this.userdata = res['user'];
                _this.userdata['type'] = 'user';
                delete _this.userdata['token'];
                if (_this.userdata.dob) {
                    var dt = new Date(_this.userdata.dob);
                    _this.userdata['day'] = dt.getDate();
                    _this.userdata['month'] = dt.getMonth();
                    _this.userdata['year'] = dt.getFullYear();
                }
                if (_this.userdata.image) {
                    if (_this.userdata.provider && _this.userdata.provider == 'facebook' && _this.userdata['image'].includes('graph.facebook.com') || (_this.userdata.provider == "gmail" && _this.userdata['image'].includes('lh3.googleusercontent.com'))) {
                        _this.default_profile_img = _this.userdata.image;
                    }
                    else {
                        _this.default_profile_img = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].USER_IMG + _this.userdata.image;
                    }
                }
                var tmp = [];
                data['user']['music_type'].forEach(function (ele) {
                    if (ele)
                        tmp.push(ele['_id']);
                });
                _this.userdata['music_type'] = tmp;
                localStorage.setItem('user', JSON.stringify(data));
            });
        }
    };
    MyProfileComponent.prototype.removeArtistImage = function () {
        var thi = this;
        __WEBPACK_IMPORTED_MODULE_12_sweetalert2___default()({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (flag) {
            if (flag.value) {
                thi.MyProfileService.deleteArtistImage(thi.userdata._id).subscribe(function (response) {
                    thi.default_profile_img = 'img/profile-img.png';
                    thi.updateLocalStorage();
                    thi.toastr.success(response['message'], 'Success!');
                }, function (error) {
                    thi.toastr.error(error['error'].message, 'Error!');
                });
            }
        });
    };
    MyProfileComponent.prototype.removeArtistCoverImage = function () {
        var thi = this;
        __WEBPACK_IMPORTED_MODULE_12_sweetalert2___default()({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (flag) {
            if (flag.value) {
                thi.MyProfileService.deleteArtistCoverImage(thi.userdata._id).subscribe(function (response) {
                    thi.default_cover_img = 'img/edit-cover.jpg';
                    thi.updateLocalStorage();
                    thi.toastr.success(response['message'], 'Success!');
                }, function (error) {
                    thi.toastr.error(error['error'].message, 'Error!');
                });
            }
        });
    };
    MyProfileComponent.prototype.removeUserImage = function () {
        var thi = this;
        __WEBPACK_IMPORTED_MODULE_12_sweetalert2___default()({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (flag) {
            if (flag.value) {
                thi.MyProfileService.deleteUserImage(thi.userdata._id).subscribe(function (response) {
                    thi.default_profile_img = 'img/profile-img.png';
                    thi.updateLocalStorage();
                    thi.toastr.success(response['message'], 'Success!');
                }, function (error) {
                    thi.toastr.error(error['error'].message, 'Error!');
                });
            }
        });
    };
    MyProfileComponent.prototype.changeEmail = function () {
        var _this = this;
        if (this.change_email['old'] && this.userdata.email == this.change_email['old']) {
            if (this.change_email['new'] && this.change_email['repeat'] && this.change_email['new'] == this.change_email['repeat']) {
                var data = {
                    email: this.userdata.email,
                    new_email: this.change_email['new']
                };
                this.show_spinner = true;
                if (this.userdata.type == 'artist') {
                    this.MyProfileService.changeArtistEmail(data).subscribe(function (response) {
                        _this.change_email = {};
                        _this.updateLocalStorage();
                        _this.toastr.success(response['resp'], 'Success!');
                    }, function (error) {
                        _this.toastr.error(error['error'].message, 'Error!');
                        _this.show_spinner = false;
                    }, function () {
                        _this.show_spinner = false;
                    });
                }
                else {
                    this.MyProfileService.changeUserEmail(data).subscribe(function (response) {
                        _this.change_email = {};
                        _this.updateLocalStorage();
                        _this.toastr.success(response['resp'], 'Success!');
                    }, function (error) {
                        _this.toastr.error(error['error'].message, 'Error!');
                        _this.show_spinner = false;
                    }, function () {
                        _this.show_spinner = false;
                    });
                }
            }
            else if (!this.change_email['new']) {
                this.toastr.error('Please enter valid new email', 'Error!');
            }
            else if (!this.change_email['repeat']) {
                this.toastr.error('Please enter valid repeat email', 'Error!');
            }
            else {
                this.toastr.error('Please enter new and repeat email value same', 'Error!');
            }
        }
        else {
            this.toastr.error('Please enter valid currnet email', 'Error!');
        }
    };
    MyProfileComponent.prototype.changePassword = function () {
        var _this = this;
        if (this.change_pwd['old']) {
            if (this.change_pwd['new'] && this.change_pwd['repeat'] && this.change_pwd['new'] == this.change_pwd['repeat']) {
                var data = {
                    password: this.change_pwd['old'],
                    new_password: this.change_pwd['new']
                };
                if (this.userdata.type == 'artist') {
                    this.MyProfileService.changeArtistPassword(data).subscribe(function (response) {
                        _this.change_pwd = {};
                        _this.updateLocalStorage();
                        _this.toastr.success(response['resp'], 'Success!');
                    }, function (error) {
                        _this.toastr.error(error['error'].message, 'Error!');
                    });
                }
                else {
                    this.MyProfileService.changeUserPassword(data).subscribe(function (response) {
                        _this.change_pwd = {};
                        _this.updateLocalStorage();
                        _this.toastr.success(response['resp'], 'Success!');
                    }, function (error) {
                        _this.toastr.error(error['error'].message, 'Error!');
                    });
                }
            }
            else if (!this.change_pwd['new']) {
                this.toastr.error('Please enter new password');
            }
            else if (!this.change_pwd['repeat']) {
                this.toastr.error('Please enter repeat password');
            }
            else {
                this.toastr.error('New and repeat password must be same');
            }
        }
        else {
            this.toastr.error('Please enter old password', 'Error!');
        }
    };
    MyProfileComponent.prototype.openAddMediaModal = function (content) {
        this.media_modal_ref = this.modalService.open(content, { centered: true });
    };
    MyProfileComponent.prototype.uploadImage = function (event) {
        var _this = this;
        var fileList = event.target.files;
        console.log(fileList);
        var formData = new FormData();
        formData.append('image', fileList[0]);
        var allow_types = ['image/png', 'image/jpeg', 'image/jpg'];
        if (allow_types.indexOf(fileList[0].type) == -1) {
            this.toastr.error('Please upload valid file.', 'Error!');
            return false;
        }
        this.show_progress = true;
        this.MyProfileService.uploadMedia(formData).subscribe(function (event) {
            if (event.type === __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpEventType */].UploadProgress) {
                // This is an upload progress event. Compute and show the % done:
                var percentDone = Math.round(100 * event.loaded / event.total);
                _this.progress_cnt = percentDone;
                console.log("File is " + percentDone + "% uploaded.");
            }
            else if (event instanceof __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["f" /* HttpResponse */]) {
                console.log('File is completely uploaded!', event['body']);
                _this.getMediaList();
                _this.media_modal_ref.close();
                _this.toastr.success(event['body']['message'], 'Success!');
            }
        }, function (error) {
            _this.toastr.error(error['error'].message, '');
            _this.show_progress = false;
        }, function () {
            _this.show_progress = false;
        });
    };
    MyProfileComponent.prototype.getMediaList = function () {
        var _this = this;
        this._albums = [];
        this.MyProfileService.getAllMedia().subscribe(function (response) {
            _this.media_list = response['media'];
            for (var i = 0; i < _this.media_list.length; i++) {
                if (_this.media_list[i].image)
                    _this._albums.push({ src: _this.artist_media_url + _this.media_list[i].image });
            }
        }, function (error) {
            _this.toastr.error(error['error'].message, 'Error!');
        });
    };
    MyProfileComponent.prototype.addLink = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('link', this.video_url);
        if (this.video_url) {
            this.MyProfileService.uploadMedia(formData).subscribe(function (event) {
                if (event instanceof __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["f" /* HttpResponse */]) {
                    _this.video_url = '';
                    _this.toastr.success(event['body']['message'], 'Success!');
                    _this.getMediaList();
                    _this.media_modal_ref.close();
                }
            }, function (error) {
                _this.toastr.error(error['error'].message, 'Error!');
            });
        }
        else {
            this.toastr.error('Please provide video url', 'Error!');
        }
    };
    MyProfileComponent.prototype.removeMedia = function (id) {
        var thi = this;
        __WEBPACK_IMPORTED_MODULE_12_sweetalert2___default()({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (flag) {
            if (flag.value) {
                thi.MyProfileService.removeMediaById(id).subscribe(function (response) {
                    thi.toastr.success(response['message'], 'Success!');
                    thi.getMediaList();
                }, function (error) {
                    thi.toastr.error(error['error'].message, 'Error!');
                });
            }
        });
    };
    MyProfileComponent.prototype.open = function (index) {
        // open lightbox
        this.lightbox.open(this._albums, index);
    };
    // Get All follower analytics data
    MyProfileComponent.prototype.getAllFollowerAnalytics = function (data) {
        var _this = this;
        this.MyProfileService.getAllFollowerAnalytic(data).subscribe(function (response) {
            _this.follower_analytic_data = response;
            _this.ageChart(response['age']);
            _this.genderChart(response['gender']);
            _this.followerVoteChart(response['day']);
            _this.followerLocationChart(response['loaction']);
            _this.followerLocationBarChart(response['loaction']);
        });
    };
    // Get all track and contest details
    MyProfileComponent.prototype.getAllTrackAnalytic = function (data) {
        var _this = this;
        this.MyProfileService.getAllTrackContestData(data).subscribe(function (response) {
            _this.track_analytic = response;
            _this.trackGenderChart(response['gender']);
            _this.trackVoteChart(response['day']);
            _this.trackLocationChart(response['location']);
            _this.trackLocationBarChart(response['location']);
        });
    };
    // Get all overview analytics data
    MyProfileComponent.prototype.getAllOverviewAnalytic = function (data) {
        var _this = this;
        this.MyProfileService.getAllOverviewAnalytic(data).subscribe(function (response) {
            _this.overview_analytic_data = response;
            _this.overview_download_total = 0;
            if (response['track']) {
                response['track'].forEach(function (ele) {
                    _this.overview_download_total += ele['no_of_downloads'];
                });
            }
            _this.overviewVoteChart(response['vote']);
            _this.overviewGenderChart(response['gender']);
            _this.overviewLocationChart(response['location']);
            _this.LocationBarChart(response['location']);
        });
    };
    // Get all download analytics data
    MyProfileComponent.prototype.getAllDownloadAnalytic = function (data) {
        var _this = this;
        this.MyProfileService.getAllDownloadAnalytic(data).subscribe(function (response) {
            _this.download_analytic_data = response;
            _this.downloadChart(response['day']);
        });
    };
    // Age chart
    MyProfileComponent.prototype.ageChart = function (data) {
        var result = [0, 0, 0, 0, 0, 0, 0];
        data.forEach(function (ele) {
            if (ele.age >= 13 && ele.age <= 17) {
                result[0] = ele.count;
            }
            else if (ele.age >= 18 && ele.age <= 24) {
                result[1] = ele.count;
            }
            else if (ele.age >= 25 && ele.age <= 34) {
                result[2] = ele.count;
            }
            else if (ele.age >= 35 && ele.age <= 44) {
                result[3] = ele.count;
            }
            else if (ele.age >= 45 && ele.age <= 54) {
                result[4] = ele.count;
            }
            else if (ele.age >= 55 && ele.age <= 64) {
                result[5] = ele.count;
            }
            else {
                result[6] = ele.count;
            }
        });
        console.log(result);
        this.follower_age_chart = new __WEBPACK_IMPORTED_MODULE_9_angular_highcharts__["a" /* Chart */]({
            chart: {
                type: 'column',
                height: 200
            },
            title: {
                text: ''
            },
            xAxis: {
                lineWidth: 0,
                minorGridLineWidth: 0,
                lineColor: 'transparent',
                categories: ['13-17', '18-24', '25-34', '35-44', '45-54', '55-64', '65+'],
                labels: {
                    enabled: true
                },
                minorTickLength: 0,
                tickLength: 0
            },
            yAxis: {
                visible: false
            },
            plotOptions: {
                column: {
                    borderWidth: 0,
                    borderRadius: 5
                }
            },
            series: [
                {
                    name: 'Person',
                    color: '#9b26b0',
                    data: result
                }
            ]
        });
    };
    // Gender chart
    MyProfileComponent.prototype.genderChart = function (data) {
        var _this = this;
        var result = [];
        data.forEach(function (ele) {
            if (ele['_id'] == 'male')
                _this.follower_male_per = ele['percentage_value'];
            else
                _this.follower_female_per = ele['percentage_value'];
            result.push({
                name: ele['_id'],
                y: parseFloat(ele['percentage_value'])
            });
        });
        this.follower_gender_chart = new __WEBPACK_IMPORTED_MODULE_9_angular_highcharts__["a" /* Chart */]({
            chart: {
                type: 'pie',
                height: 200
            },
            title: {
                text: ''
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            series: [{
                    name: 'New Followers',
                    data: result
                }]
        });
    };
    // Followers location chart
    MyProfileComponent.prototype.overviewLocationChart = function (data) {
        var final_data = [];
        var min = 0;
        var max = 0;
        if (data.length > 0) {
            max = data[data.length - 1]['value'];
        }
        data.forEach(function (ele) {
            final_data.push({ id: 'US-' + ele['_id']['name'], value: ele['value'] });
        });
        this.overview_location_chart = this.AmCharts.makeChart("overviewLoc", {
            "type": "map",
            "theme": "light",
            "dataProvider": {
                "map": 'usaLow',
                "colorSteps": 10,
                "areas": final_data
            },
            "areasSettings": {
                "autoZoom": true
            },
            "valueLegend": {
                "right": 10,
                "minValue": min,
                "maxValue": max
            }
        });
    };
    // Followers vote chart
    MyProfileComponent.prototype.followerVoteChart = function (data) {
        var _this = this;
        var result = [0, 0, 0, 0, 0, 0, 0];
        this.follower_vote_count = 0;
        data.forEach(function (ele) {
            result[ele['_id']['days']] = ele.count;
            _this.follower_vote_count += ele.count;
        });
        this.follower_vote_chart = new __WEBPACK_IMPORTED_MODULE_9_angular_highcharts__["a" /* Chart */]({
            chart: {
                type: 'area',
                height: 200
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
                labels: {
                    enabled: true
                },
                tickmarkPlacement: 'on',
                minorTickLength: 0,
                tickLength: 0
            },
            yAxis: {
                visible: true
            },
            series: [
                {
                    name: 'Votes',
                    color: '#9b26b0',
                    data: result
                }
            ]
        });
    };
    // Followers location chart
    MyProfileComponent.prototype.followerLocationChart = function (data) {
        var final_data = [];
        var min = 0;
        var max = 0;
        if (data.length > 0) {
            max = data[data.length - 1]['value'];
        }
        data.forEach(function (ele) {
            final_data.push({ id: 'US-' + ele['_id']['name'], value: ele['value'] });
        });
        this.follower_location_chart = this.AmCharts.makeChart("followLoc", {
            "type": "map",
            "theme": "light",
            "dataProvider": {
                "map": 'usaLow',
                "colorSteps": 10,
                "areas": final_data
            },
            "areasSettings": {
                "autoZoom": true
            },
            "valueLegend": {
                "right": 10,
                "minValue": min,
                "maxValue": max
            }
        });
    };
    // Overview vote chart
    MyProfileComponent.prototype.overviewVoteChart = function (data) {
        var _this = this;
        var result = [0, 0, 0, 0, 0, 0, 0];
        this.overview_vote_count = 0;
        data.forEach(function (ele) {
            result[ele['day']] = ele.count;
            _this.overview_vote_count += ele.count;
        });
        this.overview_vote_chart = new __WEBPACK_IMPORTED_MODULE_9_angular_highcharts__["a" /* Chart */]({
            chart: {
                type: 'area',
                height: 200
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
                labels: {
                    enabled: true
                },
                tickmarkPlacement: 'on',
                minorTickLength: 0,
                tickLength: 0
            },
            yAxis: {
                visible: true
            },
            series: [
                {
                    name: 'Votes',
                    color: '#9b26b0',
                    data: result
                }
            ]
        });
    };
    // Overview Gender chart
    MyProfileComponent.prototype.overviewGenderChart = function (data) {
        var _this = this;
        var result = [];
        data.forEach(function (ele) {
            if (ele['_id'] == 'male')
                _this.overview_male_per = ele['percentage_value'];
            else
                _this.overview_female_per = ele['percentage_value'];
            result.push({
                name: ele['_id'],
                y: parseFloat(ele['percentage_value'])
            });
        });
        this.overview_gender_chart = new __WEBPACK_IMPORTED_MODULE_9_angular_highcharts__["a" /* Chart */]({
            chart: {
                type: 'pie',
                height: 200
            },
            title: {
                text: ''
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            series: [{
                    name: 'Followers',
                    data: result
                }]
        });
    };
    // track vote chart
    MyProfileComponent.prototype.trackVoteChart = function (data) {
        var _this = this;
        var result = [0, 0, 0, 0, 0, 0, 0];
        this.track_vote_count = 0;
        data.forEach(function (ele) {
            result[ele['day']] = ele.count;
            _this.track_vote_count += ele.count;
        });
        this.track_vote_chart = new __WEBPACK_IMPORTED_MODULE_9_angular_highcharts__["a" /* Chart */]({
            chart: {
                type: 'area',
                height: 200
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
                labels: {
                    enabled: true
                },
                tickmarkPlacement: 'on',
                minorTickLength: 0,
                tickLength: 0
            },
            yAxis: {
                visible: true
            },
            series: [
                {
                    name: 'Votes',
                    color: '#9b26b0',
                    data: result
                }
            ]
        });
    };
    // Track Gender chart
    MyProfileComponent.prototype.trackGenderChart = function (data) {
        var _this = this;
        var result = [];
        data.forEach(function (ele) {
            if (ele['_id'] == 'male')
                _this.track_male_per = ele['percentage_value'];
            else
                _this.track_female_per = ele['percentage_value'];
            result.push({
                name: ele['_id'],
                y: parseFloat(ele['percentage_value'])
            });
        });
        this.track_gender_chart = new __WEBPACK_IMPORTED_MODULE_9_angular_highcharts__["a" /* Chart */]({
            chart: {
                type: 'pie',
                height: 200
            },
            title: {
                text: ''
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            series: [{
                    name: 'Followers',
                    data: result
                }]
        });
    };
    // Track location chart
    MyProfileComponent.prototype.trackLocationChart = function (data) {
        var final_data = [];
        var min = 0;
        var max = 0;
        if (data.length > 0) {
            max = data[data.length - 1]['value'];
        }
        data.forEach(function (ele) {
            final_data.push({ id: 'US-' + ele['_id']['name'], value: ele['value'] });
        });
        this.track_location_chart = this.AmCharts.makeChart("trackLoc", {
            "type": "map",
            "theme": "light",
            "dataProvider": {
                "map": 'usaLow',
                "colorSteps": 10,
                "areas": final_data
            },
            "areasSettings": {
                "autoZoom": true
            },
            "valueLegend": {
                "right": 10,
                "minValue": min,
                "maxValue": max
            }
        });
    };
    MyProfileComponent.prototype.month_name = function (dt) {
        var mlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return mlist[dt.getMonth()];
    };
    ;
    // Download chart
    MyProfileComponent.prototype.downloadChart = function (data) {
        var _this = this;
        var result = [];
        var cat = [];
        var dt = new Date();
        for (var i = 1; i <= this.analytics_days; i++) {
            cat.push(this.month_name(dt) + " " + i);
            result.push(0);
        }
        this.download_analytic_count = 0;
        data.forEach(function (ele) {
            result[ele['day'] - 1] = ele.count;
            _this.download_analytic_count += ele.count;
        });
        this.download_chart = new __WEBPACK_IMPORTED_MODULE_9_angular_highcharts__["a" /* Chart */]({
            chart: {
                type: 'area',
                height: 200
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: cat,
                labels: {
                    enabled: true
                },
                tickmarkPlacement: 'on',
                minorTickLength: 0,
                tickLength: 0
            },
            yAxis: {
                visible: true
            },
            series: [
                {
                    name: 'Votes',
                    color: '#9b26b0',
                    data: result
                }
            ]
        });
    };
    // update notification settings
    MyProfileComponent.prototype.updateNotificationSetting = function (key, val) {
        var _this = this;
        var data = {};
        data[key] = val;
        this.MyProfileService.updateSettings(data).subscribe(function (response) {
            _this.updateLocalStorage();
            _this.toastr.success(response['message'], 'Success!');
        }, function (error) {
            _this.toastr.error(error['error'].message, 'Error!');
        });
    };
    // Top location bar chart
    MyProfileComponent.prototype.LocationBarChart = function (data) {
        var cat = [];
        var final_data = [];
        data.forEach(function (ele) {
            cat.push(ele['_id']['_id']);
            final_data.push(ele['value']);
        });
        this.location_bar_chart = new __WEBPACK_IMPORTED_MODULE_9_angular_highcharts__["a" /* Chart */]({
            chart: {
                type: 'bar',
                height: 300
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: cat,
                labels: {
                    enabled: true
                },
                tickmarkPlacement: 'on',
                minorTickLength: 0,
                tickLength: 0,
                minorGridLineWidth: 0
            },
            yAxis: {
                visible: true,
                min: 0,
                labels: {
                    overflow: 'justify'
                },
                tickLength: 0
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                floating: true,
                borderWidth: 1,
                shadow: true
            },
            series: [
                {
                    name: 'Top Location',
                    color: '#ba67c8',
                    data: final_data
                }
            ]
        });
    };
    // Top location bar chart
    MyProfileComponent.prototype.trackLocationBarChart = function (data) {
        var cat = [];
        var final_data = [];
        data.forEach(function (ele) {
            cat.push(ele['_id']['_id']);
            final_data.push(ele['value']);
        });
        this.track_location_bar_chart = new __WEBPACK_IMPORTED_MODULE_9_angular_highcharts__["a" /* Chart */]({
            chart: {
                type: 'bar',
                height: 300
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: cat,
                labels: {
                    enabled: true
                },
                tickmarkPlacement: 'on',
                minorTickLength: 0,
                tickLength: 0,
                minorGridLineWidth: 0
            },
            yAxis: {
                visible: true,
                min: 0,
                labels: {
                    overflow: 'justify'
                },
                tickLength: 0
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                floating: true,
                borderWidth: 1,
                shadow: true
            },
            series: [
                {
                    name: 'Top Location',
                    data: final_data
                }
            ]
        });
    };
    // Top location bar chart
    MyProfileComponent.prototype.followerLocationBarChart = function (data) {
        var cat = [];
        var final_data = [];
        data.forEach(function (ele) {
            cat.push(ele['_id']['_id']);
            final_data.push(ele['value']);
        });
        this.follower_location_bar_chart = new __WEBPACK_IMPORTED_MODULE_9_angular_highcharts__["a" /* Chart */]({
            chart: {
                type: 'bar',
                height: 300
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: cat,
                labels: {
                    enabled: true
                },
                tickmarkPlacement: 'on',
                minorTickLength: 0,
                tickLength: 0,
                minorGridLineWidth: 0
            },
            yAxis: {
                visible: true,
                min: 0,
                labels: {
                    overflow: 'justify'
                },
                tickLength: 0
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                floating: true,
                borderWidth: 1,
                shadow: true
            },
            series: [
                {
                    name: 'Top Location',
                    color: '#9b26b0',
                    data: final_data
                }
            ]
        });
    };
    MyProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-myProfile',
            template: __webpack_require__("../../../../../src/app/dashboard-layout/my_profile/myProfile.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__myProfile_service__["a" /* MyProfileService */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_8_angular2_lightbox__["Lightbox"],
            __WEBPACK_IMPORTED_MODULE_11__shared_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_10__amcharts_amcharts3_angular__["b" /* AmChartsService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], MyProfileComponent);
    return MyProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard-layout/my_profile/myProfile.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProfileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { Http, Headers, RequestOptions, Response } from '@angular/http';



var MyProfileService = /** @class */ (function () {
    function MyProfileService(http) {
        this.http = http;
        this.api_host = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].API_URL;
        this.user = '';
        this.headers = '';
        this.user = JSON.parse(localStorage.getItem('user'));
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'x-access-token': this.user.token });
    }
    // get All music type
    MyProfileService.prototype.getAllMusicType = function () {
        return this.http.get(this.api_host + "/music_type");
    };
    // update artist profile
    MyProfileService.prototype.updateArtistProfile = function (data) {
        return this.http.put(this.api_host + "/artist", data, { headers: this.headers });
    };
    // Update user profile pic
    MyProfileService.prototype.updateArtistProfileImage = function (data) {
        return this.http.put(this.api_host + "/artist/update_image", data, { headers: this.headers });
    };
    // Update user profile pic
    MyProfileService.prototype.updateCoverImage = function (data) {
        return this.http.put(this.api_host + "/artist/update_cover_image", data, { headers: this.headers });
    };
    // update user profile
    MyProfileService.prototype.updateUserProfile = function (data) {
        return this.http.put(this.api_host + "/user", data, { headers: this.headers });
    };
    // update user profile image
    MyProfileService.prototype.updateUserProfileImage = function (data) {
        return this.http.put(this.api_host + "/user/update_image", data, { headers: this.headers });
    };
    // Get Artist by id
    MyProfileService.prototype.getArtistById = function () {
        return this.http.get(this.api_host + "/artist/artist_by_id", { headers: this.headers });
    };
    // Get User by id
    MyProfileService.prototype.getUserById = function () {
        return this.http.get(this.api_host + "/user", { headers: this.headers });
    };
    // Remove Artist Image
    MyProfileService.prototype.deleteArtistImage = function (id) {
        return this.http.delete(this.api_host + "/artist/image/" + id, { headers: this.headers });
    };
    // Remove Artist Cover Image
    MyProfileService.prototype.deleteArtistCoverImage = function (id) {
        return this.http.delete(this.api_host + "/artist/cover_image/" + id, { headers: this.headers });
    };
    // Remove User Image
    MyProfileService.prototype.deleteUserImage = function (id) {
        return this.http.delete(this.api_host + "/user/image/" + id, { headers: this.headers });
    };
    // Change artist password
    MyProfileService.prototype.changeArtistEmail = function (data) {
        return this.http.put(this.api_host + "/artist/settings/email", data, { headers: this.headers });
    };
    // Change user password
    MyProfileService.prototype.changeArtistPassword = function (data) {
        return this.http.put(this.api_host + "/artist/settings/password", data, { headers: this.headers });
    };
    // Change user email
    MyProfileService.prototype.changeUserEmail = function (data) {
        return this.http.put(this.api_host + "/user/change/email", data, { headers: this.headers });
    };
    // Change user password
    MyProfileService.prototype.changeUserPassword = function (data) {
        return this.http.put(this.api_host + "/user/change/password", data, { headers: this.headers });
    };
    // Upload Artist media
    MyProfileService.prototype.uploadMedia = function (data) {
        var url = this.api_host + '/artist/media';
        var req = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpRequest */]('POST', url, data, {
            reportProgress: true,
            headers: this.headers
        });
        return this.http.request(req);
    };
    // Get All media
    MyProfileService.prototype.getAllMedia = function () {
        return this.http.get(this.api_host + "/artist/media", { headers: this.headers });
    };
    // Remove Media
    MyProfileService.prototype.removeMediaById = function (id) {
        return this.http.delete(this.api_host + "/artist/media/" + id, { headers: this.headers });
    };
    // Get analytics data
    MyProfileService.prototype.getAllAnalyticData = function (data) {
        return this.http.post("" + this.api_host, data, { headers: this.headers });
    };
    // Get all followers analytics
    MyProfileService.prototype.getAllFollowerAnalytic = function (data) {
        return this.http.post(this.api_host + "/artist/analytics/followers", data, { headers: this.headers });
    };
    // Get all track/contenst 
    MyProfileService.prototype.getAllTrackContestData = function (data) {
        return this.http.post(this.api_host + "/artist/track/analytics/track", data, { headers: this.headers });
    };
    // Get All overview analytics
    MyProfileService.prototype.getAllOverviewAnalytic = function (data) {
        return this.http.post(this.api_host + "/artist/analytics/overview", data, { headers: this.headers });
    };
    // Get all download analytics
    MyProfileService.prototype.getAllDownloadAnalytic = function (data) {
        return this.http.post(this.api_host + "/artist/track/downloaded_track", data, { headers: this.headers });
    };
    // Update notification setting for artist
    MyProfileService.prototype.updateSettings = function (data) {
        return this.http.put(this.api_host + "/artist/notification_settings", data, { headers: this.headers });
    };
    MyProfileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], MyProfileService);
    return MyProfileService;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard-layout/resolve/artist_resolve/artist_comments.resolve.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistCommentsResolve; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__artist_profile_artist_profile_service__ = __webpack_require__("../../../../../src/app/dashboard-layout/artist_profile/artist_profile.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArtistCommentsResolve = /** @class */ (function () {
    function ArtistCommentsResolve(ArtistProfileService) {
        this.ArtistProfileService = ArtistProfileService;
    }
    ArtistCommentsResolve.prototype.resolve = function (route) {
        return this.ArtistProfileService.getAllComments({ artist_id: route.paramMap.get('id') });
    };
    ArtistCommentsResolve = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__artist_profile_artist_profile_service__["a" /* ArtistProfileService */]])
    ], ArtistCommentsResolve);
    return ArtistCommentsResolve;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard-layout/resolve/artist_resolve/artist_follower.resolve.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistFollowerResolve; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__artist_profile_artist_profile_service__ = __webpack_require__("../../../../../src/app/dashboard-layout/artist_profile/artist_profile.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArtistFollowerResolve = /** @class */ (function () {
    function ArtistFollowerResolve(ArtistProfileService) {
        this.ArtistProfileService = ArtistProfileService;
    }
    ArtistFollowerResolve.prototype.resolve = function (route) {
        return this.ArtistProfileService.getAllFollower({ artist_id: route.paramMap.get('id') });
    };
    ArtistFollowerResolve = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__artist_profile_artist_profile_service__["a" /* ArtistProfileService */]])
    ], ArtistFollowerResolve);
    return ArtistFollowerResolve;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard-layout/resolve/artist_resolve/artist_media.resolve.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistMediaResolve; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__artist_profile_artist_profile_service__ = __webpack_require__("../../../../../src/app/dashboard-layout/artist_profile/artist_profile.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArtistMediaResolve = /** @class */ (function () {
    function ArtistMediaResolve(ArtistProfileService) {
        this.ArtistProfileService = ArtistProfileService;
    }
    ArtistMediaResolve.prototype.resolve = function (route) {
        return this.ArtistProfileService.getAllMedia({ artist_id: route.paramMap.get('id') });
    };
    ArtistMediaResolve = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__artist_profile_artist_profile_service__["a" /* ArtistProfileService */]])
    ], ArtistMediaResolve);
    return ArtistMediaResolve;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard-layout/resolve/artist_resolve/artist_profile.resolve.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistProfileResolve; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__artist_profile_artist_profile_service__ = __webpack_require__("../../../../../src/app/dashboard-layout/artist_profile/artist_profile.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArtistProfileResolve = /** @class */ (function () {
    function ArtistProfileResolve(ArtistProfileService) {
        this.ArtistProfileService = ArtistProfileService;
    }
    ArtistProfileResolve.prototype.resolve = function (route) {
        return this.ArtistProfileService.getArtistData({ artist_id: route.paramMap.get('id') });
    };
    ArtistProfileResolve = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__artist_profile_artist_profile_service__["a" /* ArtistProfileService */]])
    ], ArtistProfileResolve);
    return ArtistProfileResolve;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard-layout/resolve/artist_resolve/artist_ranking.resolve.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistRankingResolve; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__artist_profile_artist_profile_service__ = __webpack_require__("../../../../../src/app/dashboard-layout/artist_profile/artist_profile.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArtistRankingResolve = /** @class */ (function () {
    function ArtistRankingResolve(ArtistProfileService) {
        this.ArtistProfileService = ArtistProfileService;
    }
    ArtistRankingResolve.prototype.resolve = function (route) {
        return this.ArtistProfileService.getAllRanking({ artist_id: route.paramMap.get('id') });
    };
    ArtistRankingResolve = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__artist_profile_artist_profile_service__["a" /* ArtistProfileService */]])
    ], ArtistRankingResolve);
    return ArtistRankingResolve;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard-layout/resolve/artist_resolve/artist_track.resolve.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistTrackResolve; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__artist_profile_artist_profile_service__ = __webpack_require__("../../../../../src/app/dashboard-layout/artist_profile/artist_profile.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArtistTrackResolve = /** @class */ (function () {
    function ArtistTrackResolve(ArtistProfileService) {
        this.ArtistProfileService = ArtistProfileService;
    }
    ArtistTrackResolve.prototype.resolve = function (route) {
        return this.ArtistProfileService.getAllTrack({ artist_id: route.paramMap.get('id') });
    };
    ArtistTrackResolve = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__artist_profile_artist_profile_service__["a" /* ArtistProfileService */]])
    ], ArtistTrackResolve);
    return ArtistTrackResolve;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard-layout/resolve/artist_resolve/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__artist_profile_resolve__ = __webpack_require__("../../../../../src/app/dashboard-layout/resolve/artist_resolve/artist_profile.resolve.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__artist_profile_resolve__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__artist_track_resolve__ = __webpack_require__("../../../../../src/app/dashboard-layout/resolve/artist_resolve/artist_track.resolve.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__artist_track_resolve__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__artist_media_resolve__ = __webpack_require__("../../../../../src/app/dashboard-layout/resolve/artist_resolve/artist_media.resolve.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__artist_media_resolve__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__artist_follower_resolve__ = __webpack_require__("../../../../../src/app/dashboard-layout/resolve/artist_resolve/artist_follower.resolve.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__artist_follower_resolve__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__artist_comments_resolve__ = __webpack_require__("../../../../../src/app/dashboard-layout/resolve/artist_resolve/artist_comments.resolve.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__artist_comments_resolve__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__artist_ranking_resolve__ = __webpack_require__("../../../../../src/app/dashboard-layout/resolve/artist_resolve/artist_ranking.resolve.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_5__artist_ranking_resolve__["a"]; });








/***/ }),

/***/ "../../../../../src/app/dashboard-layout/resolve/track_comment_resolve/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__track_comment_resolve__ = __webpack_require__("../../../../../src/app/dashboard-layout/resolve/track_comment_resolve/track_comment.resolve.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__track_comment_resolve__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__track_artist_profile_resolve__ = __webpack_require__("../../../../../src/app/dashboard-layout/resolve/track_comment_resolve/track_artist_profile.resolve.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__track_artist_profile_resolve__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__track_detail_resolve__ = __webpack_require__("../../../../../src/app/dashboard-layout/resolve/track_comment_resolve/track_detail.resolve.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__track_detail_resolve__["a"]; });





/***/ }),

/***/ "../../../../../src/app/dashboard-layout/resolve/track_comment_resolve/track_artist_profile.resolve.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackArtistProfileResolve; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__artist_profile_artist_profile_service__ = __webpack_require__("../../../../../src/app/dashboard-layout/artist_profile/artist_profile.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TrackArtistProfileResolve = /** @class */ (function () {
    function TrackArtistProfileResolve(ArtistProfileService) {
        this.ArtistProfileService = ArtistProfileService;
    }
    TrackArtistProfileResolve.prototype.resolve = function (route) {
        return this.ArtistProfileService.getArtistData({ artist_id: route.paramMap.get('artist_id') });
    };
    TrackArtistProfileResolve = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__artist_profile_artist_profile_service__["a" /* ArtistProfileService */]])
    ], TrackArtistProfileResolve);
    return TrackArtistProfileResolve;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard-layout/resolve/track_comment_resolve/track_comment.resolve.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackCommentResolve; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__artist_profile_artist_profile_service__ = __webpack_require__("../../../../../src/app/dashboard-layout/artist_profile/artist_profile.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TrackCommentResolve = /** @class */ (function () {
    function TrackCommentResolve(ArtistProfileService) {
        this.ArtistProfileService = ArtistProfileService;
    }
    TrackCommentResolve.prototype.resolve = function (route) {
        return this.ArtistProfileService.getAllTrackComment({ track_id: route.paramMap.get('id') });
    };
    TrackCommentResolve = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__artist_profile_artist_profile_service__["a" /* ArtistProfileService */]])
    ], TrackCommentResolve);
    return TrackCommentResolve;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard-layout/resolve/track_comment_resolve/track_detail.resolve.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackDetailResolve; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__artist_profile_artist_profile_service__ = __webpack_require__("../../../../../src/app/dashboard-layout/artist_profile/artist_profile.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TrackDetailResolve = /** @class */ (function () {
    function TrackDetailResolve(ArtistProfileService) {
        this.ArtistProfileService = ArtistProfileService;
    }
    TrackDetailResolve.prototype.resolve = function (route) {
        return this.ArtistProfileService.getTrackById(route.paramMap.get('id'));
    };
    TrackDetailResolve = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__artist_profile_artist_profile_service__["a" /* ArtistProfileService */]])
    ], TrackDetailResolve);
    return TrackDetailResolve;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard-layout/track_comments/track_comments.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"track-comment-wrap\">\n  <div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-2 col-sm-3 col-xs-6\">\n            <div class=\"profile-img\">\n                <a href=\"javascript:;\"><img src=\"{{artistdata.image ? artist_img_url+artistdata.image : 'img/profile-img.png'}}\" alt=\"Profile Images\"></a>\n            </div>\n          </div>\n          <div class=\"col-md-10 col-sm-8 col-xs-6\">\n            <div class=\"abt-tr\">\n              <div class=\"play-btn\">\n                  <div class=\"artist-profile-custom-action-btn\">       \n                      <a [style.display]=\"!audio_ins[i] ? 'block' : 'none'\" (click)=\"playAudio(track.audio, 1)\" class=\"play_img\" ><img src=\"img/play_icon.png\"/></a>\n                      <a [style.display]=\"audio_ins[i] ? 'block' : 'none'\" (click)=\"stopAudio(1)\" class=\"pause_img\"><img src=\"img/pause_icon.png\"/></a>\n                  </div>\n                <!-- <a href=\"javascript:;\">\n                  <img src=\"img/play.png\" alt=\"\" (click)=\"playAudio(track.audio, 1)\" [style.display]=\"audio_ins.length == 0 && !audio_ins[1] ? 'block' : 'none'\">\n                  <img src=\"img/pause.png\" alt=\"\" (click)=\"stopAudio(1)\" [style.display]=\"audio_ins.length > 0 && audio_ins[1] ? 'block' : 'none'\">\n                </a> -->\n              </div>\n              <div class=\"track-cname\"><a href=\"javascript:;\">{{track['name']}}</a></div>\n              <div class=\"artist-name\"><h2><a href=\"javascript:;\">{{artistdata.first_name+' '+artistdata.last_name}}</a></h2></div>\n            </div>\n            <div class=\"action\">\n                <div class=\"cmt-like\"><a href=\"javascript:;\" class=\"liked\"><img src=\"img/likehand.png\" alt=\"\">{{track.no_of_likes}}</a></div>\n                <div class=\"download\"><a href=\"javascript:;\"><img src=\"img/download.png\" alt=\"\">${{track.price}}</a></div>\n                <div class=\"share\"><a href=\"javascript:;\"><img src=\"img/share.png\" alt=\"\"></a></div>\n  \n              </div>\n            <div class=\"profile-location\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> <span>New York</span>\n            <p class=\"{{artistdata['music_type']['alias']}} tag\">{{artistdata['music_type']['name']}}</p></div>\n  \n            <div class=\"profile-description\">\n              <p>{{track.description}}</p>\n              \n            </div>\n          </div>\n      </div>\n      <div class=\"col-md-12\">\n        <div class=\"profile-detail-wrap\">\n          <div class=\"row\">\n            <div class=\"col-md-12 col-sm-12 col-xs-12\">\n              <div class=\"comments\">\n                <h3 class=\"num-cmt\">{{trackcomments.length}} Comments</h3>\n                <div class=\"add-comment\" *ngIf=\"user && user.user\">\n                    <form>\n                      <div class=\"s-img\"><img src=\"{{user['user'].image ? user_img_url+user['user'].image : 'img/fan1.png'}}\" alt=\"img\"></div>\n                        <div class=\"form-group\">\n                            <label for=\"cmmt\">Write a Comment</label>\n                            <input type=\"text\" class=\"form-control\" id=\"cmmt\" name=\"comment\" [(ngModel)]=\"comment_txt\" placeholder=\"Write a comment\">\n                          </div>\n                          <div class=\"button_group\">\n                        <button type=\"submit\" (click)=\"postComment()\" [disabled]=\"show_spinner\" class=\"update-btn\">Post <i class=\"fa fa-spinner fa-spin\" *ngIf=\"show_spinner\"></i></button>\n                      </div>\n                    </form>\n\t\t\t\t\t\t\t\t\t</div>\n                <div class=\"login-alert\" *ngIf=\"!user\">Please Login to leave your comment</div>\n                <div class=\"comment-block col-md-12\" *ngFor=\"let comment of trackcomments; let i=index;\">\n                  <div class=\"s-name\">{{comment['track_id']['name']}}</div>\n                  <div class=\"pull-right\" *ngIf=\"user && user.user && comment['user_id']['_id'] != user['user']['_id']\">\n                      <a href=\"javascript:;\"  (click)=\"flagUser(comment['user_id']['_id'])\"><i class=\"fa fa-flag\"></i></a>\n                    </div>\n                  <div class=\"s-img\"><img src=\"{{comment['user_id']['image'] ? user_img_url+comment['user_id']['image'] : 'img/fan1.png'}}\" alt=\"img\"></div>\n                  <div class=\"cm-date-name\">\n                    <h6>{{comment['user_id']['first_name']+' '+comment['user_id']['last_name']}}.</h6>\n                    <p>{{comment['created_at'] | timeAgo}}</p>\n                    <div class=\"profile-descriptions\">\n                      <p>{{comment['comment']}}</p>\n                    </div>\n                  </div>\n                  \n\n                </div>\n              </div>\n            </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard-layout/track_comments/track_comments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackConmmentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__track_comments_service__ = __webpack_require__("../../../../../src/app/dashboard-layout/track_comments/track_comments.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TrackConmmentsComponent = /** @class */ (function () {
    function TrackConmmentsComponent(TrackCommentsService, toastr, route) {
        this.TrackCommentsService = TrackCommentsService;
        this.toastr = toastr;
        this.route = route;
        this.artistdata = {};
        this.track = {};
        this.trackcomments = [];
        this.artist_img_url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].ARTIST_IMG;
        this.track_url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].ARTIST_TRACK;
        this.user_img_url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].USER_IMG;
        this.audio_ins = [];
        this.comment_txt = '';
        this.show_spinner = false;
        this.artistdata = this.route.snapshot.data['artist'].artist;
        this.trackcomments = this.route.snapshot.data['comment'].comment;
        this.track = this.route.snapshot.data['track'].track;
        this.user = JSON.parse(localStorage.getItem('user'));
        console.log(this.track);
    }
    TrackConmmentsComponent.prototype.ngOnInit = function () {
    };
    // Play audio
    TrackConmmentsComponent.prototype.playAudio = function (name, index) {
        var audio = new Audio();
        audio.src = this.track_url + name;
        audio.load();
        audio.play();
        if (!this.audio_ins.hasOwnProperty(index)) {
            this.audio_ins[index] = audio;
        }
    };
    // Stop audio
    TrackConmmentsComponent.prototype.stopAudio = function (index) {
        console.log(this.audio_ins[index]);
        this.audio_ins[index].pause();
        this.audio_ins[index].currentTime = 0;
        // this.audio_ins[index].stop();
        delete this.audio_ins[index];
    };
    // Post comment
    TrackConmmentsComponent.prototype.postComment = function () {
        var _this = this;
        if (this.comment_txt) {
            this.show_spinner = true;
            var data = {
                "track_id": this.track._id,
                "artist_id": this.artistdata._id,
                "comment": this.comment_txt
            };
            this.TrackCommentsService.addCommentToTrack(data).subscribe(function (response) {
                _this.comment_txt = '';
                _this.getAllTrackComment();
                _this.toastr.success(response['message'], 'Success!');
            }, function (error) {
                _this.show_spinner = false;
                _this.toastr.error(error['error'].message, 'Error!');
            }, function () {
                _this.show_spinner = false;
            });
        }
        else {
            this.toastr.error('Comment shouldn\'t be empty.', 'Error!');
        }
    };
    // Get all comment of track
    TrackConmmentsComponent.prototype.getAllTrackComment = function () {
        var _this = this;
        var data = {
            track_id: this.track._id
        };
        this.TrackCommentsService.getAllTrackComment(data).subscribe(function (response) {
            _this.trackcomments = response['comment'];
        });
    };
    // Flag other user
    TrackConmmentsComponent.prototype.flagUser = function (id) {
        var _this = this;
        this.TrackCommentsService.flagUser(id).subscribe(function (response) {
            _this.toastr.success(response['message'], 'Success!');
            _this.getAllTrackComment();
        }, function (error) {
            _this.toastr.error(error['error'].message, 'Error!');
        });
    };
    TrackConmmentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-track-comments',
            template: __webpack_require__("../../../../../src/app/dashboard-layout/track_comments/track_comments.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__track_comments_service__["a" /* TrackCommentsService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]])
    ], TrackConmmentsComponent);
    return TrackConmmentsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard-layout/track_comments/track_comments.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackCommentsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TrackCommentsService = /** @class */ (function () {
    function TrackCommentsService(http) {
        this.http = http;
        this.api_host = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].API_URL;
        this.user = '';
        this.headers = '';
        // this.user = JSON.parse(localStorage.getItem('user'));
        // this.headers = new HttpHeaders({ 'x-access-token' : this.user.token });  
    }
    // Get Artist and track
    TrackCommentsService.prototype.getArtistData = function (data) {
        return this.http.post(this.api_host + "/whatsnew", data);
    };
    // Follow the artist 
    TrackCommentsService.prototype.followArtist = function (data) {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'x-access-token': this.user.token });
        return this.http.post(this.api_host + "/user/artist/follow", data, { headers: this.headers });
    };
    // Get followers
    TrackCommentsService.prototype.getFollower = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'x-access-token': this.user.token });
        return this.http.get(this.api_host + "/user/artist/followers", { headers: this.headers });
    };
    // Post a comment on track
    TrackCommentsService.prototype.addCommentToTrack = function (data) {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'x-access-token': this.user.token });
        return this.http.post(this.api_host + "/user/comment", data, { headers: this.headers });
    };
    // Track comment
    TrackCommentsService.prototype.getAllTrackComment = function (data) {
        return this.http.post(this.api_host + "/get_comment_by_track_id", data);
    };
    // Flag other user
    TrackCommentsService.prototype.flagUser = function (id) {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'x-access-token': this.user.token });
        return this.http.post(this.api_host + "/user/flag/user/" + id, {}, { headers: this.headers });
    };
    TrackCommentsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], TrackCommentsService);
    return TrackCommentsService;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard-layout/vote/vote.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"artist-head artist-highlight\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n          <div class=\"col-md-12 col-sm-12 col-xs-12 vote-title\">\n            <div class=\"container\">\n              <div class=\"row\">\n                <div class=\"col-lg-6 col-md-5 col-sm-6 col-xs-5\">\n                  <div class=\"head-global artist_header\"><h2>Vote</h2></div>\n                </div>\n                <div class=\"col-lg-6 col-md-7 col-sm-6 col-xs-7\">\n                  <div class=\"new-head\">\n                    <div class=\"search-wrap\">\n                      <form>\n                        <div class=\"mobile-search\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></div>\n                        <div class=\"search-input\">\n                          <input type=\"text\" placeholder=\"Search by Artist Name or Song Title\">\n                        </div>\n                      </form>\n                    </div>\n                    <div class=\"filter-head\">\n                      <a href=\"javascript:;\" (click)=\"toggleFilter()\">\n                        <div class=\"filter-icon\"><img src=\"img/filter.png\" alt=\"Filter Icon\"></div>\n                        <span>Filters <i class=\"fa fa-caret-right\"></i></span>\n                      </a>\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"filter-drop-down\" [style.display]=\"show_filter ? 'block' : 'none'\">\n                  <div class=\"container\">\n                    <div class=\"row\">\n                      <div class=\"col-md-2 col-sm-6 col-xs-6\">\n                        <div class=\"music-genre\">\n                          <div class=\"filter-heading\">Music Genre</div>\n                          <ul>\n                            <li>\n                              <div class=\"radio\">\n                                  <label>\n                                    <input type=\"radio\" value=\"\" name=\"musicgenre\">All styles\n                                    <div class=\"radio_check\"></div>\n                                  </label>\n                              </div>\n                            </li>\n                            <li>\n                              <div class=\"radio\">\n                                  <label>\n                                    <input type=\"radio\" value=\"\" name=\"musicgenre\">Hip Hop\n                                    <div class=\"radio_check\"></div>\n                                  </label>\n                              </div>\n                            </li>\n                            <li>\n                              <div class=\"radio\">\n                                  <label>\n                                    <input type=\"radio\" value=\"\" name=\"musicgenre\">Rock\n                                    <div class=\"radio_check\"></div>\n                                  </label>\n                              </div>\n                            </li>\n                            <li>\n                              <div class=\"radio\">\n                                  <label>\n                                    <input type=\"radio\" value=\"\" name=\"musicgenre\">R&B\n                                    <div class=\"radio_check\"></div>\n                                  </label>\n                              </div>\n                            </li>\n                            <li>\n                              <div class=\"radio\">\n                                  <label>\n                                    <input type=\"radio\" value=\"\" name=\"musicgenre\">Country\n                                    <div class=\"radio_check\"></div>\n                                  </label>\n                              </div>\n                            </li>\n                            <li>\n                              <div class=\"radio\">\n                                  <label>\n                                    <input type=\"radio\" value=\"\" name=\"musicgenre\">Pop\n                                    <div class=\"radio_check\"></div>\n                                  </label>\n                              </div>\n                            </li>\n                            <li>\n                              <div class=\"radio\">\n                                  <label>\n                                    <input type=\"radio\" value=\"\" name=\"musicgenre\">Electronic\n                                    <div class=\"radio_check\"></div>\n                                  </label>\n                              </div>\n                            </li>\n                          </ul>\n                        </div>\n                      </div>\n                      <div class=\"col-md-2 col-sm-6 col-xs-6\">\n                        <div class=\"artist-type\">\n                          <div class=\"filter-heading\">Artist Type</div>\n                          <ul>\n                            <li>\n                              <div class=\"checkbox\">\n                                  <label>\n                                    <input type=\"checkbox\" value=\"\" checked>\n                                    <div class=\"chk_check\"></div>\n                                    <span>Rising Stars</span>\n                                  </label>\n                              </div>\n                            </li>\n                            <li>\n                              <div class=\"checkbox\">\n                                  <label>\n                                    <input type=\"checkbox\" value=\"\" checked>\n                                    <div class=\"chk_check\"></div>\n                                    <span>Chart Toppers</span>\n                                  </label>\n                              </div>\n                            </li>\n                            <li>\n                              <div class=\"checkbox\">\n                                  <label>\n                                    <input type=\"checkbox\" value=\"\" checked>\n                                    <div class=\"chk_check\"></div>\n                                    <span>My Artsist</span>\n                                  </label>\n                              </div>\n                            </li>\n                          </ul>\n                        </div>\n                      </div>\n                      <div class=\"col-md-8 col-sm-12 col-xs-12\">\n                        <div class=\"sub-menu-filter\">\n                        <div class=\"filter-heading\">Music Genre</div>\n                          <div class=\"row\">\n                            <div class=\"col-md-2 col-sm-4 col-xs-4\">\n                              <div class=\"filter-subhead\">Northeast</div>\n                              <ul>\n                                <li>\n                                  <div class=\"checkbox\">\n                                      <label>\n                                        <input type=\"checkbox\" value=\"\">\n                                        <div class=\"chk_check\"></div>\n                                        <span>Marryland</span>\n                                      </label>\n                                  </div>\n                                </li>\n                                <li>\n                                  <div class=\"checkbox\">\n                                      <label>\n                                        <input type=\"checkbox\" value=\"\">\n                                        <div class=\"chk_check\"></div>\n                                        <span>New Jersey</span>\n                                      </label>\n                                  </div>\n                                </li>\n                                <li>\n                                  <div class=\"checkbox\">\n                                      <label>\n                                        <input type=\"checkbox\" value=\"\">\n                                        <div class=\"chk_check\"></div>\n                                        <span>Pennsylvania</span>\n                                      </label>\n                                  </div>\n                                </li>\n                                <li>\n                                  <div class=\"checkbox\">\n                                      <label>\n                                        <input type=\"checkbox\" value=\"\" checked>\n                                        <div class=\"chk_check\"></div>\n                                        <span>New York</span>\n                                      </label>\n                                  </div>\n                                </li>\n                                <li>\n                                  <div class=\"checkbox\">\n                                      <label>\n                                        <input type=\"checkbox\" value=\"\">\t\n                                        <div class=\"chk_check\"></div>\n                                        <span>Delaware</span>\n                                      </label>\n                                  </div>\n                                </li>\n                              </ul>\n                            </div>\n                            <div class=\"col-md-2 col-sm-4 col-xs-4\">\n                              <div class=\"filter-subhead\">southeast</div>\n                              <ul>\n                                <li>\n                                  <div class=\"checkbox\">\n                                      <label>\n                                        <input type=\"checkbox\" value=\"\">\n                                        <div class=\"chk_check\"></div>\n                                        <span>Marryland</span>\n                                      </label>\n                                  </div>\n                                </li>\n                                <li>\n                                  <div class=\"checkbox\">\n                                      <label>\n                                        <input type=\"checkbox\" value=\"\">\n                                        <div class=\"chk_check\"></div>\n                                        <span>New Jersey</span>\n                                      </label>\n                                  </div>\n                                </li>\n                                <li>\n                                  <div class=\"checkbox\">\n                                      <label>\n                                        <input type=\"checkbox\" value=\"\">\n                                        <div class=\"chk_check\"></div>\n                                        <span>Pennsylvania</span>\n                                      </label>\n                                  </div>\n                                </li>\n                                <li>\n                                  <div class=\"checkbox\">\n                                      <label>\n                                        <input type=\"checkbox\" value=\"\" checked>\t\n                                        <div class=\"chk_check\"></div>\n                                        <span>New York</span>\n                                      </label>\n                                  </div>\n                                </li>\n                                <li>\n                                  <div class=\"checkbox\">\n                                      <label>\n                                        <input type=\"checkbox\" value=\"\">\t\n                                        <div class=\"chk_check\"></div>\n                                        <span>Delaware</span>\n                                      </label>\n                                  </div>\n                                </li>\n                              </ul>\n                            </div>\n                            <div class=\"col-md-2 col-sm-4 col-xs-4\">\n                              <div class=\"filter-subhead\">Midwest</div>\n                              <ul>\n                                <li>\n                                  <div class=\"checkbox\">\n                                      <label>\n                                        <input type=\"checkbox\" value=\"\">\n                                        <div class=\"chk_check\"></div>\n                                        <span>Marryland</span>\n                                      </label>\n                                  </div>\n                                </li>\n                                <li>\n                                  <div class=\"checkbox\">\n                                      <label>\n                                        <input type=\"checkbox\" value=\"\">\n                                        <div class=\"chk_check\"></div>\n                                        <span>New Jersey</span>\n                                      </label>\n                                  </div>\n                                </li>\n                                <li>\n                                  <div class=\"checkbox\">\n                                      <label>\n                                        <input type=\"checkbox\" value=\"\">\n                                        <div class=\"chk_check\"></div>\n                                        <span>Pennsylvania</span>\n                                      </label>\n                                  </div>\n                                </li>\n                                <li>\n                                  <div class=\"checkbox\">\n                                      <label>\n                                        <input type=\"checkbox\" value=\"\" checked>\t\n                                        <div class=\"chk_check\"></div>\n                                        <span>New York</span>\n                                      </label>\n                                  </div>\n                                </li>\n                                <li>\n                                  <div class=\"checkbox\">\n                                      <label>\n                                        <input type=\"checkbox\" value=\"\">\t\n                                        <div class=\"chk_check\"></div>\n                                        <span>Delaware</span>\n                                      </label>\n                                  </div>\n                                </li>\n                              </ul>\n                            </div>\n                            <div class=\"col-md-2 col-sm-4 col-xs-4\">\n                              <div class=\"filter-subhead\">Southwest</div>\n                              <ul>\n                                <li>\n                                  <div class=\"checkbox\">\n                                      <label>\n                                        <input type=\"checkbox\" value=\"\">\n                                        <div class=\"chk_check\"></div>\n                                        <span>Marryland</span>\n                                      </label>\n                                  </div>\n                                </li>\n                                <li>\n                                  <div class=\"checkbox\">\n                                      <label>\n                                        <input type=\"checkbox\" value=\"\">\n                                        <div class=\"chk_check\"></div>\n                                        <span>New Jersey</span>\n                                      </label>\n                                  </div>\n                                </li>\n                                <li>\n                                  <div class=\"checkbox\">\n                                      <label>\n                                        <input type=\"checkbox\" value=\"\">\n                                        <div class=\"chk_check\"></div>\n                                        <span>Pennsylvania</span>\n                                      </label>\n                                  </div>\n                                </li>\n                                <li>\n                                  <div class=\"checkbox\">\n                                      <label>\n                                        <input type=\"checkbox\" value=\"\" checked>\t\n                                        <div class=\"chk_check\"></div>\n                                        <span>New York</span>\n                                      </label>\n                                  </div>\n                                </li>\n                                <li>\n                                  <div class=\"checkbox\">\n                                      <label>\n                                        <input type=\"checkbox\" value=\"\">\t\n                                        <div class=\"chk_check\"></div>\n                                        <span>Delaware</span>\n                                      </label>\n                                  </div>\n                                </li>\n                              </ul>\n                            </div>\n                            <div class=\"col-md-2 col-sm-4 col-xs-4\">\n                              <div class=\"filter-subhead\">West</div>\n                              <ul>\n                                <li>\n                                  <div class=\"checkbox\">\n                                      <label>\n                                        <input type=\"checkbox\" value=\"\">\n                                        <div class=\"chk_check\"></div>\n                                        <span>Marryland</span>\n                                      </label>\n                                  </div>\n                                </li>\n                                <li>\n                                  <div class=\"checkbox\">\n                                      <label>\n                                        <input type=\"checkbox\" value=\"\">\n                                        <div class=\"chk_check\"></div>\n                                        <span>New Jersey</span>\n                                      </label>\n                                  </div>\n                                </li>\n                                <li>\n                                  <div class=\"checkbox\">\n                                      <label>\n                                        <input type=\"checkbox\" value=\"\">\n                                        <div class=\"chk_check\"></div>\n                                        <span>Pennsylvania</span>\n                                      </label>\n                                  </div>\n                                </li>\n                                <li>\n                                  <div class=\"checkbox\">\n                                      <label>\n                                        <input type=\"checkbox\" value=\"\" checked>\t\n                                        <div class=\"chk_check\"></div>\n                                        <span>New York</span>\n                                      </label>\n                                  </div>\n                                </li>\n                                <li>\n                                  <div class=\"checkbox\">\n                                      <label>\n                                        <input type=\"checkbox\" value=\"\">\t\n                                        <div class=\"chk_check\"></div>\n                                        <span>Delaware</span>\n                                      </label>\n                                  </div>\n                                </li>\n                              </ul>\n                            </div>\n                            <div class=\"col-md-2 col-sm-4 col-xs-4\">\n                              <div class=\"filter-subhead\">other</div>\n                              <ul>\n                                <li>\n                                  <div class=\"checkbox\">\n                                      <label>\n                                        <input type=\"checkbox\" value=\"\">\n                                        <div class=\"chk_check\"></div>\n                                        <span>Puerto Rico</span>\n                                      </label>\n                                  </div>\n                                </li>\n                              </ul>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                        <div class=\"button_group\">\n                          <a href=\"#\" class=\"cancel-btn\">Cancel</a>\n                          <a href=\"#\" class=\"apply-btn\">Apply</a>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n      </div>\n    </div>\n</section>\n    <div class=\"vote-wrap\">\n      <div class=\"container\"> \n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <div class=\"contest-wrapper\">\n              <div class=\"heading\">\n                <h3>AOM Contest  Standings</h3>\n              </div>\n              <div class=\"ana-header\">\n                  <div class=\"form-group days-grp\">\n                  <select class=\"form-control\" id=\"days-select\">\n                      <option>7 Days</option>\n                      <option>1 Month</option>\n                  </select>\n                  \n                  </div>\n                  <ul class=\"ana-tabs nav nav-tabs\">\n                  <li class=\"nav-item\" ><a class=\"active\" data-toggle=\"tab\" href=\"#regionalfinals\">Regional Quarter Final</a></li>\n                  <li class=\"nav-item\"><a data-toggle=\"tab\" href=\"#contestname\">Contest</a></li>\n                </ul>\n              </div>\n              <div class=\"tab-content \">\n                <div class=\"tab-pane fade active show\" id=\"regionalfinals\">\n                  <div class=\"track-table mCustomScrollbar \" data-mcs-theme=\"dark-3\">\n                    <table>\n                      <thead>\n                        <tr>\n                          <td>Rank</td>\n                          <td>Track, Artist</td>\n                          <td>Music Genre</td>\n                          <td>Location</td>\n                          <td>Round 1</td>\n                          <td>Round 2</td>\n                          <td>Round 3</td>\n                          <td>Number of Votes</td>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr>\n                          <td class=\"serial-num\">1.</td>\n                          <td>\n                            <div class=\"play-option\"><a href=\"#\"><img src=\"img/new-play.png\" alt=\"Play\"></a></div>\n                            <div class=\"track-pic\"><a href=\"#\"><img src=\"img/track-img.png\" alt=\"Track Image\"></a></div>\n                            <div class=\"track-det\" colspan=\"2\">\n                              <p class=\"track-name\">Blue State of Mind</p>\n                              <p class=\"track-singer\">Contest</p>\n                            </div>\n                          </td>\n                          <td class=\"music-gen \"><span class=\"tag hiphop\">Hip Hop</span></td>\n                          <td class=\"location\"><p><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i><span>New York</span></p></td>\n                          <td class=\"rounds\"><p>2 <img src=\"img/top-arrow.png\" alt=\"\"></p></td>\n                          <td class=\"rounds\"><p>2 <img src=\"img/top-arrow.png\" alt=\"\"></p></td>\n                          <td class=\"rounds\"><p>2 <img src=\"img/top-arrow.png\" alt=\"\"></p></td>\n                          <td class=\"td track-vote\">\n                            <img src=\"img/start.png\" alt=\"start\">\n                            <span>10800</span>\n                          </td>\n                        </tr>\n                        <tr>\n                          <td class=\"serial-num\">1.</td>\n                          <td>\n                            <div class=\"play-option\"><a href=\"#\"><img src=\"img/new-play.png\" alt=\"Play\"></a></div>\n                            <div class=\"track-pic\"><a href=\"#\"><img src=\"img/track-img.png\" alt=\"Track Image\"></a></div>\n                            <div class=\"track-det\" colspan=\"2\">\n                              <p class=\"track-name\">Blue State of Mind</p>\n                              <p class=\"track-singer\">Contest</p>\n                            </div>\n                          </td>\n                          <td class=\"music-gen \"><span class=\"tag hiphop\">Hip Hop</span></td>\n                          <td class=\"location\"><p><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i><span>New York</span></p></td>\n                          <td class=\"rounds\"><p>2 <img src=\"img/top-arrow.png\" alt=\"\"></p></td>\n                          <td class=\"rounds\"><p>2 <img src=\"img/top-arrow.png\" alt=\"\"></p></td>\n                          <td class=\"rounds\"><p>2 <img src=\"img/top-arrow.png\" alt=\"\"></p></td>\n                          <td class=\"td track-vote\">\n                            <img src=\"img/start.png\" alt=\"start\">\n                            <span>10800</span>\n                          </td>\n                        </tr>\n                        <tr>\n                          <td class=\"serial-num\">1.</td>\n                          <td>\n                            <div class=\"play-option\"><a href=\"#\"><img src=\"img/new-play.png\" alt=\"Play\"></a></div>\n                            <div class=\"track-pic\"><a href=\"#\"><img src=\"img/track-img.png\" alt=\"Track Image\"></a></div>\n                            <div class=\"track-det\" colspan=\"2\">\n                              <p class=\"track-name\">Blue State of Mind</p>\n                              <p class=\"track-singer\">Contest</p>\n                            </div>\n                          </td>\n                          <td class=\"music-gen \"><span class=\"tag hiphop\">Hip Hop</span></td>\n                          <td class=\"location\"><p><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i><span>New York</span></p></td>\n                          <td class=\"rounds\"><p>2 <img src=\"img/top-arrow.png\" alt=\"\"></p></td>\n                          <td class=\"rounds\"><p>2 <img src=\"img/top-arrow.png\" alt=\"\"></p></td>\n                          <td class=\"rounds\"><p>2 <img src=\"img/top-arrow.png\" alt=\"\"></p></td>\n                          <td class=\"td track-vote\">\n                            <img src=\"img/start.png\" alt=\"start\">\n                            <span>10800</span>\n                          </td>\n                        </tr>\n                        <tr>\n                          <td class=\"serial-num\">1.</td>\n                          <td>\n                            <div class=\"play-option\"><a href=\"#\"><img src=\"img/new-play.png\" alt=\"Play\"></a></div>\n                            <div class=\"track-pic\"><a href=\"#\"><img src=\"img/track-img.png\" alt=\"Track Image\"></a></div>\n                            <div class=\"track-det\" colspan=\"2\">\n                              <p class=\"track-name\">Blue State of Mind</p>\n                              <p class=\"track-singer\">Contest</p>\n                            </div>\n                          </td>\n                          <td class=\"music-gen \"><span class=\"tag hiphop\">Hip Hop</span></td>\n                          <td class=\"location\"><p><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i><span>New York</span></p></td>\n                          <td class=\"rounds\"><p>2 <img src=\"img/top-arrow.png\" alt=\"\"></p></td>\n                          <td class=\"rounds\"><p>2 <img src=\"img/top-arrow.png\" alt=\"\"></p></td>\n                          <td class=\"rounds\"><p>2 <img src=\"img/top-arrow.png\" alt=\"\"></p></td>\n                          <td class=\"td track-vote\">\n                            <img src=\"img/start.png\" alt=\"start\">\n                            <span>10800</span>\n                          </td>\n                        </tr>\n                        <tr>\n                          <td class=\"serial-num\">1.</td>\n                          <td>\n                            <div class=\"play-option\"><a href=\"#\"><img src=\"img/new-play.png\" alt=\"Play\"></a></div>\n                            <div class=\"track-pic\"><a href=\"#\"><img src=\"img/track-img.png\" alt=\"Track Image\"></a></div>\n                            <div class=\"track-det\" colspan=\"2\">\n                              <p class=\"track-name\">Blue State of Mind</p>\n                              <p class=\"track-singer\">Contest</p>\n                            </div>\n                          </td>\n                          <td class=\"music-gen \"><span class=\"tag hiphop\">Hip Hop</span></td>\n                          <td class=\"location\"><p><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i><span>New York</span></p></td>\n                          <td class=\"rounds\"><p>2 <img src=\"img/top-arrow.png\" alt=\"\"></p></td>\n                          <td class=\"rounds\"><p>2 <img src=\"img/top-arrow.png\" alt=\"\"></p></td>\n                          <td class=\"rounds\"><p>2 <img src=\"img/top-arrow.png\" alt=\"\"></p></td>\n                          <td class=\"td track-vote\">\n                            <img src=\"img/start.png\" alt=\"start\">\n                            <span>10800</span>\n                          </td>\n                        </tr>\n                        <tr>\n                          <td class=\"serial-num\">1.</td>\n                          <td>\n                            <div class=\"play-option\"><a href=\"#\"><img src=\"img/new-play.png\" alt=\"Play\"></a></div>\n                            <div class=\"track-pic\"><a href=\"#\"><img src=\"img/track-img.png\" alt=\"Track Image\"></a></div>\n                            <div class=\"track-det\" colspan=\"2\">\n                              <p class=\"track-name\">Blue State of Mind</p>\n                              <p class=\"track-singer\">Contest</p>\n                            </div>\n                          </td>\n                          <td class=\"music-gen \"><span class=\"tag hiphop\">Hip Hop</span></td>\n                          <td class=\"location\"><p><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i><span>New York</span></p></td>\n                          <td class=\"rounds\"><p>2 <img src=\"img/top-arrow.png\" alt=\"\"></p></td>\n                          <td class=\"rounds\"><p>2 <img src=\"img/top-arrow.png\" alt=\"\"></p></td>\n                          <td class=\"rounds\"><p>2 <img src=\"img/top-arrow.png\" alt=\"\"></p></td>\n                          <td class=\"td track-vote\">\n                            <img src=\"img/start.png\" alt=\"start\">\n                            <span>10800</span>\n                          </td>\n                        </tr>\n                        <tr>\n                          <td class=\"serial-num\">1.</td>\n                          <td>\n                            <div class=\"play-option\"><a href=\"#\"><img src=\"img/new-play.png\" alt=\"Play\"></a></div>\n                            <div class=\"track-pic\"><a href=\"#\"><img src=\"img/track-img.png\" alt=\"Track Image\"></a></div>\n                            <div class=\"track-det\" colspan=\"2\">\n                              <p class=\"track-name\">Blue State of Mind</p>\n                              <p class=\"track-singer\">Contest</p>\n                            </div>\n                          </td>\n                          <td class=\"music-gen \"><span class=\"tag hiphop\">Hip Hop</span></td>\n                          <td class=\"location\"><p><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i><span>New York</span></p></td>\n                          <td class=\"rounds\"><p>2 <img src=\"img/top-arrow.png\" alt=\"\"></p></td>\n                          <td class=\"rounds\"><p>2 <img src=\"img/top-arrow.png\" alt=\"\"></p></td>\n                          <td class=\"rounds\"><p>2 <img src=\"img/top-arrow.png\" alt=\"\"></p></td>\n                          <td class=\"td track-vote\">\n                            <img src=\"img/start.png\" alt=\"start\">\n                            <span>10800</span>\n                          </td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n              <div class=\"head-global\"><h2>Cast Your Ballot</h2></div>\n          </div>\n        </div>\n            <div class=\"highlights-wrap mCustomScrollbar \" data-mcs-theme=\"dark-3\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-6\">\n                  <div class=\"final-wrap\">\n                    <div class=\"img-wrap\">\n                      <img src=\"img/highlight-player.png\" alt=\"Finalists\">\n                      <a href=\"javascript:void(0)\" class=\"fan\"><i class=\"fa fa-heart\" aria-hidden=\"true\"></i></a>\n                    </div>\n                    <div class=\"content-wrap\">\n                      <div class=\"player\">\n                        <div class=\"title\"><a href=\"#\">DJ Bond</a></div>\n                        <div class=\"finalist-name\">Garry Wood</div>\n                        <div class=\"action-btn\"><a href=\"#\"><img src=\"img/play.png\" alt=\"Pause\"></a></div>\n                        \n                      </div>\n                      <div class=\"sub-con\">\n                        <div class=\"location\">\n                          <p><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i><span>Brooklyn, New York</span></p>\n                        </div>\n                        <div class=\"td track-vote\">\n                              <img src=\"img/small-star.png\" alt=\"start\">\n                              <span>1300</span>\n                            </div>\n                            <div class=\"cat ele\">Electronic</div>\n                          </div>\n                          <a href=\"#\" class=\"add-btn\">Vote</a>\n                      \n                    </div>\n                  </div>\n                </div>\n      \n                <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-6\">\n                  <div class=\"final-wrap\">\n                    <div class=\"img-wrap\">\n                      <img src=\"img/highlight-player.png\" alt=\"Finalists\">\n                      <a href=\"javascript:void(0)\" class=\"fan\"><i class=\"fa fa-heart\" aria-hidden=\"true\"></i></a>\n                    </div>\n                    <div class=\"content-wrap\">\n                      <div class=\"player\">\n                        <div class=\"title\"><a href=\"#\">DJ Bond</a></div>\n                        <div class=\"finalist-name\">Garry Wood</div>\n                        <div class=\"action-btn\"><a href=\"#\"><img src=\"img/play.png\" alt=\"Pause\"></a></div>\n                        \n                      </div>\n                      <div class=\"sub-con\">\n                        <div class=\"location\">\n                          <p><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i><span>Brooklyn, New York</span></p>\n                        </div>\n                        <div class=\"td track-vote\">\n                              <img src=\"img/small-star.png\" alt=\"start\">\n                              <span>1300</span>\n                            </div>\n                            <div class=\"cat ele\">Electronic</div>\n                          </div>\n                          <a href=\"#\" class=\"add-btn\">Vote</a>\n                      \n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-6\">\n                  <div class=\"final-wrap\">\n                    <div class=\"img-wrap\">\n                      <img src=\"img/highlight-player.png\" alt=\"Finalists\">\n                      <a href=\"javascript:void(0)\" class=\"fan\"><i class=\"fa fa-heart\" aria-hidden=\"true\"></i></a>\n                    </div>\n                    <div class=\"content-wrap\">\n                      <div class=\"player\">\n                        <div class=\"title\"><a href=\"#\">DJ Bond</a></div>\n                        <div class=\"finalist-name\">Garry Wood</div>\n                        <div class=\"action-btn\"><a href=\"#\"><img src=\"img/play.png\" alt=\"Pause\"></a></div>\n                        \n                      </div>\n                      <div class=\"sub-con\">\n                        <div class=\"location\">\n                          <p><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i><span>Brooklyn, New York</span></p>\n                        </div>\n                        <div class=\"td track-vote\">\n                              <img src=\"img/small-star.png\" alt=\"start\">\n                              <span>1300</span>\n                            </div>\n                            <div class=\"cat ele\">Electronic</div>\n                          </div>\n                          <a href=\"#\" class=\"add-btn\">Vote</a>\n                      \n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-6\">\n                  <div class=\"final-wrap\">\n                    <div class=\"img-wrap\">\n                      <img src=\"img/highlight-player.png\" alt=\"Finalists\">\n                      <a href=\"javascript:void(0)\" class=\"fan\"><i class=\"fa fa-heart\" aria-hidden=\"true\"></i></a>\n                    </div>\n                    <div class=\"content-wrap\">\n                      <div class=\"player\">\n                        <div class=\"title\"><a href=\"#\">DJ Bond</a></div>\n                        <div class=\"finalist-name\">Garry Wood</div>\n                        <div class=\"action-btn\"><a href=\"#\"><img src=\"img/play.png\" alt=\"Pause\"></a></div>\n                        \n                      </div>\n                      <div class=\"sub-con\">\n                        <div class=\"location\">\n                          <p><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i><span>Brooklyn, New York</span></p>\n                        </div>\n                        <div class=\"td track-vote\">\n                              <img src=\"img/small-star.png\" alt=\"start\">\n                              <span>1300</span>\n                            </div>\n                            <div class=\"cat ele\">Electronic</div>\n                          </div>\n                          <a href=\"#\" class=\"add-btn\">Vote</a>\n                      \n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-6\">\n                  <div class=\"final-wrap\">\n                    <div class=\"img-wrap\">\n                      <img src=\"img/highlight-player.png\" alt=\"Finalists\">\n                      <a href=\"javascript:void(0)\" class=\"fan\"><i class=\"fa fa-heart\" aria-hidden=\"true\"></i></a>\n                    </div>\n                    <div class=\"content-wrap\">\n                      <div class=\"player\">\n                        <div class=\"title\"><a href=\"#\">DJ Bond</a></div>\n                        <div class=\"finalist-name\">Garry Wood</div>\n                        <div class=\"action-btn\"><a href=\"#\"><img src=\"img/play.png\" alt=\"Pause\"></a></div>\n                        \n                      </div>\n                      <div class=\"sub-con\">\n                        <div class=\"location\">\n                          <p><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i><span>Brooklyn, New York</span></p>\n                        </div>\n                        <div class=\"td track-vote\">\n                              <img src=\"img/small-star.png\" alt=\"start\">\n                              <span>1300</span>\n                            </div>\n                            <div class=\"cat ele\">Electronic</div>\n                          </div>\n                          <a href=\"#\" class=\"add-btn\">Vote</a>\n                      \n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-6\">\n                  <div class=\"final-wrap\">\n                    <div class=\"img-wrap\">\n                      <img src=\"img/highlight-player.png\" alt=\"Finalists\">\n                      <a href=\"javascript:void(0)\" class=\"fan\"><i class=\"fa fa-heart\" aria-hidden=\"true\"></i></a>\n                    </div>\n                    <div class=\"content-wrap\">\n                      <div class=\"player\">\n                        <div class=\"title\"><a href=\"#\">DJ Bond</a></div>\n                        <div class=\"finalist-name\">Garry Wood</div>\n                        <div class=\"action-btn\"><a href=\"#\"><img src=\"img/play.png\" alt=\"Pause\"></a></div>\n                        \n                      </div>\n                      <div class=\"sub-con\">\n                        <div class=\"location\">\n                          <p><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i><span>Brooklyn, New York</span></p>\n                        </div>\n                        <div class=\"td track-vote\">\n                              <img src=\"img/small-star.png\" alt=\"start\">\n                              <span>1300</span>\n                            </div>\n                            <div class=\"cat ele\">Electronic</div>\n                          </div>\n                          <a href=\"#\" class=\"add-btn\">Vote</a>\n                      \n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-6\">\n                  <div class=\"final-wrap\">\n                    <div class=\"img-wrap\">\n                      <img src=\"img/highlight-player.png\" alt=\"Finalists\">\n                      <a href=\"javascript:void(0)\" class=\"fan\"><i class=\"fa fa-heart\" aria-hidden=\"true\"></i></a>\n                    </div>\n                    <div class=\"content-wrap\">\n                      <div class=\"player\">\n                        <div class=\"title\"><a href=\"#\">DJ Bond</a></div>\n                        <div class=\"finalist-name\">Garry Wood</div>\n                        <div class=\"action-btn\"><a href=\"#\"><img src=\"img/play.png\" alt=\"Pause\"></a></div>\n                        \n                      </div>\n                      <div class=\"sub-con\">\n                        <div class=\"location\">\n                          <p><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i><span>Brooklyn, New York</span></p>\n                        </div>\n                        <div class=\"td track-vote\">\n                              <img src=\"img/small-star.png\" alt=\"start\">\n                              <span>1300</span>\n                            </div>\n                            <div class=\"cat ele\">Electronic</div>\n                          </div>\n                          <a href=\"#\" class=\"add-btn\">Vote</a>\n                      \n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-6\">\n                  <div class=\"final-wrap\">\n                    <div class=\"img-wrap\">\n                      <img src=\"img/highlight-player.png\" alt=\"Finalists\">\n                      <a href=\"javascript:void(0)\" class=\"fan\"><i class=\"fa fa-heart\" aria-hidden=\"true\"></i></a>\n                    </div>\n                    <div class=\"content-wrap\">\n                      <div class=\"player\">\n                        <div class=\"title\"><a href=\"#\">DJ Bond</a></div>\n                        <div class=\"finalist-name\">Garry Wood</div>\n                        <div class=\"action-btn\"><a href=\"#\"><img src=\"img/play.png\" alt=\"Pause\"></a></div>\n                        \n                      </div>\n                      <div class=\"sub-con\">\n                        <div class=\"location\">\n                          <p><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i><span>Brooklyn, New York</span></p>\n                        </div>\n                        <div class=\"td track-vote\">\n                              <img src=\"img/small-star.png\" alt=\"start\">\n                              <span>1300</span>\n                            </div>\n                            <div class=\"cat ele\">Electronic</div>\n                          </div>\n                          <a href=\"#\" class=\"add-btn\">Vote</a>\n                      \n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-6\">\n                  <div class=\"final-wrap\">\n                    <div class=\"img-wrap\">\n                      <img src=\"img/highlight-player.png\" alt=\"Finalists\">\n                      <a href=\"javascript:void(0)\" class=\"fan\"><i class=\"fa fa-heart\" aria-hidden=\"true\"></i></a>\n                    </div>\n                    <div class=\"content-wrap\">\n                      <div class=\"player\">\n                        <div class=\"title\"><a href=\"#\">DJ Bond</a></div>\n                        <div class=\"finalist-name\">Garry Wood</div>\n                        <div class=\"action-btn\"><a href=\"#\"><img src=\"img/play.png\" alt=\"Pause\"></a></div>\n                        \n                      </div>\n                      <div class=\"sub-con\">\n                        <div class=\"location\">\n                          <p><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i><span>Brooklyn, New York</span></p>\n                        </div>\n                        <div class=\"td track-vote\">\n                              <img src=\"img/small-star.png\" alt=\"start\">\n                              <span>1300</span>\n                            </div>\n                            <div class=\"cat ele\">Electronic</div>\n                          </div>\n                          <a href=\"#\" class=\"add-btn\">Vote</a>\n                      \n                    </div>\n                  </div>\n                </div>\t\t\t\t\t\n                <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-6\">\n                  <div class=\"final-wrap\">\n                    <div class=\"img-wrap\">\n                      <img src=\"img/highlight-player.png\" alt=\"Finalists\">\n                      <a href=\"javascript:void(0)\" class=\"fan\"><i class=\"fa fa-heart\" aria-hidden=\"true\"></i></a>\n                    </div>\n                    <div class=\"content-wrap\">\n                      <div class=\"player\">\n                        <div class=\"title\"><a href=\"#\">DJ Bond</a></div>\n                        <div class=\"finalist-name\">Garry Wood</div>\n                        <div class=\"action-btn\"><a href=\"#\"><img src=\"img/play.png\" alt=\"Pause\"></a></div>\n                        \n                      </div>\n                      <div class=\"sub-con\">\n                        <div class=\"location\">\n                          <p><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i><span>Brooklyn, New York</span></p>\n                        </div>\n                        <div class=\"td track-vote\">\n                              <img src=\"img/small-star.png\" alt=\"start\">\n                              <span>1300</span>\n                            </div>\n                            <div class=\"cat ele\">Electronic</div>\n                          </div>\n                          <a href=\"#\" class=\"add-btn\">Vote</a>\n                      \n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-6\">\n                  <div class=\"final-wrap\">\n                    <div class=\"img-wrap\">\n                      <img src=\"img/highlight-player.png\" alt=\"Finalists\">\n                      <a href=\"javascript:void(0)\" class=\"fan\"><i class=\"fa fa-heart\" aria-hidden=\"true\"></i></a>\n                    </div>\n                    <div class=\"content-wrap\">\n                      <div class=\"player\">\n                        <div class=\"title\"><a href=\"#\">DJ Bond</a></div>\n                        <div class=\"finalist-name\">Garry Wood</div>\n                        <div class=\"action-btn\"><a href=\"#\"><img src=\"img/play.png\" alt=\"Pause\"></a></div>\n                        \n                      </div>\n                      <div class=\"sub-con\">\n                        <div class=\"location\">\n                          <p><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i><span>Brooklyn, New York</span></p>\n                        </div>\n                        <div class=\"td track-vote\">\n                              <img src=\"img/small-star.png\" alt=\"start\">\n                              <span>1300</span>\n                            </div>\n                            <div class=\"cat ele\">Electronic</div>\n                          </div>\n                          <a href=\"#\" class=\"add-btn\">Vote</a>\n                      \n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-6\">\n                  <div class=\"final-wrap\">\n                    <div class=\"img-wrap\">\n                      <img src=\"img/highlight-player.png\" alt=\"Finalists\">\n                      <a href=\"javascript:void(0)\" class=\"fan\"><i class=\"fa fa-heart\" aria-hidden=\"true\"></i></a>\n                    </div>\n                    <div class=\"content-wrap\">\n                      <div class=\"player\">\n                        <div class=\"title\"><a href=\"#\">DJ Bond</a></div>\n                        <div class=\"finalist-name\">Garry Wood</div>\n                        <div class=\"action-btn\"><a href=\"#\"><img src=\"img/play.png\" alt=\"Pause\"></a></div>\n                        \n                      </div>\n                      <div class=\"sub-con\">\n                        <div class=\"location\">\n                          <p><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i><span>Brooklyn, New York</span></p>\n                        </div>\n                        <div class=\"td track-vote\">\n                              <img src=\"img/small-star.png\" alt=\"start\">\n                              <span>1300</span>\n                            </div>\n                            <div class=\"cat ele\">Electronic</div>\n                          </div>\n                          <a href=\"#\" class=\"add-btn\">Vote</a>\n                      \n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-6\">\n                  <div class=\"final-wrap\">\n                    <div class=\"img-wrap\">\n                      <img src=\"img/highlight-player.png\" alt=\"Finalists\">\n                      <a href=\"javascript:void(0)\" class=\"fan\"><i class=\"fa fa-heart\" aria-hidden=\"true\"></i></a>\n                    </div>\n                    <div class=\"content-wrap\">\n                      <div class=\"player\">\n                        <div class=\"title\"><a href=\"#\">DJ Bond</a></div>\n                        <div class=\"finalist-name\">Garry Wood</div>\n                        <div class=\"action-btn\"><a href=\"#\"><img src=\"img/play.png\" alt=\"Pause\"></a></div>\n                        \n                      </div>\n                      <div class=\"sub-con\">\n                        <div class=\"location\">\n                          <p><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i><span>Brooklyn, New York</span></p>\n                        </div>\n                        <div class=\"td track-vote\">\n                              <img src=\"img/small-star.png\" alt=\"start\">\n                              <span>1300</span>\n                            </div>\n                            <div class=\"cat ele\">Electronic</div>\n                          </div>\n                          <a href=\"#\" class=\"add-btn\">Vote</a>\n                      \n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-6\">\n                  <div class=\"final-wrap\">\n                    <div class=\"img-wrap\">\n                      <img src=\"img/highlight-player.png\" alt=\"Finalists\">\n                      <a href=\"javascript:void(0)\" class=\"fan\"><i class=\"fa fa-heart\" aria-hidden=\"true\"></i></a>\n                    </div>\n                    <div class=\"content-wrap\">\n                      <div class=\"player\">\n                        <div class=\"title\"><a href=\"#\">DJ Bond</a></div>\n                        <div class=\"finalist-name\">Garry Wood</div>\n                        <div class=\"action-btn\"><a href=\"#\"><img src=\"img/play.png\" alt=\"Pause\"></a></div>\n                        \n                      </div>\n                      <div class=\"sub-con\">\n                        <div class=\"location\">\n                          <p><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i><span>Brooklyn, New York</span></p>\n                        </div>\n                        <div class=\"td track-vote\">\n                              <img src=\"img/small-star.png\" alt=\"start\">\n                              <span>1300</span>\n                            </div>\n                            <div class=\"cat ele\">Electronic</div>\n                          </div>\n                          <a href=\"#\" class=\"add-btn\">Vote</a>\n                      \n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-6\">\n                  <div class=\"final-wrap\">\n                    <div class=\"img-wrap\">\n                      <img src=\"img/highlight-player.png\" alt=\"Finalists\">\n                      <a href=\"javascript:void(0)\" class=\"fan\"><i class=\"fa fa-heart\" aria-hidden=\"true\"></i></a>\n                    </div>\n                    <div class=\"content-wrap\">\n                      <div class=\"player\">\n                        <div class=\"title\"><a href=\"#\">DJ Bond</a></div>\n                        <div class=\"finalist-name\">Garry Wood</div>\n                        <div class=\"action-btn\"><a href=\"#\"><img src=\"img/play.png\" alt=\"Pause\"></a></div>\n                        \n                      </div>\n                      <div class=\"sub-con\">\n                        <div class=\"location\">\n                          <p><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i><span>Brooklyn, New York</span></p>\n                        </div>\n                        <div class=\"td track-vote\">\n                              <img src=\"img/small-star.png\" alt=\"start\">\n                              <span>1300</span>\n                            </div>\n                            <div class=\"cat ele\">Electronic</div>\n                          </div>\n                          <a href=\"#\" class=\"add-btn\">Vote</a>\n                      \n                    </div>\n                  </div>\n                </div>\n\n              </div>\n\n            </div>\n         \n    \n  </div>\n</div> "

/***/ }),

/***/ "../../../../../src/app/dashboard-layout/vote/vote.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VoteComponent = /** @class */ (function () {
    function VoteComponent() {
        this.show_filter = false;
    }
    VoteComponent.prototype.ngOnInit = function () {
    };
    VoteComponent.prototype.toggleFilter = function () {
        this.show_filter = !this.show_filter;
    };
    VoteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-vote',
            template: __webpack_require__("../../../../../src/app/dashboard-layout/vote/vote.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [])
    ], VoteComponent);
    return VoteComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard-layout/whatsnew/whatsnew.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"whats-new-wrap\">\n  <div>\n    <div>\n      <div class=\"news_header_container\">\n        <div class=\"news-header\">\n          <div class=\"row\">\n            <div class=\"col-lg-6 col-md-5 col-sm-6 col-xs-5\">\n              <div class=\"head-global\"><h2>Whats New</h2></div>\n            </div>\n            <div class=\"col-lg-6 col-md-7 col-sm-6 col-xs-7\">\n              <div class=\"new-head\">\n                <div class=\"search-wrap\">\n                  <form>\n                    <div class=\"mobile-search\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></div>\n                    <div class=\"search-input\">\n                      <input type=\"text\" placeholder=\"Search by Artist Name or Song Title\" name=\"search\" [(ngModel)]=\"search_str\" (keyup)=\"filter($event)\">\n                    </div>\n                  </form>\n                </div>\n                <div class=\"filter-head\" (click)=\"toggleFilter()\">\n                  <a href=\"javascript:;\">\n                    <div class=\"filter-icon\"><img src=\"img/filter.png\" alt=\"Filter Icon\"></div>\n                    <span>Filters <i class=\"fa fa-caret-right\"></i></span>\n                  </a>\n                  \n                </div>\n              </div>\n            </div>\n            <div class=\"filter-drop-down\" [style.display]=\"show_filter ? 'block' : 'none'\">\n              <div class=\"container\">\n                <div class=\"row\">\n                  <div class=\"col-md-2 col-sm-6 col-xs-6\">\n                    <div class=\"music-genre\">\n                      <div class=\"filter-heading\">Music Genre</div>\n                      <ul>\n                        <li>\n                          <div class=\"radio\">\n                              <label>\n                                <input type=\"radio\" value=\"\" name=\"musicgenre\">All styles\n                                <div class=\"radio_check\"></div>\n                              </label>\n                          </div>\n                        </li>\n                        <li *ngFor=\"let m of music_type_list\">\n                          <div class=\"radio\">\n                              <label>\n                                <input type=\"radio\" value=\"{{m._id}}\" name=\"musicgenre\" [(ngModel)]=\"advance_filter.music_type\">{{m.name}}\n                                <div class=\"radio_check\"></div>\n                              </label>\n                          </div>\n                        </li>\n                      </ul>\n                    </div>\n                  </div>\n                  <div class=\"col-md-8 col-sm-12 col-xs-12\">\n                    <div class=\"sub-menu-filter\">\n                    <div class=\"filter-heading\">Region</div>\n                    <div class=\"row\">\n                      <div class=\"col-lg-2 col-md-4 col-sm-4 col-xs-4\">\n                        <div class=\"filter-subhead\">Northeast</div>\n                        <ul>\n                          <li *ngFor=\"let s of state_list;\" [style.display]=\"s['region']['name'] == 'northeast' ? 'block' : 'none'\">\n                            <div class=\"checkbox\">\n                                <label>\n                                  <input type=\"checkbox\" [value]=\"s._id\" (click)=\"addRegionForFilter($event.target.checked, $event.target.value)\">\n                                  <div class=\"chk_check\"></div>\n                                  <span>{{s.name}}</span>\n                                </label>\n                            </div>\n                          </li>\n                        </ul>\n                      </div>\n                      <div class=\"col-lg-2 col-md-4 col-sm-4 col-xs-4\">\n                        <div class=\"filter-subhead\">southeast</div>\n                        <ul>\n                          <li *ngFor=\"let s of state_list;\" [style.display]=\"s['region']['name'] == 'southeast' ? 'block' : 'none'\">\n                            <div class=\"checkbox\">\n                                <label>\n                                  <input type=\"checkbox\" [value]=\"s._id\" (click)=\"addRegionForFilter($event.target.checked, $event.target.value)\">\n                                  <div class=\"chk_check\"></div>\n                                  <span>{{s.name}}</span>\n                                </label>\n                            </div>\n                          </li>\n                        </ul>\n                      </div>\n                      <div class=\"col-lg-2 col-md-4 col-sm-4 col-xs-4\">\n                        <div class=\"filter-subhead\">Midwest</div>\n                        <ul>\n                          <li *ngFor=\"let s of state_list;\" [style.display]=\"s['region']['name'] == 'midwest' ? 'block' : 'none'\">\n                            <div class=\"checkbox\">\n                                <label>\n                                  <input type=\"checkbox\" [value]=\"s._id\" (click)=\"addRegionForFilter($event.target.checked, $event.target.value)\">\n                                  <div class=\"chk_check\"></div>\n                                  <span>{{s.name}}</span>\n                                </label>\n                            </div>\n                          </li>\n                        </ul>\n                      </div>\n                      <div class=\"col-lg-2 col-md-4 col-sm-4 col-xs-4\">\n                        <div class=\"filter-subhead\">Southwest</div>\n                        <ul>\n                          <li *ngFor=\"let s of state_list;\" [style.display]=\"s['region']['name'] == 'southwest' ? 'block' : 'none'\">\n                            <div class=\"checkbox\">\n                                <label>\n                                  <input type=\"checkbox\" [value]=\"s._id\" (click)=\"addRegionForFilter($event.target.checked, $event.target.value)\">\n                                  <div class=\"chk_check\"></div>\n                                  <span>{{s.name}}</span>\n                                </label>\n                            </div>\n                          </li>\n                        </ul>\n                      </div>\n                      <div class=\"col-lg-2 col-md-4 col-sm-4 col-xs-4\">\n                        <div class=\"filter-subhead\">West</div>\n                        <ul>\n                          <li *ngFor=\"let s of state_list;\" [style.display]=\"s['region']['name'] == 'west' ? 'block' : 'none'\">\n                            <div class=\"checkbox\">\n                                <label>\n                                  <input type=\"checkbox\" [value]=\"s._id\" (click)=\"addRegionForFilter($event.target.checked, $event.target.value)\">\n                                  <div class=\"chk_check\"></div>\n                                  <span>{{s.name}}</span>\n                                </label>\n                            </div>\n                          </li>\n                        </ul>\n                      </div>\n                      <div class=\"col-lg-2 col-md-4 col-sm-4 col-xs-4\">\n                        <div class=\"filter-subhead\">other</div>\n                        <ul>\n                          <li *ngFor=\"let s of state_list;\" [style.display]=\"s['region']['name'] == 'other' ? 'block' : 'none'\">\n                            <div class=\"checkbox\">\n                                <label>\n                                  <input type=\"checkbox\" [value]=\"s._id\" (click)=\"addRegionForFilter($event.target.checked, $event.target.value)\">\n                                  <div class=\"chk_check\"></div>\n                                  <span>{{s.name}}</span>\n                                </label>\n                            </div>\n                          </li>\n                        </ul>\n                      </div>\n                    </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                    <div class=\"button_group\">\n                      <a href=\"javascript:;\" class=\"cancel-btn\" (click)=\"toggleFilter()\">Cancel</a>\n                      <a href=\"javascript:;\" class=\"apply-btn\" (click)=\"advanceFilter()\">Apply</a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div>\n        <div class=\"whatsnew-banner\">\n            <app-carousel-scroll [images]=\"images\" [showFavourit]='true' [carouselType]='\"banner\"'></app-carousel-scroll>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section class=\"artist-highlight\">\n  <div class=\"container\">\n    <div>\n      <div>\n        <div class=\"head-global\">\n          <h2>Artist Highlights</h2>\n        </div>\n      </div>\n      <div class=\"highlights-wrap mCustomScrollbar \"  data-mcs-theme=\"dark-3\" >\n        <div class=\"row\">\n          <div class=\"alert alert-info col-sm-12\" *ngIf=\"whatsnewdata['artist'].length == 0\">\n            No data available.\n          </div>\n          <div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-6 \" *ngFor=\"let artist of whatsnewdata['artist']; let i = index;\">\n            <div class=\"final-wrap \">\n              <div class=\"img-wrap \">\n                <a href=\"javascript:;\" routerLink=\"/artist_profile/{{artist._id}}\">\n                  <img src=\"{{artist && artist.image ? artist_img_url+artist.image : 'img/highlight-player.png'}} \" alt=\"Finalists \">\n                </a>\n                <a href=\"javascript:void(0) \" class=\"fan \" (click)=\"followArtist(artist._id, i)\"><i class=\"fa {{artist.is_followed ? 'fa-heart' : 'fa-heart-o'}}\" aria-hidden=\"true \"></i></a>\n              </div>\n              <div class=\"content-wrap \">\n                <div class=\"player \">\n                  <div class=\"title \"><a href=\"javascript:;\">{{artist && artist.first_name ? artist.first_name : ''  +' '+ artist && artist.last_name ? artist.last_name : '' }}</a></div>\n                  <div class=\"cat {{artist && artist['music_type'] ? artist.music_type.alias : ''}}\">{{artist && artist['music_type'] ? artist['music_type']['name'] : '' }}</div>\n                </div>\n                <div class=\"location \">\n                  <p><i class=\"fa fa-map-marker \" aria-hidden=\"true \"></i><span>{{artist && artist['state'] ? artist.state.name : ''}}</span></p>\n                  \n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"newuploads-wrap\">\n  <div class=\"container \">\n    <div class=\"row \">\n      <div class=\"col-md-12 \">\n        <div class=\"head-global \"><h2>Popular Tracks</h2></div>\n      </div>\n      <div class=\"uploads-container col-md-12 \">\n        <div class=\"row\">\n            <div class=\"alert alert-info col-sm-12\" *ngIf=\"whatsnewdata['track'] && whatsnewdata['track'].length == 0\">\n                No data available.\n            </div>\n          <div class=\"col-lg-4 col-md-6 col-sm-6 col-xs-12 \" *ngFor=\"let track of whatsnewdata['track']; let i = index\">\n            <div class=\"upload \">\n              <div class=\"img-wrap \">\n                <img src=\"{{track.image ? track_url+track.image : 'img/upload1.png'}}\" alt=\"New Uploads \">\n              </div>\n              <div class=\"content-wrap \">\n                <div class=\"player \">\n                  <div class=\"title \"><a href=\"javascript:; \">{{track.name}}</a></div>\n                  <div class=\"finalist-name \">{{track.artist_id['first_name']+' '+track.artist_id['last_name']}}</div>\n                  <div class=\"action-btn \">\n                    <a href=\"javascript:; \">\n                        <div  class=\"action-btn custom-action-btn\">                \n                            <a  class=\"play_img\" [style.display]=\"!audio_ins[i] ? 'block' : 'none'\" (click)=\"playAudio(track.audio, i, whatsnewdata['track'])\"><img  src=\"img/play_icon.png\"></a>\n                            <a  class=\"pause_img\" [style.display]=\"audio_ins[i] ? 'block' : 'none'\" (click)=\"stopAudio(i, whatsnewdata['track'])\"><img  src=\"img/pause_icon.png\"></a>\n                        </div>\n                    <!-- <img src=\"img/play.png \" alt=\"Pause \"  [style.display]=\"!audio_ins[i] ? 'block' : 'none'\" (click)=\"playAudio(track.audio, i)\">\n                    <img src=\"img/pause.png \" alt=\"Pause \"  [style.display]=\"audio_ins[i] ? 'block' : 'none'\" (click)=\"stopAudio(i)\"> -->\n                  </a>\n                </div>\n                </div>\n                <div class=\"location \">\n                  <p><i class=\"fa fa-map-marker \" aria-hidden=\"true \"></i><span>New York</span></p>\n                  <div class=\"cat {{track.artist_id.music_type['alias']}}\">{{track.artist_id.music_type['name']}}</div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/dashboard-layout/whatsnew/whatsnew.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WhatsNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__whatsnew_service__ = __webpack_require__("../../../../../src/app/dashboard-layout/whatsnew/whatsnew.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_message_service__ = __webpack_require__("../../../../../src/app/shared/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WhatsNewComponent = /** @class */ (function () {
    function WhatsNewComponent(WhatsNewService, toastr, MessageService) {
        var _this = this;
        this.WhatsNewService = WhatsNewService;
        this.toastr = toastr;
        this.MessageService = MessageService;
        this.images = [];
        this.show_filter = false;
        this.whatsnewdata = {
            artist: [],
            track: []
        };
        this.state_list = [];
        this.region_filter = [];
        this.artist_img_url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].ARTIST_IMG;
        this.track_url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].ARTIST_TRACK;
        this.search_str = '';
        this.advance_filter = {};
        this.audio_ins = [];
        this.music_type_list = [];
        this.images = [
            {
                "source": "img/whats-new-bg.png",
                "alt": "Description for Image 1",
                "title": "Quarter Final",
                "name": "Title 1",
                "location": "Title 1",
                "type": "Title 1",
                "description": "Ut enim ad minim veniam",
                "enable": true
            },
            {
                "source": "img/whats-new-bg.png",
                "alt": "Description for Image 2",
                "title": "Quarter Final",
                "name": "Title 1",
                "location": "Title 1",
                "type": "Title 1",
                "description": "Ut enim ad minim veniam",
                "enable": true
            },
            {
                "source": "img/whats-new-bg.png",
                "alt": "Description for Image 3",
                "title": "Quarter Final",
                "name": "Title 1",
                "location": "Title 1",
                "type": "Title 1",
                "description": "Ut enim ad minim veniam",
                "enable": true
            }
        ];
        this.getAllState();
        this.subscription = this.MessageService.getMessage().subscribe(function (response) {
            if (response && response['list'] != 1) {
                _this.audio_ins.forEach(function (ele, idx) { _this.audio_ins[idx] = false; });
            }
            if (response && response['action'] == 'stop' && response['list'] == 1) {
                _this.audio_ins[response['index']] = false;
            }
            if (response && response['action'] == 'start' && response['list'] == 1) {
                _this.audio_ins[response['index']] = true;
            }
            if (response && response['list'] == 1 && response['action'] == 'next' || response['action'] == 'prev') {
                if (response['track_action'] && response['track_action'] == 'pause') {
                    _this.audio_ins.forEach(function (ele, idx) { _this.audio_ins[idx] = false; });
                    _this.audio_ins[response['index']] = true;
                }
            }
        });
    }
    WhatsNewComponent.prototype.ngOnInit = function () {
        this.getAllData();
        this.getAllMusicType();
    };
    WhatsNewComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    };
    WhatsNewComponent.prototype.toggleFilter = function () {
        this.show_filter = !this.show_filter;
    };
    // Get all whatsnew data
    WhatsNewComponent.prototype.getAllData = function () {
        var _this = this;
        var data = {};
        this.audio_ins = [];
        this.WhatsNewService.getWhatsnewData(data).subscribe(function (response) {
            _this.whatsnewdata = response;
            if (_this.whatsnewdata['track']) {
                _this.whatsnewdata['track'].forEach(function (ele) {
                    _this.audio_ins.push(false);
                });
            }
            _this.getAllFollower();
        });
    };
    // Play audio
    WhatsNewComponent.prototype.playAudio = function (name, index, data) {
        var _this = this;
        // let audio = new Audio();
        // audio.src = this.track_url+name;
        // audio.load();
        // audio.play();
        // if(!this.audio_ins.hasOwnProperty(index)) {
        //   this.audio_ins[index] = audio;
        // }
        data.forEach(function (ele, idx) {
            _this.audio_ins[idx] = false;
        });
        this.audio_ins[index] = true;
        this.MessageService.sendMessage({ data: data, index: index, action: 'start', list: 1 });
    };
    // Stop audio
    WhatsNewComponent.prototype.stopAudio = function (index, data) {
        var _this = this;
        // console.log(this.audio_ins[index]);
        // this.audio_ins[index].pause();
        // this.audio_ins[index].currentTime = 0;
        // // this.audio_ins[index].stop();
        // delete this.audio_ins[index];
        data.forEach(function (ele, idx) {
            _this.audio_ins[idx] = false;
        });
        this.MessageService.sendMessage({ data: data, index: index, action: 'stop', list: 1 });
    };
    // Filter result
    WhatsNewComponent.prototype.filter = function (e) {
        var _this = this;
        if (e.keyCode == 13) {
            var data = {
                search: this.search_str
            };
            this.WhatsNewService.getWhatsnewData(data).subscribe(function (response) {
                _this.whatsnewdata = response;
                _this.getAllFollower();
            });
        }
    };
    // Add region for filtering
    WhatsNewComponent.prototype.addRegionForFilter = function (flag, val) {
        if (flag) {
            this.region_filter.push(val);
        }
        else {
            var index = this.region_filter.indexOf(val);
            this.region_filter.splice(index, 1);
        }
    };
    // Advance filter
    WhatsNewComponent.prototype.advanceFilter = function () {
        var _this = this;
        var data = {
            "filter": []
        };
        if (this.advance_filter.music_type && this.advance_filter.music_type != "") {
            data['filter'].push({
                'field': 'music_type', value: this.advance_filter.music_type
            });
        }
        if (this.region_filter.length > 0) {
            data['filter'].push({
                'field': 'state', value: this.region_filter
            });
        }
        this.WhatsNewService.getWhatsnewData(data).subscribe(function (response) {
            _this.whatsnewdata = response;
            _this.getAllFollower();
            _this.show_filter = false;
            if (response['artist'].length <= 0)
                _this.toastr.success('No result found.', 'Success!');
        }, function (error) {
            _this.toastr.error(error['error'].message, 'Error!');
        });
    };
    // Get all music type
    WhatsNewComponent.prototype.getAllMusicType = function () {
        var _this = this;
        this.WhatsNewService.getAllMusicType().subscribe(function (response) {
            _this.music_type_list = response['music'];
        });
    };
    // Follow artist
    WhatsNewComponent.prototype.followArtist = function (id, index) {
        var _this = this;
        var data = JSON.parse(localStorage.getItem('user'));
        if (data && data.user) {
            var data_1 = {
                artist_id: id
            };
            this.whatsnewdata['artist'][index]['is_followed'] = false;
            this.WhatsNewService.followArtist(data_1).subscribe(function (response) {
                _this.toastr.success(response['message'], 'Success!');
            }, function (error) {
                _this.whatsnewdata['artist'][index]['is_followed'] = false;
                _this.toastr.error(error['error'].message, 'Error!');
            });
        }
        else {
            this.toastr.info('Please login first to follow the artist.', 'Information!');
        }
    };
    // get All follower
    WhatsNewComponent.prototype.getAllFollower = function () {
        // let user = JSON.parse(localStorage.getItem('user'));
        // if(user) {
        //   this.WhatsNewService.getFollower().subscribe(response => {
        //     let flag = false;
        //     this.whatsnewdata['artist'].forEach(obj => {
        //       response['user'].forEach(data => {
        //         if(obj._id == data['artist_id']._id) {
        //           flag = true;
        //         }
        //       });
        //       if(flag) {
        //         obj['is_followed'] = true;
        //       } else {
        //         obj['is_followed'] = false;
        //       }
        //     });
        //   });
        // }
    };
    // get all state
    WhatsNewComponent.prototype.getAllState = function () {
        var _this = this;
        this.WhatsNewService.getAllState().subscribe(function (response) {
            _this.state_list = response['state'];
        });
    };
    WhatsNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-whatsnew',
            template: __webpack_require__("../../../../../src/app/dashboard-layout/whatsnew/whatsnew.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__whatsnew_service__["a" /* WhatsNewService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_message_service__["a" /* MessageService */]])
    ], WhatsNewComponent);
    return WhatsNewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard-layout/whatsnew/whatsnew.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WhatsNewService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WhatsNewService = /** @class */ (function () {
    function WhatsNewService(http) {
        this.http = http;
        this.api_host = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].API_URL;
        this.user = '';
        this.headers = '';
        // this.user = JSON.parse(localStorage.getItem('user'));
        // this.headers = new HttpHeaders({ 'x-access-token' : this.user.token });  
    }
    // Get Artist and track
    WhatsNewService.prototype.getWhatsnewData = function (data) {
        return this.http.post(this.api_host + "/whatsnew", data);
    };
    // get All music type
    WhatsNewService.prototype.getAllMusicType = function () {
        return this.http.get(this.api_host + "/music_type");
    };
    // Follow the artist 
    WhatsNewService.prototype.followArtist = function (data) {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'x-access-token': this.user.token });
        return this.http.post(this.api_host + "/user/artist/follow", data, { headers: this.headers });
    };
    // Get followers
    WhatsNewService.prototype.getFollower = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'x-access-token': this.user.token });
        return this.http.get(this.api_host + "/user/artist/followers", { headers: this.headers });
    };
    // get all state
    WhatsNewService.prototype.getAllState = function () {
        return this.http.post(this.api_host + "/state", null);
    };
    WhatsNewService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], WhatsNewService);
    return WhatsNewService;
}());



/***/ }),

/***/ "../../../../../src/app/email_varification/email_varification.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"register-wrap\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12 col-sm-12 col-xs-12\">\n        <h3>Varification In-process...</h3>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/email_varification/email_varification.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailVarificationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__email_varification_service__ = __webpack_require__("../../../../../src/app/email_varification/email_varification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EmailVarificationComponent = /** @class */ (function () {
    function EmailVarificationComponent(fb, EamilVarificationService, toastr, route, router) {
        var _this = this;
        this.fb = fb;
        this.EamilVarificationService = EamilVarificationService;
        this.toastr = toastr;
        this.route = route;
        this.router = router;
        this.route.params.subscribe(function (res) {
            if (res.type && res.type == 'artist') {
                _this.EamilVarificationService.artistEmailVarification(res.id).subscribe(function (response) {
                    console.log('varification done artist', response);
                    _this.toastr.success(response['message'], 'Success!');
                    _this.router.navigate(['']);
                }, function (error) {
                    _this.toastr.error(error['error'].message, 'Error!');
                    console.log('artist error', error.error);
                });
            }
            else {
                _this.EamilVarificationService.userEmailVarification(res.id).subscribe(function (response) {
                    console.log('varification done user', response);
                    _this.toastr.success(response['message'], 'Success!');
                    _this.router.navigate(['']);
                }, function (error) {
                    _this.toastr.error(error['error'].message, 'Error!');
                    console.log('user error', error);
                });
            }
            console.log(res.id, res.type);
        });
    }
    EmailVarificationComponent.prototype.ngOnInit = function () {
    };
    EmailVarificationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/email_varification/email_varification.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__email_varification_service__["a" /* EamilVarificationService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["f" /* Router */]])
    ], EmailVarificationComponent);
    return EmailVarificationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/email_varification/email_varification.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EamilVarificationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__email_varification_component__ = __webpack_require__("../../../../../src/app/email_varification/email_varification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__email_varification_service__ = __webpack_require__("../../../../../src/app/email_varification/email_varification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_image_cropper__ = __webpack_require__("../../../../ngx-image-cropper/ngx-image-cropper.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// import { HttpClientModule, HttpClient } from '@angular/common/http';




var EamilVarificationModule = /** @class */ (function () {
    function EamilVarificationModule() {
    }
    EamilVarificationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_image_cropper__["a" /* ImageCropperModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_9_ngx_toastr__["a" /* ToastrModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* RouterModule */].forChild([
                    { path: 'email_confirm/:type/:id', component: __WEBPACK_IMPORTED_MODULE_4__email_varification_component__["a" /* EmailVarificationComponent */] }
                ])
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__email_varification_component__["a" /* EmailVarificationComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_5__email_varification_service__["a" /* EamilVarificationService */]]
        })
    ], EamilVarificationModule);
    return EamilVarificationModule;
}());



/***/ }),

/***/ "../../../../../src/app/email_varification/email_varification.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EamilVarificationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { Http, Headers, RequestOptions, Response } from '@angular/http';



var EamilVarificationService = /** @class */ (function () {
    function EamilVarificationService(http) {
        this.http = http;
        this.api_host = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].API_URL;
        this.headers = new Headers({ 'Content-Type': 'application/json' });
    }
    // Artist email varification
    EamilVarificationService.prototype.artistEmailVarification = function (id) {
        return this.http.get(this.api_host + "/artist_email_verify/" + id);
    };
    // User email varification
    EamilVarificationService.prototype.userEmailVarification = function (id) {
        return this.http.get(this.api_host + "/user_email_verify/" + id);
    };
    EamilVarificationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], EamilVarificationService);
    return EamilVarificationService;
}());



/***/ }),

/***/ "../../../../../src/app/forget_password/forget_password.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"register-wrap\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12 col-sm-12 col-xs-12\">\n          <div class=\"forget_password_containerr\">\n            <div class=\"forget_password_content\">\n              <div>\n                  <h4>Reset Password</h4>\n              </div>\n              <div class=\"panel-body\">\n                  <form [formGroup]=\"passwordFormGroup\">\n                      <div class=\"form-group\">\n                        <label class=\"control-label custom_form_label\">New Password</label>\n                        <input type=\"password\"  name=\"new_pwd\" formControlName=\"password\" [(ngModel)]=\"forget_password\" class=\"form-control custom_form\" />\n                        <div *ngIf=\"!passwordFormGroup.controls['password'].valid && passwordFormGroup.controls['password'].dirty\">\n                            <span *ngIf=\"passwordFormGroup.controls['password'].errors['required']\" class=\"text-danger\">Password is required.</span>\n                            <span *ngIf=\"passwordFormGroup.controls['password'].errors['minlength']\" class=\"text-danger\">Must be longer than 6 characters.</span>\n                        </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <label class=\"control-label custom_form_label\">Confirm Password</label>\n                        <input type=\"password\" name=\"conf_pwd\" formControlName=\"conf\" [(ngModel)]=\"conf\" class=\"form-control custom_form\" />\n                        <div *ngIf=\"!passwordFormGroup.controls['conf'].valid && passwordFormGroup.controls['conf'].dirty\">\n                            <span *ngIf=\"passwordFormGroup.controls['conf'].errors['required']\" class=\"text-danger\">Confirm password is required.</span>\n                            <span *ngIf=\"passwordFormGroup.controls['conf'].errors['minlength']\" class=\"text-danger\">Must be longer than 6 characters.</span>\n                            <span *ngIf=\"passwordFormGroup.controls['conf'].errors['mismatch']\" class=\"text-danger\">Please add valid confirm password.</span>\n                        </div>\n                      </div>\n                      <div class=\"form-group forget_password_btn\">\n                        <button class=\"btn cancel_btn\" routerLink=\"\">Cancel</button>\n                        <button class=\"btn submit_forget_password_btn\" (click)=\"resetPassword()\" [disabled]=\"!passwordFormGroup.valid || show_spinner\">Submit <i *ngIf=\"show_spinner\" class=\"fa fa-spinner fa-spin\"></i></button>\n                       \n                      </div>\n                    </form>\n              </div>\n            </div>\n          </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/forget_password/forget_password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgetPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forget_password_service__ = __webpack_require__("../../../../../src/app/forget_password/forget_password.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ForgetPasswordComponent = /** @class */ (function () {
    function ForgetPasswordComponent(fb, ForgetPasswordService, toastr, route, router) {
        var _this = this;
        this.fb = fb;
        this.ForgetPasswordService = ForgetPasswordService;
        this.toastr = toastr;
        this.route = route;
        this.router = router;
        this.show_spinner = false;
        this.forget_password = '';
        this.conf = '';
        this.param = {};
        this.passwordFormGroup = this.fb.group({
            password: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].maxLength(6)]],
            conf: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].maxLength(6)]]
        }, {
            validator: this.passwordMatchValidator
        });
        this.route.params.subscribe(function (res) {
            _this.param = res;
            console.log(res.id, res.type);
        });
    }
    ForgetPasswordComponent.prototype.passwordMatchValidator = function (g) {
        return g.get('password').value === g.get('conf').value ? null : g.get('conf').setErrors({ 'mismatch': true });
    };
    ForgetPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgetPasswordComponent.prototype.resetPassword = function () {
        var _this = this;
        if (this.param && this.param.type == 'artist') {
            var data = {
                token: this.param.id,
                password: this.forget_password
            };
            this.show_spinner = true;
            this.ForgetPasswordService.artistChangePassword(data).subscribe(function (response) {
                _this.forget_password = '';
                _this.conf = '';
                _this.toastr.success(response['message'], 'Success!');
            }, function (error) {
                _this.toastr.error(error['error'].message, 'Error!');
                _this.show_spinner = false;
            }, function () {
                _this.show_spinner = false;
            });
        }
        else if (this.param && this.param.type == 'admin') {
            var data = {
                token: this.param.id,
                password: this.forget_password
            };
            this.show_spinner = true;
            this.ForgetPasswordService.adminChangePassword(data).subscribe(function (response) {
                _this.forget_password = '';
                _this.conf = '';
                _this.toastr.success(response['message'], 'Success!');
            }, function (error) {
                _this.toastr.error(error['error'].message, 'Error!');
                _this.show_spinner = false;
            }, function () {
                _this.show_spinner = false;
            });
        }
        else {
            var data = {
                token: this.param.id,
                password: this.forget_password
            };
            this.show_spinner = true;
            this.ForgetPasswordService.artistChangePassword(data).subscribe(function (response) {
                console.log(response);
                _this.forget_password = '';
                _this.conf = '';
                _this.toastr.success(response['message'], 'Success!');
            }, function (error) {
                _this.toastr.error(error['error'].message, 'Error!');
                _this.show_spinner = false;
            }, function () {
                _this.show_spinner = false;
            });
        }
    };
    ForgetPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/forget_password/forget_password.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__forget_password_service__["a" /* ForgetPasswordService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["f" /* Router */]])
    ], ForgetPasswordComponent);
    return ForgetPasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/forget_password/forget_password.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgetPasswordModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forget_password_component__ = __webpack_require__("../../../../../src/app/forget_password/forget_password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forget_password_service__ = __webpack_require__("../../../../../src/app/forget_password/forget_password.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_image_cropper__ = __webpack_require__("../../../../ngx-image-cropper/ngx-image-cropper.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// import { HttpClientModule, HttpClient } from '@angular/common/http';




var ForgetPasswordModule = /** @class */ (function () {
    function ForgetPasswordModule() {
    }
    ForgetPasswordModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_image_cropper__["a" /* ImageCropperModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_9_ngx_toastr__["a" /* ToastrModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* RouterModule */].forChild([
                    { path: 'forgot_password/:type/:id', component: __WEBPACK_IMPORTED_MODULE_4__forget_password_component__["a" /* ForgetPasswordComponent */] }
                ])
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__forget_password_component__["a" /* ForgetPasswordComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_5__forget_password_service__["a" /* ForgetPasswordService */]]
        })
    ], ForgetPasswordModule);
    return ForgetPasswordModule;
}());



/***/ }),

/***/ "../../../../../src/app/forget_password/forget_password.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgetPasswordService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { Http, Headers, RequestOptions, Response } from '@angular/http';



var ForgetPasswordService = /** @class */ (function () {
    function ForgetPasswordService(http) {
        this.http = http;
        this.api_host = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].API_URL;
        this.headers = new Headers({ 'Content-Type': 'application/json' });
    }
    // Artist Change password
    ForgetPasswordService.prototype.artistChangePassword = function (data) {
        return this.http.post(this.api_host + "/artist_reset_password/", data);
    };
    // User change password
    ForgetPasswordService.prototype.userChangePassword = function (data) {
        return this.http.post(this.api_host + "/user_reset_password", data);
    };
    // Admin user reset password
    ForgetPasswordService.prototype.adminChangePassword = function (data) {
        return this.http.post(this.api_host + "/admin_reset_password", data);
    };
    ForgetPasswordService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ForgetPasswordService);
    return ForgetPasswordService;
}());



/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"register-wrap\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12 col-sm-12 col-xs-12\">\n        <div class=\"register-container\">\n          <div class=\"fle-row\">\n            <div class=\"main-step {{step_flag ? 'next_form' : 'previous_form'}}\">\n                <a class=\"back-btn main_step_back\" routerLink=\"\" href=\"javascript:;\">\n                  <!-- <img alt=\"Previou Arrow\" src=\"img/prev-arrow.png\"> Back -->\n                  ×\n                </a>\n              <div class=\"heading\"><h3>Who are you?</h3></div>\n              <div class=\"select-who\">\n                <div class=\"artist\"><a href=\"javascript:;\" (click)=\"nxt_btn('artist', true)\"><img src=\"img/artist.png\" alt=\"Artist\" ><h3>Artist</h3></a></div>\n                <div class=\"listner\"><a  href=\"javascript:;\" (click)=\"nxt_btn('listener', true)\"><img src=\"img/listiner.png\" alt=\"listner\" ><h3>Listener</h3></a></div>\n              </div>\n            </div>\n            <div class=\"for-artist\">\n              <div class=\"steps step1 {{artist_cnt == 1 ? 'next_form' : ''}}\" id=\"artist-step1\" >\n                <form [formGroup]=\"artist_step1\">\n                    <a class=\"back-btn main_step_back\" href=\"javascript:;\" routerLink=\"\" >                  \n                      ×\n                    </a>\n                  <div class=\"heading\"><h3>Terms of Conditions </h3></div>\n                  <div class=\"progress_bar fill14\"></div>\n                  <div class=\"terms_condition_block mCustomScrollbar \" data-mcs-theme=\"dark-3\">\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quisquam, tempora adipisci debitis voluptates. Labore tenetur ipsa itaque ea vero repellat fuga doloribus non facere animi molestiae dolorem provident quasi veniam accusamus, ipsum minima ipsam architecto. Possimus officiis facilis iusto quod modi atque dolorum veniam reiciendis? Voluptate porro tempora quam?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quisquam, tempora adipisci debitis voluptates. Labore tenetur ipsa itaque ea vero repellat fuga doloribus non facere animi molestiae dolorem provident quasi veniam accusamus, ipsum minima ipsam architecto. Possimus officiis facilis iusto quod modi atque dolorum veniam reiciendis? Voluptate porro tempora quam?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quisquam, tempora adipisci debitis voluptates. Labore tenetur ipsa itaque ea vero repellat fuga doloribus non facere animi molestiae dolorem provident quasi veniam accusamus, ipsum minima ipsam architecto. Possimus officiis facilis iusto quod modi atque dolorum veniam reiciendis? Voluptate porro tempora quam?</p>\n                  </div>\n                  <div class=\"agree\">\n                    <div class=\"checkbox\">\n                        <label>\n                          <input type=\"checkbox\" value=\"\" formControlName=\"terms_condtion\"  name=\"artist_terms_condition\" required [(ngModel)]=\"artist_data.terms_condition\">I agree to the <a href=\"javascript:;\">Terms of Conditions</a>\n                          <div class=\"chk_check\"></div>\n                        </label>\n                    </div>\n                    <div class=\"terms_error_msg\" *ngIf=\"artist_validation[0] && !artist_step1.controls['terms_condtion'].valid\">\n                      <span *ngIf=\"artist_step1.controls['terms_condtion'].errors['required']\" class=\"text-danger\">Please select terms and conditions..</span>\n                    </div>\n                  </div>\n                  <div class=\"button_group terms_btn\">\n                    <a href=\"javascript:;\" class=\"back-btn\" (click)=\"back_btn('artist')\"><img src=\"img/prev-arrow.png\" alt=\"Previou Arrow\"> Back</a>\n                    <button type=\"submit\" (click)=\"nxt_btn('artist', artist_step1.valid, 0)\" class=\"next-btn\" >Next</button>\n                  </div>\n                </form>\n              </div>\n\n              <div class=\"steps step2 {{artist_cnt == 2 ? 'next_form' : ''}}\" id=\"profile-step2\">\n                  <form [formGroup]=\"artist_step2\">\n                    <a class=\"back-btn main_step_back\" href=\"javascript:;\" routerLink=\"\" >\n                        ×\n                      </a>\n                    <div class=\"heading\"><h3>Create An Artist Profile</h3></div>\n                    <div class=\"progress_bar fill14\"></div>\n                    <div class=\"email-form\">\n                      \n                        <div class=\"form-group\">\n                            <label for=\"email\">Email</label>\n                            <input type=\"email\" class=\"form-control\" formControlName=\"email\"  [(ngModel)]=\"artist_data.email\" name=\"artist_email\" id=\"email\" placeholder=\"Email\">\n                            <div class=\"cust_err_msg\" *ngIf=\"artist_validation[1] && !artist_step2.controls['email'].valid\">\n                              <span *ngIf=\"artist_step2.controls['email'].errors['required']\" class=\"text-danger\">Email is required.</span>\n                              <span *ngIf=\"!artist_step2.controls['email'].errors['required'] && artist_step2.controls['email'].errors['email'] && artist_step2.controls['email'].dirty\" class=\"text-danger\">Email Mismatched.</span>\n                            </div>\n                          </div>                          \n                          <div [formGroup]=\"passwordFormGroup1\">\n                            <div class=\"form-group pwd-grp\">\n                              <label for=\"pwd\">Password</label>\n                              <input type=\"password\" class=\"form-control\" formControlName=\"artist_password\" placeholder=\"Password\"  required [(ngModel)]=\"artist_data.password\" name=\"password\">\n                              <div class=\"pwd-icon\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i></div>\n                              <div class=\"cust_err_msg\" *ngIf=\"artist_validation[1] && !passwordFormGroup1.controls['artist_password'].valid \">\n                                <span *ngIf=\"passwordFormGroup1.controls['artist_password'].errors['required']\" class=\"text-danger\">Password is required.</span>\n                                <span *ngIf=\"!passwordFormGroup1.controls['artist_password'].errors['required'] && passwordFormGroup1.controls['artist_password'].errors['minlength']\" class=\"text-danger\">Must be longer than 6 characters.</span>\n                              </div>\n                            </div>\n                            <div class=\"form-group pwd-grp\">\n                              <label for=\"pwd\">Confirm Password</label>\n                              <input type=\"password\" class=\"form-control\" formControlName=\"artist_conf\"  name=\"confirm\" [(ngModel)]=\"artist_data.confirm_password\" placeholder=\"Password\" required >\n                              <div class=\"pwd-icon\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i></div>\n                              <div class=\"cust_err_msg\" *ngIf=\"artist_validation[1] && !passwordFormGroup1.controls['artist_conf'].valid\">\n                                <!-- <span *ngIf=\"passwordFormGroup.controls['conf'].errors['required']\" class=\"text-danger\">Confirm Password is required.</span> -->\n                                <span *ngIf=\"!passwordFormGroup1.controls['artist_conf'].errors['required'] && passwordFormGroup1.controls['artist_conf'].errors['minlength']\" class=\"text-danger\">Must be longer than 6 characters.</span>\n                                <span *ngIf=\"!passwordFormGroup1.controls['artist_conf'].errors['required'] && passwordFormGroup1.controls['artist_conf'].errors['mismatch']\" class=\"text-danger\">Please enter correct confirm password.</span>\n                              </div>\n                            </div>\n                          </div>\n                    </div>\n                    <div class=\"button_group\">\n                      <a href=\"javascript:;\" class=\"back-btn\" (click)=\"back_btn('artist')\"><img src=\"img/prev-arrow.png\" alt=\"Previou Arrow\"> Back</a>\n                      <button type=\"submit\" (click)=\"nxt_btn('artist', artist_step2.valid , 1)\" class=\"next-btn\"  >Next</button>\n                    </div>\n                </form>\n              </div>\n\n              <div class=\"steps step3 {{artist_cnt == 3 ? 'next_form' : ''}}\" id=\"about-step3\">\n                <a class=\"back-btn main_step_back\" href=\"javascript:;\" routerLink=\"\" >                  \n                    ×\n                  </a>\n                <div class=\"heading\"><h3>Tell Us About Yourself</h3></div>\n                <div class=\"progress_bar fill14\"></div>\n                <form [formGroup]=\"artist_step3\">\n                  <div class=\"email-form\">\n                    <div class=\"row plr15\">\n                      <div class=\"form-group col-md-6\">\n                          <label for=\"fname\">First Name</label>\n                          <input type=\"text\" class=\"form-control\" formControlName=\"fname\"  name=\"artist_fname\" [(ngModel)]=\"artist_data.fname\"  placeholder=\"First Name\">\n                          <div class=\"cust_err_msg\" *ngIf=\"artist_validation[2] && !artist_step3.controls['fname'].valid\">\n                            <span *ngIf=\"artist_step3.controls['fname'].errors['required']\" class=\"text-danger\">First name is required.</span>\n                          </div>\n                        </div>\n                        <div class=\"form-group col-md-6 pwd-grp\">\n                          <label for=\"lanem\">Last Name</label>\n                          <input type=\"text\" class=\"form-control\"  formControlName=\"lname\" [(ngModel)]=\"artist_data.lname\"  name=\"artist_lname\" placeholder=\"Last Name\">\n                          <div class=\"cust_err_msg\" *ngIf=\"artist_validation[2] && !artist_step3.controls['lname'].valid\">\n                            <span *ngIf=\"artist_step3.controls['lname'].errors['required']\" class=\"text-danger\">First name is required.</span>\n                          </div>\n                        </div>\n                      </div>\n                        <div class=\"form-group gender-grp\">\n                          <label for=\"geder\">Gender</label>\n                          <select class=\"form-control\" id=\"gender\" formControlName=\"gender\" name=\"artist_gender\" [(ngModel)]=\"artist_data.gender\">\n                              <option value=\"male\">Male</option>\n                              <option value=\"female\">Female</option>\n                          </select>\n                          <div class=\"cust_err_msg\" *ngIf=\"artist_validation[2] && !artist_step3.controls['lname'].valid\">\n                              <span *ngIf=\"artist_step3.controls['gender'].errors['required']\" class=\"text-danger\">Gender is required.</span>\n                          </div>\n                        </div>\n                        <div class=\"date-of-birth\">\n                          <label for=\"date\">Birthday</label>\n                          <div class=\"form-group\">\n                          <select class=\"form-control\"  formControlName=\"day\" name=\"artist_day\" [(ngModel)]=\"artist_data.day\">\n                              <option value=\"\">Day</option>\n                              <option *ngFor=\"let d of day\" [value]=\"d\">{{d}}</option>\n                          </select>\n                          <div class=\"terms_error_msg\" *ngIf=\"artist_validation[2] && !artist_step3.controls['day'].valid\">\n                            <span *ngIf=\"artist_step3.controls['day'].errors['required']\" class=\"text-danger\">Day is required.</span>\n                          </div>\n                        </div>\n                        <div class=\"form-group\">\n                          <select class=\"form-control\"  formControlName=\"month\" name=\"artist_month\" [(ngModel)]=\"artist_data.month\">\n                              <option value=\"\">Month</option>\n                              <option *ngFor=\"let m of month\" [value]=\"m\">{{m}}</option>\n                          </select>\n                          <div class=\"terms_error_msg\" *ngIf=\"artist_validation[2] && !artist_step3.controls['month'].valid\">\n                            <span *ngIf=\"artist_step3.controls['month'].errors['required']\" class=\"text-danger\">Month is required.</span>\n                          </div>\n                        </div>\n                        <div class=\"form-group\">\n                          <select class=\"form-control\"  formControlName=\"year\" name=\"artist_year\" [(ngModel)]=\"artist_data.year\">\n                              <option value=\"\">Year</option>\n                              <option *ngFor=\"let y of year\" [value]=\"y\">{{y}}</option>\n                          </select>\n                          <div class=\"terms_error_msg\" *ngIf=\"artist_validation[2] && !artist_step3.controls['year'].valid\">\n                            <span *ngIf=\"artist_step3.controls['year'].errors['required']\" class=\"text-danger\">Year is required.</span>\n                          </div>\n                        </div>\n                        </div>\n                        <div class=\"form-group gender-grp\">\n                          <label for=\"geder\">Phone Number</label>\n                          <input class=\"form-control\" id=\"phone\" formControlName=\"phone\" name=\"artist_phone\" [(ngModel)]=\"artist_data.phone_no\" />\n                          <div class=\"cust_err_msg\" *ngIf=\"artist_validation[2] && !artist_step3.controls['phone'].valid\">\n                            <span *ngIf=\"artist_step3.controls['phone'].errors['required']\" class=\"text-danger\">Phone Number is required.</span>\n                            <span *ngIf=\"artist_step3.controls['phone'].dirty && (artist_step3.controls['phone'].errors['pattern'] || artist_step3.controls['phone'].errors['maxlength'] || artist_step3.controls['phone'].errors['minlength'] )\" class=\"text-danger\">Please enter valid format.</span>\n                          </div>\n                        </div>\n                  </div>\n                  <div class=\"button_group\">\n                    <a href=\"javascript:;\" class=\"back-btn\" (click)=\"back_btn('artist')\"><img src=\"img/prev-arrow.png\" alt=\"Previou Arrow\"> Back</a>\n                    <button type=\"submit\" (click)=\"nxt_btn('artist', artist_step3.valid , 2)\"  class=\"next-btn\">Next</button>\n                  </div>\n                </form>\n              </div>\n\n              <div class=\"steps step4 {{artist_cnt == 4 ? 'next_form' : ''}}\" id=\"location-step4\">\n                  <a class=\"back-btn main_step_back\" href=\"javascript:;\" routerLink=\"\" > \n                    ×\n                  </a>\n                <div class=\"heading\"><h3>Where Are You From?</h3></div>\n                <div class=\"progress_bar fill14\"></div>\n                <form [formGroup]=\"artist_step4\">\n                  <div class=\"email-form\">\n                      <div class=\"form-img-wrap\">\n                        <img src=\"img/location-icon.png\" alt=\"Location Icon\">\n                        <p *ngIf=\"location == ''\">Please, Enter zip code below</p>\n                        <p *ngIf=\"location != ''\">{{location}}</p>\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"zipcode\">Zip code</label>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"zipcode\" (keyup)=\"getLocation()\"  [(ngModel)]=\"artist_data.zipcode\" name=\"artist_zipcode\" placeholder=\"Zip Code\">\n                        <div class=\"cust_err_msg\" *ngIf=\"artist_validation[3] && !artist_step4.controls['zipcode'].valid\">\n                          <span *ngIf=\"artist_step4.controls['zipcode'].errors['required']\" class=\"text-danger\">Zipcode is required.</span>\n                          <span *ngIf=\"artist_step4.controls['zipcode'].errors['pattern'] && artist_step4.controls['zipcode'].dirty\" class=\"text-danger\">please enter valid zipcode.</span>\n                        </div>\n                      </div>\n                      <div class=\"form-group gender-grp\">\n                          <label for=\"region\">Region</label>\n                          <select formControlName=\"region\" class=\"form-control\" name=\"artist_region\" [(ngModel)]=\"artist_data.region\" (change)=\"getStateByRegion(artist_data.region)\">\n                            <option value=\"\">Select Region</option>\n                            <option *ngFor=\"let r of region_list;\" [value]=\"r._id\">{{r['name']}}</option>\n                          </select>\n                          <div class=\"cust_err_msg\" *ngIf=\"artist_validation[3] && !artist_step4.controls['region'].valid\">\n                            <span *ngIf=\"artist_step4.controls['region'].errors['required']\" class=\"text-danger\">Region is required.</span>\n                          </div>\n                      </div>\n                      <div class=\"form-group gender-grp\">\n                          <label for=\"region\">State</label>\n                          <select formControlName=\"state\" class=\"form-control\" name=\"artist_state\" [(ngModel)]=\"artist_data.state\" >\n                            <option value=\"\">Select State</option>\n                            <option *ngFor=\"let s of state_list;\" [value]=\"s._id\">{{s['name']}}</option>\n                          </select>\n                          <div class=\"cust_err_msg\" *ngIf=\"artist_validation[3] && !artist_step4.controls['state'].valid\">\n                            <span *ngIf=\"artist_step4.controls['state'].errors['required']\" class=\"text-danger\">State is required.</span>\n                          </div>\n                      </div>\n                  </div>\n                  <div class=\"button_group\">\n                    <a href=\"javascript:;\" class=\"back-btn\" (click)=\"back_btn('artist')\"><img src=\"img/prev-arrow.png\" alt=\"Previou Arrow\"> Back</a>\n                    <button type=\"submit\" (click)=\"nxt_btn('artist', artist_step4.valid , 3)\" class=\"next-btn\" >Next</button>\n                  </div>\n                </form>\n              </div>\n\n              <div class=\"steps step5 {{artist_cnt == 5 ? 'next_form' : ''}}\" id=\"music-type-step5\">\n                  <a class=\"back-btn main_step_back\" href=\"javascript:;\" routerLink=\"\" >\n                    ×\n                  </a>\n                <div class=\"heading\"><h3>What Type of Music?</h3></div>\n                <div class=\"progress_bar fill14\"></div>\n                <form>\n                  <div class=\"type-music\">\n                   \n                    <ul>                                   \n                      <li *ngFor=\"let x of music_types; let i=index;\" >\n                          <input type=\"radio\" id=\"{{i}}\" name=\"radio-group\" (click)=\"selectMusciGenre(x._id)\">\n                          <label for=\"{{i}}\">{{x.name}}</label>\n                      </li>\n                    </ul>\n                    <div class=\"cust_err_msg\" *ngIf=\"artist_validation[4]\">\n                        <span class=\"text-danger\">Music Type is required.</span>\n                    </div>\n                  </div>\n                  <div class=\"button_group\">\n                    <a href=\"javascript:;\" class=\"back-btn\" (click)=\"back_btn('artist')\"><img src=\"img/prev-arrow.png\" alt=\"Previou Arrow\"> Back</a>\n                    <button type=\"submit\" (click)=\"nxt_btn('artist', (artist_data.music_type ? true : false) , 4)\"  class=\"next-btn\">Next</button>\n                  </div>\n                </form>\n              </div>\n\n\n              <div class=\"steps step6 {{artist_cnt == 6 ? 'next_form' : ''}}\" id=\"upload-step6\">\n                  <a class=\"back-btn main_step_back\" href=\"javascript:;\" routerLink=\"\" >\n                    ×\n                  </a>\n                <div class=\"heading\"><h3>Upload Profile Photo</h3></div>\n                <div class=\"progress_bar fill14\"></div>\n                <div class=\"upload-block\">\n                  <div class=\"upl-div\" >\n                    <div class=\"upload-btn\" *ngIf=\"!cropperReady\"> \n                      <span class=\"upl-img\" ><i class=\"fa fa-cloud-upload\" aria-hidden=\"true\"></i></span> \n                      <span class=\"up_text\" >Upload Photo</span> \n                      <input type=\"file\" name=\"my_doc_upload\" (change)=\"fileChangeEvent($event)\" id=\"my_doc_upload\" multiple=\"false\"> \n                      <p class=\"instrution\" >320x320px .png, .jpg 5MB or less</p>\n                    </div>\n                    <div [style.display]=\"cropperReady ? null : 'none'\">\n                      <image-cropper\n                          [imageChangedEvent]=\"imageChangedEvent\"\n                          [maintainAspectRatio]=\"true\"\n                          [aspectRatio]=\"1 / 1\"\n                          [resizeToWidth]=\"128\"\n                          format=\"jpeg\"\n                          (imageCropped)=\"imageCropped($event)\"\n                          (imageLoaded)=\"imageLoaded()\"\n                          (loadImageFailed)=\"loadImageFailed()\"\n                          [style.display]=\"cropperReady ? null : 'none'\"\n                      ></image-cropper>\n                      <div class=\"upload-btn-div\">\n                        <label for=\"fileUpload\">Upload a Different Photo</label>\n                        <input type=\"file\" name=\"my_doc_upload\" (change)=\"fileChangeEvent($event)\" id=\"my_doc_upload\" multiple=\"false\"> \n                      </div>  \n                    </div>\n                  </div>\n                  <div class=\"upl-div\">\n                    <div class=\"upload-btn-cstm_p\" *ngIf=\"!cropperReady\"> \n                      <span class=\"upl-img\"><img src=\"img/icons8-microphone2Normal.png\" alt=\"\"></span> \n                      <!-- <input type=\"file\" name=\"my_doc_upload\" id=\"my_doc_upload\" multiple=\"false\">  -->\n                    </div>\n                    <div [style.display]=\"cropperReady ? null : 'none'\">\n                      <img [src]=\"croppedImage\" style=\"height: 167px;width: 155px;\"/>\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"heading\">\n                  <div class=\"cust_err_msg\" *ngIf=\"artist_validation[5]\">\n                      <span class=\"text-danger\">Avatar is required..</span>\n                  </div>\n                </div>\n                \n                <div class=\"button_group\">\n                  <a href=\"javascript:;\" class=\"back-btn\" (click)=\"back_btn('artist')\"><img src=\"img/prev-arrow.png\" alt=\"Previou Arrow\"> Back</a>\n                  <button  (click)=\"nxt_btn('artist', cropperReady, 5)\"  class=\"next-btn\">Next</button>\n                </div>\n              </div>\n\n\n              <div class=\"steps step7 {{artist_cnt == 7 ? 'next_form' : ''}}\" id=\"social-acc-step7\">\n                  <a class=\"back-btn main_step_back\" href=\"javascript:;\" routerLink=\"\" >\n                    ×\n                  </a>\n                  <div class=\"heading\"><h3>Add Your Social Media</h3></div>\n\n                <div class=\"progress_bar fill14\"></div>\n                <div class=\"social-acc\">\n                  <div class=\"social-block\">\n                    <div class=\"form-group\">\n                        <label for=\"facebook\">Facebook</label>\n                        <input type=\"text\" class=\"form-control\" id=\"fb\" name=\"artist_fb\" [(ngModel)]=\"artist_data.share_url['facebook']\" placeholder=\"Add Account\" >\n                        <img src=\"img/fb.png\" alt=\"Facebook\">\n                      </div>\n                  </div>\n                  <div class=\"social-block\">\n                    <div class=\"form-group\">\n                        <label for=\"inst\">Instagram</label>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Add Account\" name=\"artist_insta\" [(ngModel)]=\"artist_data.share_url['instagram']\">\n                        <img src=\"img/inst.png\" alt=\"Facebook\">\n                      </div>\n                  </div>\n                  <div class=\"social-block\">\n                    <div class=\"form-group\">\n                        <label for=\"facebook\">Twitter</label>\n                        <input type=\"text\" class=\"form-control\" id=\"fb1\" placeholder=\"Add Account\" name=\"artist_tweet\" [(ngModel)]=\"artist_data.share_url['twitter']\">\n                        <img src=\"img/twitter.png\" alt=\"Facebook\">\n                      </div>\n                  </div>\n                  <div class=\"social-block\">\n                    <div class=\"form-group\">\n                        <label for=\"inst\">Youtube</label>\n                        <input type=\"text\" class=\"form-control\"  placeholder=\"Add Account\" name=\"artist_youtube\" [(ngModel)]=\"artist_data.share_url['youtube']\">\n                        <img src=\"img/youtube.png\" alt=\"Facebook\">\n                      </div>\n                  </div>\n                  <div class=\"social-block\">\n                    <div class=\"form-group\">\n                        <label for=\"inst\">Soundcloud</label>\n                        <input type=\"text\" class=\"form-control\"  placeholder=\"Add Account\" name=\"artist_sound\" [(ngModel)]=\"artist_data.share_url['sound_cloud']\">\n                        <img src=\"img/soundcloud.png\" alt=\"Facebook\">\n                      </div>\n                  </div>\n                    \n                </div>\n                <div class=\"button_group\">\n                  <a href=\"javascript:;\" class=\"back-btn\" (click)=\"back_btn('artist')\"><img src=\"img/prev-arrow.png\" alt=\"Previou Arrow\"> Back</a>\n                  <button (click)=\"artist_submit()\" [disabled]=\"show_spinner\" class=\"next-btn\">Finish <i class=\"fa fa-spinner fa-spin\" *ngIf=\"show_spinner\"></i></button>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"for-listner\">\n              <div class=\"steps step1 {{listner_cnt == 1 ? 'next_form' : ''}}\" id=\"listner-register\">\n                  <a class=\"back-btn main_step_back\" href=\"javascript:;\" routerLink=\"\" >\n                    ×\n                  </a>\n                <div class=\"social-login\">\n                  <div class=\"google-login\">\n                    <a href=\"javascript:;\" id=\"googleBtn\"><i class=\"fa fa-google\"  aria-hidden=\"true\"></i> <span>Login with Google</span></a>\n                  </div>\n                  <div class=\"fb-login\">\n                    <a href=\"javascript:;\" (click)=\"fbLogin()\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i> <span>Login with Facebook</span></a>\n                  </div>\n                </div>\n                <div class=\"progress_bar fill14\"></div>\n                <div class=\"or\">or with email</div>\n                <form [formGroup]=\"listener_step1\">\n                  <div class=\"email-form\">\n                      <div class=\"form-group\">\n                          <label for=\"email\">Email</label>\n                          <input type=\"email\" formControlName=\"email\" [(ngModel)]=\"listener_data.email\" class=\"form-control\" id=\"email1\" placeholder=\"Email\">\n                          <div class=\"cust_err_msg\" *ngIf=\"listener_validation[0] && !listener_step1.controls['email'].valid\">\n                            <span *ngIf=\"listener_step1.controls['email'].errors['required']\" class=\"text-danger\">Email is required.</span>\n                            <span *ngIf=\"!listener_step1.controls['email'].errors['required'] && listener_step1.controls['email'].errors['email'] && listener_step1.controls['email'].dirty\" class=\"text-danger\">Email Mismatched.</span>\n                          </div>\n                      </div>\n                      <div [formGroup]=\"passwordFormGroup\">\n                        <div class=\"form-group pwd-grp\">\n                          <label for=\"pwd\">Password</label>\n                          <input type=\"password\" class=\"form-control\" formControlName=\"password\" [(ngModel)]=\"listener_data.password\" placeholder=\"Password\">\n                          <div class=\"pwd-icon\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i></div>\n                          <div class=\"cust_err_msg\" *ngIf=\"listener_validation[0] && !passwordFormGroup.controls['password'].valid\">\n                            <span *ngIf=\"passwordFormGroup.controls['password'].errors['required']\" class=\"text-danger\">Password is required.</span>\n                            <span *ngIf=\"!passwordFormGroup.controls['password'].errors['required'] && passwordFormGroup.controls['password'].errors['minlength'] && passwordFormGroup.controls['password'].dirty\" class=\"text-danger\">Must be longer than 6 characters.</span>\n                          </div>\n                        </div>\n                        <div class=\"form-group pwd-grp\">\n                          <label for=\"pwd\">Confirm Password</label>\n                          <input type=\"password\" class=\"form-control\" formControlName=\"conf\"  placeholder=\"Confirm Password\">\n                          <div class=\"pwd-icon\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i></div>\n                          <div class=\"cust_err_msg\" *ngIf=\"listener_validation[0] && !passwordFormGroup.controls['conf'].valid \">\n                            <span *ngIf=\"passwordFormGroup.controls['conf'].errors['required']\" class=\"text-danger\">Confirm password is required.</span>\n                            <span *ngIf=\"!passwordFormGroup.controls['conf'].errors['required'] && passwordFormGroup.controls['conf'].errors['minlength'] && passwordFormGroup.controls['conf'].dirty\" class=\"text-danger\">Must be longer than 6 characters.</span>\n                            <span *ngIf=\"!passwordFormGroup.controls['conf'].errors['required'] && passwordFormGroup.controls['conf'].errors['mismatch'] && passwordFormGroup.controls['conf'].dirty\" class=\"text-danger\">Please enter correct confirm password.</span>\n                          </div>\n                        </div>\n                      </div>\n                  </div>\n                  <div class=\"button_group\">\n                    <a href=\"javascript:;\" class=\"back-btn\" (click)=\"back_btn('listener')\"><img src=\"img/prev-arrow.png\" alt=\"Previou Arrow\"> Back</a>\n                    <button type=\"submit\" (click)=\"nxt_btn('listener', listener_step1.valid, 0)\" class=\"next-btn\">Next</button>\n                  </div>\n                </form>\n              </div>\n\n              <div class=\"steps step2 {{listner_cnt == 2 ? 'next_form' : ''}}\" id=\"artist-step1\">\n                  <a class=\"back-btn main_step_back\" href=\"javascript:;\" routerLink=\"\" >\n                    ×\n                  </a>\n                <div class=\"heading\"><h3>Terms of Conditions </h3></div>\n                <div class=\"progress_bar fill14\"></div>\n                <form [formGroup]=\"listener_step2\">\n                  <div class=\"terms_condition_block mCustomScrollbar \" data-mcs-theme=\"dark-3\">\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quisquam, tempora adipisci debitis voluptates. Labore tenetur ipsa itaque ea vero repellat fuga doloribus non facere animi molestiae dolorem provident quasi veniam accusamus, ipsum minima ipsam architecto. Possimus officiis facilis iusto quod modi atque dolorum veniam reiciendis? Voluptate porro tempora quam?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quisquam, tempora adipisci debitis voluptates. Labore tenetur ipsa itaque ea vero repellat fuga doloribus non facere animi molestiae dolorem provident quasi veniam accusamus, ipsum minima ipsam architecto. Possimus officiis facilis iusto quod modi atque dolorum veniam reiciendis? Voluptate porro tempora quam?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quisquam, tempora adipisci debitis voluptates. Labore tenetur ipsa itaque ea vero repellat fuga doloribus non facere animi molestiae dolorem provident quasi veniam accusamus, ipsum minima ipsam architecto. Possimus officiis facilis iusto quod modi atque dolorum veniam reiciendis? Voluptate porro tempora quam?</p>\n                  </div>\n                  <div class=\"agree\">\n                    <div class=\"checkbox\">\n                        <label>\n                          <input type=\"checkbox\" formControlName=\"terms_condtion\" [(ngModel)]=\"listener_data.terms_condition\" value=\"\">I agree to the <a href=\"javascript:;\">Terms of Conditions</a>\n                          <div class=\"chk_check\"></div>\n                        </label>\n                    </div>\n                    <div class=\"terms_error_msg\" *ngIf=\"listener_validation[1] && !listener_step2.controls['terms_condtion'].valid\">\n                      <span *ngIf=\"listener_step2.controls['terms_condtion'].errors['required']\" class=\"text-danger\">Please select terms and conditions..</span>\n                    </div>\n                  </div>\n                  <div class=\"button_group\">\n                    <a href=\"javascript:;\" class=\"back-btn\" (click)=\"back_btn('listener')\"><img src=\"img/prev-arrow.png\" alt=\"Previou Arrow\"> Back</a>\n                    <button type=\"submit\" (click)=\"nxt_btn('listener', listener_step2.valid, 1)\" class=\"next-btn\">Next</button>\n                  </div>\n                </form>\n              </div>\n\n              <div class=\"steps step3 {{listner_cnt == 3 ? 'next_form' : ''}}\" id=\"user-step2\">\n                  <a class=\"back-btn main_step_back\" href=\"javascript:;\" routerLink=\"\" >\n                    ×\n                  </a>\n                <div class=\"heading\"><h3>Create User Name</h3></div>\n                <div class=\"progress_bar fill14\"></div>\n                <form [formGroup]=\"listener_step3\">\n                  <div class=\"email-form\">\n                    <div class=\"row plr15\">\n                    <div class=\"form-group col-md-6\">\n                        <label for=\"fname\">First Name</label>\n                        <input type=\"text\" formControlName=\"fname\" name=\"listener_fname\" class=\"form-control\" [(ngModel)]=\"listener_data.fname\" placeholder=\"First Name\">\n                        <div class=\"terms_error_msg\" *ngIf=\"listener_validation[2] && !listener_step3.controls['fname'].valid\">\n                          <span *ngIf=\"listener_step3.controls['fname'].errors['required']\" class=\"text-danger\">First Name is required.</span>\n                        </div>\n                      </div>\n                      <div class=\"form-group pwd-grp col-md-6 pr0\">\n                        <label for=\"lanem\">Last Name</label>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"lname\" name=\"listener_lname\" [(ngModel)]=\"listener_data.lname\"  placeholder=\"Last Name\">\n                        <div class=\"terms_error_msg\" *ngIf=\"listener_validation[2] && !listener_step3.controls['lname'].valid\">\n                          <span *ngIf=\"listener_step3.controls['lname'].errors['required']\" class=\"text-danger\">Last Name is required.</span>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"form-group gender-grp\">\n                        <label for=\"geder\">Gender</label>\n                        <select class=\"form-control\" id=\"listener_gender\" formControlName=\"gender\" name=\"listener_gender\" [(ngModel)]=\"listener_data.gender\">\n                            <option value=\"male\">Male</option>\n                            <option value=\"female\">Female</option>\n                        </select>\n                        <div class=\"terms_error_msg\" *ngIf=\"listener_validation[2] && !listener_step3.controls['gender'].valid\">\n                          <span *ngIf=\"listener_step3.controls['gender'].errors['required']\" class=\"text-danger\">Gender is required.</span>\n                        </div>\n                      </div>\n                      <div class=\"date-of-birth\">\n                        <label for=\"date\">Birthday</label>\n                        <div class=\"form-group\">\n                        <select class=\"form-control\" id=\"day\" formControlName=\"day\" name=\"listener_day\" [(ngModel)]=\"listener_data.day\">\n                            <option value=\"\">Day</option>\n                            <option *ngFor=\"let d of day\" [value]=\"d\">{{d}}</option>\n                        </select>\n                        <div class=\"terms_error_msg\" *ngIf=\"listener_validation[2] && !listener_step3.controls['day'].valid\">\n                          <span *ngIf=\"listener_step3.controls['day'].errors['required']\" class=\"text-danger\">Day is required.</span>\n                        </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <select class=\"form-control\" id=\"month\" formControlName=\"month\" name=\"listener_month\" [(ngModel)]=\"listener_data.month\">\n                            <option value=\"\">Month</option>\n                            <option *ngFor=\"let m of month\" [value]=\"m\">{{m}}</option>\n                        </select>\n                        <div class=\"terms_error_msg\" *ngIf=\"listener_validation[2] && !listener_step3.controls['month'].valid\">\n                          <span *ngIf=\"listener_step3.controls['month'].errors['required']\" class=\"text-danger\">Month is required.</span>\n                        </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <select class=\"form-control\" id=\"year\" formControlName=\"year\" name=\"listener_year\" [(ngModel)]=\"listener_data.year\">\n                            <option value=\"\">Year</option>\n                            <option *ngFor=\"let y of year\" [value]=\"y\">{{y}}</option>\n                        </select>\n                        <div class=\"terms_error_msg\" *ngIf=\"listener_validation[2] && !listener_step3.controls['year'].valid\">\n                          <span *ngIf=\"listener_step3.controls['year'].errors['required']\" class=\"text-danger\">Year is required.</span>\n                        </div>\n                      </div>\n                      </div>\n\n                      <div class=\"form-group\">\n                        <label class=\"control-label\">Phone Number</label>\n                        <input name=\"listener_phone\" class=\"form-control\" formControlName=\"phone\" [(ngModel)]=\"listener_data.phone_no\"/>\n                        <div class=\"terms_error_msg\" *ngIf=\"listener_validation[2] && !listener_step3.controls['phone'].valid\">\n                          <span *ngIf=\"listener_step3.controls['phone'].errors['required']\" class=\"text-danger\">Phone number is required.</span>\n                          <span *ngIf=\"(listener_step3.controls['phone'].errors['maxlength'] || listener_step3.controls['phone'].errors['minlength'])  && listener_step3.controls['phone'].dirty\" class=\"text-danger\">Please enter valid phone number.</span>\n                        </div>\n                      </div>\n                  </div>\n                  <div class=\"button_group\">\n                    <a href=\"javascript:;\" class=\"back-btn\" (click)=\"back_btn('listener')\"><img src=\"img/prev-arrow.png\" alt=\"Previou Arrow\"> Back</a>\n                    <button type=\"submit\" (click)=\"nxt_btn('listener', listener_step3.valid, 2)\" class=\"next-btn\">Next</button>\n                  </div>\n                </form>\n              </div>\n\n              <div class=\"steps step4 {{listner_cnt == 4 ? 'next_form' : ''}}\" id=\"location-step4\">\n                  <a class=\"back-btn main_step_back\" href=\"javascript:;\" routerLink=\"\" >\n                    ×\n                  </a>\n                <div class=\"heading\"><h3>Where Are You From?</h3></div>\n                <div class=\"progress_bar fill14\"></div>\n                <form [formGroup]=\"listener_step4\">\n                  <div class=\"email-form\">\n                      <div class=\"form-img-wrap\">\n                        <img src=\"img/location-icon.png\" alt=\"Location Icon\">\n                        <p *ngIf=\"location == ''\">Please, Enter zip code below</p>\n                        <p *ngIf=\"location != ''\">{{location}}</p>\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"zipcode\">Zip code</label>\n                        <input type=\"text\" class=\"form-control\"  formControlName=\"zipcode\" (keyup)=\"getLocationForListener()\"  [(ngModel)]=\"listener_data.zipcode\" name=\"listener_zipcode\"  placeholder=\"Zip Code\">\n                        <div class=\"cust_err_msg\" *ngIf=\"listener_validation[3] && !listener_step4.controls['zipcode'].valid\">\n                          <span *ngIf=\"listener_step4.controls['zipcode'].errors['required']\" class=\"text-danger\">Zipcode is required.</span>\n                          <span *ngIf=\"listener_step4.controls['zipcode'].errors['pattern'] && listener_step4.controls['zipcode'].dirty\" class=\"text-danger\">please enter valid zipcode.</span>\n                        </div>\n                      </div>\n                      <div class=\"form-group gender-grp\">\n                        <label for=\"region\">Region</label>\n                        <select formControlName=\"region\" class=\"form-control\" name=\"listener_region\" [(ngModel)]=\"listener_data.region\" (change)=\"getStateByRegion(listener_data.region)\">\n                          <option value=\"\">Select Region</option>\n                          <option *ngFor=\"let r of region_list;\" [value]=\"r._id\">{{r['name']}}</option>\n                        </select>\n                        <div class=\"cust_err_msg\" *ngIf=\"listener_validation[3] && !listener_step4.controls['region'].valid\">\n                          <span *ngIf=\"listener_step4.controls['region'].errors['required']\" class=\"text-danger\">Region is required.</span>\n                        </div>\n                    </div>\n                    <div class=\"form-group gender-grp\">\n                        <label for=\"region\">State</label>\n                        <select formControlName=\"state\" class=\"form-control\" name=\"listener_state\" [(ngModel)]=\"listener_data.state\" >\n                          <option value=\"\">Select State</option>\n                          <option *ngFor=\"let s of state_list;\" [value]=\"s._id\">{{s['name']}}</option>\n                        </select>\n                        <div class=\"cust_err_msg\" *ngIf=\"listener_validation[3] && !listener_step4.controls['state'].valid\">\n                          <span *ngIf=\"listener_step4.controls['state'].errors['required']\" class=\"text-danger\">State is required.</span>\n                        </div>\n                    </div>\n                  </div>\n                  <div class=\"button_group\">\n                    <a href=\"javascript:;\" class=\"back-btn\" (click)=\"back_btn('listener')\"><img src=\"img/prev-arrow.png\" alt=\"Previou Arrow\"> Back</a>\n                    <button type=\"submit\" (click)=\"nxt_btn('listener', listener_step4.valid, 3)\" class=\"next-btn\">Next</button>\n                  </div>\n                </form>\n              </div>\n\n              <div class=\"steps step5 {{listner_cnt == 5 ? 'next_form' : ''}}\" id=\"music-type-step5\">\n                  <a class=\"back-btn main_step_back\" href=\"javascript:;\" routerLink=\"\" >\n                    ×\n                  </a>\n                <div class=\"heading\"><h3>What Type of Music?</h3></div>\n                <div class=\"progress_bar fill14\"></div>\n                <div class=\"type-music\">\n                  <ul>\n                    <li *ngFor=\"let x of music_types\">\n                        <input type=\"checkbox\" name=\"music\" (change)=\"onChangeForListener(x['_id'], $event.target.checked)\">\n                        <div class=\"music-checked chk-{{x['alias']}}\"  >{{x.name}}</div>\n                    </li>\n                  </ul>\n                  <div class=\"cust_err_msg\" *ngIf=\"listener_validation[4]\">\n                    <span class=\"text-danger\">Please select atleaset one music type.</span>\n                  </div>\n                </div>\n                <div class=\"button_group\">\n                  <a href=\"javascript:;\" class=\"back-btn\" (click)=\"back_btn('listener')\"><img src=\"img/prev-arrow.png\" alt=\"Previou Arrow\"> Back</a>\n                  <button (click)=\"listener_submit()\" [disabled]=\"show_spinner\" class=\"next-btn\">Finish <i *ngIf=\"show_spinner\" class=\"fa fa-spinner fa-spin\"></i></button>\n                </div>\n              </div>\n            </div>\n          </div>\n          \n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_service__ = __webpack_require__("../../../../../src/app/register/register.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular5_social_login__ = __webpack_require__("../../../../angular5-social-login/angular5-social-login.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular5_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular5_social_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_message_service__ = __webpack_require__("../../../../../src/app/shared/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(fb, RegisterService, toastr, router, socialAuthService, MessageService) {
        var _this = this;
        this.fb = fb;
        this.RegisterService = RegisterService;
        this.toastr = toastr;
        this.router = router;
        this.socialAuthService = socialAuthService;
        this.MessageService = MessageService;
        this.user = '';
        this.artist_cnt = 0;
        this.listner_cnt = 0;
        this.step_flag = true;
        this.show_spinner = false;
        this.music_types = [];
        this.region_list = [];
        this.state_list = [];
        this.artist_data = {
            'share_url': {
                'facebook': '',
                'instagram': '',
                'twitter': '',
                'youtube': '',
                'sound_cloud': ''
            }
        };
        this.listener_data = {
            'music_type': []
        };
        this.user_data = {};
        this.location = '';
        this.day = [];
        this.month = [];
        this.year = [];
        this.imageChangedEvent = '';
        this.croppedImage = '';
        this.cropperReady = false;
        this.artist_validation = [false, false, false, false, false, false, false];
        this.listener_validation = [false, false, false, false, false];
        this.artist_cnt = 0;
        this.listner_cnt = 0;
        this.day = [];
        this.month = [];
        this.year = [];
        for (var i = 1; i <= 31; i++) {
            this.day.push(i);
        }
        for (var i = 1; i <= 12; i++) {
            this.month.push(i);
        }
        for (var i = 1900; i <= (new Date()).getFullYear(); i++) {
            this.year.push(i);
        }
        this.artist_step1 = this.fb.group({
            terms_condtion: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]
        });
        this.passwordFormGroup1 = this.fb.group({
            artist_password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(6)],
            artist_conf: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(6)]
        }, {
            validator: this.passwordMatchValidator
        });
        this.passwordFormGroup = this.fb.group({
            password: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(6)]],
            conf: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(6)]]
        }, {
            validator: this.passwordMatchValidatorListener
        });
        this.artist_step2 = this.fb.group({
            'email': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].email]],
            passwordFormGroup1: this.passwordFormGroup1
        });
        this.artist_step3 = this.fb.group({
            fname: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]],
            lname: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]],
            gender: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]],
            day: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]],
            month: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]],
            year: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]],
            phone: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].pattern('[0-9]+'), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].maxLength(10)]]
        });
        this.artist_step4 = this.fb.group({
            zipcode: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].pattern('^[A-Za-z0-9]+$')]],
            region: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]],
            state: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]]
        });
        this.listener_step1 = this.fb.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].email]],
            passwordFormGroup: this.passwordFormGroup
        });
        this.listener_step2 = this.fb.group({
            terms_condtion: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]
        });
        this.listener_step3 = this.fb.group({
            fname: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]],
            lname: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]],
            day: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]],
            month: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]],
            year: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]],
            gender: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]],
            phone: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].pattern('[0-9]+'), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].maxLength(10)]]
        });
        this.listener_step4 = this.fb.group({
            zipcode: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].pattern('^[0-9]+$')]],
            region: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]],
            state: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]]
        });
        this.RegisterService.getAllMusicType().subscribe(function (response) {
            _this.music_types = response['music'];
        });
        this.getRegionList();
    }
    // Code for initialize google login button
    RegisterComponent.prototype.googleInit = function () {
        var _this = this;
        gapi.load('auth2', function () {
            _this.auth2 = gapi.auth2.init({
                client_id: __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].GOOGLE_CLIENT_ID,
                cookiepolicy: 'single_host_origin',
                scope: 'profile email'
            });
            _this.attachSignin(document.getElementById('googleBtn'));
        });
    };
    // Code for open google signin popup and do login
    RegisterComponent.prototype.attachSignin = function (element) {
        var _this = this;
        this.auth2.attachClickHandler(element, {}, function (googleUser) {
            var profile = googleUser.getBasicProfile();
            console.log(profile, googleUser.getAuthResponse().id_token);
            //YOUR CODE HERE
            var data = {
                U3: profile.getEmail(),
                ofa: profile.ofa,
                wea: profile.wea,
                provider: 'gmail',
                Eea: profile.getId(),
                image: profile.getImageUrl(),
                token: googleUser.getAuthResponse().id_token
            };
            _this.RegisterService.userGoogleLogin(data).subscribe(function (response) {
                _this.toastr.success(response['message'], 'Success!');
                localStorage.setItem('user', JSON.stringify(response));
                _this.user = JSON.parse(localStorage.getItem('user'));
                _this.MessageService.sendMessage({ 'loggedin_user': _this.user });
                _this.router.navigate(['']);
            }, function (error) {
                _this.toastr.error(error['error'].message, 'Error!');
            });
        }, function (error) {
            alert(JSON.stringify(error, undefined, 2));
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
        this.googleInit();
    };
    RegisterComponent.prototype.passwordMatchValidator = function (g) {
        return g.get('artist_password').value === g.get('artist_conf').value ? null : g.get('artist_conf').setErrors({ 'mismatch': true });
    };
    RegisterComponent.prototype.passwordMatchValidatorListener = function (g) {
        return g.get('password').value === g.get('conf').value ? null : g.get('conf').setErrors({ 'mismatch': true });
    };
    // get location details based on zipcode
    RegisterComponent.prototype.getLocation = function () {
        var _this = this;
        if (this.artist_data['zipcode']) {
            this.RegisterService.getLocationFromZipCode(this.artist_data['zipcode']).subscribe(function (response) {
                var res = response;
                if (res['results'].length > 0 && res['results'][0].hasOwnProperty('address_components')) {
                    if (res['results'][0]['address_components'].length > 3) {
                        _this.location = res['results'][0]['address_components'][1]['long_name'] + ', ' + res['results'][0]['address_components'][3]['long_name'];
                    }
                    else if (res['results'][0]['address_components'].length > 2) {
                        _this.location = res['results'][0]['address_components'][1]['long_name'] + ', ' + res['results'][0]['address_components'][2]['long_name'];
                    }
                }
                else {
                    _this.location = '';
                }
            });
        }
        else {
            this.location = '';
        }
    };
    // get location details based on zipcode for listener
    RegisterComponent.prototype.getLocationForListener = function () {
        var _this = this;
        if (this.listener_data['zipcode']) {
            this.RegisterService.getLocationFromZipCode(this.listener_data['zipcode']).subscribe(function (response) {
                var res = response;
                if (res['results'].length > 0 && res['results'][0].hasOwnProperty('address_components')) {
                    if (res['results'][0]['address_components'].length > 3) {
                        _this.location = res['results'][0]['address_components'][1]['long_name'] + ', ' + res['results'][0]['address_components'][3]['long_name'];
                    }
                    else if (res['results'][0]['address_components'].length > 2) {
                        _this.location = res['results'][0]['address_components'][1]['long_name'] + ', ' + res['results'][0]['address_components'][2]['long_name'];
                    }
                }
                else {
                    _this.location = '';
                }
            });
        }
        else {
            this.location = '';
        }
    };
    // manage music type selection for artist
    RegisterComponent.prototype.onChange = function (type, isChecked) {
        if (isChecked) {
            this.artist_data.music_type.push(type);
        }
        else {
            var index = this.artist_data.music_type.findIndex(function (x) { return x == type; });
            this.artist_data.music_type.splice(index, 1);
        }
    };
    // manage music type selection for artist
    RegisterComponent.prototype.onChangeForListener = function (type, isChecked) {
        if (isChecked) {
            this.listener_data.music_type.push(type);
        }
        else {
            var index = this.listener_data.music_type.findIndex(function (x) { return x == type; });
            this.listener_data.music_type.splice(index, 1);
        }
    };
    RegisterComponent.prototype.fileChangeEvent = function (event) {
        var fileList = event.target.files;
        console.log(event.target.files);
        if (event.target.files.length > 0) {
            var allow_types = ['image/png', 'image/jpg', 'image/jpeg'];
            if (allow_types.indexOf(fileList[0].type) == -1) {
                this.toastr.error('Invalid file format.', 'Error!');
                return false;
            }
            this.imageChangedEvent = event;
            console.log('object', event.target.files);
            if (event.target.files.length <= 0) {
                this.cropperReady = false;
            }
        }
    };
    RegisterComponent.prototype.imageCropped = function (image) {
        this.croppedImage = image;
    };
    RegisterComponent.prototype.imageLoaded = function () {
        this.cropperReady = true;
    };
    RegisterComponent.prototype.imageLoadFailed = function () {
        console.log('Load failed');
    };
    // Select music genre
    RegisterComponent.prototype.selectMusciGenre = function (id) {
        this.artist_data['music_type'] = id;
    };
    // Handle submit event of artist form
    RegisterComponent.prototype.artist_submit = function () {
        var _this = this;
        var file = this.imageChangedEvent.target.files[0];
        var new_file = this.dataURLtoFile(this.croppedImage, file.name);
        var formData = new FormData();
        formData.append('email', this.artist_data['email']);
        formData.append('password', this.artist_data['password']);
        formData.append('first_name', this.artist_data['fname']);
        formData.append('last_name', this.artist_data['lname']);
        formData.append('zipcode', this.artist_data['zipcode']);
        formData.append('gender', this.artist_data['gender']);
        formData.append('music_type', this.artist_data['music_type']);
        formData.append('image', new_file);
        formData.append('phone_no', this.artist_data['phone_no']);
        formData.append('state', this.artist_data['state']);
        formData.append('share_url', JSON.stringify(this.artist_data['share_url']));
        formData.append('dob', (new Date(this.artist_data['year'], this.artist_data['month'], this.artist_data['day']).toString()));
        this.show_spinner = true;
        this.RegisterService.artistRegistration(formData).subscribe(function (response) {
            console.log('response', response);
            _this.step_flag = true;
            _this.location = '';
            _this.artist_cnt = 0;
            _this.artist_data = {
                'share_url': {
                    'facebook': '',
                    'instagram': '',
                    'twitter': '',
                    'youtube': '',
                    'sound_cloud': ''
                }
            };
            _this.toastr.success('Registration done successfully and confirmation email sent to your account please verify to to do login.', 'Success!');
            _this.show_spinner = false;
            _this.router.navigate(['']);
        }, function (error) {
            _this.toastr.error(error['error'].message, 'Error!');
            _this.show_spinner = false;
        }, function () {
            _this.show_spinner = false;
        });
    };
    // Handle submit event of listener form
    RegisterComponent.prototype.listener_submit = function () {
        var _this = this;
        if (this.listener_data.music_type && this.listener_data.music_type.length <= 0) {
            this.listener_validation[4] = true;
        }
        else {
            this.listener_validation[4] = false;
            var data = {
                email: this.listener_data['email'],
                password: this.listener_data['password'],
                first_name: this.listener_data['fname'],
                last_name: this.listener_data['lname'],
                zipcode: this.listener_data['zipcode'],
                music_type: this.listener_data['music_type'],
                gender: this.listener_data['gender'],
                phone_no: this.listener_data['phone_no'],
                state: this.listener_data['state'],
                dob: new Date(this.listener_data['year'], this.listener_data['month'], this.listener_data['day'])
            };
            console.log('listener', data);
            this.show_spinner = true;
            this.RegisterService.listenerRegistration(data).subscribe(function (response) {
                console.log('response', response);
                _this.step_flag = true;
                _this.listner_cnt = 0;
                _this.location = '';
                _this.listener_data = {
                    'music_type': []
                };
                _this.toastr.success('Registration done successfully and confirmation email sent to your account please verify to to do login.', 'Success!');
                _this.show_spinner = false;
                _this.router.navigate(['']);
            }, function (error) {
                _this.toastr.error(error['error'].message, 'Error!');
                _this.show_spinner = false;
            }, function () {
                _this.show_spinner = false;
            });
        }
    };
    RegisterComponent.prototype.nxt_btn = function (step_lbl, flag, index) {
        this.step_flag = false;
        console.log(step_lbl, this.artist_cnt);
        if (step_lbl == 'artist' && flag) {
            this.artist_validation[index] = !flag;
            this.artist_cnt++;
        }
        else if (step_lbl == 'artist') {
            this.artist_validation[index] = !flag;
        }
        if (step_lbl == 'listener' && flag) {
            this.listner_cnt++;
            this.listener_validation[index] = !flag;
        }
        else if (step_lbl == 'listener') {
            this.listener_validation[index] = !flag;
        }
    };
    RegisterComponent.prototype.back_btn = function (step_lbl) {
        if (step_lbl == 'artist') {
            this.artist_cnt--;
            if (this.artist_cnt == 0)
                this.step_flag = true;
        }
        else {
            this.listner_cnt--;
            if (this.listner_cnt == 0)
                this.step_flag = true;
        }
    };
    RegisterComponent.prototype.dataURLtoFile = function (dataurl, filename) {
        var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1], bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
    };
    RegisterComponent.prototype.getRegionList = function () {
        var _this = this;
        this.RegisterService.getAllRegion().subscribe(function (response) {
            _this.region_list = response['Region'];
        });
    };
    RegisterComponent.prototype.getStateByRegion = function (id) {
        var _this = this;
        if (id && id != "") {
            this.RegisterService.getStateByRegion({ region: id }).subscribe(function (response) {
                _this.state_list = response['state'];
            });
        }
    };
    // Login or registration with facebook
    RegisterComponent.prototype.fbLogin = function () {
        var _this = this;
        var socialPlatformProvider = __WEBPACK_IMPORTED_MODULE_6_angular5_social_login__["FacebookLoginProvider"].PROVIDER_ID;
        this.socialAuthService.signIn(socialPlatformProvider).then(function (data) {
            _this.RegisterService.userFacebookLogin(data).subscribe(function (response) {
                _this.toastr.success(response['message'], 'Success!');
                localStorage.setItem('user', JSON.stringify(response));
                _this.user = JSON.parse(localStorage.getItem('user'));
                _this.MessageService.sendMessage({ 'loggedin_user': _this.user });
                _this.router.navigate(['']);
            }, function (error) {
                _this.toastr.error(error['error'].message, 'Error!');
            });
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__register_service__["a" /* RegisterService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_6_angular5_social_login__["AuthService"],
            __WEBPACK_IMPORTED_MODULE_7__shared_message_service__["a" /* MessageService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/register/register.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getAuthServiceConfigs */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_service__ = __webpack_require__("../../../../../src/app/register/register.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_image_cropper__ = __webpack_require__("../../../../ngx-image-cropper/ngx-image-cropper.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular5_social_login__ = __webpack_require__("../../../../angular5-social-login/angular5-social-login.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular5_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angular5_social_login__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// import { HttpClientModule, HttpClient } from '@angular/common/http';






// Configs 
function getAuthServiceConfigs() {
    var config = new __WEBPACK_IMPORTED_MODULE_12_angular5_social_login__["AuthServiceConfig"]([
        {
            id: __WEBPACK_IMPORTED_MODULE_12_angular5_social_login__["FacebookLoginProvider"].PROVIDER_ID,
            provider: new __WEBPACK_IMPORTED_MODULE_12_angular5_social_login__["FacebookLoginProvider"](__WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].FB_APPID.toString())
        }
    ]);
    return config;
}
var RegisterModule = /** @class */ (function () {
    function RegisterModule() {
    }
    RegisterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_12_angular5_social_login__["SocialLoginModule"],
                __WEBPACK_IMPORTED_MODULE_8_ngx_image_cropper__["a" /* ImageCropperModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_9_ngx_toastr__["a" /* ToastrModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* RouterModule */].forChild([
                    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__register_component__["a" /* RegisterComponent */] }
                ])
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__register_component__["a" /* RegisterComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_5__register_service__["a" /* RegisterService */], { provide: __WEBPACK_IMPORTED_MODULE_12_angular5_social_login__["AuthServiceConfig"], useFactory: getAuthServiceConfigs }]
        })
    ], RegisterModule);
    return RegisterModule;
}());



/***/ }),

/***/ "../../../../../src/app/register/register.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { Http, Headers, RequestOptions, Response } from '@angular/http';



var RegisterService = /** @class */ (function () {
    function RegisterService(http) {
        this.http = http;
        this.api_host = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].API_URL;
        this.headers = new Headers();
    }
    RegisterService.prototype.getLocationFromZipCode = function (code) {
        return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + code + '&key=' + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].GMAP_KEY);
    };
    // Artist Registration service
    RegisterService.prototype.artistRegistration = function (data) {
        return this.http.post(this.api_host + "/artist_registration", data);
    };
    // Listener Registration service
    RegisterService.prototype.listenerRegistration = function (data) {
        return this.http.post(this.api_host + "/user_registration", data);
    };
    // get All music type
    RegisterService.prototype.getAllMusicType = function () {
        return this.http.get(this.api_host + "/music_type");
    };
    // get all region
    RegisterService.prototype.getAllRegion = function () {
        return this.http.get(this.api_host + "/region");
    };
    // Get state based on region
    RegisterService.prototype.getStateByRegion = function (data) {
        return this.http.post(this.api_host + "/state_by_region", data);
    };
    // Facebook login
    RegisterService.prototype.userFacebookLogin = function (data) {
        return this.http.post(this.api_host + "/user_registration_facebook", data);
    };
    // Google login
    RegisterService.prototype.userGoogleLogin = function (data) {
        return this.http.post(this.api_host + "/user_registration_gmail", data);
    };
    RegisterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], RegisterService);
    return RegisterService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(router) {
        this.router = router;
        this.isAuthenticated = true; // Set this value dynamically
    }
    AuthService.prototype.canActivate = function (route, state) {
        var user = localStorage.getItem('user');
        if (user) {
            return true;
        }
        if (state.url.includes('/admin')) {
            this.router.navigate(['/admin/login']);
        }
        else if (state.url.includes('/admin') && !user.hasOwnProperty('admin')) {
            this.router.navigate(['']);
        }
        else {
            this.router.navigate(['']);
        }
        return false;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/carousel/carousel.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-carousel [inputs]=\"carouselOne\" *ngIf=\"carouselType == 'normal'\">\r\n  <ngx-tile NgxCarouselItem *ngFor=\"let image of images; let i = index\">\r\n      <div class=\"final-wrap\">\r\n        <div class=\"img-wrap\">\r\n          <img src=\"{{image.source}}\" alt=\"Finalists\">\r\n          <a href=\"javascript:void(0)\" class=\"fan\" (click)=\"followArtist(image['artist_id'])\">\r\n            <i class=\"fa fa-heart-o\" aria-hidden=\"true\"></i>\r\n          </a>\r\n        </div>\r\n        <div class=\"content-wrap\">\r\n          <div class=\"player\">\r\n            <div class=\"title\">\r\n              <a href=\"#\">{{ image.title }}</a>\r\n            </div>\r\n            <div class=\"finalist-name\">{{image.name}}</div>\r\n            <div class=\"action-btn custom-action-btn\">\r\n                <a [style.display]=\"!audio_ins[i] ? 'block' : 'none'\" (click)=\"playAudio(image.audio, i, images)\" class=\"play_img\" ><img src=\"img/play_icon.png\"/></a>\r\n                <a [style.display]=\"audio_ins[i] ? 'block' : 'none'\" (click)=\"stopAudio(i, images)\" class=\"pause_img\"><img src=\"img/pause_icon.png\"/></a>\r\n            </div>\r\n          </div>\r\n          <div class=\"location\">\r\n            <p>\r\n              <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\r\n              <span>{{image.location}}</span>\r\n            </p>\r\n            <div class=\"cat {{image.alias}}\">{{image.type}}</div>\r\n          </div>\r\n        </div>\r\n    </div>\r\n  </ngx-tile>\r\n  <i class=\"material-icons leftRs\" NgxCarouselPrev></i>\r\n  <i class=\"material-icons rightRs\" NgxCarouselNext></i>\r\n</ngx-carousel>\r\n<ngx-carousel [inputs]=\"carouselOne\" *ngIf=\"carouselType == 'banner'\">\r\n  <ngx-tile NgxCarouselItem *ngFor=\"let image of images; let i = index\">\r\n      <div class=\"newslider slider1\">\r\n          <div class=\"banner-img\">\r\n            <img src=\"{{image.source}}\" alt=\"Banner image\">\r\n          </div>\r\n          <div class=\"content-block\">\r\n            <div class=\"what-bg-content\">\r\n              <h3>{{ image.title }}</h3>\r\n              <p>{{image.description}} </p>\r\n              <div class=\"vote-btn\"><a href=\"javascript:;\">Vote Now</a></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n  </ngx-tile>\r\n  <i class=\"material-icons leftRs\" NgxCarouselPrev></i>\r\n  <i class=\"material-icons rightRs\" NgxCarouselNext></i>\r\n</ngx-carousel>"

/***/ }),

/***/ "../../../../../src/app/shared/carousel/carousel.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tile img {\n  width: 100%; }\n\n.wBg .tile {\n  background-size: cover !important;\n  position: relative; }\n\n.wBg .tile i {\n  position: absolute;\n  bottom: 8px;\n  color: white;\n  right: 2px;\n  cursor: pointer; }\n\n.checked-Icon {\n  color: #f00 !important; }\n\n.wBg h4 {\n  padding: 10px 15px;\n  text-align: center;\n  margin: 0; }\n\n.WBg p {\n  margin: 0;\n  padding: 0 15px 10px;\n  text-align: center; }\n\n.rightRs {\n  outline: none; }\n\n.leftRs {\n  outline: none; }\n\n.leftRs {\n  position: absolute;\n  margin: auto;\n  top: 0;\n  bottom: 0;\n  width: 50px;\n  height: 50px;\n  border-radius: 999px;\n  left: -35px;\n  font-size: 48px;\n  cursor: pointer; }\n\n.rightRs {\n  position: absolute;\n  margin: auto;\n  top: 0;\n  bottom: 0;\n  width: 50px;\n  height: 50px;\n  border-radius: 999px;\n  right: -35px;\n  font-size: 48px;\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/carousel/carousel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_service__ = __webpack_require__("../../../../../src/app/shared/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__carousel_service__ = __webpack_require__("../../../../../src/app/shared/carousel/carousel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CarouselComponent = /** @class */ (function () {
    function CarouselComponent(MessageService, CarouselService, toastr) {
        var _this = this;
        this.MessageService = MessageService;
        this.CarouselService = CarouselService;
        this.toastr = toastr;
        this.track_url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].ARTIST_TRACK;
        this.audio_ins = [];
        this.subscription = this.MessageService.getMessage().subscribe(function (response) {
            if (response && response['list'] != 1) {
                _this.audio_ins.forEach(function (ele, idx) { _this.audio_ins[idx] = false; });
            }
            if (response && response['action'] == 'stop' && response['list'] == 1) {
                _this.audio_ins[response['index']] = false;
            }
            if (response && response['action'] == 'start' && response['list'] == 1) {
                _this.audio_ins[response['index']] = true;
            }
            if (response && response['list'] == 1 && response['action'] == 'next' || response['action'] == 'prev') {
                if (response['track_action'] && response['track_action'] == 'pause') {
                    _this.audio_ins.forEach(function (ele, idx) { _this.audio_ins[idx] = false; });
                    _this.audio_ins[response['index']] = true;
                }
            }
        });
    }
    CarouselComponent.prototype.onChange = function (index) {
        if (this.images[index]['enable']) {
            this.images[index]['enable'] = false;
        }
        else {
            this.images[index]['enable'] = true;
        }
    };
    CarouselComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.carouselType == 'normal') {
            this.carouselOne = {
                grid: { xs: 1, sm: 12, md: 3, lg: 4, all: 0 },
                slide: 1,
                speed: 400,
                interval: 2000,
                load: 2,
                touch: true,
                loop: true,
                custom: 'banner',
                point: {
                    visible: true
                },
            };
        }
        else {
            this.carouselOne = {
                grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
                slide: 1,
                speed: 400,
                interval: 2000,
                load: 2,
                touch: true,
                loop: true,
                custom: 'banner',
                point: {
                    visible: true
                },
            };
        }
        this.images.forEach(function (ele) {
            _this.audio_ins.push(false);
        });
    };
    CarouselComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    };
    // Play audio
    CarouselComponent.prototype.playAudio = function (name, index, data) {
        var _this = this;
        // let audio = new Audio();
        // audio.src = this.track_url+name;
        // audio.load();
        // audio.play();
        // if(!this.audio_ins.hasOwnProperty(index)) {
        //   this.audio_ins[index] = this.track_url+name;
        // this.audio_ins[index] = audio;
        data.forEach(function (ele, idx) {
            _this.audio_ins[idx] = false;
        });
        this.audio_ins[index] = true;
        this.MessageService.sendMessage({ data: data, index: index, action: 'start', list: 1 });
        // }
    };
    // Stop audio
    CarouselComponent.prototype.stopAudio = function (index, data) {
        var _this = this;
        data.forEach(function (ele, idx) {
            _this.audio_ins[idx] = false;
        });
        this.MessageService.sendMessage({ data: data, index: index, action: 'stop', list: 1 });
    };
    // Follow artist
    CarouselComponent.prototype.followArtist = function (id) {
        var _this = this;
        var user = JSON.parse(localStorage.getItem('user'));
        if (user && user['user']) {
            var data = {
                'artist_id': id
            };
            this.CarouselService.followArtist(data).subscribe(function (response) {
                _this.toastr.success(response['message'], 'Success!');
            }, function (error) {
                _this.toastr.error(error['error'].message, 'Error!');
            });
        }
        else {
            this.toastr.info('Please login first to follow the artist', 'Information!');
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], CarouselComponent.prototype, "images", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], CarouselComponent.prototype, "showFavourit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CarouselComponent.prototype, "carouselType", void 0);
    CarouselComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            selector: 'app-carousel-scroll',
            template: __webpack_require__("../../../../../src/app/shared/carousel/carousel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/carousel/carousel.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_3__carousel_service__["a" /* CarouselService */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */]])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/carousel/carousel.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__carousel_component__ = __webpack_require__("../../../../../src/app/shared/carousel/carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_carousel__ = __webpack_require__("../../../../ngx-carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__carousel_service__ = __webpack_require__("../../../../../src/app/shared/carousel/carousel.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CarouselModule = /** @class */ (function () {
    function CarouselModule() {
    }
    CarouselModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3_ngx_carousel__["a" /* NgxCarouselModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__carousel_component__["a" /* CarouselComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__carousel_component__["a" /* CarouselComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_5__carousel_service__["a" /* CarouselService */]]
        })
    ], CarouselModule);
    return CarouselModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/carousel/carousel.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { Http, Headers, RequestOptions, Response } from '@angular/http';



var CarouselService = /** @class */ (function () {
    function CarouselService(http) {
        this.http = http;
        this.api_host = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].API_URL;
        this.user = '';
        this.headers = '';
    }
    // Follow the artist
    CarouselService.prototype.followArtist = function (data) {
        // Follow the artist 
        this.user = JSON.parse(localStorage.getItem('user'));
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'x-access-token': this.user.token });
        return this.http.post(this.api_host + "/user/artist/follow", data, { headers: this.headers });
    };
    CarouselService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CarouselService);
    return CarouselService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MessageService = /** @class */ (function () {
    function MessageService() {
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    MessageService.prototype.sendMessage = function (obj) {
        this.subject.next(obj);
    };
    MessageService.prototype.clearMessage = function () {
        this.subject.next();
    };
    MessageService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    GMAP_KEY: 'AIzaSyD6DEW05AQ8M_hrpSI7eTE3jbZB9k7c0Oc',
    GOOGLE_CLIENT_ID: '112936390114-hb3eeajuhemp9ls1n4i7cag8apf07mf8.apps.googleusercontent.com',
    GOOGLE_CLIENT_SECRET: 'bohGfi5VZz7Yd4kGgWkUJimF',
    API_URL: 'http://34.204.127.137:3000',
    ARTIST_IMG: '/uploads/artist/',
    USER_IMG: '/uploads/user/',
    ARTIST_MEDIA: '/uploads/media/',
    ARTIST_TRACK: '/uploads/track/',
    FB_APPID: 1924632120949205
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map