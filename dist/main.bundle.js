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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_highcharts_highcharts_more_src__ = __webpack_require__("../../../../highcharts/highcharts-more.src.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_highcharts_highcharts_more_src___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_highcharts_highcharts_more_src__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_highcharts_modules_exporting_src__ = __webpack_require__("../../../../highcharts/modules/exporting.src.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_highcharts_modules_exporting_src___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_highcharts_modules_exporting_src__);
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




























var AdminLayoutModule = /** @class */ (function () {
    function AdminLayoutModule() {
    }
    AdminLayoutModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
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
                { provide: __WEBPACK_IMPORTED_MODULE_9_angular_highcharts__["c" /* HIGHCHARTS_MODULES */], useFactory: function () { return [__WEBPACK_IMPORTED_MODULE_10_highcharts_highcharts_more_src__, __WEBPACK_IMPORTED_MODULE_11_highcharts_modules_exporting_src__]; } }
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

module.exports = " <!-- Page Content -->\n <div id=\"page-content-wrapper\">  \n  <div class=\"text-right\">\n    <button class=\"create_contest_btn btn\" (click)=\"openContestModel(contest)\">Create Contest</button>\n  </div>         \n           <div>\n                <h3 class=\"Audience-Overview\">Contests </h3>\n                <div class=\"dropdown table_dropdown custom_dropdown\">\n                  <select class=\"form-control custom_drop_btn\" id=\"sort\" name=\"sort_by\" [(ngModel)]=\"sort\" (change)=\"sortArtist()\">\n                    <option value=\"-1\">Sort By End Date</option>\n                    <option value=\"1\">Sort By Start Date</option>\n                  </select>\n                </div> \n                <div class=\"artists_table contest_table table-responsive\">\n                  <table class=\"table\" datatable [dtOptions]=\"dtOptions\">\n                        <thead>\n                          <tr>\n                            <th>N<sup>O</sup></th>\n                            <th>Contest Name</th>\n                            <th>Start Date</th>\n                            <th>End Date</th>\n                            <th>Days Remain</th>\n                            <th>Music Genre</th>\n                            <th>Region</th>\n                            <th>Participants</th>\n                          </tr>\n                        </thead>\n                        <tbody>\n                        <tr *ngFor=\"let contest of contest_data; let i = index;\">\n                          <td>{{i+1}}.</td>\n                          <td><a href=\"javascript:;\" (click)=\"openModal(paricipant, contest['_id'])\">{{contest ['round_name']}}</a></td>\n                          <td>{{contest['start_date'] | date : 'MMMM dd, yyyy'}}</td>\n                          <td>{{contest['end_date'] | date : 'MMMM dd, yyyy'}}</td>\n                          <td>{{contest['days']}}</td>\n                          <td>{{contest['contest_id']['music_type']['name']}}</td>\n                          <td>{{contest['state'] && contest['state']['name'] ? contest['state']['name'] : '' }}</td>\n                          <td>{{contest['no_of_participants']}}</td>\n                        </tr>\n                        </tbody>\n                      </table>\n                </div>\n            </div>\n    </div>\n    <!-- /#page-content-wrapper -->\n<ng-template #paricipant>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n  <div class=\"modal-body\">\n    <div class=\"custom_modal\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <b class=\"template_modal_name\">Participants</b>\n              </div>\n          <div class=\"artists_table copyright_table table-responsive col-sm-12\">\n            <table class=\"table\">\n                <thead>\n                  <tr>\n                    <th>Rank</th>\n                    <th>Artist Name</th>\n                    <th>Track Name</th>\n                    <th>Votes</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let contest of participant_data; let i = index;\">\n                    <td>{{i+1}}</td>\n                    <td>{{contest['artist_id'] != null && contest['artist_id']['first_name'] != '' ? contest['artist_id']['first_name'] : '' +' '+contest['artist_id'] != null && contest['artist_id']['last_name'] != '' ? contest['artist_id']['last_name'] : ''}}</td>\n                    <td>{{contest['track_id'] != null && contest['track_id']['name'] != '' ? contest['track_id']['name'] : '' }}</td>\n                    <td>{{contest['artist_id'] != null && contest['artist_id']['no_of_votes'] != '' ? contest['artist_id']['no_of_votes'] : '' }}</td>\n                  </tr>\n                  <tr *ngIf=\"participant_data?.length == 0\">\n                    <td colspan=\"4\">No data available.</td>\n                  </tr>\n                </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n  </div>\n</ng-template>\n<ng-template #contest>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"contestModelRef.hide()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n  <form [formGroup]=\"contest_validation\">\n    <div class=\"modal-body\">\n      <div class=\"creat_contest_body\">\n          <div class=\"col-sm-12 text-center\">\n            <h4 class=\"custom_modal_head\">Create Contest</h4>\n          </div>\n          <div class=\"form-group custom_modal_form\">\n            <div >\n                <label class=\"radio-inline\">\n                  <input name=\"type\" formControlName=\"type\" type=\"radio\" checked [(ngModel)]=\"is_new_or_existing\" value=\"1\">New\n                  \n                </label>\n                <label class=\"radio-inline\">\n                  <input name=\"type\" formControlName=\"type\" type=\"radio\" [(ngModel)]=\"is_new_or_existing\" value=\"2\">Existing\n                </label>\n            </div>\n          </div>\n          <div class=\"form-group custom_modal_form\" *ngIf=\"is_new_or_existing == 1\">\n            <label class=\"control-label\">Contest Name</label>\n            <input name=\"name\" formControlName=\"name\" class=\"form-control\" [(ngModel)]=\"contest_detail['name']\" />\n            <div class=\"terms_error_msg\" *ngIf=\"is_valid && !contest_validation.controls['name'].valid\">\n              <span *ngIf=\"contest_validation.controls['name'].errors['required']\" class=\"text-danger\">Contest Name is required.</span>\n            </div>\n          </div>\n          <div class=\"form-group custom_modal_form\" *ngIf=\"is_new_or_existing == 2\">\n            <label class=\"control-label\">Contest Name</label>\n            <select class=\"form-control\" name=\"existing_contest\" formControlName=\"name\"  (change)=\"selectContest($event.target.value)\">\n              <option value=\"\">Select Contest</option>\n              <option *ngFor=\"let c of existing_contest_list; let i = index;\" value=\"{{i}}\">{{c['round_name']}}</option>\n            </select>\n            <div class=\"terms_error_msg\" *ngIf=\"is_valid && !contest_validation.controls['name'].valid\">\n              <span *ngIf=\"contest_validation.controls['name'].errors['required']\" class=\"text-danger\">Contest Name is required.</span>\n            </div>\n          </div>\n          <div class=\"custom_modal_form\">\n              <div class=\"date-of-birth row\">\n                  <label class=\"col-sm-12\" for=\"date\">Start Date</label>\n                  <div class=\"form-group custom_modal_form\">\n                      <select class=\"form-control\" id=\"day\" formControlName=\"day\" name=\"day\" [(ngModel)]=\"contest_detail['day']\">\n                          <option value=\"\">Day</option>\n                          <option *ngFor=\"let d of day\" value=\"{{d}}\">{{d}}</option>\n                      </select>\n                      <div class=\"terms_error_msg\" *ngIf=\"is_valid && !contest_validation.controls['day'].valid\">\n                        <span *ngIf=\"contest_validation.controls['day'].errors['required']\" class=\"text-danger\">Day is required.</span>\n                      </div>\n                  </div>\n                  <div class=\"form-group custom_modal_form\">\n                      <select class=\"form-control\" id=\"month\" name=\"month\" formControlName=\"month\" [(ngModel)]=\"contest_detail['month']\">\n                          <option value=\"\">Month</option>\n                          <option *ngFor=\"let m of month\" value=\"{{m}}\">{{m}}</option>\n                      </select>\n                      <div class=\"terms_error_msg\" *ngIf=\"is_valid && !contest_validation.controls['month'].valid\">\n                        <span *ngIf=\"contest_validation.controls['month'].errors['required']\" class=\"text-danger\">Month is required.</span>\n                      </div>\n                  </div>\n                  <div class=\"form-group custom_modal_form\">\n                      <select class=\"form-control\" id=\"year\" name=\"year\" formControlName=\"year\" [(ngModel)]=\"contest_detail['year']\">\n                          <option value=\"\">Year</option>\n                          <option *ngFor=\"let y of year\" value=\"{{y}}\">{{y}}</option>\n                      </select>\n                      <div class=\"terms_error_msg\" *ngIf=\"is_valid && !contest_validation.controls['year'].valid\">\n                        <span *ngIf=\"contest_validation.controls['year'].errors['required']\" class=\"text-danger\">Year is required.</span>\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div >\n            <div class=\"row\">\n            <div class=\"col-sm-6\">\n              <div class=\"form-group custom_modal_form\">\n                <label class=\"control-label\">Duration</label>\n                <select class=\"form-control\" name=\"duration\" formControlName=\"duration\" [(ngModel)]=\"contest_detail['duration']\">\n                  <option value=\"\">Select Duration</option>\n                  <option value=\"1\">1 weeks</option>\n                  <option value=\"2\">2 weeks</option>\n                  <option value=\"3\">3 weeks</option>\n                  <option value=\"4\">4 weeks</option>\n                  <option value=\"8\">8 weeks</option>\n                </select>\n                <div class=\"terms_error_msg\" *ngIf=\"is_valid && !contest_validation.controls['duration'].valid\">\n                  <span *ngIf=\"contest_validation.controls['duration'].errors['required']\" class=\"text-danger\">Duration is required.</span>\n                </div>\n            </div>\n            </div>\n            <div class=\"col-sm-6\">\n                <div class=\"form-group custom_modal_form\">\n                  <label class=\"control-label\">Round Number</label>\n                  <input type=\"number\" name=\"rounds\" max=\"8\" min=\"1\" value=\"1\" readonly formControlName=\"round\" [(ngModel)]=\"contest_detail['no_of_round']\" class=\"form-control\" />\n                  <div class=\"terms_error_msg\" *ngIf=\"is_valid && !contest_validation.controls['round'].valid\">\n                    <span *ngIf=\"contest_validation.controls['round'].errors['required']\" class=\"text-danger\">Number of round is required.</span>\n                  </div>\n                </div>\n            </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"form-group custom_modal_form\">\n              <label class=\"control-label\">Music Genre</label>\n              <select name=\"music_type\" class=\"form-control\" formControlName=\"music_type\" [(ngModel)]=\"contest_detail['music_type']\">\n                <option value=\"\">Select Music Gener</option>\n                <option *ngFor=\"let music of music_type;\" value=\"{{music['_id']}}\">{{music['name']}}</option>\n              </select>\n              <div class=\"terms_error_msg\" *ngIf=\"is_valid && !contest_validation.controls['music_type'].valid\">\n                <span *ngIf=\"contest_validation.controls['music_type'].errors['required']\" class=\"text-danger\">Music type is required.</span>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"form-group custom_modal_form\">\n              <label class=\"control-label\">Region</label>\n              <select class=\"form-control\" name=\"region\" formControlName=\"region\" [(ngModel)]=\"contest_detail['region']\" (change)=\"getStateFromRegion($event.target.value)\">\n                <option value=\"\">Select Region</option>\n                <option [value]=\"r['_id']\" *ngFor=\"let r of region_list;\">{{r['name']}}</option>\n              </select>\n              <div class=\"terms_error_msg\" *ngIf=\"is_valid && !contest_validation.controls['region'].valid\">\n                <span *ngIf=\"contest_validation.controls['region'].errors['required']\" class=\"text-danger\">Region is required.</span>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"form-group custom_modal_form\">\n              <label class=\"control-label\">State</label>\n              <select class=\"form-control\" name=\"state\" formControlName=\"state\" [(ngModel)]=\"contest_detail['state']\">\n                <option value=\"\">Select State</option>\n                <option [value]=\"s['_id']\" *ngFor=\"let s of state_list;\">{{s['name']}}</option>\n              </select>\n              <div class=\"terms_error_msg\" *ngIf=\"is_valid && !contest_validation.controls['state'].valid\">\n                <span *ngIf=\"contest_validation.controls['state'].errors['required']\" class=\"text-danger\">State is required.</span>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\" *ngIf=\"is_new_or_existing == 2\">\n            <div class=\"form-group custom_modal_form\">\n              <label class=\"control-label\">Participants</label>\n              <select class=\"form-control\" name=\"participant\" formControlName=\"participate\">\n                <option value=\"\">Select Participants</option>\n                <option value=\"\">Northeast Hiphop Round 3 Finalist</option>\n                <option value=\"\">Southeast Hiphop Round 3 Finalist</option>\n                <option value=\"\">Midwest Hiphop Round 3 Finalist</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row modal_btns\">\n            <div class=\"col-sm-6\">\n                <button class=\"custom_cancel_btn btn\" (click)=\"contestModelRef.hide()\">Cancel</button>\n            </div>\n            <div class=\"col-sm-6 text-right\">\n                <button type=\"submit\" class=\"custom_save btn\" (click)=\"saveContest(contest_validation.valid)\" [disabled]=\"show_spinner\">Create <i *ngIf=\"show_spinner\" class=\"fa fa-spinner fa-spin\"></i></button>\n            </div>\n          </div>\n        </div>\n    </div>\n  </form>\n</ng-template>"

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
        for (var i = 1900; i <= (new Date()).getFullYear(); i++) {
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
        var data = {
            region: id
        };
        this.ContestService.getStateByRegion(data).subscribe(function (response) {
            _this.state_list = response['state'];
        });
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
                    name: this.contest_detail['contest_id']['name'],
                    music_type: this.contest_detail['music_type'],
                    region: this.contest_detail['region'],
                    state: this.contest_detail['state'],
                    round: this.contest_detail['no_of_round'],
                    start_date: stdt,
                    duration: this.contest_detail['duration']
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

module.exports = "<!-- Page Content -->\n<div id=\"page-content-wrapper\">\n           \n        <div class=\"container-fluid\">\n            <h3 class=\"Audience-Overview\">Audience Overview </h3>\n            <div class=\"ana-header\">\n                <div class=\"form-group days-grp custom_dropdown\">\n                    <select class=\"form-control\" id=\"days-select\" name=\"analytics_day\" (change)=\"changeAnalyticsDays()\" [(ngModel)]=\"analytics_days\">\n                        <option value=\"7\">7 Days</option>\n                        <option value=\"14\">14 Days</option>\n                        <option value=\"30\">1 Month</option>\n                    </select>\n\n                </div>\n                <!-- <div class=\"dropdown custom_dropdown\">\n                  <button type=\"button\" class=\"btn dropdown-toggle Days\" data-toggle=\"dropdown\">\n                    7 days\n                  </button>\n                  <div class=\"dropdown-menu\">\n                    <a class=\"dropdown-item\" href=\"javascript:;\">Link 1</a>\n                    <a class=\"dropdown-item\" href=\"javascript:;\">Link 2</a>\n                    <a class=\"dropdown-item\" href=\"javascript:;\">Link 3</a>\n                  </div>\n                </div> -->\n                <ul class=\"header_ul\">\n                    <li class=\"{{home_tab_cnt == 1 ? 'active' : ''}}\" (click)=\"homeTabChange(1)\"><a>Votes</a></li>\n                    <li class=\"{{home_tab_cnt == 2 ? 'active' : ''}}\" (click)=\"homeTabChange(2)\"><a>Likes</a></li>\n                    <li class=\"{{home_tab_cnt == 3 ? 'active' : ''}}\" (click)=\"homeTabChange(3)\"><a>Comments</a></li>\n                </ul>\n            </div>\n            <div>\n                <h3 class=\"Last-7-Days-April-2\">Last {{analytics_days}} Days: {{show_duration_date}}</h3>\n                <div class=\"graph_container\">\n                    <!-- <img src=\"img/graph.jpg\" /> -->\n                    <div [chart]=\"artist_chart\"></div>\n                </div>\n            </div>\n            <div>\n                <h3 class=\"Audience-Overview\">Top Artists </h3>\n                <div class=\"artists_table table-responsive\">\n                    <table class=\"table\">\n                        <thead>\n                          <tr>\n                            <th>N<sup>O</sup></th>\n                            <th>Artist Name</th>\n                            <th>Location</th>\n                            <th>Gender</th>\n                            <th>Music Genre</th>\n                            <th>Tracks</th>\n                            <th>Votes</th>\n                            <th>Likes</th>\n                            <th>Followers</th>\n                            <th>Comments</th>\n                          </tr>\n                        </thead>\n                        <tbody>\n                          <tr *ngFor=\"let artist of artist_vote['artist'];let i = index;\">\n                            <td>{{i+1}}.</td>\n                            <td>{{artist.first_name + ' '+ artist.last_name}}</td>\n                            <td>New York</td>\n                            <td>{{artist.gender | titlecase}}</td>\n                            <td>{{artist['music_type']['name']}}</td>\n                            <td>{{artist.no_of_tracks}}</td>\n                            <td class=\"td_img\"><img src=\"img/vote.png\"/>{{artist.no_of_votes}}</td>\n                            <td class=\"td_img\"><img src=\"img/likes.png\"/>{{artist.no_of_likes}}</td>\n                            <td class=\"td_img\"><img src=\"img/followers.png\"/>{{artist.no_of_followers}}</td>\n                            <td class=\"td_img\"><img src=\"img/comments.png\"/>{{artist.no_of_comments}}</td>                                \n                          </tr>\n                        </tbody>\n                      </table>\n                </div>\n            </div>\n            <div>\n                <h3 class=\"Audience-Overview\">Top Locations </h3>\n                <div class=\"location_top\">\n                    <img src=\"img/location_img.jpg\" />\n                </div>\n                <ng-container *ngIf=\"top_location_chart\">\n                    <div [chart]=\"top_location_chart\"></div>\n                </ng-container>\n            </div>\n        </div>\n    </div>\n    <!-- /#page-content-wrapper -->"

/***/ }),

/***/ "../../../../../src/app/admin/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_service__ = __webpack_require__("../../../../../src/app/admin/home/home.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_highcharts__ = __webpack_require__("../../../../angular-highcharts/angular-highcharts.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_data_us_all__ = __webpack_require__("../../../../../src/assets/data/us-all.ts");
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
    function HomeComponent(HomeService) {
        this.HomeService = HomeService;
        this.artist_vote = {};
        this.home_tab_cnt = 1;
        this.analytics_days = 7;
        this.show_duration_date = '';
        this.artist_chart = '';
        this.top_location_chart = '';
        console.log("Admin dashboard component");
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getMaxVoteAritst({ day: this.analytics_days });
        this.calculateDateFromDays(this.analytics_days);
        this.topLocationChart({});
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
        });
    };
    // Get all aritst based on max vote
    HomeComponent.prototype.getMaxLikeAritst = function (data) {
        var _this = this;
        this.HomeService.getMaxLikeArtists(data).subscribe(function (response) {
            _this.artist_vote = response;
            _this.artistChart(response['likes']);
        });
    };
    // Get all aritst based on max vote
    HomeComponent.prototype.getMaxCommentAritst = function (data) {
        var _this = this;
        this.HomeService.getMaxCommentArtists(data).subscribe(function (response) {
            _this.artist_vote = response;
            _this.artistChart(response['comment']);
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
        var options = {
            series: [{
                    chart: {
                        map: __WEBPACK_IMPORTED_MODULE_3__assets_data_us_all__["a" /* country_data */]
                    },
                    title: {
                        text: 'Highmaps basic demo'
                    },
                    mapNavigation: {
                        enabled: true,
                        buttonOptions: {
                            verticalAlign: 'bottom'
                        }
                    },
                    colorAxis: {
                        min: 0
                    },
                    data: [
                        {
                            "value": 438,
                            "code": "nj"
                        },
                        {
                            "value": 387.35,
                            "code": "ri"
                        }
                    ],
                    name: 'Random data',
                    states: {
                        hover: {
                            color: '#BADA55'
                        }
                    },
                    dataLabels: {
                        enabled: true,
                        format: '{point.name}'
                    }
                }]
        };
        this.top_location_chart = new __WEBPACK_IMPORTED_MODULE_2_angular_highcharts__["d" /* MapChart */]({
            series: [{
                    chart: {
                        map: __WEBPACK_IMPORTED_MODULE_3__assets_data_us_all__["a" /* country_data */]
                    },
                    title: {
                        text: 'Highmaps basic demo'
                    },
                    mapNavigation: {
                        enabled: true,
                        buttonOptions: {
                            verticalAlign: 'bottom'
                        }
                    },
                    colorAxis: {
                        min: 0
                    },
                    data: [
                        {
                            "value": 438,
                            "code": "nj"
                        },
                        {
                            "value": 387.35,
                            "code": "ri"
                        }
                    ],
                    name: 'Random data',
                    states: {
                        hover: {
                            color: '#BADA55'
                        }
                    },
                    dataLabels: {
                        enabled: true,
                        format: '{point.name}'
                    }
                }]
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/admin/home/home.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__home_service__["a" /* HomeService */]])
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
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* ReactiveFormsModule */],
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
        swal({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Accept it!'
        }).then(function (flag) {
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
        });
    };
    // Reject contest request
    RolesComponent.prototype.rejectRequest = function (id, idx) {
        var thi = this;
        swal({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Reject it!'
        }).then(function (flag) {
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
        swal({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (flag) {
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
        });
    };
    // suspend admin account
    RolesComponent.prototype.suspendAdmin = function (id, idx) {
        var thi = this;
        swal({
            title: 'Are you sure?',
            text: "You want to suspend this account!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, suspend it!'
        }).then(function (flag) {
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

module.exports = "<!-- Sidebar -->\n<div class=\"top_container\">\n    <ul class=\"profile_container\">\n        <li class=\"sidebar-brand\">\n            <a class=\"profile_name\" href=\"javascript:;\">\n                <span class=\"user_profile\">\n                    <img src=\"img/user_profile.jpg\" />\n                </span>\n                <h3 class=\"user_name\">Rob Gales</h3>\n                <h5 class=\"user_profession\">Admin</h5>\n                <div class=\"dropdown\" dropdown>\n                    <button type=\"button\" dropdownToggle class=\"btn btn-primary dropdown-toggle drop_icon\">\n                    </button>\n                    <ul id=\"dropdown-basic\" *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"button-basic\">\n                        <li role=\"menuitem\">\n                            <a class=\"dropdown-item\" href=\"#\">Action</a>\n                        </li>\n                        <li role=\"menuitem\">\n                            <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                        </li>\n                        <li role=\"menuitem\">\n                            <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                        </li>\n                        <li class=\"divider dropdown-divider\"></li>\n                        <li role=\"menuitem\">\n                            <a class=\"dropdown-item\" href=\"#\">Separated link</a>\n                        </li>\n                    </ul>\n                </div>\n            </a>\n        </li>\n    </ul>\n    <a href=\"javascript:;menu-toggle\" class=\"btn btn-secondary\" id=\"menu-toggle\">\n        <i class=\"fa fa-bars\"></i>\n    </a>\n</div>\n<div id=\"sidebar-wrapper\">\n\n    <ul class=\"sidebar-nav\">\n        <li class=\"home\" routerLinkActive=\"active\">\n            <a href=\"javascript:;\" routerLink=\"/admin\">\n                <i></i>Home</a>\n        </li>\n        <li class=\"bell\" routerLinkActive=\"active\">\n            <a href=\"javascript:;\" routerLink=\"/admin/alerts\">\n                <i></i>Alert</a>\n        </li>\n        <li class=\"artist\" routerLinkActive=\"active\">\n            <a href=\"javascript:;\" routerLink=\"/admin/artist\">\n                <i></i>Artist</a>\n        </li>\n        <li class=\"users\" routerLinkActive=\"active\">\n            <a href=\"javascript:;\" routerLink=\"/admin/users\">\n                <i></i>Users</a>\n        </li>\n        <li>\n            <hr/>\n        </li>\n        <li class=\"contest\" routerLinkActive=\"active\">\n            <a href=\"javascript:;\" routerLink=\"/admin/contest\">\n                <i></i>Contest</a>\n        </li>\n        <li class=\"roles\" routerLinkActive=\"active\">\n            <a href=\"javascript:;\" routerLink=\"/admin/roles\">\n                <i></i>Roles</a>\n        </li>\n        <li class=\"log_out\" >\n            <a href=\"javascript:;\" (click)=\"logout()\">\n            <i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i>Logout</a>\n        </li>\n    </ul>\n</div>\n<!-- /#sidebar-wrapper -->"

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
        console.log("Admin dashboard component");
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
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
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
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["h" /* Location */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_highcharts__ = __webpack_require__("../../../../angular-highcharts/angular-highcharts.es5.js");
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_7__dashboard_layout_layout_module__["a" /* LayoutModule */],
                __WEBPACK_IMPORTED_MODULE_9__register_register_module__["a" /* RegisterModule */],
                __WEBPACK_IMPORTED_MODULE_10__admin_login_admin_login_module__["a" /* AdminLoginModule */],
                __WEBPACK_IMPORTED_MODULE_8__admin_admin_layout_module__["a" /* AdminLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_11__email_varification_email_varification_module__["a" /* EamilVarificationModule */],
                __WEBPACK_IMPORTED_MODULE_12__forget_password_forget_password_module__["a" /* ForgetPasswordModule */],
                __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_angular_highcharts__["b" /* ChartModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular_datatables__["b" /* DataTablesModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* RouterModule */].forRoot([], { useHash: false })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13__shared_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_14__shared_message_service__["a" /* MessageService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard-layout/artist/artist.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"artist-head artist-highlight\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12 col-sm-12 col-xs-12\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-lg-6 col-md-5 col-sm-6 col-xs-5 plr-0\">\n              <div class=\"head-global artist_header\"><h2>Artists</h2></div>\n            </div>\n            <div class=\"col-lg-6 col-md-7 col-sm-6 col-xs-7\">\n              <div class=\"new-head\">\n                <div class=\"search-wrap\">\n                  <form>\n                    <div class=\"mobile-search\" (click)=\"toggleSearch()\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></div>\n                    <div class=\"search-input\" [style]=\"toggSearch ? 'block' : 'none'\">\n                      <input type=\"text\" placeholder=\"Search by Artist Name or Song Title\" (keyup)=\"filterArtistv1($event)\" name=\"search\" [(ngModel)]=\"search_str\" />\n                    </div>\n                  </form>\n                </div>\n                <div class=\"filter-head sdg\">\n                  <a href=\"javascript:;\" (click)=\"toggleFilter()\">\n                    <div class=\"filter-icon\"><img src=\"img/filter.png\" alt=\"Filter Icon\"></div>\n                    <span>Filters <i class=\"fa fa-caret-right\"></i></span>\n                  </a>\n                  \n                </div>\n              </div>\n            </div>\n            <div class=\"filter-drop-down\" [style.display]=\"show_filter ? 'block' : 'none'\">\n              <div class=\"container\">\n                <div class=\"row\">\n                  <div class=\"col-md-2 col-sm-6 col-xs-6\">\n                    <div class=\"music-genre\">\n                      <div class=\"filter-heading\">Music Genre</div>\n                      <ul>\n                        <li>\n                          <div class=\"radio\">\n                              <label>\n                                <input type=\"radio\" value=\"\" name=\"musicgenre\" [(ngModel)]=\"adv_filter.music_type\">All styles\n                                <div class=\"radio_check\"></div>\n                              </label>\n                          </div>\n                        </li>\n                        <li *ngFor=\"let music of music_list;\">\n                            <div class=\"radio\">\n                                <label>\n                                  <input type=\"radio\" value=\"{{music._id}}\" name=\"musicgenre\" [(ngModel)]=\"adv_filter.music_type\">{{music.name}}\n                                  <div class=\"radio_check\"></div>\n                                </label>\n                            </div>\n                        </li>\n                      </ul>\n                    </div>\n                    \n                  </div>\n                  \n                  <div class=\"col-md-8 col-sm-12 col-xs-12\">\n                    <div class=\"sub-menu-filter\">\n                    <div class=\"filter-heading\">Region</div>\n                      <div class=\"row\">\n                        <div class=\"col-lg-2 col-md-4 col-sm-4 col-xs-4\">\n                          <div class=\"filter-subhead\">Northeast</div>\n                          <ul>\n                            <li *ngFor=\"let s of state_list;\" [style.display]=\"s['region']['name'] == 'northeast' ? 'block' : 'none'\">\n                              <div class=\"checkbox\">\n                                  <label>\n                                    <input type=\"checkbox\" [value]=\"s._id\" (click)=\"addRegionForFilter($event.target.checked, $event.target.value)\">\n                                    <div class=\"chk_check\"></div>\n                                    <span>{{s.name}}</span>\n                                  </label>\n                              </div>\n                            </li>\n                          </ul>\n                        </div>\n                        <div class=\"col-lg-2 col-md-4 col-sm-4 col-xs-4\">\n                          <div class=\"filter-subhead\">southeast</div>\n                          <ul>\n                            <li *ngFor=\"let s of state_list;\" [style.display]=\"s['region']['name'] == 'southeast' ? 'block' : 'none'\">\n                              <div class=\"checkbox\">\n                                  <label>\n                                    <input type=\"checkbox\" [value]=\"s._id\" (click)=\"addRegionForFilter($event.target.checked, $event.target.value)\">\n                                    <div class=\"chk_check\"></div>\n                                    <span>{{s.name}}</span>\n                                  </label>\n                              </div>\n                            </li>\n                          </ul>\n                        </div>\n                        <div class=\"col-lg-2 col-md-4 col-sm-4 col-xs-4\">\n                          <div class=\"filter-subhead\">Midwest</div>\n                          <ul>\n                            <li *ngFor=\"let s of state_list;\" [style.display]=\"s['region']['name'] == 'midwest' ? 'block' : 'none'\">\n                              <div class=\"checkbox\">\n                                  <label>\n                                    <input type=\"checkbox\" [value]=\"s._id\" (click)=\"addRegionForFilter($event.target.checked, $event.target.value)\">\n                                    <div class=\"chk_check\"></div>\n                                    <span>{{s.name}}</span>\n                                  </label>\n                              </div>\n                            </li>\n                          </ul>\n                        </div>\n                        <div class=\"col-lg-2 col-md-4 col-sm-4 col-xs-4\">\n                          <div class=\"filter-subhead\">Southwest</div>\n                          <ul>\n                            <li *ngFor=\"let s of state_list;\" [style.display]=\"s['region']['name'] == 'southwest' ? 'block' : 'none'\">\n                              <div class=\"checkbox\">\n                                  <label>\n                                    <input type=\"checkbox\" [value]=\"s._id\" (click)=\"addRegionForFilter($event.target.checked, $event.target.value)\">\n                                    <div class=\"chk_check\"></div>\n                                    <span>{{s.name}}</span>\n                                  </label>\n                              </div>\n                            </li>\n                          </ul>\n                        </div>\n                        <div class=\"col-lg-2 col-md-4 col-sm-4 col-xs-4\">\n                          <div class=\"filter-subhead\">West</div>\n                          <ul>\n                            <li *ngFor=\"let s of state_list;\" [style.display]=\"s['region']['name'] == 'west' ? 'block' : 'none'\">\n                              <div class=\"checkbox\">\n                                  <label>\n                                    <input type=\"checkbox\" [value]=\"s._id\" (click)=\"addRegionForFilter($event.target.checked, $event.target.value)\">\n                                    <div class=\"chk_check\"></div>\n                                    <span>{{s.name}}</span>\n                                  </label>\n                              </div>\n                            </li>\n                          </ul>\n                        </div>\n                        <div class=\"col-lg-2 col-md-4 col-sm-4 col-xs-4\">\n                          <div class=\"filter-subhead\">other</div>\n                          <ul>\n                            <li *ngFor=\"let s of state_list;\" [style.display]=\"s['region']['name'] == 'other' ? 'block' : 'none'\">\n                              <div class=\"checkbox\">\n                                  <label>\n                                    <input type=\"checkbox\" [value]=\"s._id\" (click)=\"addRegionForFilter($event.target.checked, $event.target.value)\">\n                                    <div class=\"chk_check\"></div>\n                                    <span>{{s.name}}</span>\n                                  </label>\n                              </div>\n                            </li>\n                          </ul>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                    <div class=\"button_group\">\n                      <a href=\"javascript:;\" (click)=\"toggleFilter()\" class=\"cancel-btn\">Cancel</a>\n                      <a href=\"javascript:;\" class=\"apply-btn\" (click)=\"advanceFilter()\">Apply</a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"artist-highlight\">\n  <div class=\"container\">\n    <div class=\"rising-star\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"head-global\"><h2>Rising Star</h2></div>\n        </div>\n      </div>\n        <div class=\"highlights-wrap mCustomScrollbar \" data-mcs-theme=\"dark-3\">\n          <div class=\"row\">\n            <div class=\"alert alert-info col-sm-12\" *ngIf=\"artistv1['rising_stars'] && artistv1['rising_stars']['length'] <= 0\">No data available.</div>\n            <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-6\" *ngFor=\"let artist_rising of artistv1.rising_stars; let i = index;\">\n                <div class=\"final-wrap \">\n                  <div class=\"img-wrap \">\n                    <a href=\"javascript:;\" routerLink=\"/artist_profile/{{artist_rising && artist_rising._id ? artist_rising._id : '' }}\">\n                    <img src=\"{{artist_rising.image ? artist_img_url+artist_rising.image : 'img/highlight-player.png'}} \" alt=\"Finalists \"></a>\n                    <a href=\"javascript:void(0) \" class=\"fan \" (click)=\"followArtist(artist_rising._id, i)\"><i class=\"fa {{artist_rising && artist_rising['is_followed'] ? 'fa-heart' : 'fa-heart-o'}} \" aria-hidden=\"true \"></i></a>\n                  </div>\n                  <div class=\"content-wrap \">\n                    <div class=\"player \">\n                      <div class=\"title \"><a href=\"javascript:;\" routerLink=\"/artist_profile/{{artist_rising && artist_rising._id ? artist_rising._id : '' }}\">{{artist_rising.first_name +' '+artist_rising.last_name}}</a></div>\n                      <div class=\"cat {{artist_rising.music_type.alias}}\">{{artist_rising.music_type.name}}</div>\n                    </div>\n                    <div class=\"location \">\n                      <p><i class=\"fa fa-map-marker \" aria-hidden=\"true \"></i><span>Brooklyn, New York</span></p>\n                      \n                    </div>\n                  </div>\n                </div>\n            </div>        \n  \n          </div>\n        </div>\n     \n    </div>\n\n    <div class=\"chart-topper\" style=\"padding:30px 0;\">\n      <div>\n        <div>\n          <div class=\"head-global\"><h2>Chart Topper</h2></div>\n        </div>\n        <div class=\"highlights-wrap mCustomScrollbar \" data-mcs-theme=\"dark-3\">\n          <div class=\"row\">\n              <div class=\"alert alert-info col-sm-12\" *ngIf=\"artistv1['chart_toppers'] && artistv1['chart_toppers']['length'] <= 0\">No data available.</div>\n              <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-6\" *ngFor=\"let artist_chart of artistv1.chart_toppers; let i = index;\">\n                  <div class=\"final-wrap \">\n                    <div class=\"img-wrap \">\n                      <a href=\"javascript:;\" routerLink=\"/artist_profile/{{artist_chart['artist']._id}}\">\n                      <img src=\"{{artist_chart['artist'].image ? artist_img_url+artist_chart['artist'].image : 'img/highlight-player.png'}} \" alt=\"Finalists \"></a>\n                      <a href=\"javascript:void(0) \" class=\"fan \" (click)=\"followArtist(artist_chart['artist']._id, i)\"><i class=\"fa {{artist_chart['artist']['is_followed'] ? 'fa-heart' : 'fa-heart-o'}}\" aria-hidden=\"true \"></i></a>\n                    </div>\n                    <div class=\"content-wrap \">\n                      <div class=\"player \">\n                        <div class=\"title \"><a href=\"javascript:;\" routerLink=\"/artist_profile/{{artist_chart['artist']._id}}\">{{artist_chart['artist'].first_name +' '+artist_chart['artist'].last_name}}</a></div>\n                        <div class=\"cat {{artist_chart['artist']['music_type']['alias']}}\">{{artist_chart['artist']['music_type']['name']}}</div>\n                      </div>\n                      <div class=\"location \">\n                        <p><i class=\"fa fa-map-marker \" aria-hidden=\"true \"></i><span>Brooklyn, New York</span></p>\n                        \n                      </div>\n                    </div>\n                  </div>\n              </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"my-artists\" *ngIf=\"user && user['user']\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"head-global\"><h2>My Artists</h2></div>\n        </div>\n      </div>\n        <div class=\"highlights-wrap\">\n          <div class=\"row\">\n            <div class=\"alert alert-info col-sm-12\" *ngIf=\"my_follower_list && my_follower_list['length'] <= 0\">No data available.</div>\n            <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-6\" *ngFor=\"let my of my_follower_list;let i = index;\">\n              <div class=\"final-wrap\">\n                <div class=\"img-wrap\">\n                  <img src=\"{{my['artist_id']['image'] ? artist_img_url+my['artist_id']['image'] : 'img/highlight-player.png'}}\" alt=\"Finalists\">\n                </div>\n                <div class=\"content-wrap\">\n                  <div class=\"player\">\n                    <div class=\"title\"><a href=\"javascript:;\" routerLink=\"/artist_profile/{{my['artist_id']['_id']}}\">{{my['artist_id']['first_name']+' '+my['artist_id']['last_name']}}</a></div>\n                    <div class=\"cat {{my['artist_id']['music_type']['alias']}}\">{{my['artist_id']['music_type']['name']}}</div>\n                  </div>\n                  <div class=\"location\">\n                    <p><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i><span>Brooklyn, New York</span></p>\n                    \n                  </div>\n                </div>\n              </div>\n            </div>           \n          </div>\n        </div>\n\n    </div>\n  </div>\n</section>"

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
        var _this = this;
        var user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            this.ArtistService.getFollower().subscribe(function (response) {
                var flag = false;
                _this.artistdata['artist'].forEach(function (obj) {
                    response['user'].forEach(function (data) {
                        if (obj._id == data['artist_id']._id) {
                            flag = true;
                        }
                    });
                    if (flag) {
                        obj['is_followed'] = true;
                    }
                    else {
                        obj['is_followed'] = false;
                    }
                });
            });
        }
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

module.exports = "<div class=\"artist-profile-wrap\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"cover-img\">\n          <img src=\"{{artistdata['cover_image'] ? artist_img_url +artistdata['cover_image'] : 'img/cover.png'}}\" alt=\"Cover Image\">\n        </div>\n      </div>\n      <div class=\"col-md-12\">\n        <div class=\"profile-detail-wrap\">\n          <div class=\"row\">\n            <div class=\"col-md-3 col-sm-4 col-xs-4\">\n              <div class=\"profile-img\">\n                <a href=\"javascript:;\">\n                  <img src=\"{{artistdata['image'] ? artist_img_url +artistdata['image'] : 'img/profile-img.png'}}\" alt=\"Profile Images\">\n                </a>\n              </div>\n              <div class=\"follow-btn\">\n                <a href=\"javascript:;\" (click)=\"followArtist(artistdata._id, i)\">\n                  <i class=\"fa fa-heart\" aria-hidden=\"true\"></i> Follow\n                </a>\n              </div>\n              <div class=\"social\">\n                <h3>Social</h3>\n                <ul>\n                  <li>\n                    <a [href]=\"artistdata.social_media['facebook']\">\n                      <i class=\"fa fa-facebook-official\" aria-hidden=\"true\"></i>\n                    </a>\n                  </li>\n                  <li>\n                    <a [href]=\"artistdata.social_media['instagram']\">\n                      <i class=\"fa fa-instagram\" aria-hidden=\"true\"></i>\n                    </a>\n                  </li>\n                  <li>\n                    <a [href]=\"artistdata.social_media['instagram']\">\n                      <i aria-hidden=\"true\" class=\"fa fa-twitter\"></i>\n                    </a>\n                  </li>\n\n                  <li>\n                    <a [href]=\"artistdata.social_media['youtube']\">\n                      <i class=\"fa fa-youtube-play\" aria-hidden=\"true\"></i>\n                    </a>\n                  </li>\n                  <li>\n                    <a [href]=\"artistdata.social_media['sound_cloud']\">\n                      <i class=\"fa fa-soundcloud\" aria-hidden=\"true\"></i>\n                    </a>\n                  </li>\n                </ul>\n              </div>\n              <div class=\"follower\">\n                <h3>Followers</h3>\n                <span>{{artistfollower.length}}</span>\n                <ul>\n                  <li *ngFor=\"let follower of artistfollower;\">\n                    <img src=\"{{follower && follower['user_id'].image ? user_img_url+follower['user_id'].image : 'img/fan1.png'}}\" alt=\"Fan\">\n                  </li>\n                </ul>\n              </div>\n\n              <div class=\"comments\">\n                <h3>\n                  <a href=\"javascript:;\" routerLink=\"/artist_profile/{{artistdata._id}}/comments\">Comments</a>\n                </h3>\n                <span>{{artistcomments.length}}</span>\n                <div class=\"comment-block\" *ngFor=\"let comment of display_comment;\">\n                  <div class=\"s-name\" *ngIf=\"comment.track_id\">{{comment.track_id.name}}</div>\n                  <div class=\"s-img\">\n                    <img src=\"{{comment.user_id.image ? user_img_url+comment.user_id.image : 'img/fan1.png' }}\" alt=\"img\">\n                  </div>\n                  <div class=\"cm-date-name\">\n                    <h6>{{comment.user_id.first_name+ ' '+comment.user_id.last_name}}.</h6>\n                    <p>{{comment.created_at | timeAgo}}</p>\n                  </div>\n                  <div class=\"profile-description\">\n                    <p>{{comment.comment}}</p>\n                  </div>\n\n                </div>\n              </div>\n\n            </div>\n            <div class=\"col-md-9 col-sm-8 col-xs-8\">\n              <div class=\"artist-name\">\n                <h2>\n                  <a href=\"javascript:;\">{{artistdata['first_name']+' '+artistdata['last_name']}}</a>\n                </h2>\n                <span class=\"{{artistdata.music_type['alias']}} cat\" >{{artistdata.music_type['name']}}</span>\n              </div>\n              <div class=\"profile-location\">\n                <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\n                <span>New York</span>\n              </div>\n              <div class=\"profile-description\">\n                <p>{{artistdata.description}}</p>\n              </div>\n              <div class=\"profile-tabs-det\">\n                <!-- Nav tabs -->\n                <ul class=\"nav nav-tabs\" role=\"tablist\">\n                  <li class=\"nav-item \">\n                    <a class=\"nav-link {{active_tab_index == 1 ? 'active show' : ''}}\" (click)=\"manageTabChange(1)\" data-toggle=\"tab\" href=\"javascript:;\">Tracks</a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link {{active_tab_index == 2 ? 'active show' : ''}}\" (click)=\"manageTabChange(2)\" data-toggle=\"tab\" href=\"javascript:;\">Media</a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link {{active_tab_index == 3 ? 'active show' : ''}}\" (click)=\"manageTabChange(3)\" data-toggle=\"tab\" href=\"javascript:;\">Ranking</a>\n                  </li>\n                </ul>\n\n                <!-- Tab panes -->\n                <div class=\"tab-content\">\n                  <div id=\"tracks\" class=\"tab-pane fade {{active_tab_index == 1 ? 'active show' : ''}}\">\n                    <div class=\"track-wrapper\">\n                      <div class=\"track-select-wrap\">\n                        <select class=\"form-control\" name=\"artist_track\" id=\"gender\" (change)=\"sortArtistTrack(artistdata._id, $event.target.value)\">\n                          <option value=\"0\">Newest First</option>\n                          <option value=\"1\">Newest Last</option>\n                        </select>\n                      </div>\n                      <div class=\"track-table\">\n                        <div class=\"alert alert-info\" *ngIf=\"artisttrack && artisttrack.length <= 0\">No data available.</div>\n                        <table datatable [dtOptions]=\"dtOptions[0]\">\n                          <tbody>\n                            <tr *ngFor=\"let artist of artisttrack;let i=index;\">\n                              <td class=\"serial-num music_numb\">{{i+1}}.</td>\n                              <td class=\"music_play\">\n                                    <div class=\"artist-profile-custom-action-btn\">\n                                      <a [style.display]=\"!audio_ins[i] ? 'block' : 'none'\" (click)=\"playAudio(artist.audio, i, artisttrack)\" class=\"play_img\" ><img src=\"img/play_icon.png\"/></a>\n                                      <a [style.display]=\"audio_ins[i] ? 'block' : 'none'\" (click)=\"stopAudio(i, artisttrack)\" class=\"pause_img\"><img src=\"img/pause_icon.png\"/></a>\n                                    </div>\n                                    <!-- <img src=\"img/play.png \" alt=\"Pause \"  [style.display]=\"!audio_ins[i] ? 'block' : 'none'\" (click)=\"playAudio(artist.audio, i, artisttrack)\">\n                                    <img src=\"img/pause.png \" alt=\"Pause \"  [style.display]=\"audio_ins[i] ? 'block' : 'none'\" (click)=\"stopAudio(i, artisttrack)\"> -->\n                                \n                              </td>\n                              <td class=\"track-pic\">\n                                <a href=\"javascript:;\">\n                                  <img src=\"{{artist.image ? track_url+artist.image : 'img/track-img.png'}}\" style=\"height:50px;width:50px;\" alt=\"Track Image\">\n                                </a>\n                              </td>\n                              <td class=\"track-det\" colspan=\"2\">\n                                <p class=\"track-name\">{{artist.name}}</p>\n                                <p class=\"track-singer\">{{artist.artist_id.name}}</p>\n                                <p class=\"track-year\">{{artist.created_at | date : 'yyyy'}}</p>\n                                <p class=\"track-date\">{{artist.created_at | date : 'MMMM dd,yyyy'}}</p>\n                              </td>\n                              \n                              <td class=\"td track-vote music_vote\">\n                                <img src=\"img/start.png\" alt=\"start\">\n                                <span>{{artist.no_of_votes}}\n                                  <br>\n                                  <span>Votes</span>\n                                </span>\n                              </td>\n                              <td class=\"action music_action\" colspan=\"2\">\n                                <div class=\"cmt-like\">\n                                  <a href=\"javascript:;\" class=\"liked\" (click)=\"likeTrack(artist._id, i)\">\n                                    <img src=\"img/like-color.jpg\" alt=\"\">{{artist.no_of_likes}}</a>\n                                </div>\n                                <div class=\"cmt\">\n                                  <a href=\"javascript:;\" (click)=\"goToComment(artistdata['_id'], artist._id)\">\n                                    <img src=\"img/comment.png\" alt=\"\">{{artist.no_of_comments}}</a>\n                                </div>\n                                <div class=\"download\">\n                                  <a href=\"javascript:;\" >\n                                    <img src=\"img/download.png\" *ngIf=\"artist.is_downloadable\" (click)=\"downloadTrack(artist._id)\" alt=\"\">${{artist.price}}</a>\n                                </div>\n                                <div class=\"share\">\n                                  <a href=\"javascript:;\">\n                                    <img src=\"img/share.png\" alt=\"\">\n                                  </a>\n                                </div>\n                              </td>\n                            </tr>\n                          </tbody>\n                        </table>\n                      </div>\n                    </div>\n                  </div>\n                  <div id=\"media\" class=\"tab-pane fade {{active_tab_index == 2 ? 'active show' : ''}}\">\n                    <div class=\"media-wrapper\">\n                      <div class=\"row\">\n                        <div class=\"alert alert-info col-sm-12\" *ngIf=\"artistmedia.length <= 0\">No data available.</div>\n                        <div class=\"col-md-4 col-sm-6 col-xs-12\" *ngFor=\"let media of artistmedia; let i = index;\">\n                          <a class=\"img-wrap\" href=\"javascript:;\" data-fancybox=\"images\" data-width=\"1500\" data-height=\"1000\" (click)=\"open(i)\">\n                            <img src=\"{{media.image ? artist_media_url+media.image : 'img/media-1.png'}}\" alt=\"Media\">\n                          </a>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div id=\"ranking\" class=\"tab-pane fade {{active_tab_index == 3 ? 'active show' : ''}}\">\n                    <div class=\"track-wrapper\">\n                      <div class=\"track-select-wrap\">\n                        <select class=\"form-control\" id=\"sort\" (change)=\"sortRankingTrack(artistdata._id, $event.target.value)\">\n                          <option value=\"0\">Newest First</option>\n                          <option value=\"1\">Newest Last</option>\n                        </select>\n                      </div>\n                      <div class=\"track-table\">\n                        <div class=\"alert alert-info\" *ngIf=\"rankingtrack.length <= 0\">No data available.</div>\n                        <table datatable [dtOptions]=\"dtOptions[1]\">\n                          <tbody>\n                            <tr *ngFor=\"let rank of rankingtrack;let i=index;\">\n                              <td class=\"serial-num\">{{i+1}}.</td>\n                              <td class=\"play-option\">\n                                  <div class=\"artist-profile-custom-action-btn\">\n                                      <a [style.display]=\"!audio_ins[i] ? 'block' : 'none'\" (click)=\"playRankAudio(rank.audio, i, rankingtrack)\" class=\"play_img\" ><img src=\"img/play_icon.png\"/></a>\n                                      <a [style.display]=\"audio_ins[i] ? 'block' : 'none'\" (click)=\"stopRankAudio(i, rankingtrack)\" class=\"pause_img\"><img src=\"img/pause_icon.png\"/></a>\n                                  </div>\n                                <!-- <a href=\"javascript:;\">\n                                    <img src=\"img/play.png \" alt=\"Pause \"  [style.display]=\"!rank_audio_ins[i] ? 'block' : 'none'\" (click)=\"playRankAudio(rank.audio, i, rankingtrack)\">\n                                    <img src=\"img/pause.png \" alt=\"Pause \"  [style.display]=\"rank_audio_ins[i] ? 'block' : 'none'\" (click)=\"stopRankAudio(i, rankingtrack)\">\n                                </a> -->\n                              </td>\n                              <td class=\"track-pic\">\n                                <a href=\"javascript:;\">\n                                  <img src=\"{{rank.image ? track_url+rank.image : 'img/track-img.png'}}\" alt=\"Track Image\" style=\"height: 50px;width: 50px;;\">\n                                </a>\n                              </td>\n                              <td class=\"track-det\" colspan=\"2\">\n                                <p class=\"track-name\">{{rank.name}}</p>\n                                <p class=\"track-singer\">{{rank.artist_id.first_name+' '+rank.artist_id.last_name}}</p>\n                                <p class=\"track-year\">{{rank.created_at | date  : 'yyyy'}}</p>\n                                <p class=\"track-date\">{{rank.created_at | date  : 'MMMM dd,yyyy'}}</p>\n                              </td>\n                      \n                              <td class=\"td track-vote\">\n                                <img src=\"img/start.png\" alt=\"start\">\n                                <span>{{rank.no_of_votes}}\n                                  <br>\n                                  <span>Votes</span>\n                                </span>\n                              </td>\n                              <td class=\"action\" colspan=\"2\">\n                                <div class=\"cmt-like\">\n                                  <a href=\"javascript:;\" (click)=\"likeRankTrack(rank._id, i)\">\n                                    <img src=\"img/like-color.jpg\" alt=\"\">{{rank.no_of_likes}}</a>\n                                </div>\n                                <div class=\"cmt\">\n                                  <a href=\"javascript:;\" (click)=\"goToComment(rank._id)\">\n                                    <img src=\"img/comment.png\" alt=\"\">{{rank.no_of_comments}}</a>\n                                </div>\n                                <div class=\"download\">\n                                  <a href=\"javascript:;\" >\n                                    <img src=\"img/download.png\" *ngIf=\"rank.is_downloadable\" (click)=\"downloadTrack(rank._id)\" alt=\"\">${{rank.price}}</a>\n                                </div>\n                                <div class=\"share\">\n                                  <a href=\"javascript:;\">\n                                    <img src=\"img/share.png\" alt=\"\">\n                                  </a>\n                                </div>\n                              </td>\n                            </tr>\n                          </tbody>\n                        </table>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  </div>"

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
    function ArtistProfileComponent(ArtistProfileService, toastr, route, router, lightbox, MessageService) {
        var _this = this;
        this.ArtistProfileService = ArtistProfileService;
        this.toastr = toastr;
        this.route = route;
        this.router = router;
        this.lightbox = lightbox;
        this.MessageService = MessageService;
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
    }
    ArtistProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.artistdata = this.route.snapshot.data['artist'].artist;
        // this.artisttrack = this.route.snapshot.data['track'].track;
        this.artistmedia = this.route.snapshot.data['media'].media;
        this.artistfollower = this.route.snapshot.data['follower'].user;
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
                        that.ArtistProfileService.getAllTrack(dataTablesParameters).subscribe(function (response) {
                            that.artisttrack = response['track']['music'];
                            that.artisttrack.forEach(function (ele) { that.audio_ins.push(false); });
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
        if (data && data.user) {
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
    ArtistProfileComponent.prototype.sortArtistTrack = function (artist_id, sortBy) {
        var _this = this;
        var data = {
            "artist_id": artist_id,
            "sort_by": sortBy
        };
        this.ArtistProfileService.getAllTrack(data).subscribe(function (response) {
            _this.artisttrack = response['track'];
        });
    };
    // sortRankingTrack
    ArtistProfileComponent.prototype.sortRankingTrack = function (artist_id, sortBy) {
        var _this = this;
        var data = {
            "artist_id": artist_id,
            "sort_by": sortBy
        };
        this.ArtistProfileService.getAllRanking(data).subscribe(function (response) {
            _this.rankingtrack = response['track'];
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
            __WEBPACK_IMPORTED_MODULE_7__shared_message_service__["a" /* MessageService */]])
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
                "enable": true
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

module.exports = "<footer class=\"custom_footer\">\n  <div class=\"container\">\n\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n      <div class=\"foo-top \">\n        <div class=\"row\">\n          <div class=\"col-lg-2 col-md-3 col-sm-4 col-xs-6\">\n            <ul class=\"foo-links\">\n              <li>\n                <a href=\"#\">Whats New</a>\n              </li>\n              <li>\n                <a href=\"#\">Artists</a>\n              </li>\n              <li>\n                <a href=\"#\">Vote</a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"col-lg-2 col-md-3 col-sm-4 col-xs-6\">\n            <ul class=\"foo-links\">\n              <li>\n                <a href=\"#\">FAQ</a>\n              </li>\n              <li>\n                <a href=\"#\">Privacy Policy</a>\n              </li>\n              <li>\n                <a href=\"#\">Terms & Conditions</a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"col-lg-8 col-md-6 col-sm-4 col-xs-12 social-right\">\n            <ul class=\"social-list\">\n              <li>\n                <a href=\"#\">\n                  <i class=\"fa fa-instagram\" aria-hidden=\"true\"></i>\n                </a>\n              </li>\n              <li>\n                <a href=\"#\">\n                  <i class=\"fa fa-facebook-square\" aria-hidden=\"true\"></i>\n                </a>\n              </li>\n              <li>\n                <a href=\"#\">\n                  <i class=\"fa fa-twitter-square\" aria-hidden=\"true\"></i>\n                </a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n      <div class=\"foo-bottom col-sm-12\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"copyright\">\n              <a class=\"foo-logo\" href=\"#\">\n                <img src=\"img/foo-logo.png\" alt=\"\">\n              </a>\n              <span>© America’s Original Music</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>"

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

module.exports = "<header class=\"custom_header\">\n  <div class=\"container\">\n    <div class=\"row\" *ngIf=\"!user || user.admin\">\n      <div class=\"col-md-3 col-sm-3 col-xs-3\">\n        <div class=\"logo-wrap\">\n          <a href=\"javascript:;\" routerLink=\"\">\n            <img src=\"img/logo.png\" alt=\"\">\n          </a>\n        </div>\n      </div>\n      <div class=\"col-md-9 col-sm-9 col-xs-9\">\n        <div class=\"mobile-nav\" (click)=\"toggleMainMenu()\">\n          <a href=\"javascript:;\" >\n            <i class=\"fa fa-bars\"></i>\n          </a>\n        </div>\n        <nav class=\"navigation\" [style.display]=\"toggleMenu ? 'block' : 'none'\">\n          <ul>\n            <li routerLinkActive=\"active\">\n              <a href=\"javascript:;\" routerLink=\"/whats-new\">Whats new</a>\n            </li>\n            <li routerLinkActive=\"active\">\n              <a href=\"javascript:;\" routerLink=\"/artist\">Artists</a>\n            </li>\n            <li routerLinkActive=\"active\">\n              <a href=\"javascript:;\" routerLink=\"/vote\">Vote</a>\n            </li>\n            <li data-fancybox data-animation-duration=\"700\" data-src=\"javascript:;login\">\n              <a href=\"javascript:;\" (click)=\"openVerticallyCentered(content)\">Log In</a>\n            </li>\n            <li class=\"register-btn\">\n              <a href=\"javascript:;\" routerLink=\"/register\">Register</a>\n            </li>\n          </ul>\n        </nav>\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"user && user.artist\">\n\t\t\t\t<div class=\"col-md-2 col-sm-2 col-xs-2\">\n\t\t\t\t\t<div class=\"logo-wrap\">\n\t\t\t\t\t\t<a href=\"javascript:;\" routerLink=\"\"><img src=\"img/logo.png\" alt=\"\"></a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-10 col-sm-10 col-xs-10\">\n\t\t\t\t\t<div class=\"nav-header\">\n\t\t\t\t\t\t<div class=\"mobile-nav\" (click)=\"toggleMainMenu()\"><a href=\"javascript:;\"><i class=\"fa fa-bars\"></i></a></div>\n\t\t\t\t\t\t<nav class=\"navigation\" [style.display]=\"toggleMenu ? 'block' : 'none'\">\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li routerLinkActive=\"active\"><a href=\"javascript:;\" routerLink=\"/whats-new\">Whats new</a></li>\n\t\t\t\t\t\t\t\t<li routerLinkActive=\"active\"><a href=\"javascript:;\" routerLink=\"/artist\">Artists</a></li>\n\t\t\t\t\t\t\t\t<li routerLinkActive=\"active\"><a href=\"javascript:;\" routerLink=\"/vote\">Vote</a></li>\n\t\t\t\t\t\t\t\t<li routerLinkActive=\"active\"><a href=\"javascript:;\" routerLink=\"/my-music\">My Music</a></li>\n\t\t\t\t\t\t\t\t<li routerLinkActive=\"active\"><a href=\"javascript:;\" routerLink=\"/my-profile\">My Profile</a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</nav>\n\t\t\t\t\t\t<div class=\"logged-in-header\">\n\t\t\t\t\t\t\t<ul class=\"update-option\">\n\t\t\t\t\t\t\t\t<li class=\"message\"><a href=\"javascript:;\"><i class=\"fa fa-envelope-o\" aria-hidden=\"true\"></i> <span class=\"new-up\"></span></a></li>\n\t\t\t\t\t\t\t\t<li class=\"notification\"><a href=\"javascript:;\"><i class=\"fa fa-bell\" aria-hidden=\"true\"></i> <span class=\"new-up\"></span></a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t<div class=\"profile-picture\" ngbDropdown >\n\t\t\t\t\t\t\t\t<a href=\"javascirpt:;\" ngbDropdownToggle>\n                  <img src=\"{{user.artist.image != '' ? user.artist.image : 'img/upload1.png'}}\" *ngIf=\"user.artist\" alt=\"Profile Picture\">\n                  <img src=\"{{user.user.image != '' ? user.user.image : 'img/upload1.png'}}\" *ngIf=\"user.user\" alt=\"Profile Picture\">\n                </a>\n                <!-- <div ngbDropdownMenu>\n                    <button class=\"dropdown-item\">Logout</button>\n                </div> -->\n\t\t\t\t\t\t\t</div>\n            </div>\n            <ul class=\"logout_ul\">\n              <li>\n                <a href=\"javascript:;\" (click)=\"logout()\">LogOut</a></li>\n            </ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n    </div>\n    <div class=\"row\" *ngIf=\"user && user.user\">\n\t\t\t\t<div class=\"col-md-2 col-sm-2 col-xs-2\">\n\t\t\t\t\t<div class=\"logo-wrap\">\n\t\t\t\t\t\t<a href=\"javascript:;\" routerLink=\"\"><img src=\"img/logo.png\" alt=\"\"></a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-10 col-sm-10 col-xs-10\">\n\t\t\t\t\t<div class=\"nav-header\">\n\t\t\t\t\t\t<div class=\"mobile-nav\" (click)=\"toggleMainMenu()\"><a href=\"javascript:;\"><i class=\"fa fa-bars\"></i></a></div>\n\t\t\t\t\t\t<nav class=\"navigation\" [style.display]=\"toggleMenu ? 'block' : 'none'\">\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li routerLinkActive=\"active\"><a href=\"javascript:;\" routerLink=\"/whats-new\">Whats new</a></li>\n\t\t\t\t\t\t\t\t<li routerLinkActive=\"active\"><a href=\"javascript:;\" routerLink=\"/artist\">Artists</a></li>\n\t\t\t\t\t\t\t\t<li routerLinkActive=\"active\"><a href=\"javascript:;\" routerLink=\"/vote\">Vote</a></li>\n\t\t\t\t\t\t\t\t<li routerLinkActive=\"active\"><a href=\"javascript:;\" routerLink=\"/my-profile\">My Profile</a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</nav>\n\t\t\t\t\t\t<div class=\"logged-in-header\">\n\t\t\t\t\t\t\t<ul class=\"update-option\">\n\t\t\t\t\t\t\t\t<li class=\"notification\"><a href=\"javascript:;\"><i class=\"fa fa-bell\" aria-hidden=\"true\"></i> <span class=\"new-up\"></span></a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t<div class=\"profile-picture\" ngbDropdown>\n\t\t\t\t\t\t\t\t<a href=\"javascirpt:;\" ngbDropdownToggle>\n                  <img src=\"{{user.artist.image != '' ? user.artist.image : 'img/upload1.png'}}\" *ngIf=\"user.artist\" alt=\"Profile Picture\">\n                  <img src=\"{{user.user.image != '' ? user.user.image : 'img/upload1.png'}}\" *ngIf=\"user.user\" alt=\"Profile Picture\">\n                </a>\n                \n\t\t\t\t\t\t\t</div>\n            </div>\n            <ul class=\"logout_ul\">\n              <li>\n                <a href=\"javascript:;\" (click)=\"logout()\">LogOut</a></li>\n            </ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n    </div>\n  </div>\n</header>\n<ng-template #content let-c=\"close\" let-d=\"dismiss\" >\n  <div class=\"modal_login_wrapper\">\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n  <div class=\"modal-body\">\n    <div class=\"login-modal\">\n\t\t\t<div class=\"social-login\">\n\t\t\t\t<div class=\"google-login\">\n\t\t\t\t\t<a href=\"javascript:;\"><i class=\"fa fa-google\" aria-hidden=\"true\"></i> <span>Login with Google</span></a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"fb-login\">\n\t\t\t\t\t<a href=\"javascript:;\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i> <span>Login with Facebook</span></a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"or\">or with email</div>\n\t\t\t<div class=\"email-form\">\n\t\t\t\t<form [formGroup]=\"login_form\">\n\t\t\t\t\t<div class=\"form-group\">\n            <label for=\"email\">Email</label>\n            <input type=\"email\" class=\"form-control\" formControlName=\"email\" name=\"email\" id=\"email\" [(ngModel)]=\"userdata.email\" placeholder=\"Email\">\n            <div class=\"cust_err_msg\" *ngIf=\"login_validation && !login_form.controls['email'].valid\">\n              <span *ngIf=\"login_form.controls['email'].errors['required']\" class=\"text-danger\">Email is required.</span>\n            </div>\n          </div>\n          <div class=\"form-group pwd-grp\">\n            <label for=\"pwd\">Password</label>\n            <input type=\"password\" class=\"form-control\" formControlName=\"password\" name=\"password\" id=\"pwd\" [(ngModel)]=\"userdata.password\" placeholder=\"Password\">\n            <div class=\"pwd-icon\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i></div>\n            <div class=\"cust_err_msg\" *ngIf=\"login_validation && !login_form.controls['password'].valid\">\n              <span *ngIf=\"login_form.controls['password'].errors['required']\" class=\"text-danger\">Password is required.</span>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"pwd\">Type</label>\n            <select class=\"form-control\" name=\"type\" formControlName=\"type\" [(ngModel)]=\"userdata.type\">\n              <option value=\"artist\">Artist</option>\n              <option value=\"listener\">Listener</option>\n            </select>\n            <div class=\"cust_err_msg\" *ngIf=\"login_validation && !login_form.controls['type'].valid\">\n              <span *ngIf=\"login_form.controls['type'].errors['required']\" class=\"text-danger\">Type is required.</span>\n            </div>\n          </div>\n          <div class=\"login-btn\"><button (click)=\"login(login_form.valid)\" [disabled]=\"show_spinner\">Log In <i *ngIf=\"show_spinner\" class=\"fa fa-spinner fa-spin\"></i></button></div>\n          <div class=\"forgot-link\"><a href=\"javascript:;\" (click)=\"openForgetPasswordModal(forget)\">Forgot Password</a></div>\n          <div class=\"register-link\">Don't have an account yet? <a href=\"javascript:;\" routerLink=\"/register\">Register</a></div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n  </div>\n</div>\n</ng-template>\n<ng-template #forget let-c=\"close\" let-d=\"dismiss\">\n\n    <div class=\"modal-body\">\n      <div class=\"forget_password_modal\">\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        <form [formGroup]=\"forget_form\">\n            <h3 class=\"forget_password_header\">Forget Password</h3>\n          <div class=\"col-sm-12\">\n            <div class=\"form-group\">\n              <label class=\"control-label custom_form_label\">Account Type</label>\n              <select class=\"form-control custom_form\" formControlName=\"type\" name=\"type\" [(ngModel)]=\"forget_pwd_data.type\" placeholder='Enter login type'>\n                <option value=\"artist\">Artist</option>\n                <option value=\"user\">Listener</option>\n              </select>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"control-label custom_form_label\">Email Id</label>\n              <input class=\"form-control custom_form\" name=\"email\" formControlName=\"email\" [(ngModel)]=\"forget_pwd_data.email\" placeholder=\"Enter Email\"/>\n              <div *ngIf=\"!forget_form.controls['email'].valid && forget_form.controls['email'].dirty && forget_form.controls['email'].touched\">\n                <span *ngIf=\"forget_form.controls['email'].errors['required']\" class=\"text-danger\">Email is required.</span>\n                <span *ngIf=\"!forget_form.controls['email'].errors['required'] && forget_form.controls['email'].errors['email']\" class=\"text-danger\">Enter valid email.</span>\n              </div>\n            </div>\n            <div class=\"form-group text-right\">\n              <button class=\"btn forget_btn\" (click)=\"forgetPassword()\" [disabled]=\"!forget_form.valid || show_spinner\">Submit <i *ngIf=\"show_spinner\" class=\"fa fa-spinner fa-spin\"></i></button>\n            </div>\n          </div>\n        </form>\n     </div>\n    </div>\n</ng-template>"

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
    function HeaderComponent(modalService, fb, HeaderService, toastr, router, MessageService) {
        var _this = this;
        this.modalService = modalService;
        this.fb = fb;
        this.HeaderService = HeaderService;
        this.toastr = toastr;
        this.router = router;
        this.MessageService = MessageService;
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
            this.user.user['image'] = typeof this.user.user['image'] != 'undefined' ? __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].USER_IMG + this.user.user['image'] : '';
        }
        this.subscription = this.MessageService.getMessage().subscribe(function (response) {
            if (response && response['updateProfile']) {
                setTimeout(function () {
                    _this.user = JSON.parse(localStorage.getItem('user'));
                    if (_this.user && _this.user.artist) {
                        _this.user.artist['image'] = typeof _this.user.artist['image'] != 'undefined' ? __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].ARTIST_IMG + _this.user.artist['image'] : '';
                    }
                    else if (_this.user && _this.user.user) {
                        _this.user.user['image'] = typeof _this.user.user['image'] != 'undefined' ? __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].USER_IMG + _this.user.user['image'] : '';
                    }
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
        this.modalRef = this.modalService.open(content, { centered: true, windowClass: 'modal-wrapper' });
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
            this.HeaderService.artistForgetPassword({ email: this.forget_pwd_data.email }).subscribe(function (response) {
                _this.toastr.success(response['message'], 'Success!');
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
            this.HeaderService.userForgetPassword({ email: this.forget_pwd_data.email }).subscribe(function (response) {
                console.log('user ', response);
                _this.toastr.success(response['message'], 'Success!');
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
            __WEBPACK_IMPORTED_MODULE_7__shared_message_service__["a" /* MessageService */]])
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
        return this.http.post(this.api_host + "/user_reset_password", data);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_datatables__ = __webpack_require__("../../../../angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_io_slimscroll__ = __webpack_require__("../../../../angular-io-slimscroll/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_io_slimscroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular_io_slimscroll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard-layout/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__layout_dashboard_layout_component__ = __webpack_require__("../../../../../src/app/dashboard-layout/layout/dashboard-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__layout_dashboard_layout_service__ = __webpack_require__("../../../../../src/app/dashboard-layout/layout/dashboard-layout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__whatsnew_whatsnew_component__ = __webpack_require__("../../../../../src/app/dashboard-layout/whatsnew/whatsnew.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__artist_artist_component__ = __webpack_require__("../../../../../src/app/dashboard-layout/artist/artist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__artist_comments_comments_component__ = __webpack_require__("../../../../../src/app/dashboard-layout/artist_comments/comments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__track_comments_track_comments_component__ = __webpack_require__("../../../../../src/app/dashboard-layout/track_comments/track_comments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__artist_track_comments_artist_track_comments_component__ = __webpack_require__("../../../../../src/app/dashboard-layout/artist_track_comments/artist_track_comments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__artist_profile_artist_profile_component__ = __webpack_require__("../../../../../src/app/dashboard-layout/artist_profile/artist_profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__vote_vote_component__ = __webpack_require__("../../../../../src/app/dashboard-layout/vote/vote.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__my_profile_myProfile_component__ = __webpack_require__("../../../../../src/app/dashboard-layout/my_profile/myProfile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__my_music_my_music_component__ = __webpack_require__("../../../../../src/app/dashboard-layout/my_music/my_music.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__layout_dashboard_layout_module__ = __webpack_require__("../../../../../src/app/dashboard-layout/layout/dashboard-layout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared_carousel_carousel_module__ = __webpack_require__("../../../../../src/app/shared/carousel/carousel.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__header_header_service__ = __webpack_require__("../../../../../src/app/dashboard-layout/header/header.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__my_profile_myProfile_service__ = __webpack_require__("../../../../../src/app/dashboard-layout/my_profile/myProfile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__my_music_my_music_service__ = __webpack_require__("../../../../../src/app/dashboard-layout/my_music/my_music.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__whatsnew_whatsnew_service__ = __webpack_require__("../../../../../src/app/dashboard-layout/whatsnew/whatsnew.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__artist_artist_service__ = __webpack_require__("../../../../../src/app/dashboard-layout/artist/artist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__artist_comments_comments_service__ = __webpack_require__("../../../../../src/app/dashboard-layout/artist_comments/comments.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__track_comments_track_comments_service__ = __webpack_require__("../../../../../src/app/dashboard-layout/track_comments/track_comments.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__artist_track_comments_artist_track_comments_service__ = __webpack_require__("../../../../../src/app/dashboard-layout/artist_track_comments/artist_track_comments.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__artist_profile_artist_profile_service__ = __webpack_require__("../../../../../src/app/dashboard-layout/artist_profile/artist_profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__resolve_artist_resolve__ = __webpack_require__("../../../../../src/app/dashboard-layout/resolve/artist_resolve/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__resolve_track_comment_resolve__ = __webpack_require__("../../../../../src/app/dashboard-layout/resolve/track_comment_resolve/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__dashboard_dashboard_service__ = __webpack_require__("../../../../../src/app/dashboard-layout/dashboard/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_angular2_lightbox__ = __webpack_require__("../../../../angular2-lightbox/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_angular2_lightbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_36_angular2_lightbox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_time_ago_pipe__ = __webpack_require__("../../../../time-ago-pipe/esm5/time-ago-pipe.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__shared_auth_service__ = __webpack_require__("../../../../../src/app/shared/auth.service.ts");
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
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_18__layout_dashboard_layout_module__["a" /* DashboardLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_19__shared_carousel_carousel_module__["a" /* CarouselModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_21__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_34__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_34__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_38__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_35_ngx_toastr__["a" /* ToastrModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_1_angular_highcharts__["b" /* ChartModule */],
                __WEBPACK_IMPORTED_MODULE_36_angular2_lightbox__["LightboxModule"],
                __WEBPACK_IMPORTED_MODULE_4_angular_datatables__["b" /* DataTablesModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_7__layout_dashboard_layout_component__["a" /* DashboardLayoutComponent */],
                        children: [
                            { path: '', component: __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__["a" /* DashboardComponent */] },
                            { path: 'whats-new', component: __WEBPACK_IMPORTED_MODULE_9__whatsnew_whatsnew_component__["a" /* WhatsNewComponent */] },
                            { path: 'artist', component: __WEBPACK_IMPORTED_MODULE_10__artist_artist_component__["a" /* ArtistComponent */] },
                            { path: 'artist_track_comment/:id', component: __WEBPACK_IMPORTED_MODULE_13__artist_track_comments_artist_track_comments_component__["a" /* ArtistTrackConmmentsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_39__shared_auth_service__["a" /* AuthService */]] },
                            { path: 'artist_profile/:artist_id/track/:id/comments', component: __WEBPACK_IMPORTED_MODULE_12__track_comments_track_comments_component__["a" /* TrackConmmentsComponent */], resolve: { comment: __WEBPACK_IMPORTED_MODULE_32__resolve_track_comment_resolve__["b" /* TrackCommentResolve */], artist: __WEBPACK_IMPORTED_MODULE_32__resolve_track_comment_resolve__["a" /* TrackArtistProfileResolve */], track: __WEBPACK_IMPORTED_MODULE_32__resolve_track_comment_resolve__["c" /* TrackDetailResolve */] } },
                            { path: 'artist_profile/:id/comments', component: __WEBPACK_IMPORTED_MODULE_11__artist_comments_comments_component__["a" /* ConmmentsComponent */], resolve: { artist: __WEBPACK_IMPORTED_MODULE_31__resolve_artist_resolve__["d" /* ArtistProfileResolve */], comments: __WEBPACK_IMPORTED_MODULE_31__resolve_artist_resolve__["a" /* ArtistCommentsResolve */] } },
                            { path: 'artist_profile/:id', component: __WEBPACK_IMPORTED_MODULE_14__artist_profile_artist_profile_component__["a" /* ArtistProfileComponent */], resolve: { artist: __WEBPACK_IMPORTED_MODULE_31__resolve_artist_resolve__["d" /* ArtistProfileResolve */], media: __WEBPACK_IMPORTED_MODULE_31__resolve_artist_resolve__["c" /* ArtistMediaResolve */], follower: __WEBPACK_IMPORTED_MODULE_31__resolve_artist_resolve__["b" /* ArtistFollowerResolve */], comments: __WEBPACK_IMPORTED_MODULE_31__resolve_artist_resolve__["a" /* ArtistCommentsResolve */] } },
                            { path: 'vote', component: __WEBPACK_IMPORTED_MODULE_15__vote_vote_component__["a" /* VoteComponent */] },
                            { path: 'my-music', component: __WEBPACK_IMPORTED_MODULE_17__my_music_my_music_component__["a" /* MyMusicComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_39__shared_auth_service__["a" /* AuthService */]] },
                            { path: 'my-profile', component: __WEBPACK_IMPORTED_MODULE_16__my_profile_myProfile_component__["a" /* MyProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_39__shared_auth_service__["a" /* AuthService */]] }
                        ]
                    }
                ])
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_9__whatsnew_whatsnew_component__["a" /* WhatsNewComponent */],
                __WEBPACK_IMPORTED_MODULE_10__artist_artist_component__["a" /* ArtistComponent */],
                __WEBPACK_IMPORTED_MODULE_11__artist_comments_comments_component__["a" /* ConmmentsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__vote_vote_component__["a" /* VoteComponent */],
                __WEBPACK_IMPORTED_MODULE_16__my_profile_myProfile_component__["a" /* MyProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_17__my_music_my_music_component__["a" /* MyMusicComponent */],
                __WEBPACK_IMPORTED_MODULE_5_angular_io_slimscroll__["SlimScroll"],
                __WEBPACK_IMPORTED_MODULE_14__artist_profile_artist_profile_component__["a" /* ArtistProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_12__track_comments_track_comments_component__["a" /* TrackConmmentsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__artist_track_comments_artist_track_comments_component__["a" /* ArtistTrackConmmentsComponent */],
                __WEBPACK_IMPORTED_MODULE_37_time_ago_pipe__["a" /* TimeAgoPipe */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_22__header_header_service__["a" /* HeaderService */],
                __WEBPACK_IMPORTED_MODULE_39__shared_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_23__my_profile_myProfile_service__["a" /* MyProfileService */],
                __WEBPACK_IMPORTED_MODULE_24__my_music_my_music_service__["a" /* MyMusicService */],
                __WEBPACK_IMPORTED_MODULE_25__whatsnew_whatsnew_service__["a" /* WhatsNewService */],
                __WEBPACK_IMPORTED_MODULE_26__artist_artist_service__["a" /* ArtistService */],
                __WEBPACK_IMPORTED_MODULE_27__artist_comments_comments_service__["a" /* CommentsService */],
                __WEBPACK_IMPORTED_MODULE_33__dashboard_dashboard_service__["a" /* DashboardService */],
                __WEBPACK_IMPORTED_MODULE_29__artist_track_comments_artist_track_comments_service__["a" /* ArtistTrackCommentsService */],
                __WEBPACK_IMPORTED_MODULE_30__artist_profile_artist_profile_service__["a" /* ArtistProfileService */],
                __WEBPACK_IMPORTED_MODULE_31__resolve_artist_resolve__["d" /* ArtistProfileResolve */],
                __WEBPACK_IMPORTED_MODULE_31__resolve_artist_resolve__["f" /* ArtistTrackResolve */],
                __WEBPACK_IMPORTED_MODULE_31__resolve_artist_resolve__["c" /* ArtistMediaResolve */],
                __WEBPACK_IMPORTED_MODULE_31__resolve_artist_resolve__["a" /* ArtistCommentsResolve */],
                __WEBPACK_IMPORTED_MODULE_31__resolve_artist_resolve__["b" /* ArtistFollowerResolve */],
                __WEBPACK_IMPORTED_MODULE_31__resolve_artist_resolve__["e" /* ArtistRankingResolve */],
                __WEBPACK_IMPORTED_MODULE_28__track_comments_track_comments_service__["a" /* TrackCommentsService */],
                __WEBPACK_IMPORTED_MODULE_32__resolve_track_comment_resolve__["b" /* TrackCommentResolve */],
                __WEBPACK_IMPORTED_MODULE_32__resolve_track_comment_resolve__["a" /* TrackArtistProfileResolve */],
                __WEBPACK_IMPORTED_MODULE_32__resolve_track_comment_resolve__["c" /* TrackDetailResolve */],
                __WEBPACK_IMPORTED_MODULE_8__layout_dashboard_layout_service__["a" /* DashboardLayoutService */]
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

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n<div id=\"loader\" *ngIf=\"loading\">\n    <i class=\"fa fa-spinner fa-spin fa-3x\" aria-hidden=\"true\"></i>\n</div>\n\n<section class=\"player-wrapper\" [style.display]=\"audio_instance_list.length > 0 ? 'block' : 'none'\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-11 col-md-12 audio_container\">\n          <div id=\"audioplayer\">\n\n              <button class=\"btn  prev_icon\" (click)=\"prev()\"><img src=\"img/next.png\"/></button>\n              <button id=\"pButton\" class=\"play\" (click)=\"play()\"></button>\n              <button class=\"btn  next_icon\" (click)=\"next()\"><img src=\"img/next.png\"/></button>\n              <div class=\"audio_profile\">\n                  <img src=\"{{audio_list[song_cnt] &&  audio_list[song_cnt]['image'] ? track_url+audio_list[song_cnt]['image'] : 'img/profile-img.png' }}\"/>\n              </div>\n              <div class=\"audio_content\">\n                <div class=\"audio_profile_name\">\n                    <h3>{{audio_list[song_cnt] && audio_list[song_cnt]['name'] ? audio_list[song_cnt]['name'] : ''}}</h3>\n                    <span>{{audio_list.length > 0 && audio_list[song_cnt] && audio_list[song_cnt]['artist_id'] && audio_list[song_cnt]['artist_id']['first_name'] ? audio_list[song_cnt]['artist_id']['first_name'] : '' +\" \"+audio_list.length > 0 && audio_list[song_cnt] && audio_list[song_cnt]['artist_id'] &&  audio_list[song_cnt]['artist_id']['last_name'] ? audio_list[song_cnt]['artist_id']['last_name'] : ''  }}</span>\n                </div> \n                <div class=\"volume_section\">\n                    <img class=\"volume_btn\" src=\"img/volume.png\"/>\n                    <span>\n                        <input type=\"range\" id=\"myRange\" min=\"1\" value=\"100\" (change)=\"mangeVolumn($event)\">\n                    </span>\n                    <div class=\"audio_time\"><span id=\"running_time\">{{running_time}}</span> / <span>{{total_time}}</span></div>\n                </div>  \n                <div class=\"progress\">\n                    <input type=\"range\" id=\"song_prog\" min=\"0\" (change)=\"manageProgress($event)\">\n                </div>\n                <!-- <div class=\"progress \" id=\"timeline\">\n                        <div class=\"progress-bar\" id=\"playhead\" role=\"progressbar\"  aria-valuemax=\"100\" style=\"width:10%\">\n                          <span class=\"sr-only\">70% Complete</span>\n                        </div>\n                </div> -->\n              </div>\n              <div class=\"music_icons\">\n                  <a href=\"javascript:;\" *ngIf=\"user && audio_list[song_cnt] && audio_list[song_cnt]['is_downloadable']\" (click)=\"downloadTrack()\"><img src=\"img/download.png\"/></a>\n                  <img src=\"img/share.png\"/>\n              </div>\n\n\n          </div>\n        <div class=\"aom_audio_player\">\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard-layout/layout/dashboard-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_message_service__ = __webpack_require__("../../../../../src/app/shared/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_layout_service__ = __webpack_require__("../../../../../src/app/dashboard-layout/layout/dashboard-layout.service.ts");
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





var DashboardLayoutComponent = /** @class */ (function () {
    function DashboardLayoutComponent(MessageService, DashboardLayoutService, toastr) {
        var _this = this;
        this.MessageService = MessageService;
        this.DashboardLayoutService = DashboardLayoutService;
        this.toastr = toastr;
        this.track_url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].ARTIST_TRACK;
        this.audio_list = [
            this.track_url + "/audio_152939725821967008.mp4",
            this.track_url + "/audio_152940920498523176.mp4",
            this.track_url + "/audio_152940899013172582.mp4"
        ];
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
        this.user_img_url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].USER_IMG;
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
                        _this.total_time = _this.format_seconds(_this.duration);
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
    };
    DashboardLayoutComponent.prototype.play = function () {
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
    DashboardLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard-layout',
            template: __webpack_require__("../../../../../src/app/dashboard-layout/layout/dashboard-layout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard-layout/layout/dashboard-layout.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_3__dashboard_layout_service__["a" /* DashboardLayoutService */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */]])
    ], DashboardLayoutComponent);
    return DashboardLayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard-layout/layout/dashboard-layout.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardLayoutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_layout_component__ = __webpack_require__("../../../../../src/app/dashboard-layout/layout/dashboard-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_header_component__ = __webpack_require__("../../../../../src/app/dashboard-layout/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__ = __webpack_require__("../../../../../src/app/dashboard-layout/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var DashboardLayoutModule = /** @class */ (function () {
    function DashboardLayoutModule() {
    }
    DashboardLayoutModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* RouterModule */].forChild([])
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__dashboard_layout_component__["a" /* DashboardLayoutComponent */], __WEBPACK_IMPORTED_MODULE_4__header_header_component__["a" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__["a" /* FooterComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__dashboard_layout_component__["a" /* DashboardLayoutComponent */]],
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
    DashboardLayoutService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DashboardLayoutService);
    return DashboardLayoutService;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard-layout/my_music/my_music.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"mymusic-wrap\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-12\">\n        <div class=\"track-menu\">\n          <ul class=\"nav nav-tabs\" id=\"myTab\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link {{tab_cnt == 1 ? 'active' : ''}}\" (click)=\"tabChanged(1)\" data-toggle=\"tab\" href=\"javascript:;\" >My Track</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link {{tab_cnt == 2 ? 'active' : ''}}\" (click)=\"tabChanged(2)\"  data-toggle=\"tab\" href=\"javascript:;\" >Stats</a>\n            </li>\n          </ul>\n          \n          <p><a data-fancybox data-animation-duration=\"700\" data-src=\"#addtrack\" (click)=\"openModal(content)\"  href=\"javascript:;\"><img src=\"img/icons8-plus_mathNormal.png\" alt=\"Plus Icone\"> Add Track</a></p>\n        </div>\n      </div>\n      <div class=\"col-lg-10 col-md-9 col-sm-8 col-xs-12\">\n        <div class=\"tab-content\">\n          <div class=\"tab-pane fade {{tab_cnt == 1 ? 'show active' : ''}}\" id=\"mytracks\">\n            <div class=\"track-table\">\n              <div class=\"alert alert-info\" *ngIf=\"tracklist.length == 0\">\n                No data available.\n              </div>\n              <table datatable [dtOptions]=\"dtOptions\">\n                <tbody>\n                  <tr *ngFor=\"let t of tracklist; let i =  index;\">\n                    <td class=\"serial-num\">{{i+1}}.</td>\n                    <td class=\"play-option\">\n                      <a href=\"javascript:;\" [style.display]=\"!audio_ins[i] ? 'block' : 'none'\" (click)=\"playAudio(t.audio, i, tracklist)\" >\n                        <img src=\"img/new-play.png\" alt=\"Play\" >\n                      </a>\n                      <a href=\"javascript:;\" [style.display]=\"audio_ins[i] ? 'block' : 'none'\" (click)=\"stopAudio(i, tracklist)\" >\n                        <img src=\"img/pause.png\" alt=\"Play\" >\n                      </a>\n                    </td>\n                    <td class=\"track-pic\"><a href=\"javascript:;\">\n                      <img src=\"{{track_url+t.image}}\" *ngIf=\"t.image\" width=\"50\" height=\"50\" alt=\"Track Image\">\n                      <img src=\"img/track-img.png\" *ngIf=\"!t.image\" alt=\"Track Image\">\n                    </a></td>\n                    <td class=\"track-det\" colspan=\"2\">\n                      <p class=\"track-name\">{{t.name}}</p>\n                      <p class=\"track-singer\">{{userinfo.artist.first_name + ' '+ userinfo.artist.last_name}}</p>\n                      <p class=\"track-year\">{{t.created_at | date : 'MMMM dd, yyyy'}}</p>\n                    </td>\n                    <td class=\"td track-vote\" style=\"display: none;\">\n                      <img src=\"img/start.png\" alt=\"start\">\n                      <span>1300 <br> <span>Votes</span></span>\n                    </td>\n\n                    <td class=\"contest-btn\" >\n                      <a data-fancybox data-animation-duration=\"700\" (click)=\"openContestModal(contest, t)\" data-src=\"#submitcontest\" href=\"javascript:;\">Submit for a Contest</a>\n                    </td>\n                    <td class=\"action\" colspan=\"2\">\n                      <div class=\"track-like\" style=\"top:10px;\">\n                          <label class=\"switch\" title=\"Track Download status\">\n                              <input type=\"checkbox\"  [checked]=\"t.is_downloadable\" (change)=\"updateTrackDownLoadStatus(t._id)\" />\n                              <!-- <input type=\"checkbox\" *ngIf=\"!t.is_downloadable\" (change)=\"updateTrackDownLoadStatus(t._id)\" /> -->\n                              <span class=\"slider round\"></span>\n                          </label>\n                      </div>\n                      <div class=\"track-like\">\n                        <a href=\"javascript:;\"><img src=\"img/likehand.png\" alt=\"Like Thumb\"></a>\n                        <span class=\"new-up\"></span>\n                      </div>\n                      <div class=\"track-comment\">\n                        <a href=\"javascript:;\" routerLink=\"/artist_track_comment/{{t._id}}\"><img src=\"img/comment.png\" alt=\"Comment\"></a>\n                        <span class=\"new-up\"></span>\n                      </div>\n                      <div class=\"track-price\"><a href=\"#\">${{t.price}}</a></div>\n                      <div class=\"share\"><a href=\"javascript:;\"><img src=\"img/share.png\" alt=\"Track Share\"></a></div>\n                      <div class=\"track-edit\"><a data-fancybox data-animation-duration=\"700\" data-src=\"#edittrack\" (click)=\"openEditTrackModal(editTrack, t)\"  href=\"javascript:;\"><img src=\"img/edit.png\" alt=\"Track Edit\"></a></div>\n                      <div class=\"track-del\"><a data-fancybox data-animation-duration=\"700\" data-src=\"#delete\" (click)=\"removeTrack(t._id)\" href=\"javascript:;\"><img src=\"img/del.png\" alt=\"Track Delete\"></a></div>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n          <div class=\"tab-pane fade {{tab_cnt == 2 ? 'show active' : ''}}\" id=\"stats\">\n            <div class=\"track-table\">\n                <div class=\"alert alert-info\" *ngIf=\"tracklist.length == 0\">\n                  No data available.\n                </div>\n              <table>\n                <tbody>\n                  <tr *ngFor=\"let t of tracklist; let i =  index;\">\n                    <td class=\"serial-num\">{{i+1}}.</td>\n                    <td class=\"play-option\">\n                        <a href=\"javascript:;\" >\n                          <img src=\"img/play.png \" alt=\"Pause \"  [style.display]=\"!audio_ins[i] ? 'block' : 'none'\" (click)=\"playAudio(t.audio, i, tracklist)\">\n                          <img src=\"img/pause.png \" alt=\"Pause \"  [style.display]=\"audio_ins[i] ? 'block' : 'none'\" (click)=\"stopAudio(i, tracklist)\">\n                        </a>\n                    </td>\n                    <td class=\"track-pic\"><a href=\"javascript:;\">\n                        <img src=\"{{track_url+t.image}}\" *ngIf=\"t.image\" width=\"50\" height=\"50\" alt=\"Track Image\">\n                        <img src=\"img/track-img.png\" *ngIf=\"!t.image\" alt=\"Track Image\">\n                    </a></td>\n                    <td class=\"track-det\" colspan=\"2\">\n                      <p class=\"track-name\">{{t.name}}</p>\n                      <p class=\"track-singer\">{{userinfo.artist.first_name + ' '+ userinfo.artist.last_name}}</p>\n                      <p class=\"track-year\">{{t.created_at | date : 'MMMM dd, yyyy'}}</p>\n                    </td>\n                    <td class=\"td track-vote\">\n                      <img src=\"img/start.png\" alt=\"start\">\n                      <span>{{t.no_of_votes}} <br> <span>Votes</span></span>\n                    </td>\n                    <td class=\"action\" colspan=\"2\">\n                      <div class=\"track-like\">\n                        <a href=\"javascript:;\"><img src=\"img/likehand.png\" alt=\"Like Thumb\"></a>\n                        <span class=\"new-up\"></span>\n                      </div>\n                      <div class=\"track-comment\">\n                        <a href=\"javascript:;\" routerLink=\"/artist_track_comment/{{t._id}}\"><img src=\"img/comment.png\" alt=\"Comment\"></a>\n                        <span class=\"new-up\"></span>\n                      </div>\n                      <div class=\"track-price\"><a href=\"javascript:;\">${{t.price}}</a></div>\n                      <div class=\"share\"><a href=\"javascript:;\"><img src=\"img/share.png\" alt=\"Track Share\"></a></div>\n                      <div class=\"track-edit\"><a data-fancybox data-animation-duration=\"700\" data-src=\"#edittrack\"  href=\"javascript:;\"><img src=\"img/edit.png\" alt=\"Track Edit\"></a></div>\n                      <div class=\"track-del\"><a data-fancybox data-animation-duration=\"700\" data-src=\"#delete\"  href=\"javascript:;\"><img src=\"img/del.png\" alt=\"Track Delete\"></a></div>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<ng-template #content let-c=\"close\" let-d=\"dismiss\" >\n\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t</button>\n  <div class=\"modal-body\">\n    <div class=\"add-track-modal\">\n\t\t\t<h3>Add New Track</h3>\n\t\t\t<div class=\"media-upload-btn\" *ngIf=\"!audio_file\"> \n\t\t\t\t<span class=\"upl-img\"><i class=\"fa fa-cloud-upload\" aria-hidden=\"true\"></i></span> \n\t\t\t\t<span class=\"up_text\">Select Music</span> \n\t\t\t\t<input type=\"file\" name=\"my_doc_upload\" id=\"my_doc_upload\" (change)=\"changeAudio($event)\" multiple=\"false\"> \n\t\t\t\t<p class=\"instrution\">AIFF,WAV,FLAC,MP3 or AAC, 3GB or less</p>\n      </div>\n      <div class=\"media-upload-btn\" *ngIf=\"audio_file\">\n        <span class=\"track_name\">{{audio_file.name}}</span>\n        <div class=\"upload-btn-div\">\n          <label for=\"fileUpload\">Upload a Different Track</label>\n          <input type=\"file\" name=\"my_doc_upload\" (change)=\"changeAudio($event)\" id=\"my_doc_upload\" multiple=\"false\"> \n        </div>\n      </div>\n\t\t\t<div class=\"media_progress_bar\">\n\t\t\t\t<div class=\"det\">\n\t\t\t\t\t<div class=\"upl-file-name\">My Summer.mp3</div>\n\t\t\t\t\t<div class=\"upl-time-rem\">5 sec remaining</div>\n\t\t\t\t\t<div class=\"close-btn\"><img src=\"img/closeNormal.png\" alt=\"Close-btn\"></div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"progress\">\n\t\t\t\t    <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:70%\">\n\t\t\t\t      <span class=\"sr-only\">70% Complete</span>\n\t\t\t\t    </div>\n\t\t\t\t  </div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group tr-name\">\n\t\t\t    <label for=\"tname\">Track Name</label>\n\t\t\t    <input type=\"text\" class=\"form-control\" id=\"tname\" name=\"name\" [(ngModel)]=\"trackdata.name\" placeholder=\"Track Name\">\n\t\t  \t</div>\n\t\t  \t<div class=\"form-group tr-price\">\n\t\t\t    <label for=\"tname\">Price</label>\n\t\t\t    <input type=\"number\" class=\"form-control\" id=\"tname\" name=\"price\" [(ngModel)]=\"trackdata.price\" placeholder=\"$ 1399\">\n\t\t  \t</div>\n\t\t  \t<div class=\"textarea-upload\">\n\t\t\t  \t<div class=\"media-upload-btn song-photo\" *ngIf=\"!add_track_img\"> \n  \t\t\t\t\t<span class=\"upl-img\"><i class=\"fa fa-cloud-upload\" aria-hidden=\"true\"></i></span> \n  \t\t\t\t\t<span class=\"up_text\">Upload <br>Photo</span> \n  \t\t\t\t\t<input type=\"file\" name=\"my_doc_upload\" id=\"my_doc_upload\" (change)=\"changeFile($event)\" multiple=\"false\"> \n          </div>\n          <div class=\"upload-cover\" *ngIf=\"add_track_img\" style=\"width:92.5px;height:85px;\"> \n            <img src=\"{{add_track_img}}\" alt=\"Edit cover Image\" >\n            <input type=\"file\" name=\"my_doc_upload\" id=\"my_doc_upload\" (change)=\"changeFile($event)\" multiple=\"false\">\n          </div>\n\t\t\t\t  <div class=\"form-group\">\n            <label>Describe Yourself</label>\n            <textarea name=\"description\" placeholder=\"Describe Yourself\" [(ngModel)]=\"trackdata.description\" class=\"form-control\" ></textarea>\n          </div>\n      </div>\n\t\t\t<div class=\"button_group\">\n\t\t\t\t<button class=\"add-btn\" (click)=\"addTrack()\" [disabled]=\"show_spinner\">Add Track <i  *ngIf=\"show_spinner\" class=\"fa fa-spinner fa-spin\"></i></button>\n\t\t\t</div>\n\t  </div>\n  </div>\n</ng-template>\n<ng-template #editTrack let-c=\"close\" let-d=\"dismiss\">\n  \t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t</button>\n  <div class=\"modal-body\">\n    <form>\n    <div class=\"edit-track-modal\">\n        <h3>Edit Track</h3>\n        <div class=\"form-group tr-name\">\n            <label for=\"tname\">Track Name</label>\n            <input type=\"text\" class=\"form-control\" id=\"tname\" name=\"name\" [(ngModel)]=\"trackdata.name\" placeholder=\"Track Name\">\n          </div>\n          <div class=\"form-group tr-price\">\n            <label for=\"tname\">Price</label>\n            <input type=\"text\" class=\"form-control\" id=\"tname\" name=\"price\" placeholder=\"$ 1399\" [(ngModel)]=\"trackdata.price\">\n          </div>\n          <div class=\"textarea-upload\">\n            <div class=\"edit-profile-picture\">\n            <div class=\"upload-cover\"> \n              <img src=\"{{edit_image}}\" alt=\"Edit cover Image\">\n              <input type=\"file\" name=\"my_doc_upload\" id=\"my_doc_upload\" (change)=\"changeTrackImage($event)\" multiple=\"false\">\n              <a data-fancybox=\"\" data-animation-duration=\"700\" data-src=\"#delete\" *ngIf=\"trackdata.image\" href=\"javascript:;\" (click)=\"removeTrackImage(trackdata._id)\" class=\"delete\"><i class=\"fa fa-trash\"></i></a>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label>Describe Yourself</label>\n            <textarea name=\"description\" [(ngModel)]=\"trackdata.description\" class=\"form-control\"></textarea>\n          </div>\n        </div>\n        <div class=\"button_group\">\n          <button type=\"submit\" (click)=\"updateTrack()\" [disabled]=\"show_spinner\" class=\"update-btn\">Update <i *ngIf=\"show_spinner\" class=\"fa fa-spinner fa-spin\"></i></button>\n        </div>\n    </div>\n    </form>\n  </div>\n</ng-template>\n<ng-template #contest let-c=\"close\" let-d=\"dismiss\">\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    <div class=\"modal-body\">\n        <div class=\"contest-wrap\" >\n          <h3>Add New Track</h3>\n          <div class=\"contest-table\" data-mcs-theme=\"dark-3\">\n            <table>\n              <tr *ngFor=\"let con of contest_list; let i = index;\">\n                <td>\n                    <!-- <input type=\"radio\" value=\"{{con._id}}\" name=\"card\" [(ngModel)]=\"contest_id\" /> -->\n                  <div class=\"radio\">\n                      <label>\n                        <input type=\"radio\" value=\"{{con._id}}\" name=\"card\" [(ngModel)]=\"contest_id\" />\n                        <span class=\"radio_check\"></span>\n                      </label>\n                  </div>\n                </td>\n                <td><img src=\"img/conest-img.jpg\" alt=\"Contest Image\"></td>\n                <td>\n                  <h3 class=\"c-name\">{{con.name}}</h3>\n                  <div class=\"c-dates\">{{con.start_date | date : 'MMMM dd, yyyy'}} - {{con.end_date | date : 'MMMM dd, yyyy'}}</div>\n                  <div class=\"c-part\">{{con.no_of_participants}} Contest Participants</div>\n                </td>\n              </tr>\n            </table>\n          </div>\n          <div class=\"button_group\">\n            <button type=\"submit\" [disabled]=\"show_spinner\" (click)=\"addTrackToContest()\" class=\"add-btn\">Submit <i *ngIf=\"show_spinner\" class=\"fa fa-spinner fa-spin\"></i></button>\n          </div>\n        </div>\n    </div>\n</ng-template>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_sweetalert2__);
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
    function MyMusicComponent(modalService, MyMusicService, toastr, MessageService) {
        var _this = this;
        this.modalService = modalService;
        this.MyMusicService = MyMusicService;
        this.toastr = toastr;
        this.MessageService = MessageService;
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
    MyMusicComponent.prototype.toggleFilter = function () {
        this.show_filter = !this.show_filter;
    };
    MyMusicComponent.prototype.tabChanged = function (val) {
        this.tab_cnt = val;
    };
    MyMusicComponent.prototype.changeAudio = function (event) {
        var file = event.target.files[0];
        console.log('audio file', file);
        var allow_types = ['audio/mpeg', 'audio/x-aiff', 'audio/vnd.wav', "audio/mp3"];
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
        var thi = this;
        __WEBPACK_IMPORTED_MODULE_7_sweetalert2___default()({
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
                    thi.getAllTrack();
                    thi.toastr.success(response['message'], 'Success!');
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
        __WEBPACK_IMPORTED_MODULE_7_sweetalert2___default()({
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
        }, function (error) {
            _this.toastr.error(error['error'].message, 'Error!');
        });
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
            __WEBPACK_IMPORTED_MODULE_5__shared_message_service__["a" /* MessageService */]])
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
    MyMusicService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], MyMusicService);
    return MyMusicService;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard-layout/my_profile/myProfile.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"edit-profile-wrap\" *ngIf=\"userdata.type == 'artist'\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-3\">\n                <div class=\"profile-tabs\">\n                    <ul class=\"nav nav-tabs\" id=\"myTab\">\n                        <li class=\"nav-item\"><a class=\"nav-link {{tab_cnt == 1 ? 'active' : '' }}\" (click)=\"tabChange(1)\" data-toggle=\"tab\" href=\"javascript:;\">Profile</a></li>\n                        <li class=\"nav-item\"><a class=\"nav-link {{tab_cnt == 2 ? 'active' : '' }}\" data-toggle=\"tab\" (click)=\"tabChange(2)\" href=\"javascript:;\">Settings</a></li>\n                        <li class=\"nav-item\"><a class=\"nav-link {{tab_cnt == 3 ? 'active' : '' }}\" data-toggle=\"tab\" (click)=\"tabChange(3)\" href=\"javascript:;\">Payments</a></li>\n                        <li class=\"nav-item\"><a class=\"nav-link {{tab_cnt == 4 ? 'active' : '' }}\" data-toggle=\"tab\" (click)=\"tabChange(4)\" href=\"javascript:;\">Media</a></li>\n                        <li class=\"nav-item\"><a class=\"nav-link {{tab_cnt == 5 ? 'active' : '' }}\" data-toggle=\"tab\" (click)=\"tabChange(5)\" href=\"javascript:;\">Analytics</a></li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"col-lg-10 col-md-9 col-sm-9 col-xs-9\">\n                <div class=\"rofile-tab-content\">\n                    <div class=\"tab-content\">\n                        <div class=\"tab-pane fade {{tab_cnt == 1 ? 'show active' : '' }} \" id=\"profile\">\n                            <div class=\"edit-cover\">\n                                <form>\n                                    <div class=\"upload-cover\">\n                                        <img [src]=\"default_cover_img\" alt=\"Edit cover Image\">\n                                        <span class=\"up_text\">Update Photo</span>\n                                        <input type=\"file\" name=\"my_doc_upload\" id=\"cover_upload1\" multiple=\"false\" (change)=\"updateCoverImage($event)\">\n                                        <a data-fancybox data-animation-duration=\"700\" data-src=\"#delete\" href=\"javascript:;\" *ngIf=\"userdata.cover_image\" (click)=\"removeArtistCoverImage()\" class=\"delete\"><i class=\"fa fa-trash\"></i></a>\n                                    </div>\n                                    <div class=\"edit-details\">\n                                        <div class=\"edit-head\">Your Details</div>\n                                        <div class=\"row\">\n                                            <div class=\"col-md-3 col-sm-12 col-xs-12\">\n                                                <div class=\"edit-profile-picture\">\n                                                    <div class=\"upload-cover\">\n                                                        <img [src]=\"default_profile_img\" alt=\"Edit cover Image\">\n                                                        <span class=\"up_text\">Update Photo</span>\n                                                        <input type=\"file\" name=\"upload\" id=\"cover_upload\" (change)=\"updateProfileImage($event)\">\n                                                        <a data-fancybox data-animation-duration=\"700\" data-src=\"#delete\" *ngIf=\"userdata.image\" href=\"javascript:;\" class=\"delete\" (click)=\"removeArtistImage()\"><i class=\"fa fa-trash\"></i></a>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-9 col-sm-12 col-xs-12\">\n                                                <div class=\"form-details\">\n\n                                                    <div class=\"form-group\">\n                                                        <label for=\"fname\">First Name</label>\n                                                        <input type=\"text\" class=\"form-control\" id=\"fname5\" name=\"fname\" [(ngModel)]=\"userdata.first_name\" placeholder=\"First Name\">\n                                                    </div>\n\n                                                    <div class=\"form-group pwd-grp\">\n                                                        <label for=\"lanem\">Last Name</label>\n                                                        <input type=\"text\" class=\"form-control\" id=\"lname2\" name=\"lname\" [(ngModel)]=\"userdata.last_name\" placeholder=\"Last Name\">\n                                                    </div>\n\n                                                    <div class=\"form-group gender-grp\">\n                                                        <label for=\"geder\">Gender</label>\n                                                        <select class=\"form-control\" id=\"gender\" name=\"gender\" [(ngModel)]=\"userdata.gender\">\n                                                            <option value=\"male\">Male</option>\n                                                            <option value=\"female\">Female</option>\n                                                        </select>\n                                                    </div>\n                                                    <div class=\"form-group\">\n                                                        <div class=\"date-of-birth\">\n                                                            <label for=\"date\">Birthday Date</label>\n                                                            <div class=\"form-group\">\n                                                                <select class=\"form-control\" id=\"day\" name=\"day\" [(ngModel)]=\"userdata.day\">\n                                                                    <option value=\"\">Day</option>\n                                                                    <option *ngFor=\"let d of day\" value=\"{{d}}\">{{d}}</option>\n                                                                </select>\n                                                            </div>\n                                                            <div class=\"form-group\">\n                                                                <select class=\"form-control\" id=\"month\" name=\"month\" [(ngModel)]=\"userdata.month\">\n                                                                    <option value=\"\">Month</option>\n                                                                    <option *ngFor=\"let m of month\" value=\"{{m}}\">{{m}}</option>\n                                                                </select>\n                                                            </div>\n                                                            <div class=\"form-group\">\n                                                                <select class=\"form-control\" id=\"year\" name=\"year\" [(ngModel)]=\"userdata.year\">\n                                                                    <option value=\"\">Year</option>\n                                                                    <option *ngFor=\"let y of year\" value=\"{{y}}\">{{y}}</option>\n                                                                </select>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n\n                                                    <div class=\"form-group music-grp\">\n                                                        <label for=\"musictype\">Music Type</label>\n                                                        <select class=\"form-control\" id=\"musictype\" name=\"music_type\" [(ngModel)]=\"userdata.music_type['_id']\">\n                                                            <option *ngFor=\"let type of music_types\" value=\"{{type._id}}\">{{type.name}}</option>\n                                                        </select>\n                                                    </div>\n                                                    \n                                                    <div class=\"form-group home-grp\">\n                                                        <label for=\"hometown\">Home Town</label>\n                                                        <input class=\"form-control\" placeholder=\"zipcode\" name=\"zipcode\" [(ngModel)]=\"userdata.zipcode\" />\n                                                    </div>\n\n                                                    <div class=\"form-group home-grp\">\n                                                        <label for=\"hometown\">Phone Number</label>\n                                                        <input class=\"form-control\" placeholder=\"phone number\" name=\"phone\" [(ngModel)]=\"userdata.phone_no\" />\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"additional-details\">\n                                        <div class=\"edit-head\">Additional Details</div>\n                                        <div class=\"about-you\">\n                                            <label for=\"fname\">Describe Yourself</label>\n                                            <textarea class=\"form-control\" name=\"description\" [(ngModel)]=\"userdata.description\" placeholder=\"Add about yourself...\"></textarea>\n                                        </div>\n                                    </div>\n                                    <div class=\"social-details\">\n                                        <div class=\"edit-head\">Social Media</div>\n                                        <div class=\"social-acc\">\n                                            <div class=\"social-block\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"facebook\">Facebook</label>\n                                                    <input type=\"text\" class=\"form-control\" id=\"fb\" placeholder=\"Add Account\" name=\"fb\" [(ngModel)]=\"userdata.social_media['facebook']\">\n                                                    <img src=\"img/fb.png\" alt=\"Facebook\">\n                                                </div>\n                                            </div>\n                                            <div class=\"social-block\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"inst\">Instagram</label>\n                                                    <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"Add Account\" name=\"insta\" [(ngModel)]=\"userdata.social_media['instagram']\">\n                                                    <img src=\"img/inst.png\" alt=\"Facebook\">\n                                                </div>\n                                            </div>\n                                            <div class=\"social-block\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"facebook\">Twitter</label>\n                                                    <input type=\"text\" class=\"form-control\" id=\"fb1\" placeholder=\"Add Account\" name=\"twit\" [(ngModel)]=\"userdata.social_media['twitter']\">\n                                                    <img src=\"img/twitter.png\" alt=\"Facebook\">\n                                                </div>\n                                            </div>\n                                            <div class=\"social-block\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"inst\">Youtube</label>\n                                                    <input type=\"text\" class=\"form-control\" id=\"fname1\" placeholder=\"Add Account\" name=\"youtube\" [(ngModel)]=\"userdata.social_media['youtube']\">\n                                                    <img src=\"img/youtube.png\" alt=\"Facebook\">\n                                                </div>\n                                            </div>\n                                            <div class=\"social-block\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"inst\">Soundcloud</label>\n                                                    <input type=\"text\" class=\"form-control\" id=\"fname2\" placeholder=\"Add Account\" name=\"sound\" [(ngModel)]=\"userdata.social_media['sound_cloud']\">\n                                                    <img src=\"img/soundcloud.png\" alt=\"Facebook\">\n                                                </div>\n                                            </div>\n\n                                        </div>\n                                    </div>\n                                    <div class=\"button_group\">\n                                        <a href=\"#\" class=\"cancel-btn\">Cancel</a>\n                                        <button type=\"submit\" (click)=\"update()\" [disabled]=\"show_spinner\" class=\"save-btn btn btn-primary\">Save <i *ngIf=\"show_spinner\" class=\"fa fa-spinner fa-spin\"></i></button>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n\n                        <div class=\"tab-pane fade {{tab_cnt == 2 ? 'show active' : '' }}\" id=\"settings\">\n                            <div class=\"update-email\">\n                                <div class=\"email-form\">\n                                    <div class=\"edit-head\">Update Your Email</div>\n                                    <form (ngSubmit)=\"changeEmail()\">\n                                        <div class=\"form-group\">\n                                            <label for=\"yemail\">Your Email</label>\n                                            <input type=\"email\" name=\"old\" [(ngModel)]=\"change_email.old\" class=\"form-control\" id=\"yemail\" placeholder=\"Your Email\" required>\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <label for=\"nemail\">New Email</label>\n                                            <input type=\"email\" name=\"new\" [(ngModel)]=\"change_email.new\" class=\"form-control\" id=\"nemail\" placeholder=\"New Name\" required>\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <label for=\"remail\">Repeat New Email</label>\n                                            <input type=\"email\" name=\"repeat\" [(ngModel)]=\"change_email.repeat\" class=\"form-control\" id=\"remail\" placeholder=\"Repeat Email\" required>\n                                        </div>\n                                        <div class=\"button_group\">\n                                            <button type=\"submit\" [disabled]=\"show_spinner\" class=\"update-btn\">update <i *ngIf=\"show_spinner\" class=\"fa fa-spinner fa-spin\"></i></button>\n                                        </div>\n                                    </form>\n                                </div>\n                                <div class=\"password-form\">\n                                    <div class=\"edit-head\">Update Password</div>\n                                    <form (ngSubmit)=\"changePassword()\">\n                                        <div class=\"form-group\">\n                                            <label for=\"ypwd\">Your Password</label>\n                                            <input type=\"password\" class=\"form-control\" id=\"ypwd\" name=\"old\" [(ngModel)]=\"change_pwd.old\" placeholder=\"Your Email\">\n                                            <div class=\"pwd-icon\">\n                                                <i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n                                                <!-- <i class=\"fa fa-eye-slash\" aria-hidden=\"true\"></i> -->\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <label for=\"npwd\">New Password</label>\n                                            <input type=\"password\" class=\"form-control\" name=\"old\" [(ngModel)]=\"change_pwd.new\" id=\"npwd\" placeholder=\"New Name\">\n                                            <div class=\"pwd-icon\">\n                                                <i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n                                                <!-- <i class=\"fa fa-eye-slash\" aria-hidden=\"true\"></i> -->\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <label for=\"rpwd\">Repeat New Password</label>\n                                            <input type=\"password\" class=\"form-control\" id=\"rpwd\" name=\"old\" [(ngModel)]=\"change_pwd.repeat\" placeholder=\"Repeat Email\">\n                                            <div class=\"pwd-icon\">\n                                                <i class=\"fa fa-eye \" aria-hidden=\"true\"></i>\n                                                <!-- <i class=\"fa fa-eye-slash\" aria-hidden=\"true\"></i> -->\n                                            </div>\n                                        </div>\n                                        <div class=\"button_group\">\n                                            <button type=\"submit\" class=\"update-btn\">update</button>\n                                        </div>\n                                    </form>\n                                </div>\n                                <div class=\"notification\">\n                                    <div class=\"edit-head\">Notifications</div>\n                                    <div class=\"notify-by-email\">\n                                        <div class=\"edit-head\">Notifications by Email</div>\n                                        <ul>\n                                            <li class=\"followers\">\n                                                <p>New Followers</p>\n                                                <div class=\"f-toggle\">\n                                                    <label class=\"switch\">\n                                                        <input type=\"checkbox\" (click)=\"updateNotificationSetting('like_by_email', $event.target.checked)\" [checked]=\"userdata['notification_settings']['like_by_email']\">\n                                                        <span class=\"slider round\"></span>\n                                                    </label>\n                                                </div>\n                                            </li>\n                                            <li class=\"comments\">\n                                                <p>Comments</p>\n                                                <div class=\"f-toggle\">\n                                                    <label class=\"switch\">\n                                                        <input type=\"checkbox\" (click)=\"updateNotificationSetting('comment_by_email', $event.target.checked)\" [checked]=\"userdata['notification_settings']['comment_by_email']\">\n                                                        <span class=\"slider round\"></span>\n                                                    </label>\n                                                </div>\n                                            </li>\n                                            <li class=\"message\">\n                                                <p>Message</p>\n                                                <div class=\"f-toggle\">\n                                                    <label class=\"switch\">\n                                                        <input type=\"checkbox\" checked>\n                                                        <span class=\"slider round\"></span>\n                                                    </label>\n                                                </div>\n                                            </li>\n                                        </ul>\n                                    </div>\n                                    <div class=\"notify-by-sms\">\n                                        <div class=\"edit-head\">Notifications by SMS</div>\n                                        <ul>\n                                            <li class=\"followers\">\n                                                <p>New Followers</p>\n                                                <div class=\"f-toggle\">\n                                                    <label class=\"switch\">\n                                                        <input type=\"checkbox\" (click)=\"updateNotificationSetting('comment_by_sms', $event.target.checked)\" [checked]=\"userdata['notification_settings']['comment_by_sms']\">\n                                                        <span class=\"slider round\"></span>\n                                                    </label>\n                                                </div>\n                                            </li>\n                                            <li class=\"comments\">\n                                                <p>Comments</p>\n                                                <div class=\"f-toggle\">\n                                                    <label class=\"switch\">\n                                                        <input type=\"checkbox\" (click)=\"updateNotificationSetting('comment_by_sms', $event.target.checked)\" [checked]=\"userdata['notification_settings']['comment_by_sms']\">\n                                                        <span class=\"slider round\"></span>\n                                                    </label>\n                                                </div>\n                                            </li>\n                                            <li class=\"message\">\n                                                <p>Message</p>\n                                                <div class=\"f-toggle\">\n                                                    <label class=\"switch\">\n                                                        <input type=\"checkbox\" checked>\n                                                        <span class=\"slider round\"></span>\n                                                    </label>\n                                                </div>\n                                            </li>\n                                        </ul>\n                                    </div>\n                                    <div class=\"on-side-alert\">\n                                        <div class=\"edit-head\">On Side Alerts</div>\n                                        <ul>\n                                            <li class=\"followers\">\n                                                <p>New Followers</p>\n                                                <div class=\"f-toggle\">\n                                                    <label class=\"switch\">\n                                                        <input type=\"checkbox\" checked>\n                                                        <span class=\"slider round\"></span>\n                                                    </label>\n                                                </div>\n                                            </li>\n                                            <li class=\"comments\">\n                                                <p>Comments</p>\n                                                <div class=\"f-toggle\">\n                                                    <label class=\"switch\">\n                                                        <input type=\"checkbox\">\n                                                        <span class=\"slider round\"></span>\n                                                    </label>\n                                                </div>\n                                            </li>\n                                            <li class=\"message\">\n                                                <p>Message</p>\n                                                <div class=\"f-toggle\">\n                                                    <label class=\"switch\">\n                                                        <input type=\"checkbox\" checked>\n                                                        <span class=\"slider round\"></span>\n                                                    </label>\n                                                </div>\n                                            </li>\n                                        </ul>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"tab-pane fade {{tab_cnt == 3 ? 'show active' : '' }}\" id=\"payment\">\n\n                            <ul class=\"nav nav-tabs\">\n                                <li class=\"nav-item\"><a class=\"nav-link active\" data-toggle=\"tab\" href=\"#paymentmethod\">Payment Method</a></li>\n                                <li class=\"nav-item\"><a class=\"nav-link\" data-toggle=\"tab\" href=\"#proceeds\">Your Proceeds</a></li>\n                            </ul>\n                            <div class=\"tab-content\">\n                                <div id=\"paymentmethod\" class=\"tab-pane fade show active\">\n                                    <div class=\"pay-method\">\n                                        <div class=\"edit-head\">Your Payment Method</div>\n                                        <div class=\"select-payemnt-table\">\n                                            <table>\n                                                <tr>\n                                                    <td>\n                                                        <div class=\"radio\">\n                                                            <label>\n                                                                <input type=\"radio\" value=\"\" name=\"musicgenre\" checked>\n                                                                <div class=\"radio_check\"></div>\n                                                            </label>\n                                                        </div>\n                                                    </td>\n                                                    <td>\n                                                        <img src=\"img/visa.png\" alt=\"Visa Card\">\n                                                    </td>\n                                                    <td>\n                                                        <p class=\"pay-name\">Visa</p>\n                                                    </td>\n                                                    <td>\n                                                        <p class=\"card-num\">XXXXXXXXXXX0000</p>\n                                                    </td>\n                                                    <td>\n                                                        <p class=\"pay-name\">01/2020</p>\n                                                    </td>\n                                                    <td>\n                                                        <div class=\"pay-delete\">\n                                                            <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n                                                            <span>Delete</span>\n                                                        </div>\n                                                    </td>\n                                                </tr>\n\n                                                <tr>\n                                                    <td>\n                                                        <div class=\"radio\">\n                                                            <label>\n                                                                <input type=\"radio\" value=\"\" name=\"musicgenre\">\n                                                                <div class=\"radio_check\"></div>\n                                                            </label>\n                                                        </div>\n                                                    </td>\n                                                    <td>\n                                                        <img src=\"img/paypal.png\" alt=\"Visa Card\">\n                                                    </td>\n                                                    <td>\n                                                        <p class=\"pay-name\">Paypal</p>\n                                                    </td>\n                                                    <td>\n                                                        <p class=\"card-num\">shavnmiller@gmail.com</p>\n                                                    </td>\n                                                    <td>\n                                                    </td>\n                                                    <td>\n                                                        <div class=\"pay-delete\">\n                                                            <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n                                                            <span>Delete</span>\n                                                        </div>\n                                                    </td>\n                                                </tr>\n                                            </table>\n                                            <a data-fancybox data-animation-duration=\"700\" data-src=\"#addpayment\" href=\"javascript:;\" class=\"add-payment\">\n                                                <img src=\"img/icons8-plus_mathNormal.png\" alt=\"\"> Add Payment Method\n                                            </a>\n                                        </div>\n                                    </div>\n                                    <div class=\"billing-method\">\n                                        <div class=\"edit-head\">Billing Method</div>\n                                        <form>\n                                            <div class=\"form-group\">\n                                                <label for=\"fname\">First Name</label>\n                                                <input type=\"text\" class=\"form-control\" id=\"fname4\" placeholder=\"First Name\">\n                                            </div>\n                                            <div class=\"form-group\">\n                                                <label for=\"lname\">Last Name</label>\n                                                <input type=\"text\" class=\"form-control\" id=\"lname1\" placeholder=\"Last Name\">\n                                            </div>\n                                            <div class=\"form-group\">\n                                                <label for=\"area\">Area Code</label>\n                                                <input type=\"text\" class=\"form-control\" id=\"area\" placeholder=\"Area Code\">\n                                            </div>\n                                            <div class=\"form-group street\">\n                                                <label for=\"street\">Street</label>\n                                                <input type=\"text\" class=\"form-control\" id=\"street\" placeholder=\"Street Name\">\n                                            </div>\n                                            <div class=\"form-group appartment-suit\">\n                                                <label for=\"appt\">Apartment, Suite, Building</label>\n                                                <input type=\"text\" class=\"form-control\" id=\"appt\" placeholder=\"Apartment, Suite, Building\">\n                                            </div>\n                                            <div class=\"form-group\">\n                                                <label for=\"city\">City</label>\n                                                <input type=\"text\" class=\"form-control\" id=\"city\" placeholder=\"City\">\n                                            </div>\n                                            <div class=\"form-group\">\n                                                <label for=\"state\">State</label>\n                                                <input type=\"text\" class=\"form-control\" id=\"state\" placeholder=\"State\">\n                                            </div>\n                                            <div class=\"form-group\">\n                                                <label for=\"zip\">Zip</label>\n                                                <input type=\"text\" class=\"form-control\" id=\"zip\" placeholder=\"State\">\n                                            </div>\n                                            <div class=\"button_group\">\n                                                <a href=\"#\" class=\"cancel-btn\">Cancel</a>\n                                                <a href=\"#\" class=\"update-btn\">update</a>\n                                            </div>\n                                        </form>\n                                    </div>\n                                </div>\n                                <div id=\"proceeds\" class=\"tab-pane fade\">\n                                    <div class=\"pay-meth\">\n                                        <div class=\"edit-head\">Payout Method</div>\n                                        <table>\n                                            <tr>\n                                                <td><img src=\"img/visa.png\" alt=\"Visa Card\"></td>\n                                                <td>\n                                                    <p class=\"pay-name\">Visa</p>\n                                                </td>\n                                                <td>\n                                                    <p class=\"card-num\">XXXXXXXXXXX0000</p>\n                                                </td>\n                                                <td>\n                                                    <div class=\"button_group\">\n                                                        <a href=\"#\" class=\"update-btn\">update</a>\n                                                    </div>\n                                                </td>\n                                            </tr>\n                                        </table>\n                                    </div>\n                                    <div class=\"trans-history\">\n                                        <div class=\"edit-head\">Transaction History</div>\n                                        <div class=\"transaction-table mCustomScrollbar \" data-mcs-theme=\"dark-3\">\n                                            <table>\n                                                <thead>\n                                                    <tr>\n                                                        <td>N°</td>\n                                                        <td>Track</td>\n                                                        <td>Date</td>\n                                                        <td>Time</td>\n                                                        <td>Price</td>\n                                                        <td>Status</td>\n                                                    </tr>\n                                                </thead>\n                                                <tbody>\n                                                    <tr>\n                                                        <td>1.</td>\n                                                        <td>Say Thanks</td>\n                                                        <td>May 10,2018</td>\n                                                        <td>10:34:12</td>\n                                                        <td>$1.99</td>\n                                                        <td>Finised</td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>2.</td>\n                                                        <td>Blue State of Mind</td>\n                                                        <td>May 10,2018</td>\n                                                        <td>10:34:12</td>\n                                                        <td>$1.99</td>\n                                                        <td>Finised</td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>3.</td>\n                                                        <td>Blue State of Mind</td>\n                                                        <td>May 10,2018</td>\n                                                        <td>10:34:12</td>\n                                                        <td>$1.99</td>\n                                                        <td>Finised</td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>4.</td>\n                                                        <td>Blue State of Mind</td>\n                                                        <td>May 10,2018</td>\n                                                        <td>10:34:12</td>\n                                                        <td>$1.99</td>\n                                                        <td>Finised</td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>5.</td>\n                                                        <td>Say Thanks</td>\n                                                        <td>May 10,2018</td>\n                                                        <td>10:34:12</td>\n                                                        <td>$1.99</td>\n                                                        <td>Finised</td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>6.</td>\n                                                        <td>Say Thanks</td>\n                                                        <td>May 10,2018</td>\n                                                        <td>10:34:12</td>\n                                                        <td>$1.99</td>\n                                                        <td>Finised</td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>7.</td>\n                                                        <td>Blue State of Mind</td>\n                                                        <td>May 10,2018</td>\n                                                        <td>10:34:12</td>\n                                                        <td>$1.99</td>\n                                                        <td>Finised</td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>8.</td>\n                                                        <td>Blue State of Mind</td>\n                                                        <td>May 10,2018</td>\n                                                        <td>10:34:12</td>\n                                                        <td>$1.99</td>\n                                                        <td>Finised</td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>9.</td>\n                                                        <td>Blue State of Mind</td>\n                                                        <td>May 10,2018</td>\n                                                        <td>10:34:12</td>\n                                                        <td>$1.99</td>\n                                                        <td>Finised</td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>10.</td>\n                                                        <td>Say Thanks</td>\n                                                        <td>May 10,2018</td>\n                                                        <td>10:34:12</td>\n                                                        <td>$1.99</td>\n                                                        <td>Finised</td>\n                                                    </tr>\n                                                </tbody>\n                                            </table>\n                                        </div>\n                                        <div class=\"proceeds\">\n                                            <div class=\"edit-head\">$5,200.87 Proceeds</div>\n                                            <img src=\"img/proceeds.jpg\" alt=\"Proceeds Graph\">\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"tab-pane fade {{tab_cnt == 4 ? 'show active' : '' }}\" id=\"media\">\n                            <div class=\"media-wrapper\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-12\">\n                                        <div class=\"edit-head\">Your Media</div>\n                                    </div>\n                                    <div class=\"col-md-12\">\n                                        <a data-fancybox data-animation-duration=\"700\" data-src=\"#addmedia\" (click)=\"openAddMediaModal(content)\" href=\"javascript:;\" class=\"add-payment\"><img src=\"img/icons8-plus_mathNormal.png\" alt=\"\">Add Media</a>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"alert alert-info col-sm-12\" *ngIf=\"media_list.length == 0\">\n                                        No data available.\n                                    </div>\n                                    <div class=\"col-md-4 col-sm-6 col-xs-12 uploaded-img\" *ngFor=\"let obj of media_list; let i=index;\" >\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"obj.image\">\n                                        <!-- <a class=\"img-wrap\" href=\"{{artist_media_url+obj.image}}\" *ngIf=\"obj.image\" data-fancybox=\"images\" data-width=\"1500\" data-height=\"1000\"> -->\n                                            <img src=\"{{artist_media_url+obj.image}}\" alt=\"Media\" (click)=\"open(i)\">\n                                        <!-- </a> -->\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"obj.link\">\n\t\t\t\t\t\t\t\t\t\t\t<object width=\"420\" height=\"315\" data=\"obj.link\"></object>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<a data-fancybox data-animation-duration=\"700\" data-src=\"#delete\" (click)=\"removeMedia(obj._id)\" href=\"javascript:;\" class=\"delete\"><i class=\"fa fa-trash\"></i></a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"tab-pane fade {{tab_cnt == 5 ? 'show active' : '' }}\" id=\"analytics\">\n                            <div class=\"ana-header\">\n                                <div class=\"form-group days-grp\">\n                                    <select class=\"form-control\" id=\"days-select\" name=\"analytics_day\" (change)=\"changeAnalyticsDays()\" [(ngModel)]=\"analytics_days\">\n                                        <option value=\"7\">7 Days</option>\n                                        <option value=\"14\">14 Days</option>\n                                        <option value=\"30\">1 Month</option>\n                                    </select>\n\n                                </div>\n                                <ul class=\"ana-tabs nav nav-tabs\">\n                                    <li class=\"nav-item\"><a class=\"{{analytic_tab == 1 ? 'active' : ''}}\" (click)=\"changeAnlyticTab(1)\" data-toggle=\"tab\" href=\"javascript:;\">Overview</a></li>\n                                    <li class=\"nav-item\"><a class=\"{{analytic_tab == 2 ? 'active' : ''}}\" (click)=\"changeAnlyticTab(2)\" data-toggle=\"tab\" href=\"javascript:;\">Followers</a></li>\n                                    <li class=\"nav-item\"><a class=\"{{analytic_tab == 3 ? 'active' : ''}}\" (click)=\"changeAnlyticTab(3)\" data-toggle=\"tab\" href=\"javascript:;\">Tracks/Contents</a></li>\n                                    <li class=\"nav-item\"><a class=\"{{analytic_tab == 4 ? 'active' : ''}}\" (click)=\"changeAnlyticTab(4)\" data-toggle=\"tab\" href=\"javascript:;\">Downloads</a></li>\n                                </ul>\n                                <div class=\"time-frame\">\n                                    <h3>Last {{analytics_days}} Days: {{show_duration_date}}</h3>\n                                </div>\n                            </div>\n                            <div class=\"tab-content ana-content\">\n                                <div class=\"tab-pane fade {{analytic_tab == 1 ? 'active show' : ''}}\" id=\"overview\">\n                                    <div class=\"new-follow\">\n                                        <div class=\"edit-head\">New Followers</div>\n                                        <div class=\"progress-bar-chart\">\n                                            <!-- <span class=\"inner-text\"><p>45</p><span>New Followers</span></span> -->\n                                            <!--ul class=\"chart-skills\">\n\n                                                <li class=\"follow-women\">\n                                                    <span>Women</span>\n                                                </li>\n                                                <li class=\"follow-men\">\n                                                     <span>Men</span>\n                                                </li>\n                                                <li class=\"follow-other\">\n                                                     <span>other</span>\n                                                </li>\n                                            </ul-->\n                                            <div  [chart]=\"overview_gender_chart\"></div>\n                                        </div>\n                                        <div class=\"graph-states\">\n                                             <ul>\n                                                <li class=\"state-women\">\n                                                    <p>{{overview_female_per}}%</p>\n                                                    <span>Women</span>\n                                                </li>\n                                                <li class=\"state-men\">\n                                                    <p>{{overview_male_per}}%</p>\n                                                    <span>Men</span>\n                                                </li>\n                                                <!-- <li class=\"state-other\">\n                                                    <p>2%</p>\n                                                    <span>Other</span>\n                                                </li> -->\n                                            </ul> \n                                        </div>\n                                    </div>\n                                    <div class=\"artist-vote\">\n                                        <div class=\"edit-head\">{{overview_vote_count}} Votes</div>\n                                        <!-- <div class=\"vote-graph\">\n                                            <img src=\"img/vote-map.jpg\" alt=\"Vote Map\">\n                                        </div> -->\n                                        <div [chart]=\"overview_vote_chart\"></div>\n                                    </div>\n                                    <div class=\"artist-downloads\">\n                                        <div class=\"edit-head\">{{overview_download_total}} Downloads</div>\n                                        <div class=\"download-graph\">\n                                            <ul>\n                                                <li *ngFor=\"let track of overview_analytic_data['track']\">\n                                                    <span>{{track.name}}</span>\n                                                    <div class=\"d-num\">\n                                                        <p>{{track.no_of_downloads}}</p> <span>Downloads</span></div>\n                                                </li>\n                                            </ul>\n                                        </div>\n                                    </div>\n                                    <div class=\"location-downloads\">\n                                        <div class=\"edit-head\">Top Locations</div>\n                                        <div class=\"loc-icon-group\">\n                                            <img src=\"img/top-location-icon.png\" alt=\"top-location-icon.png\">\n                                            <img src=\"img/infographic-not-active.png\" alt=\"infographic-not-active.png\">\n                                        </div>\n                                        <div class=\"loc-graph\">\n                                            <img src=\"img/location-map.jpg\" alt=\"Location Graph\">\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"tab-pane fade {{analytic_tab == 2 ? 'active show' : ''}}\" id=\"followers\">\n                                    <div class=\"new-follow\">\n                                        <div class=\"edit-head\">New Followers</div>\n                                        <div class=\"progress-bar-chart\">\n                                            <!-- <span class=\"inner-text\"><p>45</p><span>New Followers</span></span> -->\n                                            \n                                            <div [chart]=\"follower_gender_chart\"></div>\n                                        </div>  \n                            \n                                        <div class=\"graph-states\">\n                                            <ul>\n                                                <li class=\"state-women\">\n                                                    <p>{{follower_male_per}}%</p>\n                                                    <span>Women</span>\n                                                </li>\n                                                <li class=\"state-men\">\n                                                    <p>{{follower_female_per}}%</p>\n                                                    <span>Men</span>\n                                                </li>\n                                                <!-- <li class=\"state-other\">\n                                                    <p>2%</p>\n                                                    <span>Other</span>\n                                                </li> -->\n                                            </ul>\n                                        </div>\n                                    </div>\n                                    <div class=\"artist-vote\">\n                                        <div class=\"edit-head\">{{follower_vote_count}} Votes</div>\n                                        <!-- <div class=\"vote-graph\">\n                                            <img src=\"img/vote-map.jpg\" alt=\"Vote Map\">\n                                        </div> -->\n                                        <div [chart]=\"follower_vote_chart\"></div>\n                                    </div>\n                                    <div class=\"breakdown-age\">\n                                        <div class=\"edit-head\">Age Breakdown</div>\n                                        <!-- <img src=\"img/age-breakdown.jpg\" alt=\"Age Break Down\"> -->\n                                        <div [chart]=\"follower_age_chart\"></div>\n                                    </div>\n                                    <div class=\"location-downloads\">\n                                        <div class=\"edit-head\">Top Locations</div>\n                                        <div class=\"loc-icon-group\">\n                                            <img src=\"img/top-location-icon.png\" alt=\"top-location-icon.png\">\n                                            <img src=\"img/infographic-not-active.png\" alt=\"infographic-not-active.png\">\n                                        </div>\n                                        <div class=\"loc-graph\">\n                                            <img src=\"img/location-map.jpg\" alt=\"Location Graph\">\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"tab-pane fade {{analytic_tab == 3 ? 'active show' : ''}}\" id=\"trackscontent\">\n                                    <div class=\"track-table mCustomScrollbar \" data-mcs-theme=\"dark-3\">\n                                        <table>\n                                            <tbody>\n                                                <tr *ngFor=\"let track of track_analytic['track']; let i=index;\">\n                                                    <td class=\"serial-num\">{{i+1}}.</td>\n                                                    <td class=\"track-pic\">\n                                                        <a href=\"javascript:;\"><img style=\"height: 50px;width:50px;\" src=\"{{track.image ? track_url+track.image : 'img/track-img.png' }}\" alt=\"Track Image\"></a>\n                                                    </td>\n                                                    <td class=\"track-det\" colspan=\"2\">\n                                                        <p class=\"track-name\">{{track.name}}</p>\n                                                        <p class=\"track-singer\">{{track['artist_id']['first_name']+' '+track['artist_id']['last_name']}}</p>\n                                                        <p class=\"track-year\">{{track['created_at'] | date : 'yyyy'}}</p>\n                                                    </td>\n                                                    <td class=\"track-download\">{{track['no_of_downloads']}} <span>Downloads</span></td>\n                                                    <td class=\"track-share\">{{track['no_of_shares']}} <span>Shares</span></td>\n                                                    <td class=\"track-likes\">{{track['no_of_likes']}} <span>Likes</span></td>\n                                                    <td class=\"track-comment\">{{track['no_of_comments']}}<span>Comments</span></td>\n                                                    <td class=\"td track-vote\">\n                                                        <img src=\"img/start.png\" alt=\"start\">\n                                                        <span>{{track['no_of_votes']}} <br> <span>Votes</span></span>\n                                                    </td>\n                                                </tr>\n                                            </tbody>\n                                        </table>\n                                    </div>\n                                    <div class=\"new-follow\">\n                                        <div class=\"edit-head\">New Followers</div>\n                                        <div class=\"progress-bar-chart\">\n                                            <span class=\"inner-text\"><p>{{track_vote_count}}</p><span>New Followers</span></span>\n                                            <div [chart]=\"track_gender_chart\"></div>\n                                        </div>\n                                        <div class=\"graph-states\">\n                                            <ul>\n                                                <li class=\"state-women\">\n                                                    <p>{{track_male_per}}%</p>\n                                                    <span>Women</span>\n                                                </li>\n                                                <li class=\"state-men\">\n                                                    <p>{{track_female_per}}%</p>\n                                                    <span>Men</span>\n                                                </li>\n                                            </ul>\n                                        </div>\n                                    </div>\n                                    <div class=\"artist-vote\">\n                                        <div class=\"edit-head\">{{track_vote_count}} Votes</div>\n                                        <div class=\"vote-graph\">\n                                            <div [chart]=\"track_vote_chart\"></div>\n                                        </div>\n                                    </div>\n                                    <div class=\"artist-downloads\">\n                                        <div class=\"edit-head\">Rank</div>\n                                        <div class=\"transaction-table mCustomScrollbar table-responsive \" data-mcs-theme=\"dark-3\">\n                                            <table>\n                                                <thead>\n                                                    <tr>\n                                                        <td>Contest</td>\n                                                        <td>Rank</td>\n                                                        <td>Number of votes</td>\n                                                    </tr>\n                                                </thead>\n                                                <tbody>\n                                                    <tr>\n                                                        <td>Regionals</td>\n                                                        <td>3</td>\n                                                        <td class=\"td track-vote\">\n                                                            <img src=\"img/start.png\" alt=\"start\">\n                                                            <span>1300 <span>Votes</span></span>\n                                                        </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>Round 3</td>\n                                                        <td>5</td>\n                                                        <td class=\"td track-vote\">\n                                                            <img src=\"img/start.png\" alt=\"start\">\n                                                            <span>680 <span>Votes</span></span>\n                                                        </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>Round 1</td>\n                                                        <td>12</td>\n                                                        <td class=\"td track-vote\">\n                                                            <img src=\"img/start.png\" alt=\"start\">\n                                                            <span>450 <span>Votes</span></span>\n                                                        </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>Regionals</td>\n                                                        <td>3</td>\n                                                        <td class=\"td track-vote\">\n                                                            <img src=\"img/start.png\" alt=\"start\">\n                                                            <span>1300 <span>Votes</span></span>\n                                                        </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>Round 3</td>\n                                                        <td>5</td>\n                                                        <td class=\"td track-vote\">\n                                                            <img src=\"img/start.png\" alt=\"start\">\n                                                            <span>680 <span>Votes</span></span>\n                                                        </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>Round 1</td>\n                                                        <td>12</td>\n                                                        <td class=\"td track-vote\">\n                                                            <img src=\"img/start.png\" alt=\"start\">\n                                                            <span>450 <span>Votes</span></span>\n                                                        </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>Regionals</td>\n                                                        <td>3</td>\n                                                        <td class=\"td track-vote\">\n                                                            <img src=\"img/start.png\" alt=\"start\">\n                                                            <span>1300 <span>Votes</span></span>\n                                                        </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>Round 3</td>\n                                                        <td>5</td>\n                                                        <td class=\"td track-vote\">\n                                                            <img src=\"img/start.png\" alt=\"start\">\n                                                            <span>680 <span>Votes</span></span>\n                                                        </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>Round 1</td>\n                                                        <td>12</td>\n                                                        <td class=\"td track-vote\">\n                                                            <img src=\"img/start.png\" alt=\"start\">\n                                                            <span>450 <span>Votes</span></span>\n                                                        </td>\n                                                    </tr>\n\n                                                </tbody>\n                                            </table>\n                                        </div>\n                                    </div>\n                                    <div class=\"location-downloads\">\n                                        <div class=\"edit-head\">Top Locations</div>\n                                        <div class=\"loc-icon-group\">\n                                            <img src=\"img/top-location-icon.png\" alt=\"top-location-icon.png\">\n                                            <img src=\"img/infographic-not-active.png\" alt=\"infographic-not-active.png\">\n                                        </div>\n                                        <div class=\"loc-graph\">\n                                            <img src=\"img/location-map.jpg\" alt=\"Location Graph\">\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"tab-pane fade {{analytic_tab == 4 ? 'active show' : ''}}\" id=\"download\">\n                                    <div class=\"track-table mCustomScrollbar \" data-mcs-theme=\"dark-3\">\n                                        <table>\n                                            <tbody>\n                                                <tr *ngFor=\"let download of download_analytic_data['track']; let i=index;\">\n                                                    <td class=\"serial-num\">{{i+1}}.</td>\n                                                    <td class=\"track-pic\">\n                                                        <a href=\"javascript:;\"><img style=\"height: 50px;width:50px;\" src=\"{{download.image ? track_url+download.image : 'img/track-img.png'}}\" alt=\"Track Image\"></a>\n                                                    </td>\n                                                    <td class=\"track-det\" colspan=\"2\">\n                                                        <p class=\"track-name\">{{download.name}}</p>\n                                                        <p class=\"track-singer\">{{download['artist_id']['name']}}</p>\n                                                        <p class=\"track-year\">{{download.created_at | date : 'yyyy'}}</p>\n                                                    </td>\n                                                    <td class=\"track-date\">{{download.created_at | date : 'MMMM dd, yyyy'}}</td>\n                                                    <td class=\"track-download\">{{download.no_of_downloads}} <span>Downloads</span></td>\n\n                                                    <td class=\"track-share\">{{download.no_of_shares}} <span>Shares</span></td>\n                                                </tr>\n                                            </tbody>\n                                        </table>\n                                    </div>\n                                    <div class=\"artist-downloads\">\n                                        <div class=\"edit-head\">{{download_analytic_count}} Downloads</div>\n                                        <div class=\"vote-graph\">\n                                            <!-- img src=\"img/d-download.jpg\" alt=\"Downloads Map\"> -->\n                                            <div [chart]=\"download_chart\"></div>\n                                        </div>\n                                    </div>\n                                    <div class=\"artist-proceeds\">\n                                        <div class=\"edit-head\">$2600 Proceeds</div>\n                                        <div class=\"vote-graph\">\n                                            <img src=\"img/d-download.jpg\" alt=\"Downloads Map\">\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\t\t</div>\n\t</div>\n</section>\n<section class=\"edit-profile-wrap\" *ngIf=\"userdata.type == 'user'\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-2 col-sm-3 col-xs-3\">\n                <div class=\"profile-tabs\">\n                    <ul class=\"nav nav-tabs\" id=\"myTab\">\n                        <li class=\"nav-item\"><a class=\"nav-link {{tab_cnt == 1 ? 'active' : '' }}\" (click)=\"tabChange(1)\" data-toggle=\"tab\" href=\"javascript:;\">Profile</a></li>\n                        <li class=\"nav-item\"><a class=\"nav-link {{tab_cnt == 2 ? 'active' : '' }}\" data-toggle=\"tab\" (click)=\"tabChange(2)\" href=\"javascript:;\">Settings</a></li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"col-md-10 col-sm-9 col-xs-9\">\n                <div class=\"rofile-tab-content\">\n                    <div class=\"tab-content\">\n                        <div class=\"tab-pane fade {{tab_cnt == 1 ? 'show active' : '' }} \" id=\"profile\">\n                            <div class=\"edit-cover\">\n                                <form>\n                                    <div class=\"edit-details\">\n                                        <div class=\"edit-head\">Your Details</div>\n                                        <div class=\"row\">\n                                            <div class=\"col-md-3 col-sm-12 col-xs-12\">\n                                                <div class=\"edit-profile-picture\">\n                                                    <div class=\"upload-cover\">\n                                                        <img src=\"{{default_profile_img}}\" alt=\"Edit cover Image\">\n                                                        <span class=\"up_text\">Update Photo</span>\n                                                        <input type=\"file\" name=\"upload\" id=\"cover_upload\" (change)=\"updateProfileImage($event)\">\n                                                        <a data-fancybox data-animation-duration=\"700\" data-src=\"#delete\" *ngIf=\"userdata.image\" (click)=\"removeUserImage()\" href=\"javascript:;\" class=\"delete\"><i class=\"fa fa-trash\"></i></a>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-9 col-sm-12 col-xs-12\">\n                                                <div class=\"form-details\">\n\n                                                    <div class=\"form-group\">\n                                                        <label for=\"fname\">First Name</label>\n                                                        <input type=\"text\" class=\"form-control\" id=\"fname5\" name=\"fname\" [(ngModel)]=\"userdata.first_name\" placeholder=\"First Name\">\n                                                    </div>\n\n                                                    <div class=\"form-group pwd-grp\">\n                                                        <label for=\"lanem\">Last Name</label>\n                                                        <input type=\"text\" class=\"form-control\" id=\"lname2\" name=\"lname\" [(ngModel)]=\"userdata.last_name\" placeholder=\"Last Name\">\n                                                    </div>\n\n                                                    <div class=\"form-group gender-grp\">\n                                                        <label for=\"geder\">Gender</label>\n                                                        <select class=\"form-control\" id=\"gender\" name=\"gender\" [(ngModel)]=\"userdata.gender\">\n                                                            <option value=\"male\">Male</option>\n                                                            <option value=\"female\">Female</option>\n                                                        </select>\n                                                    </div>\n                                                    <div class=\"form-group\">\n                                                        <div class=\"date-of-birth\">\n                                                            <label for=\"date\">Birthday</label>\n                                                            <div class=\"form-group\">\n                                                                <select class=\"form-control\" id=\"day\" name=\"day\" [(ngModel)]=\"userdata.day\">\n                                                                    <option value=\"\">Day</option>\n                                                                    <option *ngFor=\"let d of day\" value=\"{{d}}\">{{d}}</option>\n                                                                </select>\n                                                            </div>\n                                                            <div class=\"form-group\">\n                                                                <select class=\"form-control\" id=\"month\" name=\"month\" [(ngModel)]=\"userdata.month\">\n                                                                    <option value=\"\">Month</option>\n                                                                    <option *ngFor=\"let m of month\" value=\"{{m}}\">{{m}}</option>\n                                                                </select>\n                                                            </div>\n                                                            <div class=\"form-group\">\n                                                                <select class=\"form-control\" id=\"year\" name=\"year\" [(ngModel)]=\"userdata.year\">\n                                                                    <option value=\"\">Year</option>\n                                                                    <option *ngFor=\"let y of year\" value=\"{{y}}\">{{y}}</option>\n                                                                </select>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n\n                                                    <div class=\"form-group music-grp\">\n                                                        <label for=\"musictype\">Music Type</label>\n                                                        <select class=\"form-control\" id=\"musictype\" multiple name=\"music_type\" [(ngModel)]=\"userdata.music_type\">\n                                                            <option *ngFor=\"let type of music_types\" value=\"{{type._id}}\">{{type.name}}</option>\n                                                        </select>\n                                                    </div>\n                                                    <div class=\"form-group home-grp\">\n                                                        <label for=\"hometown\">Zipcode</label>\n                                                        <input class=\"form-control\" placeholder=\"zipcode\" name=\"zipcode\" [(ngModel)]=\"userdata.zipcode\" />\n                                                    </div>\n                                                    <div class=\"form-group home-grp\">\n                                                        <label for=\"hometown\">Phone Number</label>\n                                                        <input class=\"form-control\" placeholder=\"phone number\" name=\"phone\" [(ngModel)]=\"userdata.phone_no\" />\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"button_group\">\n                                        <button type=\"submit\" (click)=\"update()\" [disabled]=\"show_spinner\" class=\"save-btn btn btn-primary\">Save <i *ngIf=\"show_spinner\" class=\"fa fa-spinner fa-spin\"></i></button>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                        <div class=\"tab-pane fade {{tab_cnt == 2 ? 'show active' : '' }}\" id=\"settings\">\n\t\t\t\t\t\t\t\t<div class=\"update-email\">\n\t\t\t\t\t\t\t\t\t<div class=\"email-form\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"edit-head\">Update Your Email</div>\n\t\t\t\t\t\t\t\t\t\t<form (ngSubmit)=\"changeEmail()\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"yemail\">Your Email</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"email\" name=\"old\" [(ngModel)]=\"change_email.old\" class=\"form-control\" id=\"yemail\" placeholder=\"Your Email\" required>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"nemail\">New Email</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"email\" name=\"new\" [(ngModel)]=\"change_email.new\" class=\"form-control\" id=\"nemail\" placeholder=\"New Name\" required>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"remail\">Repeat New Email</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"email\" name=\"repeat\" [(ngModel)]=\"change_email.repeat\" class=\"form-control\" id=\"remail\" placeholder=\"Repeat Email\" required>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"button_group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" [disabled]=\"show_spinner\" class=\"update-btn\">update <i *ngIf=\"show_spinner\" class=\"fa fa-spinner fa-spin\"></i></button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"password-form\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"edit-head\">Update Password</div>\n\t\t\t\t\t\t\t\t\t\t<form (ngSubmit)=\"changePassword()\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"ypwd\">Your Password</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" id=\"ypwd\" name=\"old\" [(ngModel)]=\"change_pwd.old\" placeholder=\"Your Email\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pwd-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <i class=\"fa fa-eye-slash\" aria-hidden=\"true\"></i> -->\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"npwd\">New Password</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" name=\"old\" [(ngModel)]=\"change_pwd.new\" id=\"npwd\" placeholder=\"New Name\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pwd-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <i class=\"fa fa-eye-slash\" aria-hidden=\"true\"></i> -->\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"rpwd\">Repeat New Password</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" id=\"rpwd\" name=\"old\" [(ngModel)]=\"change_pwd.repeat\" placeholder=\"Repeat Email\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pwd-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-eye \" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <i class=\"fa fa-eye-slash\" aria-hidden=\"true\"></i> -->\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"button_group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"update-btn\">update</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"notification\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"edit-head\">Notifications</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"notify-by-email\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"edit-head\">Notifications by Email</div>\n\t\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"followers\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>New Followers</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"f-toggle\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"switch\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" checked>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"slider round\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"comments\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Comments</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"f-toggle\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"switch\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"slider round\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"message\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Message</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"f-toggle\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"switch\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" checked>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"slider round\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"notify-by-sms\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"edit-head\">Notifications by SMS</div>\n\t\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"followers\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>New Followers</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"f-toggle\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"switch\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" checked>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"slider round\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"comments\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Comments</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"f-toggle\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"switch\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"slider round\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"message\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Message</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"f-toggle\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"switch\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" checked>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"slider round\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"on-side-alert\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"edit-head\">On Side Alerts</div>\n\t\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"followers\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>New Followers</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"f-toggle\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"switch\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" checked>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"slider round\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"comments\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Comments</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"f-toggle\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"switch\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"slider round\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"message\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Message</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"f-toggle\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"switch\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" checked>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"slider round\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n\t<div class=\"modal-body\">\n\t\t<div class=\"media-modal\">\n\t\t\t<h3>Add Media</h3>\n\t\t\t<p>Upload Photo</p>\n\t\t\t<div class=\"media-upload-btn\" *ngIf=\"!show_progress\"> \n\t\t\t\t<span class=\"upl-img\"><i class=\"fa fa-cloud-upload\" aria-hidden=\"true\"></i></span> \n\t\t\t\t<span class=\"up_text\">Upload Photo</span> \n\t\t\t\t<input type=\"file\" name=\"my_doc_upload\" id=\"my_doc_upload\" (change)=\"uploadImage($event)\" multiple=\"false\"> \n\t\t\t\t<p class=\"instrution\">320x320px .png, .jpg 5MB or less</p>\n\t\t\t</div>\n\t\t\t<div class=\"media_progress_bar\" *ngIf=\"show_progress\">\n\t\t\t\t<div class=\"det\">\n\t\t\t\t\t<div class=\"upl-file-name\">IMG20185.JPG</div>\n\t\t\t\t\t<div class=\"upl-time-rem\">5 sec remaining</div>\n\t\t\t\t\t<div class=\"close-btn\"><img src=\"img/closeNormal.png\" alt=\"Close-btn\"></div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"progress\">\n\t\t\t\t\t<div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:{{progress_cnt}}%\">\n\t\t\t\t\t\t<span class=\"sr-only\">70% Complete</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<p class=\"or\">Or Add Video Link</p>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"vlink\">Video Link</label>\n\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"vlink\" placeholder=\"Video Link\" name=\"video_link\" [(ngModel)]=\"video_url\">\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"button_group\">\n\t\t\t<button  class=\"add-btn\" (click)=\"addLink()\">Add Media</button>\n\t\t</div>\n\t</div>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/dashboard-layout/my_profile/myProfile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__myProfile_service__ = __webpack_require__("../../../../../src/app/dashboard-layout/my_profile/myProfile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_lightbox__ = __webpack_require__("../../../../angular2-lightbox/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_lightbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_lightbox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular_highcharts__ = __webpack_require__("../../../../angular-highcharts/angular-highcharts.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_message_service__ = __webpack_require__("../../../../../src/app/shared/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_sweetalert2__);
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
    function MyProfileComponent(MyProfileService, toastr, router, modalService, lightbox, MessageService) {
        var _this = this;
        this.MyProfileService = MyProfileService;
        this.toastr = toastr;
        this.router = router;
        this.modalService = modalService;
        this.lightbox = lightbox;
        this.MessageService = MessageService;
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
        this.artist_media_url = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].ARTIST_MEDIA;
        this.track_url = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].ARTIST_TRACK;
        this.video_url = '';
        this.analytic_tab = 1;
        this.analytics_days = 7;
        this.follower_analytic_data = {};
        this.overview_analytic_data = {};
        this.download_analytic_data = {};
        this.chart = '';
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
                this.default_profile_img = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].ARTIST_IMG + this.userdata.image;
            }
            if (this.userdata.cover_image) {
                this.default_cover_img = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].ARTIST_IMG + this.userdata.cover_image;
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
            if (this.userdata.dob) {
                var dt = new Date(this.userdata.dob);
                this.userdata['day'] = dt.getDate();
                this.userdata['month'] = dt.getMonth();
                this.userdata['year'] = dt.getFullYear();
            }
            if (this.userdata.image) {
                this.default_profile_img = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].USER_IMG + this.userdata.image;
            }
            var tmp_1 = [];
            this.userdata['music_type'].forEach(function (ele) {
                if (ele)
                    tmp_1.push(ele);
            });
            this.userdata['music_type'] = tmp_1;
        }
        this.MyProfileService.getAllMusicType().subscribe(function (response) {
            _this.music_types = response['music'];
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
    MyProfileComponent.prototype.changeAnlyticTab = function (cnt) {
        this.analytic_tab = cnt;
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
    MyProfileComponent.prototype.update = function () {
        var _this = this;
        if (this.userdata.type == 'artist') {
            this.userdata['dob'] = new Date(this.userdata['year'], this.userdata['month'], this.userdata['day']);
            this.userdata['share_url'] = this.userdata['social_media'];
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
                    _this.default_profile_img = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].ARTIST_IMG + response['image'];
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
                    _this.default_profile_img = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].USER_IMG + response['image'];
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
                    _this.default_profile_img = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].ARTIST_IMG + _this.userdata.image;
                }
                if (_this.userdata.cover_image) {
                    _this.default_cover_img = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].ARTIST_IMG + _this.userdata.cover_image;
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
                if (_this.userdata.dob) {
                    var dt = new Date(_this.userdata.dob);
                    _this.userdata['day'] = dt.getDate();
                    _this.userdata['month'] = dt.getMonth();
                    _this.userdata['year'] = dt.getFullYear();
                }
                if (_this.userdata.image) {
                    _this.default_profile_img = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].USER_IMG + _this.userdata.image;
                }
                var tmp = [];
                _this.userdata['music_type'].forEach(function (ele) {
                    if (ele)
                        tmp.push(ele);
                });
                _this.userdata['music_type'] = tmp;
                localStorage.setItem('user', JSON.stringify(data));
            });
        }
    };
    MyProfileComponent.prototype.removeArtistImage = function () {
        var thi = this;
        __WEBPACK_IMPORTED_MODULE_10_sweetalert2___default()({
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
        __WEBPACK_IMPORTED_MODULE_10_sweetalert2___default()({
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
        __WEBPACK_IMPORTED_MODULE_10_sweetalert2___default()({
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
            if (event.type === __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpEventType */].UploadProgress) {
                // This is an upload progress event. Compute and show the % done:
                var percentDone = Math.round(100 * event.loaded / event.total);
                _this.progress_cnt = percentDone;
                console.log("File is " + percentDone + "% uploaded.");
            }
            else if (event instanceof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["f" /* HttpResponse */]) {
                console.log('File is completely uploaded!', event['body']);
                _this.getMediaList();
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
                if (event instanceof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["f" /* HttpResponse */]) {
                    _this.video_url = '';
                    _this.toastr.success(event['body']['message'], 'Success!');
                    _this.getMediaList();
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
        __WEBPACK_IMPORTED_MODULE_10_sweetalert2___default()({
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
        });
    };
    // Get all track and contest details
    MyProfileComponent.prototype.getAllTrackAnalytic = function (data) {
        var _this = this;
        this.MyProfileService.getAllTrackContestData(data).subscribe(function (response) {
            _this.track_analytic = response;
            _this.trackGenderChart(response['gender']);
            _this.trackVoteChart(response['day']);
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
        this.follower_age_chart = new __WEBPACK_IMPORTED_MODULE_8_angular_highcharts__["a" /* Chart */]({
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
        this.follower_gender_chart = new __WEBPACK_IMPORTED_MODULE_8_angular_highcharts__["a" /* Chart */]({
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
    // Followers vote chart
    MyProfileComponent.prototype.followerVoteChart = function (data) {
        var _this = this;
        var result = [0, 0, 0, 0, 0, 0, 0];
        this.follower_vote_count = 0;
        data.forEach(function (ele) {
            result[ele['_id']['days']] = ele.count;
            _this.follower_vote_count += ele.count;
        });
        this.follower_vote_chart = new __WEBPACK_IMPORTED_MODULE_8_angular_highcharts__["a" /* Chart */]({
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
    // Overview vote chart
    MyProfileComponent.prototype.overviewVoteChart = function (data) {
        var _this = this;
        var result = [0, 0, 0, 0, 0, 0, 0];
        this.overview_vote_count = 0;
        data.forEach(function (ele) {
            result[ele['day']] = ele.count;
            _this.overview_vote_count += ele.count;
        });
        this.overview_vote_chart = new __WEBPACK_IMPORTED_MODULE_8_angular_highcharts__["a" /* Chart */]({
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
        this.overview_gender_chart = new __WEBPACK_IMPORTED_MODULE_8_angular_highcharts__["a" /* Chart */]({
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
        this.track_vote_chart = new __WEBPACK_IMPORTED_MODULE_8_angular_highcharts__["a" /* Chart */]({
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
        this.track_gender_chart = new __WEBPACK_IMPORTED_MODULE_8_angular_highcharts__["a" /* Chart */]({
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
        this.download_chart = new __WEBPACK_IMPORTED_MODULE_8_angular_highcharts__["a" /* Chart */]({
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
    MyProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-myProfile',
            template: __webpack_require__("../../../../../src/app/dashboard-layout/my_profile/myProfile.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__myProfile_service__["a" /* MyProfileService */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_7_angular2_lightbox__["Lightbox"],
            __WEBPACK_IMPORTED_MODULE_9__shared_message_service__["a" /* MessageService */]])
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

module.exports = "<section class=\"whats-new-wrap\">\n  <div>\n    <div>\n      <div class=\"news_header_container\">\n        <div class=\"news-header\">\n          <div class=\"row\">\n            <div class=\"col-lg-6 col-md-5 col-sm-6 col-xs-5\">\n              <div class=\"head-global\"><h2>What's New</h2></div>\n            </div>\n            <div class=\"col-lg-6 col-md-7 col-sm-6 col-xs-7\">\n              <div class=\"new-head\">\n                <div class=\"search-wrap\">\n                  <form>\n                    <div class=\"mobile-search\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></div>\n                    <div class=\"search-input\">\n                      <input type=\"text\" placeholder=\"Search by Artist Name or Song Title\" name=\"search\" [(ngModel)]=\"search_str\" (keyup)=\"filter($event)\">\n                    </div>\n                  </form>\n                </div>\n                <div class=\"filter-head\" (click)=\"toggleFilter()\">\n                  <a href=\"javascript:;\">\n                    <div class=\"filter-icon\"><img src=\"img/filter.png\" alt=\"Filter Icon\"></div>\n                    <span>Filters <i class=\"fa fa-caret-right\"></i></span>\n                  </a>\n                  \n                </div>\n              </div>\n            </div>\n            <div class=\"filter-drop-down\" [style.display]=\"show_filter ? 'block' : 'none'\">\n              <div class=\"container\">\n                <div class=\"row\">\n                  <div class=\"col-md-2 col-sm-6 col-xs-6\">\n                    <div class=\"music-genre\">\n                      <div class=\"filter-heading\">Music Genre</div>\n                      <ul>\n                        <li>\n                          <div class=\"radio\">\n                              <label>\n                                <input type=\"radio\" value=\"\" name=\"musicgenre\">All styles\n                                <div class=\"radio_check\"></div>\n                              </label>\n                          </div>\n                        </li>\n                        <li *ngFor=\"let m of music_type_list\">\n                          <div class=\"radio\">\n                              <label>\n                                <input type=\"radio\" value=\"{{m._id}}\" name=\"musicgenre\" [(ngModel)]=\"advance_filter.music_type\">{{m.name}}\n                                <div class=\"radio_check\"></div>\n                              </label>\n                          </div>\n                        </li>\n                      </ul>\n                    </div>\n                  </div>\n                  <div class=\"col-md-8 col-sm-12 col-xs-12\">\n                    <div class=\"sub-menu-filter\">\n                    <div class=\"filter-heading\">Region</div>\n                    <div class=\"row\">\n                      <div class=\"col-lg-2 col-md-4 col-sm-4 col-xs-4\">\n                        <div class=\"filter-subhead\">Northeast</div>\n                        <ul>\n                          <li *ngFor=\"let s of state_list;\" [style.display]=\"s['region']['name'] == 'northeast' ? 'block' : 'none'\">\n                            <div class=\"checkbox\">\n                                <label>\n                                  <input type=\"checkbox\" [value]=\"s._id\" (click)=\"addRegionForFilter($event.target.checked, $event.target.value)\">\n                                  <div class=\"chk_check\"></div>\n                                  <span>{{s.name}}</span>\n                                </label>\n                            </div>\n                          </li>\n                        </ul>\n                      </div>\n                      <div class=\"col-lg-2 col-md-4 col-sm-4 col-xs-4\">\n                        <div class=\"filter-subhead\">southeast</div>\n                        <ul>\n                          <li *ngFor=\"let s of state_list;\" [style.display]=\"s['region']['name'] == 'southeast' ? 'block' : 'none'\">\n                            <div class=\"checkbox\">\n                                <label>\n                                  <input type=\"checkbox\" [value]=\"s._id\" (click)=\"addRegionForFilter($event.target.checked, $event.target.value)\">\n                                  <div class=\"chk_check\"></div>\n                                  <span>{{s.name}}</span>\n                                </label>\n                            </div>\n                          </li>\n                        </ul>\n                      </div>\n                      <div class=\"col-lg-2 col-md-4 col-sm-4 col-xs-4\">\n                        <div class=\"filter-subhead\">Midwest</div>\n                        <ul>\n                          <li *ngFor=\"let s of state_list;\" [style.display]=\"s['region']['name'] == 'midwest' ? 'block' : 'none'\">\n                            <div class=\"checkbox\">\n                                <label>\n                                  <input type=\"checkbox\" [value]=\"s._id\" (click)=\"addRegionForFilter($event.target.checked, $event.target.value)\">\n                                  <div class=\"chk_check\"></div>\n                                  <span>{{s.name}}</span>\n                                </label>\n                            </div>\n                          </li>\n                        </ul>\n                      </div>\n                      <div class=\"col-lg-2 col-md-4 col-sm-4 col-xs-4\">\n                        <div class=\"filter-subhead\">Southwest</div>\n                        <ul>\n                          <li *ngFor=\"let s of state_list;\" [style.display]=\"s['region']['name'] == 'southwest' ? 'block' : 'none'\">\n                            <div class=\"checkbox\">\n                                <label>\n                                  <input type=\"checkbox\" [value]=\"s._id\" (click)=\"addRegionForFilter($event.target.checked, $event.target.value)\">\n                                  <div class=\"chk_check\"></div>\n                                  <span>{{s.name}}</span>\n                                </label>\n                            </div>\n                          </li>\n                        </ul>\n                      </div>\n                      <div class=\"col-lg-2 col-md-4 col-sm-4 col-xs-4\">\n                        <div class=\"filter-subhead\">West</div>\n                        <ul>\n                          <li *ngFor=\"let s of state_list;\" [style.display]=\"s['region']['name'] == 'west' ? 'block' : 'none'\">\n                            <div class=\"checkbox\">\n                                <label>\n                                  <input type=\"checkbox\" [value]=\"s._id\" (click)=\"addRegionForFilter($event.target.checked, $event.target.value)\">\n                                  <div class=\"chk_check\"></div>\n                                  <span>{{s.name}}</span>\n                                </label>\n                            </div>\n                          </li>\n                        </ul>\n                      </div>\n                      <div class=\"col-lg-2 col-md-4 col-sm-4 col-xs-4\">\n                        <div class=\"filter-subhead\">other</div>\n                        <ul>\n                          <li *ngFor=\"let s of state_list;\" [style.display]=\"s['region']['name'] == 'other' ? 'block' : 'none'\">\n                            <div class=\"checkbox\">\n                                <label>\n                                  <input type=\"checkbox\" [value]=\"s._id\" (click)=\"addRegionForFilter($event.target.checked, $event.target.value)\">\n                                  <div class=\"chk_check\"></div>\n                                  <span>{{s.name}}</span>\n                                </label>\n                            </div>\n                          </li>\n                        </ul>\n                      </div>\n                    </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                    <div class=\"button_group\">\n                      <a href=\"javascript:;\" class=\"cancel-btn\" (click)=\"toggleFilter()\">Cancel</a>\n                      <a href=\"javascript:;\" class=\"apply-btn\" (click)=\"advanceFilter()\">Apply</a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div>\n        <div class=\"whatsnew-banner\">\n            <app-carousel-scroll [images]=\"images\" [showFavourit]='true' [carouselType]='\"banner\"'></app-carousel-scroll>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section class=\"artist-highlight\">\n  <div class=\"container\">\n    <div>\n      <div>\n        <div class=\"head-global\">\n          <h2>Artist Highlights</h2>\n        </div>\n      </div>\n      <div class=\"highlights-wrap mCustomScrollbar \"  data-mcs-theme=\"dark-3\" >\n        <div class=\"row\">\n          <div class=\"alert alert-info col-sm-12\" *ngIf=\"whatsnewdata['artist'].length == 0\">\n            No data available.\n          </div>\n          <div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-6 \" *ngFor=\"let artist of whatsnewdata['artist']; let i = index;\">\n            <div class=\"final-wrap \">\n              <div class=\"img-wrap \">\n                <a href=\"javascript:;\" routerLink=\"/artist_profile/{{artist._id}}\">\n                  <img src=\"{{artist && artist.image ? artist_img_url+artist.image : 'img/highlight-player.png'}} \" alt=\"Finalists \">\n                </a>\n                <a href=\"javascript:void(0) \" class=\"fan \" (click)=\"followArtist(artist._id, i)\"><i class=\"fa {{artist.is_followed ? 'fa-heart' : 'fa-heart-o'}}\" aria-hidden=\"true \"></i></a>\n              </div>\n              <div class=\"content-wrap \">\n                <div class=\"player \">\n                  <div class=\"title \"><a href=\"javascript:;\">{{artist && artist.first_name ? artist.first_name : ''  +' '+ artist && artist.last_name ? artist.last_name : '' }}</a></div>\n                  <div class=\"cat {{artist.music_type.alias}}\">{{artist && artist['music_type']['name'] ? artist['music_type']['name'] : '' }}</div>\n                </div>\n                <div class=\"location \">\n                  <p><i class=\"fa fa-map-marker \" aria-hidden=\"true \"></i><span>Brooklyn, New York</span></p>\n                  \n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"newuploads-wrap\">\n  <div class=\"container \">\n    <div class=\"row \">\n      <div class=\"col-md-12 \">\n        <div class=\"head-global \"><h2>Popular Tracks</h2></div>\n      </div>\n      <div class=\"uploads-container col-md-12 \">\n        <div class=\"row\">\n            <div class=\"alert alert-info col-sm-12\" *ngIf=\"whatsnewdata['track'] && whatsnewdata['track'].length == 0\">\n                No data available.\n            </div>\n          <div class=\"col-lg-4 col-md-6 col-sm-6 col-xs-12 \" *ngFor=\"let track of whatsnewdata['track']; let i = index\">\n            <div class=\"upload \">\n              <div class=\"img-wrap \">\n                <img src=\"{{track.image ? track_url+track.image : 'img/upload1.png'}}\" alt=\"New Uploads \">\n              </div>\n              <div class=\"content-wrap \">\n                <div class=\"player \">\n                  <div class=\"title \"><a href=\"javascript:; \">{{track.name}}</a></div>\n                  <div class=\"finalist-name \">{{track.artist_id['first_name']+' '+track.artist_id['last_name']}}</div>\n                  <div class=\"action-btn \">\n                    <a href=\"javascript:; \">\n                        <div  class=\"action-btn custom-action-btn\">                \n                            <a  class=\"play_img\" [style.display]=\"!audio_ins[i] ? 'block' : 'none'\" (click)=\"playAudio(track.audio, i, whatsnewdata['track'])\"><img  src=\"img/play_icon.png\"></a>\n                            <a  class=\"pause_img\" [style.display]=\"audio_ins[i] ? 'block' : 'none'\" (click)=\"stopAudio(i, whatsnewdata['track'])\"><img  src=\"img/pause_icon.png\"></a>\n                        </div>\n                    <!-- <img src=\"img/play.png \" alt=\"Pause \"  [style.display]=\"!audio_ins[i] ? 'block' : 'none'\" (click)=\"playAudio(track.audio, i)\">\n                    <img src=\"img/pause.png \" alt=\"Pause \"  [style.display]=\"audio_ins[i] ? 'block' : 'none'\" (click)=\"stopAudio(i)\"> -->\n                  </a>\n                </div>\n                </div>\n                <div class=\"location \">\n                  <p><i class=\"fa fa-map-marker \" aria-hidden=\"true \"></i><span>New York</span></p>\n                  <div class=\"cat {{track.artist_id.music_type['alias']}}\">{{track.artist_id.music_type['name']}}</div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

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
            var index = this.region_filter.indxOf(val);
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
            this.whatsnewdata['artist'][index]['is_followed'] = true;
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
        var _this = this;
        var user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            this.WhatsNewService.getFollower().subscribe(function (response) {
                var flag = false;
                _this.whatsnewdata['artist'].forEach(function (obj) {
                    response['user'].forEach(function (data) {
                        if (obj._id == data['artist_id']._id) {
                            flag = true;
                        }
                    });
                    if (flag) {
                        obj['is_followed'] = true;
                    }
                    else {
                        obj['is_followed'] = false;
                    }
                });
            });
        }
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
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
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
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
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

module.exports = "<section class=\"register-wrap\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12 col-sm-12 col-xs-12\">\n        <div class=\"register-container\">\n          <div class=\"fle-row\">\n            <div class=\"main-step {{step_flag ? 'next_form' : 'previous_form'}}\">\n                <a class=\"back-btn main_step_back\" routerLink=\"\" href=\"javascript:;\">\n                  <!-- <img alt=\"Previou Arrow\" src=\"img/prev-arrow.png\"> Back -->\n                  ×\n                </a>\n              <div class=\"heading\"><h3>Who are you?</h3></div>\n              <div class=\"select-who\">\n                <div class=\"artist\"><a href=\"javascript:;\" (click)=\"nxt_btn('artist', true)\"><img src=\"img/artist.png\" alt=\"Artist\" ><h3>Artist</h3></a></div>\n                <div class=\"listner\"><a  href=\"javascript:;\" (click)=\"nxt_btn('listener', true)\"><img src=\"img/listiner.png\" alt=\"listner\" ><h3>Listener</h3></a></div>\n              </div>\n            </div>\n            <div class=\"for-artist\">\n              <div class=\"steps step1 {{artist_cnt == 1 ? 'next_form' : ''}}\" id=\"artist-step1\" >\n                <form [formGroup]=\"artist_step1\">\n                    <a class=\"back-btn main_step_back\" href=\"javascript:;\" routerLink=\"\" >                  \n                      ×\n                    </a>\n                  <div class=\"heading\"><h3>Terms of Conditions </h3></div>\n                  <div class=\"progress_bar fill14\"></div>\n                  <div class=\"terms_condition_block mCustomScrollbar \" data-mcs-theme=\"dark-3\">\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quisquam, tempora adipisci debitis voluptates. Labore tenetur ipsa itaque ea vero repellat fuga doloribus non facere animi molestiae dolorem provident quasi veniam accusamus, ipsum minima ipsam architecto. Possimus officiis facilis iusto quod modi atque dolorum veniam reiciendis? Voluptate porro tempora quam?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quisquam, tempora adipisci debitis voluptates. Labore tenetur ipsa itaque ea vero repellat fuga doloribus non facere animi molestiae dolorem provident quasi veniam accusamus, ipsum minima ipsam architecto. Possimus officiis facilis iusto quod modi atque dolorum veniam reiciendis? Voluptate porro tempora quam?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quisquam, tempora adipisci debitis voluptates. Labore tenetur ipsa itaque ea vero repellat fuga doloribus non facere animi molestiae dolorem provident quasi veniam accusamus, ipsum minima ipsam architecto. Possimus officiis facilis iusto quod modi atque dolorum veniam reiciendis? Voluptate porro tempora quam?</p>\n                  </div>\n                  <div class=\"agree\">\n                    <div class=\"checkbox\">\n                        <label>\n                          <input type=\"checkbox\" value=\"\" formControlName=\"terms_condtion\"  name=\"artist_terms_condition\" required [(ngModel)]=\"artist_data.terms_condition\">I agree to the <a href=\"javascript:;\">Terms of Conditions</a>\n                          <div class=\"chk_check\"></div>\n                        </label>\n                    </div>\n                    <div class=\"terms_error_msg\" *ngIf=\"artist_validation[0] && !artist_step1.controls['terms_condtion'].valid\">\n                      <span *ngIf=\"artist_step1.controls['terms_condtion'].errors['required']\" class=\"text-danger\">Please select terms and conditions..</span>\n                    </div>\n                  </div>\n                  <div class=\"button_group terms_btn\">\n                    <a href=\"javascript:;\" class=\"back-btn\" (click)=\"back_btn('artist')\"><img src=\"img/prev-arrow.png\" alt=\"Previou Arrow\"> Back</a>\n                    <button type=\"submit\" (click)=\"nxt_btn('artist', artist_step1.valid, 0)\" class=\"next-btn\" >Next</button>\n                  </div>\n                </form>\n              </div>\n\n              <div class=\"steps step2 {{artist_cnt == 2 ? 'next_form' : ''}}\" id=\"profile-step2\">\n                  <form [formGroup]=\"artist_step2\">\n                    <a class=\"back-btn main_step_back\" href=\"javascript:;\" routerLink=\"\" >\n                        ×\n                      </a>\n                    <div class=\"heading\"><h3>Create An Artist Profile</h3></div>\n                    <div class=\"progress_bar fill14\"></div>\n                    <div class=\"email-form\">\n                      \n                        <div class=\"form-group\">\n                            <label for=\"email\">Email</label>\n                            <input type=\"email\" class=\"form-control\" formControlName=\"email\"  [(ngModel)]=\"artist_data.email\" name=\"artist_email\" id=\"email\" placeholder=\"Email\">\n                            <div class=\"cust_err_msg\" *ngIf=\"artist_validation[1] && !artist_step2.controls['email'].valid\">\n                              <span *ngIf=\"artist_step2.controls['email'].errors['required']\" class=\"text-danger\">Email is required.</span>\n                              <span *ngIf=\"!artist_step2.controls['email'].errors['required'] && artist_step2.controls['email'].errors['email'] && artist_step2.controls['email'].dirty\" class=\"text-danger\">Email Mismatched.</span>\n                            </div>\n                          </div>                          \n                          <div [formGroup]=\"passwordFormGroup1\">\n                            <div class=\"form-group pwd-grp\">\n                              <label for=\"pwd\">Password</label>\n                              <input type=\"password\" class=\"form-control\" formControlName=\"artist_password\" placeholder=\"Password\"  required [(ngModel)]=\"artist_data.password\" name=\"password\">\n                              <div class=\"pwd-icon\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i></div>\n                              <div class=\"cust_err_msg\" *ngIf=\"artist_validation[1] && !passwordFormGroup1.controls['artist_password'].valid \">\n                                <span *ngIf=\"passwordFormGroup1.controls['artist_password'].errors['required']\" class=\"text-danger\">Password is required.</span>\n                                <span *ngIf=\"!passwordFormGroup1.controls['artist_password'].errors['required'] && passwordFormGroup1.controls['artist_password'].errors['minlength']\" class=\"text-danger\">Must be longer than 6 characters.</span>\n                              </div>\n                            </div>\n                            <div class=\"form-group pwd-grp\">\n                              <label for=\"pwd\">Confirm Password</label>\n                              <input type=\"password\" class=\"form-control\" formControlName=\"artist_conf\"  name=\"confirm\" [(ngModel)]=\"artist_data.confirm_password\" placeholder=\"Password\" required >\n                              <div class=\"pwd-icon\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i></div>\n                              <div class=\"cust_err_msg\" *ngIf=\"artist_validation[1] && !passwordFormGroup1.controls['artist_conf'].valid\">\n                                <!-- <span *ngIf=\"passwordFormGroup.controls['conf'].errors['required']\" class=\"text-danger\">Confirm Password is required.</span> -->\n                                <span *ngIf=\"!passwordFormGroup1.controls['artist_conf'].errors['required'] && passwordFormGroup1.controls['artist_conf'].errors['minlength']\" class=\"text-danger\">Must be longer than 6 characters.</span>\n                                <span *ngIf=\"!passwordFormGroup1.controls['artist_conf'].errors['required'] && passwordFormGroup1.controls['artist_conf'].errors['mismatch']\" class=\"text-danger\">Please enter correct confirm password.</span>\n                              </div>\n                            </div>\n                          </div>\n                    </div>\n                    <div class=\"button_group\">\n                      <a href=\"javascript:;\" class=\"back-btn\" (click)=\"back_btn('artist')\"><img src=\"img/prev-arrow.png\" alt=\"Previou Arrow\"> Back</a>\n                      <button type=\"submit\" (click)=\"nxt_btn('artist', artist_step2.valid , 1)\" class=\"next-btn\"  >Next</button>\n                    </div>\n                </form>\n              </div>\n\n              <div class=\"steps step3 {{artist_cnt == 3 ? 'next_form' : ''}}\" id=\"about-step3\">\n                <a class=\"back-btn main_step_back\" href=\"javascript:;\" routerLink=\"\" >                  \n                    ×\n                  </a>\n                <div class=\"heading\"><h3>Tell Us About Yourself</h3></div>\n                <div class=\"progress_bar fill14\"></div>\n                <form [formGroup]=\"artist_step3\">\n                  <div class=\"email-form\">\n                      <div class=\"form-group\">\n                          <label for=\"fname\">First Name</label>\n                          <input type=\"text\" class=\"form-control\" formControlName=\"fname\"  name=\"artist_fname\" [(ngModel)]=\"artist_data.fname\"  placeholder=\"First Name\">\n                          <div class=\"cust_err_msg\" *ngIf=\"artist_validation[2] && !artist_step3.controls['fname'].valid\">\n                            <span *ngIf=\"artist_step3.controls['fname'].errors['required']\" class=\"text-danger\">First name is required.</span>\n                          </div>\n                        </div>\n                        <div class=\"form-group pwd-grp\">\n                          <label for=\"lanem\">Last Name</label>\n                          <input type=\"text\" class=\"form-control\"  formControlName=\"lname\" [(ngModel)]=\"artist_data.lname\"  name=\"artist_lname\" placeholder=\"Last Name\">\n                          <div class=\"cust_err_msg\" *ngIf=\"artist_validation[2] && !artist_step3.controls['lname'].valid\">\n                            <span *ngIf=\"artist_step3.controls['lname'].errors['required']\" class=\"text-danger\">First name is required.</span>\n                          </div>\n                        </div>\n                        <div class=\"form-group gender-grp\">\n                          <label for=\"geder\">Gender</label>\n                          <select class=\"form-control\" id=\"gender\" formControlName=\"gender\" name=\"artist_gender\" [(ngModel)]=\"artist_data.gender\">\n                              <option value=\"male\">Male</option>\n                              <option value=\"female\">Female</option>\n                          </select>\n                          <div class=\"cust_err_msg\" *ngIf=\"artist_validation[2] && !artist_step3.controls['lname'].valid\">\n                              <span *ngIf=\"artist_step3.controls['gender'].errors['required']\" class=\"text-danger\">Gender is required.</span>\n                          </div>\n                        </div>\n                        <div class=\"form-group gender-grp\">\n                          <label for=\"geder\">Phone Number</label>\n                          <input class=\"form-control\" id=\"phone\" formControlName=\"phone\" name=\"artist_phone\" [(ngModel)]=\"artist_data.phone_no\" />\n                          <div class=\"cust_err_msg\" *ngIf=\"artist_validation[2] && !artist_step3.controls['phone'].valid\">\n                            <span *ngIf=\"artist_step3.controls['phone'].errors['required']\" class=\"text-danger\">Phone Number is required.</span>\n                            <span *ngIf=\"artist_step3.controls['phone'].dirty && (artist_step3.controls['phone'].errors['pattern'] || artist_step3.controls['phone'].errors['maxlength'] || artist_step3.controls['phone'].errors['minlength'] )\" class=\"text-danger\">Please enter valid format.</span>\n                          </div>\n                        </div>\n                  </div>\n                  <div class=\"button_group\">\n                    <a href=\"javascript:;\" class=\"back-btn\" (click)=\"back_btn('artist')\"><img src=\"img/prev-arrow.png\" alt=\"Previou Arrow\"> Back</a>\n                    <button type=\"submit\" (click)=\"nxt_btn('artist', artist_step3.valid , 2)\"  class=\"next-btn\">Next</button>\n                  </div>\n                </form>\n              </div>\n\n              <div class=\"steps step4 {{artist_cnt == 4 ? 'next_form' : ''}}\" id=\"location-step4\">\n                  <a class=\"back-btn main_step_back\" href=\"javascript:;\" routerLink=\"\" > \n                    ×\n                  </a>\n                <div class=\"heading\"><h3>Where Are You From?</h3></div>\n                <div class=\"progress_bar fill14\"></div>\n                <form [formGroup]=\"artist_step4\">\n                  <div class=\"email-form\">\n                      <div class=\"form-img-wrap\">\n                        <img src=\"img/location-icon.png\" alt=\"Location Icon\">\n                        <p *ngIf=\"location == ''\">Please, Enter zip code below</p>\n                        <p *ngIf=\"location != ''\">{{location}}</p>\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"zipcode\">Zip code</label>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"zipcode\" (keyup)=\"getLocation()\"  [(ngModel)]=\"artist_data.zipcode\" name=\"artist_zipcode\" placeholder=\"Zip Code\">\n                        <div class=\"cust_err_msg\" *ngIf=\"artist_validation[3] && !artist_step4.controls['zipcode'].valid\">\n                          <span *ngIf=\"artist_step4.controls['zipcode'].errors['required']\" class=\"text-danger\">Zipcode is required.</span>\n                          <span *ngIf=\"artist_step4.controls['zipcode'].errors['pattern'] && artist_step4.controls['zipcode'].dirty\" class=\"text-danger\">please enter valid zipcode.</span>\n                        </div>\n                      </div>\n                      <div class=\"form-group gender-grp\">\n                          <label for=\"region\">Region</label>\n                          <select formControlName=\"region\" class=\"form-control\" name=\"artist_region\" [(ngModel)]=\"artist_data.region\" (change)=\"getStateByRegion(artist_data.region)\">\n                            <option value=\"\">Select Region</option>\n                            <option *ngFor=\"let r of region_list;\" [value]=\"r._id\">{{r['name']}}</option>\n                          </select>\n                          <div class=\"cust_err_msg\" *ngIf=\"artist_validation[3] && !artist_step4.controls['region'].valid\">\n                            <span *ngIf=\"artist_step4.controls['region'].errors['required']\" class=\"text-danger\">Region is required.</span>\n                          </div>\n                      </div>\n                      <div class=\"form-group gender-grp\">\n                          <label for=\"region\">State</label>\n                          <select formControlName=\"state\" class=\"form-control\" name=\"artist_state\" [(ngModel)]=\"artist_data.state\" >\n                            <option value=\"\">Select State</option>\n                            <option *ngFor=\"let s of state_list;\" [value]=\"s._id\">{{s['name']}}</option>\n                          </select>\n                          <div class=\"cust_err_msg\" *ngIf=\"artist_validation[3] && !artist_step4.controls['state'].valid\">\n                            <span *ngIf=\"artist_step4.controls['state'].errors['required']\" class=\"text-danger\">State is required.</span>\n                          </div>\n                      </div>\n                  </div>\n                  <div class=\"button_group\">\n                    <a href=\"javascript:;\" class=\"back-btn\" (click)=\"back_btn('artist')\"><img src=\"img/prev-arrow.png\" alt=\"Previou Arrow\"> Back</a>\n                    <button type=\"submit\" (click)=\"nxt_btn('artist', artist_step4.valid , 3)\" class=\"next-btn\" >Next</button>\n                  </div>\n                </form>\n              </div>\n\n              <div class=\"steps step5 {{artist_cnt == 5 ? 'next_form' : ''}}\" id=\"music-type-step5\">\n                  <a class=\"back-btn main_step_back\" href=\"javascript:;\" routerLink=\"\" >\n                    ×\n                  </a>\n                <div class=\"heading\"><h3>What Type of Music?</h3></div>\n                <div class=\"progress_bar fill14\"></div>\n                <form>\n                  <div class=\"type-music\">\n                   \n                    <ul>                                   \n                      <li *ngFor=\"let x of music_types; let i=index;\" >\n                          <input type=\"radio\" id=\"{{i}}\" name=\"radio-group\" (click)=\"selectMusciGenre(x._id)\">\n                          <label for=\"{{i}}\">{{x.name}}</label>\n                      </li>\n                    </ul>\n                    <div class=\"cust_err_msg\" *ngIf=\"artist_validation[4]\">\n                        <span class=\"text-danger\">Music Type is required.</span>\n                    </div>\n                  </div>\n                  <div class=\"button_group\">\n                    <a href=\"javascript:;\" class=\"back-btn\" (click)=\"back_btn('artist')\"><img src=\"img/prev-arrow.png\" alt=\"Previou Arrow\"> Back</a>\n                    <button type=\"submit\" (click)=\"nxt_btn('artist', (artist_data.music_type ? true : false) , 4)\"  class=\"next-btn\">Next</button>\n                  </div>\n                </form>\n              </div>\n\n\n              <div class=\"steps step6 {{artist_cnt == 6 ? 'next_form' : ''}}\" id=\"upload-step6\">\n                  <a class=\"back-btn main_step_back\" href=\"javascript:;\" routerLink=\"\" >\n                    ×\n                  </a>\n                <div class=\"heading\"><h3>Upload Profile Photo</h3></div>\n                <div class=\"progress_bar fill14\"></div>\n                <div class=\"upload-block\">\n                  <div class=\"upl-div\" >\n                    <div class=\"upload-btn\" *ngIf=\"!cropperReady\"> \n                      <span class=\"upl-img\" ><i class=\"fa fa-cloud-upload\" aria-hidden=\"true\"></i></span> \n                      <span class=\"up_text\" >Upload Photo</span> \n                      <input type=\"file\" name=\"my_doc_upload\" (change)=\"fileChangeEvent($event)\" id=\"my_doc_upload\" multiple=\"false\"> \n                      <p class=\"instrution\" >320x320px .png, .jpg 5MB or less</p>\n                    </div>\n                    <div [style.display]=\"cropperReady ? null : 'none'\">\n                      <image-cropper\n                          [imageChangedEvent]=\"imageChangedEvent\"\n                          [maintainAspectRatio]=\"true\"\n                          [aspectRatio]=\"1 / 1\"\n                          [resizeToWidth]=\"128\"\n                          format=\"jpeg\"\n                          (imageCropped)=\"imageCropped($event)\"\n                          (imageLoaded)=\"imageLoaded()\"\n                          (loadImageFailed)=\"loadImageFailed()\"\n                          [style.display]=\"cropperReady ? null : 'none'\"\n                      ></image-cropper>\n                      <div class=\"upload-btn-div\">\n                        <label for=\"fileUpload\">Upload a Different Photo</label>\n                        <input type=\"file\" name=\"my_doc_upload\" (change)=\"fileChangeEvent($event)\" id=\"my_doc_upload\" multiple=\"false\"> \n                      </div>  \n                    </div>\n                  </div>\n                  <div class=\"upl-div\">\n                    <div class=\"upload-btn-cstm_p\" *ngIf=\"!cropperReady\"> \n                      <span class=\"upl-img\"><img src=\"img/icons8-microphone2Normal.png\" alt=\"\"></span> \n                      <!-- <input type=\"file\" name=\"my_doc_upload\" id=\"my_doc_upload\" multiple=\"false\">  -->\n                    </div>\n                    <div [style.display]=\"cropperReady ? null : 'none'\">\n                      <img [src]=\"croppedImage\" style=\"height: 167px;width: 155px;\"/>\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"heading\">\n                  <div class=\"cust_err_msg\" *ngIf=\"artist_validation[5]\">\n                      <span class=\"text-danger\">Avatar is required..</span>\n                  </div>\n                </div>\n                \n                <div class=\"button_group\">\n                  <a href=\"javascript:;\" class=\"back-btn\" (click)=\"back_btn('artist')\"><img src=\"img/prev-arrow.png\" alt=\"Previou Arrow\"> Back</a>\n                  <button  (click)=\"nxt_btn('artist', cropperReady, 5)\"  class=\"next-btn\">Next</button>\n                </div>\n              </div>\n\n\n              <div class=\"steps step7 {{artist_cnt == 7 ? 'next_form' : ''}}\" id=\"social-acc-step7\">\n                  <a class=\"back-btn main_step_back\" href=\"javascript:;\" routerLink=\"\" >\n                    ×\n                  </a>\n                  <div class=\"heading\"><h3>Add Your Social Media</h3></div>\n\n                <div class=\"progress_bar fill14\"></div>\n                <div class=\"social-acc\">\n                  <div class=\"social-block\">\n                    <div class=\"form-group\">\n                        <label for=\"facebook\">Facebook</label>\n                        <input type=\"text\" class=\"form-control\" id=\"fb\" name=\"artist_fb\" [(ngModel)]=\"artist_data.share_url['facebook']\" placeholder=\"Add Account\" >\n                        <img src=\"img/fb.png\" alt=\"Facebook\">\n                      </div>\n                  </div>\n                  <div class=\"social-block\">\n                    <div class=\"form-group\">\n                        <label for=\"inst\">Instagram</label>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Add Account\" name=\"artist_insta\" [(ngModel)]=\"artist_data.share_url['instagram']\">\n                        <img src=\"img/inst.png\" alt=\"Facebook\">\n                      </div>\n                  </div>\n                  <div class=\"social-block\">\n                    <div class=\"form-group\">\n                        <label for=\"facebook\">Twitter</label>\n                        <input type=\"text\" class=\"form-control\" id=\"fb1\" placeholder=\"Add Account\" name=\"artist_tweet\" [(ngModel)]=\"artist_data.share_url['twitter']\">\n                        <img src=\"img/twitter.png\" alt=\"Facebook\">\n                      </div>\n                  </div>\n                  <div class=\"social-block\">\n                    <div class=\"form-group\">\n                        <label for=\"inst\">Youtube</label>\n                        <input type=\"text\" class=\"form-control\"  placeholder=\"Add Account\" name=\"artist_youtube\" [(ngModel)]=\"artist_data.share_url['youtube']\">\n                        <img src=\"img/youtube.png\" alt=\"Facebook\">\n                      </div>\n                  </div>\n                  <div class=\"social-block\">\n                    <div class=\"form-group\">\n                        <label for=\"inst\">Soundcloud</label>\n                        <input type=\"text\" class=\"form-control\"  placeholder=\"Add Account\" name=\"artist_sound\" [(ngModel)]=\"artist_data.share_url['sound_cloud']\">\n                        <img src=\"img/soundcloud.png\" alt=\"Facebook\">\n                      </div>\n                  </div>\n                    \n                </div>\n                <div class=\"button_group\">\n                  <a href=\"javascript:;\" class=\"back-btn\" (click)=\"back_btn('artist')\"><img src=\"img/prev-arrow.png\" alt=\"Previou Arrow\"> Back</a>\n                  <button (click)=\"artist_submit()\" [disabled]=\"show_spinner\" class=\"next-btn\">Finish <i class=\"fa fa-spinner fa-spin\" *ngIf=\"show_spinner\"></i></button>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"for-listner\">\n              <div class=\"steps step1 {{listner_cnt == 1 ? 'next_form' : ''}}\" id=\"listner-register\">\n                  <a class=\"back-btn main_step_back\" href=\"javascript:;\" routerLink=\"\" >\n                    ×\n                  </a>\n                <div class=\"social-login\">\n                  <div class=\"google-login\">\n                    <a href=\"javascript:;\" id=\"googleBtn\"><i class=\"fa fa-google\"  aria-hidden=\"true\"></i> <span>Login with Google</span></a>\n                  </div>\n                  <div class=\"fb-login\">\n                    <a href=\"javascript:;\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i> <span>Login with Facebook</span></a>\n                  </div>\n                </div>\n                <div class=\"progress_bar fill14\"></div>\n                <div class=\"or\">or with email</div>\n                <form [formGroup]=\"listener_step1\">\n                  <div class=\"email-form\">\n                      <div class=\"form-group\">\n                          <label for=\"email\">Email</label>\n                          <input type=\"email\" formControlName=\"email\" [(ngModel)]=\"listener_data.email\" class=\"form-control\" id=\"email1\" placeholder=\"Email\">\n                          <div class=\"cust_err_msg\" *ngIf=\"listener_validation[0] && !listener_step1.controls['email'].valid\">\n                            <span *ngIf=\"listener_step1.controls['email'].errors['required']\" class=\"text-danger\">Email is required.</span>\n                            <span *ngIf=\"!listener_step1.controls['email'].errors['required'] && listener_step1.controls['email'].errors['email'] && listener_step1.controls['email'].dirty\" class=\"text-danger\">Email Mismatched.</span>\n                          </div>\n                      </div>\n                      <div [formGroup]=\"passwordFormGroup\">\n                        <div class=\"form-group pwd-grp\">\n                          <label for=\"pwd\">Password</label>\n                          <input type=\"password\" class=\"form-control\" formControlName=\"password\" [(ngModel)]=\"listener_data.password\" placeholder=\"Password\">\n                          <div class=\"pwd-icon\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i></div>\n                          <div class=\"cust_err_msg\" *ngIf=\"listener_validation[0] && !passwordFormGroup.controls['password'].valid\">\n                            <span *ngIf=\"passwordFormGroup.controls['password'].errors['required']\" class=\"text-danger\">Password is required.</span>\n                            <span *ngIf=\"!passwordFormGroup.controls['password'].errors['required'] && passwordFormGroup.controls['password'].errors['minlength'] && passwordFormGroup.controls['password'].dirty\" class=\"text-danger\">Must be longer than 6 characters.</span>\n                          </div>\n                        </div>\n                        <div class=\"form-group pwd-grp\">\n                          <label for=\"pwd\">Confirm Password</label>\n                          <input type=\"password\" class=\"form-control\" formControlName=\"conf\"  placeholder=\"Confirm Password\">\n                          <div class=\"pwd-icon\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i></div>\n                          <div class=\"cust_err_msg\" *ngIf=\"listener_validation[0] && !passwordFormGroup.controls['conf'].valid \">\n                            <span *ngIf=\"passwordFormGroup.controls['conf'].errors['required']\" class=\"text-danger\">Confirm password is required.</span>\n                            <span *ngIf=\"!passwordFormGroup.controls['conf'].errors['required'] && passwordFormGroup.controls['conf'].errors['minlength'] && passwordFormGroup.controls['conf'].dirty\" class=\"text-danger\">Must be longer than 6 characters.</span>\n                            <span *ngIf=\"!passwordFormGroup.controls['conf'].errors['required'] && passwordFormGroup.controls['conf'].errors['mismatch'] && passwordFormGroup.controls['conf'].dirty\" class=\"text-danger\">Please enter correct confirm password.</span>\n                          </div>\n                        </div>\n                      </div>\n                  </div>\n                  <div class=\"button_group\">\n                    <a href=\"javascript:;\" class=\"back-btn\" (click)=\"back_btn('listener')\"><img src=\"img/prev-arrow.png\" alt=\"Previou Arrow\"> Back</a>\n                    <button type=\"submit\" (click)=\"nxt_btn('listener', listener_step1.valid, 0)\" class=\"next-btn\">Next</button>\n                  </div>\n                </form>\n              </div>\n\n              <div class=\"steps step2 {{listner_cnt == 2 ? 'next_form' : ''}}\" id=\"artist-step1\">\n                  <a class=\"back-btn main_step_back\" href=\"javascript:;\" routerLink=\"\" >\n                    ×\n                  </a>\n                <div class=\"heading\"><h3>Terms of Conditions </h3></div>\n                <div class=\"progress_bar fill14\"></div>\n                <form [formGroup]=\"listener_step2\">\n                  <div class=\"terms_condition_block mCustomScrollbar \" data-mcs-theme=\"dark-3\">\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quisquam, tempora adipisci debitis voluptates. Labore tenetur ipsa itaque ea vero repellat fuga doloribus non facere animi molestiae dolorem provident quasi veniam accusamus, ipsum minima ipsam architecto. Possimus officiis facilis iusto quod modi atque dolorum veniam reiciendis? Voluptate porro tempora quam?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quisquam, tempora adipisci debitis voluptates. Labore tenetur ipsa itaque ea vero repellat fuga doloribus non facere animi molestiae dolorem provident quasi veniam accusamus, ipsum minima ipsam architecto. Possimus officiis facilis iusto quod modi atque dolorum veniam reiciendis? Voluptate porro tempora quam?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quisquam, tempora adipisci debitis voluptates. Labore tenetur ipsa itaque ea vero repellat fuga doloribus non facere animi molestiae dolorem provident quasi veniam accusamus, ipsum minima ipsam architecto. Possimus officiis facilis iusto quod modi atque dolorum veniam reiciendis? Voluptate porro tempora quam?</p>\n                  </div>\n                  <div class=\"agree\">\n                    <div class=\"checkbox\">\n                        <label>\n                          <input type=\"checkbox\" formControlName=\"terms_condtion\" [(ngModel)]=\"listener_data.terms_condition\" value=\"\">I agree to the <a href=\"javascript:;\">Terms of Conditions</a>\n                          <div class=\"chk_check\"></div>\n                        </label>\n                    </div>\n                    <div class=\"terms_error_msg\" *ngIf=\"listener_validation[1] && !listener_step2.controls['terms_condtion'].valid\">\n                      <span *ngIf=\"listener_step2.controls['terms_condtion'].errors['required']\" class=\"text-danger\">Please select terms and conditions..</span>\n                    </div>\n                  </div>\n                  <div class=\"button_group\">\n                    <a href=\"javascript:;\" class=\"back-btn\" (click)=\"back_btn('listener')\"><img src=\"img/prev-arrow.png\" alt=\"Previou Arrow\"> Back</a>\n                    <button type=\"submit\" (click)=\"nxt_btn('listener', listener_step2.valid, 1)\" class=\"next-btn\">Next</button>\n                  </div>\n                </form>\n              </div>\n\n              <div class=\"steps step3 {{listner_cnt == 3 ? 'next_form' : ''}}\" id=\"user-step2\">\n                  <a class=\"back-btn main_step_back\" href=\"javascript:;\" routerLink=\"\" >\n                    ×\n                  </a>\n                <div class=\"heading\"><h3>Create User Name</h3></div>\n                <div class=\"progress_bar fill14\"></div>\n                <form [formGroup]=\"listener_step3\">\n                  <div class=\"email-form\">\n                    <div class=\"row plr15\">\n                    <div class=\"form-group col-md-6\">\n                        <label for=\"fname\">First Name</label>\n                        <input type=\"text\" formControlName=\"fname\" name=\"listener_fname\" class=\"form-control\" [(ngModel)]=\"listener_data.fname\" placeholder=\"First Name\">\n                        <div class=\"terms_error_msg\" *ngIf=\"listener_validation[2] && !listener_step3.controls['fname'].valid\">\n                          <span *ngIf=\"listener_step3.controls['fname'].errors['required']\" class=\"text-danger\">First Name is required.</span>\n                        </div>\n                      </div>\n                      <div class=\"form-group pwd-grp col-md-6 pr0\">\n                        <label for=\"lanem\">Last Name</label>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"lname\" name=\"listener_lname\" [(ngModel)]=\"listener_data.lname\"  placeholder=\"Last Name\">\n                        <div class=\"terms_error_msg\" *ngIf=\"listener_validation[2] && !listener_step3.controls['lname'].valid\">\n                          <span *ngIf=\"listener_step3.controls['lname'].errors['required']\" class=\"text-danger\">Last Name is required.</span>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"form-group gender-grp\">\n                        <label for=\"geder\">Gender</label>\n                        <select class=\"form-control\" id=\"listener_gender\" formControlName=\"gender\" name=\"listener_gender\" [(ngModel)]=\"listener_data.gender\">\n                            <option value=\"male\">Male</option>\n                            <option value=\"female\">Female</option>\n                        </select>\n                        <div class=\"terms_error_msg\" *ngIf=\"listener_validation[2] && !listener_step3.controls['gender'].valid\">\n                          <span *ngIf=\"listener_step3.controls['gender'].errors['required']\" class=\"text-danger\">Gender is required.</span>\n                        </div>\n                      </div>\n                      <div class=\"date-of-birth\">\n                        <label for=\"date\">Birthday</label>\n                        <div class=\"form-group\">\n                        <select class=\"form-control\" id=\"day\" formControlName=\"day\" name=\"listener_day\" [(ngModel)]=\"listener_data.day\">\n                            <option value=\"\">Day</option>\n                            <option *ngFor=\"let d of day\" [value]=\"d\">{{d}}</option>\n                        </select>\n                        <div class=\"terms_error_msg\" *ngIf=\"listener_validation[2] && !listener_step3.controls['day'].valid\">\n                          <span *ngIf=\"listener_step3.controls['day'].errors['required']\" class=\"text-danger\">Day is required.</span>\n                        </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <select class=\"form-control\" id=\"month\" formControlName=\"month\" name=\"listener_month\" [(ngModel)]=\"listener_data.month\">\n                            <option value=\"\">Month</option>\n                            <option *ngFor=\"let m of month\" [value]=\"m\">{{m}}</option>\n                        </select>\n                        <div class=\"terms_error_msg\" *ngIf=\"listener_validation[2] && !listener_step3.controls['month'].valid\">\n                          <span *ngIf=\"listener_step3.controls['month'].errors['required']\" class=\"text-danger\">Month is required.</span>\n                        </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <select class=\"form-control\" id=\"year\" formControlName=\"year\" name=\"listener_year\" [(ngModel)]=\"listener_data.year\">\n                            <option value=\"\">Year</option>\n                            <option *ngFor=\"let y of year\" [value]=\"y\">{{y}}</option>\n                        </select>\n                        <div class=\"terms_error_msg\" *ngIf=\"listener_validation[2] && !listener_step3.controls['year'].valid\">\n                          <span *ngIf=\"listener_step3.controls['year'].errors['required']\" class=\"text-danger\">Year is required.</span>\n                        </div>\n                      </div>\n                      </div>\n\n                      <div class=\"form-group\">\n                        <label class=\"control-label\">Phone Number</label>\n                        <input name=\"listener_phone\" class=\"form-control\" formControlName=\"phone\" [(ngModel)]=\"listener_data.phone_no\"/>\n                        <div class=\"terms_error_msg\" *ngIf=\"listener_validation[2] && !listener_step3.controls['phone'].valid\">\n                          <span *ngIf=\"listener_step3.controls['phone'].errors['required']\" class=\"text-danger\">Phone number is required.</span>\n                          <span *ngIf=\"(listener_step3.controls['phone'].errors['maxlength'] || listener_step3.controls['phone'].errors['minlength'])  && listener_step3.controls['phone'].dirty\" class=\"text-danger\">Please enter valid phone number.</span>\n                        </div>\n                      </div>\n                  </div>\n                  <div class=\"button_group\">\n                    <a href=\"javascript:;\" class=\"back-btn\" (click)=\"back_btn('listener')\"><img src=\"img/prev-arrow.png\" alt=\"Previou Arrow\"> Back</a>\n                    <button type=\"submit\" (click)=\"nxt_btn('listener', listener_step3.valid, 2)\" class=\"next-btn\">Next</button>\n                  </div>\n                </form>\n              </div>\n\n              <div class=\"steps step4 {{listner_cnt == 4 ? 'next_form' : ''}}\" id=\"location-step4\">\n                  <a class=\"back-btn main_step_back\" href=\"javascript:;\" routerLink=\"\" >\n                    ×\n                  </a>\n                <div class=\"heading\"><h3>Where Are You From?</h3></div>\n                <div class=\"progress_bar fill14\"></div>\n                <form [formGroup]=\"listener_step4\">\n                  <div class=\"email-form\">\n                      <div class=\"form-img-wrap\">\n                        <img src=\"img/location-icon.png\" alt=\"Location Icon\">\n                        <p *ngIf=\"location == ''\">Please, Enter zip code below</p>\n                        <p *ngIf=\"location != ''\">{{location}}</p>\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"zipcode\">Zip code</label>\n                        <input type=\"text\" class=\"form-control\"  formControlName=\"zipcode\" (keyup)=\"getLocationForListener()\"  [(ngModel)]=\"listener_data.zipcode\" name=\"listener_zipcode\"  placeholder=\"Zip Code\">\n                        <div class=\"cust_err_msg\" *ngIf=\"listener_validation[3] && !listener_step4.controls['zipcode'].valid\">\n                          <span *ngIf=\"listener_step4.controls['zipcode'].errors['required']\" class=\"text-danger\">Zipcode is required.</span>\n                          <span *ngIf=\"listener_step4.controls['zipcode'].errors['pattern'] && listener_step4.controls['zipcode'].dirty\" class=\"text-danger\">please enter valid zipcode.</span>\n                        </div>\n                      </div>\n                      <div class=\"form-group gender-grp\">\n                        <label for=\"region\">Region</label>\n                        <select formControlName=\"region\" class=\"form-control\" name=\"listener_region\" [(ngModel)]=\"listener_data.region\" (change)=\"getStateByRegion(listener_data.region)\">\n                          <option value=\"\">Select Region</option>\n                          <option *ngFor=\"let r of region_list;\" [value]=\"r._id\">{{r['name']}}</option>\n                        </select>\n                        <div class=\"cust_err_msg\" *ngIf=\"listener_validation[3] && !listener_step4.controls['region'].valid\">\n                          <span *ngIf=\"listener_step4.controls['region'].errors['required']\" class=\"text-danger\">Region is required.</span>\n                        </div>\n                    </div>\n                    <div class=\"form-group gender-grp\">\n                        <label for=\"region\">State</label>\n                        <select formControlName=\"state\" class=\"form-control\" name=\"listener_state\" [(ngModel)]=\"listener_data.state\" >\n                          <option value=\"\">Select State</option>\n                          <option *ngFor=\"let s of state_list;\" [value]=\"s._id\">{{s['name']}}</option>\n                        </select>\n                        <div class=\"cust_err_msg\" *ngIf=\"listener_validation[3] && !listener_step4.controls['state'].valid\">\n                          <span *ngIf=\"listener_step4.controls['state'].errors['required']\" class=\"text-danger\">State is required.</span>\n                        </div>\n                    </div>\n                  </div>\n                  <div class=\"button_group\">\n                    <a href=\"javascript:;\" class=\"back-btn\" (click)=\"back_btn('listener')\"><img src=\"img/prev-arrow.png\" alt=\"Previou Arrow\"> Back</a>\n                    <button type=\"submit\" (click)=\"nxt_btn('listener', listener_step4.valid, 3)\" class=\"next-btn\">Next</button>\n                  </div>\n                </form>\n              </div>\n\n              <div class=\"steps step5 {{listner_cnt == 5 ? 'next_form' : ''}}\" id=\"music-type-step5\">\n                  <a class=\"back-btn main_step_back\" href=\"javascript:;\" routerLink=\"\" >\n                    ×\n                  </a>\n                <div class=\"heading\"><h3>What Type of Music?</h3></div>\n                <div class=\"progress_bar fill14\"></div>\n                <div class=\"type-music\">\n                  <ul>\n                    <li *ngFor=\"let x of music_types\">\n                        <input type=\"checkbox\" name=\"music\" (change)=\"onChangeForListener(x['_id'], $event.target.checked)\">\n                        <div class=\"music-checked chk-{{x['alias']}}\"  >{{x.name}}</div>\n                    </li>\n                  </ul>\n                  <div class=\"cust_err_msg\" *ngIf=\"listener_validation[4]\">\n                    <span class=\"text-danger\">Please select atleaset one music type.</span>\n                  </div>\n                </div>\n                <div class=\"button_group\">\n                  <a href=\"javascript:;\" class=\"back-btn\" (click)=\"back_btn('listener')\"><img src=\"img/prev-arrow.png\" alt=\"Previou Arrow\"> Back</a>\n                  <button (click)=\"listener_submit()\" [disabled]=\"show_spinner\" class=\"next-btn\">Finish <i *ngIf=\"show_spinner\" class=\"fa fa-spinner fa-spin\"></i></button>\n                </div>\n              </div>\n            </div>\n          </div>\n          \n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

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
    function RegisterComponent(fb, RegisterService, toastr, router) {
        var _this = this;
        this.fb = fb;
        this.RegisterService = RegisterService;
        this.toastr = toastr;
        this.router = router;
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
        this.auth2.attachClickHandler(element, {}, function (googleUser) {
            var profile = googleUser.getBasicProfile();
            console.log('Token || ' + googleUser.getAuthResponse().id_token);
            console.log('ID: ' + profile.getId());
            console.log('Name: ' + profile.getName());
            console.log('Image URL: ' + profile.getImageUrl());
            console.log('Email: ' + profile.getEmail());
            //YOUR CODE HERE
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
        this.RegisterService.getStateByRegion({ region: id }).subscribe(function (response) {
            _this.state_list = response['state'];
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
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["f" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/register/register.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// import { HttpClientModule, HttpClient } from '@angular/common/http';




var RegisterModule = /** @class */ (function () {
    function RegisterModule() {
    }
    RegisterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_image_cropper__["a" /* ImageCropperModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_9_ngx_toastr__["a" /* ToastrModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* RouterModule */].forChild([
                    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__register_component__["a" /* RegisterComponent */] }
                ])
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__register_component__["a" /* RegisterComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_5__register_service__["a" /* RegisterService */]]
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

module.exports = "<ngx-carousel [inputs]=\"carouselOne\" *ngIf=\"carouselType == 'normal'\">\r\n  <ngx-tile NgxCarouselItem *ngFor=\"let image of images; let i = index\">\r\n    \r\n      <div class=\"final-wrap\">\r\n        <div class=\"img-wrap\">\r\n          <img src=\"{{image.source}}\" alt=\"Finalists\">\r\n          <a href=\"javascript:void(0)\" class=\"fan\">\r\n            <i class=\"fa fa-heart-o\" aria-hidden=\"true\"></i>\r\n          </a>\r\n        </div>\r\n        <div class=\"content-wrap\">\r\n          <div class=\"player\">\r\n            <div class=\"title\">\r\n              <a href=\"#\">{{ image.title }}</a>\r\n            </div>\r\n            <div class=\"finalist-name\">{{image.name}}</div>\r\n            <div class=\"action-btn custom-action-btn\">\r\n                <a [style.display]=\"!audio_ins[i] ? 'block' : 'none'\" (click)=\"playAudio(image.audio, i, images)\" class=\"play_img\" ><img src=\"img/play_icon.png\"/></a>\r\n                <a [style.display]=\"audio_ins[i] ? 'block' : 'none'\" (click)=\"stopAudio(i, images)\" class=\"pause_img\"><img src=\"img/pause_icon.png\"/></a>\r\n            </div>\r\n          </div>\r\n          <div class=\"location\">\r\n            <p>\r\n              <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\r\n              <span>{{image.location}}</span>\r\n            </p>\r\n            <div class=\"cat {{image.alias}}\">{{image.type}}</div>\r\n          </div>\r\n        </div>\r\n    </div>\r\n  </ngx-tile>\r\n  <i class=\"material-icons leftRs\" NgxCarouselPrev></i>\r\n  <i class=\"material-icons rightRs\" NgxCarouselNext></i>\r\n</ngx-carousel>\r\n<ngx-carousel [inputs]=\"carouselOne\" *ngIf=\"carouselType == 'banner'\">\r\n  <ngx-tile NgxCarouselItem *ngFor=\"let image of images; let i = index\">\r\n      <div class=\"newslider slider1\">\r\n          <div class=\"banner-img\">\r\n            <img src=\"{{image.source}}\" alt=\"Banner image\">\r\n          </div>\r\n          <div class=\"content-block\">\r\n            <div class=\"what-bg-content\">\r\n              <h3>{{ image.title }}</h3>\r\n              <p>{{image.description}} </p>\r\n              <div class=\"vote-btn\"><a href=\"javascript:;\">Vote Now</a></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n  </ngx-tile>\r\n  <i class=\"material-icons leftRs\" NgxCarouselPrev></i>\r\n  <i class=\"material-icons rightRs\" NgxCarouselNext></i>\r\n</ngx-carousel>"

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
    function CarouselComponent(MessageService) {
        var _this = this;
        this.MessageService = MessageService;
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__message_service__["a" /* MessageService */]])
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
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3_ngx_carousel__["a" /* NgxCarouselModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__carousel_component__["a" /* CarouselComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__carousel_component__["a" /* CarouselComponent */]]
        })
    ], CarouselModule);
    return CarouselModule;
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

/***/ "../../../../../src/assets/data/us-all.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return country_data; });
var country_data = { "title": "United States of America", "version": "1.1.2", "type": "FeatureCollection", "copyright": "Copyright (c) 2015 Highsoft AS, Based on data from Natural Earth", "copyrightShort": "Natural Earth", "copyrightUrl": "http://www.naturalearthdata.com", "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:EPSG:102004" } }, "hc-transform": { "default": { "crs": "+proj=lcc +lat_1=33 +lat_2=45 +lat_0=39 +lon_0=-96 +x_0=0 +y_0=0 +datum=NAD83 +units=m +no_defs", "scale": 0.000151481324748, "jsonres": 15.5, "jsonmarginX": -999, "jsonmarginY": 9851.0, "xoffset": -2361356.09818, "yoffset": 1398996.77886 }, "us-all-hawaii": { "xpan": 190, "ypan": 417, "hitZone": { "type": "Polygon", "coordinates": [[[1747, 3920], [3651, 2950], [3651, -999], [1747, -999], [1747, 3920]]] }, "crs": "+proj=aea +lat_1=8 +lat_2=18 +lat_0=13 +lon_0=-157 +x_0=0 +y_0=0 +datum=NAD83 +units=m +no_defs", "scale": 0.000123090941806, "jsonres": 15.5, "jsonmarginX": -999, "jsonmarginY": 9851.0, "xoffset": -338610.47557, "yoffset": 1022754.31736 }, "us-all-alaska": { "rotation": -0.0174532925199, "xpan": 5, "ypan": 357, "hitZone": { "type": "Polygon", "coordinates": [[[-999, 5188], [-707, 5188], [1747, 3920], [1747, -999], [-999, -999], [-999, 5188]]] }, "crs": "+proj=tmerc +lat_0=54 +lon_0=-142 +k=0.9999 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs", "scale": 5.84397059179e-05, "jsonres": 15.5, "jsonmarginX": -999, "jsonmarginY": 9851.0, "xoffset": -1566154.00853, "yoffset": 1992671.14918 } },
    "features": [{ "type": "Feature", "id": "US.MA", "properties": { "hc-group": "admin1", "hc-middle-x": 0.36, "hc-middle-y": 0.47, "hc-key": "us-ma", "hc-a2": "MA", "labelrank": "0", "hasc": "US.MA", "woe-id": "2347580", "state-fips": "25", "fips": "US25", "postal-code": "MA", "name": "Massachusetts", "country": "United States of America", "region": "Northeast", "longitude": "-71.99930000000001", "woe-name": "Massachusetts", "latitude": "42.3739", "woe-label": "Massachusetts, US, United States", "type": "State" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[9430, 7889], [9476, 7878], [9436, 7864], [9417, 7844], [9430, 7889]]], [[[9314, 7915], [9312, 7927], [9304, 7921], [9278, 7938], [9254, 7990], [9177, 7968], [8997, 7925], [8860, 7896], [8853, 7901], [8856, 8080], [8922, 8096], [9005, 8115], [9005, 8115], [9222, 8166], [9242, 8201], [9300, 8236], [9318, 8197], [9357, 8186], [9312, 8147], [9299, 8081], [9324, 8091], [9365, 8074], [9428, 7985], [9483, 7974], [9525, 8007], [9501, 8067], [9535, 8028], [9549, 7982], [9504, 7965], [9420, 7906], [9411, 7955], [9371, 7921], [9373, 7898], [9339, 7878], [9327, 7915], [9314, 7915]]]] } }, { "type": "Feature", "id": "US.WA", "properties": { "hc-group": "admin1", "hc-middle-x": 0.56, "hc-middle-y": 0.52, "hc-key": "us-wa", "hc-a2": "WA", "labelrank": "0", "hasc": "US.WA", "woe-id": "2347606", "state-fips": "53", "fips": "US53", "postal-code": "WA", "name": "Washington", "country": "United States of America", "region": "West", "longitude": "-120.361", "woe-name": "Washington", "latitude": "47.4865", "woe-label": "Washington, US, United States", "type": "State" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[-77, 9797], [-56, 9768], [-91, 9757], [-86, 9712], [-136, 9751], [-111, 9756], [-77, 9797]]], [[[-52, 9689], [-85, 9658], [-66, 9645], [-43, 9568], [-77, 9588], [-74, 9635], [-89, 9664], [-52, 9690], [-60, 9697], [-61, 9737], [-31, 9701], [-12, 9731], [-9, 9774], [-33, 9788], [-46, 9839], [-32, 9851], [926, 9593], [767, 8925], [779, 8870], [774, 8822], [398, 8914], [378, 8905], [289, 8922], [163, 8905], [94, 8923], [38, 8914], [-10, 8925], [-22, 8950], [-113, 8979], [-207, 8965], [-283, 9014], [-271, 9096], [-280, 9134], [-321, 9167], [-357, 9171], [-365, 9207], [-400, 9226], [-436, 9219], [-460, 9259], [-436, 9333], [-441, 9279], [-416, 9297], [-401, 9347], [-434, 9357], [-429, 9395], [-369, 9396], [-424, 9436], [-424, 9523], [-410, 9624], [-433, 9678], [-428, 9749], [-385, 9790], [-313, 9713], [-183, 9655], [-161, 9666], [-146, 9623], [-100, 9637], [-95, 9567], [-135, 9518], [-77, 9566], [-112, 9491], [-89, 9426], [-154, 9433], [-175, 9394], [-167, 9449], [-222, 9394], [-157, 9376], [-124, 9418], [-82, 9426], [-82, 9476], [-66, 9527], [-18, 9570], [-37, 9644], [-24, 9661], [-52, 9689]]]] } }, { "type": "Feature", "id": "US.CA", "properties": { "hc-group": "admin1", "hc-middle-x": 0.51, "hc-middle-y": 0.67, "hc-key": "us-ca", "hc-a2": "CA", "labelrank": "0", "hasc": "US.CA", "woe-id": "2347563", "state-fips": "6", "fips": "US06", "postal-code": "CA", "name": "California", "country": "United States of America", "region": "West", "longitude": "-119.591", "woe-name": "California", "latitude": "36.7496", "woe-label": "California, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[-833, 8186], [-50, 7955], [-253, 7203], [32, 6779], [261, 6430], [593, 5936], [620, 5788], [660, 5730], [598, 5702], [559, 5661], [555, 5605], [510, 5537], [489, 5536], [476, 5452], [519, 5416], [492, 5355], [451, 5357], [-76, 5426], [-69, 5467], [-95, 5476], [-84, 5583], [-110, 5649], [-224, 5792], [-276, 5799], [-265, 5822], [-284, 5881], [-342, 5885], [-417, 5946], [-422, 5975], [-484, 6035], [-539, 6046], [-588, 6077], [-659, 6091], [-686, 6135], [-647, 6273], [-691, 6316], [-672, 6333], [-720, 6428], [-742, 6442], [-793, 6601], [-820, 6637], [-816, 6709], [-775, 6726], [-761, 6756], [-778, 6807], [-821, 6819], [-855, 6888], [-842, 6929], [-853, 6979], [-833, 7041], [-810, 7042], [-816, 6985], [-764, 6931], [-772, 6991], [-797, 7030], [-787, 7089], [-738, 7083], [-782, 7126], [-806, 7122], [-833, 7050], [-892, 7126], [-903, 7243], [-983, 7395], [-967, 7420], [-969, 7507], [-943, 7553], [-936, 7629], [-964, 7712], [-999, 7766], [-993, 7813], [-890, 7943], [-849, 8038], [-844, 8118], [-860, 8134], [-833, 8186]]] } }, { "type": "Feature", "id": "US.OR", "properties": { "hc-group": "admin1", "hc-middle-x": 0.47, "hc-middle-y": 0.52, "hc-key": "us-or", "hc-a2": "OR", "labelrank": "0", "hasc": "US.OR", "woe-id": "2347596", "state-fips": "41", "fips": "US41", "postal-code": "OR", "name": "Oregon", "country": "United States of America", "region": "West", "longitude": "-120.386", "woe-name": "Oregon", "latitude": "43.8333", "woe-label": "Oregon, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[-50, 7955], [-833, 8186], [-851, 8223], [-847, 8281], [-817, 8362], [-827, 8415], [-793, 8455], [-756, 8527], [-714, 8570], [-672, 8648], [-594, 8829], [-582, 8877], [-494, 9051], [-493, 9108], [-468, 9158], [-460, 9216], [-396, 9192], [-367, 9202], [-359, 9169], [-321, 9167], [-280, 9134], [-271, 9096], [-283, 9014], [-207, 8965], [-113, 8979], [-22, 8950], [-10, 8925], [38, 8914], [94, 8923], [163, 8905], [289, 8922], [378, 8905], [398, 8914], [774, 8822], [785, 8775], [821, 8744], [823, 8698], [776, 8646], [718, 8545], [624, 8450], [615, 8403], [662, 8361], [616, 8265], [510, 7813], [-50, 7955]]] } }, { "type": "Feature", "id": "US.WI", "properties": { "hc-group": "admin1", "hc-middle-x": 0.41, "hc-middle-y": 0.38, "hc-key": "us-wi", "hc-a2": "WI", "labelrank": "0", "hasc": "US.WI", "woe-id": "2347608", "state-fips": "55", "fips": "US55", "postal-code": "WI", "name": "Wisconsin", "country": "United States of America", "region": "Midwest", "longitude": "-89.5831", "woe-name": "Wisconsin", "latitude": "44.3709", "woe-label": "Wisconsin, US, United States", "type": "State" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[6206, 8297], [6197, 8237], [6159, 8156], [6136, 8180], [6161, 8249], [6206, 8297]]], [[[5575, 7508], [5561, 7544], [5494, 7563], [5465, 7670], [5479, 7702], [5445, 7758], [5431, 7866], [5405, 7892], [5360, 7903], [5273, 7994], [5217, 8029], [5181, 8035], [5136, 8072], [5146, 8117], [5144, 8214], [5158, 8253], [5117, 8285], [5116, 8322], [5147, 8375], [5220, 8422], [5214, 8573], [5245, 8603], [5303, 8589], [5410, 8635], [5449, 8660], [5489, 8656], [5481, 8617], [5508, 8583], [5554, 8572], [5588, 8553], [5611, 8510], [5795, 8473], [5849, 8447], [5968, 8437], [5993, 8394], [6045, 8372], [6042, 8286], [6080, 8287], [6071, 8242], [6096, 8224], [6058, 8180], [6028, 8078], [6049, 8076], [6099, 8156], [6129, 8170], [6153, 8151], [6124, 8019], [6136, 7996], [6101, 7916], [6110, 7860], [6082, 7742], [6089, 7679], [6116, 7626], [6119, 7543], [5780, 7519], [5606, 7509], [5575, 7508]]]] } }, { "type": "Feature", "id": "US.ME", "properties": { "hc-group": "admin1", "hc-middle-x": 0.43, "hc-middle-y": 0.40, "hc-key": "us-me", "hc-a2": "ME", "labelrank": "0", "hasc": "US.ME", "woe-id": "2347578", "state-fips": "23", "fips": "US23", "postal-code": "ME", "name": "Maine", "country": "United States of America", "region": "Northeast", "longitude": "-69.1973", "woe-name": "Maine", "latitude": "45.148", "woe-label": "Maine, US, United States", "type": "State" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[9623, 8727], [9643, 8763], [9665, 8747], [9641, 8690], [9623, 8727]]], [[[9225, 8399], [9079, 8830], [9115, 8824], [9130, 8917], [9168, 8971], [9177, 9035], [9160, 9062], [9160, 9140], [9176, 9161], [9166, 9236], [9238, 9459], [9272, 9467], [9292, 9423], [9319, 9415], [9428, 9491], [9519, 9435], [9630, 9097], [9697, 9099], [9717, 9017], [9747, 8995], [9778, 9009], [9851, 8939], [9818, 8875], [9789, 8883], [9784, 8851], [9706, 8811], [9712, 8773], [9690, 8747], [9669, 8782], [9611, 8766], [9590, 8707], [9615, 8647], [9554, 8716], [9552, 8761], [9517, 8719], [9529, 8622], [9505, 8581], [9483, 8586], [9467, 8544], [9433, 8531], [9420, 8493], [9387, 8524], [9346, 8471], [9362, 8439], [9314, 8347], [9298, 8291], [9235, 8354], [9225, 8399]]]] } }, { "type": "Feature", "id": "US.MI", "properties": { "hc-group": "admin1", "hc-middle-x": 0.71, "hc-middle-y": 0.67, "hc-key": "us-mi", "hc-a2": "MI", "labelrank": "0", "hasc": "US.MI", "woe-id": "2347581", "state-fips": "26", "fips": "US26", "postal-code": "MI", "name": "Michigan", "country": "United States of America", "region": "Midwest", "longitude": "-84.9479", "woe-name": "Michigan", "latitude": "43.4343", "woe-label": "Michigan, US, United States", "type": "State" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[6802, 8561], [6808, 8523], [6764, 8521], [6774, 8565], [6802, 8561]]], [[[5863, 9010], [5834, 8966], [5759, 8913], [5758, 8947], [5863, 9010]]], [[[6976, 7443], [6815, 7415], [6718, 7400], [6716, 7416], [6323, 7372], [6364, 7423], [6399, 7509], [6417, 7630], [6409, 7695], [6330, 7861], [6345, 7903], [6322, 7979], [6361, 8059], [6352, 8141], [6381, 8159], [6381, 8204], [6423, 8217], [6453, 8283], [6469, 8252], [6460, 8196], [6479, 8180], [6501, 8221], [6497, 8298], [6533, 8342], [6567, 8348], [6542, 8410], [6593, 8461], [6646, 8436], [6627, 8469], [6669, 8467], [6654, 8434], [6698, 8433], [6726, 8400], [6837, 8377], [6863, 8359], [6884, 8307], [6860, 8285], [6902, 8213], [6903, 8115], [6872, 8094], [6868, 8040], [6821, 8014], [6824, 7934], [6868, 7920], [6900, 7950], [6937, 8030], [6993, 8059], [7042, 8027], [7097, 7866], [7128, 7802], [7124, 7704], [7066, 7697], [7061, 7631], [7021, 7590], [7008, 7500], [6976, 7443]]], [[[5874, 8741], [5900, 8700], [5901, 8651], [5938, 8693], [6017, 8689], [6049, 8673], [6107, 8596], [6174, 8609], [6192, 8589], [6244, 8596], [6318, 8663], [6430, 8674], [6485, 8705], [6529, 8713], [6518, 8645], [6560, 8631], [6591, 8646], [6609, 8627], [6633, 8653], [6688, 8665], [6692, 8589], [6745, 8536], [6723, 8521], [6631, 8516], [6606, 8530], [6598, 8476], [6541, 8514], [6480, 8529], [6444, 8521], [6426, 8490], [6320, 8470], [6302, 8429], [6244, 8388], [6264, 8448], [6227, 8437], [6192, 8395], [6185, 8444], [6096, 8224], [6071, 8242], [6080, 8287], [6042, 8286], [6045, 8372], [5993, 8394], [5968, 8437], [5849, 8447], [5795, 8473], [5611, 8510], [5588, 8553], [5554, 8572], [5623, 8604], [5661, 8642], [5731, 8656], [5776, 8696], [5805, 8702], [5860, 8764], [5868, 8750], [5893, 8802], [5958, 8837], [6017, 8829], [5931, 8757], [5903, 8703], [5900, 8738], [5874, 8741]]]] } }, { "type": "Feature", "id": "US.NV", "properties": { "hc-group": "admin1", "hc-middle-x": 0.46, "hc-middle-y": 0.38, "hc-key": "us-nv", "hc-a2": "NV", "labelrank": "0", "hasc": "US.NV", "woe-id": "2347587", "state-fips": "32", "fips": "US32", "postal-code": "NV", "name": "Nevada", "country": "United States of America", "region": "West", "longitude": "-117.02", "woe-name": "Nevada", "latitude": "39.4299", "woe-label": "Nevada, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[-50, 7955], [510, 7813], [897, 7727], [1073, 7690], [929, 6975], [818, 6420], [777, 6221], [752, 6180], [669, 6227], [631, 6217], [631, 6159], [611, 6068], [614, 5982], [593, 5936], [261, 6430], [32, 6779], [-253, 7203], [-50, 7955]]] } }, { "type": "Feature", "id": "US.NM", "properties": { "hc-group": "admin1", "hc-middle-x": 0.51, "hc-middle-y": 0.50, "hc-key": "us-nm", "hc-a2": "NM", "labelrank": "0", "hasc": "US.NM", "woe-id": "2347590", "state-fips": "35", "fips": "US35", "postal-code": "NM", "name": "New Mexico", "country": "United States of America", "region": "West", "longitude": "-106.024", "woe-name": "New Mexico", "latitude": "34.5002", "woe-label": "New Mexico, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[1841, 6242], [3091, 6104], [3083, 6007], [3081, 5975], [3072, 5970], [2976, 4810], [2181, 4887], [2208, 4823], [1830, 4873], [1815, 4756], [1630, 4782], [1736, 5514], [1841, 6242]]] } }, { "type": "Feature", "id": "US.CO", "properties": { "hc-group": "admin1", "hc-middle-x": 0.51, "hc-middle-y": 0.50, "hc-key": "us-co", "hc-a2": "CO", "labelrank": "0", "hasc": "US.CO", "woe-id": "2347564", "state-fips": "8", "fips": "US08", "postal-code": "CO", "name": "Colorado", "country": "United States of America", "region": "West", "longitude": "-105.543", "woe-name": "Colorado", "latitude": "38.9998", "woe-label": "Colorado, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[3091, 6104], [1841, 6242], [1966, 7108], [1990, 7269], [2964, 7155], [3357, 7124], [3339, 6866], [3329, 6696], [3290, 6089], [3091, 6104]]] } }, { "type": "Feature", "id": "US.WY", "properties": { "hc-group": "admin1", "hc-middle-x": 0.51, "hc-middle-y": 0.50, "hc-key": "us-wy", "hc-a2": "WY", "labelrank": "0", "hasc": "US.WY", "woe-id": "2347609", "state-fips": "56", "fips": "US56", "postal-code": "WY", "name": "Wyoming", "country": "United States of America", "region": "West", "longitude": "-107.552", "woe-name": "Wyoming", "latitude": "42.9999", "woe-label": "Wyoming, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[2964, 7155], [1990, 7269], [1600, 7329], [1643, 7585], [1677, 7785], [1750, 8226], [1772, 8355], [3056, 8191], [3019, 7770], [3010, 7672], [3002, 7575], [2964, 7155]]] } }, { "type": "Feature", "id": "US.KS", "properties": { "hc-group": "admin1", "hc-middle-x": 0.30, "hc-middle-y": 0.49, "hc-key": "us-ks", "hc-a2": "KS", "labelrank": "0", "hasc": "US.KS", "woe-id": "2347575", "state-fips": "20", "fips": "US20", "postal-code": "KS", "name": "Kansas", "country": "United States of America", "region": "Midwest", "longitude": "-98.3309", "woe-name": "Kansas", "latitude": "38.5", "woe-label": "Kansas, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[3339, 6866], [4682, 6826], [4769, 6780], [4726, 6705], [4767, 6667], [4781, 6624], [4824, 6600], [4833, 6050], [3290, 6089], [3329, 6696], [3339, 6866]]] } }, { "type": "Feature", "id": "US.NE", "properties": { "hc-group": "admin1", "hc-middle-x": 0.43, "hc-middle-y": 0.50, "hc-key": "us-ne", "hc-a2": "NE", "labelrank": "0", "hasc": "US.NE", "woe-id": "2347586", "state-fips": "31", "fips": "US31", "postal-code": "NE", "name": "Nebraska", "country": "United States of America", "region": "Midwest", "longitude": "-99.68550000000001", "woe-name": "Nebraska", "latitude": "41.5002", "woe-label": "Nebraska, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[4682, 6826], [3339, 6866], [3357, 7124], [2964, 7155], [3002, 7575], [3010, 7672], [4071, 7611], [4148, 7558], [4194, 7574], [4297, 7577], [4330, 7551], [4409, 7521], [4453, 7479], [4469, 7474], [4478, 7398], [4515, 7341], [4533, 7291], [4529, 7228], [4559, 7206], [4571, 7165], [4579, 7031], [4592, 6986], [4592, 6981], [4592, 6981], [4591, 6981], [4591, 6981], [4619, 6915], [4682, 6826]]] } }, { "type": "Feature", "id": "US.OK", "properties": { "hc-group": "admin1", "hc-middle-x": 0.78, "hc-middle-y": 0.52, "hc-key": "us-ok", "hc-a2": "OK", "labelrank": "0", "hasc": "US.OK", "woe-id": "2347595", "state-fips": "40", "fips": "US40", "postal-code": "OK", "name": "Oklahoma", "country": "United States of America", "region": "South", "longitude": "-97.1309", "woe-name": "Oklahoma", "latitude": "35.452", "woe-label": "Oklahoma, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[3290, 6089], [4833, 6050], [4833, 6017], [4835, 5920], [4877, 5632], [4875, 5180], [4790, 5207], [4714, 5260], [4685, 5235], [4632, 5257], [4595, 5233], [4559, 5242], [4474, 5191], [4405, 5248], [4360, 5237], [4347, 5258], [4312, 5234], [4304, 5199], [4283, 5247], [4248, 5227], [4181, 5268], [4121, 5246], [4093, 5310], [4007, 5296], [3908, 5334], [3856, 5341], [3842, 5388], [3753, 5388], [3686, 5437], [3707, 5936], [3081, 5975], [3083, 6007], [3091, 6104], [3290, 6089]]] } }, { "type": "Feature", "id": "US.MO", "properties": { "hc-group": "admin1", "hc-middle-x": 0.48, "hc-middle-y": 0.51, "hc-key": "us-mo", "hc-a2": "MO", "labelrank": "0", "hasc": "US.MO", "woe-id": "2347584", "state-fips": "29", "fips": "US29", "postal-code": "MO", "name": "Missouri", "country": "United States of America", "region": "Midwest", "longitude": "-92.446", "woe-name": "Missouri", "latitude": "38.5487", "woe-label": "Missouri, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[4835, 5920], [4833, 6017], [4833, 6050], [4824, 6600], [4781, 6624], [4767, 6667], [4726, 6705], [4769, 6780], [4682, 6826], [4619, 6915], [4591, 6981], [4591, 6981], [4592, 6981], [4846, 6977], [5120, 6985], [5389, 7006], [5449, 6947], [5449, 6947], [5449, 6947], [5436, 6893], [5454, 6813], [5475, 6774], [5540, 6711], [5588, 6679], [5616, 6596], [5642, 6567], [5672, 6592], [5735, 6561], [5692, 6420], [5752, 6350], [5792, 6336], [5873, 6276], [5898, 6211], [5886, 6165], [5918, 6121], [5975, 6097], [5976, 6033], [5956, 5988], [5932, 6005], [5921, 5968], [5911, 5955], [5907, 5967], [5890, 5980], [5893, 5966], [5901, 5936], [5869, 5898], [5888, 5872], [5868, 5834], [5731, 5821], [5790, 5904], [5767, 5957], [4835, 5920]]] } }, { "type": "Feature", "id": "US.IL", "properties": { "hc-group": "admin1", "hc-middle-x": 0.56, "hc-middle-y": 0.45, "hc-key": "us-il", "hc-a2": "IL", "labelrank": "0", "hasc": "US.IL", "woe-id": "2347572", "state-fips": "17", "fips": "US17", "postal-code": "IL", "name": "Illinois", "country": "United States of America", "region": "Midwest", "longitude": "-89.1991", "woe-name": "Illinois", "latitude": "39.946", "woe-label": "Illinois, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[6119, 7543], [6121, 7488], [6192, 7351], [6247, 6739], [6226, 6674], [6254, 6638], [6266, 6585], [6244, 6520], [6222, 6503], [6194, 6422], [6176, 6404], [6179, 6328], [6159, 6283], [6171, 6241], [6102, 6218], [6105, 6131], [6015, 6162], [5987, 6157], [5962, 6117], [5975, 6097], [5918, 6121], [5886, 6165], [5898, 6211], [5873, 6276], [5792, 6336], [5752, 6350], [5692, 6420], [5735, 6561], [5672, 6592], [5642, 6567], [5616, 6596], [5588, 6679], [5540, 6711], [5475, 6774], [5454, 6813], [5436, 6893], [5449, 6947], [5449, 6947], [5449, 6947], [5458, 7004], [5496, 7020], [5535, 7098], [5536, 7132], [5509, 7160], [5523, 7224], [5579, 7232], [5646, 7276], [5671, 7332], [5672, 7411], [5625, 7441], [5575, 7508], [5575, 7508], [5606, 7509], [5848, 7523], [6119, 7543]]] } }, { "type": "Feature", "id": "US.IN", "properties": { "hc-group": "admin1", "hc-middle-x": 0.49, "hc-middle-y": 0.43, "hc-key": "us-in", "hc-a2": "IN", "labelrank": "0", "hasc": "US.IN", "woe-id": "2347573", "state-fips": "18", "fips": "US18", "postal-code": "IN", "name": "Indiana", "country": "United States of America", "region": "Midwest", "longitude": "-86.1396", "woe-name": "Indiana", "latitude": "39.8874", "woe-label": "Indiana, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[6192, 7351], [6239, 7329], [6323, 7372], [6716, 7416], [6718, 7400], [6732, 7296], [6797, 6730], [6792, 6683], [6808, 6651], [6737, 6617], [6682, 6619], [6693, 6572], [6657, 6540], [6652, 6507], [6622, 6498], [6608, 6438], [6583, 6411], [6531, 6450], [6485, 6413], [6485, 6390], [6444, 6379], [6426, 6401], [6359, 6356], [6303, 6376], [6269, 6350], [6209, 6363], [6179, 6328], [6176, 6404], [6194, 6422], [6222, 6503], [6244, 6520], [6266, 6585], [6254, 6638], [6226, 6674], [6247, 6739], [6192, 7351]]] } }, { "type": "Feature", "id": "US.VT", "properties": { "hc-group": "admin1", "hc-middle-x": 0.42, "hc-middle-y": 0.43, "hc-key": "us-vt", "hc-a2": "VT", "labelrank": "0", "hasc": "US.VT", "woe-id": "2347604", "state-fips": "50", "fips": "US50", "postal-code": "VT", "name": "Vermont", "country": "United States of America", "region": "Northeast", "longitude": "-72.7317", "woe-name": "Vermont", "latitude": "44.0886", "woe-label": "Vermont, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[8922, 8096], [8856, 8080], [8807, 8284], [8772, 8287], [8772, 8328], [8740, 8402], [8748, 8453], [8739, 8514], [8720, 8537], [8695, 8646], [8811, 8677], [9024, 8736], [9020, 8661], [9045, 8629], [9033, 8585], [8978, 8526], [8986, 8490], [8981, 8392], [8964, 8320], [8979, 8261], [8979, 8148], [9005, 8115], [9005, 8115], [8922, 8096]]] } }, { "type": "Feature", "id": "US.AR", "properties": { "hc-group": "admin1", "hc-middle-x": 0.47, "hc-middle-y": 0.43, "hc-key": "us-ar", "hc-a2": "AR", "labelrank": "0", "hasc": "US.AR", "woe-id": "2347562", "state-fips": "5", "fips": "US05", "postal-code": "AR", "name": "Arkansas", "country": "United States of America", "region": "South", "longitude": "-92.14279999999999", "woe-name": "Arkansas", "latitude": "34.7563", "woe-label": "Arkansas, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[4975, 5016], [4971, 5157], [4910, 5157], [4875, 5180], [4877, 5632], [4835, 5920], [5767, 5957], [5790, 5904], [5731, 5821], [5868, 5834], [5871, 5791], [5827, 5763], [5835, 5714], [5798, 5670], [5802, 5602], [5762, 5567], [5770, 5547], [5730, 5520], [5706, 5470], [5709, 5414], [5635, 5340], [5647, 5309], [5609, 5297], [5620, 5250], [5583, 5215], [5607, 5162], [5598, 5120], [5618, 5077], [5605, 5041], [5563, 5038], [4975, 5016]]] } }, { "type": "Feature", "id": "US.TX", "properties": { "hc-group": "admin1", "hc-middle-x": 0.69, "hc-middle-y": 0.52, "hc-key": "us-tx", "hc-a2": "TX", "labelrank": "0", "hasc": "US.TX", "woe-id": "2347602", "state-fips": "48", "fips": "US48", "postal-code": "TX", "name": "Texas", "country": "United States of America", "region": "South", "longitude": "-98.7607", "woe-name": "Texas", "latitude": "31.131", "woe-label": "Texas, US, United States", "type": "State" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[4875, 5180], [4910, 5157], [4971, 5157], [4975, 5016], [4980, 4752], [5033, 4679], [5031, 4646], [5105, 4506], [5093, 4447], [5059, 4380], [5065, 4253], [5047, 4228], [5018, 4172], [5032, 4146], [4989, 4147], [4854, 4084], [4875, 4116], [4831, 4102], [4842, 4162], [4778, 4141], [4769, 4106], [4839, 4052], [4789, 4023], [4801, 4063], [4739, 3976], [4638, 3901], [4557, 3881], [4544, 3857], [4451, 3804], [4448, 3787], [4381, 3749], [4308, 3672], [4340, 3735], [4307, 3756], [4261, 3721], [4306, 3712], [4263, 3655], [4221, 3658], [4249, 3617], [4213, 3527], [4195, 3545], [4141, 3510], [4206, 3511], [4178, 3442], [4232, 3206], [4272, 3164], [4203, 3135], [4114, 3192], [4013, 3198], [3979, 3230], [3915, 3245], [3878, 3279], [3810, 3292], [3795, 3375], [3727, 3467], [3715, 3534], [3721, 3603], [3677, 3628], [3595, 3762], [3548, 3801], [3525, 3881], [3477, 3970], [3469, 4021], [3393, 4097], [3411, 4119], [3365, 4132], [3310, 4204], [3150, 4220], [3103, 4248], [3082, 4218], [3018, 4214], [2959, 4096], [2967, 4083], [2896, 4024], [2861, 4031], [2754, 4113], [2695, 4134], [2651, 4187], [2595, 4230], [2567, 4305], [2573, 4370], [2512, 4503], [2437, 4557], [2309, 4714], [2275, 4731], [2239, 4806], [2208, 4823], [2181, 4887], [2976, 4810], [3072, 5970], [3081, 5975], [3707, 5936], [3686, 5437], [3753, 5388], [3842, 5388], [3856, 5341], [3908, 5334], [4007, 5296], [4093, 5310], [4121, 5246], [4181, 5268], [4248, 5227], [4283, 5247], [4304, 5199], [4312, 5234], [4347, 5258], [4360, 5237], [4405, 5248], [4474, 5191], [4559, 5242], [4595, 5233], [4632, 5257], [4685, 5235], [4714, 5260], [4790, 5207], [4875, 5180]]], [[[4269, 3610], [4220, 3493], [4219, 3420], [4245, 3297], [4214, 3394], [4222, 3530], [4269, 3610]]]] } }, { "type": "Feature", "id": "US.RI", "properties": { "hc-group": "admin1", "hc-middle-x": 0.55, "hc-middle-y": 0.78, "hc-key": "us-ri", "hc-a2": "RI", "labelrank": "0", "hasc": "US.RI", "woe-id": "2347598", "state-fips": "44", "fips": "US44", "postal-code": "RI", "name": "Rhode Island", "country": "United States of America", "region": "Northeast", "longitude": "-71.5082", "woe-name": "Rhode Island", "latitude": "41.6242", "woe-label": "Rhode Island, US, United States", "type": "State" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[9339, 7878], [9325, 7871], [9314, 7915], [9327, 7915], [9339, 7878]]], [[[9177, 7968], [9254, 7990], [9278, 7938], [9304, 7921], [9320, 7866], [9285, 7851], [9279, 7822], [9216, 7790], [9212, 7845], [9177, 7968]]]] } }, { "type": "Feature", "id": "US.AL", "properties": { "hc-group": "admin1", "hc-middle-x": 0.47, "hc-middle-y": 0.42, "hc-key": "us-al", "hc-a2": "AL", "labelrank": "0", "hasc": "US.AL", "woe-id": "2347559", "state-fips": "1", "fips": "US01", "postal-code": "AL", "name": "Alabama", "country": "United States of America", "region": "South", "longitude": "-86.7184", "woe-name": "Alabama", "latitude": "32.8551", "woe-label": "Alabama, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[6487, 4443], [6440, 4378], [6291, 4361], [6336, 4375], [6317, 4398], [6267, 4399], [6216, 4788], [6236, 5574], [6215, 5600], [6213, 5603], [6762, 5652], [6912, 5135], [6947, 5053], [6998, 4970], [6970, 4930], [6958, 4846], [6990, 4774], [6983, 4704], [7015, 4637], [6436, 4574], [6431, 4541], [6487, 4486], [6487, 4443]]] } }, { "type": "Feature", "id": "US.MS", "properties": { "hc-group": "admin1", "hc-middle-x": 0.51, "hc-middle-y": 0.48, "hc-key": "us-ms", "hc-a2": "MS", "labelrank": "0", "hasc": "US.MS", "woe-id": "2347583", "state-fips": "28", "fips": "US28", "postal-code": "MS", "name": "Mississippi", "country": "United States of America", "region": "South", "longitude": "-89.71890000000001", "woe-name": "Mississippi", "latitude": "32.8657", "woe-label": "Mississippi, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[6267, 4399], [6164, 4396], [6059, 4360], [6017, 4328], [5936, 4451], [5955, 4536], [5523, 4510], [5540, 4526], [5522, 4581], [5545, 4585], [5545, 4642], [5565, 4662], [5584, 4738], [5636, 4781], [5670, 4868], [5629, 4895], [5611, 4977], [5627, 5018], [5605, 5041], [5618, 5077], [5598, 5120], [5607, 5162], [5583, 5215], [5620, 5250], [5609, 5297], [5647, 5309], [5635, 5340], [5709, 5414], [5706, 5470], [5730, 5520], [5770, 5547], [5762, 5567], [6122, 5592], [6215, 5600], [6236, 5574], [6216, 4788], [6267, 4399]]] } }, { "type": "Feature", "id": "US.NC", "properties": { "hc-group": "admin1", "hc-middle-x": 0.62, "hc-middle-y": 0.50, "hc-key": "us-nc", "hc-a2": "NC", "labelrank": "0", "hasc": "US.NC", "woe-id": "2347592", "state-fips": "37", "fips": "US37", "postal-code": "NC", "name": "North Carolina", "country": "United States of America", "region": "South", "longitude": "-78.866", "woe-name": "North Carolina", "latitude": "35.6152", "woe-label": "North Carolina, US, United States", "type": "State" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[8716, 6394], [8720, 6381], [8694, 6389], [8694, 6389], [8704, 6391], [8705, 6390], [8709, 6392], [8712, 6393], [8716, 6394]]], [[[8727, 6396], [8756, 6332], [8852, 6203], [8782, 6278], [8722, 6395], [8724, 6396], [8727, 6396]]], [[[7532, 6183], [7623, 6187], [7858, 6219], [8691, 6388], [8768, 6281], [8670, 6318], [8707, 6291], [8620, 6230], [8584, 6234], [8581, 6204], [8719, 6244], [8742, 6161], [8737, 6222], [8760, 6252], [8795, 6220], [8797, 6153], [8772, 6164], [8750, 6091], [8709, 6073], [8638, 6097], [8638, 6070], [8551, 6078], [8664, 6053], [8635, 6009], [8661, 6003], [8610, 5957], [8551, 5988], [8590, 5949], [8631, 5940], [8676, 5955], [8686, 5995], [8721, 5956], [8670, 5890], [8565, 5865], [8469, 5764], [8443, 5714], [8432, 5616], [8368, 5624], [8302, 5600], [8029, 5790], [7791, 5756], [7782, 5790], [7714, 5830], [7457, 5802], [7290, 5724], [7210, 5711], [7034, 5685], [7038, 5756], [7073, 5762], [7085, 5807], [7131, 5847], [7188, 5859], [7269, 5928], [7298, 5973], [7352, 6010], [7365, 5989], [7437, 6050], [7464, 6038], [7490, 6093], [7523, 6123], [7532, 6183]]]] } }, { "type": "Feature", "id": "US.VA", "properties": { "hc-group": "admin1", "hc-middle-x": 0.64, "hc-middle-y": 0.54, "hc-key": "us-va", "hc-a2": "VA", "labelrank": "0", "hasc": "US.VA", "woe-id": "2347605", "state-fips": "51", "fips": "US51", "postal-code": "VA", "name": "Virginia", "country": "United States of America", "region": "South", "longitude": "-78.2431", "woe-name": "Virginia", "latitude": "37.7403", "woe-label": "Virginia, US, United States", "type": "State" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[8722, 6395], [8696, 6432], [8704, 6391], [8694, 6389], [8694, 6389], [8686, 6398], [8691, 6388], [7858, 6219], [7623, 6187], [7532, 6183], [7472, 6170], [7116, 6120], [7221, 6173], [7268, 6217], [7309, 6294], [7363, 6332], [7431, 6411], [7470, 6351], [7530, 6341], [7567, 6378], [7595, 6360], [7649, 6382], [7664, 6419], [7690, 6412], [7773, 6459], [7767, 6505], [7840, 6674], [7857, 6759], [7932, 6729], [7974, 6848], [7998, 6837], [8048, 6900], [8072, 6952], [8076, 7028], [8188, 6969], [8198, 7020], [8256, 7009], [8251, 6984], [8341, 6945], [8347, 6939], [8353, 6939], [8367, 6892], [8334, 6870], [8323, 6802], [8347, 6786], [8385, 6812], [8429, 6763], [8484, 6768], [8507, 6740], [8571, 6721], [8572, 6647], [8536, 6648], [8499, 6683], [8431, 6711], [8532, 6636], [8597, 6606], [8561, 6578], [8558, 6548], [8577, 6545], [8611, 6494], [8586, 6478], [8526, 6534], [8449, 6533], [8518, 6510], [8580, 6459], [8619, 6482], [8679, 6482], [8727, 6396], [8724, 6396], [8722, 6395]], [[8558, 6548], [8552, 6548], [8552, 6548], [8552, 6548], [8484, 6605], [8532, 6551], [8552, 6548], [8552, 6548], [8552, 6548], [8557, 6544], [8558, 6548]]], [[[8709, 6392], [8713, 6400], [8716, 6394], [8712, 6393], [8709, 6392]]], [[[8765, 6797], [8756, 6760], [8761, 6796], [8765, 6797]]], [[[8688, 6764], [8691, 6772], [8739, 6789], [8726, 6737], [8674, 6599], [8696, 6561], [8678, 6528], [8652, 6583], [8652, 6652], [8688, 6764]]]] } }, { "type": "Feature", "id": "US.IA", "properties": { "hc-group": "admin1", "hc-middle-x": 0.35, "hc-middle-y": 0.49, "hc-key": "us-ia", "hc-a2": "IA", "labelrank": "0", "hasc": "US.IA", "woe-id": "2347574", "state-fips": "19", "fips": "US19", "postal-code": "IA", "name": "Iowa", "country": "United States of America", "region": "Midwest", "longitude": "-93.3891", "woe-name": "Iowa", "latitude": "42.0423", "woe-label": "Iowa, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[5575, 7508], [5625, 7441], [5672, 7411], [5671, 7332], [5646, 7276], [5579, 7232], [5523, 7224], [5509, 7160], [5536, 7132], [5535, 7098], [5496, 7020], [5458, 7004], [5449, 6947], [5449, 6947], [5449, 6947], [5389, 7006], [5120, 6985], [4846, 6977], [4592, 6981], [4591, 6981], [4579, 7031], [4571, 7165], [4559, 7206], [4529, 7228], [4533, 7291], [4515, 7341], [4478, 7398], [4469, 7474], [4453, 7479], [4423, 7540], [4459, 7636], [4438, 7663], [4433, 7734], [4459, 7735], [5137, 7745], [5445, 7758], [5479, 7702], [5465, 7670], [5494, 7563], [5561, 7544], [5577, 7513], [5575, 7508], [5575, 7508]]] } }, { "type": "Feature", "id": "US.MD", "properties": { "hc-group": "admin1", "hc-middle-x": 0.61, "hc-middle-y": 0.27, "hc-key": "us-md", "hc-a2": "MD", "labelrank": "0", "hasc": "US.MD", "woe-id": "2347579", "state-fips": "24", "fips": "US24", "postal-code": "MD", "name": "Maryland", "country": "United States of America", "region": "South", "longitude": "-77.0454", "woe-name": "Maryland", "latitude": "39.3874", "woe-label": "Maryland, US, United States", "type": "State" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[8761, 6796], [8769, 6819], [8765, 6797], [8761, 6796]]], [[[8779, 6915], [8779, 6884], [8777, 6914], [8777, 6914], [8779, 6915]]], [[[8739, 6789], [8691, 6772], [8688, 6764], [8647, 6746], [8650, 6806], [8590, 6833], [8592, 6815], [8525, 6862], [8581, 6899], [8555, 6926], [8511, 6936], [8544, 6974], [8512, 6986], [8496, 7036], [8530, 7108], [8537, 7165], [8497, 7093], [8472, 7099], [8469, 7056], [8432, 7052], [8471, 7014], [8458, 6959], [8483, 6868], [8513, 6820], [8462, 6849], [8543, 6778], [8548, 6753], [8491, 6782], [8433, 6785], [8382, 6834], [8354, 6797], [8335, 6827], [8370, 6891], [8367, 6916], [8385, 6943], [8341, 6945], [8251, 6984], [8256, 7009], [8198, 7020], [8162, 7087], [8101, 7099], [8046, 7067], [8043, 7043], [8000, 7038], [7977, 7057], [7949, 7003], [7928, 7007], [7857, 6922], [7835, 7053], [8176, 7119], [8559, 7201], [8650, 6887], [8771, 6913], [8770, 6856], [8753, 6848], [8739, 6789]]]] } }, { "type": "Feature", "id": "US.DE", "properties": { "hc-group": "admin1", "hc-middle-x": 0.91, "hc-middle-y": 0.77, "hc-key": "us-de", "hc-a2": "DE", "labelrank": "0", "hasc": "US.DE", "woe-id": "2347566", "state-fips": "10", "fips": "US10", "postal-code": "DE", "name": "Delaware", "country": "United States of America", "region": "South", "longitude": "-75.41119999999999", "woe-name": "Delaware", "latitude": "38.8657", "woe-label": "Delaware, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[8777, 6914], [8771, 6915], [8771, 6913], [8650, 6887], [8559, 7201], [8589, 7239], [8625, 7239], [8601, 7183], [8613, 7145], [8652, 7114], [8675, 7051], [8735, 6995], [8751, 6999], [8779, 6915], [8777, 6914], [8777, 6914]]] } }, { "type": "Feature", "id": "US.PA", "properties": { "hc-group": "admin1", "hc-middle-x": 0.50, "hc-middle-y": 0.49, "hc-key": "us-pa", "hc-a2": "PA", "labelrank": "0", "hasc": "US.PA", "woe-id": "2347597", "state-fips": "42", "fips": "US42", "postal-code": "PA", "name": "Pennsylvania", "country": "United States of America", "region": "Northeast", "longitude": "-77.60939999999999", "woe-name": "Pennsylvania", "latitude": "40.8601", "woe-label": "Pennsylvania, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[8611, 7549], [8632, 7530], [8615, 7490], [8627, 7443], [8646, 7444], [8739, 7361], [8691, 7310], [8673, 7276], [8625, 7239], [8589, 7239], [8559, 7201], [8176, 7119], [7835, 7053], [7630, 7017], [7589, 7253], [7589, 7253], [7530, 7595], [7556, 7610], [7662, 7693], [7674, 7625], [8514, 7797], [8573, 7765], [8588, 7712], [8673, 7663], [8673, 7663], [8611, 7549]]] } }, { "type": "Feature", "id": "US.NJ", "properties": { "hc-group": "admin1", "hc-middle-x": 0.68, "hc-middle-y": 0.64, "hc-key": "us-nj", "hc-a2": "NJ", "labelrank": "0", "hasc": "US.NJ", "woe-id": "2347589", "state-fips": "34", "fips": "US34", "postal-code": "NJ", "name": "New Jersey", "country": "United States of America", "region": "Northeast", "longitude": "-74.4653", "woe-name": "New Jersey", "latitude": "40.0449", "woe-label": "New Jersey, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[8611, 7549], [8673, 7663], [8759, 7635], [8846, 7608], [8840, 7532], [8810, 7504], [8805, 7466], [8866, 7456], [8875, 7438], [8886, 7281], [8853, 7228], [8849, 7172], [8812, 7122], [8784, 7047], [8766, 7040], [8769, 7097], [8716, 7095], [8623, 7151], [8610, 7186], [8624, 7231], [8676, 7269], [8691, 7310], [8739, 7361], [8646, 7444], [8627, 7443], [8615, 7490], [8632, 7530], [8611, 7549]]] } }, { "type": "Feature", "id": "US.NY", "properties": { "hc-group": "admin1", "hc-middle-x": 0.54, "hc-middle-y": 0.49, "hc-key": "us-ny", "hc-a2": "NY", "labelrank": "0", "hasc": "US.NY", "woe-id": "2347591", "state-fips": "36", "fips": "US36", "postal-code": "NY", "name": "New York", "country": "United States of America", "region": "Northeast", "longitude": "-75.32420000000001", "woe-name": "New York", "latitude": "43.1988", "woe-label": "New York, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[8673, 7663], [8588, 7712], [8573, 7765], [8514, 7797], [7674, 7625], [7662, 7693], [7763, 7795], [7803, 7872], [7754, 7932], [7747, 7976], [7812, 8010], [7918, 8040], [7988, 8041], [8031, 8026], [8061, 8043], [8133, 8055], [8180, 8080], [8224, 8141], [8264, 8164], [8243, 8232], [8257, 8274], [8225, 8259], [8202, 8296], [8230, 8345], [8280, 8379], [8297, 8437], [8358, 8526], [8422, 8581], [8453, 8585], [8695, 8646], [8720, 8537], [8739, 8514], [8748, 8453], [8740, 8402], [8772, 8328], [8772, 8287], [8807, 8284], [8856, 8080], [8853, 7901], [8860, 7896], [8896, 7702], [8912, 7685], [8874, 7645], [8896, 7623], [8881, 7575], [8930, 7617], [8982, 7620], [9002, 7641], [9094, 7671], [9134, 7722], [9173, 7697], [9177, 7721], [9184, 7702], [9231, 7730], [9141, 7649], [9083, 7619], [9032, 7570], [8936, 7519], [8857, 7498], [8812, 7468], [8814, 7503], [8840, 7506], [8858, 7554], [8843, 7544], [8846, 7608], [8759, 7635], [8695, 7656], [8673, 7663], [8673, 7663]]] } }, { "type": "Feature", "id": "US.ID", "properties": { "hc-group": "admin1", "hc-middle-x": 0.51, "hc-middle-y": 0.75, "hc-key": "us-id", "hc-a2": "ID", "labelrank": "0", "hasc": "US.ID", "woe-id": "2347571", "state-fips": "16", "fips": "US16", "postal-code": "ID", "name": "Idaho", "country": "United States of America", "region": "West", "longitude": "-114.133", "woe-name": "Idaho", "latitude": "43.7825", "woe-label": "Idaho, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[926, 9593], [1093, 9555], [1036, 9301], [1076, 9210], [1061, 9142], [1117, 9085], [1172, 8979], [1170, 8959], [1219, 8896], [1258, 8897], [1253, 8859], [1219, 8796], [1204, 8727], [1211, 8698], [1177, 8675], [1167, 8620], [1200, 8590], [1278, 8630], [1303, 8596], [1303, 8522], [1338, 8434], [1326, 8419], [1347, 8377], [1374, 8375], [1391, 8331], [1392, 8280], [1415, 8254], [1451, 8281], [1508, 8261], [1536, 8282], [1614, 8258], [1671, 8261], [1686, 8296], [1713, 8295], [1750, 8226], [1677, 7785], [1643, 7585], [1393, 7629], [1073, 7690], [897, 7727], [510, 7813], [616, 8265], [662, 8361], [615, 8403], [624, 8450], [718, 8545], [776, 8646], [823, 8698], [821, 8744], [785, 8775], [774, 8822], [779, 8870], [767, 8925], [926, 9593]]] } }, { "type": "Feature", "id": "US.SD", "properties": { "hc-group": "admin1", "hc-middle-x": 0.51, "hc-middle-y": 0.44, "hc-key": "us-sd", "hc-a2": "SD", "labelrank": "0", "hasc": "US.SD", "woe-id": "2347600", "state-fips": "46", "fips": "US46", "postal-code": "SD", "name": "South Dakota", "country": "United States of America", "region": "Midwest", "longitude": "-100.255", "woe-name": "South Dakota", "latitude": "44.4711", "woe-label": "South Dakota, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[3010, 7672], [3019, 7770], [3056, 8191], [3059, 8191], [3080, 8436], [4231, 8374], [4444, 8372], [4429, 8325], [4387, 8283], [4419, 8232], [4462, 8203], [4459, 7735], [4433, 7734], [4438, 7663], [4459, 7636], [4423, 7540], [4453, 7479], [4409, 7521], [4330, 7551], [4297, 7577], [4194, 7574], [4148, 7558], [4071, 7611], [3010, 7672]]] } }, { "type": "Feature", "id": "US.CT", "properties": { "hc-group": "admin1", "hc-middle-x": 0.48, "hc-middle-y": 0.50, "hc-key": "us-ct", "hc-a2": "CT", "labelrank": "0", "hasc": "US.CT", "woe-id": "2347565", "state-fips": "9", "fips": "US09", "postal-code": "CT", "name": "Connecticut", "country": "United States of America", "region": "Northeast", "longitude": "-72.7594", "woe-name": "Connecticut", "latitude": "41.6486", "woe-label": "Connecticut, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[9216, 7790], [9204, 7796], [9095, 7743], [9023, 7721], [8972, 7689], [8896, 7623], [8874, 7645], [8912, 7685], [8896, 7702], [8860, 7896], [8997, 7925], [9177, 7968], [9212, 7845], [9216, 7790]]] } }, { "type": "Feature", "id": "US.NH", "properties": { "hc-group": "admin1", "hc-middle-x": 0.38, "hc-middle-y": 0.57, "hc-key": "us-nh", "hc-a2": "NH", "labelrank": "0", "hasc": "US.NH", "woe-id": "2347588", "state-fips": "33", "fips": "US33", "postal-code": "NH", "name": "New Hampshire", "country": "United States of America", "region": "Northeast", "longitude": "-71.6301", "woe-name": "New Hampshire", "latitude": "43.5993", "woe-label": "New Hampshire, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[9298, 8291], [9306, 8288], [9300, 8236], [9242, 8201], [9222, 8166], [9005, 8115], [9005, 8115], [8979, 8148], [8979, 8261], [8964, 8320], [8981, 8392], [8986, 8490], [8978, 8526], [9033, 8585], [9045, 8629], [9020, 8661], [9024, 8736], [9036, 8814], [9079, 8830], [9225, 8399], [9235, 8354], [9298, 8291]]] } }, { "type": "Feature", "id": "US.KY", "properties": { "hc-group": "admin1", "hc-middle-x": 0.65, "hc-middle-y": 0.50, "hc-key": "us-ky", "hc-a2": "KY", "labelrank": "0", "hasc": "US.KY", "woe-id": "2347576", "state-fips": "21", "fips": "US21", "postal-code": "KY", "name": "Kentucky", "country": "United States of America", "region": "South", "longitude": "-85.5729", "woe-name": "Kentucky", "latitude": "37.3994", "woe-label": "Kentucky, US, United States", "type": "State" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[5893, 5966], [5890, 5980], [5907, 5967], [5893, 5966]]], [[[5921, 5968], [5932, 6005], [5956, 5988], [5976, 6033], [5975, 6097], [5962, 6117], [5987, 6157], [6015, 6162], [6105, 6131], [6102, 6218], [6171, 6241], [6159, 6283], [6179, 6328], [6209, 6363], [6269, 6350], [6303, 6376], [6359, 6356], [6426, 6401], [6444, 6379], [6485, 6390], [6485, 6413], [6531, 6450], [6583, 6411], [6608, 6438], [6622, 6498], [6652, 6507], [6657, 6540], [6693, 6572], [6682, 6619], [6737, 6617], [6808, 6651], [6792, 6683], [6797, 6730], [6873, 6741], [6900, 6725], [6933, 6672], [7001, 6669], [7036, 6641], [7069, 6664], [7119, 6643], [7198, 6692], [7216, 6653], [7270, 6617], [7270, 6617], [7270, 6617], [7272, 6548], [7358, 6439], [7431, 6411], [7363, 6332], [7309, 6294], [7268, 6217], [7221, 6173], [7116, 6120], [7104, 6113], [6814, 6086], [6751, 6077], [6516, 6061], [6250, 6032], [6200, 6040], [6210, 5991], [5921, 5968]]], [[[7270, 6617], [7271, 6617], [7270, 6617], [7270, 6617], [7270, 6617], [7270, 6617]]]] } }, { "type": "Feature", "id": "US.OH", "properties": { "hc-group": "admin1", "hc-middle-x": 0.45, "hc-middle-y": 0.53, "hc-key": "us-oh", "hc-a2": "OH", "labelrank": "0", "hasc": "US.OH", "woe-id": "2347594", "state-fips": "39", "fips": "US39", "postal-code": "OH", "name": "Ohio", "country": "United States of America", "region": "Midwest", "longitude": "-82.67189999999999", "woe-name": "Ohio", "latitude": "40.0924", "woe-label": "Ohio, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[6718, 7400], [6815, 7415], [6976, 7443], [7095, 7408], [7082, 7394], [7173, 7383], [7258, 7426], [7329, 7440], [7383, 7503], [7530, 7595], [7589, 7253], [7561, 7233], [7587, 7158], [7558, 7018], [7564, 6981], [7504, 6911], [7454, 6903], [7419, 6863], [7399, 6809], [7416, 6775], [7391, 6755], [7354, 6783], [7333, 6723], [7346, 6679], [7321, 6631], [7271, 6617], [7270, 6617], [7216, 6653], [7198, 6692], [7119, 6643], [7069, 6664], [7036, 6641], [7001, 6669], [6933, 6672], [6900, 6725], [6873, 6741], [6797, 6730], [6732, 7296], [6718, 7400]]] } }, { "type": "Feature", "id": "US.TN", "properties": { "hc-group": "admin1", "hc-middle-x": 0.43, "hc-middle-y": 0.54, "hc-key": "us-tn", "hc-a2": "TN", "labelrank": "0", "hasc": "US.TN", "woe-id": "2347601", "state-fips": "47", "fips": "US47", "postal-code": "TN", "name": "Tennessee", "country": "United States of America", "region": "South", "longitude": "-86.3415", "woe-name": "Tennessee", "latitude": "35.7514", "woe-label": "Tennessee, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[6215, 5600], [6122, 5592], [5762, 5567], [5802, 5602], [5798, 5670], [5835, 5714], [5827, 5763], [5871, 5791], [5868, 5834], [5888, 5872], [5869, 5898], [5901, 5936], [5893, 5966], [5907, 5967], [5911, 5955], [5921, 5968], [6210, 5991], [6200, 6040], [6250, 6032], [6516, 6061], [6751, 6077], [6814, 6086], [7104, 6113], [7116, 6120], [7472, 6170], [7532, 6183], [7523, 6123], [7490, 6093], [7464, 6038], [7437, 6050], [7365, 5989], [7352, 6010], [7298, 5973], [7269, 5928], [7188, 5859], [7131, 5847], [7085, 5807], [7073, 5762], [7038, 5756], [7034, 5685], [6918, 5671], [6762, 5652], [6213, 5603], [6215, 5600]]] } }, { "type": "Feature", "id": "US.WV", "properties": { "hc-group": "admin1", "hc-middle-x": 0.35, "hc-middle-y": 0.56, "hc-key": "us-wv", "hc-a2": "WV", "labelrank": "0", "hasc": "US.WV", "woe-id": "2347607", "state-fips": "54", "fips": "US54", "postal-code": "WV", "name": "West Virginia", "country": "United States of America", "region": "South", "longitude": "-80.7128", "woe-name": "West Virginia", "latitude": "38.6422", "woe-label": "West Virginia, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[7270, 6617], [7271, 6617], [7321, 6631], [7346, 6679], [7333, 6723], [7354, 6783], [7391, 6755], [7416, 6775], [7399, 6809], [7419, 6863], [7454, 6903], [7504, 6911], [7564, 6981], [7558, 7018], [7587, 7158], [7561, 7233], [7589, 7253], [7630, 7017], [7835, 7053], [7857, 6922], [7928, 7007], [7949, 7003], [7977, 7057], [8000, 7038], [8043, 7043], [8046, 7067], [8101, 7099], [8162, 7087], [8198, 7020], [8188, 6969], [8076, 7028], [8072, 6952], [8048, 6900], [7998, 6837], [7974, 6848], [7932, 6729], [7857, 6759], [7840, 6674], [7767, 6505], [7773, 6459], [7690, 6412], [7664, 6419], [7649, 6382], [7595, 6360], [7567, 6378], [7530, 6341], [7470, 6351], [7431, 6411], [7358, 6439], [7272, 6548], [7270, 6617], [7270, 6617], [7270, 6617], [7270, 6617], [7270, 6617]]] } }, { "type": "Feature", "id": "US.DC", "properties": { "hc-group": "admin1", "hc-middle-x": 0.57, "hc-middle-y": 0.14, "hc-key": "us-dc", "hc-a2": "DC", "labelrank": "9", "hasc": "US.DC", "woe-id": "2347567", "state-fips": "11", "fips": "US11", "postal-code": "DC", "name": "District of Columbia", "country": "United States of America", "region": "South", "longitude": "-77.01130000000001", "woe-name": "District of Columbia", "latitude": "38.8922", "woe-label": "District of Columbia, US, United States", "type": "Federal District" }, "geometry": { "type": "Polygon", "coordinates": [[[8367, 6916], [8366, 6929], [8353, 6939], [8347, 6939], [8341, 6945], [8385, 6943], [8367, 6916]]] } }, { "type": "Feature", "id": "US.LA", "properties": { "hc-group": "admin1", "hc-middle-x": 0.34, "hc-middle-y": 0.46, "hc-key": "us-la", "hc-a2": "LA", "labelrank": "0", "hasc": "US.LA", "woe-id": "2347577", "state-fips": "22", "fips": "US22", "postal-code": "LA", "name": "Louisiana", "country": "United States of America", "region": "South", "longitude": "-91.9991", "woe-name": "Louisiana", "latitude": "30.5274", "woe-label": "Louisiana, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[6017, 4328], [5915, 4340], [5856, 4368], [5812, 4302], [5834, 4283], [5904, 4280], [5937, 4313], [5992, 4313], [5957, 4259], [6001, 4245], [6035, 4298], [6067, 4259], [5982, 4181], [6027, 4123], [6107, 4114], [6148, 4081], [6125, 4035], [6070, 4042], [6042, 4077], [5966, 4094], [5980, 4115], [5902, 4141], [5913, 4064], [5876, 4028], [5860, 4066], [5811, 4082], [5780, 4036], [5724, 4031], [5620, 4068], [5631, 4121], [5569, 4128], [5532, 4184], [5493, 4173], [5494, 4203], [5430, 4175], [5437, 4145], [5478, 4154], [5526, 4139], [5500, 4112], [5431, 4136], [5399, 4121], [5305, 4135], [5186, 4176], [5128, 4173], [5042, 4153], [5047, 4228], [5065, 4253], [5059, 4380], [5093, 4447], [5105, 4506], [5031, 4646], [5033, 4679], [4980, 4752], [4975, 5016], [5563, 5038], [5605, 5041], [5627, 5018], [5611, 4977], [5629, 4895], [5670, 4868], [5636, 4781], [5584, 4738], [5565, 4662], [5545, 4642], [5545, 4585], [5522, 4581], [5540, 4526], [5523, 4510], [5955, 4536], [5936, 4451], [6017, 4328]]] } }, { "type": "Feature", "id": "US.FL", "properties": { "hc-group": "admin1", "hc-middle-x": 0.77, "hc-middle-y": 0.50, "hc-key": "us-fl", "hc-a2": "FL", "labelrank": "0", "hasc": "US.FL", "woe-id": "2347568", "state-fips": "12", "fips": "US12", "postal-code": "FL", "name": "Florida", "country": "United States of America", "region": "South", "longitude": "-81.6228", "woe-name": "Florida", "latitude": "28.1568", "woe-label": "Florida, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[6487, 4443], [6487, 4486], [6431, 4541], [6436, 4574], [7015, 4637], [7055, 4568], [7649, 4609], [7670, 4559], [7699, 4566], [7687, 4660], [7713, 4686], [7808, 4673], [7822, 4672], [7849, 4570], [7908, 4430], [8008, 4269], [8125, 4130], [8113, 4109], [8144, 4012], [8198, 3936], [8297, 3758], [8321, 3651], [8331, 3476], [8302, 3361], [8313, 3273], [8270, 3209], [8291, 3273], [8273, 3290], [8230, 3255], [8194, 3260], [8141, 3234], [8115, 3258], [8115, 3303], [8070, 3379], [7979, 3429], [7953, 3420], [7907, 3543], [7846, 3536], [7839, 3654], [7796, 3674], [7819, 3634], [7779, 3640], [7675, 3779], [7722, 3884], [7712, 3915], [7671, 3899], [7670, 3851], [7622, 3872], [7618, 3966], [7635, 4045], [7626, 4157], [7576, 4229], [7525, 4222], [7473, 4277], [7425, 4302], [7349, 4395], [7265, 4433], [7186, 4403], [7198, 4370], [7162, 4370], [7148, 4336], [7067, 4277], [6979, 4284], [6986, 4316], [6958, 4349], [6892, 4391], [6798, 4429], [6694, 4444], [6468, 4388], [6505, 4431], [6487, 4443]]] } }, { "type": "Feature", "id": "US.GA", "properties": { "hc-group": "admin1", "hc-middle-x": 0.43, "hc-middle-y": 0.52, "hc-key": "us-ga", "hc-a2": "GA", "labelrank": "0", "hasc": "US.GA", "woe-id": "2347569", "state-fips": "13", "fips": "US13", "postal-code": "GA", "name": "Georgia", "country": "United States of America", "region": "South", "longitude": "-83.4078", "woe-name": "Georgia", "latitude": "32.8547", "woe-label": "Georgia, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[7713, 4686], [7687, 4660], [7699, 4566], [7670, 4559], [7649, 4609], [7055, 4568], [7015, 4637], [6983, 4704], [6990, 4774], [6958, 4846], [6970, 4930], [6998, 4970], [6947, 5053], [6912, 5135], [6762, 5652], [6918, 5671], [7034, 5685], [7210, 5711], [7290, 5724], [7249, 5641], [7323, 5596], [7364, 5593], [7401, 5526], [7444, 5475], [7523, 5430], [7538, 5402], [7600, 5369], [7606, 5340], [7651, 5293], [7708, 5272], [7750, 5169], [7800, 5140], [7844, 5042], [7887, 5035], [7901, 5029], [7811, 4893], [7836, 4826], [7798, 4798], [7817, 4730], [7808, 4673], [7713, 4686]]] } }, { "type": "Feature", "id": "US.SC", "properties": { "hc-group": "admin1", "hc-middle-x": 0.54, "hc-middle-y": 0.35, "hc-key": "us-sc", "hc-a2": "SC", "labelrank": "0", "hasc": "US.SC", "woe-id": "2347599", "state-fips": "45", "fips": "US45", "postal-code": "SC", "name": "South Carolina", "country": "United States of America", "region": "South", "longitude": "-80.6471", "woe-name": "South Carolina", "latitude": "33.8578", "woe-label": "South Carolina, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[8302, 5600], [8236, 5523], [8205, 5458], [8206, 5396], [8173, 5348], [8140, 5346], [8131, 5311], [8056, 5219], [7989, 5173], [7913, 5166], [7971, 5149], [7887, 5035], [7844, 5042], [7800, 5140], [7750, 5169], [7708, 5272], [7651, 5293], [7606, 5340], [7600, 5369], [7538, 5402], [7523, 5430], [7444, 5475], [7401, 5526], [7364, 5593], [7323, 5596], [7249, 5641], [7290, 5724], [7457, 5802], [7714, 5830], [7782, 5790], [7791, 5756], [8029, 5790], [8302, 5600]]] } }, { "type": "Feature", "id": "US.MN", "properties": { "hc-group": "admin1", "hc-middle-x": 0.38, "hc-middle-y": 0.60, "hc-key": "us-mn", "hc-a2": "MN", "labelrank": "0", "hasc": "US.MN", "woe-id": "2347582", "state-fips": "27", "fips": "US27", "postal-code": "MN", "name": "Minnesota", "country": "United States of America", "region": "Midwest", "longitude": "-93.364", "woe-name": "Minnesota", "latitude": "46.0592", "woe-label": "Minnesota, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[4333, 9174], [4688, 9173], [4690, 9272], [4748, 9253], [4770, 9125], [4791, 9104], [4854, 9085], [4916, 9083], [4938, 9052], [4984, 9060], [5024, 9084], [5073, 9082], [5132, 9063], [5181, 8985], [5194, 9006], [5240, 9014], [5304, 8955], [5351, 8941], [5438, 8996], [5463, 8964], [5570, 8974], [5607, 8949], [5668, 8950], [5592, 8895], [5514, 8864], [5432, 8802], [5349, 8700], [5245, 8603], [5214, 8573], [5220, 8422], [5147, 8375], [5116, 8322], [5117, 8285], [5158, 8253], [5144, 8214], [5146, 8117], [5136, 8072], [5181, 8035], [5217, 8029], [5273, 7994], [5360, 7903], [5405, 7892], [5431, 7866], [5445, 7758], [5137, 7745], [4459, 7735], [4462, 8203], [4419, 8232], [4387, 8283], [4429, 8325], [4444, 8372], [4436, 8472], [4402, 8555], [4409, 8628], [4397, 8650], [4394, 8777], [4347, 8957], [4343, 9053], [4353, 9083], [4333, 9174]]] } }, { "type": "Feature", "id": "US.MT", "properties": { "hc-group": "admin1", "hc-middle-x": 0.55, "hc-middle-y": 0.53, "hc-key": "us-mt", "hc-a2": "MT", "labelrank": "0", "hasc": "US.MT", "woe-id": "2347585", "state-fips": "30", "fips": "US30", "postal-code": "MT", "name": "Montana", "country": "United States of America", "region": "West", "longitude": "-110.044", "woe-name": "Montana", "latitude": "46.9965", "woe-label": "Montana, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[1093, 9555], [1689, 9433], [3150, 9234], [3084, 8486], [3080, 8436], [3059, 8191], [3056, 8191], [1772, 8355], [1750, 8226], [1713, 8295], [1686, 8296], [1671, 8261], [1614, 8258], [1536, 8282], [1508, 8261], [1451, 8281], [1415, 8254], [1392, 8280], [1391, 8331], [1374, 8375], [1347, 8377], [1326, 8419], [1338, 8434], [1303, 8522], [1303, 8596], [1278, 8630], [1200, 8590], [1167, 8620], [1177, 8675], [1211, 8698], [1204, 8727], [1219, 8796], [1253, 8859], [1258, 8897], [1219, 8896], [1170, 8959], [1172, 8979], [1117, 9085], [1061, 9142], [1076, 9210], [1036, 9301], [1093, 9555]]] } }, { "type": "Feature", "id": "US.ND", "properties": { "hc-group": "admin1", "hc-middle-x": 0.47, "hc-middle-y": 0.50, "hc-key": "us-nd", "hc-a2": "ND", "labelrank": "0", "hasc": "US.ND", "woe-id": "2347593", "state-fips": "38", "fips": "US38", "postal-code": "ND", "name": "North Dakota", "country": "United States of America", "region": "Midwest", "longitude": "-100.302", "woe-name": "North Dakota", "latitude": "47.4675", "woe-label": "North Dakota, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[3080, 8436], [3084, 8486], [3150, 9234], [3468, 9209], [4333, 9174], [4353, 9083], [4343, 9053], [4347, 8957], [4394, 8777], [4397, 8650], [4409, 8628], [4402, 8555], [4436, 8472], [4444, 8372], [4231, 8374], [3080, 8436]]] } }, { "type": "Feature", "id": "US.AZ", "properties": { "hc-group": "admin1", "hc-middle-x": 0.51, "hc-middle-y": 0.45, "hc-key": "us-az", "hc-a2": "AZ", "labelrank": "0", "hasc": "US.AZ", "woe-id": "2347561", "state-fips": "4", "fips": "US04", "postal-code": "AZ", "name": "Arizona", "country": "United States of America", "region": "West", "longitude": "-111.935", "woe-name": "Arizona", "latitude": "34.3046", "woe-label": "Arizona, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[1630, 4782], [1196, 4850], [1092, 4906], [418, 5307], [451, 5357], [492, 5355], [519, 5416], [476, 5452], [489, 5536], [510, 5537], [555, 5605], [559, 5661], [598, 5702], [660, 5730], [620, 5788], [593, 5936], [614, 5982], [611, 6068], [631, 6159], [631, 6217], [669, 6227], [752, 6180], [777, 6221], [818, 6420], [1488, 6297], [1841, 6242], [1736, 5514], [1630, 4782]]] } }, { "type": "Feature", "id": "US.UT", "properties": { "hc-group": "admin1", "hc-middle-x": 0.52, "hc-middle-y": 0.59, "hc-key": "us-ut", "hc-a2": "UT", "labelrank": "0", "hasc": "US.UT", "woe-id": "2347603", "state-fips": "49", "fips": "US49", "postal-code": "UT", "name": "Utah", "country": "United States of America", "region": "West", "longitude": "-111.544", "woe-name": "Utah", "latitude": "39.5007", "woe-label": "Utah, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[1841, 6242], [1488, 6297], [818, 6420], [929, 6975], [1073, 7690], [1393, 7629], [1643, 7585], [1600, 7329], [1990, 7269], [1966, 7108], [1841, 6242]]] } }, { "type": "Feature", "id": "US.HI", "properties": { "hc-group": "admin1", "hc-middle-x": 0.87, "hc-middle-y": 0.79, "hc-key": "us-hi", "hc-a2": "HI", "labelrank": "0", "hasc": "US.HI", "woe-id": "2347570", "state-fips": "15", "fips": "US15", "postal-code": "HI", "name": "Hawaii", "country": "United States of America", "region": "West", "longitude": "-157.999", "woe-name": "Hawaii", "latitude": "21.4919", "woe-label": "Hawaii, US, United States", "type": "State" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[2871.1, 2945.9], [2875.2, 2942.7], [2879.9, 2943.9], [2887.0, 2943.5], [2908.4, 2936.0], [2926.2, 2927.0], [2959.3, 2906.2], [2969.8, 2895.8], [2975.6, 2888.1], [2975.6, 2868.8], [2976.2, 2860.2], [2981.8, 2860.4], [2989.5, 2864.1], [2995.3, 2860.2], [2998.0, 2855.8], [2997.4, 2846.7], [3000.1, 2841.1], [3003.5, 2836.0], [3013.7, 2826.7], [3024.4, 2822.1], [3028.7, 2818.5], [3031.0, 2814.1], [3030.4, 2808.4], [3019.0, 2794.3], [3010.1, 2790.9], [2997.5, 2778.6], [2988.9, 2776.0], [2988.6, 2773.6], [2981.4, 2771.8], [2975.3, 2767.2], [2953.3, 2760.6], [2944.8, 2762.6], [2939.9, 2762.7], [2935.5, 2761.3], [2924.6, 2753.9], [2920.9, 2749.4], [2913.7, 2747.3], [2906.4, 2742.2], [2896.2, 2736.4], [2893.2, 2735.4], [2884.5, 2727.0], [2883.0, 2723.6], [2883.3, 2715.9], [2873.3, 2705.7], [2870.1, 2696.8], [2867.2, 2693.6], [2858.8, 2686.4], [2857.0, 2687.4], [2857.1, 2692.0], [2852.9, 2695.4], [2844.7, 2699.6], [2830.0, 2708.8], [2817.8, 2712.1], [2815.1, 2719.8], [2812.5, 2720.6], [2810.9, 2726.2], [2809.3, 2735.1], [2811.5, 2745.8], [2816.0, 2776.4], [2815.6, 2781.7], [2812.9, 2786.6], [2805.6, 2807.3], [2801.6, 2814.3], [2802.1, 2818.9], [2799.7, 2823.2], [2796.3, 2833.9], [2792.8, 2839.1], [2789.8, 2841.4], [2785.4, 2846.6], [2780.6, 2859.9], [2784.8, 2870.8], [2795.1, 2879.5], [2796.2, 2883.5], [2799.0, 2885.8], [2807.4, 2888.9], [2813.4, 2898.4], [2817.9, 2906.3], [2822.3, 2911.4], [2825.4, 2911.5], [2827.7, 2920.9], [2826.3, 2924.9], [2822.9, 2928.1], [2815.9, 2938.7], [2813.0, 2947.9], [2812.4, 2962.2], [2816.2, 2969.6], [2818.8, 2972.0], [2826.0, 2972.0], [2844.7, 2968.0], [2850.0, 2958.0], [2857.7, 2955.0], [2862.8, 2952.2], [2866.3, 2948.0], [2871.1, 2945.9]]], [[[2685.2, 3028.0], [2683.1, 3024.1], [2677.4, 3024.1], [2672.1, 3025.0], [2662.7, 3023.0], [2656.2, 3022.3], [2651.9, 3026.6], [2654.3, 3029.7], [2658.6, 3033.4], [2670.2, 3040.4], [2675.5, 3042.3], [2679.6, 3041.9], [2684.7, 3036.2], [2682.1, 3030.0], [2685.2, 3028.0]]], [[[2609.3, 3070.6], [2599.6, 3070.1], [2595.6, 3075.8], [2594.6, 3080.7], [2594.3, 3089.5], [2593.6, 3094.0], [2590.2, 3096.0], [2581.9, 3099.3], [2579.4, 3103.3], [2581.0, 3107.7], [2585.7, 3110.1], [2594.0, 3111.1], [2613.5, 3108.3], [2622.3, 3100.4], [2628.7, 3093.1], [2631.3, 3086.9], [2630.0, 3083.4], [2625.7, 3076.7], [2616.7, 3072.6], [2609.3, 3070.6]]], [[[2673.9, 3132.2], [2675.6, 3130.2], [2683.4, 3127.1], [2684.3, 3124.4], [2686.7, 3123.7], [2687.2, 3118.4], [2690.0, 3115.9], [2695.5, 3106.3], [2699.0, 3106.6], [2701.3, 3109.2], [2705.1, 3109.1], [2716.1, 3110.5], [2722.5, 3115.1], [2725.7, 3116.2], [2732.1, 3116.5], [2743.2, 3114.2], [2746.4, 3112.2], [2747.4, 3109.8], [2752.3, 3104.5], [2758.6, 3099.6], [2758.8, 3097.7], [2762.9, 3098.7], [2765.5, 3096.6], [2767.9, 3092.2], [2774.8, 3091.2], [2781.6, 3088.0], [2791.4, 3084.8], [2795.9, 3075.7], [2794.9, 3067.4], [2791.3, 3060.7], [2786.3, 3059.3], [2782.2, 3053.3], [2776.8, 3053.2], [2766.0, 3047.7], [2754.9, 3048.2], [2751.2, 3048.0], [2731.5, 3038.5], [2721.5, 3040.8], [2718.9, 3040.1], [2710.5, 3039.7], [2704.9, 3044.9], [2701.6, 3049.9], [2703.3, 3051.3], [2703.4, 3055.1], [2701.8, 3068.9], [2700.2, 3072.7], [2700.3, 3077.0], [2699.0, 3080.5], [2694.8, 3083.7], [2688.7, 3082.3], [2687.7, 3079.4], [2685.2, 3078.9], [2679.4, 3082.6], [2675.0, 3083.4], [2670.7, 3086.1], [2667.9, 3085.8], [2660.5, 3094.3], [2655.0, 3101.5], [2654.7, 3106.1], [2652.7, 3108.6], [2654.7, 3118.8], [2656.5, 3123.8], [2658.6, 3127.1], [2661.1, 3127.3], [2664.7, 3132.0], [2668.7, 3131.6], [2672.3, 3133.2], [2673.9, 3132.2]]], [[[2542.4, 3172.8], [2550.3, 3172.5], [2552.8, 3171.9], [2554.4, 3169.4], [2557.4, 3169.4], [2586.4, 3165.0], [2594.1, 3164.7], [2596.9, 3170.6], [2598.9, 3171.1], [2601.5, 3167.6], [2602.5, 3163.6], [2612.6, 3161.0], [2622.6, 3161.3], [2627.0, 3161.9], [2631.9, 3163.6], [2637.2, 3163.5], [2642.1, 3162.2], [2644.1, 3162.6], [2646.1, 3160.1], [2650.7, 3159.2], [2646.9, 3152.3], [2640.8, 3146.4], [2633.3, 3142.2], [2625.8, 3139.1], [2618.1, 3137.5], [2610.3, 3138.3], [2602.5, 3139.8], [2587.1, 3143.9], [2577.6, 3147.2], [2554.7, 3145.6], [2547.6, 3144.5], [2537.6, 3144.7], [2533.7, 3146.2], [2531.4, 3149.3], [2531.3, 3153.2], [2535.1, 3159.1], [2538.7, 3160.4], [2541.9, 3164.2], [2542.9, 3168.2], [2540.2, 3172.9], [2542.4, 3172.8]]], [[[2414.1, 3252.1], [2415.3, 3248.5], [2417.5, 3247.3], [2418.6, 3243.6], [2422.1, 3243.3], [2425.5, 3238.6], [2425.5, 3233.8], [2422.8, 3232.6], [2424.3, 3223.3], [2428.6, 3221.7], [2432.0, 3216.6], [2435.0, 3215.5], [2437.4, 3213.2], [2440.6, 3217.4], [2437.6, 3219.4], [2437.9, 3221.8], [2440.1, 3222.8], [2448.0, 3221.2], [2445.1, 3218.3], [2444.8, 3211.6], [2448.1, 3209.6], [2451.4, 3205.2], [2450.5, 3202.8], [2453.3, 3197.1], [2461.8, 3192.0], [2463.0, 3190.8], [2453.8, 3181.6], [2451.7, 3180.9], [2451.1, 3184.2], [2449.4, 3185.6], [2439.8, 3183.8], [2433.5, 3180.0], [2429.0, 3180.6], [2426.4, 3184.7], [2416.6, 3189.1], [2413.7, 3194.2], [2413.7, 3196.2], [2409.6, 3193.0], [2411.6, 3190.7], [2403.3, 3190.2], [2404.6, 3191.8], [2399.9, 3193.0], [2399.1, 3199.7], [2405.5, 3202.8], [2406.3, 3204.6], [2400.6, 3208.2], [2398.9, 3204.7], [2394.5, 3208.7], [2395.9, 3202.7], [2394.8, 3202.0], [2388.7, 3207.1], [2390.1, 3203.7], [2397.6, 3196.7], [2396.6, 3193.5], [2393.0, 3192.0], [2373.9, 3188.4], [2369.7, 3190.8], [2368.0, 3197.9], [2365.9, 3203.5], [2361.4, 3209.6], [2357.7, 3211.5], [2356.8, 3217.1], [2355.5, 3220.1], [2349.9, 3224.5], [2347.5, 3228.2], [2347.2, 3238.6], [2345.9, 3240.5], [2337.4, 3247.6], [2345.9, 3249.6], [2354.3, 3250.0], [2368.8, 3249.7], [2370.5, 3253.5], [2374.1, 3255.5], [2379.9, 3260.1], [2379.6, 3261.3], [2382.9, 3267.5], [2390.2, 3273.8], [2396.5, 3275.6], [2400.5, 3274.5], [2406.2, 3268.8], [2409.8, 3262.0], [2408.9, 3258.2], [2414.1, 3252.1]]], [[[1955.8, 3294.7], [1953.2, 3293.9], [1948.4, 3296.6], [1946.0, 3304.1], [1946.6, 3308.8], [1948.8, 3313.7], [1956.7, 3321.5], [1963.0, 3326.1], [1971.1, 3330.6], [1973.3, 3335.9], [1973.1, 3339.8], [1976.7, 3341.3], [1980.1, 3341.2], [1983.8, 3339.7], [1985.5, 3336.0], [1981.3, 3331.1], [1979.8, 3326.6], [1981.2, 3321.0], [1978.5, 3317.4], [1972.1, 3314.3], [1968.3, 3313.2], [1961.2, 3308.2], [1959.7, 3305.0], [1955.8, 3294.7]]], [[[2117.8, 3386.1], [2120.7, 3384.6], [2123.8, 3384.8], [2127.6, 3382.7], [2129.1, 3379.5], [2132.9, 3376.7], [2134.9, 3369.7], [2136.6, 3368.7], [2136.1, 3360.5], [2134.2, 3358.0], [2131.3, 3350.1], [2128.4, 3348.5], [2128.0, 3342.6], [2128.8, 3334.9], [2128.0, 3329.3], [2123.0, 3328.3], [2125.2, 3324.9], [2121.7, 3323.7], [2118.3, 3320.9], [2116.9, 3318.4], [2109.4, 3313.0], [2107.3, 3310.8], [2098.5, 3314.0], [2089.0, 3314.5], [2078.6, 3316.4], [2076.9, 3318.0], [2074.0, 3315.9], [2073.1, 3317.6], [2068.2, 3320.6], [2065.1, 3326.1], [2062.8, 3326.7], [2060.0, 3329.4], [2056.1, 3330.0], [2050.6, 3332.5], [2043.4, 3334.4], [2041.2, 3340.1], [2038.1, 3343.0], [2038.3, 3352.8], [2040.3, 3353.5], [2048.5, 3363.0], [2049.2, 3368.3], [2052.4, 3371.8], [2062.1, 3374.2], [2067.8, 3377.5], [2071.4, 3380.6], [2076.1, 3382.7], [2077.8, 3384.8], [2086.0, 3386.8], [2088.1, 3384.2], [2095.7, 3382.1], [2095.7, 3385.2], [2099.3, 3386.6], [2107.5, 3385.9], [2111.6, 3384.7], [2115.5, 3387.5], [2117.8, 3386.1]]]] } }, { "type": "Feature", "id": "US.AK", "properties": { "hc-group": "admin1", "hc-middle-x": 0.53, "hc-middle-y": 0.33, "hc-key": "us-ak", "hc-a2": "AK", "labelrank": "0", "hasc": "US.AK", "woe-id": "2347560", "state-fips": "2", "fips": "US02", "postal-code": "AK", "name": "Alaska", "country": "United States of America", "region": "West", "longitude": "-151.604", "woe-name": "Alaska", "latitude": "65.3609", "woe-label": "Alaska, US, United States", "type": "State" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[322, 4275], [321, 4280], [339, 4292], [360, 4283], [392, 4281], [424, 4297], [443, 4318], [478, 4297], [476, 4285], [459, 4279], [461, 4263], [472, 4263], [490, 4288], [507, 4272], [503, 4256], [519, 4248], [528, 4258], [548, 4257], [582, 4240], [564, 4217], [594, 4212], [584, 4202], [611, 4198], [655, 4200], [684, 4194], [704, 4174], [712, 4178], [723, 4165], [746, 4156], [788, 4155], [808, 4136], [832, 4134], [851, 4144], [877, 4147], [901, 4136], [913, 4120], [929, 4117], [943, 4100], [957, 4101], [989, 3159], [1039, 3148], [1057, 3163], [1084, 3166], [1081, 3138], [1107, 3121], [1113, 3108], [1167, 3060], [1180, 3028], [1208, 3055], [1220, 3056], [1229, 3102], [1271, 3127], [1297, 3104], [1295, 3091], [1335, 3059], [1347, 3039], [1367, 3031], [1397, 3002], [1477, 2890], [1491, 2875], [1490, 2858], [1504, 2853], [1511, 2833], [1523, 2836], [1613, 2802], [1622, 2783], [1617, 2766], [1636, 2722], [1622, 2680], [1606, 2663], [1592, 2664], [1577, 2702], [1585, 2718], [1577, 2755], [1555, 2778], [1526, 2764], [1520, 2723], [1499, 2746], [1510, 2753], [1513, 2796], [1473, 2829], [1468, 2844], [1424, 2880], [1406, 2878], [1414, 2903], [1397, 2917], [1390, 2938], [1366, 2963], [1364, 2998], [1355, 2976], [1348, 2979], [1354, 2974], [1334, 2977], [1331, 2984], [1344, 2982], [1324, 2991], [1283, 3075], [1286, 3041], [1310, 2985], [1307, 2971], [1288, 2985], [1264, 2982], [1266, 2998], [1249, 3031], [1245, 3018], [1199, 3046], [1202, 3028], [1224, 3026], [1254, 2995], [1255, 2977], [1229, 2976], [1225, 2963], [1169, 2999], [1134, 3041], [1085, 3062], [1050, 3083], [1069, 3102], [1060, 3119], [1025, 3098], [969, 3113], [977, 3128], [953, 3122], [899, 3136], [842, 3125], [826, 3141], [792, 3157], [802, 3194], [788, 3179], [783, 3158], [761, 3173], [742, 3174], [759, 3196], [727, 3195], [706, 3205], [716, 3212], [705, 3227], [679, 3222], [658, 3229], [636, 3221], [637, 3247], [620, 3199], [631, 3213], [642, 3184], [628, 3167], [614, 3132], [576, 3140], [552, 3130], [545, 3108], [537, 3114], [509, 3089], [521, 3115], [493, 3078], [478, 3071], [455, 3077], [433, 3070], [426, 3086], [455, 3099], [483, 3126], [457, 3115], [438, 3133], [464, 3170], [478, 3204], [473, 3223], [491, 3228], [524, 3249], [543, 3235], [554, 3240], [588, 3228], [544, 3260], [549, 3268], [527, 3271], [524, 3284], [490, 3256], [469, 3252], [424, 3205], [428, 3196], [407, 3182], [408, 3170], [377, 3133], [343, 3131], [339, 3114], [317, 3109], [309, 3075], [334, 3075], [352, 3048], [305, 3020], [308, 3008], [287, 2998], [271, 2977], [246, 2981], [222, 2955], [212, 2964], [200, 2941], [186, 2947], [152, 2925], [163, 2924], [146, 2893], [133, 2901], [107, 2879], [96, 2891], [89, 2869], [73, 2877], [24, 2852], [40, 2842], [7, 2817], [-44, 2808], [-61, 2821], [-118, 2794], [-130, 2803], [-155, 2792], [-167, 2799], [-155, 2816], [-167, 2823], [-200, 2781], [-223, 2772], [-230, 2808], [-252, 2775], [-262, 2795], [-286, 2772], [-278, 2800], [-223, 2823], [-171, 2853], [-115, 2850], [-113, 2838], [-84, 2825], [-99, 2845], [-80, 2870], [-38, 2892], [12, 2907], [27, 2896], [31, 2922], [57, 2946], [97, 2964], [126, 3051], [154, 3072], [156, 3089], [95, 3074], [79, 3099], [90, 3123], [60, 3099], [61, 3072], [44, 3066], [28, 3121], [8, 3111], [-6, 3123], [-7, 3147], [-37, 3132], [-62, 3132], [-69, 3120], [-112, 3131], [-85, 3135], [-82, 3162], [-87, 3191], [-63, 3208], [-76, 3277], [-72, 3305], [-89, 3269], [-149, 3267], [-172, 3278], [-167, 3295], [-184, 3332], [-198, 3342], [-212, 3370], [-166, 3383], [-134, 3368], [-125, 3345], [-109, 3358], [-131, 3376], [-161, 3385], [-185, 3401], [-173, 3407], [-186, 3433], [-191, 3419], [-205, 3460], [-194, 3469], [-211, 3484], [-189, 3485], [-198, 3504], [-175, 3498], [-170, 3526], [-130, 3555], [-118, 3553], [-108, 3582], [-85, 3606], [-61, 3612], [-46, 3602], [-34, 3577], [-22, 3576], [7, 3591], [28, 3609], [31, 3600], [76, 3594], [100, 3613], [106, 3664], [92, 3688], [125, 3701], [117, 3734], [102, 3721], [73, 3725], [45, 3711], [20, 3709], [8, 3729], [-28, 3742], [-59, 3740], [-101, 3771], [-108, 3789], [-98, 3804], [-111, 3837], [-95, 3829], [-73, 3837], [-119, 3868], [-138, 3897], [-124, 3909], [-95, 3914], [-87, 3908], [-68, 3921], [-2, 3935], [36, 3937], [67, 3929], [47, 3893], [52, 3877], [111, 3858], [119, 3845], [140, 3868], [162, 3859], [147, 3882], [128, 3880], [135, 3893], [119, 3943], [132, 3945], [139, 3923], [133, 3914], [145, 3887], [163, 3891], [175, 3870], [196, 3867], [201, 3879], [179, 3900], [152, 3894], [142, 3915], [154, 3949], [129, 3950], [86, 3976], [89, 4000], [86, 4032], [55, 4092], [40, 4106], [27, 4135], [45, 4151], [57, 4180], [76, 4171], [124, 4160], [156, 4170], [182, 4190], [189, 4216], [201, 4233], [224, 4253], [229, 4246], [253, 4268], [256, 4258], [287, 4258], [317, 4277], [322, 4275]], [[322, 4275], [323, 4272], [323, 4272], [323, 4272], [311, 4248], [326, 4263], [323, 4272], [323, 4272], [323, 4272], [324, 4274], [322, 4275]]], [[[-905, 2721], [-922, 2724], [-904, 2733], [-898, 2724], [-905, 2721]]], [[[-739, 2715], [-724, 2712], [-729, 2702], [-734, 2709], [-739, 2715]]], [[[-645, 2693], [-651, 2700], [-684, 2693], [-643, 2725], [-634, 2718], [-623, 2738], [-597, 2740], [-595, 2719], [-626, 2714], [-645, 2693]]], [[[-439, 2748], [-458, 2742], [-469, 2755], [-457, 2762], [-439, 2748]]], [[[-268, 2722], [-267, 2733], [-255, 2724], [-252, 2715], [-268, 2722]]], [[[-303, 2804], [-293, 2800], [-290, 2768], [-309, 2757], [-338, 2767], [-359, 2754], [-385, 2761], [-386, 2779], [-369, 2783], [-354, 2800], [-335, 2796], [-303, 2804]]], [[[-59, 2737], [-58, 2733], [-70, 2740], [-62, 2746], [-59, 2737]]], [[[1485, 2651], [1482, 2635], [1455, 2672], [1458, 2688], [1473, 2659], [1485, 2651]]], [[[1568, 2687], [1567, 2665], [1547, 2678], [1548, 2705], [1568, 2687]]], [[[-81, 2759], [-83, 2747], [-107, 2735], [-88, 2750], [-81, 2759]]], [[[-100, 2783], [-114, 2781], [-119, 2759], [-135, 2762], [-131, 2784], [-100, 2783]]], [[[1530, 2716], [1542, 2706], [1538, 2690], [1528, 2711], [1530, 2716]]], [[[1427, 2708], [1429, 2706], [1439, 2711], [1430, 2683], [1427, 2708]]], [[[1439, 2743], [1430, 2731], [1420, 2735], [1421, 2742], [1439, 2743]]], [[[1555, 2775], [1573, 2753], [1578, 2721], [1569, 2699], [1529, 2721], [1537, 2731], [1531, 2760], [1555, 2775]]], [[[1408, 2747], [1414, 2765], [1435, 2776], [1437, 2763], [1408, 2747]]], [[[1480, 2788], [1503, 2783], [1494, 2762], [1468, 2778], [1475, 2803], [1480, 2788]]], [[[1467, 2811], [1469, 2795], [1445, 2798], [1451, 2810], [1467, 2811]]], [[[1495, 2807], [1510, 2793], [1504, 2784], [1485, 2797], [1482, 2819], [1495, 2807]]], [[[253, 2834], [251, 2826], [235, 2816], [239, 2829], [253, 2834]]], [[[276, 2825], [279, 2820], [259, 2824], [263, 2832], [276, 2825]]], [[[1448, 2845], [1470, 2828], [1458, 2816], [1449, 2816], [1448, 2845]]], [[[333, 2880], [345, 2878], [321, 2864], [319, 2872], [333, 2880]]], [[[1295, 2870], [1295, 2846], [1283, 2843], [1288, 2862], [1295, 2870]]], [[[1246, 2943], [1241, 2926], [1234, 2942], [1237, 2951], [1246, 2943]]], [[[345, 2973], [360, 2960], [353, 2961], [333, 2971], [345, 2973]]], [[[370, 2989], [380, 3007], [393, 2992], [407, 2995], [413, 2978], [404, 2970], [365, 2959], [347, 2974], [353, 2990], [370, 2989]]], [[[389, 3006], [380, 3014], [397, 3021], [396, 3012], [389, 3006]]], [[[-42, 3112], [-58, 3105], [-53, 3120], [-31, 3126], [-42, 3112]]], [[[643, 3141], [641, 3133], [628, 3129], [639, 3150], [643, 3141]]], [[[683, 3167], [692, 3162], [662, 3126], [639, 3113], [651, 3133], [678, 3156], [683, 3167]]], [[[-250, 3366], [-233, 3350], [-243, 3328], [-239, 3312], [-272, 3312], [-294, 3323], [-315, 3350], [-321, 3371], [-293, 3362], [-286, 3369], [-250, 3366]]], [[[712, 3177], [732, 3173], [708, 3154], [714, 3166], [712, 3177]]], [[[655, 3184], [659, 3177], [651, 3159], [646, 3171], [655, 3184]]], [[[-553, 3496], [-557, 3490], [-570, 3515], [-566, 3524], [-553, 3496]]], [[[735, 3177], [725, 3175], [725, 3181], [752, 3187], [735, 3177]]], [[[-478, 2741], [-509, 2724], [-476, 2727], [-492, 2716], [-574, 2704], [-597, 2711], [-551, 2713], [-526, 2758], [-501, 2752], [-507, 2737], [-487, 2749], [-478, 2741]]], [[[1452, 2689], [1461, 2728], [1438, 2724], [1443, 2751], [1435, 2778], [1419, 2778], [1414, 2794], [1439, 2796], [1449, 2769], [1468, 2766], [1516, 2700], [1532, 2652], [1522, 2641], [1495, 2679], [1475, 2669], [1476, 2693], [1452, 2689]]], [[[1292, 2882], [1302, 2902], [1330, 2883], [1354, 2825], [1358, 2769], [1323, 2816], [1325, 2832], [1311, 2830], [1320, 2852], [1308, 2856], [1308, 2872], [1292, 2882]]], [[[362, 2955], [355, 2938], [381, 2954], [386, 2936], [380, 2918], [395, 2917], [382, 2900], [349, 2913], [366, 2899], [363, 2889], [337, 2894], [303, 2868], [278, 2838], [275, 2849], [298, 2883], [281, 2883], [271, 2862], [256, 2873], [259, 2892], [247, 2904], [253, 2919], [284, 2939], [295, 2933], [298, 2909], [306, 2934], [302, 2950], [318, 2956], [321, 2936], [329, 2963], [348, 2946], [340, 2965], [362, 2955]]], [[[1277, 2920], [1294, 2891], [1278, 2884], [1270, 2906], [1243, 2925], [1247, 2941], [1271, 2972], [1321, 2953], [1323, 2931], [1299, 2928], [1309, 2919], [1325, 2926], [1333, 2899], [1320, 2896], [1277, 2920]]], [[[1355, 2884], [1341, 2912], [1326, 2962], [1314, 2989], [1331, 2969], [1358, 2968], [1379, 2937], [1376, 2926], [1357, 2961], [1361, 2939], [1379, 2919], [1383, 2888], [1350, 2853], [1347, 2875], [1355, 2884]]], [[[-347, 3767], [-339, 3759], [-322, 3764], [-307, 3758], [-307, 3734], [-290, 3713], [-256, 3692], [-266, 3681], [-286, 3692], [-315, 3679], [-313, 3698], [-337, 3738], [-353, 3750], [-371, 3746], [-381, 3757], [-379, 3773], [-362, 3796], [-362, 3776], [-347, 3767]]], [[[1402, 2834], [1394, 2792], [1400, 2779], [1385, 2761], [1377, 2790], [1389, 2804], [1373, 2811], [1364, 2838], [1379, 2842], [1395, 2828], [1402, 2835], [1401, 2839], [1383, 2863], [1396, 2866], [1441, 2858], [1445, 2825], [1422, 2845], [1441, 2817], [1439, 2809], [1410, 2805], [1402, 2834]]]] } }, { "type": "Feature", "properties": { "hc-group": "__separator_lines__" }, "geometry": { "type": "MultiLineString", "coordinates": [[[-707, 5188], [3651, 2950]], [[1747, 2584], [1747, 3799]]] } }] };


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
    ARTIST_TRACK: '/uploads/track/'
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