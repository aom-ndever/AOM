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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_auth_service__ = __webpack_require__("../../../../../src/app/shared/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__layout_admin_layout_component__ = __webpack_require__("../../../../../src/app/admin/layout/admin_layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__layout_admin_layout_module__ = __webpack_require__("../../../../../src/app/admin/layout/admin.layout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_home_component__ = __webpack_require__("../../../../../src/app/admin/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__alerts_alerts_component__ = __webpack_require__("../../../../../src/app/admin/alerts/alerts.component.ts");
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
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_11__layout_admin_layout_module__["a" /* LayoutModule */],
                __WEBPACK_IMPORTED_MODULE_6_ngx_toastr__["a" /* ToastrModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_angular2_lightbox__["LightboxModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: 'admin',
                        component: __WEBPACK_IMPORTED_MODULE_10__layout_admin_layout_component__["a" /* AdminLayoutComponent */],
                        children: [
                            { path: '', component: __WEBPACK_IMPORTED_MODULE_12__home_home_component__["a" /* HomeComponent */] },
                            { path: 'alerts', component: __WEBPACK_IMPORTED_MODULE_13__alerts_alerts_component__["a" /* AlertsComponent */] }
                        ]
                    }
                ])
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_13__alerts_alerts_component__["a" /* AlertsComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__shared_auth_service__["a" /* AuthService */],
            ]
        })
    ], AdminLayoutModule);
    return AdminLayoutModule;
}());



/***/ }),

/***/ "../../../../../src/app/admin/alerts/alerts.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Page Content -->\n<div id=\"page-content-wrapper\">\n           \n    <div class=\"container-fluid\">\n        <div>\n            <h3 class=\"Audience-Overview\">Copyright Notices </h3>\n            <div class=\"artists_table copyright_table table-responsive\">\n                <table class=\"table\">\n                    <thead>\n                      <tr>\n                        <th>N<sup>O</sup></th>\n                        <th>Artist Name</th>\n                        <th>Date</th>\n                        <th>Message</th>\n                        <th>Actions</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                    <tr>\n                        <td>1.</td>\n                        <td>Shavn Miller</td>\n                        <td>May 12, 2018</td>\n                        <td class=\"td_img\"><div class=\"meassge_td\"><img src=\"img/vote.png\"/>Lorem ipsum dolor sit amet, adipiscing</div></td>\n                        <td class=\"td_img\"><img src=\"img/likes.png\"/>Suspend</td>\n                    </tr>\n                    <tr>\n                        <td>2.</td>\n                        <td>Anna Bill</td>\n                        <td>May 11, 2018</td>\n                        <td class=\"td_img\"><div class=\"meassge_td\"><img src=\"img/vote.png\"/>Lorem ipsum dolor sit amet, adipiscing</div></td>\n                        <td class=\"td_img\"><img src=\"img/likes.png\"/>Suspend</td>\n                    </tr>\n                    <tr>\n                        <td>3.</td>\n                        <td>Lilo</td>\n                        <td>May 11, 2018</td>\n                        <td class=\"td_img\"><div class=\"meassge_td\"><img src=\"img/vote.png\"/>Lorem ipsum dolor sit amet, adipiscing</div></td>\n                        <td class=\"td_img\"><img src=\"img/likes.png\"/>Suspend</td>\n                    </tr>\n                    <tr>\n                        <td>4.</td>\n                        <td>Jocanne Murr</td>\n                        <td>May 11, 2018</td>\n                        <td class=\"td_img\"><div class=\"meassge_td\"><img src=\"img/vote.png\"/>Lorem ipsum dolor sit amet, adipiscing</div></td>\n                        <td class=\"td_img\"><img src=\"img/likes.png\"/>Suspend</td>\n                    </tr>\n                    <tr>\n                        <td>5.</td>\n                        <td>Lordi</td>\n                        <td>May 10, 2018</td>\n                        <td class=\"td_img\"><div class=\"meassge_td\"><img src=\"img/vote.png\"/>Lorem ipsum dolor sit amet, adipiscing</div></td>\n                        <td class=\"td_img\"><img src=\"img/likes.png\"/>Suspend</td>\n                    </tr>             \n                    <tr>\n                        <td>6.</td>\n                        <td>Lordi</td>\n                        <td>May 10, 2018</td>\n                        <td class=\"td_img\"><div class=\"meassge_td\"><img src=\"img/vote.png\"/>Lorem ipsum dolor sit amet, adipiscing</div></td>\n                        <td class=\"td_img\"><img src=\"img/likes.png\"/>Suspend</td>\n                    </tr> \n                    </tbody>\n                  </table>\n            </div>\n        </div>\n        <div>\n            <h3 class=\"Audience-Overview\">Commuinity Notices</h3>\n            <div class=\"artists_table community_tabel table-responsive\">\n                <table class=\"table\">\n                    <thead>\n                      <tr>\n                        <th>N<sup>O</sup></th>\n                        <th>Artist Name</th>\n                        <th>Date</th>\n                        <th>Message</th>\n                        <th>Actions</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                    <tr>\n                        <td>1.</td>\n                        <td>Shavn Miller</td>\n                        <td>May 12, 2018</td>\n                        <td class=\"td_img\"><img src=\"img/vote.png\"/>Lorem ipsum dolor sit amet, adipiscing...</td>\n                        <td class=\"td_img\">\n                            <div><img src=\"img/likes.png\"/>Remove</div>\n                            <div><img src=\"img/likes.png\"/>Suspend</div>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>2.</td>\n                        <td>Anna Bill</td>\n                        <td>May 11, 2018</td>\n                        <td class=\"td_img\"><img src=\"img/vote.png\"/>Lorem ipsum dolor sit amet, adipiscing...</td>\n                        <td class=\"td_img\">\n                            <div><img src=\"img/likes.png\"/>Remove</div>\n                            <div><img src=\"img/likes.png\"/>Suspend</div>\n                        </td>\n                    </tr>\n\n\n                    </tbody>\n                  </table>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- /#page-content-wrapper -->"

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

/***/ "../../../../../src/app/admin/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Page Content -->\n<div id=\"page-content-wrapper\">\n           \n        <div class=\"container-fluid\">\n            <h3 class=\"Audience-Overview\">Audience Overview </h3>\n            <div>\n                <div class=\"dropdown custom_dropdown\">\n                  <button type=\"button\" class=\"btn dropdown-toggle Days\" data-toggle=\"dropdown\">\n                    7 days\n                  </button>\n                  <div class=\"dropdown-menu\">\n                    <a class=\"dropdown-item\" href=\"javascript:;\">Link 1</a>\n                    <a class=\"dropdown-item\" href=\"javascript:;\">Link 2</a>\n                    <a class=\"dropdown-item\" href=\"javascript:;\">Link 3</a>\n                  </div>\n                </div>\n                <ul class=\"header_ul\">\n                    <li class=\"active\"><a>Votes</a></li>\n                    <li><a>Likes</a></li>\n                    <li><a>Comments</a></li>\n                </ul>\n            </div>\n            <div>\n                <h3 class=\"Last-7-Days-April-2\">Last 7 Days: April 23, 2018 - May 1, 2018</h3>\n                <div class=\"graph_container\">\n                    <img src=\"img/graph.jpg\" />\n                </div>\n            </div>\n            <div>\n                <h3 class=\"Audience-Overview\">Top Artists </h3>\n                <div class=\"artists_table table-responsive\">\n                    <table class=\"table\">\n                        <thead>\n                          <tr>\n                            <th>N<sup>O</sup></th>\n                            <th>Artist Name</th>\n                            <th>Location</th>\n                            <th>Gender</th>\n                            <th>Music Genre</th>\n                            <th>Tracks</th>\n                            <th>Votes</th>\n                            <th>Likes</th>\n                            <th>Followers</th>\n                            <th>Comments</th>\n                          </tr>\n                        </thead>\n                        <tbody>\n                          <tr>\n                            <td>1.</td>\n                            <td>Shavn Miller</td>\n                            <td>New Youk</td>\n                            <td>Male</td>\n                            <td>Hiphop</td>\n                            <td>12</td>\n                            <td class=\"td_img\"><img src=\"img/vote.png\"/>200</td>\n                            <td class=\"td_img\"><img src=\"img/likes.png\"/>2560</td>\n                            <td class=\"td_img\"><img src=\"img/followers.png\"/>4670</td>\n                            <td class=\"td_img\"><img src=\"img/comments.png\"/>23467</td>                                \n                          </tr>\n                              <tr>\n                            <td>2.</td>\n                            <td>Shavn Miller</td>\n                            <td>New Youk</td>\n                            <td>Male</td>\n                            <td>Hiphop</td>\n                            <td>12</td>\n                            <td class=\"td_img\"><img src=\"img/vote.png\"/>200</td>\n                            <td class=\"td_img\"><img src=\"img/likes.png\"/>2560</td>\n                            <td class=\"td_img\"><img src=\"img/followers.png\"/>4670</td>\n                            <td class=\"td_img\"><img src=\"img/comments.png\"/>23467</td>                                \n                          </tr>\n                              <tr>\n                            <td>3.</td>\n                            <td>Shavn Miller</td>\n                            <td>New Youk</td>\n                            <td>Male</td>\n                            <td>Hiphop</td>\n                            <td>12</td>\n                            <td class=\"td_img\"><img src=\"img/vote.png\"/>200</td>\n                            <td class=\"td_img\"><img src=\"img/likes.png\"/>2560</td>\n                            <td class=\"td_img\"><img src=\"img/followers.png\"/>4670</td>\n                            <td class=\"td_img\"><img src=\"img/comments.png\"/>23467</td>                                \n                          </tr>\n                              <tr>\n                            <td>4.</td>\n                            <td>Shavn Miller</td>\n                            <td>New Youk</td>\n                            <td>Male</td>\n                            <td>Hiphop</td>\n                            <td>12</td>\n                            <td class=\"td_img\"><img src=\"img/vote.png\"/>200</td>\n                            <td class=\"td_img\"><img src=\"img/likes.png\"/>2560</td>\n                            <td class=\"td_img\"><img src=\"img/followers.png\"/>4670</td>\n                            <td class=\"td_img\"><img src=\"img/comments.png\"/>23467</td>                                \n                          </tr>\n                              <tr>\n                            <td>5.</td>\n                            <td>Shavn Miller</td>\n                            <td>New Youk</td>\n                            <td>Male</td>\n                            <td>Hiphop</td>\n                            <td>12</td>\n                            <td class=\"td_img\"><img src=\"img/vote.png\"/>200</td>\n                            <td class=\"td_img\"><img src=\"img/likes.png\"/>2560</td>\n                            <td class=\"td_img\"><img src=\"img/followers.png\"/>4670</td>\n                            <td class=\"td_img\"><img src=\"img/comments.png\"/>23467</td>                                  \n                          </tr>\n\n                        </tbody>\n                      </table>\n                </div>\n            </div>\n            <div>\n                <h3 class=\"Audience-Overview\">Top Locations </h3>\n                <div class=\"location_top\">\n                    <img src=\"img/location_img.jpg\" />\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- /#page-content-wrapper -->"

/***/ }),

/***/ "../../../../../src/app/admin/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        console.log("Admin dashboard component");
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/admin/home/home.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
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
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild([])
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

/***/ "../../../../../src/app/admin/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Sidebar -->\n<div class=\"top_container\">\n        <ul class=\"profile_container\">\n            <li class=\"sidebar-brand\">\n                <a class=\"profile_name\" href=\"javascript:;\">\n                    <span class=\"user_profile\"><img src=\"img/user_profile.jpg\" /></span>\n                    <h3 class=\"user_name\">Rob Gales</h3>\n                    <h5 class=\"user_profession\">Admin</h5>\n                    <div class=\"dropdown\">\n                        <button type=\"button\" class=\"btn btn-primary dropdown-toggle drop_icon\" data-toggle=\"dropdown\">\n                        </button>\n                        <div class=\"dropdown-menu\">\n                            <a class=\"dropdown-item\" href=\"javascript:;\">Link 1</a>\n                            <a class=\"dropdown-item\" href=\"javascript:;\">Link 2</a>\n                            <a class=\"dropdown-item\" href=\"javascript:;\">Link 3</a>\n                        </div>\n                    </div>                      \n                </a>\n            </li>\n        </ul>\n         <a href=\"javascript:;menu-toggle\" class=\"btn btn-secondary\" id=\"menu-toggle\"><i class=\"fas fa-bars\"></i></a>\n        </div>\n    <div id=\"sidebar-wrapper\">\n\n        <ul class=\"sidebar-nav\">\n            <li class=\"home active\">\n                <a href=\"javascript:;\"><i></i>Home</a>\n            </li>\n            <li class=\"bell\">\n                <a href=\"javascript:;\"><i></i>Alert</a>\n            </li>\n            <li class=\"artist\">\n                <a href=\"javascript:;\"><i></i>Artist</a>\n            </li>\n            <li class=\"users\">\n                <a href=\"javascript:;\"><i></i>Users</a>\n            </li>\n            <li>\n                <hr/>\n            </li>\n            <li class=\"contest\">\n                <a href=\"javascript:;\"><i></i>Contest</a>\n            </li>\n            <li class=\"roles\">\n                <a href=\"javascript:;\"><i></i>Roles</a>\n            </li>\n        </ul>\n    </div>\n    <!-- /#sidebar-wrapper -->"

/***/ }),

/***/ "../../../../../src/app/admin/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
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

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
        console.log("Admin dashboard component");
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__("../../../../../src/app/admin/sidebar/sidebar.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
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
    function AppComponent() {
        this.title = 'app';
        console.log("App component");
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_layout_layout_module__ = __webpack_require__("../../../../../src/app/dashboard-layout/layout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__admin_admin_layout_module__ = __webpack_require__("../../../../../src/app/admin/admin_layout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__register_register_module__ = __webpack_require__("../../../../../src/app/register/register.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__email_varification_email_varification_module__ = __webpack_require__("../../../../../src/app/email_varification/email_varification.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__forget_password_forget_password_module__ = __webpack_require__("../../../../../src/app/forget_password/forget_password.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_auth_service__ = __webpack_require__("../../../../../src/app/shared/auth.service.ts");
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
                __WEBPACK_IMPORTED_MODULE_6__dashboard_layout_layout_module__["a" /* LayoutModule */],
                __WEBPACK_IMPORTED_MODULE_8__register_register_module__["a" /* RegisterModule */],
                __WEBPACK_IMPORTED_MODULE_7__admin_admin_layout_module__["a" /* AdminLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_9__email_varification_email_varification_module__["a" /* EamilVarificationModule */],
                __WEBPACK_IMPORTED_MODULE_10__forget_password_forget_password_module__["a" /* ForgetPasswordModule */],
                __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_angular_highcharts__["b" /* ChartModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot([], { useHash: false })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__shared_auth_service__["a" /* AuthService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard-layout/artist/artist.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"artist-head artist-highlight\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12 col-sm-12 col-xs-12\">\n        <div class=\"news-header\">\n          <div class=\"row\">\n            <div class=\"col-md-7 col-sm-6 col-xs-5\">\n              <div class=\"head-global\"><h2>Artists</h2></div>\n            </div>\n            <div class=\"col-md-5 col-sm-6 col-xs-7\">\n              <div class=\"new-head\">\n                <div class=\"search-wrap\">\n                  <form>\n                    <div class=\"mobile-search\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></div>\n                    <div class=\"search-input\">\n                      <input type=\"text\" placeholder=\"Search by Artist Name or Song Title\" (keyup)=\"filterArtistv1($event)\" name=\"search\" [(ngModel)]=\"search_str\" />\n                    </div>\n                  </form>\n                </div>\n                <div class=\"filter-head\">\n                  <a href=\"javascript:;\" (click)=\"toggleFilter()\">\n                    <div class=\"filter-icon\"><img src=\"img/filter.png\" alt=\"Filter Icon\"></div>\n                    <span>Filters <i class=\"fa fa-caret-right\"></i></span>\n                  </a>\n                  \n                </div>\n              </div>\n            </div>\n            <div class=\"filter-drop-down\" [style.display]=\"show_filter ? 'block' : 'none'\">\n              <div class=\"container\">\n                <div class=\"row\">\n                  <div class=\"col-md-2 col-sm-6 col-xs-6\">\n                    <div class=\"music-genre\">\n                      <div class=\"filter-heading\">Music Genre</div>\n                      <ul>\n                        <li>\n                          <div class=\"radio\">\n                              <label>\n                                <input type=\"radio\" value=\"\" name=\"musicgenre\" [(ngModel)]=\"adv_filter.music_type\">All styles\n                                <div class=\"radio_check\"></div>\n                              </label>\n                          </div>\n                        </li>\n                        <li *ngFor=\"let music of music_list;\">\n                            <div class=\"radio\">\n                                <label>\n                                  <input type=\"radio\" value=\"{{music._id}}\" name=\"musicgenre\" [(ngModel)]=\"adv_filter.music_type\">{{music.name}}\n                                  <div class=\"radio_check\"></div>\n                                </label>\n                            </div>\n                        </li>\n                      </ul>\n                    </div>\n                    \n                  </div>\n                  <!-- div class=\"col-md-2 col-sm-6 col-xs-6\">\n                    <div class=\"artist-type\">\n                      <div class=\"filter-heading\">Artist Type</div>\n                      <ul>\n                        <li>\n                          <div class=\"checkbox\">\n                              <label>\n                                <input type=\"checkbox\" value=\"\" checked>\n                                <div class=\"chk_check\"></div>\n                                <span>Rising Stars</span>\n                              </label>\n                          </div>\n                        </li>\n                        <li>\n                          <div class=\"checkbox\">\n                              <label>\n                                <input type=\"checkbox\" value=\"\" checked>\n                                <div class=\"chk_check\"></div>\n                                <span>Chart Toppers</span>\n                              </label>\n                          </div>\n                        </li>\n                        <li>\n                          <div class=\"checkbox\">\n                              <label>\n                                <input type=\"checkbox\" value=\"\" checked>\n                                <div class=\"chk_check\"></div>\n                                <span>My Artsist</span>\n                              </label>\n                          </div>\n                        </li>\n                      </ul>\n                    </div>\n                  </div -->\n                  <div class=\"col-md-8 col-sm-12 col-xs-12\">\n                    <div class=\"sub-menu-filter\">\n                    <div class=\"filter-heading\">Music Genre</div>\n                      <div class=\"row\">\n                        <div class=\"col-md-2 col-sm-4 col-xs-4\">\n                          <div class=\"filter-subhead\">Northeast</div>\n                          <ul>\n                            <li>\n                              <div class=\"checkbox\">\n                                  <label>\n                                    <input type=\"checkbox\" value=\"\">\n                                    <div class=\"chk_check\"></div>\n                                    <span>Marryland</span>\n                                  </label>\n                              </div>\n                            </li>\n                            <li>\n                              <div class=\"checkbox\">\n                                  <label>\n                                    <input type=\"checkbox\" value=\"\">\n                                    <div class=\"chk_check\"></div>\n                                    <span>New Jersey</span>\n                                  </label>\n                              </div>\n                            </li>\n                            <li>\n                              <div class=\"checkbox\">\n                                  <label>\n                                    <input type=\"checkbox\" value=\"\">\n                                    <div class=\"chk_check\"></div>\n                                    <span>Pennsylvania</span>\n                                  </label>\n                              </div>\n                            </li>\n                            <li>\n                              <div class=\"checkbox\">\n                                  <label>\n                                    <input type=\"checkbox\" value=\"\" checked>\n                                    <div class=\"chk_check\"></div>\n                                    <span>New York</span>\n                                  </label>\n                              </div>\n                            </li>\n                            <li>\n                              <div class=\"checkbox\">\n                                  <label>\n                                    <input type=\"checkbox\" value=\"\">\t\n                                    <div class=\"chk_check\"></div>\n                                    <span>Delaware</span>\n                                  </label>\n                              </div>\n                            </li>\n                          </ul>\n                        </div>\n                        <div class=\"col-md-2 col-sm-4 col-xs-4\">\n                          <div class=\"filter-subhead\">southeast</div>\n                          <ul>\n                            <li>\n                              <div class=\"checkbox\">\n                                  <label>\n                                    <input type=\"checkbox\" value=\"\">\n                                    <div class=\"chk_check\"></div>\n                                    <span>Marryland</span>\n                                  </label>\n                              </div>\n                            </li>\n                            <li>\n                              <div class=\"checkbox\">\n                                  <label>\n                                    <input type=\"checkbox\" value=\"\">\n                                    <div class=\"chk_check\"></div>\n                                    <span>New Jersey</span>\n                                  </label>\n                              </div>\n                            </li>\n                            <li>\n                              <div class=\"checkbox\">\n                                  <label>\n                                    <input type=\"checkbox\" value=\"\">\n                                    <div class=\"chk_check\"></div>\n                                    <span>Pennsylvania</span>\n                                  </label>\n                              </div>\n                            </li>\n                            <li>\n                              <div class=\"checkbox\">\n                                  <label>\n                                    <input type=\"checkbox\" value=\"\" checked>\t\n                                    <div class=\"chk_check\"></div>\n                                    <span>New York</span>\n                                  </label>\n                              </div>\n                            </li>\n                            <li>\n                              <div class=\"checkbox\">\n                                  <label>\n                                    <input type=\"checkbox\" value=\"\">\t\n                                    <div class=\"chk_check\"></div>\n                                    <span>Delaware</span>\n                                  </label>\n                              </div>\n                            </li>\n                          </ul>\n                        </div>\n                        <div class=\"col-md-2 col-sm-4 col-xs-4\">\n                          <div class=\"filter-subhead\">Midwest</div>\n                          <ul>\n                            <li>\n                              <div class=\"checkbox\">\n                                  <label>\n                                    <input type=\"checkbox\" value=\"\">\n                                    <div class=\"chk_check\"></div>\n                                    <span>Marryland</span>\n                                  </label>\n                              </div>\n                            </li>\n                            <li>\n                              <div class=\"checkbox\">\n                                  <label>\n                                    <input type=\"checkbox\" value=\"\">\n                                    <div class=\"chk_check\"></div>\n                                    <span>New Jersey</span>\n                                  </label>\n                              </div>\n                            </li>\n                            <li>\n                              <div class=\"checkbox\">\n                                  <label>\n                                    <input type=\"checkbox\" value=\"\">\n                                    <div class=\"chk_check\"></div>\n                                    <span>Pennsylvania</span>\n                                  </label>\n                              </div>\n                            </li>\n                            <li>\n                              <div class=\"checkbox\">\n                                  <label>\n                                    <input type=\"checkbox\" value=\"\" checked>\t\n                                    <div class=\"chk_check\"></div>\n                                    <span>New York</span>\n                                  </label>\n                              </div>\n                            </li>\n                            <li>\n                              <div class=\"checkbox\">\n                                  <label>\n                                    <input type=\"checkbox\" value=\"\">\t\n                                    <div class=\"chk_check\"></div>\n                                    <span>Delaware</span>\n                                  </label>\n                              </div>\n                            </li>\n                          </ul>\n                        </div>\n                        <div class=\"col-md-2 col-sm-4 col-xs-4\">\n                          <div class=\"filter-subhead\">Southwest</div>\n                          <ul>\n                            <li>\n                              <div class=\"checkbox\">\n                                  <label>\n                                    <input type=\"checkbox\" value=\"\">\n                                    <div class=\"chk_check\"></div>\n                                    <span>Marryland</span>\n                                  </label>\n                              </div>\n                            </li>\n                            <li>\n                              <div class=\"checkbox\">\n                                  <label>\n                                    <input type=\"checkbox\" value=\"\">\n                                    <div class=\"chk_check\"></div>\n                                    <span>New Jersey</span>\n                                  </label>\n                              </div>\n                            </li>\n                            <li>\n                              <div class=\"checkbox\">\n                                  <label>\n                                    <input type=\"checkbox\" value=\"\">\n                                    <div class=\"chk_check\"></div>\n                                    <span>Pennsylvania</span>\n                                  </label>\n                              </div>\n                            </li>\n                            <li>\n                              <div class=\"checkbox\">\n                                  <label>\n                                    <input type=\"checkbox\" value=\"\" checked>\t\n                                    <div class=\"chk_check\"></div>\n                                    <span>New York</span>\n                                  </label>\n                              </div>\n                            </li>\n                            <li>\n                              <div class=\"checkbox\">\n                                  <label>\n                                    <input type=\"checkbox\" value=\"\">\t\n                                    <div class=\"chk_check\"></div>\n                                    <span>Delaware</span>\n                                  </label>\n                              </div>\n                            </li>\n                          </ul>\n                        </div>\n                        <div class=\"col-md-2 col-sm-4 col-xs-4\">\n                          <div class=\"filter-subhead\">West</div>\n                          <ul>\n                            <li>\n                              <div class=\"checkbox\">\n                                  <label>\n                                    <input type=\"checkbox\" value=\"\">\n                                    <div class=\"chk_check\"></div>\n                                    <span>Marryland</span>\n                                  </label>\n                              </div>\n                            </li>\n                            <li>\n                              <div class=\"checkbox\">\n                                  <label>\n                                    <input type=\"checkbox\" value=\"\">\n                                    <div class=\"chk_check\"></div>\n                                    <span>New Jersey</span>\n                                  </label>\n                              </div>\n                            </li>\n                            <li>\n                              <div class=\"checkbox\">\n                                  <label>\n                                    <input type=\"checkbox\" value=\"\">\n                                    <div class=\"chk_check\"></div>\n                                    <span>Pennsylvania</span>\n                                  </label>\n                              </div>\n                            </li>\n                            <li>\n                              <div class=\"checkbox\">\n                                  <label>\n                                    <input type=\"checkbox\" value=\"\" checked>\t\n                                    <div class=\"chk_check\"></div>\n                                    <span>New York</span>\n                                  </label>\n                              </div>\n                            </li>\n                            <li>\n                              <div class=\"checkbox\">\n                                  <label>\n                                    <input type=\"checkbox\" value=\"\">\t\n                                    <div class=\"chk_check\"></div>\n                                    <span>Delaware</span>\n                                  </label>\n                              </div>\n                            </li>\n                          </ul>\n                        </div>\n                        <div class=\"col-md-2 col-sm-4 col-xs-4\">\n                          <div class=\"filter-subhead\">other</div>\n                          <ul>\n                            <li>\n                              <div class=\"checkbox\">\n                                  <label>\n                                    <input type=\"checkbox\" value=\"\">\n                                    <div class=\"chk_check\"></div>\n                                    <span>Puerto Rico</span>\n                                  </label>\n                              </div>\n                            </li>\n                          </ul>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                    <div class=\"button_group\">\n                      <a href=\"javascript:;\" (click)=\"toggleFilter()\" class=\"cancel-btn\">Cancel</a>\n                      <a href=\"javascript:;\" class=\"apply-btn\" (click)=\"advanceFilter()\">Apply</a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"artist-highlight\">\n  <div class=\"container\">\n    <div class=\"rising-star\">\n      <div class=\"row\">\n        <div class=\"\">\n          <div class=\"head-global\"><h2>Rising Star</h2></div>\n        </div>\n        <div class=\"highlights-wrap mCustomScrollbar \" data-mcs-theme=\"dark-3\">\n          <div class=\"row\">\n            <div class=\"alert alert-info col-sm-12\" *ngIf=\"artistv1['rising_stars']['length'] <= 0\">No data available.</div>\n            <div class=\"col-md-3 col-sm-4 col-xs-6\" *ngFor=\"let artist_rising of artistv1.rising_stars; let i = index;\">\n                <div class=\"final-wrap \">\n                  <div class=\"img-wrap \">\n                    <a href=\"javascript:;\" routerLink=\"/artist_profile/{{artist_rising._id}}\">\n                    <img src=\"{{artist_rising.image ? artist_img_url+artist_rising.image : 'img/highlight-player.png'}} \" alt=\"Finalists \"></a>\n                    <a href=\"javascript:void(0) \" class=\"fan \" (click)=\"followArtist(artist_rising._id, i)\"><i class=\"fa {{artist_rising['is_followed'] ? 'fa-heart' : 'fa-heart-o'}} \" aria-hidden=\"true \"></i></a>\n                  </div>\n                  <div class=\"content-wrap \">\n                    <div class=\"player \">\n                      <div class=\"title \"><a href=\"javascript:;\" routerLink=\"/artist_profile/{{artist_rising._id}}\">{{artist_rising.first_name +' '+artist_rising.last_name}}</a></div>\n                      <div class=\"cat {{artist_rising.music_type.alias}}\">{{artist_rising.music_type.name}}</div>\n                    </div>\n                    <div class=\"location \">\n                      <p><i class=\"fa fa-map-marker \" aria-hidden=\"true \"></i><span>Brooklyn, New York</span></p>\n                      \n                    </div>\n                  </div>\n                </div>\n            </div>        \n  \n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"chart-topper\" style=\"padding:30px 0;\">\n      <div class=\"row\">\n        <div class=\"\">\n          <div class=\"head-global\"><h2>Chart Topper</h2></div>\n        </div>\n        <div class=\"highlights-wrap mCustomScrollbar \" data-mcs-theme=\"dark-3\">\n          <div class=\"row\">\n              <div class=\"alert alert-info col-sm-12\" *ngIf=\"artistv1['chart_toppers']['length'] <= 0\">No data available.</div>\n              <div class=\"col-md-3 col-sm-4 col-xs-6\" *ngFor=\"let artist_chart of artistv1.chart_toppers; let i = index;\">\n                  <div class=\"final-wrap \">\n                    <div class=\"img-wrap \">\n                      <a href=\"javascript:;\" routerLink=\"/artist_profile/{{artist_chart['artist']._id}}\">\n                      <img src=\"{{artist_chart['artist'].image ? artist_img_url+artist_chart['artist'].image : 'img/highlight-player.png'}} \" alt=\"Finalists \"></a>\n                      <a href=\"javascript:void(0) \" class=\"fan \" (click)=\"followArtist(artist_chart['artist']._id, i)\"><i class=\"fa {{artist_chart['artist']['is_followed'] ? 'fa-heart' : 'fa-heart-o'}}\" aria-hidden=\"true \"></i></a>\n                    </div>\n                    <div class=\"content-wrap \">\n                      <div class=\"player \">\n                        <div class=\"title \"><a href=\"javascript:;\" routerLink=\"/artist_profile/{{artist_chart['artist']._id}}\">{{artist_chart['artist'].first_name +' '+artist_chart['artist'].last_name}}</a></div>\n                        <div class=\"cat {{artist_chart['artist']['music_type']['alias']}}\">{{artist_chart['artist']['music_type']['name']}}</div>\n                      </div>\n                      <div class=\"location \">\n                        <p><i class=\"fa fa-map-marker \" aria-hidden=\"true \"></i><span>Brooklyn, New York</span></p>\n                        \n                      </div>\n                    </div>\n                  </div>\n              </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"my-artists\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"head-global\"><h2>My Artists</h2></div>\n        </div>\n        <div class=\"highlights-wrap \" >\n          <div class=\"row\">\n            <div class=\"col-md-3 col-sm-4 col-xs-6\">\n              <div class=\"final-wrap\">\n                <div class=\"img-wrap\">\n                  <img src=\"img/highlight-player.png\" alt=\"Finalists\">\n                  <a href=\"javascript:void(0)\" class=\"fan\"><i class=\"fa fa-heart\" aria-hidden=\"true\"></i></a>\n                </div>\n                <div class=\"content-wrap\">\n                  <div class=\"player\">\n                    <div class=\"title\"><a href=\"#\">DJ Bond</a></div>\n                    <div class=\"cat ele\">Electronic</div>\n                  </div>\n                  <div class=\"location\">\n                    <p><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i><span>Brooklyn, New York</span></p>\n                    \n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-md-3 col-sm-4 col-xs-6\">\n              <div class=\"final-wrap\">\n                <div class=\"img-wrap\">\n                  <img src=\"img/highlight-player2.png\" alt=\"Finalists\">\n                  <a href=\"javascript:void(0)\" class=\"fan\"><i class=\"fa fa-heart\" aria-hidden=\"true\"></i></a>\n                </div>\n                <div class=\"content-wrap\">\n                  <div class=\"player\">\n                    <div class=\"title\"><a href=\"#\">DJ Bond</a></div>\n                    <div class=\"cat ele\">Electronic</div>\n                  </div>\n                  <div class=\"location\">\n                    <p><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i><span>Brooklyn, New York</span></p>\n                    \n                  </div>\n                </div>\n              </div>\n            </div>           \n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

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
        this.search_str = '';
        this.adv_filter = {};
        this.artistv1 = {
            chart_toppers: [],
            rising_stars: []
        };
        this.music_list = [];
        this.artist_img_url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].ARTIST_IMG;
        this.track_url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].ARTIST_TRACK;
        this.audio_ins = [];
    }
    ArtistComponent.prototype.ngOnInit = function () {
        this.getAllData();
        this.getAllArtistV1Data({});
        this.getAllMusicType();
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
    // filter artistv1
    ArtistComponent.prototype.filterArtistv1 = function (e) {
        if (e.keyCode == 13) {
            var data = {
                search: this.search_str
            };
            this.getAllArtistV1Data(data);
        }
    };
    // advanceFilter
    ArtistComponent.prototype.advanceFilter = function () {
        var data = {
            music_type: this.adv_filter.music_type
        };
        this.getAllArtistV1Data(data);
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
    // Get All Atrist [Rising Star, chart topper, My Artist]
    ArtistService.prototype.getAllArtistv1 = function (data) {
        return this.http.post(this.api_host + "/artistv1", data);
    };
    // get All music type
    ArtistService.prototype.getAllMusicType = function () {
        return this.http.get(this.api_host + "/music_type");
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

module.exports = "<div class=\"comment-wrap\">\n  <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-2 col-sm-3 col-xs-6\">\n          <div class=\"profile-img\">\n            <a href=\"javascript:;\"><img src=\"{{artistdata.image ? artist_img_url+artistdata.image : 'img/profile-img.png'}}\" alt=\"Profile Images\"></a>\n          </div>\n        </div>\n        <div class=\"col-md-10 col-sm-8 col-xs-6\">\n          <div class=\"artist-name\"><h2><a href=\"javascript:;\">{{artistdata.first_name+' '+artistdata.last_name}}</a></h2>\n            <span class=\"{{artistdata.music_type['alias']}} tag\">{{artistdata.music_type['name']}}</span>\n          </div>\n          <div class=\"profile-location\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> <span>New York</span></div>\n          <div class=\"profile-description\">\n            <p>{{artistdata.description}}</p>\n          </div>\n        </div>\n        <div class=\"col-md-12\">\n          <div class=\"profile-detail-wrap\">\n            <div class=\"row\">\n              <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                <div class=\"comments\">\n                  <h3 class=\"num-cmt\">{{artistcomments.length}} Comments</h3>\n                  <div class=\"login-alert\">Please Login to leave your comment</div>\n                  <div class=\"comment-block col-md-12 col-sm-12 col-xs-12\" *ngFor=\"let comment of artistcomments;\">\n                    <div class=\"s-name\" *ngIf=\"comment.track_id\">{{comment.track_id.name}}</div>\n                    <div class=\"s-img\"><img src=\"{{comment.user_id.image ? user_img_url+comment.user_id.image : 'img/fan1.png' }}\" alt=\"img\"></div>\n                    <div class=\"cm-date-name\">\n                      <h6>{{comment.user_id.first_name+ ' '+comment.user_id.last_name}}.</h6>\n                      <p>{{comment.created_at | timeAgo}}</p>\n                      <div class=\"profile-descriptions\">\n                        <p>{{comment.comment}}</p>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

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

module.exports = "<div class=\"artist-profile-wrap\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"cover-img\">\n          <img src=\"{{artistdata['cover_image'] ? artist_img_url +artistdata['cover_image'] : 'img/cover.png'}}\" alt=\"Cover Image\">\n        </div>\n      </div>\n      <div class=\"col-md-12\">\n        <div class=\"profile-detail-wrap\">\n          <div class=\"row\">\n            <div class=\"col-md-3 col-sm-3 col-xs-4\">\n              <div class=\"profile-img\">\n                <a href=\"javascript:;\">\n                  <img src=\"{{artistdata['image'] ? artist_img_url +artistdata['image'] : 'img/profile-img.png'}}\" alt=\"Profile Images\">\n                </a>\n              </div>\n              <div class=\"follow-btn\">\n                <a href=\"javascript:;\" (click)=\"followArtist(artistdata._id, i)\">\n                  <i class=\"fa fa-heart\" aria-hidden=\"true\"></i> Follow\n                </a>\n              </div>\n              <div class=\"social\">\n                <h3>Social</h3>\n                <ul>\n                  <li>\n                    <a [href]=\"artistdata.social_media['facebook']\">\n                      <i class=\"fa fa-facebook-official\" aria-hidden=\"true\"></i>\n                    </a>\n                  </li>\n                  <li>\n                    <a [href]=\"artistdata.social_media['instagram']\">\n                      <i class=\"fa fa-instagram\" aria-hidden=\"true\"></i>\n                    </a>\n                  </li>\n                  <li>\n                    <a [href]=\"artistdata.social_media['youtube']\">\n                      <i class=\"fa fa-youtube-play\" aria-hidden=\"true\"></i>\n                    </a>\n                  </li>\n                  <li>\n                    <a [href]=\"artistdata.social_media['sound_cloud']\">\n                      <i class=\"fa fa-soundcloud\" aria-hidden=\"true\"></i>\n                    </a>\n                  </li>\n                </ul>\n              </div>\n              <div class=\"follower\">\n                <h3>Followers</h3>\n                <span>{{artistfollower.length}}</span>\n                <ul>\n                  <li *ngFor=\"let follower of artistfollower;\">\n                    <img src=\"{{follower.image ? user_img_url+follower.image : 'img/fan1.png'}}\" alt=\"Fan\">\n                  </li>\n                </ul>\n              </div>\n\n              <div class=\"comments\">\n                <h3>\n                  <a href=\"javascript:;\" routerLink=\"/artist_profile/{{artistdata._id}}/comments\">Comments</a>\n                </h3>\n                <span>{{artistcomments.length}}</span>\n                <div class=\"comment-block\" *ngFor=\"let comment of display_comment;\">\n                  <div class=\"s-name\" *ngIf=\"comment.track_id\">{{comment.track_id.name}}</div>\n                  <div class=\"s-img\">\n                    <img src=\"{{comment.user_id.image ? user_img_url+comment.user_id.image : 'img/fan1.png' }}\" alt=\"img\">\n                  </div>\n                  <div class=\"cm-date-name\">\n                    <h6>{{comment.user_id.first_name+ ' '+comment.user_id.last_name}}.</h6>\n                    <p>{{comment.created_at | timeAgo}}</p>\n                  </div>\n                  <div class=\"profile-description\">\n                    <p>{{comment.comment}}</p>\n                  </div>\n\n                </div>\n              </div>\n\n            </div>\n            <div class=\"col-md-9 col-sm-9 col-xs-8\">\n              <div class=\"artist-name\">\n                <h2>\n                  <a href=\"javascript:;\">{{artistdata['first_name']+' '+artistdata['last_name']}}</a>\n                </h2>\n                <span class=\"{{artistdata.music_type['alias']}} cat\" >{{artistdata.music_type['name']}}</span>\n              </div>\n              <div class=\"profile-location\">\n                <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\n                <span>New York</span>\n              </div>\n              <div class=\"profile-description\">\n                <p>{{artistdata.description}}</p>\n              </div>\n              <div class=\"profile-tabs-det\">\n                <!-- Nav tabs -->\n                <ul class=\"nav nav-tabs\" role=\"tablist\">\n                  <li class=\"nav-item \">\n                    <a class=\"nav-link {{active_tab_index == 1 ? 'active show' : ''}}\" (click)=\"manageTabChange(1)\" data-toggle=\"tab\" href=\"javascript:;\">Tracks</a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link {{active_tab_index == 2 ? 'active show' : ''}}\" (click)=\"manageTabChange(2)\" data-toggle=\"tab\" href=\"javascript:;\">Media</a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link {{active_tab_index == 3 ? 'active show' : ''}}\" (click)=\"manageTabChange(3)\" data-toggle=\"tab\" href=\"javascript:;\">Ranking</a>\n                  </li>\n                </ul>\n\n                <!-- Tab panes -->\n                <div class=\"tab-content\">\n                  <div id=\"tracks\" class=\"tab-pane fade {{active_tab_index == 1 ? 'active show' : ''}}\">\n                    <div class=\"track-wrapper\">\n                      <div class=\"track-select-wrap\">\n                        <select class=\"form-control\" name=\"artist_track\" id=\"gender\" (change)=\"sortArtistTrack(artistdata._id, $event.target.value)\">\n                          <option value=\"0\">Newest First</option>\n                          <option value=\"1\">Newest Last</option>\n                        </select>\n                      </div>\n                      <div class=\"track-table\">\n                        <div class=\"alert alert-info\" *ngIf=\"artisttrack.length <= 0\">No data available.</div>\n                        <table>\n                          <tbody>\n                            <tr *ngFor=\"let artist of artisttrack;let i=index;\">\n                              <td class=\"serial-num\">{{i+1}}.</td>\n                              <td class=\"play-option\">\n                                <a href=\"javascript:;\">\n                                    <img src=\"img/play.png \" alt=\"Pause \"  [style.display]=\"!audio_ins[i] ? 'block' : 'none'\" (click)=\"playAudio(artist.audio, i)\">\n                                    <img src=\"img/pause.png \" alt=\"Pause \"  [style.display]=\"audio_ins[i] ? 'block' : 'none'\" (click)=\"stopAudio(i)\">\n                                </a>\n                              </td>\n                              <td class=\"track-pic\">\n                                <a href=\"javascript:;\">\n                                  <img src=\"{{artist.image ? track_url+artist.image : 'img/track-img.png'}}\" style=\"height:50px;width:50px;\" alt=\"Track Image\">\n                                </a>\n                              </td>\n                              <td class=\"track-det\" colspan=\"2\">\n                                <p class=\"track-name\">{{artist.name}}</p>\n                                <p class=\"track-singer\">{{artist.artist_id.name}}</p>\n                                <p class=\"track-year\">{{artist.created_at | date : 'yyyy'}}</p>\n                              </td>\n                              <td class=\"track-date\">{{artist.created_at | date : 'MMMM dd,yyyy'}}</td>\n                              <td class=\"td track-vote\">\n                                <img src=\"img/start.png\" alt=\"start\">\n                                <span>{{artist.no_of_votes}}\n                                  <br>\n                                  <span>Votes</span>\n                                </span>\n                              </td>\n                              <td class=\"action\" colspan=\"2\">\n                                <div class=\"cmt-like\">\n                                  <a href=\"javascript:;\" class=\"liked\" (click)=\"likeTrack(artist._id, i)\">\n                                    <img src=\"img/like-color.jpg\" alt=\"\">{{artist.no_of_likes}}</a>\n                                </div>\n                                <div class=\"cmt\">\n                                  <a href=\"javascript:;\" (click)=\"goToComment(artistdata['_id'], artist._id)\">\n                                    <img src=\"img/comment.png\" alt=\"\">{{artist.no_of_comments}}</a>\n                                </div>\n                                <div class=\"download\">\n                                  <a href=\"javascript:;\" >\n                                    <img src=\"img/download.png\" *ngIf=\"artist.is_downloadable\" (click)=\"downloadTrack(artist._id)\" alt=\"\">${{artist.price}}</a>\n                                </div>\n                                <div class=\"share\">\n                                  <a href=\"javascript:;\">\n                                    <img src=\"img/share.png\" alt=\"\">\n                                  </a>\n                                </div>\n                              </td>\n                            </tr>\n                          </tbody>\n                        </table>\n                      </div>\n                    </div>\n                  </div>\n                  <div id=\"media\" class=\"tab-pane fade {{active_tab_index == 2 ? 'active show' : ''}}\">\n                    <div class=\"media-wrapper\">\n                      <div class=\"row\">\n                        <div class=\"alert alert-info col-sm-12\" *ngIf=\"artistmedia.length <= 0\">No data available.</div>\n                        <div class=\"col-md-4 col-sm-6 col-xs-12\" *ngFor=\"let media of artistmedia; let i = index;\">\n                          <a class=\"img-wrap\" href=\"javascript:;\" data-fancybox=\"images\" data-width=\"1500\" data-height=\"1000\" (click)=\"open(i)\">\n                            <img src=\"{{media.image ? artist_media_url+media.image : 'img/media-1.png'}}\" alt=\"Media\">\n                          </a>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div id=\"ranking\" class=\"tab-pane fade {{active_tab_index == 3 ? 'active show' : ''}}\">\n                    <div class=\"track-wrapper\">\n                      <div class=\"track-select-wrap\">\n                        <select class=\"form-control\" id=\"sort\" (change)=\"sortRankingTrack(artistdata._id, $event.target.value)\">\n                          <option value=\"0\">Newest First</option>\n                          <option value=\"1\">Newest Last</option>\n                        </select>\n                      </div>\n                      <div class=\"track-table\">\n                        <div class=\"alert alert-info\" *ngIf=\"rankingtrack.length <= 0\">No data available.</div>\n                        <table>\n                          <tbody>\n                            <tr *ngFor=\"let rank of rankingtrack;let i=index;\">\n                              <td class=\"serial-num\">{{i+1}}.</td>\n                              <td class=\"play-option\">\n                                <a href=\"javascript:;\">\n                                    <img src=\"img/play.png \" alt=\"Pause \"  [style.display]=\"!rank_audio_ins[i] ? 'block' : 'none'\" (click)=\"playAudio(rank.audio, i)\">\n                                    <img src=\"img/pause.png \" alt=\"Pause \"  [style.display]=\"rank_audio_ins[i] ? 'block' : 'none'\" (click)=\"stopAudio(i)\">\n                                </a>\n                              </td>\n                              <td class=\"track-pic\">\n                                <a href=\"javascript:;\">\n                                  <img src=\"{{rank.image ? track_url+rank.image : 'img/track-img.png'}}\" alt=\"Track Image\" style=\"height: 50px;width: 50px;;\">\n                                </a>\n                              </td>\n                              <td class=\"track-det\" colspan=\"2\">\n                                <p class=\"track-name\">{{rank.name}}</p>\n                                <p class=\"track-singer\">{{rank.artist_id.first_name+' '+rank.artist_id.last_name}}</p>\n                                <p class=\"track-year\">{{rank.created_at | date  : 'yyyy'}}</p>\n                              </td>\n                              <td class=\"track-date\">{{rank.created_at | date  : 'MMMM dd,yyyy'}}</td>\n                              <td class=\"td track-vote\">\n                                <img src=\"img/start.png\" alt=\"start\">\n                                <span>{{rank.no_of_votes}}\n                                  <br>\n                                  <span>Votes</span>\n                                </span>\n                              </td>\n                              <td class=\"action\" colspan=\"2\">\n                                <div class=\"cmt-like\">\n                                  <a href=\"javascript:;\" (click)=\"likeRankTrack(rank._id, i)\">\n                                    <img src=\"img/like-color.jpg\" alt=\"\">{{rank.no_of_likes}}</a>\n                                </div>\n                                <div class=\"cmt\">\n                                  <a href=\"javascript:;\" (click)=\"goToComment(rank._id)\">\n                                    <img src=\"img/comment.png\" alt=\"\">{{rank.no_of_comments}}</a>\n                                </div>\n                                <div class=\"download\">\n                                  <a href=\"javascript:;\" >\n                                    <img src=\"img/download.png\" *ngIf=\"rank.is_downloadable\" (click)=\"downloadTrack(rank._id)\" alt=\"\">${{rank.price}}</a>\n                                </div>\n                                <div class=\"share\">\n                                  <a href=\"javascript:;\">\n                                    <img src=\"img/share.png\" alt=\"\">\n                                  </a>\n                                </div>\n                              </td>\n                            </tr>\n                          </tbody>\n                        </table>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/dashboard-layout/artist_profile/artist_profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__artist_profile_service__ = __webpack_require__("../../../../../src/app/dashboard-layout/artist_profile/artist_profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_lightbox__ = __webpack_require__("../../../../angular2-lightbox/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_lightbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_lightbox__);
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
    function ArtistProfileComponent(ArtistProfileService, toastr, route, router, lightbox) {
        this.ArtistProfileService = ArtistProfileService;
        this.toastr = toastr;
        this.route = route;
        this.router = router;
        this.lightbox = lightbox;
        this.artistdata = {};
        this.artisttrack = {};
        this.artistmedia = {};
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
    }
    ArtistProfileComponent.prototype.ngOnInit = function () {
        this.artistdata = this.route.snapshot.data['artist'].artist;
        this.artisttrack = this.route.snapshot.data['track'].track;
        this.artistmedia = this.route.snapshot.data['media'].media;
        this.artistfollower = this.route.snapshot.data['follower'].user;
        this.artistcomments = this.route.snapshot.data['comments'].comment;
        this.rankingtrack = this.route.snapshot.data['ranking'].track;
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
    };
    ArtistProfileComponent.prototype.manageTabChange = function (index) {
        this.active_tab_index = index;
    };
    // Play audio
    ArtistProfileComponent.prototype.playAudio = function (name, index) {
        var audio = new Audio();
        audio.src = this.track_url + name;
        audio.load();
        audio.play();
        if (!this.audio_ins.hasOwnProperty(index)) {
            this.audio_ins[index] = audio;
        }
    };
    // Stop audio
    ArtistProfileComponent.prototype.stopAudio = function (index) {
        console.log(this.audio_ins[index]);
        this.audio_ins[index].pause();
        this.audio_ins[index].currentTime = 0;
        // this.audio_ins[index].stop();
        delete this.audio_ins[index];
    };
    // Play audio
    ArtistProfileComponent.prototype.playRankAudio = function (name, index) {
        var audio = new Audio();
        audio.src = this.track_url + name;
        audio.load();
        audio.play();
        if (!this.rank_audio_ins.hasOwnProperty(index)) {
            this.rank_audio_ins[index] = audio;
        }
    };
    // Stop audio
    ArtistProfileComponent.prototype.stopRankAudio = function (index) {
        console.log(this.audio_ins[index]);
        this.rank_audio_ins[index].pause();
        this.rank_audio_ins[index].currentTime = 0;
        // this.audio_ins[index].stop();
        delete this.rank_audio_ins[index];
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
    ArtistProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-artist_profile',
            template: __webpack_require__("../../../../../src/app/dashboard-layout/artist_profile/artist_profile.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__artist_profile_service__["a" /* ArtistProfileService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_lightbox__["Lightbox"]])
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

module.exports = "<div class=\"track-comment-wrap\">\n  <div class=\"container\">\n      <div class=\"col-md-12\">\n        <div class=\"profile-detail-wrap\">\n          <div class=\"row\">\n            <div class=\"col-md-12 col-sm-12 col-xs-12\">\n              <div class=\"comments\">\n                <h3 class=\"num-cmt\">{{trackcomments.length}} Comments</h3>\n                <div class=\"add-comment\" *ngIf=\"user && user.user\">\n                    <form>\n                      <div class=\"s-img\"><img src=\"{{user['user'].image ? user_img_url+user['user'].image : 'img/fan1.png'}}\" alt=\"img\"></div>\n                        <div class=\"form-group\">\n                            <label for=\"cmmt\">Write a Comment</label>\n                            <input type=\"text\" class=\"form-control\" id=\"cmmt\" name=\"comment\" [(ngModel)]=\"comment_txt\" placeholder=\"Write a comment\">\n                          </div>\n                          <div class=\"button_group\">\n                        <button type=\"submit\" (click)=\"postComment()\" [disabled]=\"show_spinner\" class=\"update-btn\">Post <i class=\"fa fa-spinner fa-spin\" *ngIf=\"show_spinner\"></i></button>\n                      </div>\n                    </form>\n\t\t\t\t\t\t\t\t\t</div>\n                <div class=\"login-alert\" *ngIf=\"!user\">Please Login to leave your comment</div>\n                <div class=\"comment-block col-md-12\" *ngFor=\"let comment of trackcomments; let i=index;\">\n                  <div class=\"s-name\">{{comment['track_id']['name']}}</div>\n                  <div class=\"pull-right\"><a href=\"javascript:;\" (click)=\"removeComment(comment._id)\"><i class=\"fa fa-trash\"></i></a></div>\n                  <div class=\"s-img\"><img src=\"{{comment['user_id']['image'] ? user_img_url+comment['user_id']['image'] : 'img/fan1.png'}}\" alt=\"img\"></div>\n                  <div class=\"cm-date-name\">\n                    <h6>{{comment['user_id']['first_name']+' '+comment['user_id']['last_name']}}.</h6>\n                    <p>{{comment['created_at'] | timeAgo}}</p>\n                    <div class=\"profile-descriptions\">\n                      <p>{{comment['comment']}}</p>\n                    </div>\n                  </div>\n                  \n\n                </div>\n              </div>\n            </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

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

module.exports = "\n<section class=\"banner-wrap\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <div class=\"banner-content\">\n          <h2>Lorem ipsum dolor sit amet</h2>\n          <p>ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoco</p>\n          <div class=\"btn-grp\"><a href=\"javascript:;\" class=\"vote-now-btn\" >vote now</a></div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"filter-wrap\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-8 col-sm-9 col-xs-6\">\n        <div class=\"mobile-filter-list\"><i class=\"fa fa-filter\" aria-hidden=\"true\"></i></div>\n        <div class=\"filter-list\">\n          <ul>\n            <li class=\"{{music_type_index == -1 ? 'active' : ''}}\"><a href=\"javascript:;\" (click)=\"getDataByMusicType({}, -1)\">All Styles</a></li>\n            <li class=\"{{music_type_index == i ? 'active' : ''}}\" *ngFor=\"let music of music_type_list; let i = index;\">\n              <a href=\"javascript:;\" (click)=\"getDataByMusicType({music_type:music._id}, i)\">{{music.name}}</a>\n            </li>\n          </ul>\n        </div>\n      </div> \n      <div class=\"col-md-4 col-sm-3 col-xs-6\">\n        <div class=\"search-wrap custom_search_wrap\">\n          <form>\n            <div class=\"mobile-search\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></div>\n            <div class=\"search-input\">\n              <input type=\"text\" placeholder=\"Search by Artist Name or Song Title\" name=\"filter\" (keyup)=\"filter($event)\"  [(ngModel)]=\"search_str\"/>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section class=\"finalist-wrap\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"head-global\"><h2>Round Two Finalists</h2></div>\n      </div>\n      <div class=\"finalists-container\">\n        \n          <app-carousel-scroll [images]=\"images\" [showFavourit]='true' [carouselType]='\"normal\"'></app-carousel-scroll>\n         \n      </div>\n    </div>\n  </div>\n</section>\n\n\n<section class=\"newuploads-wrap\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"head-global\"><h2>New Uploads</h2></div>\n      </div>\n    </div>\n      <div class=\"uploads-container\">\n        <div class=\"row\">\n          <div class=\"col-md-4 col-sm-4 col-xs-12\" *ngFor=\"let nupload of data['new_uploads']; let i = index;\">\n            <div class=\"upload\">\n              <div class=\"img-wrap\">\n                <img src=\"{{track_url+nupload.image}}\" alt=\"New Uploads\">\n              </div>\n              <div class=\"content-wrap\">\n                <div class=\"player\">\n                  <div class=\"title\"><a href=\"javascript:;\">{{nupload.name}}</a></div>\n                  <div class=\"finalist-name\">{{nupload.artist_id['first_name']+' '+nupload.artist_id['last_name']}}</div>\n                  <div class=\"action-btn custom-action-btn\">                \n                      <a [style.display]=\"!audio_ins[i] ? 'block' : 'none'\" (click)=\"playAudio(nupload.audio, i)\" class=\"play_img\" ><img src=\"img/play_icon.png\"/></a>\n                      <a [style.display]=\"audio_ins[i] ? 'block' : 'none'\" (click)=\"stopAudio(i)\" class=\"pause_img\"><img src=\"img/pause_icon.png\"/></a>\n                  </div>\n                  <!-- <div class=\"action-btn\"><a href=\"javascript:;\">\n                    <img src=\"img/play.png \" alt=\"Pause \"  [style.display]=\"!audio_ins[i] ? 'block' : 'none'\" (click)=\"playAudio(nupload.audio, i)\">\n                    <img src=\"img/pause.png \" alt=\"Pause \"  [style.display]=\"audio_ins[i] ? 'block' : 'none'\" (click)=\"stopAudio(i)\">\n                  </a></div> -->\n                </div>\n                <div class=\"location\">\n                  <p><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i><span>New York</span></p>\n                  <div class=\"cat {{nupload.artist_id.music_type['alias']}}\">{{nupload.artist_id.music_type['name']}}</div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n  </div>\n</section>\n\n"

/***/ }),

/***/ "../../../../../src/app/dashboard-layout/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_service__ = __webpack_require__("../../../../../src/app/dashboard-layout/dashboard/dashboard.service.ts");
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




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(DashboardService, toastr) {
        this.DashboardService = DashboardService;
        this.toastr = toastr;
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
        this.search_str = '';
        this.getAllData({});
        this.getAllMusicType();
    }
    DashboardComponent.prototype.ngOnInit = function () {
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
    // Get all whatsnew data
    DashboardComponent.prototype.getAllData = function (data) {
        var _this = this;
        this.DashboardService.getAllData(data).subscribe(function (response) {
            _this.data = response;
            _this.InitializeSider(_this.data['finalist']);
        });
    };
    // Play audio
    DashboardComponent.prototype.playAudio = function (name, index) {
        var audio = new Audio();
        audio.src = this.track_url + name;
        audio.load();
        audio.play();
        if (!this.audio_ins.hasOwnProperty(index)) {
            this.audio_ins[index] = audio;
        }
    };
    // Stop audio
    DashboardComponent.prototype.stopAudio = function (index) {
        console.log(this.audio_ins[index]);
        this.audio_ins[index].pause();
        this.audio_ins[index].currentTime = 0;
        // this.audio_ins[index].stop();
        delete this.audio_ins[index];
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
            __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]])
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

module.exports = "<footer class=\"custom_footer\">\n  <div class=\"container\">\n\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n      <div class=\"foo-top \">\n        <div class=\"row\">\n          <div class=\"col-md-2 col-sm-2 col-xs-6\">\n            <ul class=\"foo-links\">\n              <li>\n                <a href=\"#\">Whats New</a>\n              </li>\n              <li>\n                <a href=\"#\">Artists</a>\n              </li>\n              <li>\n                <a href=\"#\">Vote</a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"col-md-2 col-sm-2 col-xs-6\">\n            <ul class=\"foo-links\">\n              <li>\n                <a href=\"#\">FAQ</a>\n              </li>\n              <li>\n                <a href=\"#\">Privacy Policy</a>\n              </li>\n              <li>\n                <a href=\"#\">Terms & Conditions</a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"col-md-3 col-sm-3 col-xs-12 social-right\">\n            <ul class=\"social-list\">\n              <li>\n                <a href=\"#\">\n                  <i class=\"fa fa-instagram\" aria-hidden=\"true\"></i>\n                </a>\n              </li>\n              <li>\n                <a href=\"#\">\n                  <i class=\"fa fa-facebook-square\" aria-hidden=\"true\"></i>\n                </a>\n              </li>\n              <li>\n                <a href=\"#\">\n                  <i class=\"fa fa-twitter-square\" aria-hidden=\"true\"></i>\n                </a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n      <div class=\"foo-bottom col-sm-12\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"copyright\">\n              <a class=\"foo-logo\" href=\"#\">\n                <img src=\"img/foo-logo.png\" alt=\"\">\n              </a>\n              <span>© America’s Original Music</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>"

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

module.exports = "<header class=\"custom_header\">\n  <div class=\"container\">\n    <div class=\"row\" *ngIf=\"!user\">\n      <div class=\"col-md-3 col-sm-3 col-xs-3\">\n        <div class=\"logo-wrap\">\n          <a href=\"javascript:;\" routerLink=\"\">\n            <img src=\"img/logo.png\" alt=\"\">\n          </a>\n        </div>\n      </div>\n      <div class=\"col-md-9 col-sm-9 col-xs-9\">\n        <div class=\"mobile-nav\">\n          <a href=\"javascript:;\">\n            <i class=\"fa fa-bars\"></i>\n          </a>\n        </div>\n        <nav class=\"navigation\">\n          <ul>\n            <li routerLinkActive=\"active\">\n              <a href=\"javascript:;\" routerLink=\"/whats-new\">What's new</a>\n            </li>\n            <li routerLinkActive=\"active\">\n              <a href=\"javascript:;\" routerLink=\"/artist\">Artits</a>\n            </li>\n            <li routerLinkActive=\"active\">\n              <a href=\"javascript:;\" routerLink=\"/vote\">Vote</a>\n            </li>\n            <li data-fancybox data-animation-duration=\"700\" data-src=\"javascript:;login\">\n              <a href=\"javascript:;\" (click)=\"openVerticallyCentered(content)\">Login</a>\n            </li>\n            <li class=\"register-btn\">\n              <a href=\"javascript:;\" routerLink=\"/register\">Register</a>\n            </li>\n          </ul>\n        </nav>\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"user && user.artist\">\n\t\t\t\t<div class=\"col-md-2 col-sm-2 col-xs-2\">\n\t\t\t\t\t<div class=\"logo-wrap\">\n\t\t\t\t\t\t<a href=\"javascript:;\" routerLink=\"\"><img src=\"img/logo.png\" alt=\"\"></a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-10 col-sm-10 col-xs-10\">\n\t\t\t\t\t<div class=\"nav-header\">\n\t\t\t\t\t\t<div class=\"mobile-nav\"><a href=\"javascript:;\"><i class=\"fa fa-bars\"></i></a></div>\n\t\t\t\t\t\t<nav class=\"navigation\">\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li routerLinkActive=\"active\"><a href=\"javascript:;\" routerLink=\"/whats-new\">What's new</a></li>\n\t\t\t\t\t\t\t\t<li routerLinkActive=\"active\"><a href=\"javascript:;\" routerLink=\"/artist\">Artits</a></li>\n\t\t\t\t\t\t\t\t<li routerLinkActive=\"active\"><a href=\"javascript:;\" routerLink=\"/vote\">Vote</a></li>\n\t\t\t\t\t\t\t\t<li routerLinkActive=\"active\"><a href=\"javascript:;\" routerLink=\"/my-music\">My Music</a></li>\n\t\t\t\t\t\t\t\t<li routerLinkActive=\"active\"><a href=\"javascript:;\" routerLink=\"/my-profile\">My Profile</a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</nav>\n\t\t\t\t\t\t<div class=\"logged-in-header\">\n\t\t\t\t\t\t\t<ul class=\"update-option\">\n\t\t\t\t\t\t\t\t<li class=\"message\"><a href=\"javascript:;\"><i class=\"fa fa-envelope-o\" aria-hidden=\"true\"></i> <span class=\"new-up\"></span></a></li>\n\t\t\t\t\t\t\t\t<li class=\"notification\"><a href=\"javascript:;\"><i class=\"fa fa-bell\" aria-hidden=\"true\"></i> <span class=\"new-up\"></span></a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t<div class=\"profile-picture\" ngbDropdown >\n\t\t\t\t\t\t\t\t<a href=\"javascirpt:;\" ngbDropdownToggle>\n                  <img src=\"{{user.artist.image != '' ? user.artist.image : 'img/upload1.png'}}\" *ngIf=\"user.artist\" alt=\"Profile Picture\">\n                  <img src=\"{{user.user.image != '' ? user.user.image : 'img/upload1.png'}}\" *ngIf=\"user.user\" alt=\"Profile Picture\">\n                </a>\n                <!-- <div ngbDropdownMenu>\n                    <button class=\"dropdown-item\">Logout</button>\n                </div> -->\n\t\t\t\t\t\t\t</div>\n            </div>\n            <ul class=\"logout_ul\">\n              <li>\n                <a href=\"javascript:;\" (click)=\"logout()\">LogOut</a></li>\n            </ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n    </div>\n    <div class=\"row\" *ngIf=\"user && user.user\">\n\t\t\t\t<div class=\"col-md-2 col-sm-2 col-xs-2\">\n\t\t\t\t\t<div class=\"logo-wrap\">\n\t\t\t\t\t\t<a href=\"javascript:;\" routerLink=\"\"><img src=\"img/logo.png\" alt=\"\"></a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-10 col-sm-10 col-xs-10\">\n\t\t\t\t\t<div class=\"nav-header\">\n\t\t\t\t\t\t<div class=\"mobile-nav\"><a href=\"javascript:;\"><i class=\"fa fa-bars\"></i></a></div>\n\t\t\t\t\t\t<nav class=\"navigation\">\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li routerLinkActive=\"active\"><a href=\"javascript:;\" routerLink=\"/whats-new\">What's new</a></li>\n\t\t\t\t\t\t\t\t<li routerLinkActive=\"active\"><a href=\"javascript:;\" routerLink=\"/artist\">Artits</a></li>\n\t\t\t\t\t\t\t\t<li routerLinkActive=\"active\"><a href=\"javascript:;\" routerLink=\"/vote\">Vote</a></li>\n\t\t\t\t\t\t\t\t<li routerLinkActive=\"active\"><a href=\"javascript:;\" routerLink=\"/my-profile\">My Profile</a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</nav>\n\t\t\t\t\t\t<div class=\"logged-in-header\">\n\t\t\t\t\t\t\t<ul class=\"update-option\">\n\t\t\t\t\t\t\t\t<li class=\"notification\"><a href=\"javascript:;\"><i class=\"fa fa-bell\" aria-hidden=\"true\"></i> <span class=\"new-up\"></span></a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t<div class=\"profile-picture\" ngbDropdown>\n\t\t\t\t\t\t\t\t<a href=\"javascirpt:;\" ngbDropdownToggle>\n                  <img src=\"{{user.artist.image != '' ? user.artist.image : 'img/upload1.png'}}\" *ngIf=\"user.artist\" alt=\"Profile Picture\">\n                  <img src=\"{{user.user.image != '' ? user.user.image : 'img/upload1.png'}}\" *ngIf=\"user.user\" alt=\"Profile Picture\">\n                </a>\n                \n\t\t\t\t\t\t\t</div>\n            </div>\n            <ul class=\"logout_ul\">\n              <li>\n                <a href=\"javascript:;\" (click)=\"logout()\">LogOut</a></li>\n            </ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n    </div>\n  </div>\n</header>\n<ng-template #content let-c=\"close\" let-d=\"dismiss\" >\n  <div class=\"modal_login_wrapper\">\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n  <div class=\"modal-body\">\n    <div class=\"login-modal\">\n\t\t\t<div class=\"social-login\">\n\t\t\t\t<div class=\"google-login\">\n\t\t\t\t\t<a href=\"javascript:;\"><i class=\"fa fa-google\" aria-hidden=\"true\"></i> <span>Login with Google</span></a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"fb-login\">\n\t\t\t\t\t<a href=\"javascript:;\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i> <span>Login with Facebook</span></a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"or\">or with email</div>\n\t\t\t<div class=\"email-form\">\n\t\t\t\t<form [formGroup]=\"login_form\">\n\t\t\t\t\t<div class=\"form-group\">\n            <label for=\"email\">Email</label>\n            <input type=\"email\" class=\"form-control\" formControlName=\"email\" name=\"email\" id=\"email\" [(ngModel)]=\"userdata.email\" placeholder=\"Email\">\n            <div *ngIf=\"!login_form.controls['email'].valid && login_form.controls['email'].dirty\">\n              <span *ngIf=\"login_form.controls['email'].errors['required']\" class=\"text-danger\">Email is required.</span>\n            </div>\n          </div>\n          <div class=\"form-group pwd-grp\">\n            <label for=\"pwd\">Password</label>\n            <input type=\"password\" class=\"form-control\" formControlName=\"password\" name=\"password\" id=\"pwd\" [(ngModel)]=\"userdata.password\" placeholder=\"Password\">\n            <div class=\"pwd-icon\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i></div>\n            <div *ngIf=\"!login_form.controls['password'].valid && login_form.controls['password'].dirty\">\n              <span *ngIf=\"login_form.controls['password'].errors['required']\" class=\"text-danger\">Password is required.</span>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"pwd\">Type</label>\n            <select class=\"form-control\" name=\"type\" formControlName=\"type\" [(ngModel)]=\"userdata.type\">\n              <option value=\"artist\">Artist</option>\n              <option value=\"listener\">Listener</option>\n            </select>\n          </div>\n          <div class=\"login-btn\"><button (click)=\"login()\" [disabled]=\"!login_form.valid || show_spinner\">Log In <i *ngIf=\"show_spinner\" class=\"fa fa-spinner fa-spin\"></i></button></div>\n          <div class=\"forgot-link\"><a href=\"javascript:;\" (click)=\"openForgetPasswordModal(forget)\">Forgot Password</a></div>\n          <div class=\"register-link\">Don't have an account yet? <a href=\"javascript:;\" routerLink=\"/register\">Register</a></div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n  </div>\n</div>\n</ng-template>\n<ng-template #forget let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\" style=\"border:none;\">\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <form [formGroup]=\"forget_form\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group\">\n            <label class=\"control-label\">login Type</label>\n            <select class=\"form-control\" formControlName=\"type\" name=\"type\" [(ngModel)]=\"forget_pwd_data.type\">\n              <option value=\"artist\">Artist</option>\n              <option value=\"user\">User</option>\n            </select>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"control-label\">Email Id</label>\n            <input class=\"form-control\" name=\"email\" formControlName=\"email\" [(ngModel)]=\"forget_pwd_data.email\"/>\n            <div *ngIf=\"!forget_form.controls['email'].valid && forget_form.controls['email'].dirty && forget_form.controls['email'].touched\">\n              <span *ngIf=\"forget_form.controls['email'].errors['required']\" class=\"text-danger\">Email is required.</span>\n              <span *ngIf=\"forget_form.controls['email'].errors['email']\" class=\"text-danger\">Enter valid email.</span>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <button class=\"btn btn-success\" (click)=\"forgetPassword()\" [disabled]=\"!forget_form.valid || show_spinner\">Submit <i *ngIf=\"show_spinner\" class=\"fa fa-spinner fa-spin\"></i></button>\n          </div>\n        </div>\n      </form>\n    </div>\n</ng-template>"

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
    function HeaderComponent(modalService, fb, HeaderService, toastr, router) {
        this.modalService = modalService;
        this.fb = fb;
        this.HeaderService = HeaderService;
        this.toastr = toastr;
        this.router = router;
        this.user = '';
        this.show_spinner = false;
        this.userdata = {};
        this.forget_pwd_data = {};
        this.user = JSON.parse(localStorage.getItem('user'));
        if (this.user && this.user.artist) {
            this.user.artist['image'] = typeof this.user.artist['image'] != 'undefined' ? __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].ARTIST_IMG + this.user.artist['image'] : '';
        }
        else if (this.user && this.user.user) {
            this.user.user['image'] = typeof this.user.user['image'] != 'undefined' ? __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].USER_IMG + this.user.user['image'] : '';
        }
        this.login_form = this.fb.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            type: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]]
        });
        this.forget_form = this.fb.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].email]],
            type: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]]
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
    };
    HeaderComponent.prototype.openVerticallyCentered = function (content) {
        this.show_spinner = false;
        this.userdata = {};
        this.modalRef = this.modalService.open(content, { centered: true, windowClass: 'modal-wrapper' });
    };
    HeaderComponent.prototype.openForgetPasswordModal = function (content) {
        this.modalRef.close();
        this.modalForgetRef = this.modalService.open(content, { centered: true });
    };
    HeaderComponent.prototype.login = function () {
        var _this = this;
        console.log('login', this.userdata);
        this.show_spinner = true;
        if (this.userdata['type'] == 'artist') {
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
    };
    HeaderComponent.prototype.forgetPassword = function () {
        var _this = this;
        this.show_spinner = true;
        if (this.forget_pwd_data && this.forget_pwd_data.type == 'artist') {
            this.HeaderService.artistForgetPassword({ email: this.forget_pwd_data.email }).subscribe(function (response) {
                _this.toastr.success(response['message'], 'Success!');
            }, function (error) {
                _this.toastr.error(error['error'].message, 'Error!');
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
                _this.toastr.error(error['error'].message, 'Error!');
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
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_io_slimscroll__ = __webpack_require__("../../../../angular-io-slimscroll/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_io_slimscroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular_io_slimscroll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard-layout/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__layout_dashboard_layout_component__ = __webpack_require__("../../../../../src/app/dashboard-layout/layout/dashboard-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__whatsnew_whatsnew_component__ = __webpack_require__("../../../../../src/app/dashboard-layout/whatsnew/whatsnew.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__artist_artist_component__ = __webpack_require__("../../../../../src/app/dashboard-layout/artist/artist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__artist_comments_comments_component__ = __webpack_require__("../../../../../src/app/dashboard-layout/artist_comments/comments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__track_comments_track_comments_component__ = __webpack_require__("../../../../../src/app/dashboard-layout/track_comments/track_comments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__artist_track_comments_artist_track_comments_component__ = __webpack_require__("../../../../../src/app/dashboard-layout/artist_track_comments/artist_track_comments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__artist_profile_artist_profile_component__ = __webpack_require__("../../../../../src/app/dashboard-layout/artist_profile/artist_profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__vote_vote_component__ = __webpack_require__("../../../../../src/app/dashboard-layout/vote/vote.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__my_profile_myProfile_component__ = __webpack_require__("../../../../../src/app/dashboard-layout/my_profile/myProfile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__my_music_my_music_component__ = __webpack_require__("../../../../../src/app/dashboard-layout/my_music/my_music.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__layout_dashboard_layout_module__ = __webpack_require__("../../../../../src/app/dashboard-layout/layout/dashboard-layout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_carousel_carousel_module__ = __webpack_require__("../../../../../src/app/shared/carousel/carousel.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__header_header_service__ = __webpack_require__("../../../../../src/app/dashboard-layout/header/header.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__my_profile_myProfile_service__ = __webpack_require__("../../../../../src/app/dashboard-layout/my_profile/myProfile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__my_music_my_music_service__ = __webpack_require__("../../../../../src/app/dashboard-layout/my_music/my_music.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__whatsnew_whatsnew_service__ = __webpack_require__("../../../../../src/app/dashboard-layout/whatsnew/whatsnew.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__artist_artist_service__ = __webpack_require__("../../../../../src/app/dashboard-layout/artist/artist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__artist_comments_comments_service__ = __webpack_require__("../../../../../src/app/dashboard-layout/artist_comments/comments.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__track_comments_track_comments_service__ = __webpack_require__("../../../../../src/app/dashboard-layout/track_comments/track_comments.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__artist_track_comments_artist_track_comments_service__ = __webpack_require__("../../../../../src/app/dashboard-layout/artist_track_comments/artist_track_comments.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__artist_profile_artist_profile_service__ = __webpack_require__("../../../../../src/app/dashboard-layout/artist_profile/artist_profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__resolve_artist_resolve__ = __webpack_require__("../../../../../src/app/dashboard-layout/resolve/artist_resolve/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__resolve_track_comment_resolve__ = __webpack_require__("../../../../../src/app/dashboard-layout/resolve/track_comment_resolve/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__dashboard_dashboard_service__ = __webpack_require__("../../../../../src/app/dashboard-layout/dashboard/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_angular2_lightbox__ = __webpack_require__("../../../../angular2-lightbox/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_angular2_lightbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_34_angular2_lightbox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_time_ago_pipe__ = __webpack_require__("../../../../time-ago-pipe/esm5/time-ago-pipe.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__shared_auth_service__ = __webpack_require__("../../../../../src/app/shared/auth.service.ts");
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
                __WEBPACK_IMPORTED_MODULE_16__layout_dashboard_layout_module__["a" /* DashboardLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_17__shared_carousel_carousel_module__["a" /* CarouselModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_32__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_32__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_36__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_33_ngx_toastr__["a" /* ToastrModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_1_angular_highcharts__["b" /* ChartModule */],
                __WEBPACK_IMPORTED_MODULE_34_angular2_lightbox__["LightboxModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_6__layout_dashboard_layout_component__["a" /* DashboardLayoutComponent */],
                        children: [
                            { path: '', component: __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__["a" /* DashboardComponent */] },
                            { path: 'whats-new', component: __WEBPACK_IMPORTED_MODULE_7__whatsnew_whatsnew_component__["a" /* WhatsNewComponent */] },
                            { path: 'artist', component: __WEBPACK_IMPORTED_MODULE_8__artist_artist_component__["a" /* ArtistComponent */] },
                            { path: 'artist_track_comment/:id', component: __WEBPACK_IMPORTED_MODULE_11__artist_track_comments_artist_track_comments_component__["a" /* ArtistTrackConmmentsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_37__shared_auth_service__["a" /* AuthService */]] },
                            { path: 'artist_profile/:artist_id/track/:id/comments', component: __WEBPACK_IMPORTED_MODULE_10__track_comments_track_comments_component__["a" /* TrackConmmentsComponent */], resolve: { comment: __WEBPACK_IMPORTED_MODULE_30__resolve_track_comment_resolve__["b" /* TrackCommentResolve */], artist: __WEBPACK_IMPORTED_MODULE_30__resolve_track_comment_resolve__["a" /* TrackArtistProfileResolve */], track: __WEBPACK_IMPORTED_MODULE_30__resolve_track_comment_resolve__["c" /* TrackDetailResolve */] } },
                            { path: 'artist_profile/:id/comments', component: __WEBPACK_IMPORTED_MODULE_9__artist_comments_comments_component__["a" /* ConmmentsComponent */], resolve: { artist: __WEBPACK_IMPORTED_MODULE_29__resolve_artist_resolve__["d" /* ArtistProfileResolve */], comments: __WEBPACK_IMPORTED_MODULE_29__resolve_artist_resolve__["a" /* ArtistCommentsResolve */] } },
                            { path: 'artist_profile/:id', component: __WEBPACK_IMPORTED_MODULE_12__artist_profile_artist_profile_component__["a" /* ArtistProfileComponent */], resolve: { artist: __WEBPACK_IMPORTED_MODULE_29__resolve_artist_resolve__["d" /* ArtistProfileResolve */], track: __WEBPACK_IMPORTED_MODULE_29__resolve_artist_resolve__["f" /* ArtistTrackResolve */], media: __WEBPACK_IMPORTED_MODULE_29__resolve_artist_resolve__["c" /* ArtistMediaResolve */], follower: __WEBPACK_IMPORTED_MODULE_29__resolve_artist_resolve__["b" /* ArtistFollowerResolve */], comments: __WEBPACK_IMPORTED_MODULE_29__resolve_artist_resolve__["a" /* ArtistCommentsResolve */], ranking: __WEBPACK_IMPORTED_MODULE_29__resolve_artist_resolve__["e" /* ArtistRankingResolve */] } },
                            { path: 'vote', component: __WEBPACK_IMPORTED_MODULE_13__vote_vote_component__["a" /* VoteComponent */] },
                            { path: 'my-music', component: __WEBPACK_IMPORTED_MODULE_15__my_music_my_music_component__["a" /* MyMusicComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_37__shared_auth_service__["a" /* AuthService */]] },
                            { path: 'my-profile', component: __WEBPACK_IMPORTED_MODULE_14__my_profile_myProfile_component__["a" /* MyProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_37__shared_auth_service__["a" /* AuthService */]] }
                        ]
                    }
                ])
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_7__whatsnew_whatsnew_component__["a" /* WhatsNewComponent */],
                __WEBPACK_IMPORTED_MODULE_8__artist_artist_component__["a" /* ArtistComponent */],
                __WEBPACK_IMPORTED_MODULE_9__artist_comments_comments_component__["a" /* ConmmentsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__vote_vote_component__["a" /* VoteComponent */],
                __WEBPACK_IMPORTED_MODULE_14__my_profile_myProfile_component__["a" /* MyProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_15__my_music_my_music_component__["a" /* MyMusicComponent */],
                __WEBPACK_IMPORTED_MODULE_4_angular_io_slimscroll__["SlimScroll"],
                __WEBPACK_IMPORTED_MODULE_12__artist_profile_artist_profile_component__["a" /* ArtistProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_10__track_comments_track_comments_component__["a" /* TrackConmmentsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__artist_track_comments_artist_track_comments_component__["a" /* ArtistTrackConmmentsComponent */],
                __WEBPACK_IMPORTED_MODULE_35_time_ago_pipe__["a" /* TimeAgoPipe */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_20__header_header_service__["a" /* HeaderService */],
                __WEBPACK_IMPORTED_MODULE_37__shared_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_21__my_profile_myProfile_service__["a" /* MyProfileService */],
                __WEBPACK_IMPORTED_MODULE_22__my_music_my_music_service__["a" /* MyMusicService */],
                __WEBPACK_IMPORTED_MODULE_23__whatsnew_whatsnew_service__["a" /* WhatsNewService */],
                __WEBPACK_IMPORTED_MODULE_24__artist_artist_service__["a" /* ArtistService */],
                __WEBPACK_IMPORTED_MODULE_25__artist_comments_comments_service__["a" /* CommentsService */],
                __WEBPACK_IMPORTED_MODULE_31__dashboard_dashboard_service__["a" /* DashboardService */],
                __WEBPACK_IMPORTED_MODULE_27__artist_track_comments_artist_track_comments_service__["a" /* ArtistTrackCommentsService */],
                __WEBPACK_IMPORTED_MODULE_28__artist_profile_artist_profile_service__["a" /* ArtistProfileService */],
                __WEBPACK_IMPORTED_MODULE_29__resolve_artist_resolve__["d" /* ArtistProfileResolve */],
                __WEBPACK_IMPORTED_MODULE_29__resolve_artist_resolve__["f" /* ArtistTrackResolve */],
                __WEBPACK_IMPORTED_MODULE_29__resolve_artist_resolve__["c" /* ArtistMediaResolve */],
                __WEBPACK_IMPORTED_MODULE_29__resolve_artist_resolve__["a" /* ArtistCommentsResolve */],
                __WEBPACK_IMPORTED_MODULE_29__resolve_artist_resolve__["b" /* ArtistFollowerResolve */],
                __WEBPACK_IMPORTED_MODULE_29__resolve_artist_resolve__["e" /* ArtistRankingResolve */],
                __WEBPACK_IMPORTED_MODULE_26__track_comments_track_comments_service__["a" /* TrackCommentsService */],
                __WEBPACK_IMPORTED_MODULE_30__resolve_track_comment_resolve__["b" /* TrackCommentResolve */],
                __WEBPACK_IMPORTED_MODULE_30__resolve_track_comment_resolve__["a" /* TrackArtistProfileResolve */],
                __WEBPACK_IMPORTED_MODULE_30__resolve_track_comment_resolve__["c" /* TrackDetailResolve */]
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

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n\n<section class=\"player-wrapper\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"aom_audio_player\">\n          <!-- <img src=\"img/player.png\" alt=\"\"> -->\n          <!-- <audio controls>\n              <source src=\"horse.ogg\" type=\"audio/ogg\">\n              <source src=\"img/In My City - Priyanka Chopra (ft. Will.i.am).mp3\" type=\"audio/mpeg\">\n            Your browser does not support the audio element.\n          </audio> -->\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard-layout/layout/dashboard-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardLayoutComponent; });
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

var DashboardLayoutComponent = /** @class */ (function () {
    function DashboardLayoutComponent() {
        console.log("dashboard component");
    }
    DashboardLayoutComponent.prototype.ngOnInit = function () {
    };
    DashboardLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard-layout',
            template: __webpack_require__("../../../../../src/app/dashboard-layout/layout/dashboard-layout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard-layout/layout/dashboard-layout.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild([])
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__dashboard_layout_component__["a" /* DashboardLayoutComponent */], __WEBPACK_IMPORTED_MODULE_4__header_header_component__["a" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__["a" /* FooterComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__dashboard_layout_component__["a" /* DashboardLayoutComponent */]],
        })
    ], DashboardLayoutModule);
    return DashboardLayoutModule;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard-layout/my_music/my_music.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"mymusic-wrap\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-2 col-sm-3 col-xs-12\">\n        <div class=\"track-menu\">\n          <ul class=\"nav nav-tabs\" id=\"myTab\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link {{tab_cnt == 1 ? 'active' : ''}}\" (click)=\"tabChanged(1)\" data-toggle=\"tab\" href=\"javascript:;\" >My Track</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link {{tab_cnt == 2 ? 'active' : ''}}\" (click)=\"tabChanged(2)\"  data-toggle=\"tab\" href=\"javascript:;\" >Stats</a>\n            </li>\n          </ul>\n          \n          <p><a data-fancybox data-animation-duration=\"700\" data-src=\"#addtrack\" (click)=\"openModal(content)\"  href=\"javascript:;\"><img src=\"img/icons8-plus_mathNormal.png\" alt=\"Plus Icone\"> Add Track</a></p>\n        </div>\n      </div>\n      <div class=\"col-md-10 col-sm-9 col-xs-12\">\n        <div class=\"tab-content\">\n          <div class=\"tab-pane fade {{tab_cnt == 1 ? 'show active' : ''}}\" id=\"mytracks\">\n            <div class=\"track-table\">\n              <div class=\"alert alert-info\" *ngIf=\"tracklist.length == 0\">\n                No data available.\n              </div>\n              <table>\n                <tbody>\n                  <tr *ngFor=\"let t of tracklist; let i =  index;\">\n                    <td class=\"serial-num\">{{i+1}}.</td>\n                    <td class=\"play-option\">\n                      <a href=\"javascript:;\" (click)=\"playAudio(t.audio, i)\" *ngIf=\"!audio_ins[i]\">\n                        <img src=\"img/new-play.png\" alt=\"Play\" >\n                      </a>\n                      <a href=\"javascript:;\" (click)=\"stopAudio(i)\" *ngIf=\"audio_ins[i]\">\n                        <img src=\"img/pause.png\" alt=\"Play\" >\n                      </a>\n                    </td>\n                    <td class=\"track-pic\"><a href=\"javascript:;\">\n                      <img src=\"{{track_url+t.image}}\" *ngIf=\"t.image\" width=\"50\" height=\"50\" alt=\"Track Image\">\n                      <img src=\"img/track-img.png\" *ngIf=\"!t.image\" alt=\"Track Image\">\n                    </a></td>\n                    <td class=\"track-det\" colspan=\"2\">\n                      <p class=\"track-name\">{{t.name}}</p>\n                      <p class=\"track-singer\">{{userinfo.artist.first_name + ' '+ userinfo.artist.last_name}}</p>\n                      <p class=\"track-year\">{{t.created_at | date : 'MMMM dd, yyyy'}}</p>\n                    </td>\n                    <td class=\"td track-vote\" style=\"display: none;\">\n                      <img src=\"img/start.png\" alt=\"start\">\n                      <span>1300 <br> <span>Votes</span></span>\n                    </td>\n\n                    <td class=\"contest-btn\" >\n                      <a data-fancybox data-animation-duration=\"700\" (click)=\"openContestModal(contest, t)\" data-src=\"#submitcontest\" href=\"javascript:;\">Submit for a Contest</a>\n                    </td>\n                    <td class=\"action\" colspan=\"2\">\n                      <div class=\"track-like\" style=\"top:10px;\">\n                          <label class=\"switch\" title=\"Track Download status\">\n                              <input type=\"checkbox\"  [checked]=\"t.is_downloadable\" (change)=\"updateTrackDownLoadStatus(t._id)\" />\n                              <!-- <input type=\"checkbox\" *ngIf=\"!t.is_downloadable\" (change)=\"updateTrackDownLoadStatus(t._id)\" /> -->\n                              <span class=\"slider round\"></span>\n                          </label>\n                      </div>\n                      <div class=\"track-like\">\n                        <a href=\"javascript:;\"><img src=\"img/likehand.png\" alt=\"Like Thumb\"></a>\n                        <span class=\"new-up\"></span>\n                      </div>\n                      <div class=\"track-comment\">\n                        <a href=\"javascript:;\" routerLink=\"/artist_track_comment/{{t._id}}\"><img src=\"img/comment.png\" alt=\"Comment\"></a>\n                        <span class=\"new-up\"></span>\n                      </div>\n                      <div class=\"track-price\"><a href=\"#\">${{t.price}}</a></div>\n                      <div class=\"share\"><a href=\"javascript:;\"><img src=\"img/share.png\" alt=\"Track Share\"></a></div>\n                      <div class=\"track-edit\"><a data-fancybox data-animation-duration=\"700\" data-src=\"#edittrack\" (click)=\"openEditTrackModal(editTrack, t)\"  href=\"javascript:;\"><img src=\"img/edit.png\" alt=\"Track Edit\"></a></div>\n                      <div class=\"track-del\"><a data-fancybox data-animation-duration=\"700\" data-src=\"#delete\" (click)=\"removeTrack(t._id)\" href=\"javascript:;\"><img src=\"img/del.png\" alt=\"Track Delete\"></a></div>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n          <div class=\"tab-pane fade {{tab_cnt == 2 ? 'show active' : ''}}\" id=\"stats\">\n            <div class=\"track-table\">\n                <div class=\"alert alert-info\" *ngIf=\"tracklist.length == 0\">\n                  No data available.\n                </div>\n              <table>\n                <tbody>\n                  <tr *ngFor=\"let t of tracklist; let i =  index;\">\n                    <td class=\"serial-num\">{{i+1}}.</td>\n                    <td class=\"play-option\">\n                        <a href=\"javascript:;\" >\n                          <img src=\"img/play.png \" alt=\"Pause \"  [style.display]=\"!audio_ins[i] ? 'block' : 'none'\" (click)=\"playAudio(t.audio, i)\">\n                          <img src=\"img/pause.png \" alt=\"Pause \"  [style.display]=\"audio_ins[i] ? 'block' : 'none'\" (click)=\"stopAudio(i)\">\n                        </a>\n                    </td>\n                    <td class=\"track-pic\"><a href=\"javascript:;\">\n                        <img src=\"{{track_url+t.image}}\" *ngIf=\"t.image\" width=\"50\" height=\"50\" alt=\"Track Image\">\n                        <img src=\"img/track-img.png\" *ngIf=\"!t.image\" alt=\"Track Image\">\n                    </a></td>\n                    <td class=\"track-det\" colspan=\"2\">\n                      <p class=\"track-name\">{{t.name}}</p>\n                      <p class=\"track-singer\">{{userinfo.artist.first_name + ' '+ userinfo.artist.last_name}}</p>\n                      <p class=\"track-year\">{{t.created_at | date : 'MMMM dd, yyyy'}}</p>\n                    </td>\n                    <td class=\"td track-vote\">\n                      <img src=\"img/start.png\" alt=\"start\">\n                      <span>{{t.no_of_votes}} <br> <span>Votes</span></span>\n                    </td>\n                    <td class=\"action\" colspan=\"2\">\n                      <div class=\"track-like\">\n                        <a href=\"javascript:;\"><img src=\"img/likehand.png\" alt=\"Like Thumb\"></a>\n                        <span class=\"new-up\"></span>\n                      </div>\n                      <div class=\"track-comment\">\n                        <a href=\"javascript:;\" routerLink=\"/artist_track_comment/{{t._id}}\"><img src=\"img/comment.png\" alt=\"Comment\"></a>\n                        <span class=\"new-up\"></span>\n                      </div>\n                      <div class=\"track-price\"><a href=\"javascript:;\">${{t.price}}</a></div>\n                      <div class=\"share\"><a href=\"javascript:;\"><img src=\"img/share.png\" alt=\"Track Share\"></a></div>\n                      <div class=\"track-edit\"><a data-fancybox data-animation-duration=\"700\" data-src=\"#edittrack\"  href=\"javascript:;\"><img src=\"img/edit.png\" alt=\"Track Edit\"></a></div>\n                      <div class=\"track-del\"><a data-fancybox data-animation-duration=\"700\" data-src=\"#delete\"  href=\"javascript:;\"><img src=\"img/del.png\" alt=\"Track Delete\"></a></div>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<ng-template #content let-c=\"close\" let-d=\"dismiss\" >\n\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t</button>\n  <div class=\"modal-body\">\n    <div class=\"add-track-modal\">\n\t\t\t<h3>Add New Track</h3>\n\t\t\t<div class=\"media-upload-btn\" *ngIf=\"!audio_file\"> \n\t\t\t\t<span class=\"upl-img\"><i class=\"fa fa-cloud-upload\" aria-hidden=\"true\"></i></span> \n\t\t\t\t<span class=\"up_text\">Select Music</span> \n\t\t\t\t<input type=\"file\" name=\"my_doc_upload\" id=\"my_doc_upload\" (change)=\"changeAudio($event)\" multiple=\"false\"> \n\t\t\t\t<p class=\"instrution\">AIFF,WAV,FLAC,MP3 or less</p>\n      </div>\n      <div class=\"media-upload-btn\" *ngIf=\"audio_file\">\n        <span class=\"track_name\">{{audio_file.name}}</span>\n        <div class=\"upload-btn-div\">\n          <label for=\"fileUpload\">Upload a Different Photo</label>\n          <input type=\"file\" name=\"my_doc_upload\" (change)=\"changeAudio($event)\" id=\"my_doc_upload\" multiple=\"false\"> \n        </div>\n      </div>\n\t\t\t<div class=\"media_progress_bar\">\n\t\t\t\t<div class=\"det\">\n\t\t\t\t\t<div class=\"upl-file-name\">My Summer.mp3</div>\n\t\t\t\t\t<div class=\"upl-time-rem\">5 sec remaining</div>\n\t\t\t\t\t<div class=\"close-btn\"><img src=\"img/closeNormal.png\" alt=\"Close-btn\"></div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"progress\">\n\t\t\t\t    <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:70%\">\n\t\t\t\t      <span class=\"sr-only\">70% Complete</span>\n\t\t\t\t    </div>\n\t\t\t\t  </div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group tr-name\">\n\t\t\t    <label for=\"tname\">Track Name</label>\n\t\t\t    <input type=\"text\" class=\"form-control\" id=\"tname\" name=\"name\" [(ngModel)]=\"trackdata.name\" placeholder=\"Track Name\">\n\t\t  \t</div>\n\t\t  \t<div class=\"form-group tr-price\">\n\t\t\t    <label for=\"tname\">Price</label>\n\t\t\t    <input type=\"number\" class=\"form-control\" id=\"tname\" name=\"price\" [(ngModel)]=\"trackdata.price\" placeholder=\"$ 1399\">\n\t\t  \t</div>\n\t\t  \t<div class=\"textarea-upload\">\n\t\t\t  \t<div class=\"media-upload-btn song-photo\" *ngIf=\"!add_track_img\"> \n  \t\t\t\t\t<span class=\"upl-img\"><i class=\"fa fa-cloud-upload\" aria-hidden=\"true\"></i></span> \n  \t\t\t\t\t<span class=\"up_text\">Upload <br>Photo</span> \n  \t\t\t\t\t<input type=\"file\" name=\"my_doc_upload\" id=\"my_doc_upload\" (change)=\"changeFile($event)\" multiple=\"false\"> \n          </div>\n          <div class=\"upload-cover\" *ngIf=\"add_track_img\" style=\"width:92.5px;height:85px;\"> \n            <img src=\"{{add_track_img}}\" alt=\"Edit cover Image\" >\n            <input type=\"file\" name=\"my_doc_upload\" id=\"my_doc_upload\" (change)=\"changeFile($event)\" multiple=\"false\">\n          </div>\n\t\t\t\t  <div class=\"form-group\">\n            <label>Describe Yourself</label>\n            <textarea name=\"description\" placeholder=\"Describe Yourself\" [(ngModel)]=\"trackdata.description\" class=\"form-control\" ></textarea>\n          </div>\n      </div>\n\t\t\t<div class=\"button_group\">\n\t\t\t\t<button class=\"add-btn\" (click)=\"addTrack()\" [disabled]=\"show_spinner\">Add Track <i  *ngIf=\"show_spinner\" class=\"fa fa-spinner fa-spin\"></i></button>\n\t\t\t</div>\n\t  </div>\n  </div>\n</ng-template>\n<ng-template #editTrack let-c=\"close\" let-d=\"dismiss\">\n  \t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t</button>\n  <div class=\"modal-body\">\n    <form>\n    <div class=\"edit-track-modal\">\n        <h3>Edit Track</h3>\n        <div class=\"form-group tr-name\">\n            <label for=\"tname\">Track Name</label>\n            <input type=\"text\" class=\"form-control\" id=\"tname\" name=\"name\" [(ngModel)]=\"trackdata.name\" placeholder=\"Track Name\">\n          </div>\n          <div class=\"form-group tr-price\">\n            <label for=\"tname\">Price</label>\n            <input type=\"text\" class=\"form-control\" id=\"tname\" name=\"price\" placeholder=\"$ 1399\" [(ngModel)]=\"trackdata.price\">\n          </div>\n          <div class=\"textarea-upload\">\n            <div class=\"edit-profile-picture\">\n            <div class=\"upload-cover\"> \n              <img src=\"{{edit_image}}\" alt=\"Edit cover Image\">\n              <input type=\"file\" name=\"my_doc_upload\" id=\"my_doc_upload\" (change)=\"changeTrackImage($event)\" multiple=\"false\">\n              <a data-fancybox=\"\" data-animation-duration=\"700\" data-src=\"#delete\" *ngIf=\"trackdata.image\" href=\"javascript:;\" (click)=\"removeTrackImage(trackdata._id)\" class=\"delete\"><i class=\"fa fa-trash\"></i></a>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label>Describe Yourself</label>\n            <textarea name=\"description\" [(ngModel)]=\"trackdata.description\" class=\"form-control\"></textarea>\n          </div>\n        </div>\n        <div class=\"button_group\">\n          <button type=\"submit\" (click)=\"updateTrack()\" [disabled]=\"show_spinner\" class=\"update-btn\">Update <i *ngIf=\"show_spinner\" class=\"fa fa-spinner fa-spin\"></i></button>\n        </div>\n    </div>\n    </form>\n  </div>\n</ng-template>\n<ng-template #contest let-c=\"close\" let-d=\"dismiss\">\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    <div class=\"modal-body\">\n        <div class=\"contest-wrap\" >\n          <h3>Add New Track</h3>\n          <div class=\"contest-table\" data-mcs-theme=\"dark-3\">\n            <table>\n              <tr *ngFor=\"let con of contest_list; let i = index;\">\n                <td>\n                    <!-- <input type=\"radio\" value=\"{{con._id}}\" name=\"card\" [(ngModel)]=\"contest_id\" /> -->\n                  <div class=\"radio\">\n                      <label>\n                        <input type=\"radio\" value=\"{{con._id}}\" name=\"card\" [(ngModel)]=\"contest_id\" />\n                        <span class=\"radio_check\"></span>\n                      </label>\n                  </div>\n                </td>\n                <td><img src=\"img/conest-img.jpg\" alt=\"Contest Image\"></td>\n                <td>\n                  <h3 class=\"c-name\">{{con.name}}</h3>\n                  <div class=\"c-dates\">{{con.start_date | date : 'MMMM dd, yyyy'}} - {{con.end_date | date : 'MMMM dd, yyyy'}}</div>\n                  <div class=\"c-part\">{{con.no_of_participants}} Contest Participants</div>\n                </td>\n              </tr>\n            </table>\n          </div>\n          <div class=\"button_group\">\n            <button type=\"submit\" [disabled]=\"show_spinner\" (click)=\"addTrackToContest()\" class=\"add-btn\">Submit <i *ngIf=\"show_spinner\" class=\"fa fa-spinner fa-spin\"></i></button>\n          </div>\n        </div>\n    </div>\n</ng-template>"

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyMusicComponent = /** @class */ (function () {
    function MyMusicComponent(modalService, MyMusicService, toastr) {
        this.modalService = modalService;
        this.MyMusicService = MyMusicService;
        this.toastr = toastr;
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
    }
    MyMusicComponent.prototype.ngOnInit = function () {
        this.getAllTrack();
        this.getAllMusicType();
        this.getAllContest();
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
        this.trackdata = obj;
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
        if (this.trackdata && this.trackdata.name && this.trackdata.price && this.audio_file && this.image_upload) {
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
                _this.getAllTrack();
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
        else {
            this.toastr.error('Please provide necessary details', 'Error!');
        }
    };
    // Get all track
    MyMusicComponent.prototype.getAllTrack = function () {
        var _this = this;
        this.MyMusicService.getAllTrack().subscribe(function (response) {
            console.log(response);
            _this.tracklist = response['track'];
        });
    };
    // Remove track by id
    MyMusicComponent.prototype.removeTrack = function (id) {
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
        if (this.trackdata && this.trackdata.name && this.trackdata.price && this.trackdata.image) {
            var formdata = new FormData();
            formdata.append('name', this.trackdata.name);
            formdata.append('price', this.trackdata.price);
            formdata.append('image', this.trackdata.image);
            formdata.append('description', this.trackdata.description);
            this.MyMusicService.updateTrack(formdata, this.trackdata._id).subscribe(function (response) {
                if (!response['track']['image']) {
                    _this.edit_image = 'img/profile-img.png';
                }
                _this.getAllTrack();
                _this.toastr.success(response['message'], 'Success!');
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
        else {
            this.toastr.error('Please provide necessary details', 'Error!');
        }
    };
    // Remove track image
    MyMusicComponent.prototype.removeTrackImage = function (id) {
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
            var _this = this;
            if (flag) {
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
    MyMusicComponent.prototype.playAudio = function (name, index) {
        var audio = new Audio();
        audio.src = this.track_url + name;
        audio.load();
        audio.play();
        if (!this.audio_ins.hasOwnProperty(index)) {
            this.audio_ins[index] = audio;
        }
    };
    // Stop audio
    MyMusicComponent.prototype.stopAudio = function (index) {
        console.log(this.audio_ins[index]);
        this.audio_ins[index].pause();
        this.audio_ins[index].currentTime = 0;
        // this.audio_ins[index].stop();
        delete this.audio_ins[index];
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
    MyMusicComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-music',
            template: __webpack_require__("../../../../../src/app/dashboard-layout/my_music/my_music.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_4__my_music_service__["a" /* MyMusicService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */]])
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
    MyMusicService.prototype.getAllTrack = function () {
        return this.http.get(this.api_host + "/artist/track", { headers: this.headers });
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

module.exports = "<section class=\"edit-profile-wrap\" *ngIf=\"userdata.type == 'artist'\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-2 col-sm-3 col-xs-3\">\n                <div class=\"profile-tabs\">\n                    <ul class=\"nav nav-tabs\" id=\"myTab\">\n                        <li class=\"nav-item\"><a class=\"nav-link {{tab_cnt == 1 ? 'active' : '' }}\" (click)=\"tabChange(1)\" data-toggle=\"tab\" href=\"javascript:;\">Profile</a></li>\n                        <li class=\"nav-item\"><a class=\"nav-link {{tab_cnt == 2 ? 'active' : '' }}\" data-toggle=\"tab\" (click)=\"tabChange(2)\" href=\"javascript:;\">Settings</a></li>\n                        <li class=\"nav-item\"><a class=\"nav-link {{tab_cnt == 3 ? 'active' : '' }}\" data-toggle=\"tab\" (click)=\"tabChange(3)\" href=\"javascript:;\">Payments</a></li>\n                        <li class=\"nav-item\"><a class=\"nav-link {{tab_cnt == 4 ? 'active' : '' }}\" data-toggle=\"tab\" (click)=\"tabChange(4)\" href=\"javascript:;\">Media</a></li>\n                        <li class=\"nav-item\"><a class=\"nav-link {{tab_cnt == 5 ? 'active' : '' }}\" data-toggle=\"tab\" (click)=\"tabChange(5)\" href=\"javascript:;\">Analytics</a></li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"col-md-10 col-sm-9 col-xs-9\">\n                <div class=\"rofile-tab-content\">\n                    <div class=\"tab-content\">\n                        <div class=\"tab-pane fade {{tab_cnt == 1 ? 'show active' : '' }} \" id=\"profile\">\n                            <div class=\"edit-cover\">\n                                <form>\n                                    <div class=\"upload-cover\">\n                                        <img [src]=\"default_cover_img\" alt=\"Edit cover Image\">\n                                        <span class=\"up_text\">Update Photo</span>\n                                        <input type=\"file\" name=\"my_doc_upload\" id=\"cover_upload1\" multiple=\"false\" (change)=\"updateCoverImage($event)\">\n                                        <a data-fancybox data-animation-duration=\"700\" data-src=\"#delete\" href=\"javascript:;\" *ngIf=\"userdata.cover_image\" (click)=\"removeArtistCoverImage()\" class=\"delete\"><i class=\"fa fa-trash\"></i></a>\n                                    </div>\n                                    <div class=\"edit-details\">\n                                        <div class=\"edit-head\">Your Details</div>\n                                        <div class=\"row\">\n                                            <div class=\"col-md-3 col-sm-12 col-xs-12\">\n                                                <div class=\"edit-profile-picture\">\n                                                    <div class=\"upload-cover\">\n                                                        <img [src]=\"default_profile_img\" alt=\"Edit cover Image\">\n                                                        <span class=\"up_text\">Update Photo</span>\n                                                        <input type=\"file\" name=\"upload\" id=\"cover_upload\" (change)=\"updateProfileImage($event)\">\n                                                        <a data-fancybox data-animation-duration=\"700\" data-src=\"#delete\" *ngIf=\"userdata.image\" href=\"javascript:;\" class=\"delete\" (click)=\"removeArtistImage()\"><i class=\"fa fa-trash\"></i></a>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-9 col-sm-12 col-xs-12\">\n                                                <div class=\"form-details\">\n\n                                                    <div class=\"form-group\">\n                                                        <label for=\"fname\">First Name</label>\n                                                        <input type=\"text\" class=\"form-control\" id=\"fname5\" name=\"fname\" [(ngModel)]=\"userdata.first_name\" placeholder=\"First Name\">\n                                                    </div>\n\n                                                    <div class=\"form-group pwd-grp\">\n                                                        <label for=\"lanem\">Last Name</label>\n                                                        <input type=\"text\" class=\"form-control\" id=\"lname2\" name=\"lname\" [(ngModel)]=\"userdata.last_name\" placeholder=\"Last Name\">\n                                                    </div>\n\n                                                    <div class=\"form-group gender-grp\">\n                                                        <label for=\"geder\">Gender</label>\n                                                        <select class=\"form-control\" id=\"gender\" name=\"gender\" [(ngModel)]=\"userdata.gender\">\n                                                            <option value=\"male\">Male</option>\n                                                            <option value=\"female\">Female</option>\n                                                        </select>\n                                                    </div>\n                                                    <div class=\"form-group\">\n                                                        <div class=\"date-of-birth\">\n                                                            <label for=\"date\">Birthday</label>\n                                                            <div class=\"form-group\">\n                                                                <select class=\"form-control\" id=\"day\" name=\"day\" [(ngModel)]=\"userdata.day\">\n                                                                    <option value=\"\">Day</option>\n                                                                    <option *ngFor=\"let d of day\" value=\"{{d}}\">{{d}}</option>\n                                                                </select>\n                                                            </div>\n                                                            <div class=\"form-group\">\n                                                                <select class=\"form-control\" id=\"month\" name=\"month\" [(ngModel)]=\"userdata.month\">\n                                                                    <option value=\"\">Month</option>\n                                                                    <option *ngFor=\"let m of month\" value=\"{{m}}\">{{m}}</option>\n                                                                </select>\n                                                            </div>\n                                                            <div class=\"form-group\">\n                                                                <select class=\"form-control\" id=\"year\" name=\"year\" [(ngModel)]=\"userdata.year\">\n                                                                    <option value=\"\">Year</option>\n                                                                    <option *ngFor=\"let y of year\" value=\"{{y}}\">{{y}}</option>\n                                                                </select>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n\n                                                    <div class=\"form-group music-grp\">\n                                                        <label for=\"musictype\">Music Type</label>\n                                                        <select class=\"form-control\" id=\"musictype\" name=\"music_type\" [(ngModel)]=\"userdata.music_type\">\n                                                            <option *ngFor=\"let type of music_types\" value=\"{{type._id}}\">{{type.name}}</option>\n                                                        </select>\n                                                    </div>\n\n                                                    <div class=\"form-group home-grp\">\n                                                        <label for=\"hometown\">Zipcode</label>\n                                                        <input class=\"form-control\" placeholder=\"zipcode\" name=\"zipcode\" [(ngModel)]=\"userdata.zipcode\" />\n                                                    </div>\n\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"additional-details\">\n                                        <div class=\"edit-head\">Additional Details</div>\n                                        <div class=\"about-you\">\n                                            <label for=\"fname\">Describe Yourself</label>\n                                            <textarea class=\"form-control\" name=\"description\" [(ngModel)]=\"userdata.description\" placeholder=\"Add about yourself...\"></textarea>\n                                        </div>\n                                    </div>\n                                    <div class=\"social-details\">\n                                        <div class=\"edit-head\">Social Media</div>\n                                        <div class=\"social-acc\">\n                                            <div class=\"social-block\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"facebook\">Facebook</label>\n                                                    <input type=\"text\" class=\"form-control\" id=\"fb\" placeholder=\"Add Account\" name=\"fb\" [(ngModel)]=\"userdata.social_media['facebook']\">\n                                                    <img src=\"img/fb.png\" alt=\"Facebook\">\n                                                </div>\n                                            </div>\n                                            <div class=\"social-block\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"inst\">Instagram</label>\n                                                    <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"Add Account\" name=\"insta\" [(ngModel)]=\"userdata.social_media['instagram']\">\n                                                    <img src=\"img/inst.png\" alt=\"Facebook\">\n                                                </div>\n                                            </div>\n                                            <div class=\"social-block\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"facebook\">Twitter</label>\n                                                    <input type=\"text\" class=\"form-control\" id=\"fb1\" placeholder=\"Add Account\" name=\"twit\" [(ngModel)]=\"userdata.social_media['twitter']\">\n                                                    <img src=\"img/twitter.png\" alt=\"Facebook\">\n                                                </div>\n                                            </div>\n                                            <div class=\"social-block\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"inst\">Youtube</label>\n                                                    <input type=\"text\" class=\"form-control\" id=\"fname1\" placeholder=\"Add Account\" name=\"youtube\" [(ngModel)]=\"userdata.social_media['youtube']\">\n                                                    <img src=\"img/youtube.png\" alt=\"Facebook\">\n                                                </div>\n                                            </div>\n                                            <div class=\"social-block\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"inst\">Soundcloud</label>\n                                                    <input type=\"text\" class=\"form-control\" id=\"fname2\" placeholder=\"Add Account\" name=\"sound\" [(ngModel)]=\"userdata.social_media['sound_cloud']\">\n                                                    <img src=\"img/soundcloud.png\" alt=\"Facebook\">\n                                                </div>\n                                            </div>\n\n                                        </div>\n                                    </div>\n                                    <div class=\"button_group\">\n                                        <a href=\"#\" class=\"cancel-btn\">Cancel</a>\n                                        <button type=\"submit\" (click)=\"update()\" [disabled]=\"show_spinner\" class=\"save-btn btn btn-primary\">Save <i *ngIf=\"show_spinner\" class=\"fa fa-spinner fa-spin\"></i></button>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n\n                        <div class=\"tab-pane fade {{tab_cnt == 2 ? 'show active' : '' }}\" id=\"settings\">\n                            <div class=\"update-email\">\n                                <div class=\"email-form\">\n                                    <div class=\"edit-head\">Update Your Email</div>\n                                    <form (ngSubmit)=\"changeEmail()\">\n                                        <div class=\"form-group\">\n                                            <label for=\"yemail\">Your</label>\n                                            <input type=\"email\" name=\"old\" [(ngModel)]=\"change_email.old\" class=\"form-control\" id=\"yemail\" placeholder=\"Your Email\" required>\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <label for=\"nemail\">New Email</label>\n                                            <input type=\"email\" name=\"new\" [(ngModel)]=\"change_email.new\" class=\"form-control\" id=\"nemail\" placeholder=\"New Name\" required>\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <label for=\"remail\">Repeat New Email</label>\n                                            <input type=\"email\" name=\"repeat\" [(ngModel)]=\"change_email.repeat\" class=\"form-control\" id=\"remail\" placeholder=\"Repeat Email\" required>\n                                        </div>\n                                        <div class=\"button_group\">\n                                            <button type=\"submit\" [disabled]=\"show_spinner\" class=\"update-btn\">update <i *ngIf=\"show_spinner\" class=\"fa fa-spinner fa-spin\"></i></button>\n                                        </div>\n                                    </form>\n                                </div>\n                                <div class=\"password-form\">\n                                    <div class=\"edit-head\">Update Password</div>\n                                    <form (ngSubmit)=\"changePassword()\">\n                                        <div class=\"form-group\">\n                                            <label for=\"ypwd\">Your Password</label>\n                                            <input type=\"password\" class=\"form-control\" id=\"ypwd\" name=\"old\" [(ngModel)]=\"change_pwd.old\" placeholder=\"Your Email\">\n                                            <div class=\"pwd-icon\">\n                                                <i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n                                                <!-- <i class=\"fa fa-eye-slash\" aria-hidden=\"true\"></i> -->\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <label for=\"npwd\">New Password</label>\n                                            <input type=\"password\" class=\"form-control\" name=\"old\" [(ngModel)]=\"change_pwd.new\" id=\"npwd\" placeholder=\"New Name\">\n                                            <div class=\"pwd-icon\">\n                                                <i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n                                                <!-- <i class=\"fa fa-eye-slash\" aria-hidden=\"true\"></i> -->\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <label for=\"rpwd\">Repeat New Password</label>\n                                            <input type=\"password\" class=\"form-control\" id=\"rpwd\" name=\"old\" [(ngModel)]=\"change_pwd.repeat\" placeholder=\"Repeat Email\">\n                                            <div class=\"pwd-icon\">\n                                                <i class=\"fa fa-eye \" aria-hidden=\"true\"></i>\n                                                <!-- <i class=\"fa fa-eye-slash\" aria-hidden=\"true\"></i> -->\n                                            </div>\n                                        </div>\n                                        <div class=\"button_group\">\n                                            <button type=\"submit\" class=\"update-btn\">update</button>\n                                        </div>\n                                    </form>\n                                </div>\n                                <div class=\"notification\">\n                                    <div class=\"edit-head\">Notifications</div>\n                                    <div class=\"notify-by-email\">\n                                        <div class=\"edit-head\">Notifications by Email</div>\n                                        <ul>\n                                            <li class=\"followers\">\n                                                <p>New Followers</p>\n                                                <div class=\"f-toggle\">\n                                                    <label class=\"switch\">\n                                                        <input type=\"checkbox\" checked>\n                                                        <span class=\"slider round\"></span>\n                                                    </label>\n                                                </div>\n                                            </li>\n                                            <li class=\"comments\">\n                                                <p>Comments</p>\n                                                <div class=\"f-toggle\">\n                                                    <label class=\"switch\">\n                                                        <input type=\"checkbox\">\n                                                        <span class=\"slider round\"></span>\n                                                    </label>\n                                                </div>\n                                            </li>\n                                            <li class=\"message\">\n                                                <p>Message</p>\n                                                <div class=\"f-toggle\">\n                                                    <label class=\"switch\">\n                                                        <input type=\"checkbox\" checked>\n                                                        <span class=\"slider round\"></span>\n                                                    </label>\n                                                </div>\n                                            </li>\n                                        </ul>\n                                    </div>\n                                    <div class=\"notify-by-sms\">\n                                        <div class=\"edit-head\">Notifications by SMS</div>\n                                        <ul>\n                                            <li class=\"followers\">\n                                                <p>New Followers</p>\n                                                <div class=\"f-toggle\">\n                                                    <label class=\"switch\">\n                                                        <input type=\"checkbox\" checked>\n                                                        <span class=\"slider round\"></span>\n                                                    </label>\n                                                </div>\n                                            </li>\n                                            <li class=\"comments\">\n                                                <p>Comments</p>\n                                                <div class=\"f-toggle\">\n                                                    <label class=\"switch\">\n                                                        <input type=\"checkbox\">\n                                                        <span class=\"slider round\"></span>\n                                                    </label>\n                                                </div>\n                                            </li>\n                                            <li class=\"message\">\n                                                <p>Message</p>\n                                                <div class=\"f-toggle\">\n                                                    <label class=\"switch\">\n                                                        <input type=\"checkbox\" checked>\n                                                        <span class=\"slider round\"></span>\n                                                    </label>\n                                                </div>\n                                            </li>\n                                        </ul>\n                                    </div>\n                                    <div class=\"on-side-alert\">\n                                        <div class=\"edit-head\">On Side Alerts</div>\n                                        <ul>\n                                            <li class=\"followers\">\n                                                <p>New Followers</p>\n                                                <div class=\"f-toggle\">\n                                                    <label class=\"switch\">\n                                                        <input type=\"checkbox\" checked>\n                                                        <span class=\"slider round\"></span>\n                                                    </label>\n                                                </div>\n                                            </li>\n                                            <li class=\"comments\">\n                                                <p>Comments</p>\n                                                <div class=\"f-toggle\">\n                                                    <label class=\"switch\">\n                                                        <input type=\"checkbox\">\n                                                        <span class=\"slider round\"></span>\n                                                    </label>\n                                                </div>\n                                            </li>\n                                            <li class=\"message\">\n                                                <p>Message</p>\n                                                <div class=\"f-toggle\">\n                                                    <label class=\"switch\">\n                                                        <input type=\"checkbox\" checked>\n                                                        <span class=\"slider round\"></span>\n                                                    </label>\n                                                </div>\n                                            </li>\n                                        </ul>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"tab-pane fade {{tab_cnt == 3 ? 'show active' : '' }}\" id=\"payment\">\n\n                            <ul class=\"nav nav-tabs\">\n                                <li class=\"nav-item\"><a class=\"nav-link active\" data-toggle=\"tab\" href=\"#paymentmethod\">Payment Method</a></li>\n                                <li class=\"nav-item\"><a class=\"nav-link\" data-toggle=\"tab\" href=\"#proceeds\">Your Proceeds</a></li>\n                            </ul>\n                            <div class=\"tab-content\">\n                                <div id=\"paymentmethod\" class=\"tab-pane fade show active\">\n                                    <div class=\"pay-method\">\n                                        <div class=\"edit-head\">Your Payment Method</div>\n                                        <div class=\"select-payemnt-table\">\n                                            <table>\n                                                <tr>\n                                                    <td>\n                                                        <div class=\"radio\">\n                                                            <label>\n                                                                <input type=\"radio\" value=\"\" name=\"musicgenre\" checked>\n                                                                <div class=\"radio_check\"></div>\n                                                            </label>\n                                                        </div>\n                                                    </td>\n                                                    <td>\n                                                        <img src=\"img/visa.png\" alt=\"Visa Card\">\n                                                    </td>\n                                                    <td>\n                                                        <p class=\"pay-name\">Visa</p>\n                                                    </td>\n                                                    <td>\n                                                        <p class=\"card-num\">XXXXXXXXXXX0000</p>\n                                                    </td>\n                                                    <td>\n                                                        <p class=\"pay-name\">01/2020</p>\n                                                    </td>\n                                                    <td>\n                                                        <div class=\"pay-delete\">\n                                                            <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n                                                            <span>Delete</span>\n                                                        </div>\n                                                    </td>\n                                                </tr>\n\n                                                <tr>\n                                                    <td>\n                                                        <div class=\"radio\">\n                                                            <label>\n                                                                <input type=\"radio\" value=\"\" name=\"musicgenre\">\n                                                                <div class=\"radio_check\"></div>\n                                                            </label>\n                                                        </div>\n                                                    </td>\n                                                    <td>\n                                                        <img src=\"img/paypal.png\" alt=\"Visa Card\">\n                                                    </td>\n                                                    <td>\n                                                        <p class=\"pay-name\">Paypal</p>\n                                                    </td>\n                                                    <td>\n                                                        <p class=\"card-num\">shavnmiller@gmail.com</p>\n                                                    </td>\n                                                    <td>\n                                                    </td>\n                                                    <td>\n                                                        <div class=\"pay-delete\">\n                                                            <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n                                                            <span>Delete</span>\n                                                        </div>\n                                                    </td>\n                                                </tr>\n                                            </table>\n                                            <a data-fancybox data-animation-duration=\"700\" data-src=\"#addpayment\" href=\"javascript:;\" class=\"add-payment\">\n                                                <img src=\"img/icons8-plus_mathNormal.png\" alt=\"\"> Add Payment Method\n                                            </a>\n                                        </div>\n                                    </div>\n                                    <div class=\"billing-method\">\n                                        <div class=\"edit-head\">Billing Method</div>\n                                        <form>\n                                            <div class=\"form-group\">\n                                                <label for=\"fname\">First Name</label>\n                                                <input type=\"text\" class=\"form-control\" id=\"fname4\" placeholder=\"First Name\">\n                                            </div>\n                                            <div class=\"form-group\">\n                                                <label for=\"lname\">Last Name</label>\n                                                <input type=\"text\" class=\"form-control\" id=\"lname1\" placeholder=\"Last Name\">\n                                            </div>\n                                            <div class=\"form-group\">\n                                                <label for=\"area\">Area Code</label>\n                                                <input type=\"text\" class=\"form-control\" id=\"area\" placeholder=\"Area Code\">\n                                            </div>\n                                            <div class=\"form-group street\">\n                                                <label for=\"street\">Street</label>\n                                                <input type=\"text\" class=\"form-control\" id=\"street\" placeholder=\"Street Name\">\n                                            </div>\n                                            <div class=\"form-group appartment-suit\">\n                                                <label for=\"appt\">Apartment, Suite, Building</label>\n                                                <input type=\"text\" class=\"form-control\" id=\"appt\" placeholder=\"Apartment, Suite, Building\">\n                                            </div>\n                                            <div class=\"form-group\">\n                                                <label for=\"city\">City</label>\n                                                <input type=\"text\" class=\"form-control\" id=\"city\" placeholder=\"City\">\n                                            </div>\n                                            <div class=\"form-group\">\n                                                <label for=\"state\">State</label>\n                                                <input type=\"text\" class=\"form-control\" id=\"state\" placeholder=\"State\">\n                                            </div>\n                                            <div class=\"form-group\">\n                                                <label for=\"zip\">Zip</label>\n                                                <input type=\"text\" class=\"form-control\" id=\"zip\" placeholder=\"State\">\n                                            </div>\n                                            <div class=\"button_group\">\n                                                <a href=\"#\" class=\"cancel-btn\">Cancel</a>\n                                                <a href=\"#\" class=\"update-btn\">update</a>\n                                            </div>\n                                        </form>\n                                    </div>\n                                </div>\n                                <div id=\"proceeds\" class=\"tab-pane fade\">\n                                    <div class=\"pay-meth\">\n                                        <div class=\"edit-head\">Payout Method</div>\n                                        <table>\n                                            <tr>\n                                                <td><img src=\"img/visa.png\" alt=\"Visa Card\"></td>\n                                                <td>\n                                                    <p class=\"pay-name\">Visa</p>\n                                                </td>\n                                                <td>\n                                                    <p class=\"card-num\">XXXXXXXXXXX0000</p>\n                                                </td>\n                                                <td>\n                                                    <div class=\"button_group\">\n                                                        <a href=\"#\" class=\"update-btn\">update</a>\n                                                    </div>\n                                                </td>\n                                            </tr>\n                                        </table>\n                                    </div>\n                                    <div class=\"trans-history\">\n                                        <div class=\"edit-head\">Transaction History</div>\n                                        <div class=\"transaction-table mCustomScrollbar \" data-mcs-theme=\"dark-3\">\n                                            <table>\n                                                <thead>\n                                                    <tr>\n                                                        <td>N°</td>\n                                                        <td>Track</td>\n                                                        <td>Date</td>\n                                                        <td>Time</td>\n                                                        <td>Price</td>\n                                                        <td>Status</td>\n                                                    </tr>\n                                                </thead>\n                                                <tbody>\n                                                    <tr>\n                                                        <td>1.</td>\n                                                        <td>Say Thanks</td>\n                                                        <td>May 10,2018</td>\n                                                        <td>10:34:12</td>\n                                                        <td>$1.99</td>\n                                                        <td>Finised</td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>2.</td>\n                                                        <td>Blue State of Mind</td>\n                                                        <td>May 10,2018</td>\n                                                        <td>10:34:12</td>\n                                                        <td>$1.99</td>\n                                                        <td>Finised</td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>3.</td>\n                                                        <td>Blue State of Mind</td>\n                                                        <td>May 10,2018</td>\n                                                        <td>10:34:12</td>\n                                                        <td>$1.99</td>\n                                                        <td>Finised</td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>4.</td>\n                                                        <td>Blue State of Mind</td>\n                                                        <td>May 10,2018</td>\n                                                        <td>10:34:12</td>\n                                                        <td>$1.99</td>\n                                                        <td>Finised</td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>5.</td>\n                                                        <td>Say Thanks</td>\n                                                        <td>May 10,2018</td>\n                                                        <td>10:34:12</td>\n                                                        <td>$1.99</td>\n                                                        <td>Finised</td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>6.</td>\n                                                        <td>Say Thanks</td>\n                                                        <td>May 10,2018</td>\n                                                        <td>10:34:12</td>\n                                                        <td>$1.99</td>\n                                                        <td>Finised</td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>7.</td>\n                                                        <td>Blue State of Mind</td>\n                                                        <td>May 10,2018</td>\n                                                        <td>10:34:12</td>\n                                                        <td>$1.99</td>\n                                                        <td>Finised</td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>8.</td>\n                                                        <td>Blue State of Mind</td>\n                                                        <td>May 10,2018</td>\n                                                        <td>10:34:12</td>\n                                                        <td>$1.99</td>\n                                                        <td>Finised</td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>9.</td>\n                                                        <td>Blue State of Mind</td>\n                                                        <td>May 10,2018</td>\n                                                        <td>10:34:12</td>\n                                                        <td>$1.99</td>\n                                                        <td>Finised</td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>10.</td>\n                                                        <td>Say Thanks</td>\n                                                        <td>May 10,2018</td>\n                                                        <td>10:34:12</td>\n                                                        <td>$1.99</td>\n                                                        <td>Finised</td>\n                                                    </tr>\n                                                </tbody>\n                                            </table>\n                                        </div>\n                                        <div class=\"proceeds\">\n                                            <div class=\"edit-head\">$5,200.87 Proceeds</div>\n                                            <img src=\"img/proceeds.jpg\" alt=\"Proceeds Graph\">\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"tab-pane fade {{tab_cnt == 4 ? 'show active' : '' }}\" id=\"media\">\n                            <div class=\"media-wrapper\">\n                                <div class=\"col-md-12\">\n                                    <div class=\"edit-head\">Your Media</div>\n                                </div>\n                                <div class=\"col-md-12\">\n                                    <a data-fancybox data-animation-duration=\"700\" data-src=\"#addmedia\" (click)=\"openAddMediaModal(content)\" href=\"javascript:;\" class=\"add-payment\"><img src=\"img/icons8-plus_mathNormal.png\" alt=\"\">Add Media</a>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"alert alert-info col-sm-12\" *ngIf=\"media_list.length == 0\">\n                                        No data available.\n                                    </div>\n                                    <div class=\"col-md-4 col-sm-6 col-xs-12 uploaded-img\" *ngFor=\"let obj of media_list; let i=index;\" >\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"obj.image\">\n                                        <!-- <a class=\"img-wrap\" href=\"{{artist_media_url+obj.image}}\" *ngIf=\"obj.image\" data-fancybox=\"images\" data-width=\"1500\" data-height=\"1000\"> -->\n                                            <img src=\"{{artist_media_url+obj.image}}\" alt=\"Media\" (click)=\"open(i)\">\n                                        <!-- </a> -->\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"obj.link\">\n\t\t\t\t\t\t\t\t\t\t\t<object width=\"420\" height=\"315\" data=\"obj.link\"></object>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<a data-fancybox data-animation-duration=\"700\" data-src=\"#delete\" (click)=\"removeMedia(obj._id)\" href=\"javascript:;\" class=\"delete\"><i class=\"fa fa-trash\"></i></a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"tab-pane fade {{tab_cnt == 5 ? 'show active' : '' }}\" id=\"analytics\">\n                            <div class=\"ana-header\">\n                                <div class=\"form-group days-grp\">\n                                    <select class=\"form-control\" id=\"days-select\" name=\"analytics_day\" [(ngModel)]=\"analytics_days\">\n                                        <option value=\"7\">7 Days</option>\n                                        <option value=\"14\">14 Days</option>\n                                        <option value=\"30\">1 Month</option>\n                                    </select>\n\n                                </div>\n                                <ul class=\"ana-tabs nav nav-tabs\">\n                                    <li class=\"nav-item\"><a class=\"{{analytic_tab == 1 ? 'active' : ''}}\" (click)=\"changeAnlyticTab(1)\" data-toggle=\"tab\" href=\"javascript:;\">Overview</a></li>\n                                    <li class=\"nav-item\"><a class=\"{{analytic_tab == 2 ? 'active' : ''}}\" (click)=\"changeAnlyticTab(2)\" data-toggle=\"tab\" href=\"javascript:;\">Followers</a></li>\n                                    <li class=\"nav-item\"><a class=\"{{analytic_tab == 3 ? 'active' : ''}}\" (click)=\"changeAnlyticTab(3)\" data-toggle=\"tab\" href=\"javascript:;\">Tracks/Contents</a></li>\n                                    <li class=\"nav-item\"><a class=\"{{analytic_tab == 4 ? 'active' : ''}}\" (click)=\"changeAnlyticTab(4)\" data-toggle=\"tab\" href=\"javascript:;\">Downloads</a></li>\n                                </ul>\n                                <div class=\"time-frame\">\n                                    <h3>Last 7 Days: April 23,2018 - May 1, 2018</h3>\n                                </div>\n                            </div>\n                            <div class=\"tab-content ana-content\">\n                                <div class=\"tab-pane fade {{analytic_tab == 1 ? 'active show' : ''}}\" id=\"overview\">\n                                    <div class=\"new-follow\">\n                                        <div class=\"edit-head\">New Followers</div>\n                                        <div class=\"progress-bar-chart\">\n                                            <span class=\"inner-text\"><p>45</p><span>New Followers</span></span>\n                                            <ul class=\"chart-skills\">\n\n                                                <li class=\"follow-women\">\n                                                    <!-- <span>Women</span> -->\n                                                </li>\n                                                <li class=\"follow-men\">\n                                                    <!-- <span>Men</span> -->\n                                                </li>\n                                                <li class=\"follow-other\">\n                                                    <!-- <span>other</span> -->\n                                                </li>\n                                            </ul>\n                                        </div>\n                                        <div class=\"graph-states\">\n                                            <ul>\n                                                <li class=\"state-women\">\n                                                    <p>52%</p>\n                                                    <span>Women</span>\n                                                </li>\n                                                <li class=\"state-men\">\n                                                    <p>46%</p>\n                                                    <span>Men</span>\n                                                </li>\n                                                <li class=\"state-other\">\n                                                    <p>2%</p>\n                                                    <span>Other</span>\n                                                </li>\n                                            </ul>\n                                        </div>\n                                    </div>\n                                    <div class=\"artist-vote\">\n                                        <div class=\"edit-head\">12,300 Votes</div>\n                                        <div class=\"vote-graph\">\n                                            <img src=\"img/vote-map.jpg\" alt=\"Vote Map\">\n                                        </div>\n                                    </div>\n                                    <div class=\"artist-downloads\">\n                                        <div class=\"edit-head\">1360 Downloads</div>\n                                        <div class=\"download-graph\">\n                                            <ul>\n                                                <li>\n                                                    <span>Blue Stated Of Mind</span>\n                                                    <div class=\"d-num\">\n                                                        <p>1300</p> <span>Downloads</span></div>\n                                                </li>\n                                                <li>\n                                                    <span>Why Today</span>\n                                                    <div class=\"d-num\">\n                                                        <p>600 </p><span>Downloads</span></div>\n                                                </li>\n                                                <li>\n                                                    <span>Friday</span>\n                                                    <div class=\"d-num\">\n                                                        <p>300 </p><span>Downloads</span></div>\n                                                </li>\n                                                <li>\n                                                    <span>My Love</span>\n                                                    <div class=\"d-num\">\n                                                        <p>340 </p><span>Downloads</span></div>\n                                                </li>\n                                                <li>\n                                                    <span>Say Thanks</span>\n                                                    <div class=\"d-num\">\n                                                        <p>120 </p><span>Downloads</span></div>\n                                                </li>\n\n                                            </ul>\n                                        </div>\n                                    </div>\n                                    <div class=\"location-downloads\">\n                                        <div class=\"edit-head\">Top Locations</div>\n                                        <div class=\"loc-icon-group\">\n                                            <img src=\"img/top-location-icon.png\" alt=\"top-location-icon.png\">\n                                            <img src=\"img/infographic-not-active.png\" alt=\"infographic-not-active.png\">\n                                        </div>\n                                        <div class=\"loc-graph\">\n                                            <img src=\"img/location-map.jpg\" alt=\"Location Graph\">\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"tab-pane fade {{analytic_tab == 2 ? 'active show' : ''}}\" id=\"followers\">\n                                    <div class=\"new-follow\">\n                                        <div class=\"edit-head\">New Followers</div>\n                                        <div class=\"progress-bar-chart\">\n                                            <span class=\"inner-text\"><p>45</p><span>New Followers</span></span>\n                                            <ul class=\"chart-skills\">\n\n                                                <li class=\"follow-women\">\n                                                    <!-- <span>Women</span> -->\n                                                </li>\n                                                <li class=\"follow-men\">\n                                                    <!-- <span>Men</span> -->\n                                                </li>\n                                                <li class=\"follow-other\">\n                                                    <!-- <span>other</span> -->\n                                                </li>\n                                            </ul>\n                                        </div>\n                                        <div class=\"graph-states\">\n                                            <ul>\n                                                <li class=\"state-women\">\n                                                    <p>52%</p>\n                                                    <span>Women</span>\n                                                </li>\n                                                <li class=\"state-men\">\n                                                    <p>46%</p>\n                                                    <span>Men</span>\n                                                </li>\n                                                <li class=\"state-other\">\n                                                    <p>2%</p>\n                                                    <span>Other</span>\n                                                </li>\n                                            </ul>\n                                        </div>\n                                    </div>\n                                    <div class=\"artist-vote\">\n                                        <div class=\"edit-head\">12,300 Votes</div>\n                                        <div class=\"vote-graph\">\n                                            <img src=\"img/vote-map.jpg\" alt=\"Vote Map\">\n                                        </div>\n                                    </div>\n                                    <div class=\"breakdown-age\">\n                                        <div class=\"edit-head\">Age Breakdown</div>\n                                        <!-- <img src=\"img/age-breakdown.jpg\" alt=\"Age Break Down\"> -->\n                                        <div [chart]=\"follower_age_chart\"></div>\n                                    </div>\n                                    <div class=\"location-downloads\">\n                                        <div class=\"edit-head\">Top Locations</div>\n                                        <div class=\"loc-icon-group\">\n                                            <img src=\"img/top-location-icon.png\" alt=\"top-location-icon.png\">\n                                            <img src=\"img/infographic-not-active.png\" alt=\"infographic-not-active.png\">\n                                        </div>\n                                        <div class=\"loc-graph\">\n                                            <img src=\"img/location-map.jpg\" alt=\"Location Graph\">\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"tab-pane fade {{analytic_tab == 3 ? 'active show' : ''}}\" id=\"trackscontent\">\n                                    <div class=\"track-table mCustomScrollbar \" data-mcs-theme=\"dark-3\">\n                                        <table>\n                                            <tbody>\n                                                <tr *ngFor=\"let track of track_analytic['track']; let i=index;\">\n                                                    <td class=\"serial-num\">{{i+1}}.</td>\n                                                    <td class=\"track-pic\">\n                                                        <a href=\"javascript:;\"><img style=\"height: 50px;width:50px;\" src=\"{{track.image ? track_url+track.image : 'img/track-img.png' }}\" alt=\"Track Image\"></a>\n                                                    </td>\n                                                    <td class=\"track-det\" colspan=\"2\">\n                                                        <p class=\"track-name\">{{track.name}}</p>\n                                                        <p class=\"track-singer\">{{track['artist_id']['first_name']+' '+track['artist_id']['last_name']}}</p>\n                                                        <p class=\"track-year\">{{track['created_at'] | date : 'yyyy'}}</p>\n                                                    </td>\n                                                    <td class=\"track-download\">{{track['no_of_downloads']}} <span>Downloads</span></td>\n                                                    <td class=\"track-share\">560 <span>Shares</span></td>\n                                                    <td class=\"track-likes\">{{track['no_of_likes']}} <span>Likes</span></td>\n                                                    <td class=\"track-comment\">{{track['no_of_comments']}}<span>Comments</span></td>\n                                                    <td class=\"td track-vote\">\n                                                        <img src=\"img/start.png\" alt=\"start\">\n                                                        <span>{{track['no_of_votes']}} <br> <span>Votes</span></span>\n                                                    </td>\n                                                </tr>\n                                            </tbody>\n                                        </table>\n                                    </div>\n                                    <div class=\"new-follow\">\n                                        <div class=\"edit-head\">New Followers</div>\n                                        <div class=\"progress-bar-chart\">\n                                            <span class=\"inner-text\"><p>45</p><span>New Followers</span></span>\n                                            <ul class=\"chart-skills\">\n\n                                                <li class=\"follow-women\">\n                                                    <!-- <span>Women</span> -->\n                                                </li>\n                                                <li class=\"follow-men\">\n                                                    <!-- <span>Men</span> -->\n                                                </li>\n                                                <li class=\"follow-other\">\n                                                    <!-- <span>other</span> -->\n                                                </li>\n                                            </ul>\n                                        </div>\n                                        <div class=\"graph-states\">\n                                            <ul>\n                                                <li class=\"state-women\">\n                                                    <p>52%</p>\n                                                    <span>Women</span>\n                                                </li>\n                                                <li class=\"state-men\">\n                                                    <p>46%</p>\n                                                    <span>Men</span>\n                                                </li>\n                                                <li class=\"state-other\">\n                                                    <p>2%</p>\n                                                    <span>Other</span>\n                                                </li>\n                                            </ul>\n                                        </div>\n                                    </div>\n                                    <div class=\"artist-vote\">\n                                        <div class=\"edit-head\">12,300 Votes</div>\n                                        <div class=\"vote-graph\">\n                                            <img src=\"img/vote-map.jpg\" alt=\"Vote Map\">\n                                        </div>\n                                    </div>\n                                    <div class=\"artist-downloads\">\n                                        <div class=\"edit-head\">Rank</div>\n                                        <div class=\"transaction-table mCustomScrollbar \" data-mcs-theme=\"dark-3\">\n                                            <table>\n                                                <thead>\n                                                    <tr>\n                                                        <td>Contest</td>\n                                                        <td>Rank</td>\n                                                        <td>Number of votes</td>\n                                                    </tr>\n                                                </thead>\n                                                <tbody>\n                                                    <tr>\n                                                        <td>Regionals</td>\n                                                        <td>3</td>\n                                                        <td class=\"td track-vote\">\n                                                            <img src=\"img/start.png\" alt=\"start\">\n                                                            <span>1300 <span>Votes</span></span>\n                                                        </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>Round 3</td>\n                                                        <td>5</td>\n                                                        <td class=\"td track-vote\">\n                                                            <img src=\"img/start.png\" alt=\"start\">\n                                                            <span>680 <span>Votes</span></span>\n                                                        </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>Round 1</td>\n                                                        <td>12</td>\n                                                        <td class=\"td track-vote\">\n                                                            <img src=\"img/start.png\" alt=\"start\">\n                                                            <span>450 <span>Votes</span></span>\n                                                        </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>Regionals</td>\n                                                        <td>3</td>\n                                                        <td class=\"td track-vote\">\n                                                            <img src=\"img/start.png\" alt=\"start\">\n                                                            <span>1300 <span>Votes</span></span>\n                                                        </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>Round 3</td>\n                                                        <td>5</td>\n                                                        <td class=\"td track-vote\">\n                                                            <img src=\"img/start.png\" alt=\"start\">\n                                                            <span>680 <span>Votes</span></span>\n                                                        </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>Round 1</td>\n                                                        <td>12</td>\n                                                        <td class=\"td track-vote\">\n                                                            <img src=\"img/start.png\" alt=\"start\">\n                                                            <span>450 <span>Votes</span></span>\n                                                        </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>Regionals</td>\n                                                        <td>3</td>\n                                                        <td class=\"td track-vote\">\n                                                            <img src=\"img/start.png\" alt=\"start\">\n                                                            <span>1300 <span>Votes</span></span>\n                                                        </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>Round 3</td>\n                                                        <td>5</td>\n                                                        <td class=\"td track-vote\">\n                                                            <img src=\"img/start.png\" alt=\"start\">\n                                                            <span>680 <span>Votes</span></span>\n                                                        </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>Round 1</td>\n                                                        <td>12</td>\n                                                        <td class=\"td track-vote\">\n                                                            <img src=\"img/start.png\" alt=\"start\">\n                                                            <span>450 <span>Votes</span></span>\n                                                        </td>\n                                                    </tr>\n\n                                                </tbody>\n                                            </table>\n                                        </div>\n                                    </div>\n                                    <div class=\"location-downloads\">\n                                        <div class=\"edit-head\">Top Locations</div>\n                                        <div class=\"loc-icon-group\">\n                                            <img src=\"img/top-location-icon.png\" alt=\"top-location-icon.png\">\n                                            <img src=\"img/infographic-not-active.png\" alt=\"infographic-not-active.png\">\n                                        </div>\n                                        <div class=\"loc-graph\">\n                                            <img src=\"img/location-map.jpg\" alt=\"Location Graph\">\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"tab-pane fade {{analytic_tab == 4 ? 'active show' : ''}}\" id=\"download\">\n                                    <div class=\"track-table mCustomScrollbar \" data-mcs-theme=\"dark-3\">\n                                        <table>\n                                            <tbody>\n                                                <tr>\n                                                    <td class=\"serial-num\">1.</td>\n                                                    <td class=\"track-pic\">\n                                                        <a href=\"#\"><img src=\"img/track-img.png\" alt=\"Track Image\"></a>\n                                                    </td>\n                                                    <td class=\"track-det\" colspan=\"2\">\n                                                        <p class=\"track-name\">Blue State of Mind</p>\n                                                        <p class=\"track-singer\">Shavan Miller</p>\n                                                        <p class=\"track-year\">2017</p>\n                                                    </td>\n                                                    <td class=\"track-date\">March 12,2017</td>\n                                                    <td class=\"track-download\">1200 <span>Downloads</span></td>\n\n                                                    <td class=\"track-share\">560 <span>Shares</span></td>\n                                                </tr>\n                                                <tr>\n                                                    <td class=\"serial-num\">2.</td>\n                                                    <td class=\"track-pic\">\n                                                        <a href=\"#\"><img src=\"img/track-img.png\" alt=\"Track Image\"></a>\n                                                    </td>\n                                                    <td class=\"track-det\" colspan=\"2\">\n                                                        <p class=\"track-name\">Blue State of Mind</p>\n                                                        <p class=\"track-singer\">Shavan Miller</p>\n                                                        <p class=\"track-year\">2017</p>\n                                                    </td>\n                                                    <td class=\"track-date\">March 12,2017</td>\n                                                    <td class=\"track-download\">1200 <span>Downloads</span></td>\n\n                                                    <td class=\"track-share\">560 <span>Shares</span></td>\n                                                </tr>\n                                                <tr>\n                                                    <td class=\"serial-num\">3.</td>\n                                                    <td class=\"track-pic\">\n                                                        <a href=\"#\"><img src=\"img/track-img.png\" alt=\"Track Image\"></a>\n                                                    </td>\n                                                    <td class=\"track-det\" colspan=\"2\">\n                                                        <p class=\"track-name\">Blue State of Mind</p>\n                                                        <p class=\"track-singer\">Shavan Miller</p>\n                                                        <p class=\"track-year\">2017</p>\n                                                    </td>\n                                                    <td class=\"track-date\">March 12,2017</td>\n                                                    <td class=\"track-download\">1200 <span>Downloads</span></td>\n\n                                                    <td class=\"track-share\">560 <span>Shares</span></td>\n                                                </tr>\n                                                <tr>\n                                                    <td class=\"serial-num\">4.</td>\n                                                    <td class=\"track-pic\">\n                                                        <a href=\"#\"><img src=\"img/track-img.png\" alt=\"Track Image\"></a>\n                                                    </td>\n                                                    <td class=\"track-det\" colspan=\"2\">\n                                                        <p class=\"track-name\">Blue State of Mind</p>\n                                                        <p class=\"track-singer\">Shavan Miller</p>\n                                                        <p class=\"track-year\">2017</p>\n                                                    </td>\n                                                    <td class=\"track-date\">March 12,2017</td>\n                                                    <td class=\"track-download\">1200 <span>Downloads</span></td>\n\n                                                    <td class=\"track-share\">560 <span>Shares</span></td>\n                                                </tr>\n                                                <tr>\n                                                    <td class=\"serial-num\">5.</td>\n                                                    <td class=\"track-pic\">\n                                                        <a href=\"#\"><img src=\"img/track-img.png\" alt=\"Track Image\"></a>\n                                                    </td>\n                                                    <td class=\"track-det\" colspan=\"2\">\n                                                        <p class=\"track-name\">Blue State of Mind</p>\n                                                        <p class=\"track-singer\">Shavan Miller</p>\n                                                        <p class=\"track-year\">2017</p>\n                                                    </td>\n                                                    <td class=\"track-date\">March 12,2017</td>\n                                                    <td class=\"track-download\">1200 <span>Downloads</span></td>\n\n                                                    <td class=\"track-share\">560 <span>Shares</span></td>\n                                                </tr>\n                                                <tr>\n                                                    <td class=\"serial-num\">6.</td>\n                                                    <td class=\"track-pic\">\n                                                        <a href=\"#\"><img src=\"img/track-img.png\" alt=\"Track Image\"></a>\n                                                    </td>\n                                                    <td class=\"track-det\" colspan=\"2\">\n                                                        <p class=\"track-name\">Blue State of Mind</p>\n                                                        <p class=\"track-singer\">Shavan Miller</p>\n                                                        <p class=\"track-year\">2017</p>\n                                                    </td>\n                                                    <td class=\"track-date\">March 12,2017</td>\n                                                    <td class=\"track-download\">1200 <span>Downloads</span></td>\n\n                                                    <td class=\"track-share\">560 <span>Shares</span></td>\n                                                </tr>\n                                                <tr>\n                                                    <td class=\"serial-num\">7.</td>\n                                                    <td class=\"track-pic\">\n                                                        <a href=\"#\"><img src=\"img/track-img.png\" alt=\"Track Image\"></a>\n                                                    </td>\n                                                    <td class=\"track-det\" colspan=\"2\">\n                                                        <p class=\"track-name\">Blue State of Mind</p>\n                                                        <p class=\"track-singer\">Shavan Miller</p>\n                                                        <p class=\"track-year\">2017</p>\n                                                    </td>\n                                                    <td class=\"track-date\">March 12,2017</td>\n                                                    <td class=\"track-download\">1200 <span>Downloads</span></td>\n\n                                                    <td class=\"track-share\">560 <span>Shares</span></td>\n                                                </tr>\n                                                <tr>\n                                                    <td class=\"serial-num\">8.</td>\n                                                    <td class=\"track-pic\">\n                                                        <a href=\"#\"><img src=\"img/track-img.png\" alt=\"Track Image\"></a>\n                                                    </td>\n                                                    <td class=\"track-det\" colspan=\"2\">\n                                                        <p class=\"track-name\">Blue State of Mind</p>\n                                                        <p class=\"track-singer\">Shavan Miller</p>\n                                                        <p class=\"track-year\">2017</p>\n                                                    </td>\n                                                    <td class=\"track-date\">March 12,2017</td>\n                                                    <td class=\"track-download\">1200 <span>Downloads</span></td>\n\n                                                    <td class=\"track-share\">560 <span>Shares</span></td>\n                                                </tr>\n                                                <tr>\n                                                    <td class=\"serial-num\">9.</td>\n                                                    <td class=\"track-pic\">\n                                                        <a href=\"#\"><img src=\"img/track-img.png\" alt=\"Track Image\"></a>\n                                                    </td>\n                                                    <td class=\"track-det\" colspan=\"2\">\n                                                        <p class=\"track-name\">Blue State of Mind</p>\n                                                        <p class=\"track-singer\">Shavan Miller</p>\n                                                        <p class=\"track-year\">2017</p>\n                                                    </td>\n                                                    <td class=\"track-date\">March 12,2017</td>\n                                                    <td class=\"track-download\">1200 <span>Downloads</span></td>\n\n                                                    <td class=\"track-share\">560 <span>Shares</span></td>\n                                                </tr>\n                                                <tr>\n                                                    <td class=\"serial-num\">10.</td>\n                                                    <td class=\"track-pic\">\n                                                        <a href=\"#\"><img src=\"img/track-img.png\" alt=\"Track Image\"></a>\n                                                    </td>\n                                                    <td class=\"track-det\" colspan=\"2\">\n                                                        <p class=\"track-name\">Blue State of Mind</p>\n                                                        <p class=\"track-singer\">Shavan Miller</p>\n                                                        <p class=\"track-year\">2017</p>\n                                                    </td>\n                                                    <td class=\"track-date\">March 12,2017</td>\n                                                    <td class=\"track-download\">1200 <span>Downloads</span></td>\n\n                                                    <td class=\"track-share\">560 <span>Shares</span></td>\n                                                </tr>\n                                                <tr>\n                                                    <td class=\"serial-num\">11.</td>\n                                                    <td class=\"track-pic\">\n                                                        <a href=\"#\"><img src=\"img/track-img.png\" alt=\"Track Image\"></a>\n                                                    </td>\n                                                    <td class=\"track-det\" colspan=\"2\">\n                                                        <p class=\"track-name\">Blue State of Mind</p>\n                                                        <p class=\"track-singer\">Shavan Miller</p>\n                                                        <p class=\"track-year\">2017</p>\n                                                    </td>\n                                                    <td class=\"track-date\">March 12,2017</td>\n                                                    <td class=\"track-download\">1200 <span>Downloads</span></td>\n\n                                                    <td class=\"track-share\">560 <span>Shares</span></td>\n                                                </tr>\n                                                <tr>\n                                                    <td class=\"serial-num\">12.</td>\n                                                    <td class=\"track-pic\">\n                                                        <a href=\"#\"><img src=\"img/track-img.png\" alt=\"Track Image\"></a>\n                                                    </td>\n                                                    <td class=\"track-det\" colspan=\"2\">\n                                                        <p class=\"track-name\">Blue State of Mind</p>\n                                                        <p class=\"track-singer\">Shavan Miller</p>\n                                                        <p class=\"track-year\">2017</p>\n                                                    </td>\n                                                    <td class=\"track-date\">March 12,2017</td>\n                                                    <td class=\"track-download\">1200 <span>Downloads</span></td>\n\n                                                    <td class=\"track-share\">560 <span>Shares</span></td>\n                                                </tr>\n\n                                            </tbody>\n                                        </table>\n                                    </div>\n                                    <div class=\"artist-downloads\">\n                                        <div class=\"edit-head\">1300 Downloads</div>\n                                        <div class=\"vote-graph\">\n                                            <img src=\"img/d-download.jpg\" alt=\"Downloads Map\">\n                                        </div>\n                                    </div>\n                                    <div class=\"artist-proceeds\">\n                                        <div class=\"edit-head\">$2600 Proceeds</div>\n                                        <div class=\"vote-graph\">\n                                            <img src=\"img/d-download.jpg\" alt=\"Downloads Map\">\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\t\t</div>\n\t</div>\n</section>\n<section class=\"edit-profile-wrap\" *ngIf=\"userdata.type == 'user'\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-2 col-sm-3 col-xs-3\">\n                <div class=\"profile-tabs\">\n                    <ul class=\"nav nav-tabs\" id=\"myTab\">\n                        <li class=\"nav-item\"><a class=\"nav-link {{tab_cnt == 1 ? 'active' : '' }}\" (click)=\"tabChange(1)\" data-toggle=\"tab\" href=\"javascript:;\">Profile</a></li>\n                        <li class=\"nav-item\"><a class=\"nav-link {{tab_cnt == 2 ? 'active' : '' }}\" data-toggle=\"tab\" (click)=\"tabChange(2)\" href=\"javascript:;\">Settings</a></li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"col-md-10 col-sm-9 col-xs-9\">\n                <div class=\"rofile-tab-content\">\n                    <div class=\"tab-content\">\n                        <div class=\"tab-pane fade {{tab_cnt == 1 ? 'show active' : '' }} \" id=\"profile\">\n                            <div class=\"edit-cover\">\n                                <form>\n                                    <div class=\"edit-details\">\n                                        <div class=\"edit-head\">Your Details</div>\n                                        <div class=\"row\">\n                                            <div class=\"col-md-3 col-sm-12 col-xs-12\">\n                                                <div class=\"edit-profile-picture\">\n                                                    <div class=\"upload-cover\">\n                                                        <img src=\"{{default_profile_img}}\" alt=\"Edit cover Image\">\n                                                        <span class=\"up_text\">Update Photo</span>\n                                                        <input type=\"file\" name=\"upload\" id=\"cover_upload\" (change)=\"updateProfileImage($event)\">\n                                                        <a data-fancybox data-animation-duration=\"700\" data-src=\"#delete\" *ngIf=\"userdata.image\" (click)=\"removeUserImage()\" href=\"javascript:;\" class=\"delete\"><i class=\"fa fa-trash\"></i></a>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-9 col-sm-12 col-xs-12\">\n                                                <div class=\"form-details\">\n\n                                                    <div class=\"form-group\">\n                                                        <label for=\"fname\">First Name</label>\n                                                        <input type=\"text\" class=\"form-control\" id=\"fname5\" name=\"fname\" [(ngModel)]=\"userdata.first_name\" placeholder=\"First Name\">\n                                                    </div>\n\n                                                    <div class=\"form-group pwd-grp\">\n                                                        <label for=\"lanem\">Last Name</label>\n                                                        <input type=\"text\" class=\"form-control\" id=\"lname2\" name=\"lname\" [(ngModel)]=\"userdata.last_name\" placeholder=\"Last Name\">\n                                                    </div>\n\n                                                    <div class=\"form-group gender-grp\">\n                                                        <label for=\"geder\">Gender</label>\n                                                        <select class=\"form-control\" id=\"gender\" name=\"gender\" [(ngModel)]=\"userdata.gender\">\n                                                            <option value=\"male\">Male</option>\n                                                            <option value=\"female\">Female</option>\n                                                        </select>\n                                                    </div>\n                                                    <div class=\"form-group\">\n                                                        <div class=\"date-of-birth\">\n                                                            <label for=\"date\">Birthday</label>\n                                                            <div class=\"form-group\">\n                                                                <select class=\"form-control\" id=\"day\" name=\"day\" [(ngModel)]=\"userdata.day\">\n                                                                    <option value=\"\">Day</option>\n                                                                    <option *ngFor=\"let d of day\" value=\"{{d}}\">{{d}}</option>\n                                                                </select>\n                                                            </div>\n                                                            <div class=\"form-group\">\n                                                                <select class=\"form-control\" id=\"month\" name=\"month\" [(ngModel)]=\"userdata.month\">\n                                                                    <option value=\"\">Month</option>\n                                                                    <option *ngFor=\"let m of month\" value=\"{{m}}\">{{m}}</option>\n                                                                </select>\n                                                            </div>\n                                                            <div class=\"form-group\">\n                                                                <select class=\"form-control\" id=\"year\" name=\"year\" [(ngModel)]=\"userdata.year\">\n                                                                    <option value=\"\">Year</option>\n                                                                    <option *ngFor=\"let y of year\" value=\"{{y}}\">{{y}}</option>\n                                                                </select>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n\n                                                    <div class=\"form-group music-grp\">\n                                                        <label for=\"musictype\">Music Type</label>\n                                                        <select class=\"form-control\" id=\"musictype\" multiple name=\"music_type\" [(ngModel)]=\"userdata.music_type\">\n                                                            <option *ngFor=\"let type of music_types\" value=\"{{type._id}}\">{{type.name}}</option>\n                                                        </select>\n                                                    </div>\n\n                                                    <div class=\"form-group home-grp\">\n                                                        <label for=\"hometown\">Zipcode</label>\n                                                        <input class=\"form-control\" placeholder=\"zipcode\" name=\"zipcode\" [(ngModel)]=\"userdata.zipcode\" />\n                                                    </div>\n\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"button_group\">\n                                        <a href=\"#\" class=\"cancel-btn\">Cancel</a>\n                                        <button type=\"submit\" (click)=\"update()\" [disabled]=\"show_spinner\" class=\"save-btn btn btn-primary\">Save <i *ngIf=\"show_spinner\" class=\"fa fa-spinner fa-spin\"></i></button>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                        <div class=\"tab-pane fade {{tab_cnt == 2 ? 'show active' : '' }}\" id=\"settings\">\n\t\t\t\t\t\t\t\t<div class=\"update-email\">\n\t\t\t\t\t\t\t\t\t<div class=\"email-form\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"edit-head\">Update Your Email</div>\n\t\t\t\t\t\t\t\t\t\t<form (ngSubmit)=\"changeEmail()\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"yemail\">Your</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"email\" name=\"old\" [(ngModel)]=\"change_email.old\" class=\"form-control\" id=\"yemail\" placeholder=\"Your Email\" required>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"nemail\">New Email</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"email\" name=\"new\" [(ngModel)]=\"change_email.new\" class=\"form-control\" id=\"nemail\" placeholder=\"New Name\" required>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"remail\">Repeat New Email</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"email\" name=\"repeat\" [(ngModel)]=\"change_email.repeat\" class=\"form-control\" id=\"remail\" placeholder=\"Repeat Email\" required>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"button_group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" [disabled]=\"show_spinner\" class=\"update-btn\">update <i *ngIf=\"show_spinner\" class=\"fa fa-spinner fa-spin\"></i></button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"password-form\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"edit-head\">Update Password</div>\n\t\t\t\t\t\t\t\t\t\t<form (ngSubmit)=\"changePassword()\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"ypwd\">Your Password</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" id=\"ypwd\" name=\"old\" [(ngModel)]=\"change_pwd.old\" placeholder=\"Your Email\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pwd-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <i class=\"fa fa-eye-slash\" aria-hidden=\"true\"></i> -->\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"npwd\">New Password</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" name=\"old\" [(ngModel)]=\"change_pwd.new\" id=\"npwd\" placeholder=\"New Name\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pwd-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <i class=\"fa fa-eye-slash\" aria-hidden=\"true\"></i> -->\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"rpwd\">Repeat New Password</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" id=\"rpwd\" name=\"old\" [(ngModel)]=\"change_pwd.repeat\" placeholder=\"Repeat Email\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pwd-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-eye \" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <i class=\"fa fa-eye-slash\" aria-hidden=\"true\"></i> -->\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"button_group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"update-btn\">update</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"notification\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"edit-head\">Notifications</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"notify-by-email\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"edit-head\">Notifications by Email</div>\n\t\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"followers\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>New Followers</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"f-toggle\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"switch\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" checked>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"slider round\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"comments\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Comments</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"f-toggle\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"switch\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"slider round\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"message\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Message</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"f-toggle\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"switch\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" checked>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"slider round\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"notify-by-sms\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"edit-head\">Notifications by SMS</div>\n\t\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"followers\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>New Followers</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"f-toggle\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"switch\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" checked>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"slider round\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"comments\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Comments</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"f-toggle\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"switch\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"slider round\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"message\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Message</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"f-toggle\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"switch\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" checked>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"slider round\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"on-side-alert\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"edit-head\">On Side Alerts</div>\n\t\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"followers\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>New Followers</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"f-toggle\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"switch\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" checked>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"slider round\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"comments\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Comments</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"f-toggle\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"switch\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"slider round\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"message\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Message</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"f-toggle\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"switch\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" checked>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"slider round\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n\t<div class=\"modal-body\">\n\t\t<div class=\"media-modal\">\n\t\t\t<h3>Add Media</h3>\n\t\t\t<p>Upload Photo</p>\n\t\t\t<div class=\"media-upload-btn\" *ngIf=\"!show_progress\"> \n\t\t\t\t<span class=\"upl-img\"><i class=\"fa fa-cloud-upload\" aria-hidden=\"true\"></i></span> \n\t\t\t\t<span class=\"up_text\">Upload Photo</span> \n\t\t\t\t<input type=\"file\" name=\"my_doc_upload\" id=\"my_doc_upload\" (change)=\"uploadImage($event)\" multiple=\"false\"> \n\t\t\t\t<p class=\"instrution\">320x320px .png, .jpg 5MB or less</p>\n\t\t\t</div>\n\t\t\t<div class=\"media_progress_bar\" *ngIf=\"show_progress\">\n\t\t\t\t<div class=\"det\">\n\t\t\t\t\t<div class=\"upl-file-name\">IMG20185.JPG</div>\n\t\t\t\t\t<div class=\"upl-time-rem\">5 sec remaining</div>\n\t\t\t\t\t<div class=\"close-btn\"><img src=\"img/closeNormal.png\" alt=\"Close-btn\"></div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"progress\">\n\t\t\t\t\t<div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:{{progress_cnt}}%\">\n\t\t\t\t\t\t<span class=\"sr-only\">70% Complete</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<p class=\"or\">Or Add Video Link</p>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"vlink\">Video Link</label>\n\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"vlink\" placeholder=\"Video Link\" name=\"video_link\" [(ngModel)]=\"video_url\">\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"button_group\">\n\t\t\t<button  class=\"add-btn\" (click)=\"addLink()\">Add Media</button>\n\t\t</div>\n\t</div>\n</ng-template>"

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
    function MyProfileComponent(MyProfileService, toastr, router, modalService, lightbox) {
        var _this = this;
        this.MyProfileService = MyProfileService;
        this.toastr = toastr;
        this.router = router;
        this.modalService = modalService;
        this.lightbox = lightbox;
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
        this.chart = '';
        this.follower_age_chart = '';
        this.track_analytic = '';
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
                this.userdata['month'] = dt.getMonth() + 1;
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
                this.userdata['month'] = dt.getMonth() + 1;
                this.userdata['year'] = dt.getFullYear();
            }
            if (this.userdata.image) {
                this.default_profile_img = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].USER_IMG + this.userdata.image;
            }
        }
        this.MyProfileService.getAllMusicType().subscribe(function (response) {
            _this.music_types = response['music'];
        });
        this.chart = new __WEBPACK_IMPORTED_MODULE_8_angular_highcharts__["a" /* Chart */]({
            chart: {
                type: 'column'
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
                    data: [1, 2, 3, 10, 5, 2, 8]
                }
            ]
        });
    }
    MyProfileComponent.prototype.ngOnInit = function () {
        if (this.userdata['type'] == 'artist') {
            this.getMediaList();
            this.getAllFollowerAnalytics({ day: 14 });
            this.getAllTrackAnalytic({ day: this.analytics_days });
        }
    };
    MyProfileComponent.prototype.tabChange = function (cnt) {
        this.tab_cnt = cnt;
    };
    MyProfileComponent.prototype.changeAnlyticTab = function (cnt) {
        this.analytic_tab = cnt;
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
        console.log(fileList);
        var formData = new FormData();
        formData.append('image', fileList[0]);
        if (this.userdata.type == 'artist') {
            this.MyProfileService.updateArtistProfileImage(formData).subscribe(function (response) {
                console.log('uploaded image', response);
                _this.default_profile_img = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].ARTIST_IMG + response['image'];
                _this.updateLocalStorage();
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
    };
    MyProfileComponent.prototype.updateCoverImage = function (event) {
        var _this = this;
        var fileList = event.target.files;
        console.log(fileList);
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
                    _this.userdata['month'] = dt.getMonth() + 1;
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
                    _this.userdata['month'] = dt.getMonth() + 1;
                    _this.userdata['year'] = dt.getFullYear();
                }
                if (_this.userdata.image) {
                    _this.default_profile_img = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].USER_IMG + _this.userdata.image;
                }
                localStorage.setItem('user', JSON.stringify(data));
            });
        }
    };
    MyProfileComponent.prototype.removeArtistImage = function () {
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
        swal({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (flag) {
            thi.MyProfileService.removeMediaById(id).subscribe(function (response) {
                thi.toastr.success(response['message'], 'Success!');
                thi.getMediaList();
            }, function (error) {
                thi.toastr.error(error['error'].message, 'Error!');
            });
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
        });
    };
    // Get all track and contest details
    MyProfileComponent.prototype.getAllTrackAnalytic = function (data) {
        var _this = this;
        this.MyProfileService.getAllTrackContestData(data).subscribe(function (response) {
            _this.track_analytic = response;
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
                type: 'column'
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
    MyProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-myProfile',
            template: __webpack_require__("../../../../../src/app/dashboard-layout/my_profile/myProfile.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__myProfile_service__["a" /* MyProfileService */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_7_angular2_lightbox__["Lightbox"]])
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

module.exports = "<div class=\"track-comment-wrap\">\n  <div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-2 col-sm-3 col-xs-6\">\n            <div class=\"profile-img\">\n                <a href=\"javascript:;\"><img src=\"{{artistdata.image ? artist_img_url+artistdata.image : 'img/profile-img.png'}}\" alt=\"Profile Images\"></a>\n            </div>\n          </div>\n          <div class=\"col-md-10 col-sm-8 col-xs-6\">\n            <div class=\"abt-tr\">\n              <div class=\"play-btn\">\n                <a href=\"javascript:;\">\n                  <img src=\"img/play.png\" alt=\"\" (click)=\"playAudio(track.audio, 1)\" [style.display]=\"audio_ins.length == 0 && !audio_ins[1] ? 'block' : 'none'\">\n                  <img src=\"img/pause.png\" alt=\"\" (click)=\"stopAudio(1)\" [style.display]=\"audio_ins.length > 0 && audio_ins[1] ? 'block' : 'none'\">\n                </a>\n              </div>\n              <div class=\"track-cname\"><a href=\"javascript:;\">{{track['name']}}</a></div>\n              <div class=\"artist-name\"><h2><a href=\"javascript:;\">{{artistdata.first_name+' '+artistdata.last_name}}</a></h2></div>\n            </div>\n            <div class=\"action\">\n                <div class=\"cmt-like\"><a href=\"javascript:;\" class=\"liked\"><img src=\"img/likehand.png\" alt=\"\">{{track.no_of_likes}}</a></div>\n                <div class=\"download\"><a href=\"javascript:;\"><img src=\"img/download.png\" alt=\"\">${{track.price}}</a></div>\n                <div class=\"share\"><a href=\"javascript:;\"><img src=\"img/share.png\" alt=\"\"></a></div>\n  \n              </div>\n            <div class=\"profile-location\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> <span>New York</span>\n            <p class=\"{{artistdata['music_type']['alias']}} tag\">{{artistdata['music_type']['name']}}</p></div>\n  \n            <div class=\"profile-description\">\n              <p>{{track.description}}</p>\n              \n            </div>\n          </div>\n      </div>\n      <div class=\"col-md-12\">\n        <div class=\"profile-detail-wrap\">\n          <div class=\"row\">\n            <div class=\"col-md-12 col-sm-12 col-xs-12\">\n              <div class=\"comments\">\n                <h3 class=\"num-cmt\">{{trackcomments.length}} Comments</h3>\n                <div class=\"add-comment\" *ngIf=\"user && user.user\">\n                    <form>\n                      <div class=\"s-img\"><img src=\"{{user['user'].image ? user_img_url+user['user'].image : 'img/fan1.png'}}\" alt=\"img\"></div>\n                        <div class=\"form-group\">\n                            <label for=\"cmmt\">Write a Comment</label>\n                            <input type=\"text\" class=\"form-control\" id=\"cmmt\" name=\"comment\" [(ngModel)]=\"comment_txt\" placeholder=\"Write a comment\">\n                          </div>\n                          <div class=\"button_group\">\n                        <button type=\"submit\" (click)=\"postComment()\" [disabled]=\"show_spinner\" class=\"update-btn\">Post <i class=\"fa fa-spinner fa-spin\" *ngIf=\"show_spinner\"></i></button>\n                      </div>\n                    </form>\n\t\t\t\t\t\t\t\t\t</div>\n                <div class=\"login-alert\" *ngIf=\"!user\">Please Login to leave your comment</div>\n                <div class=\"comment-block col-md-12\" *ngFor=\"let comment of trackcomments; let i=index;\">\n                  <div class=\"s-name\">{{comment['track_id']['name']}}</div>\n                  <div class=\"s-img\"><img src=\"{{comment['user_id']['image'] ? user_img_url+comment['user_id']['image'] : 'img/fan1.png'}}\" alt=\"img\"></div>\n                  <div class=\"cm-date-name\">\n                    <h6>{{comment['user_id']['first_name']+' '+comment['user_id']['last_name']}}.</h6>\n                    <p>{{comment['created_at'] | timeAgo}}</p>\n                    <div class=\"profile-descriptions\">\n                      <p>{{comment['comment']}}</p>\n                    </div>\n                  </div>\n                  \n\n                </div>\n              </div>\n            </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

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
    TrackCommentsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], TrackCommentsService);
    return TrackCommentsService;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard-layout/vote/vote.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 col-xs-12 vote-title\">\n  <div class=\"news-header\">\n    <div class=\"row\">\n      <div class=\"col-md-7 col-sm-6 col-xs-5\">\n        <div class=\"head-global\"><h2>Vote</h2></div>\n      </div>\n      <div class=\"col-md-5 col-sm-6 col-xs-7\">\n        <div class=\"new-head\">\n          <div class=\"search-wrap\">\n            <form>\n              <div class=\"mobile-search\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></div>\n              <div class=\"search-input\">\n                <input type=\"text\" placeholder=\"Search by Artist Name or Song Title\">\n              </div>\n            </form>\n          </div>\n          <div class=\"filter-head\">\n            <a href=\"javascript:;\" (click)=\"toggleFilter()\">\n              <div class=\"filter-icon\"><img src=\"img/filter.png\" alt=\"Filter Icon\"></div>\n              <span>Filters <i class=\"fa fa-caret-right\"></i></span>\n            </a>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"filter-drop-down\" [style.display]=\"show_filter ? 'block' : 'none'\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-md-2 col-sm-6 col-xs-6\">\n              <div class=\"music-genre\">\n                <div class=\"filter-heading\">Music Genre</div>\n                <ul>\n                  <li>\n                    <div class=\"radio\">\n                        <label>\n                          <input type=\"radio\" value=\"\" name=\"musicgenre\">All styles\n                          <div class=\"radio_check\"></div>\n                        </label>\n                    </div>\n                  </li>\n                  <li>\n                    <div class=\"radio\">\n                        <label>\n                          <input type=\"radio\" value=\"\" name=\"musicgenre\">Hip Hop\n                          <div class=\"radio_check\"></div>\n                        </label>\n                    </div>\n                  </li>\n                  <li>\n                    <div class=\"radio\">\n                        <label>\n                          <input type=\"radio\" value=\"\" name=\"musicgenre\">Rock\n                          <div class=\"radio_check\"></div>\n                        </label>\n                    </div>\n                  </li>\n                  <li>\n                    <div class=\"radio\">\n                        <label>\n                          <input type=\"radio\" value=\"\" name=\"musicgenre\">R&B\n                          <div class=\"radio_check\"></div>\n                        </label>\n                    </div>\n                  </li>\n                  <li>\n                    <div class=\"radio\">\n                        <label>\n                          <input type=\"radio\" value=\"\" name=\"musicgenre\">Country\n                          <div class=\"radio_check\"></div>\n                        </label>\n                    </div>\n                  </li>\n                  <li>\n                    <div class=\"radio\">\n                        <label>\n                          <input type=\"radio\" value=\"\" name=\"musicgenre\">Pop\n                          <div class=\"radio_check\"></div>\n                        </label>\n                    </div>\n                  </li>\n                  <li>\n                    <div class=\"radio\">\n                        <label>\n                          <input type=\"radio\" value=\"\" name=\"musicgenre\">Electronic\n                          <div class=\"radio_check\"></div>\n                        </label>\n                    </div>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"col-md-2 col-sm-6 col-xs-6\">\n              <div class=\"artist-type\">\n                <div class=\"filter-heading\">Artist Type</div>\n                <ul>\n                  <li>\n                    <div class=\"checkbox\">\n                        <label>\n                          <input type=\"checkbox\" value=\"\" checked>\n                          <div class=\"chk_check\"></div>\n                          <span>Rising Stars</span>\n                        </label>\n                    </div>\n                  </li>\n                  <li>\n                    <div class=\"checkbox\">\n                        <label>\n                          <input type=\"checkbox\" value=\"\" checked>\n                          <div class=\"chk_check\"></div>\n                          <span>Chart Toppers</span>\n                        </label>\n                    </div>\n                  </li>\n                  <li>\n                    <div class=\"checkbox\">\n                        <label>\n                          <input type=\"checkbox\" value=\"\" checked>\n                          <div class=\"chk_check\"></div>\n                          <span>My Artsist</span>\n                        </label>\n                    </div>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"col-md-8 col-sm-12 col-xs-12\">\n              <div class=\"sub-menu-filter\">\n              <div class=\"filter-heading\">Music Genre</div>\n                <div class=\"row\">\n                  <div class=\"col-md-2 col-sm-4 col-xs-4\">\n                    <div class=\"filter-subhead\">Northeast</div>\n                    <ul>\n                      <li>\n                        <div class=\"checkbox\">\n                            <label>\n                              <input type=\"checkbox\" value=\"\">\n                              <div class=\"chk_check\"></div>\n                              <span>Marryland</span>\n                            </label>\n                        </div>\n                      </li>\n                      <li>\n                        <div class=\"checkbox\">\n                            <label>\n                              <input type=\"checkbox\" value=\"\">\n                              <div class=\"chk_check\"></div>\n                              <span>New Jersey</span>\n                            </label>\n                        </div>\n                      </li>\n                      <li>\n                        <div class=\"checkbox\">\n                            <label>\n                              <input type=\"checkbox\" value=\"\">\n                              <div class=\"chk_check\"></div>\n                              <span>Pennsylvania</span>\n                            </label>\n                        </div>\n                      </li>\n                      <li>\n                        <div class=\"checkbox\">\n                            <label>\n                              <input type=\"checkbox\" value=\"\" checked>\n                              <div class=\"chk_check\"></div>\n                              <span>New York</span>\n                            </label>\n                        </div>\n                      </li>\n                      <li>\n                        <div class=\"checkbox\">\n                            <label>\n                              <input type=\"checkbox\" value=\"\">\t\n                              <div class=\"chk_check\"></div>\n                              <span>Delaware</span>\n                            </label>\n                        </div>\n                      </li>\n                    </ul>\n                  </div>\n                  <div class=\"col-md-2 col-sm-4 col-xs-4\">\n                    <div class=\"filter-subhead\">southeast</div>\n                    <ul>\n                      <li>\n                        <div class=\"checkbox\">\n                            <label>\n                              <input type=\"checkbox\" value=\"\">\n                              <div class=\"chk_check\"></div>\n                              <span>Marryland</span>\n                            </label>\n                        </div>\n                      </li>\n                      <li>\n                        <div class=\"checkbox\">\n                            <label>\n                              <input type=\"checkbox\" value=\"\">\n                              <div class=\"chk_check\"></div>\n                              <span>New Jersey</span>\n                            </label>\n                        </div>\n                      </li>\n                      <li>\n                        <div class=\"checkbox\">\n                            <label>\n                              <input type=\"checkbox\" value=\"\">\n                              <div class=\"chk_check\"></div>\n                              <span>Pennsylvania</span>\n                            </label>\n                        </div>\n                      </li>\n                      <li>\n                        <div class=\"checkbox\">\n                            <label>\n                              <input type=\"checkbox\" value=\"\" checked>\t\n                              <div class=\"chk_check\"></div>\n                              <span>New York</span>\n                            </label>\n                        </div>\n                      </li>\n                      <li>\n                        <div class=\"checkbox\">\n                            <label>\n                              <input type=\"checkbox\" value=\"\">\t\n                              <div class=\"chk_check\"></div>\n                              <span>Delaware</span>\n                            </label>\n                        </div>\n                      </li>\n                    </ul>\n                  </div>\n                  <div class=\"col-md-2 col-sm-4 col-xs-4\">\n                    <div class=\"filter-subhead\">Midwest</div>\n                    <ul>\n                      <li>\n                        <div class=\"checkbox\">\n                            <label>\n                              <input type=\"checkbox\" value=\"\">\n                              <div class=\"chk_check\"></div>\n                              <span>Marryland</span>\n                            </label>\n                        </div>\n                      </li>\n                      <li>\n                        <div class=\"checkbox\">\n                            <label>\n                              <input type=\"checkbox\" value=\"\">\n                              <div class=\"chk_check\"></div>\n                              <span>New Jersey</span>\n                            </label>\n                        </div>\n                      </li>\n                      <li>\n                        <div class=\"checkbox\">\n                            <label>\n                              <input type=\"checkbox\" value=\"\">\n                              <div class=\"chk_check\"></div>\n                              <span>Pennsylvania</span>\n                            </label>\n                        </div>\n                      </li>\n                      <li>\n                        <div class=\"checkbox\">\n                            <label>\n                              <input type=\"checkbox\" value=\"\" checked>\t\n                              <div class=\"chk_check\"></div>\n                              <span>New York</span>\n                            </label>\n                        </div>\n                      </li>\n                      <li>\n                        <div class=\"checkbox\">\n                            <label>\n                              <input type=\"checkbox\" value=\"\">\t\n                              <div class=\"chk_check\"></div>\n                              <span>Delaware</span>\n                            </label>\n                        </div>\n                      </li>\n                    </ul>\n                  </div>\n                  <div class=\"col-md-2 col-sm-4 col-xs-4\">\n                    <div class=\"filter-subhead\">Southwest</div>\n                    <ul>\n                      <li>\n                        <div class=\"checkbox\">\n                            <label>\n                              <input type=\"checkbox\" value=\"\">\n                              <div class=\"chk_check\"></div>\n                              <span>Marryland</span>\n                            </label>\n                        </div>\n                      </li>\n                      <li>\n                        <div class=\"checkbox\">\n                            <label>\n                              <input type=\"checkbox\" value=\"\">\n                              <div class=\"chk_check\"></div>\n                              <span>New Jersey</span>\n                            </label>\n                        </div>\n                      </li>\n                      <li>\n                        <div class=\"checkbox\">\n                            <label>\n                              <input type=\"checkbox\" value=\"\">\n                              <div class=\"chk_check\"></div>\n                              <span>Pennsylvania</span>\n                            </label>\n                        </div>\n                      </li>\n                      <li>\n                        <div class=\"checkbox\">\n                            <label>\n                              <input type=\"checkbox\" value=\"\" checked>\t\n                              <div class=\"chk_check\"></div>\n                              <span>New York</span>\n                            </label>\n                        </div>\n                      </li>\n                      <li>\n                        <div class=\"checkbox\">\n                            <label>\n                              <input type=\"checkbox\" value=\"\">\t\n                              <div class=\"chk_check\"></div>\n                              <span>Delaware</span>\n                            </label>\n                        </div>\n                      </li>\n                    </ul>\n                  </div>\n                  <div class=\"col-md-2 col-sm-4 col-xs-4\">\n                    <div class=\"filter-subhead\">West</div>\n                    <ul>\n                      <li>\n                        <div class=\"checkbox\">\n                            <label>\n                              <input type=\"checkbox\" value=\"\">\n                              <div class=\"chk_check\"></div>\n                              <span>Marryland</span>\n                            </label>\n                        </div>\n                      </li>\n                      <li>\n                        <div class=\"checkbox\">\n                            <label>\n                              <input type=\"checkbox\" value=\"\">\n                              <div class=\"chk_check\"></div>\n                              <span>New Jersey</span>\n                            </label>\n                        </div>\n                      </li>\n                      <li>\n                        <div class=\"checkbox\">\n                            <label>\n                              <input type=\"checkbox\" value=\"\">\n                              <div class=\"chk_check\"></div>\n                              <span>Pennsylvania</span>\n                            </label>\n                        </div>\n                      </li>\n                      <li>\n                        <div class=\"checkbox\">\n                            <label>\n                              <input type=\"checkbox\" value=\"\" checked>\t\n                              <div class=\"chk_check\"></div>\n                              <span>New York</span>\n                            </label>\n                        </div>\n                      </li>\n                      <li>\n                        <div class=\"checkbox\">\n                            <label>\n                              <input type=\"checkbox\" value=\"\">\t\n                              <div class=\"chk_check\"></div>\n                              <span>Delaware</span>\n                            </label>\n                        </div>\n                      </li>\n                    </ul>\n                  </div>\n                  <div class=\"col-md-2 col-sm-4 col-xs-4\">\n                    <div class=\"filter-subhead\">other</div>\n                    <ul>\n                      <li>\n                        <div class=\"checkbox\">\n                            <label>\n                              <input type=\"checkbox\" value=\"\">\n                              <div class=\"chk_check\"></div>\n                              <span>Puerto Rico</span>\n                            </label>\n                        </div>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-12 col-sm-12 col-xs-12\">\n              <div class=\"button_group\">\n                <a href=\"#\" class=\"cancel-btn\">Cancel</a>\n                <a href=\"#\" class=\"apply-btn\">Apply</a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n    <div class=\"vote-wrap\">\n      <div class=\"container\"> \n        <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <div class=\"contest-wrapper\">\n          <div class=\"heading\">\n            <h3>AOM Contest  Standings</h3>\n          </div>\n          <div class=\"ana-header\">\n              <div class=\"form-group days-grp\">\n              <select class=\"form-control\" id=\"days-select\">\n                  <option>7 Days</option>\n                  <option>1 Month</option>\n              </select>\n              \n              </div>\n              <ul class=\"ana-tabs nav nav-tabs\">\n               <li class=\"nav-item\" ><a class=\"active\" data-toggle=\"tab\" href=\"#regionalfinals\">Regional Quarter Final</a></li>\n               <li class=\"nav-item\"><a data-toggle=\"tab\" href=\"#contestname\">Contest</a></li>\n            </ul>\n          </div>\n          <div class=\"tab-content \">\n            <div class=\"tab-pane fade active show\" id=\"regionalfinals\">\n              <div class=\"track-table mCustomScrollbar \" data-mcs-theme=\"dark-3\">\n                <table>\n                  <thead>\n                    <tr>\n                      <td>Rank</td>\n                      <td>Track, Artist</td>\n                      <td>Music Genre</td>\n                      <td>Location</td>\n                      <td>Round 1</td>\n                      <td>Round 2</td>\n                      <td>Round 3</td>\n                      <td>Number of Votes</td>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr>\n                      <td class=\"serial-num\">1.</td>\n                      <td>\n                        <div class=\"play-option\"><a href=\"#\"><img src=\"img/new-play.png\" alt=\"Play\"></a></div>\n                        <div class=\"track-pic\"><a href=\"#\"><img src=\"img/track-img.png\" alt=\"Track Image\"></a></div>\n                        <div class=\"track-det\" colspan=\"2\">\n                          <p class=\"track-name\">Blue State of Mind</p>\n                          <p class=\"track-singer\">Contest</p>\n                        </div>\n                      </td>\n                      <td class=\"music-gen \"><span class=\"tag hiphop\">Hip Hop</span></td>\n                      <td class=\"location\"><p><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i><span>New York</span></p></td>\n                      <td class=\"rounds\"><p>2 <img src=\"img/top-arrow.png\" alt=\"\"></p></td>\n                      <td class=\"rounds\"><p>2 <img src=\"img/top-arrow.png\" alt=\"\"></p></td>\n                      <td class=\"rounds\"><p>2 <img src=\"img/top-arrow.png\" alt=\"\"></p></td>\n                      <td class=\"td track-vote\">\n                        <img src=\"img/start.png\" alt=\"start\">\n                        <span>10800</span>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td class=\"serial-num\">1.</td>\n                      <td>\n                        <div class=\"play-option\"><a href=\"#\"><img src=\"img/new-play.png\" alt=\"Play\"></a></div>\n                        <div class=\"track-pic\"><a href=\"#\"><img src=\"img/track-img.png\" alt=\"Track Image\"></a></div>\n                        <div class=\"track-det\" colspan=\"2\">\n                          <p class=\"track-name\">Blue State of Mind</p>\n                          <p class=\"track-singer\">Contest</p>\n                        </div>\n                      </td>\n                      <td class=\"music-gen \"><span class=\"tag hiphop\">Hip Hop</span></td>\n                      <td class=\"location\"><p><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i><span>New York</span></p></td>\n                      <td class=\"rounds\"><p>2 <img src=\"img/top-arrow.png\" alt=\"\"></p></td>\n                      <td class=\"rounds\"><p>2 <img src=\"img/top-arrow.png\" alt=\"\"></p></td>\n                      <td class=\"rounds\"><p>2 <img src=\"img/top-arrow.png\" alt=\"\"></p></td>\n                      <td class=\"td track-vote\">\n                        <img src=\"img/start.png\" alt=\"start\">\n                        <span>10800</span>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td class=\"serial-num\">1.</td>\n                      <td>\n                        <div class=\"play-option\"><a href=\"#\"><img src=\"img/new-play.png\" alt=\"Play\"></a></div>\n                        <div class=\"track-pic\"><a href=\"#\"><img src=\"img/track-img.png\" alt=\"Track Image\"></a></div>\n                        <div class=\"track-det\" colspan=\"2\">\n                          <p class=\"track-name\">Blue State of Mind</p>\n                          <p class=\"track-singer\">Contest</p>\n                        </div>\n                      </td>\n                      <td class=\"music-gen \"><span class=\"tag hiphop\">Hip Hop</span></td>\n                      <td class=\"location\"><p><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i><span>New York</span></p></td>\n                      <td class=\"rounds\"><p>2 <img src=\"img/top-arrow.png\" alt=\"\"></p></td>\n                      <td class=\"rounds\"><p>2 <img src=\"img/top-arrow.png\" alt=\"\"></p></td>\n                      <td class=\"rounds\"><p>2 <img src=\"img/top-arrow.png\" alt=\"\"></p></td>\n                      <td class=\"td track-vote\">\n                        <img src=\"img/start.png\" alt=\"start\">\n                        <span>10800</span>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td class=\"serial-num\">1.</td>\n                      <td>\n                        <div class=\"play-option\"><a href=\"#\"><img src=\"img/new-play.png\" alt=\"Play\"></a></div>\n                        <div class=\"track-pic\"><a href=\"#\"><img src=\"img/track-img.png\" alt=\"Track Image\"></a></div>\n                        <div class=\"track-det\" colspan=\"2\">\n                          <p class=\"track-name\">Blue State of Mind</p>\n                          <p class=\"track-singer\">Contest</p>\n                        </div>\n                      </td>\n                      <td class=\"music-gen \"><span class=\"tag hiphop\">Hip Hop</span></td>\n                      <td class=\"location\"><p><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i><span>New York</span></p></td>\n                      <td class=\"rounds\"><p>2 <img src=\"img/top-arrow.png\" alt=\"\"></p></td>\n                      <td class=\"rounds\"><p>2 <img src=\"img/top-arrow.png\" alt=\"\"></p></td>\n                      <td class=\"rounds\"><p>2 <img src=\"img/top-arrow.png\" alt=\"\"></p></td>\n                      <td class=\"td track-vote\">\n                        <img src=\"img/start.png\" alt=\"start\">\n                        <span>10800</span>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td class=\"serial-num\">1.</td>\n                      <td>\n                        <div class=\"play-option\"><a href=\"#\"><img src=\"img/new-play.png\" alt=\"Play\"></a></div>\n                        <div class=\"track-pic\"><a href=\"#\"><img src=\"img/track-img.png\" alt=\"Track Image\"></a></div>\n                        <div class=\"track-det\" colspan=\"2\">\n                          <p class=\"track-name\">Blue State of Mind</p>\n                          <p class=\"track-singer\">Contest</p>\n                        </div>\n                      </td>\n                      <td class=\"music-gen \"><span class=\"tag hiphop\">Hip Hop</span></td>\n                      <td class=\"location\"><p><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i><span>New York</span></p></td>\n                      <td class=\"rounds\"><p>2 <img src=\"img/top-arrow.png\" alt=\"\"></p></td>\n                      <td class=\"rounds\"><p>2 <img src=\"img/top-arrow.png\" alt=\"\"></p></td>\n                      <td class=\"rounds\"><p>2 <img src=\"img/top-arrow.png\" alt=\"\"></p></td>\n                      <td class=\"td track-vote\">\n                        <img src=\"img/start.png\" alt=\"start\">\n                        <span>10800</span>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td class=\"serial-num\">1.</td>\n                      <td>\n                        <div class=\"play-option\"><a href=\"#\"><img src=\"img/new-play.png\" alt=\"Play\"></a></div>\n                        <div class=\"track-pic\"><a href=\"#\"><img src=\"img/track-img.png\" alt=\"Track Image\"></a></div>\n                        <div class=\"track-det\" colspan=\"2\">\n                          <p class=\"track-name\">Blue State of Mind</p>\n                          <p class=\"track-singer\">Contest</p>\n                        </div>\n                      </td>\n                      <td class=\"music-gen \"><span class=\"tag hiphop\">Hip Hop</span></td>\n                      <td class=\"location\"><p><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i><span>New York</span></p></td>\n                      <td class=\"rounds\"><p>2 <img src=\"img/top-arrow.png\" alt=\"\"></p></td>\n                      <td class=\"rounds\"><p>2 <img src=\"img/top-arrow.png\" alt=\"\"></p></td>\n                      <td class=\"rounds\"><p>2 <img src=\"img/top-arrow.png\" alt=\"\"></p></td>\n                      <td class=\"td track-vote\">\n                        <img src=\"img/start.png\" alt=\"start\">\n                        <span>10800</span>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td class=\"serial-num\">1.</td>\n                      <td>\n                        <div class=\"play-option\"><a href=\"#\"><img src=\"img/new-play.png\" alt=\"Play\"></a></div>\n                        <div class=\"track-pic\"><a href=\"#\"><img src=\"img/track-img.png\" alt=\"Track Image\"></a></div>\n                        <div class=\"track-det\" colspan=\"2\">\n                          <p class=\"track-name\">Blue State of Mind</p>\n                          <p class=\"track-singer\">Contest</p>\n                        </div>\n                      </td>\n                      <td class=\"music-gen \"><span class=\"tag hiphop\">Hip Hop</span></td>\n                      <td class=\"location\"><p><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i><span>New York</span></p></td>\n                      <td class=\"rounds\"><p>2 <img src=\"img/top-arrow.png\" alt=\"\"></p></td>\n                      <td class=\"rounds\"><p>2 <img src=\"img/top-arrow.png\" alt=\"\"></p></td>\n                      <td class=\"rounds\"><p>2 <img src=\"img/top-arrow.png\" alt=\"\"></p></td>\n                      <td class=\"td track-vote\">\n                        <img src=\"img/start.png\" alt=\"start\">\n                        <span>10800</span>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-12\">\n        <div class=\"highlights-wrap mCustomScrollbar \" data-mcs-theme=\"dark-3\">\n          <div class=\"row\">\n            <div class=\"col-md-3 col-sm-4 col-xs-6\">\n              <div class=\"final-wrap\">\n                <div class=\"img-wrap\">\n                  <img src=\"img/highlight-player.png\" alt=\"Finalists\">\n                  <a href=\"javascript:void(0)\" class=\"fan\"><i class=\"fa fa-heart\" aria-hidden=\"true\"></i></a>\n                </div>\n                <div class=\"content-wrap\">\n                  <div class=\"player\">\n                    <div class=\"title\"><a href=\"#\">DJ Bond</a></div>\n                    <div class=\"finalist-name\">Garry Wood</div>\n                    <div class=\"action-btn\"><a href=\"#\"><img src=\"img/play.png\" alt=\"Pause\"></a></div>\n                    \n                  </div>\n                  <div class=\"sub-con\">\n                    <div class=\"location\">\n                      <p><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i><span>Brooklyn, New York</span></p>\n                    </div>\n                    <div class=\"td track-vote\">\n                          <img src=\"img/small-star.png\" alt=\"start\">\n                          <span>1300</span>\n                        </div>\n                        <div class=\"cat ele\">Electronic</div>\n                      </div>\n                      <a href=\"#\" class=\"add-btn\">Vote</a>\n                  \n                </div>\n              </div>\n            </div>\n  \n            <div class=\"col-md-3 col-sm-4 col-xs-6\">\n              <div class=\"final-wrap\">\n                <div class=\"img-wrap\">\n                  <img src=\"img/highlight-player.png\" alt=\"Finalists\">\n                  <a href=\"javascript:void(0)\" class=\"fan\"><i class=\"fa fa-heart\" aria-hidden=\"true\"></i></a>\n                </div>\n                <div class=\"content-wrap\">\n                  <div class=\"player\">\n                    <div class=\"title\"><a href=\"#\">DJ Bond</a></div>\n                    <div class=\"finalist-name\">Garry Wood</div>\n                    <div class=\"action-btn\"><a href=\"#\"><img src=\"img/play.png\" alt=\"Pause\"></a></div>\n                    \n                  </div>\n                  <div class=\"sub-con\">\n                    <div class=\"location\">\n                      <p><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i><span>Brooklyn, New York</span></p>\n                    </div>\n                    <div class=\"td track-vote\">\n                          <img src=\"img/small-star.png\" alt=\"start\">\n                          <span>1300</span>\n                        </div>\n                        <div class=\"cat ele\">Electronic</div>\n                      </div>\n                      <a href=\"#\" class=\"add-btn\">Vote</a>\n                  \n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-3 col-sm-4 col-xs-6\">\n              <div class=\"final-wrap\">\n                <div class=\"img-wrap\">\n                  <img src=\"img/highlight-player.png\" alt=\"Finalists\">\n                  <a href=\"javascript:void(0)\" class=\"fan\"><i class=\"fa fa-heart\" aria-hidden=\"true\"></i></a>\n                </div>\n                <div class=\"content-wrap\">\n                  <div class=\"player\">\n                    <div class=\"title\"><a href=\"#\">DJ Bond</a></div>\n                    <div class=\"finalist-name\">Garry Wood</div>\n                    <div class=\"action-btn\"><a href=\"#\"><img src=\"img/play.png\" alt=\"Pause\"></a></div>\n                    \n                  </div>\n                  <div class=\"sub-con\">\n                    <div class=\"location\">\n                      <p><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i><span>Brooklyn, New York</span></p>\n                    </div>\n                    <div class=\"td track-vote\">\n                          <img src=\"img/small-star.png\" alt=\"start\">\n                          <span>1300</span>\n                        </div>\n                        <div class=\"cat ele\">Electronic</div>\n                      </div>\n                      <a href=\"#\" class=\"add-btn\">Vote</a>\n                  \n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-3 col-sm-4 col-xs-6\">\n              <div class=\"final-wrap\">\n                <div class=\"img-wrap\">\n                  <img src=\"img/highlight-player.png\" alt=\"Finalists\">\n                  <a href=\"javascript:void(0)\" class=\"fan\"><i class=\"fa fa-heart\" aria-hidden=\"true\"></i></a>\n                </div>\n                <div class=\"content-wrap\">\n                  <div class=\"player\">\n                    <div class=\"title\"><a href=\"#\">DJ Bond</a></div>\n                    <div class=\"finalist-name\">Garry Wood</div>\n                    <div class=\"action-btn\"><a href=\"#\"><img src=\"img/play.png\" alt=\"Pause\"></a></div>\n                    \n                  </div>\n                  <div class=\"sub-con\">\n                    <div class=\"location\">\n                      <p><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i><span>Brooklyn, New York</span></p>\n                    </div>\n                    <div class=\"td track-vote\">\n                          <img src=\"img/small-star.png\" alt=\"start\">\n                          <span>1300</span>\n                        </div>\n                        <div class=\"cat ele\">Electronic</div>\n                      </div>\n                      <a href=\"#\" class=\"add-btn\">Vote</a>\n                  \n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-3 col-sm-4 col-xs-6\">\n              <div class=\"final-wrap\">\n                <div class=\"img-wrap\">\n                  <img src=\"img/highlight-player.png\" alt=\"Finalists\">\n                  <a href=\"javascript:void(0)\" class=\"fan\"><i class=\"fa fa-heart\" aria-hidden=\"true\"></i></a>\n                </div>\n                <div class=\"content-wrap\">\n                  <div class=\"player\">\n                    <div class=\"title\"><a href=\"#\">DJ Bond</a></div>\n                    <div class=\"finalist-name\">Garry Wood</div>\n                    <div class=\"action-btn\"><a href=\"#\"><img src=\"img/play.png\" alt=\"Pause\"></a></div>\n                    \n                  </div>\n                  <div class=\"sub-con\">\n                    <div class=\"location\">\n                      <p><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i><span>Brooklyn, New York</span></p>\n                    </div>\n                    <div class=\"td track-vote\">\n                          <img src=\"img/small-star.png\" alt=\"start\">\n                          <span>1300</span>\n                        </div>\n                        <div class=\"cat ele\">Electronic</div>\n                      </div>\n                      <a href=\"#\" class=\"add-btn\">Vote</a>\n                  \n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-3 col-sm-4 col-xs-6\">\n              <div class=\"final-wrap\">\n                <div class=\"img-wrap\">\n                  <img src=\"img/highlight-player.png\" alt=\"Finalists\">\n                  <a href=\"javascript:void(0)\" class=\"fan\"><i class=\"fa fa-heart\" aria-hidden=\"true\"></i></a>\n                </div>\n                <div class=\"content-wrap\">\n                  <div class=\"player\">\n                    <div class=\"title\"><a href=\"#\">DJ Bond</a></div>\n                    <div class=\"finalist-name\">Garry Wood</div>\n                    <div class=\"action-btn\"><a href=\"#\"><img src=\"img/play.png\" alt=\"Pause\"></a></div>\n                    \n                  </div>\n                  <div class=\"sub-con\">\n                    <div class=\"location\">\n                      <p><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i><span>Brooklyn, New York</span></p>\n                    </div>\n                    <div class=\"td track-vote\">\n                          <img src=\"img/small-star.png\" alt=\"start\">\n                          <span>1300</span>\n                        </div>\n                        <div class=\"cat ele\">Electronic</div>\n                      </div>\n                      <a href=\"#\" class=\"add-btn\">Vote</a>\n                  \n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-3 col-sm-4 col-xs-6\">\n              <div class=\"final-wrap\">\n                <div class=\"img-wrap\">\n                  <img src=\"img/highlight-player.png\" alt=\"Finalists\">\n                  <a href=\"javascript:void(0)\" class=\"fan\"><i class=\"fa fa-heart\" aria-hidden=\"true\"></i></a>\n                </div>\n                <div class=\"content-wrap\">\n                  <div class=\"player\">\n                    <div class=\"title\"><a href=\"#\">DJ Bond</a></div>\n                    <div class=\"finalist-name\">Garry Wood</div>\n                    <div class=\"action-btn\"><a href=\"#\"><img src=\"img/play.png\" alt=\"Pause\"></a></div>\n                    \n                  </div>\n                  <div class=\"sub-con\">\n                    <div class=\"location\">\n                      <p><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i><span>Brooklyn, New York</span></p>\n                    </div>\n                    <div class=\"td track-vote\">\n                          <img src=\"img/small-star.png\" alt=\"start\">\n                          <span>1300</span>\n                        </div>\n                        <div class=\"cat ele\">Electronic</div>\n                      </div>\n                      <a href=\"#\" class=\"add-btn\">Vote</a>\n                  \n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-3 col-sm-4 col-xs-6\">\n              <div class=\"final-wrap\">\n                <div class=\"img-wrap\">\n                  <img src=\"img/highlight-player.png\" alt=\"Finalists\">\n                  <a href=\"javascript:void(0)\" class=\"fan\"><i class=\"fa fa-heart\" aria-hidden=\"true\"></i></a>\n                </div>\n                <div class=\"content-wrap\">\n                  <div class=\"player\">\n                    <div class=\"title\"><a href=\"#\">DJ Bond</a></div>\n                    <div class=\"finalist-name\">Garry Wood</div>\n                    <div class=\"action-btn\"><a href=\"#\"><img src=\"img/play.png\" alt=\"Pause\"></a></div>\n                    \n                  </div>\n                  <div class=\"sub-con\">\n                    <div class=\"location\">\n                      <p><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i><span>Brooklyn, New York</span></p>\n                    </div>\n                    <div class=\"td track-vote\">\n                          <img src=\"img/small-star.png\" alt=\"start\">\n                          <span>1300</span>\n                        </div>\n                        <div class=\"cat ele\">Electronic</div>\n                      </div>\n                      <a href=\"#\" class=\"add-btn\">Vote</a>\n                  \n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-3 col-sm-4 col-xs-6\">\n              <div class=\"final-wrap\">\n                <div class=\"img-wrap\">\n                  <img src=\"img/highlight-player.png\" alt=\"Finalists\">\n                  <a href=\"javascript:void(0)\" class=\"fan\"><i class=\"fa fa-heart\" aria-hidden=\"true\"></i></a>\n                </div>\n                <div class=\"content-wrap\">\n                  <div class=\"player\">\n                    <div class=\"title\"><a href=\"#\">DJ Bond</a></div>\n                    <div class=\"finalist-name\">Garry Wood</div>\n                    <div class=\"action-btn\"><a href=\"#\"><img src=\"img/play.png\" alt=\"Pause\"></a></div>\n                    \n                  </div>\n                  <div class=\"sub-con\">\n                    <div class=\"location\">\n                      <p><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i><span>Brooklyn, New York</span></p>\n                    </div>\n                    <div class=\"td track-vote\">\n                          <img src=\"img/small-star.png\" alt=\"start\">\n                          <span>1300</span>\n                        </div>\n                        <div class=\"cat ele\">Electronic</div>\n                      </div>\n                      <a href=\"#\" class=\"add-btn\">Vote</a>\n                  \n                </div>\n              </div>\n            </div>\t\t\t\t\t\n            <div class=\"col-md-3 col-sm-4 col-xs-6\">\n              <div class=\"final-wrap\">\n                <div class=\"img-wrap\">\n                  <img src=\"img/highlight-player.png\" alt=\"Finalists\">\n                  <a href=\"javascript:void(0)\" class=\"fan\"><i class=\"fa fa-heart\" aria-hidden=\"true\"></i></a>\n                </div>\n                <div class=\"content-wrap\">\n                  <div class=\"player\">\n                    <div class=\"title\"><a href=\"#\">DJ Bond</a></div>\n                    <div class=\"finalist-name\">Garry Wood</div>\n                    <div class=\"action-btn\"><a href=\"#\"><img src=\"img/play.png\" alt=\"Pause\"></a></div>\n                    \n                  </div>\n                  <div class=\"sub-con\">\n                    <div class=\"location\">\n                      <p><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i><span>Brooklyn, New York</span></p>\n                    </div>\n                    <div class=\"td track-vote\">\n                          <img src=\"img/small-star.png\" alt=\"start\">\n                          <span>1300</span>\n                        </div>\n                        <div class=\"cat ele\">Electronic</div>\n                      </div>\n                      <a href=\"#\" class=\"add-btn\">Vote</a>\n                  \n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-3 col-sm-4 col-xs-6\">\n              <div class=\"final-wrap\">\n                <div class=\"img-wrap\">\n                  <img src=\"img/highlight-player.png\" alt=\"Finalists\">\n                  <a href=\"javascript:void(0)\" class=\"fan\"><i class=\"fa fa-heart\" aria-hidden=\"true\"></i></a>\n                </div>\n                <div class=\"content-wrap\">\n                  <div class=\"player\">\n                    <div class=\"title\"><a href=\"#\">DJ Bond</a></div>\n                    <div class=\"finalist-name\">Garry Wood</div>\n                    <div class=\"action-btn\"><a href=\"#\"><img src=\"img/play.png\" alt=\"Pause\"></a></div>\n                    \n                  </div>\n                  <div class=\"sub-con\">\n                    <div class=\"location\">\n                      <p><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i><span>Brooklyn, New York</span></p>\n                    </div>\n                    <div class=\"td track-vote\">\n                          <img src=\"img/small-star.png\" alt=\"start\">\n                          <span>1300</span>\n                        </div>\n                        <div class=\"cat ele\">Electronic</div>\n                      </div>\n                      <a href=\"#\" class=\"add-btn\">Vote</a>\n                  \n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-3 col-sm-4 col-xs-6\">\n              <div class=\"final-wrap\">\n                <div class=\"img-wrap\">\n                  <img src=\"img/highlight-player.png\" alt=\"Finalists\">\n                  <a href=\"javascript:void(0)\" class=\"fan\"><i class=\"fa fa-heart\" aria-hidden=\"true\"></i></a>\n                </div>\n                <div class=\"content-wrap\">\n                  <div class=\"player\">\n                    <div class=\"title\"><a href=\"#\">DJ Bond</a></div>\n                    <div class=\"finalist-name\">Garry Wood</div>\n                    <div class=\"action-btn\"><a href=\"#\"><img src=\"img/play.png\" alt=\"Pause\"></a></div>\n                    \n                  </div>\n                  <div class=\"sub-con\">\n                    <div class=\"location\">\n                      <p><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i><span>Brooklyn, New York</span></p>\n                    </div>\n                    <div class=\"td track-vote\">\n                          <img src=\"img/small-star.png\" alt=\"start\">\n                          <span>1300</span>\n                        </div>\n                        <div class=\"cat ele\">Electronic</div>\n                      </div>\n                      <a href=\"#\" class=\"add-btn\">Vote</a>\n                  \n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-3 col-sm-4 col-xs-6\">\n              <div class=\"final-wrap\">\n                <div class=\"img-wrap\">\n                  <img src=\"img/highlight-player.png\" alt=\"Finalists\">\n                  <a href=\"javascript:void(0)\" class=\"fan\"><i class=\"fa fa-heart\" aria-hidden=\"true\"></i></a>\n                </div>\n                <div class=\"content-wrap\">\n                  <div class=\"player\">\n                    <div class=\"title\"><a href=\"#\">DJ Bond</a></div>\n                    <div class=\"finalist-name\">Garry Wood</div>\n                    <div class=\"action-btn\"><a href=\"#\"><img src=\"img/play.png\" alt=\"Pause\"></a></div>\n                    \n                  </div>\n                  <div class=\"sub-con\">\n                    <div class=\"location\">\n                      <p><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i><span>Brooklyn, New York</span></p>\n                    </div>\n                    <div class=\"td track-vote\">\n                          <img src=\"img/small-star.png\" alt=\"start\">\n                          <span>1300</span>\n                        </div>\n                        <div class=\"cat ele\">Electronic</div>\n                      </div>\n                      <a href=\"#\" class=\"add-btn\">Vote</a>\n                  \n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-3 col-sm-4 col-xs-6\">\n              <div class=\"final-wrap\">\n                <div class=\"img-wrap\">\n                  <img src=\"img/highlight-player.png\" alt=\"Finalists\">\n                  <a href=\"javascript:void(0)\" class=\"fan\"><i class=\"fa fa-heart\" aria-hidden=\"true\"></i></a>\n                </div>\n                <div class=\"content-wrap\">\n                  <div class=\"player\">\n                    <div class=\"title\"><a href=\"#\">DJ Bond</a></div>\n                    <div class=\"finalist-name\">Garry Wood</div>\n                    <div class=\"action-btn\"><a href=\"#\"><img src=\"img/play.png\" alt=\"Pause\"></a></div>\n                    \n                  </div>\n                  <div class=\"sub-con\">\n                    <div class=\"location\">\n                      <p><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i><span>Brooklyn, New York</span></p>\n                    </div>\n                    <div class=\"td track-vote\">\n                          <img src=\"img/small-star.png\" alt=\"start\">\n                          <span>1300</span>\n                        </div>\n                        <div class=\"cat ele\">Electronic</div>\n                      </div>\n                      <a href=\"#\" class=\"add-btn\">Vote</a>\n                  \n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-3 col-sm-4 col-xs-6\">\n              <div class=\"final-wrap\">\n                <div class=\"img-wrap\">\n                  <img src=\"img/highlight-player.png\" alt=\"Finalists\">\n                  <a href=\"javascript:void(0)\" class=\"fan\"><i class=\"fa fa-heart\" aria-hidden=\"true\"></i></a>\n                </div>\n                <div class=\"content-wrap\">\n                  <div class=\"player\">\n                    <div class=\"title\"><a href=\"#\">DJ Bond</a></div>\n                    <div class=\"finalist-name\">Garry Wood</div>\n                    <div class=\"action-btn\"><a href=\"#\"><img src=\"img/play.png\" alt=\"Pause\"></a></div>\n                    \n                  </div>\n                  <div class=\"sub-con\">\n                    <div class=\"location\">\n                      <p><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i><span>Brooklyn, New York</span></p>\n                    </div>\n                    <div class=\"td track-vote\">\n                          <img src=\"img/small-star.png\" alt=\"start\">\n                          <span>1300</span>\n                        </div>\n                        <div class=\"cat ele\">Electronic</div>\n                      </div>\n                      <a href=\"#\" class=\"add-btn\">Vote</a>\n                  \n                </div>\n              </div>\n            </div>\n\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div> "

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

module.exports = "<section class=\"whats-new-wrap\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12 col-sm-12 col-xs-12\">\n        <div class=\"news-header\">\n          <div class=\"row\">\n            <div class=\"col-md-7 col-sm-6 col-xs-5\">\n              <div class=\"head-global\"><h2>What's New</h2></div>\n            </div>\n            <div class=\"col-md-5 col-sm-6 col-xs-7\">\n              <div class=\"new-head\">\n                <div class=\"search-wrap\">\n                  <form>\n                    <div class=\"mobile-search\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></div>\n                    <div class=\"search-input\">\n                      <input type=\"text\" placeholder=\"Search by Artist Name or Song Title\" name=\"search\" [(ngModel)]=\"search_str\" (keyup)=\"filter($event)\">\n                    </div>\n                  </form>\n                </div>\n                <div class=\"filter-head\" (click)=\"toggleFilter()\">\n                  <a href=\"javascript:;\">\n                    <div class=\"filter-icon\"><img src=\"img/filter.png\" alt=\"Filter Icon\"></div>\n                    <span>Filters <i class=\"fa fa-caret-right\"></i></span>\n                  </a>\n                  \n                </div>\n              </div>\n            </div>\n            <div class=\"filter-drop-down\" [style.display]=\"show_filter ? 'block' : 'none'\">\n              <div class=\"container\">\n                <div class=\"row\">\n                  <div class=\"col-md-2 col-sm-6 col-xs-6\">\n                    <div class=\"music-genre\">\n                      <div class=\"filter-heading\">Music Genre</div>\n                      <ul>\n                        <li>\n                          <div class=\"radio\">\n                              <label>\n                                <input type=\"radio\" value=\"\" name=\"musicgenre\">All styles\n                                <div class=\"radio_check\"></div>\n                              </label>\n                          </div>\n                        </li>\n                        <li *ngFor=\"let m of music_type_list\">\n                          <div class=\"radio\">\n                              <label>\n                                <input type=\"radio\" value=\"{{m._id}}\" name=\"musicgenre\" [(ngModel)]=\"advance_filter.music_type\">{{m.name}}\n                                <div class=\"radio_check\"></div>\n                              </label>\n                          </div>\n                        </li>\n                      </ul>\n                    </div>\n                    \n                  </div>\n                  <!--div class=\"col-md-2 col-sm-6 col-xs-6\">\n                    <div class=\"artist-type\">\n                      <div class=\"filter-heading\">Artist Type</div>\n                      <ul>\n                        <li>\n                          <div class=\"checkbox\">\n                              <label>\n                                <input type=\"checkbox\" value=\"\" checked>\n                                <div class=\"chk_check\"></div>\n                                <span>Rising Stars</span>\n                              </label>\n                          </div>\n                        </li>\n                        <li>\n                          <div class=\"checkbox\">\n                              <label>\n                                <input type=\"checkbox\" value=\"\" checked>\n                                <div class=\"chk_check\"></div>\n                                <span>Chart Toppers</span>\n                              </label>\n                          </div>\n                        </li>\n                        <li>\n                          <div class=\"checkbox\">\n                              <label>\n                                <input type=\"checkbox\" value=\"\" checked>\n                                <div class=\"chk_check\"></div>\n                                <span>My Artsist</span>\n                              </label>\n                          </div>\n                        </li>\n                      </ul>\n                    </div>\n                  </div -->\n                  <div class=\"col-md-8 col-sm-12 col-xs-12\">\n                    <div class=\"sub-menu-filter\">\n                    <div class=\"filter-heading\">Music Genre</div>\n                    <div class=\"row\">\n                      <div class=\"col-md-2 col-sm-4 col-xs-4\">\n                        <div class=\"filter-subhead\">Northeast</div>\n                        <ul>\n                          <li>\n                            <div class=\"checkbox\">\n                                <label>\n                                  <input type=\"checkbox\" value=\"\">\n                                  <div class=\"chk_check\"></div>\n                                  <span>Marryland</span>\n                                </label>\n                            </div>\n                          </li>\n                          <li>\n                            <div class=\"checkbox\">\n                                <label>\n                                  <input type=\"checkbox\" value=\"\">\n                                  <div class=\"chk_check\"></div>\n                                  <span>New Jersey</span>\n                                </label>\n                            </div>\n                          </li>\n                          <li>\n                            <div class=\"checkbox\">\n                                <label>\n                                  <input type=\"checkbox\" value=\"\">\n                                  <div class=\"chk_check\"></div>\n                                  <span>Pennsylvania</span>\n                                </label>\n                            </div>\n                          </li>\n                          <li>\n                            <div class=\"checkbox\">\n                                <label>\n                                  <input type=\"checkbox\" value=\"\" checked>\n                                  <div class=\"chk_check\"></div>\n                                  <span>New York</span>\n                                </label>\n                            </div>\n                          </li>\n                          <li>\n                            <div class=\"checkbox\">\n                                <label>\n                                  <input type=\"checkbox\" value=\"\">\t\n                                  <div class=\"chk_check\"></div>\n                                  <span>Delaware</span>\n                                </label>\n                            </div>\n                          </li>\n                        </ul>\n                      </div>\n                      <div class=\"col-md-2 col-sm-4 col-xs-4\">\n                        <div class=\"filter-subhead\">southeast</div>\n                        <ul>\n                          <li>\n                            <div class=\"checkbox\">\n                                <label>\n                                  <input type=\"checkbox\" value=\"\">\n                                  <div class=\"chk_check\"></div>\n                                  <span>Marryland</span>\n                                </label>\n                            </div>\n                          </li>\n                          <li>\n                            <div class=\"checkbox\">\n                                <label>\n                                  <input type=\"checkbox\" value=\"\">\n                                  <div class=\"chk_check\"></div>\n                                  <span>New Jersey</span>\n                                </label>\n                            </div>\n                          </li>\n                          <li>\n                            <div class=\"checkbox\">\n                                <label>\n                                  <input type=\"checkbox\" value=\"\">\n                                  <div class=\"chk_check\"></div>\n                                  <span>Pennsylvania</span>\n                                </label>\n                            </div>\n                          </li>\n                          <li>\n                            <div class=\"checkbox\">\n                                <label>\n                                  <input type=\"checkbox\" value=\"\" checked>\t\n                                  <div class=\"chk_check\"></div>\n                                  <span>New York</span>\n                                </label>\n                            </div>\n                          </li>\n                          <li>\n                            <div class=\"checkbox\">\n                                <label>\n                                  <input type=\"checkbox\" value=\"\">\t\n                                  <div class=\"chk_check\"></div>\n                                  <span>Delaware</span>\n                                </label>\n                            </div>\n                          </li>\n                        </ul>\n                      </div>\n                      <div class=\"col-md-2 col-sm-4 col-xs-4\">\n                        <div class=\"filter-subhead\">Midwest</div>\n                        <ul>\n                          <li>\n                            <div class=\"checkbox\">\n                                <label>\n                                  <input type=\"checkbox\" value=\"\">\n                                  <div class=\"chk_check\"></div>\n                                  <span>Marryland</span>\n                                </label>\n                            </div>\n                          </li>\n                          <li>\n                            <div class=\"checkbox\">\n                                <label>\n                                  <input type=\"checkbox\" value=\"\">\n                                  <div class=\"chk_check\"></div>\n                                  <span>New Jersey</span>\n                                </label>\n                            </div>\n                          </li>\n                          <li>\n                            <div class=\"checkbox\">\n                                <label>\n                                  <input type=\"checkbox\" value=\"\">\n                                  <div class=\"chk_check\"></div>\n                                  <span>Pennsylvania</span>\n                                </label>\n                            </div>\n                          </li>\n                          <li>\n                            <div class=\"checkbox\">\n                                <label>\n                                  <input type=\"checkbox\" value=\"\" checked>\t\n                                  <div class=\"chk_check\"></div>\n                                  <span>New York</span>\n                                </label>\n                            </div>\n                          </li>\n                          <li>\n                            <div class=\"checkbox\">\n                                <label>\n                                  <input type=\"checkbox\" value=\"\">\t\n                                  <div class=\"chk_check\"></div>\n                                  <span>Delaware</span>\n                                </label>\n                            </div>\n                          </li>\n                        </ul>\n                      </div>\n                      <div class=\"col-md-2 col-sm-4 col-xs-4\">\n                        <div class=\"filter-subhead\">Southwest</div>\n                        <ul>\n                          <li>\n                            <div class=\"checkbox\">\n                                <label>\n                                  <input type=\"checkbox\" value=\"\">\n                                  <div class=\"chk_check\"></div>\n                                  <span>Marryland</span>\n                                </label>\n                            </div>\n                          </li>\n                          <li>\n                            <div class=\"checkbox\">\n                                <label>\n                                  <input type=\"checkbox\" value=\"\">\n                                  <div class=\"chk_check\"></div>\n                                  <span>New Jersey</span>\n                                </label>\n                            </div>\n                          </li>\n                          <li>\n                            <div class=\"checkbox\">\n                                <label>\n                                  <input type=\"checkbox\" value=\"\">\n                                  <div class=\"chk_check\"></div>\n                                  <span>Pennsylvania</span>\n                                </label>\n                            </div>\n                          </li>\n                          <li>\n                            <div class=\"checkbox\">\n                                <label>\n                                  <input type=\"checkbox\" value=\"\" checked>\t\n                                  <div class=\"chk_check\"></div>\n                                  <span>New York</span>\n                                </label>\n                            </div>\n                          </li>\n                          <li>\n                            <div class=\"checkbox\">\n                                <label>\n                                  <input type=\"checkbox\" value=\"\">\t\n                                  <div class=\"chk_check\"></div>\n                                  <span>Delaware</span>\n                                </label>\n                            </div>\n                          </li>\n                        </ul>\n                      </div>\n                      <div class=\"col-md-2 col-sm-4 col-xs-4\">\n                        <div class=\"filter-subhead\">West</div>\n                        <ul>\n                          <li>\n                            <div class=\"checkbox\">\n                                <label>\n                                  <input type=\"checkbox\" value=\"\">\n                                  <div class=\"chk_check\"></div>\n                                  <span>Marryland</span>\n                                </label>\n                            </div>\n                          </li>\n                          <li>\n                            <div class=\"checkbox\">\n                                <label>\n                                  <input type=\"checkbox\" value=\"\">\n                                  <div class=\"chk_check\"></div>\n                                  <span>New Jersey</span>\n                                </label>\n                            </div>\n                          </li>\n                          <li>\n                            <div class=\"checkbox\">\n                                <label>\n                                  <input type=\"checkbox\" value=\"\">\n                                  <div class=\"chk_check\"></div>\n                                  <span>Pennsylvania</span>\n                                </label>\n                            </div>\n                          </li>\n                          <li>\n                            <div class=\"checkbox\">\n                                <label>\n                                  <input type=\"checkbox\" value=\"\" checked>\t\n                                  <div class=\"chk_check\"></div>\n                                  <span>New York</span>\n                                </label>\n                            </div>\n                          </li>\n                          <li>\n                            <div class=\"checkbox\">\n                                <label>\n                                  <input type=\"checkbox\" value=\"\">\t\n                                  <div class=\"chk_check\"></div>\n                                  <span>Delaware</span>\n                                </label>\n                            </div>\n                          </li>\n                        </ul>\n                      </div>\n                      <div class=\"col-md-2 col-sm-4 col-xs-4\">\n                        <div class=\"filter-subhead\">other</div>\n                        <ul>\n                          <li>\n                            <div class=\"checkbox\">\n                                <label>\n                                  <input type=\"checkbox\" value=\"\">\n                                  <div class=\"chk_check\"></div>\n                                  <span>Puerto Rico</span>\n                                </label>\n                            </div>\n                          </li>\n                        </ul>\n                      </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                    <div class=\"button_group\">\n                      <a href=\"javascript:;\" class=\"cancel-btn\" (click)=\"toggleFilter()\">Cancel</a>\n                      <a href=\"javascript:;\" class=\"apply-btn\" (click)=\"advanceFilter()\">Apply</a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-12 col-sm-12  col-xs-12\">\n        <div class=\"whatsnew-banner\">\n            <app-carousel-scroll [images]=\"images\" [showFavourit]='true' [carouselType]='\"banner\"'></app-carousel-scroll>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section class=\"artist-highlight\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"head-global\">\n          <h2>Artist Highlights</h2>\n        </div>\n      </div>\n      <div class=\"highlights-wrap mCustomScrollbar \"  data-mcs-theme=\"dark-3\" >\n        <div class=\"row\">\n          <div class=\"alert alert-info col-sm-12\" *ngIf=\"whatsnewdata['artist'].length == 0\">\n            No data available.\n          </div>\n          <div class=\"col-md-3 col-sm-4 col-xs-6 \" *ngFor=\"let artist of whatsnewdata['artist']; let i = index;\">\n            <div class=\"final-wrap \">\n              <div class=\"img-wrap \">\n                <a href=\"javascript:;\" routerLink=\"/artist_profile/{{artist._id}}\">\n                  <img src=\"{{artist.image ? artist_img_url+artist.image : 'img/highlight-player.png'}} \" alt=\"Finalists \">\n                </a>\n                <a href=\"javascript:void(0) \" class=\"fan \" (click)=\"followArtist(artist._id, i)\"><i class=\"fa {{artist.is_followed ? 'fa-heart' : 'fa-heart-o'}}\" aria-hidden=\"true \"></i></a>\n              </div>\n              <div class=\"content-wrap \">\n                <div class=\"player \">\n                  <div class=\"title \"><a href=\"javascript:;\">{{artist.first_name +' '+artist.last_name}}</a></div>\n                  <div class=\"cat {{artist.music_type.alias}}\">{{artist.music_type.name}}</div>\n                </div>\n                <div class=\"location \">\n                  <p><i class=\"fa fa-map-marker \" aria-hidden=\"true \"></i><span>Brooklyn, New York</span></p>\n                  \n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"newuploads-wrap\">\n  <div class=\"container \">\n    <div class=\"row \">\n      <div class=\"col-md-12 \">\n        <div class=\"head-global \"><h2>Popular Tracks</h2></div>\n      </div>\n      <div class=\"uploads-container \">\n        <div class=\"row\">\n            <div class=\"alert alert-info col-sm-12\" *ngIf=\"whatsnewdata['track'].length == 0\">\n                No data available.\n            </div>\n          <div class=\"col-md-4 col-sm-4 col-xs-12 \" *ngFor=\"let track of whatsnewdata['track']; let i = index\">\n            <div class=\"upload \">\n              <div class=\"img-wrap \">\n                <img src=\"{{track.image ? track_url+track.image : 'img/upload1.png'}}\" alt=\"New Uploads \">\n              </div>\n              <div class=\"content-wrap \">\n                <div class=\"player \">\n                  <div class=\"title \"><a href=\"javascript:; \">{{track.name}}</a></div>\n                  <div class=\"finalist-name \">{{track.artist_id['first_name']+' '+track.artist_id['last_name']}}</div>\n                  <div class=\"action-btn \"><a href=\"javascript:; \">\n                    <img src=\"img/play.png \" alt=\"Pause \"  [style.display]=\"!audio_ins[i] ? 'block' : 'none'\" (click)=\"playAudio(track.audio, i)\">\n                    <img src=\"img/pause.png \" alt=\"Pause \"  [style.display]=\"audio_ins[i] ? 'block' : 'none'\" (click)=\"stopAudio(i)\">\n                  </a></div>\n                </div>\n                <div class=\"location \">\n                  <p><i class=\"fa fa-map-marker \" aria-hidden=\"true \"></i><span>New York</span></p>\n                  <div class=\"cat {{track.artist_id.music_type['alias']}}\">{{track.artist_id.music_type['name']}}</div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/dashboard-layout/whatsnew/whatsnew.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WhatsNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__whatsnew_service__ = __webpack_require__("../../../../../src/app/dashboard-layout/whatsnew/whatsnew.service.ts");
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




var WhatsNewComponent = /** @class */ (function () {
    function WhatsNewComponent(WhatsNewService, toastr) {
        this.WhatsNewService = WhatsNewService;
        this.toastr = toastr;
        this.images = [];
        this.show_filter = false;
        this.whatsnewdata = {
            artist: [],
            track: []
        };
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
    }
    WhatsNewComponent.prototype.ngOnInit = function () {
        this.getAllData();
        this.getAllMusicType();
    };
    WhatsNewComponent.prototype.toggleFilter = function () {
        this.show_filter = !this.show_filter;
    };
    // Get all whatsnew data
    WhatsNewComponent.prototype.getAllData = function () {
        var _this = this;
        var data = {};
        this.WhatsNewService.getWhatsnewData(data).subscribe(function (response) {
            _this.whatsnewdata = response;
            _this.getAllFollower();
        });
    };
    // Play audio
    WhatsNewComponent.prototype.playAudio = function (name, index) {
        var audio = new Audio();
        audio.src = this.track_url + name;
        audio.load();
        audio.play();
        if (!this.audio_ins.hasOwnProperty(index)) {
            this.audio_ins[index] = audio;
        }
    };
    // Stop audio
    WhatsNewComponent.prototype.stopAudio = function (index) {
        console.log(this.audio_ins[index]);
        this.audio_ins[index].pause();
        this.audio_ins[index].currentTime = 0;
        // this.audio_ins[index].stop();
        delete this.audio_ins[index];
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
    // Advance filter
    WhatsNewComponent.prototype.advanceFilter = function () {
        var _this = this;
        this.WhatsNewService.getWhatsnewData(this.advance_filter).subscribe(function (response) {
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
    WhatsNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-whatsnew',
            template: __webpack_require__("../../../../../src/app/dashboard-layout/whatsnew/whatsnew.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__whatsnew_service__["a" /* WhatsNewService */], __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]])
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
                    _this.router.navigate(['']);
                }, function (error) {
                    toastr.error(error['error'].message, 'Error!');
                    console.log('artist error', error.error);
                });
            }
            else {
                _this.EamilVarificationService.userEmailVarification(res.id).subscribe(function (response) {
                    console.log('varification done user', response);
                    _this.router.navigate(['']);
                }, function (error) {
                    toastr.error(error['error'].message, 'Error!');
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
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
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
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_image_cropper__["a" /* ImageCropperModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_9_ngx_toastr__["a" /* ToastrModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild([
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

module.exports = "<section class=\"register-wrap\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12 col-sm-12 col-xs-12\">\n          <div class=\"register-container\">\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\">\n                  <h4>Reset Password</h4>\n              </div>\n              <div class=\"panel-body\">\n                  <form [formGroup]=\"passwordFormGroup\">\n                      <div class=\"form-group\">\n                        <label class=\"control-label\">New Password</label>\n                        <input type=\"password\"  name=\"new_pwd\" formControlName=\"password\" [(ngModel)]=\"forget_password\" class=\"form-control\" />\n                        <div *ngIf=\"!passwordFormGroup.controls['password'].valid && passwordFormGroup.controls['password'].dirty\">\n                            <span *ngIf=\"passwordFormGroup.controls['password'].errors['required']\" class=\"text-danger\">Password is required.</span>\n                            <span *ngIf=\"passwordFormGroup.controls['password'].errors['minlength']\" class=\"text-danger\">Must be longer than 6 characters.</span>\n                        </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <label class=\"control-label\">Confirm Password</label>\n                        <input type=\"password\" name=\"conf_pwd\" formControlName=\"conf\" [(ngModel)]=\"conf\" class=\"form-control\" />\n                        <div *ngIf=\"!passwordFormGroup.controls['conf'].valid && passwordFormGroup.controls['conf'].dirty\">\n                            <span *ngIf=\"passwordFormGroup.controls['conf'].errors['required']\" class=\"text-danger\">Confirm password is required.</span>\n                            <span *ngIf=\"passwordFormGroup.controls['conf'].errors['minlength']\" class=\"text-danger\">Must be longer than 6 characters.</span>\n                            <span *ngIf=\"passwordFormGroup.controls['conf'].errors['mismatch']\" class=\"text-danger\">Please add valid confirm password.</span>\n                        </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <button class=\"btn btn-success\" (click)=\"resetPassword()\" [disabled]=\"!passwordFormGroup.valid || show_spinner\">Submit <i *ngIf=\"show_spinner\" class=\"fa fa-spinner fa-spin\"></i></button>\n                        <button class=\"btn btn-danger\" routerLink=\"\">Cancel</button>\n                      </div>\n                    </form>\n              </div>\n            </div>\n          </div>\n      </div>\n    </div>\n  </div>\n</section>"

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
            password: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(6)]],
            conf: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(6)]]
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
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
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
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_image_cropper__["a" /* ImageCropperModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_9_ngx_toastr__["a" /* ToastrModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild([
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
    ForgetPasswordService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ForgetPasswordService);
    return ForgetPasswordService;
}());



/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"register-wrap\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12 col-sm-12 col-xs-12\">\n        <div class=\"register-container\">\n          <div class=\"fle-row\">\n            <div class=\"main-step {{step_flag ? 'next_form' : 'previous_form'}}\">\n              <div class=\"heading\"><h3>Who are you?</h3></div>\n              <div class=\"select-who\">\n                <div class=\"artist\"><a href=\"javascript:;\"><img src=\"img/artist.png\" alt=\"Artist\" (click)=\"nxt_btn('artist')\"><h3>Artist</h3></a></div>\n                <div class=\"listner\"><a  href=\"javascript:;\"><img src=\"img/listiner.png\" alt=\"listner\" (click)=\"nxt_btn('listener')\"><h3>Listener</h3></a></div>\n              </div>\n            </div>\n            <div class=\"for-artist\">\n              <div class=\"steps step1 {{artist_cnt == 1 ? 'next_form' : ''}}\" id=\"artist-step1\" >\n                <form [formGroup]=\"artist_step1\">\n                  <div class=\"heading\"><h3>Terms of Conditions </h3></div>\n                  <div class=\"progress_bar fill14\"></div>\n                  <div class=\"terms_condition_block mCustomScrollbar \" data-mcs-theme=\"dark-3\">\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quisquam, tempora adipisci debitis voluptates. Labore tenetur ipsa itaque ea vero repellat fuga doloribus non facere animi molestiae dolorem provident quasi veniam accusamus, ipsum minima ipsam architecto. Possimus officiis facilis iusto quod modi atque dolorum veniam reiciendis? Voluptate porro tempora quam?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quisquam, tempora adipisci debitis voluptates. Labore tenetur ipsa itaque ea vero repellat fuga doloribus non facere animi molestiae dolorem provident quasi veniam accusamus, ipsum minima ipsam architecto. Possimus officiis facilis iusto quod modi atque dolorum veniam reiciendis? Voluptate porro tempora quam?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quisquam, tempora adipisci debitis voluptates. Labore tenetur ipsa itaque ea vero repellat fuga doloribus non facere animi molestiae dolorem provident quasi veniam accusamus, ipsum minima ipsam architecto. Possimus officiis facilis iusto quod modi atque dolorum veniam reiciendis? Voluptate porro tempora quam?</p>\n                  </div>\n                  <div class=\"agree\">\n                    <div class=\"checkbox\">\n                        <label>\n                          <input type=\"checkbox\" value=\"\" formControlName=\"terms_condtion\"  name=\"artist_terms_condition\" required [(ngModel)]=\"artist_data.terms_condition\">I agree to the <a href=\"javascript:;\">Terms of Conditions</a>\n                          <div class=\"chk_check\"></div>\n                        </label>\n                    </div>\n                  </div>\n                  <div class=\"button_group\">\n                    <a href=\"javascript:;\" class=\"back-btn\" (click)=\"back_btn('artist')\"><img src=\"img/prev-arrow.png\" alt=\"Previou Arrow\"> Back</a>\n                    <button type=\"submit\" (click)=\"nxt_btn('artist')\" class=\"next-btn\" [disabled]=\"!artist_step1.valid\">Next</button>\n                  </div>\n                </form>\n              </div>\n\n              <div class=\"steps step2 {{artist_cnt == 2 ? 'next_form' : ''}}\" id=\"profile-step2\">\n                  <form [formGroup]=\"artist_step2\">\n                    <div class=\"heading\"><h3>Create An Artist Pro</h3></div>\n                    <div class=\"progress_bar fill14\"></div>\n                    <div class=\"email-form\">\n                      \n                        <div class=\"form-group\">\n                            <label for=\"email\">Email</label>\n                            <input type=\"email\" class=\"form-control\" formControlName=\"email\"  [(ngModel)]=\"artist_data.email\" name=\"artist_email\" id=\"email\" placeholder=\"Email\">\n                            <div *ngIf=\"!artist_step2.controls['email'].valid && artist_step2.controls['email'].dirty\">\n                              <span *ngIf=\"artist_step2.controls['email'].errors['required']\" class=\"text-danger\">Email is required.</span>\n                              <span *ngIf=\"artist_step2.controls['email'].errors['email']\" class=\"text-danger\">Email Mismatched.</span>\n                            </div>\n                          </div>\n                          <div [formGroup]=\"passwordFormGroup1\">\n                            <div class=\"form-group pwd-grp\">\n                              <label for=\"pwd\">Password</label>\n                              <input type=\"password\" class=\"form-control\" formControlName=\"artist_password\" placeholder=\"Password\"  required [(ngModel)]=\"artist_data.password\" name=\"password\">\n                              <div class=\"pwd-icon\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i></div>\n                              <div *ngIf=\"!passwordFormGroup1.controls['artist_password'].valid && passwordFormGroup1.controls['artist_password'].dirty\">\n                                <span *ngIf=\"passwordFormGroup1.controls['artist_password'].errors['required']\" class=\"text-danger\">Password is required.</span>\n                                <span *ngIf=\"passwordFormGroup1.controls['artist_password'].errors['minlength']\" class=\"text-danger\">Must be longer than 6 characters.</span>\n                              </div>\n                            </div>\n                            <div class=\"form-group pwd-grp\">\n                              <label for=\"pwd\">Confirm Password</label>\n                              <input type=\"password\" class=\"form-control\" formControlName=\"artist_conf\"  name=\"confirm\" [(ngModel)]=\"artist_data.confirm_password\" placeholder=\"Password\" required >\n                              <div class=\"pwd-icon\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i></div>\n                              <div *ngIf=\"!passwordFormGroup1.controls['artist_conf'].valid && passwordFormGroup1.controls['artist_conf'].dirty\">\n                                <!-- <span *ngIf=\"passwordFormGroup.controls['conf'].errors['required']\" class=\"text-danger\">Confirm Password is required.</span> -->\n                                <span *ngIf=\"passwordFormGroup1.controls['artist_conf'].errors['minlength']\" class=\"text-danger\">Must be longer than 6 characters.</span>\n                                <span *ngIf=\"passwordFormGroup1.controls['artist_conf'].errors['mismatch']\" class=\"text-danger\">Please enter correct confirm password.</span>\n                              </div>\n                            </div>\n                          </div>\n                    </div>\n                    <div class=\"button_group\">\n                      <a href=\"javascript:;\" class=\"back-btn\" (click)=\"back_btn('artist')\"><img src=\"img/prev-arrow.png\" alt=\"Previou Arrow\"> Back</a>\n                      <button type=\"submit\" (click)=\"nxt_btn('artist')\" class=\"next-btn\"  [disabled]=\"!artist_step2.valid\">Next</button>\n                    </div>\n                </form>\n              </div>\n\n              <div class=\"steps step3 {{artist_cnt == 3 ? 'next_form' : ''}}\" id=\"about-step3\">\n                <div class=\"heading\"><h3>Tell Us About Yourself</h3></div>\n                <div class=\"progress_bar fill14\"></div>\n                <form [formGroup]=\"artist_step3\">\n                  <div class=\"email-form\">\n                      <div class=\"form-group\">\n                          <label for=\"fname\">First Name</label>\n                          <input type=\"text\" class=\"form-control\" formControlName=\"fname\"  name=\"artist_fname\" [(ngModel)]=\"artist_data.fname\"  placeholder=\"First Name\">\n                          <div *ngIf=\"!artist_step3.controls['fname'].valid && artist_step3.controls['fname'].dirty\">\n                            <span *ngIf=\"artist_step3.controls['fname'].errors['required']\" class=\"text-danger\">First name is required.</span>\n                          </div>\n                        </div>\n                        <div class=\"form-group pwd-grp\">\n                          <label for=\"lanem\">Last Name</label>\n                          <input type=\"text\" class=\"form-control\"  formControlName=\"lname\" [(ngModel)]=\"artist_data.lname\"  name=\"artist_lname\" placeholder=\"Last Name\">\n                          <div *ngIf=\"!artist_step3.controls['lname'].valid && artist_step3.controls['lname'].dirty\">\n                            <span *ngIf=\"artist_step3.controls['lname'].errors['required']\" class=\"text-danger\">First name is required.</span>\n                          </div>\n                        </div>\n                        <div class=\"form-group gender-grp\">\n                          <label for=\"geder\">Gender</label>\n                          <select class=\"form-control\" id=\"gender\" formControlName=\"gender\" name=\"artist_gender\" [(ngModel)]=\"artist_data.gender\">\n                              <option value=\"male\">Male</option>\n                              <option value=\"female\">Female</option>\n                          </select>\n                        </div>\n                  </div>\n                  <div class=\"button_group\">\n                    <a href=\"javascript:;\" class=\"back-btn\" (click)=\"back_btn('artist')\"><img src=\"img/prev-arrow.png\" alt=\"Previou Arrow\"> Back</a>\n                    <button type=\"submit\" (click)=\"nxt_btn('artist')\"  class=\"next-btn\">Next</button>\n                  </div>\n                </form>\n              </div>\n\n              <div class=\"steps step4 {{artist_cnt == 4 ? 'next_form' : ''}}\" id=\"location-step4\">\n                <div class=\"heading\"><h3>Where Are You From?</h3></div>\n                <div class=\"progress_bar fill14\"></div>\n                <form [formGroup]=\"artist_step4\">\n                  <div class=\"email-form\">\n                      <div class=\"form-img-wrap\">\n                        <img src=\"img/location-icon.png\" alt=\"Location Icon\">\n                        <p *ngIf=\"location == ''\">Please, Enter zip code below</p>\n                        <p *ngIf=\"location != ''\">{{location}}</p>\n                      </div>\n                      <div class=\"form-group\">\n                          <label for=\"zipcode\">Zip code</label>\n                          <input type=\"text\" class=\"form-control\" formControlName=\"zipcode\" (keyup)=\"getLocation()\"  [(ngModel)]=\"artist_data.zipcode\" name=\"artist_zipcode\" placeholder=\"Zip Code\">\n                          <div *ngIf=\"!artist_step4.controls['zipcode'].valid && artist_step4.controls['zipcode'].dirty\">\n                            <span *ngIf=\"artist_step4.controls['zipcode'].errors['required']\" class=\"text-danger\">Zipcode is required.</span>\n                            <span *ngIf=\"artist_step4.controls['zipcode'].errors['pattern']\" class=\"text-danger\">please enter valid zipcode.</span>\n                          </div>\n                        </div>\n                  </div>\n                  <div class=\"button_group\">\n                    <a href=\"javascript:;\" class=\"back-btn\" (click)=\"back_btn('artist')\"><img src=\"img/prev-arrow.png\" alt=\"Previou Arrow\"> Back</a>\n                    <button type=\"submit\" (click)=\"nxt_btn('artist')\" [disabled]=\"!artist_step4.valid\" class=\"next-btn\" >Next</button>\n                  </div>\n                </form>\n              </div>\n\n              <div class=\"steps step5 {{artist_cnt == 5 ? 'next_form' : ''}}\" id=\"music-type-step5\">\n                <div class=\"heading\"><h3>What Type of Music?</h3></div>\n                <div class=\"progress_bar fill14\"></div>\n                <form>\n                  <div class=\"type-music\">\n                   \n                    <ul>                                   \n                      <li *ngFor=\"let x of music_types; let i=index;\" >\n                          <input type=\"radio\" id=\"{{i}}\" name=\"radio-group\" (click)=\"selectMusciGenre(x._id)\">\n                          <label for=\"{{i}}\">{{x.name}}</label>\n                      </li>\n                    </ul>\n                  </div>\n                  <div class=\"button_group\">\n                    <a href=\"javascript:;\" class=\"back-btn\" (click)=\"back_btn('artist')\"><img src=\"img/prev-arrow.png\" alt=\"Previou Arrow\"> Back</a>\n                    <button type=\"submit\" (click)=\"nxt_btn('artist')\" [disabled]=\"!artist_data.music_type ? true : false\" class=\"next-btn\">Next</button>\n                  </div>\n                </form>\n              </div>\n\n\n              <div class=\"steps step6 {{artist_cnt == 6 ? 'next_form' : ''}}\" id=\"upload-step6\">\n                <div class=\"heading\"><h3>Upload Profile Photo</h3></div>\n                <div class=\"progress_bar fill14\"></div>\n                <div class=\"upload-block\">\n                  <div class=\"upl-div\" >\n                    <div class=\"upload-btn\" *ngIf=\"!cropperReady\"> \n                      <span class=\"upl-img\" ><i class=\"fa fa-cloud-upload\" aria-hidden=\"true\"></i></span> \n                      <span class=\"up_text\" >Upload Photo</span> \n                      <input type=\"file\" name=\"my_doc_upload\" (change)=\"fileChangeEvent($event)\" id=\"my_doc_upload\" multiple=\"false\"> \n                      <p class=\"instrution\" >320x320px .png, .jpg 5MB or less</p>\n                    </div>\n                    <div [style.display]=\"cropperReady ? null : 'none'\">\n                      <image-cropper\n                          [imageChangedEvent]=\"imageChangedEvent\"\n                          [maintainAspectRatio]=\"true\"\n                          [aspectRatio]=\"1 / 1\"\n                          [resizeToWidth]=\"128\"\n                          format=\"jpeg\"\n                          (imageCropped)=\"imageCropped($event)\"\n                          (imageLoaded)=\"imageLoaded()\"\n                          (loadImageFailed)=\"loadImageFailed()\"\n                          [style.display]=\"cropperReady ? null : 'none'\"\n                      ></image-cropper>\n                      <div class=\"upload-btn-div\">\n                        <label for=\"fileUpload\">Upload a Different Photo</label>\n                        <input type=\"file\" name=\"my_doc_upload\" (change)=\"fileChangeEvent($event)\" id=\"my_doc_upload\" multiple=\"false\"> \n                      </div>  \n                    </div>\n                  </div>\n                  <div class=\"upl-div\">\n                    <div class=\"upload-btn-cstm_p\" *ngIf=\"!cropperReady\"> \n                      <span class=\"upl-img\"><img src=\"img/icons8-microphone2Normal.png\" alt=\"\"></span> \n                      <!-- <input type=\"file\" name=\"my_doc_upload\" id=\"my_doc_upload\" multiple=\"false\">  -->\n                    </div>\n                    <div [style.display]=\"cropperReady ? null : 'none'\">\n                      <img [src]=\"croppedImage\" style=\"height: 167px;width: 155px;\"/>\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"heading\">\n                  <h3>Add Your Social Media</h3>\n                  <div class=\"error\">\n                    <div class=\"error-message\"><p>Please add at least one account  </p><i class=\"fa fa-exclamation-triangle\"></i></div>\n                  </div>\n                </div>\n                <div class=\"button_group\">\n                  <a href=\"javascript:;\" class=\"back-btn\" (click)=\"back_btn('artist')\"><img src=\"img/prev-arrow.png\" alt=\"Previou Arrow\"> Back</a>\n                  <button  (click)=\"nxt_btn('artist')\" [disabled]=\"!cropperReady\" class=\"next-btn\">Next</button>\n                </div>\n              </div>\n\n\n              <div class=\"steps step7 {{artist_cnt == 7 ? 'next_form' : ''}}\" id=\"social-acc-step7\">\n                <div class=\"progress_bar fill14\"></div>\n                <div class=\"social-acc\">\n                  <div class=\"social-block\">\n                    <div class=\"form-group\">\n                        <label for=\"facebook\">Facebook</label>\n                        <input type=\"text\" class=\"form-control\" id=\"fb\" name=\"artist_fb\" [(ngModel)]=\"artist_data.share_url['facebook']\" placeholder=\"Add Account\" >\n                        <img src=\"img/fb.png\" alt=\"Facebook\">\n                      </div>\n                  </div>\n                  <div class=\"social-block\">\n                    <div class=\"form-group\">\n                        <label for=\"inst\">Instagram</label>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Add Account\" name=\"artist_insta\" [(ngModel)]=\"artist_data.share_url['instagram']\">\n                        <img src=\"img/inst.png\" alt=\"Facebook\">\n                      </div>\n                  </div>\n                  <div class=\"social-block\">\n                    <div class=\"form-group\">\n                        <label for=\"facebook\">Twitter</label>\n                        <input type=\"text\" class=\"form-control\" id=\"fb1\" placeholder=\"Add Account\" name=\"artist_tweet\" [(ngModel)]=\"artist_data.share_url['twitter']\">\n                        <img src=\"img/twitter.png\" alt=\"Facebook\">\n                      </div>\n                  </div>\n                  <div class=\"social-block\">\n                    <div class=\"form-group\">\n                        <label for=\"inst\">Youtube</label>\n                        <input type=\"text\" class=\"form-control\"  placeholder=\"Add Account\" name=\"artist_youtube\" [(ngModel)]=\"artist_data.share_url['youtube']\">\n                        <img src=\"img/youtube.png\" alt=\"Facebook\">\n                      </div>\n                  </div>\n                  <div class=\"social-block\">\n                    <div class=\"form-group\">\n                        <label for=\"inst\">Soundcloud</label>\n                        <input type=\"text\" class=\"form-control\"  placeholder=\"Add Account\" name=\"artist_sound\" [(ngModel)]=\"artist_data.share_url['sound_cloud']\">\n                        <img src=\"img/soundcloud.png\" alt=\"Facebook\">\n                      </div>\n                  </div>\n                    \n                </div>\n                <div class=\"button_group\">\n                  <a href=\"javascript:;\" class=\"back-btn\" (click)=\"back_btn('artist')\"><img src=\"img/prev-arrow.png\" alt=\"Previou Arrow\"> Back</a>\n                  <button (click)=\"artist_submit()\" [disabled]=\"show_spinner\" class=\"next-btn\">Finish <i class=\"fa fa-spinner fa-spin\" *ngIf=\"show_spinner\"></i></button>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"for-listner\">\n              <div class=\"steps step1 {{listner_cnt == 1 ? 'next_form' : ''}}\" id=\"listner-register\">\n                <div class=\"social-login\">\n                  <div class=\"google-login\">\n                    <a href=\"javascript:;\" id=\"googleBtn\"><i class=\"fa fa-google\"  aria-hidden=\"true\"></i> <span>Login with Google</span></a>\n                  </div>\n                  <div class=\"fb-login\">\n                    <a href=\"javascript:;\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i> <span>Login with Facebook</span></a>\n                  </div>\n                </div>\n                <div class=\"progress_bar fill14\"></div>\n                <div class=\"or\">or with email</div>\n                <form [formGroup]=\"listener_step1\">\n                  <div class=\"email-form\">\n                      <div class=\"form-group\">\n                          <label for=\"email\">Email</label>\n                          <input type=\"email\" formControlName=\"email\" [(ngModel)]=\"listener_data.email\" class=\"form-control\" id=\"email1\" placeholder=\"Email\">\n                          <div *ngIf=\"!listener_step1.controls['email'].valid && listener_step1.controls['email'].dirty\">\n                            <span *ngIf=\"listener_step1.controls['email'].errors['required']\" class=\"text-danger\">Email is required.</span>\n                            <span *ngIf=\"listener_step1.controls['email'].errors['email']\" class=\"text-danger\">Email Mismatched.</span>\n                          </div>\n                      </div>\n                      <div [formGroup]=\"passwordFormGroup\">\n                        <div class=\"form-group pwd-grp\">\n                          <label for=\"pwd\">Password</label>\n                          <input type=\"password\" class=\"form-control\" formControlName=\"password\" [(ngModel)]=\"listener_data.password\" placeholder=\"Password\">\n                          <div class=\"pwd-icon\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i></div>\n                          <div *ngIf=\"!passwordFormGroup.controls['password'].valid && passwordFormGroup.controls['password'].dirty\">\n                            <span *ngIf=\"passwordFormGroup.controls['password'].errors['required']\" class=\"text-danger\">Password is required.</span>\n                            <span *ngIf=\"passwordFormGroup.controls['password'].errors['minlength']\" class=\"text-danger\">Must be longer than 6 characters.</span>\n                          </div>\n                        </div>\n                        <div class=\"form-group pwd-grp\">\n                          <label for=\"pwd\">Confirm Password</label>\n                          <input type=\"password\" class=\"form-control\" formControlName=\"conf\"  placeholder=\"Confirm Password\">\n                          <div class=\"pwd-icon\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i></div>\n                          <div *ngIf=\"!passwordFormGroup.controls['conf'].valid && passwordFormGroup.controls['conf'].dirty\">\n                            <span *ngIf=\"passwordFormGroup.controls['conf'].errors['minlength']\" class=\"text-danger\">Must be longer than 6 characters.</span>\n                            <span *ngIf=\"passwordFormGroup.controls['conf'].errors['mismatch']\" class=\"text-danger\">Please enter correct confirm password.</span>\n                          </div>\n                        </div>\n                      </div>\n                  </div>\n                  <div class=\"button_group\">\n                    <a href=\"javascript:;\" class=\"back-btn\" (click)=\"back_btn('listener')\"><img src=\"img/prev-arrow.png\" alt=\"Previou Arrow\"> Back</a>\n                    <button type=\"submit\" (click)=\"nxt_btn('listener')\" [disabled]=\"!listener_step1.valid\" class=\"next-btn\">Next</button>\n                  </div>\n                </form>\n              </div>\n\n              <div class=\"steps step2 {{listner_cnt == 2 ? 'next_form' : ''}}\" id=\"artist-step1\">\n                <div class=\"heading\"><h3>Terms of Conditions </h3></div>\n                <div class=\"progress_bar fill14\"></div>\n                <form [formGroup]=\"listener_step2\">\n                  <div class=\"terms_condition_block mCustomScrollbar \" data-mcs-theme=\"dark-3\">\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quisquam, tempora adipisci debitis voluptates. Labore tenetur ipsa itaque ea vero repellat fuga doloribus non facere animi molestiae dolorem provident quasi veniam accusamus, ipsum minima ipsam architecto. Possimus officiis facilis iusto quod modi atque dolorum veniam reiciendis? Voluptate porro tempora quam?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quisquam, tempora adipisci debitis voluptates. Labore tenetur ipsa itaque ea vero repellat fuga doloribus non facere animi molestiae dolorem provident quasi veniam accusamus, ipsum minima ipsam architecto. Possimus officiis facilis iusto quod modi atque dolorum veniam reiciendis? Voluptate porro tempora quam?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quisquam, tempora adipisci debitis voluptates. Labore tenetur ipsa itaque ea vero repellat fuga doloribus non facere animi molestiae dolorem provident quasi veniam accusamus, ipsum minima ipsam architecto. Possimus officiis facilis iusto quod modi atque dolorum veniam reiciendis? Voluptate porro tempora quam?</p>\n                  </div>\n                  <div class=\"agree\">\n                    <div class=\"checkbox\">\n                        <label>\n                          <input type=\"checkbox\" formControlName=\"terms_condtion\" [(ngModel)]=\"listener_data.terms_condition\" value=\"\">I agree to the <a href=\"javascript:;\">Terms of Conditions</a>\n                          <div class=\"chk_check\"></div>\n                        </label>\n                    </div>\n                  </div>\n                  <div class=\"button_group\">\n                    <a href=\"javascript:;\" class=\"back-btn\" (click)=\"back_btn('listener')\"><img src=\"img/prev-arrow.png\" alt=\"Previou Arrow\"> Back</a>\n                    <button type=\"submit\" (click)=\"nxt_btn('listener')\" [disabled]=\"!listener_step2.valid\" class=\"next-btn\">Next</button>\n                  </div>\n                </form>\n              </div>\n\n              <div class=\"steps step3 {{listner_cnt == 3 ? 'next_form' : ''}}\" id=\"user-step2\">\n                <div class=\"heading\"><h3>Create User Name</h3></div>\n                <div class=\"progress_bar fill14\"></div>\n                <form [formGroup]=\"listener_step3\">\n                  <div class=\"email-form\">\n                    <div class=\"form-group\">\n                        <label for=\"fname\">First Name</label>\n                        <input type=\"text\" formControlName=\"fname\" name=\"listener_fname\" class=\"form-control\" [(ngModel)]=\"listener_data.fname\" placeholder=\"First Name\">\n                        <div *ngIf=\"!listener_step3.controls['fname'].valid && listener_step3.controls['fname'].dirty\">\n                          <span *ngIf=\"listener_step3.controls['fname'].errors['required']\" class=\"text-danger\">First Name is required.</span>\n                        </div>\n                      </div>\n                      <div class=\"form-group pwd-grp\">\n                        <label for=\"lanem\">Last Name</label>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"lname\" name=\"listener_lname\" [(ngModel)]=\"listener_data.lname\"  placeholder=\"Last Name\">\n                        <div *ngIf=\"!listener_step3.controls['lname'].valid && listener_step3.controls['lname'].dirty\">\n                          <span *ngIf=\"listener_step3.controls['lname'].errors['required']\" class=\"text-danger\">Last Name is required.</span>\n                        </div>\n                      </div>\n                      <div class=\"date-of-birth\">\n                        <label for=\"date\">Birthday</label>\n                        <div class=\"form-group\">\n                        <select class=\"form-control\" id=\"day\" formControlName=\"day\" name=\"listener_day\" [(ngModel)]=\"listener_data.day\">\n                            <option value=\"\">Day</option>\n                            <option *ngFor=\"let d of day\" [value]=\"d\">{{d}}</option>\n                        </select>\n                      </div>\n                      <div class=\"form-group\">\n                        <select class=\"form-control\" id=\"month\" formControlName=\"month\" name=\"listener_month\" [(ngModel)]=\"listener_data.month\">\n                            <option value=\"\">Month</option>\n                            <option *ngFor=\"let m of month\" [value]=\"m\">{{m}}</option>\n                        </select>\n                      </div>\n                      <div class=\"form-group\">\n                        <select class=\"form-control\" id=\"year\" formControlName=\"year\" name=\"listener_year\" [(ngModel)]=\"listener_data.year\">\n                            <option value=\"\">Year</option>\n                            <option *ngFor=\"let y of year\" [value]=\"y\">{{y}}</option>\n                        </select>\n                      </div>\n                      </div>\n                      <div class=\"form-group gender-grp\">\n                        <label for=\"geder\">Gender</label>\n                        <select class=\"form-control\" id=\"listener_gender\" formControlName=\"gender\" name=\"listener_gender\" [(ngModel)]=\"listener_data.gender\">\n                            <option value=\"male\">Male</option>\n                            <option value=\"female\">Female</option>\n                        </select>\n                        <div *ngIf=\"!listener_step3.controls['gender'].valid && listener_step3.controls['gender'].dirty\">\n                          <span *ngIf=\"listener_step3.controls['gender'].errors['required']\" class=\"text-danger\">Gender is required.</span>\n                        </div>\n                      </div>\n                  </div>\n                  <div class=\"button_group\">\n                    <a href=\"javascript:;\" class=\"back-btn\" (click)=\"back_btn('listener')\"><img src=\"img/prev-arrow.png\" alt=\"Previou Arrow\"> Back</a>\n                    <button type=\"submit\" (click)=\"nxt_btn('listener')\" [disabled]=\"!listener_step3.valid\" class=\"next-btn\">Next</button>\n                  </div>\n                </form>\n              </div>\n\n              <div class=\"steps step4 {{listner_cnt == 4 ? 'next_form' : ''}}\" id=\"location-step4\">\n                <div class=\"heading\"><h3>Where Are You From?</h3></div>\n                <div class=\"progress_bar fill14\"></div>\n                <form [formGroup]=\"listener_step4\">\n                  <div class=\"email-form\">\n                      <div class=\"form-img-wrap\">\n                        <img src=\"img/location-icon.png\" alt=\"Location Icon\">\n                        <p *ngIf=\"location == ''\">Please, Enter zip code below</p>\n                        <p *ngIf=\"location != ''\">{{location}}</p>\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"zipcode\">Zip code</label>\n                        <input type=\"text\" class=\"form-control\"  formControlName=\"zipcode\" (keyup)=\"getLocationForListener()\"  [(ngModel)]=\"listener_data.zipcode\" name=\"listener_zipcode\"  placeholder=\"Zip Code\">\n                        <div *ngIf=\"!listener_step4.controls['zipcode'].valid && listener_step4.controls['zipcode'].dirty\">\n                          <span *ngIf=\"listener_step4.controls['zipcode'].errors['required']\" class=\"text-danger\">Zipcode is required.</span>\n                          <span *ngIf=\"listener_step4.controls['zipcode'].errors['pattern']\" class=\"text-danger\">please enter valid zipcode.</span>\n                        </div>\n                      </div>\n                  </div>\n                  <div class=\"button_group\">\n                    <a href=\"javascript:;\" class=\"back-btn\" (click)=\"back_btn('listener')\"><img src=\"img/prev-arrow.png\" alt=\"Previou Arrow\"> Back</a>\n                    <button type=\"submit\" (click)=\"nxt_btn('listener')\" [disabled]=\"!listener_step4.valid\" class=\"next-btn\">Next</button>\n                  </div>\n                </form>\n              </div>\n\n              <div class=\"steps step5 {{listner_cnt == 5 ? 'next_form' : ''}}\" id=\"music-type-step5\">\n                <div class=\"heading\"><h3>What Type of Music?</h3></div>\n                <div class=\"progress_bar fill14\"></div>\n                <div class=\"type-music\">\n                  <ul>\n                    <li *ngFor=\"let x of music_types\">\n                        <input type=\"checkbox\" name=\"music\" (change)=\"onChangeForListener(x['_id'], $event.target.checked)\">\n                        <div class=\"music-checked chk-{{x['alias']}}\"  >{{x.name}}</div>\n                    </li>\n                    <!--li>\n                      <input type=\"checkbox\" value=\"Hip Hop\" (change)=\"onChangeForListener('Hip Hop', $event.target.checked)\">\n                       <div class=\"music-checked\">Hip Hop</div>\n                    </li>\n                    <li>\n                      <input type=\"checkbox\" value=\"Pop\" (change)=\"onChangeForListener('Pop', $event.target.checked)\">\n                      <div class=\"music-checked chk-pop\">Pop</div>\n                    </li>\n                    <li>\n                      <input type=\"checkbox\" value=\"R&B\" (change)=\"onChangeForListener('R&B', $event.target.checked)\">\n                      <div class=\"music-checked chk-rb\">R&B</div>\n                    </li>\n                    <li>\n                      <input type=\"checkbox\" value=\"Electronic\" (change)=\"onChangeForListener('Electronic', $event.target.checked)\">\n                      <div class=\"music-checked chk-ele\">Electronic</div>\n                    </li>\n                    <li>\n                      <input type=\"checkbox\" value=\"Rock\" (change)=\"onChangeForListener('Rock', $event.target.checked)\">\n                      <div class=\"music-checked chk-rock\">Rock</div>\n                    </li>\n                    <li>\n                      <input type=\"checkbox\" value=\"Latin\" (change)=\"onChangeForListener('Latin', $event.target.checked)\">\n                      <div class=\"music-checked chk-latin\">Latin</div>\n                    </li -->\n                  </ul>\n                </div>\n                <div class=\"button_group\">\n                  <a href=\"javascript:;\" class=\"back-btn\" (click)=\"back_btn('listener')\"><img src=\"img/prev-arrow.png\" alt=\"Previou Arrow\"> Back</a>\n                  <button (click)=\"listener_submit()\" [disabled]=\"listener_data.music_type.length <= 0 || show_spinner\" class=\"next-btn\">Finish <i *ngIf=\"show_spinner\" class=\"fa fa-spinner fa-spin\"></i></button>\n                </div>\n              </div>\n            </div>\n          </div>\n          \n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

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
    function RegisterComponent(fb, RegisterService, toastr) {
        var _this = this;
        this.fb = fb;
        this.RegisterService = RegisterService;
        this.toastr = toastr;
        this.artist_cnt = 0;
        this.listner_cnt = 0;
        this.step_flag = true;
        this.show_spinner = false;
        this.music_types = [];
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
            terms_condtion: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]
        });
        this.passwordFormGroup1 = this.fb.group({
            artist_password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(6)],
            artist_conf: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(6)]
        }, {
            validator: this.passwordMatchValidator
        });
        this.passwordFormGroup = this.fb.group({
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(6)],
            conf: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(6)]
        }, {
            validator: this.passwordMatchValidatorListener
        });
        this.artist_step2 = this.fb.group({
            'email': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].email]],
            passwordFormGroup1: this.passwordFormGroup1
        });
        this.artist_step3 = this.fb.group({
            fname: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            lname: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            gender: []
        });
        this.artist_step4 = this.fb.group({
            zipcode: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('^[A-Za-z0-9]+$')]]
        });
        this.listener_step1 = this.fb.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].email]],
            passwordFormGroup: this.passwordFormGroup
        });
        this.listener_step2 = this.fb.group({
            terms_condtion: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]
        });
        this.listener_step3 = this.fb.group({
            fname: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            lname: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            day: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            month: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            year: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            gender: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]]
        });
        this.listener_step4 = this.fb.group({
            zipcode: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('^[0-9]+$')]]
        });
        this.RegisterService.getAllMusicType().subscribe(function (response) {
            _this.music_types = response['music'];
        });
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
        this.imageChangedEvent = event;
        console.log('object', event.target.files);
        if (event.target.files.length <= 0) {
            this.cropperReady = false;
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
        var data = {
            email: this.listener_data['email'],
            password: this.listener_data['password'],
            first_name: this.listener_data['fname'],
            last_name: this.listener_data['lname'],
            zipcode: this.listener_data['zipcode'],
            music_type: this.listener_data['music_type'],
            gender: this.listener_data['gender'],
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
        }, function (error) {
            _this.toastr.error(error['error'].message, 'Error!');
            _this.show_spinner = false;
        }, function () {
            _this.show_spinner = false;
        });
    };
    RegisterComponent.prototype.nxt_btn = function (step_lbl) {
        console.log(this.artist_step1);
        this.step_flag = false;
        console.log(step_lbl, this.artist_cnt);
        if (step_lbl == 'artist') {
            this.artist_cnt++;
        }
        else {
            this.listner_cnt++;
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
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__register_service__["a" /* RegisterService */], __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]])
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
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_image_cropper__["a" /* ImageCropperModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_9_ngx_toastr__["a" /* ToastrModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild([
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
        this.router.navigate(['']);
        return false;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/carousel/carousel.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-carousel [inputs]=\"carouselOne\" *ngIf=\"carouselType == 'normal'\">\r\n  <ngx-tile NgxCarouselItem *ngFor=\"let image of images; let i = index\">\r\n    \r\n      <div class=\"final-wrap\">\r\n        <div class=\"img-wrap\">\r\n          <img src=\"{{image.source}}\" alt=\"Finalists\">\r\n          <a href=\"javascript:void(0)\" class=\"fan\">\r\n            <i class=\"fa fa-heart-o\" aria-hidden=\"true\"></i>\r\n          </a>\r\n        </div>\r\n        <div class=\"content-wrap\">\r\n          <div class=\"player\">\r\n            <div class=\"title\">\r\n              <a href=\"#\">{{ image.title }}</a>\r\n            </div>\r\n            <div class=\"finalist-name\">{{image.name}}</div>\r\n            <div class=\"action-btn custom-action-btn\">\r\n                <a [style.display]=\"!audio_ins[i] ? 'block' : 'none'\" (click)=\"playAudio(image.audio, i)\" class=\"play_img\" ><img src=\"img/play_icon.png\"/></a>\r\n                <a [style.display]=\"audio_ins[i] ? 'block' : 'none'\" (click)=\"stopAudio(i)\" class=\"pause_img\"><img src=\"img/pause_icon.png\"/></a>\r\n            </div>\r\n          </div>\r\n          <div class=\"location\">\r\n            <p>\r\n              <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\r\n              <span>{{image.location}}</span>\r\n            </p>\r\n            <div class=\"cat {{image.alias}}\">{{image.type}}</div>\r\n          </div>\r\n        </div>\r\n    </div>\r\n  </ngx-tile>\r\n  <i class=\"material-icons leftRs\" NgxCarouselPrev></i>\r\n  <i class=\"material-icons rightRs\" NgxCarouselNext></i>\r\n</ngx-carousel>\r\n<ngx-carousel [inputs]=\"carouselOne\" *ngIf=\"carouselType == 'banner'\">\r\n  <ngx-tile NgxCarouselItem *ngFor=\"let image of images; let i = index\">\r\n      <div class=\"newslider slider1\">\r\n          <div class=\"banner-img\">\r\n            <img src=\"{{image.source}}\" alt=\"Banner image\">\r\n          </div>\r\n          <div class=\"content-block\">\r\n            <div class=\"what-bg-content\">\r\n              <h3>{{ image.title }}</h3>\r\n              <p>{{image.description}} </p>\r\n              <div class=\"vote-btn\"><a href=\"javascript:;\">Vote Now</a></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n  </ngx-tile>\r\n  <i class=\"material-icons leftRs\" NgxCarouselPrev></i>\r\n  <i class=\"material-icons rightRs\" NgxCarouselNext></i>\r\n</ngx-carousel>"

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
    function CarouselComponent() {
        this.track_url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].API_URL + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].ARTIST_TRACK;
        this.audio_ins = [];
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
    };
    // Play audio
    CarouselComponent.prototype.playAudio = function (name, index) {
        var audio = new Audio();
        audio.src = this.track_url + name;
        audio.load();
        audio.play();
        if (!this.audio_ins.hasOwnProperty(index)) {
            this.audio_ins[index] = audio;
        }
    };
    // Stop audio
    CarouselComponent.prototype.stopAudio = function (index) {
        console.log(this.audio_ins[index]);
        this.audio_ins[index].pause();
        this.audio_ins[index].currentTime = 0;
        // this.audio_ins[index].stop();
        delete this.audio_ins[index];
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
        __metadata("design:paramtypes", [])
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