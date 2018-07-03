(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main-nav>\n<router-outlet></router-outlet>\n</main-nav>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/signin/signin.component */ "./src/app/components/signin/signin.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _services_gaurd_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/gaurd.service */ "./src/app/services/gaurd.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _components_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/main-nav/main-nav.component */ "./src/app/components/main-nav/main-nav.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _components_events_events_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/events/events.component */ "./src/app/components/events/events.component.ts");
/* harmony import */ var _components_events_single_event_single_event_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/events/single-event/single-event.component */ "./src/app/components/events/single-event/single-event.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _components_profile_users_created_events_users_created_events_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/profile/users-created-events/users-created-events.component */ "./src/app/components/profile/users-created-events/users-created-events.component.ts");
/* harmony import */ var _components_profile_users_attending_events_users_attending_events_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/profile/users-attending-events/users-attending-events.component */ "./src/app/components/profile/users-attending-events/users-attending-events.component.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var ngx_slick__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-slick */ "./node_modules/ngx-slick/index.js");
/* harmony import */ var _components_events_single_event_comments_comments_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/events/single-event/comments/comments.component */ "./src/app/components/events/single-event/comments/comments.component.ts");
/* harmony import */ var _pipes_filtername_pipe__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pipes/filtername.pipe */ "./src/app/pipes/filtername.pipe.ts");
/* harmony import */ var _pipes_filterlocation_pipe__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pipes/filterlocation.pipe */ "./src/app/pipes/filterlocation.pipe.ts");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @cloudinary/angular-5.x */ "./node_modules/@cloudinary/angular-5.x/index.js");
/* harmony import */ var _cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(_cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var cloudinary_core__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! cloudinary-core */ "./node_modules/cloudinary-core/cloudinary-core.js");
/* harmony import */ var cloudinary_core__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(cloudinary_core__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _components_create_event_create_event_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/create-event/create-event.component */ "./src/app/components/create-event/create-event.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






































var appRoutes = [
    { path: '', redirectTo: 'events', pathMatch: 'full' },
    { path: 'signUp', component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"] },
    { path: 'signIn', component: _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_7__["SigninComponent"] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"], canActivate: [_services_gaurd_service__WEBPACK_IMPORTED_MODULE_10__["GaurdService"]] },
    { path: 'events', component: _components_events_events_component__WEBPACK_IMPORTED_MODULE_17__["EventsComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"],
                _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_7__["SigninComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
                _components_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_14__["MainNavComponent"],
                _components_events_events_component__WEBPACK_IMPORTED_MODULE_17__["EventsComponent"],
                _components_events_single_event_single_event_component__WEBPACK_IMPORTED_MODULE_18__["SingleEventComponent"],
                _components_profile_users_created_events_users_created_events_component__WEBPACK_IMPORTED_MODULE_24__["UsersCreatedEventsComponent"],
                _components_profile_users_attending_events_users_attending_events_component__WEBPACK_IMPORTED_MODULE_25__["UsersAttendingEventsComponent"],
                _components_events_single_event_comments_comments_component__WEBPACK_IMPORTED_MODULE_29__["CommentsComponent"],
                _pipes_filtername_pipe__WEBPACK_IMPORTED_MODULE_30__["FilterByNamePipe"],
                _pipes_filterlocation_pipe__WEBPACK_IMPORTED_MODULE_31__["FilterlocationPipe"],
                _components_create_event_create_event_component__WEBPACK_IMPORTED_MODULE_36__["CreateEventComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_13__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatNativeDateModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatFormFieldModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__["MatTooltipModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__["MatGridListModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_26__["MatInputModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_27__["AgmCoreModule"].forRoot({
                    apiKey: "AIzaSyB9apYkFiLPc7Q0onb1fFfemAB8cLVVoiI",
                    libraries: ["places"]
                }),
                ngx_slick__WEBPACK_IMPORTED_MODULE_28__["SlickModule"].forRoot(),
                ng_flash_messages__WEBPACK_IMPORTED_MODULE_33__["NgFlashMessagesModule"].forRoot(),
                _cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_34__["CloudinaryModule"].forRoot(cloudinary_core__WEBPACK_IMPORTED_MODULE_35__, { cloud_name: 'dude439' }),
            ],
            entryComponents: [_components_events_events_component__WEBPACK_IMPORTED_MODULE_17__["EventsComponent"], _components_events_single_event_single_event_component__WEBPACK_IMPORTED_MODULE_18__["SingleEventComponent"], _components_profile_users_created_events_users_created_events_component__WEBPACK_IMPORTED_MODULE_24__["UsersCreatedEventsComponent"], _components_create_event_create_event_component__WEBPACK_IMPORTED_MODULE_36__["CreateEventComponent"]],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _services_gaurd_service__WEBPACK_IMPORTED_MODULE_10__["GaurdService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/create-event/create-event.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/create-event/create-event.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/create-event/create-event.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/create-event/create-event.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label for=\"\">Create an event</label>\n<form action=\"\" (submit)=\"convertAddress()\" #f=\"ngForm\">\n    <div class=\"form-group\" >\n      <label>Event name</label>\n      <input type=\"textarea\" ngModel #eventname=ngModel name=\"eventname\" class=\"form-control\" required >\n      <span *ngIf=\"!eventname.valid && eventname.touched\">please enter a name</span>\n    </div>\n    \n    <div class=\"form-group\" >\n        <div class=\"form-group\" >\n            <label>Details</label>\n            <textarea rows=\"4\" cols=\"50\" ngModel #details=ngModel name=\"details\" class=\"form-control\" required></textarea>\n          </div>\n\n\n          <div class=\"form-group\" >\n            <label>Location</label>\n            <input type=\"text\" [(ngModel)]=\"searchLocation\" placeholder=\"Search for Location\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" class=\"form-control\" #search ngModel #location=ngModel name=\"location\" required> \n        </div>\n\n\n          <label>date</label>\n          <input dateformat=\"dd-MMM-yyyy\" matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" ngModel #date=ngModel name=\"date\" class=\"form-control\" required>\n          <mat-datepicker-toggle matSuffix [for]=\"picker\" ></mat-datepicker-toggle>\n          <mat-datepicker #picker touchUi=\"true\" ></mat-datepicker> \n    \n\n        \n  \n     </div>\n    <input [disabled]=\"!f.valid\" type=\"submit\" class=\"btn btn-primary\" value=\"add event\">\n    </form>\n"

/***/ }),

/***/ "./src/app/components/create-event/create-event.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/create-event/create-event.component.ts ***!
  \*******************************************************************/
/*! exports provided: CreateEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEventComponent", function() { return CreateEventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/events.service */ "./src/app/services/events.service.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var CreateEventComponent = /** @class */ (function () {
    ////////////////////
    function CreateEventComponent(data, dialogRef, eventsService, mapsAPILoader, ngZone, http) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.eventsService = eventsService;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.http = http;
        this.host = JSON.parse(localStorage.getItem('user'));
        this.closeDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    //   convertAddress() 
    //   { 
    //      this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + 
    //      this.searchElement.nativeElement.value + '&key=AIzaSyB9apYkFiLPc7Q0onb1fFfemAB8cLVVoiI')
    //      .subscribe(res =>{
    //       console.log(res.json().results[0].address_components[4] + "   " + this.searchElement.nativeElement.value);
    //      this.lat = res.json().results[0].geometry.location.lat  
    //      this.lng = res.json().results[0].geometry.location.lng
    //      this.state = res.json().results[0].address_components[3].long_name
    //      this.country = res.json().results[0].address_components[4].long_name
    //      this.formattedAddress = res.json().results[0].formatted_address
    //      this.onAddEvent()
    //     })
    //  }
    CreateEventComponent.prototype.convertAddress = function () {
        var _this = this;
        this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' +
            this.searchElement.nativeElement.value + '&key=AIzaSyB9apYkFiLPc7Q0onb1fFfemAB8cLVVoiI')
            .subscribe(function (res) {
            _this.lat = res.json().results[0].geometry.location.lat;
            _this.lng = res.json().results[0].geometry.location.lng;
            _this.formattedAddress = res.json().results[0].formatted_address;
            for (var ac = 0; ac < res.json().results[0].address_components.length; ac++) {
                var component = res.json().results[0].address_components[ac];
                if (component.types.includes('sublocality') || component.types.includes('locality')) {
                    _this.city = component.long_name;
                }
                else if (component.types.includes('administrative_area_level_1')) {
                    _this.state = component.long_name;
                }
                else if (component.types.includes('country')) {
                    _this.country = component.long_name;
                }
            }
            _this.onAddEvent();
        });
    };
    // convertAddress() { 
    //   var geocoder; 
    //   var address = this.searchElement.nativeElement.value; 
    //   this.locationName = address
    //   geocoder = new google.maps.Geocoder();
    //   geocoder.geocode( { 'address': address}, 
    //   (results, status)=> 
    //   { 
    //     if (status == google.maps.GeocoderStatus.OK) 
    //     { 
    //       console.log("hello")
    //       this.addressSet = true
    //      this.lat = results[0].geometry.location.lat()
    //      this.lng = results[0].geometry.location.lng()  
    //     } 
    //     else { 
    //   } }); } 
    CreateEventComponent.prototype.onAddEvent = function () {
        var _this = this;
        var newEvent = {
            name: this.eventform.value.eventname,
            details: this.eventform.value.details,
            date: this.eventform.value.date,
            host: this.host.id,
            attending: [],
            image: 'uploads/default.png',
            location: {
                lat: this.lat,
                lng: this.lng,
                formattedAddress: this.formattedAddress,
                city: this.city,
                state: this.state,
                country: this.country
            }
        };
        this.eventsService.addEvent(newEvent).subscribe(function (res) {
            var date = new Date(res.date);
            var year = date.getFullYear();
            var month = date.getMonth();
            var day = date.getDate();
            var time = {
                year: year,
                month: month,
                day: day
            };
            res.date = time;
            console.log("1");
            _this.dialogRef.close(res);
            console.log('2');
        });
    };
    CreateEventComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElement.nativeElement, { types: ["address"] });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    var place = autocomplete.getPlace();
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                });
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], CreateEventComponent.prototype, "eventform", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('search', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", Object)
    ], CreateEventComponent.prototype, "searchElement", void 0);
    CreateEventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-event',
            template: __webpack_require__(/*! ./create-event.component.html */ "./src/app/components/create-event/create-event.component.html"),
            styles: [__webpack_require__(/*! ./create-event.component.css */ "./src/app/components/create-event/create-event.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _services_events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"],
            _agm_core__WEBPACK_IMPORTED_MODULE_4__["MapsAPILoader"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"]])
    ], CreateEventComponent);
    return CreateEventComponent;
}());



/***/ }),

/***/ "./src/app/components/events/events.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/events/events.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.add-event\r\n{ \r\n  border-radius: 2em / 5em;\r\n  display: block;\r\n    width: 50%;\r\n    height: 50px;\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n\r\n}\r\n\r\n.example-card {\r\n    width: 350px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 20px;\r\n    display: block;\r\n    cursor: pointer;\r\n  }\r\n\r\n.search-bar\r\n  {\r\n   \r\n    width: 50%;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n  }\r\n\r\n.example-radio-group\r\n  { \r\n    padding-top: 200px;\r\n    margin-left:25%;\r\n    \r\n  }\r\n\r\n.example-radio-button\r\n  {\r\n    margin-right:25px;\r\n  }\r\n\r\n.example-header-image {\r\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n    background-size: cover;\r\n  }\r\n\r\n.overlay {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    opacity: 0;\r\n    transition: .5s ease;\r\n    background-color:#000000;\r\n  }\r\n\r\n.example-card:hover .overlay {\r\n    opacity: 0.5;\r\n  }\r\n\r\n.text {\r\n    color: white;\r\n    font-size: 20px;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    -ms-transform: translate(-50%, -50%);\r\n    text-align: center;\r\n     opacity: 1;\r\n    \r\n  }\r\n\r\n@media only screen and (max-width: 360px) {\r\n    .example-card {\r\n      width: 300px;\r\n     \r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 769px) {\r\n  .example-card {\r\n    display: inline-block;\r\n    margin-left: 20px;\r\n  }\r\n}"

/***/ }),

/***/ "./src/app/components/events/events.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/events/events.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form action=\"\">\n    <button *ngIf=\"host\" class=\"add-event\" mat-raised-button style=\"background-color:#39B7CD; color:white\" (click)=\"openCreateEventDialog()\"> Add Event</button>\n    <mat-radio-group class=\"example-radio-group\" [(ngModel)]=\"filterType\" name=\"filter\" #filter=\"ngModel\">\n        <mat-radio-button class=\"example-radio-button\" *ngFor=\"let filter of filterTypes\"  [value]=\"filter\">\n          {{filter}}\n        </mat-radio-button>\n      </mat-radio-group>\n<input type=\"text\" [(ngModel)]=\"searchTerm\" class=\"form-control search-bar\" name=\"searchTerm\" placeholder=\"Search...\">\n\n</form>\n<div *ngIf=\"filterType == 'Name'\">\n    <mat-card  class=\"example-card\" *ngFor=\"let event of events | filtername:searchTerm ; let i = index\" (click)=\"openEventDialog(event._id)\">\n        <div class=\"overlay\">\n              <div class=\"text\">More details</div>\n            </div>\n        \n        <mat-card-header>\n          <img  [src]=\"event.host.profilePic\" mat-card-avatar class=\"example-header-image\">\n          <mat-card-title>event name:{{event.name}}</mat-card-title>\n          <mat-card-subtitle>created by:{{event.host.firstname}} {{event.host.lastname}}</mat-card-subtitle>\n          <mat-card-subtitle> Date:{{month[event.date.month]}}/{{event.date.day}}/{{event.date.year}}</mat-card-subtitle>\n          \n          <mat-card-subtitle>Amount Attending:{{event.attending.length}}</mat-card-subtitle>\n          <div>\n        </div>\n        </mat-card-header>\n        <img  mat-card-image [src]=\"event.image\"  height=\"142\" width=\"142\" >\n        <mat-card-content>\n            <label>Location</label>\n            <p> {{event.location.state}} {{event.location.city}} {{event.location.country}} {{event.location.country}}</p>\n        </mat-card-content>\n        <mat-card-actions>\n      \n        </mat-card-actions>\n      </mat-card>\n</div>\n<div *ngIf=\"filterType == 'Location'\">\n    <mat-card  class=\"example-card\" *ngFor=\"let event of events | filterlocation:searchTerm ; let i = index\" (click)=\"openEventDialog(event._id)\">\n        <div class=\"overlay\">\n              <div class=\"text\">More details</div>\n            </div>\n        \n        <mat-card-header>\n          <img  [src]=\"event.host.profilePic\" mat-card-avatar class=\"example-header-image\">\n          <mat-card-title>event name:{{event.name}}</mat-card-title>\n          <mat-card-subtitle>created by:{{event.host.firstname}} {{event.host.lastname}}</mat-card-subtitle>\n          <mat-card-subtitle> Date:{{month[event.date.month]}}/{{event.date.day}}/{{event.date.year}}</mat-card-subtitle>\n          \n          <mat-card-subtitle>Amount Attending:{{event.attending.length}}</mat-card-subtitle>\n          <div>\n        </div>\n        </mat-card-header>\n        <img  mat-card-image [src]=\"event.image\"  height=\"142\" width=\"142\" >\n        <mat-card-content>\n            <label>Location</label>\n            <p> {{event.location.state}} {{event.location.city}} {{event.location.country}} {{event.location.country}}</p>\n        </mat-card-content>\n        <mat-card-actions>\n      \n        </mat-card-actions>\n      </mat-card>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/events/events.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/events/events.component.ts ***!
  \*******************************************************/
/*! exports provided: EventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsComponent", function() { return EventsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/events.service */ "./src/app/services/events.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _single_event_single_event_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./single-event/single-event.component */ "./src/app/components/events/single-event/single-event.component.ts");
/* harmony import */ var _create_event_create_event_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../create-event/create-event.component */ "./src/app/components/create-event/create-event.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EventsComponent = /** @class */ (function () {
    function EventsComponent(eventsService, dialog, dialog2) {
        this.eventsService = eventsService;
        this.dialog = dialog;
        this.dialog2 = dialog2;
        this.host = JSON.parse(localStorage.getItem('user'));
        this.imageIndex = null;
        this.filterType = 'Name';
        this.month = ["January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"];
        this.filterTypes = ["Location", 'Name'];
    }
    EventsComponent.prototype.openCreateEventDialog = function () {
        var _this = this;
        var dialog2 = this.dialog2.open(_create_event_create_event_component__WEBPACK_IMPORTED_MODULE_5__["CreateEventComponent"], {
            data: {}
        });
        dialog2.afterClosed()
            .subscribe(function (res) {
            if (res == undefined) {
                console.log("shoulding add");
            }
            else {
                console.log("the res " + res);
                _this.events.push(res);
            }
        });
    };
    EventsComponent.prototype.openEventDialog = function (id) {
        var _this = this;
        var index = null;
        for (var i = 0; i < this.events.length; i++) {
            if (this.events[i]._id == id) {
                index = i;
            }
        }
        var dialog = this.dialog.open(_single_event_single_event_component__WEBPACK_IMPORTED_MODULE_4__["SingleEventComponent"], {
            data: {
                eventId: this.events[index]._id,
                eventDate: this.events[index].date
            }
        });
        dialog.afterClosed()
            .subscribe(function (res) {
            if (!res) {
                console.log("click out ");
            }
            else if (res === "delete") {
                _this.events.splice(index, 1);
                console.log("delte " + res);
            }
            else if (res.leave) {
                console.log("  this.events[i]._id :" + _this.events[index].attending + ":  res.eventId._id :" + res.eventId._id);
                if (_this.events[index]._id == res.eventId._id) {
                    console.log("be here now");
                    for (var j = 0; j < _this.events[index].attending.length; j++) {
                        if (_this.events[index].attending[j] == _this.host.id)
                            console.log(_this.events[index].attending[j] + " " + _this.host.id);
                        {
                            _this.events[index].attending.splice(j, 1);
                        }
                    }
                    //this.leaveEvents.emit(res.eventId)
                }
            }
            else if (res.join && res.eventId != undefined) {
                console.log(res);
                console.log(_this.events[index].attending);
                _this.events[index].attending.push(_this.host.id);
                console.log(_this.events[index].attending);
                //this.joinedEvents.emit(res.eventId)
            }
            else if (res.name && !res.image) {
                console.log(res.name + " edit events");
                if (res.date) {
                    _this.events[index].name = res.name || _this.events[index].name;
                    _this.events[index].details = res.details;
                    _this.events[index].date = res.date;
                }
                else {
                    _this.events[index].name = res.name;
                    _this.events[index].details = res.details;
                }
            }
            else if (res.image && !res.name) {
                console.log("just image");
                _this.events[index].image = res.image;
            }
        });
    };
    EventsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.eventsService.getEvents().subscribe(function (events) {
            console.log(events);
            if (_this.host) {
                _this.loggedIn = true;
            }
            else {
                _this.loggedIn = false;
            }
            _this.events = events;
            for (var i = 0; i < _this.events.length; i++) {
                var date = new Date(_this.events[i].date);
                var year = date.getFullYear();
                var month = date.getMonth();
                var day = date.getDate();
                var time = {
                    year: year,
                    month: month,
                    day: day
                };
                _this.events[i].date = time;
            }
            /// console.log(this.events)
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], EventsComponent.prototype, "eventform", void 0);
    EventsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-events',
            template: __webpack_require__(/*! ./events.component.html */ "./src/app/components/events/events.component.html"),
            styles: [__webpack_require__(/*! ./events.component.css */ "./src/app/components/events/events.component.css")],
        }),
        __metadata("design:paramtypes", [_services_events_service__WEBPACK_IMPORTED_MODULE_2__["EventsService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], EventsComponent);
    return EventsComponent;
}());



/***/ }),

/***/ "./src/app/components/events/single-event/comments/comments.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/events/single-event/comments/comments.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/events/single-event/comments/comments.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/events/single-event/comments/comments.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <h4 *ngIf=\"comments\">{{comments.length}} comments</h4>\n<mat-card class=\"example-card\" *ngFor=\"let comment of comments; let i = index\">\n  \n    <mat-card-header>\n        <mat-card-subtitle><img [src]=\"comment.commenter.profilePic\" mat-card-avatar class=\"example-header-image\">posted by:{{comment.commenter.firstname}} {{comment.commenter.lastname}}</mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content>\n      <p>{{comment.comment}}</p>\n    </mat-card-content>\n    <mat-card-actions>\n        <button  *ngIf=\"comment.commenter._id == user.id && comment._id != theComment\" mat-raised-button color=\"primary\" (click)=\"onEditcomment(i)\">Edit</button>\n        <button  *ngIf=\"comment.commenter._id == user.id &&  comment._id == theComment\" mat-raised-button color=\"primary\" (click)=\"onConfirmEditcomment(i)\" [disabled]=\"editedComment == null\">Confirm changes</button>\n        <button  *ngIf=\"comment.commenter._id == user.id &&  comment._id == theComment\" mat-raised-button color=\"primary\" (click)=\"cancel()\">Cancel</button>\n        <button *ngIf=\"comment.commenter._id == user.id &&  comment._id != theComment\"  mat-raised-button color=\"warn\" (click)=\"onDeleteComment(i)\">Delete</button>\n        <textarea *ngIf=\"comment.commenter._id == user.id && comment._id == theComment\" type=\"text\"[(ngModel)]=\"editedComment\" [placeholder]='comment.comment'></textarea>\n    </mat-card-actions>\n  \n  </mat-card>\n\n<form  #f=\"ngForm\">  \n        <div class=\"form-group\" >\n            <textarea rows=\"4\" cols=\"50\" ngModel #comment=ngModel name=\"comment\" class=\"form-control\" placeholder=\"comment\" required></textarea>\n          </div>     \n    <button [disabled]=\"!f.valid\" (click)=\"onAddComment()\" mat-raised-button color=\"primary\">Add comment</button>\n    </form>\n"

/***/ }),

/***/ "./src/app/components/events/single-event/comments/comments.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/events/single-event/comments/comments.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsComponent", function() { return CommentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_comments_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/comments.service */ "./src/app/services/comments.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommentsComponent = /** @class */ (function () {
    function CommentsComponent(commentsService) {
        this.commentsService = commentsService;
        this.user = JSON.parse(localStorage.getItem('user'));
    }
    CommentsComponent.prototype.onAddComment = function () {
        var _this = this;
        var newComment = {
            comment: this.commentform.value.comment,
            userId: this.user.id,
            eventId: this.eventId
        };
        console.log(newComment);
        this.commentsService.addComment(newComment).subscribe(function (res) {
            console.log(res);
            _this.commentform.reset();
            _this.comments.push(res);
        });
    };
    CommentsComponent.prototype.onDeleteComment = function (index) {
        var _this = this;
        this.commentsService.deleteComment(this.comments[index]._id).subscribe(function (res) {
            _this.comments.splice(index, 1);
            console.log("deleted " + res);
        });
    };
    CommentsComponent.prototype.onEditcomment = function (i) {
        this.editedComment = null;
        this.theComment = this.comments[i]._id;
        console.log(this.theComment + this.comments[i]._id);
        //this.editMode = !this.editMode
    };
    CommentsComponent.prototype.cancel = function () {
        this.theComment = null;
        this.editedComment = null;
    };
    CommentsComponent.prototype.onConfirmEditcomment = function (i) {
        var _this = this;
        this.commentsService.editComment(this.comments[i]._id, this.editedComment).subscribe(function (res) {
            _this.editedComment = null;
            _this.theComment = null;
            console.log(res);
            _this.comments[i].comment = res;
        });
    };
    CommentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.eventId);
        this.commentsService.getComments(this.eventId).subscribe(function (res) {
            console.log(res);
            _this.comments = res;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], CommentsComponent.prototype, "commentform", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('e'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], CommentsComponent.prototype, "editcommentform", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CommentsComponent.prototype, "eventId", void 0);
    CommentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-comments',
            template: __webpack_require__(/*! ./comments.component.html */ "./src/app/components/events/single-event/comments/comments.component.html"),
            styles: [__webpack_require__(/*! ./comments.component.css */ "./src/app/components/events/single-event/comments/comments.component.css")]
        }),
        __metadata("design:paramtypes", [_services_comments_service__WEBPACK_IMPORTED_MODULE_2__["CommentsService"]])
    ], CommentsComponent);
    return CommentsComponent;
}());



/***/ }),

/***/ "./src/app/components/events/single-event/single-event.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/components/events/single-event/single-event.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\r\n    max-width: 300px;\r\n    margin: 20px;\r\n    display: inline-block;\r\n  }\r\n\r\n  .example-header-image {\r\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n    background-size: cover;\r\n  }\r\n\r\n  div.polaroid {\r\n    width: 100%;\r\n    background-color: white;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    margin-bottom: 25px;\r\n  }\r\n\r\n  div.container {\r\n    text-align: center;\r\n    padding: 10px 20px;\r\n  }\r\n\r\n  agm-map {\r\n    height: 300px;\r\n  }\r\n\r\n  .carousel\r\n  {\r\n    cursor: pointer;\r\n  }"

/***/ }),

/***/ "./src/app/components/events/single-event/single-event.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/events/single-event/single-event.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div mat-dialog-content >\n  <mat-card-content>\n      <div mat-dialog-title *ngIf=\"loggedIn\">\n          <button *ngIf=\"(event.host._id == user.id || event.host.id == user.id)  && !editMode && !editImageMode\" mat-raised-button color=\"warn\" (click)=\"onDeleteEvent()\">delete</button>\n          <button *ngIf=\"(event.host._id == user.id || event.host.id == user.id) && !editMode && !editImageMode\" mat-raised-button color=\"primary\" (click)=\"onEditEvent()\">Edit Event</button>\n          <button *ngIf=\"(event.host._id == user.id || event.host.id == user.id) && !editMode && !editImageMode\" mat-raised-button color=\"accent\" (click)=\"fileInput.click()\">Change Image</button>\n          <button  *ngIf=\"editImageMode && !editMode\" mat-raised-button color=\"primary\" (click)=\"uploadPhoto()\">save</button>\n          <button *ngIf=\"editImageMode && !editMode\"  mat-raised-button color=\"warn\" (click)=\"cancel()\">Cancel</button>\n          <button *ngIf=\"editMode && !editImageMode\" mat-raised-button color=\"primary\" (click)=\"onCancelEventChanges()\">Cancel changes</button>\n          <button *ngIf=\"editMode && !editImageMode\" type=\"submit\" mat-raised-button color=\"accent\" (click)=\"onConfirmEventChanges()\">confirm changes</button>\n          </div>\n          \n    <form action=\"\"  #f=\"ngForm\"  *ngIf=\"editMode && loggedIn\">\n      <div class=\"form-group\" >\n        <label>Edit name</label>\n        <input  type=\"text\" [ngModel]=\"event.name\"  name=\"eventname\" class=\"form-control\" required >\n        <!-- <span *ngIf=\"!eventname.valid && eventname.touched\">please enter a name</span> -->\n      </div>\n      \n      <div class=\"form-group\" >\n          <div class=\"form-group\" >\n              <label>Edit details</label>\n              <textarea [ngModel]=\"event.details\" rows=\"4\" cols=\"50\"  #details=ngModel name=\"details\" class=\"form-control\" required  ></textarea>\n            </div>\n        <label>Edit date</label>\n          <input [ngModel]=\"data.eventDate\"  #date=ngModel name=\"date\" class=\"form-control\" required matInput [matDatepicker]=\"picker\" placeholder='Date:{{month[data.eventDate.month]}}/{{data.eventDate.day}}/{{data.eventDate.year}}'>\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n          <mat-datepicker #picker></mat-datepicker>\n      </div>\n      \n      </form>    \n  </mat-card-content>\n  <input  #fileInput style=\"display: none\" type=\"file\" (change)=\"onFileSelected($event)\">\n</div>\n\n\n<div mat-dialog-content>\n  <mat-card *ngIf=\"event\" class=\"example-card\">\n    <div  class=\"form-group\" enctype=\"multipart/form-data\">\n      \n\n     \n    </div>\n  <mat-card-header>\n    <img  [src]=\"event.host.profilePic\" mat-card-avatar class=\"example-header-image\">\n    <mat-card-subtitle>created by:{{event.host.firstname}} {{event.host.lastname}}</mat-card-subtitle>\n    <mat-card-subtitle>name of the event:{{event.name}}</mat-card-subtitle>\n\n    <mat-card-subtitle>Date:{{month[data.eventDate.month]}}/{{data.eventDate.day}}/{{data.eventDate.year}}</mat-card-subtitle>\n    \n    <mat-card-subtitle>Amount Attending:{{event.attending.length}}</mat-card-subtitle>\n    <div>\n   \n  </div>\n  </mat-card-header>\n  <img  mat-card-image [src]=\"event.image\"  height=\"142\" width=\"142\" >\n  <mat-card-content>\n    <h4>About</h4>\n    <p>\n        {{event.details}}\n    </p>\n\n    \n    <button *ngIf=\"!showAttending && event.attending.length > 0\" mat-button (click)=\"toggleAttending()\">{{event.attending.length}} People are coming</button>\n    <button *ngIf=\"showAttending && event.attending.length > 0\" mat-button (click)=\"toggleAttending()\">Hide whos coming</button>\n    <div *ngIf=\"showAttending\">\n        <hr>\n        <h1>Join these guys</h1>\n        <ngx-slick  class=\"carousel\" #slickModal=\"slick-modal\" [config]=\"slideConfig\">\n\n        \n        \n          <div class=\"polaroid\" ngxSlickItem *ngFor=\"let attending of event.attending\">\n              <img [src]=\"attending.profilePic\" alt=\"Norway\" style=\"width:100%\">\n              <div class=\"container\">\n                <h2>{{attending.firstname}} {{attending.lastname}}</h2>\n              </div>\n            </div>\n            </ngx-slick>\n    </div>\n\n\n    <h4>Where</h4>\n    {{event.location.formattedAddress}} \n    <agm-map [latitude]=\"event.location.lat\" [longitude]=\"event.location.lng\" >\n       <agm-marker [latitude]=\"event.location.lat\" [longitude]=\"event.location.lng\"></agm-marker>\n    </agm-map>\n  </mat-card-content>\n  <mat-card-actions>\n    <div *ngIf=\"loggedIn\">\n    <button *ngIf=\"!joinedEvent\" mat-button (click)=\"onJoinEvent(i)\">Join</button>\n    <button *ngIf=\"joinedEvent\" mat-button (click)=\"onLeaveEvent(i)\">Leave</button>\n    <button *ngIf=\"!showComments\" mat-button (click)=\"toggleComments(i)\">Show Comments</button>\n    <button *ngIf=\"showComments\" mat-button (click)=\"toggleComments(i)\">Hide Comments</button>\n    <app-comments [eventId]=\"eventId\" *ngIf=\"showComments\"></app-comments>\n\n  </div>\n\n  </mat-card-actions>\n</mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/components/events/single-event/single-event.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/events/single-event/single-event.component.ts ***!
  \**************************************************************************/
/*! exports provided: SingleEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleEventComponent", function() { return SingleEventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/events.service */ "./src/app/services/events.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var SingleEventComponent = /** @class */ (function () {
    function SingleEventComponent(data, eventsService, dialogRef) {
        this.data = data;
        this.eventsService = eventsService;
        this.dialogRef = dialogRef;
        this.slideConfig = { "slidesToShow": 1, "slidesToScroll": 1 };
        this.closeDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.month = ["January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"];
        this.showAttending = false;
        this.showComments = false;
        this.datee = this.data.eventDate.year.toString();
    }
    SingleEventComponent.prototype.toggleComments = function () {
        this.showComments = !this.showComments;
    };
    SingleEventComponent.prototype.toggleAttending = function () {
        this.showAttending = !this.showAttending;
    };
    SingleEventComponent.prototype.onFileSelected = function (event) {
        var _this = this;
        this.editImageMode = true;
        this.tempPic = this.event.image;
        this.picture = event.target.files[0];
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.event.image = event.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    SingleEventComponent.prototype.uploadPhoto = function () {
        var _this = this;
        this.editImageMode = false;
        var fd = new FormData();
        fd.append("eventImage", this.picture, Math.random().toString(36).substr(2, 5));
        console.log(this.picture);
        this.eventsService.updateEventImage(fd, this.data.eventId)
            .subscribe(function (res) {
            console.log(res.image);
            var updatedImage = {
                image: res
            };
            _this.dialogRef.close(updatedImage);
            console.log(_this.event.image + res);
        }, function (err) {
            console.log(err);
        });
    };
    SingleEventComponent.prototype.cancel = function () {
        this.editImageMode = false;
        this.event.image = this.tempPic;
    };
    SingleEventComponent.prototype.onConfirmEventChanges = function () {
        var _this = this;
        console.log(" host " + this.user.profilePic);
        var eventChanges;
        if (this.data.eventDate == this.eventform.value.date) {
            this.eventform.value.date = null;
        }
        eventChanges =
            {
                name: this.eventform.value.eventname,
                details: this.eventform.value.details,
                date: this.eventform.value.date || null,
                eventId: this.data.eventId,
                join: true
            };
        console.log("changed vent " + eventChanges);
        this.eventsService.editEvent(eventChanges).subscribe(function (res) {
            var date = new Date(res.date);
            var year = date.getFullYear();
            var month = date.getMonth();
            var day = date.getDate();
            var time = {
                year: year,
                month: month,
                day: day
            };
            res.date = time;
            var updatedEvent = {
                name: res.name,
                details: res.details,
                date: res.date,
                updatedEvent: "changed"
            };
            console.log(res);
            _this.dialogRef.close(updatedEvent);
        });
    };
    SingleEventComponent.prototype.onJoinEvent = function () {
        var _this = this;
        var eventId = this.data.eventId;
        var userId = this.user.id;
        var updatedList = null;
        //  console.log("event id" + eventId + " user id "+ userId)
        this.eventsService.joinEvent(eventId, userId).subscribe(function (res) {
            console.log(res);
            updatedList = { eventId: res._id, join: true };
            console.log(updatedList);
            _this.dialogRef.close(updatedList);
        });
    };
    SingleEventComponent.prototype.onLeaveEvent = function () {
        var _this = this;
        console.log("here");
        var updatedList = null;
        this.eventsService.leaveEvent(this.data.eventId, this.user.id).subscribe(function (res) {
            // console.log("the res "+ res)
            // console.log("here2" + res.name)
            updatedList = { eventId: res, leave: true };
            console.log("1st");
            _this.dialogRef.close(updatedList);
        });
    };
    SingleEventComponent.prototype.onCancelEventChanges = function () {
        this.editMode = false;
    };
    SingleEventComponent.prototype.onEditEvent = function () {
        this.editMode = true;
    };
    SingleEventComponent.prototype.onDeleteEvent = function () {
        console.log(this.data.eventId);
        this.eventsService.deleteEvent(this.data.eventId, this.user.id, this.event.image).subscribe(function (res) {
            console.log("the res " + res);
        });
        this.dialogRef.close("delete");
    };
    SingleEventComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = JSON.parse(localStorage.getItem('user'));
        console.log(this.data);
        this.joinedEvent = false;
        this.eventsService.getSingleEvent(this.data.eventId).subscribe(function (res) {
            // console.log("host: " + res.host.name +"attending: " + res.attending[0])
            _this.event = res;
            _this.eventId = res._id;
            console.log(_this.eventId);
            if (JSON.parse(localStorage.getItem('user'))) {
                _this.loggedIn = true;
                for (var i = 0; i < _this.event.attending.length; i++) {
                    if (_this.event.attending[i]._id == _this.user.id || _this.event.attending[i] == _this.user.id) {
                        return _this.joinedEvent = true;
                    }
                }
            }
            else {
                _this.loggedIn = false;
            }
            // console.log(this.datee + " < dattee")
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], SingleEventComponent.prototype, "eventform", void 0);
    SingleEventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-single-event',
            template: __webpack_require__(/*! ./single-event.component.html */ "./src/app/components/events/single-event/single-event.component.html"),
            styles: [__webpack_require__(/*! ./single-event.component.css */ "./src/app/components/events/single-event/single-event.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _services_events_service__WEBPACK_IMPORTED_MODULE_2__["EventsService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], SingleEventComponent);
    return SingleEventComponent;
}());



/***/ }),

/***/ "./src/app/components/main-nav/main-nav.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/main-nav/main-nav.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 200px;\n  box-shadow: 3px 0 6px rgba(0,0,0,.24);\n}\n\n.spacer\n{\n  flex: 1 1 auto;\n}\n\n.open-nav a, button\n{\n  margin-left: 30px;\n  text-decoration: none;\n}\n\n@media(min-width: 768px)\n{\n  .nav-button {\n   display: none;\n  }\n}\n\n@media(max-width: 767px)\n{\n  .open-nav {\n   display: none;\n  }\n}\n"

/***/ }),

/***/ "./src/app/components/main-nav/main-nav.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/main-nav/main-nav.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav\n    #drawer\n    class=\"sidenav\"\n    fixedInViewport=\"false\" \n    mode=\"(isHandset$ | async) ? 'side' : 'side'\"\n    >\n  \n    <mat-toolbar color=\"primary\">Menu</mat-toolbar>\n    <mat-nav-list>\n      <a *ngIf=\"!authService.isLoggedIn()\" mat-list-item [routerLink]=\"['/signIn']\">Log In</a>\n      <a *ngIf=\"!authService.isLoggedIn()\" mat-list-item [routerLink]=\"['/signUp']\">signUp</a>\n      <a *ngIf=\"authService.isLoggedIn()\" mat-list-item [routerLink]=\"['/profile']\">Profile</a>\n      <a  mat-list-item [routerLink]=\"['/events']\">Events</a>\n      <a *ngIf=\"authService.isLoggedIn()\"  mat-list-item  (click)=\"logOut()\">Log out</a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\">\n      <button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\"\n        class=\"nav-button\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n      <span>Angular Events</span>\n      <span class=\"spacer\"></span>\n      <div class=\"open-nav\">\n      <a *ngIf=\"!authService.isLoggedIn()\" mat-raised-button color=\"accent\" [routerLink]=\"['/signIn']\">Log In</a>\n      <a *ngIf=\"!authService.isLoggedIn()\" mat-raised-button color=\"accent\" [routerLink]=\"['/signUp']\">signUp</a>\n      <button mat-raised-button color=\"accent\" [routerLink]=\"['/events']\">Events</button>\n      <button *ngIf=\"authService.isLoggedIn()\" mat-raised-button color=\"accent\" [routerLink]=\"['/profile']\">Profile</button>\n      <button *ngIf=\"authService.isLoggedIn()\"  mat-raised-button color=\"accent\" type=\"button\" (click)=\"logOut()\">Log out</button>\n    </div>\n    </mat-toolbar>\n    <ng-content></ng-content>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/components/main-nav/main-nav.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/main-nav/main-nav.component.ts ***!
  \***********************************************************/
/*! exports provided: MainNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavComponent", function() { return MainNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MainNavComponent = /** @class */ (function () {
    function MainNavComponent(breakpointObserver, authService, router) {
        this.breakpointObserver = breakpointObserver;
        this.authService = authService;
        this.router = router;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.matches; }));
    }
    MainNavComponent.prototype.logOut = function () {
        this.authService.logOut();
        this.router.navigate(['/']);
    };
    MainNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'main-nav',
            template: __webpack_require__(/*! ./main-nav.component.html */ "./src/app/components/main-nav/main-nav.component.html"),
            styles: [__webpack_require__(/*! ./main-nav.component.css */ "./src/app/components/main-nav/main-nav.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], MainNavComponent);
    return MainNavComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.add-event\r\n{ \r\n  border-radius: 2em / 5em;\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n  margin-left: 25%;\r\n  \r\n  width: 50%;\r\n  height: 10%;\r\n}\r\n\r\n\r\n.username\r\n{\r\n  padding-bottom: 80px;\r\n}\r\n\r\n\r\n.welcome\r\n{\r\n  padding-top: 80px;\r\n}\r\n\r\n\r\n.example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n\r\n.example-container > * {\r\n  width: 100%;\r\n}\r\n\r\n\r\n.overlayy {\r\n   border-radius: 2em / 5em;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  opacity: 0;\r\n  transition: .5s ease;\r\n  background-color:#000000;\r\n}\r\n\r\n\r\n.example-card:hover .overlayy {\r\n  opacity: 0.5;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n.textt {\r\n  color: white;\r\n  font-size: 20px;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  -ms-transform: translate(-50%, -50%);\r\n  text-align: center;\r\n   opacity: 1;\r\n  \r\n}\r\n\r\n\r\n.example-card {\r\n  border-radius: 2em / 5em;\r\n    max-width: 350px;\r\n    margin: 20px;\r\n    display: inline-block;\r\n    background: #757f9a; /* fallback for old browsers */ /* Chrome 10-25, Safari 5.1-6 */\r\n    background: linear-gradient(to right, #757f9a, #d7dde8); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n  }\r\n\r\n\r\n.example-header-image {\r\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n    background-size: cover;\r\n  }\r\n\r\n\r\n.profileSection\r\n  { \r\n    font-family: 'Courgette', cursive;\r\n    background: #efefbb;\r\n    background: linear-gradient(to right, #efefbb, #d4d3dd); \r\n  }\r\n\r\n\r\n.eventsSection\r\n  {\r\n    height: 100%;\r\n    background: #cc95c0; /* fallback for old browsers */ /* Chrome 10-25, Safari 5.1-6 */\r\n  background: linear-gradient(to right, #cc95c0, #dbd4b4, #7aa1d2); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n  }\r\n\r\n\r\n.circle {\r\n    width: 142x;\r\n    height: 142x;\r\n    line-height: 142x;\r\n    border-radius: 50%; /* the magic */\r\n    -moz-border-radius: 50%;\r\n    -webkit-border-radius: 50%;\r\n    /* text-align: center; */\r\n    color: white;\r\n    /* font-size: 16px; */\r\n    /* text-transform: uppercase; */\r\n    font-weight: 700;\r\n    margin: 0 auto 40px;\r\n  }\r\n\r\n\r\n.container \r\n    {\r\n      position: relative;\r\n      height: 142px;\r\n      width: 142px;\r\n    }\r\n\r\n\r\n.profilePicture\r\n    { \r\n      position: relative;\r\n      height: 142px;\r\n      width: 142px;\r\n      \r\n    }\r\n\r\n\r\n.overlay {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: -20;\r\n    right: 20;\r\n    height: 100%;\r\n    width: 100%;\r\n    opacity: 0;\r\n    transition: .5s ease;\r\n    background-color:#000000;\r\n  }\r\n\r\n\r\n.container:hover .overlay {\r\n    opacity: 0.5;\r\n    cursor: pointer;\r\n  }\r\n\r\n\r\n.text {\r\n    color: white;\r\n    font-size: 15px;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%; \r\n    -webkit-transform: translate(-50%, -50%); \r\n            transform: translate(-50%, -50%);\r\n    -ms-transform: translate(-50%, -50%);\r\n    text-align: center;\r\n     opacity: 1;\r\n     font-family: 'Courgette', cursive;\r\n    \r\n  }\r\n\r\n\r\n@media screen and (max-width: 773px) {\r\n    .example-card\r\n    {\r\n      max-width: 250px;\r\n      max-height: 100px\r\n    }\r\n    \r\n}\r\n\r\n\r\n@media screen and (max-width: 600px) {\r\n  .example-card\r\n  {\r\n    max-width: 200px;\r\n    max-height: 100px\r\n  }\r\n}\r\n\r\n\r\n@media screen and (max-width: 355px) {\r\n  .example-card\r\n  {\r\n    max-width: 150px;\r\n    max-height: 150px\r\n  }\r\n}"

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div *ngIf=\"user\" >\r\n    \r\n    <mat-grid-list cols=\"4\" rowHeight=\"100px\" class=\"profileSection\">\r\n        <mat-grid-tile\r\n      colspan=\"1\"\r\n      [rowspan]=\"profilePicRows\"\r\n      style= \"border:0px solid black\">\r\n       \r\n          <div (click)=\"fileInput.click()\" class=\"container\">\r\n     <img class=\"profilePicture circle\" [src]=\"user.profilePic\" alt=\"\">\r\n     <div class=\"overlay circle\">\r\n        <p class=\"text circle\">Update profile picture</p>\r\n      </div>\r\n    </div>\r\n  </mat-grid-tile>\r\n\r\n\r\n\r\n        <mat-grid-tile colspan=\"3\" rowspan=\"1\" style= \"border:0px solid black\">\r\n      <h3 class=\"welcome\">Welcome </h3>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile colspan=\"3\" rowspan=\"2\" style= \"border:0px solid black\">\r\n        <h3 class=\"username\">{{user.firstname}} {{user.lastname}}</h3>\r\n      </mat-grid-tile>\r\n     \r\n      <mat-grid-tile [colspan]=\"changePictureRows\" [rowspan]=\"changePictureRows\" style= \"border:0px solid black\">\r\n          <div class=\"form-group\" enctype=\"multipart/form-data\">\r\n            <input  #fileInput style=\"display: none\" type=\"file\" (change)=\"onFileSelected($event)\">\r\n            <button *ngIf=\"saveChange\" mat-raised-button color=\"primary\" type=\"button\" (click)=\"uploadPhoto()\">save</button>\r\n            <button *ngIf=\"saveChange\" mat-raised-button color=\"accent\" type=\"button\" (click)=\"cancel()\">Cancel</button>\r\n          </div>\r\n      <!-- </mat-grid-tile>\r\n\r\n      <mat-grid-tile colspan=\"1\" rowspan=\"1\" style= \"border:0.5px solid black\"> -->\r\n\r\n      </mat-grid-tile>\r\n</mat-grid-list>\r\n\r\n\r\n\r\n  <mat-grid-list  cols=\"4\" rowHeight=\"100px\" class=\"eventsSection\">\r\n  <mat-grid-tile colspan=\"2\" rowspan=\"3\" >\r\n<div>\r\n\r\n<mat-card class=\"example-card\" (click)=\"showCreatedEvents()\">\r\n\r\n<mat-card-header>\r\n    <div class=\"overlayy\">\r\n        <div *ngIf=\"!user.events.length\" class=\"textt\">You haven't created any events</div>\r\n        <div *ngIf=\"!showMycreatedEvents && user.events.length\"  class=\"textt\" >See all</div>\r\n        <div *ngIf=\"showMycreatedEvents\" class=\"textt\">hide</div>\r\n\r\n      </div>\r\n  <mat-card-title><h4>You created {{user.events.length}} events </h4></mat-card-title>\r\n</mat-card-header>\r\n\r\n</mat-card>\r\n\r\n</div>\r\n</mat-grid-tile>\r\n\r\n<mat-grid-tile colspan=\"2\" rowspan=\"3\">\r\n    <div>\r\n    \r\n    <mat-card class=\"example-card\" (click)=\"showAttendingEvents()\" >\r\n    \r\n    <mat-card-header>\r\n        <div class=\"overlayy\">\r\n            <div *ngIf=\"!user.attending.length\" class=\"textt\">you aren't attending any events</div>\r\n            <div *ngIf=\"!showMyattendingEvents && user.attending.length\" class=\"textt\">See all</div>\r\n            <div *ngIf=\"showMyattendingEvents\" class=\"textt\">hide</div>\r\n          </div>\r\n      <mat-card-title><h4>You are attending {{user.attending.length}} events </h4></mat-card-title>\r\n    </mat-card-header>\r\n  \r\n    </mat-card>\r\n    \r\n    </div>\r\n    </mat-grid-tile>\r\n\r\n</mat-grid-list>\r\n\r\n<app-users-created-events *ngIf=\"showMycreatedEvents\" (deletedEvents)=\"deleteEvent($event)\" (leaveEvents)=\"leaveEvent($event)\" (joinedEvents)=\"joinEvent($event)\"></app-users-created-events>\r\n<app-users-attending-events *ngIf=\"showMyattendingEvents\" (deletedEvents)=\"deleteEvent($event)\" (leaveEvents)=\"leaveEvent($event)\" (joinedEvents)=\"joinEvent($event)\"></app-users-attending-events>\r\n</div>\r\n\r\n\r\n<button class=\"add-event\" mat-raised-button style=\"background-color:#39B7CD; color:white\" (click)=\"openCreateEventDialog()\"> Add Event</button>\r\n\r\n\r\n\r\n\r\n    \r\n\r\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _create_event_create_event_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../create-event/create-event.component */ "./src/app/components/create-event/create-event.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = /** @class */ (function () {
    // hosting:any
    // attending:any[]
    function ProfileComponent(authService, dialog) {
        this.authService = authService;
        this.dialog = dialog;
        this.host = JSON.parse(localStorage.getItem('user'));
        this.eventImageIndex = null;
        this.profilePicRows = 3;
        this.changePictureRows = 0;
    }
    ProfileComponent.prototype.openCreateEventDialog = function () {
        var _this = this;
        this.showMycreatedEvents = false;
        this.showMyattendingEvents = false;
        var dialog = this.dialog.open(_create_event_create_event_component__WEBPACK_IMPORTED_MODULE_2__["CreateEventComponent"], {
            data: {}
        });
        dialog.afterClosed()
            .subscribe(function (res) {
            if (res == undefined) {
                console.log("shoulding add");
            }
            else {
                console.log("the res " + res);
                _this.user.events.push(res._id);
            }
        });
    };
    ProfileComponent.prototype.joinEvent = function (eventId) {
        console.log(eventId);
        this.user.attending.push(eventId);
        console.log(this.user.attending);
    };
    ProfileComponent.prototype.deleteEvent = function (info) {
        console.log(info._id);
        for (var i = 0; i < this.user.attending.length; i++) {
            console.log("attending id:" + this.user.attending + " id :" + info._id);
            if (this.user.attending == info._id) {
                console.log("yoyoyo");
                this.user.attending.splice(i, 1);
            }
        }
        this.user.events.splice(info.i, 1);
    };
    ProfileComponent.prototype.leaveEvent = function () {
        this.user.attending.pop();
    };
    ProfileComponent.prototype.showAttendingEvents = function () {
        if (this.user.attending.length && !this.showMyattendingEvents) {
            this.showMycreatedEvents = false;
            this.showMyattendingEvents = true;
        }
        else {
            this.showMyattendingEvents = false;
        }
    };
    ProfileComponent.prototype.showCreatedEvents = function () {
        if (this.user.events.length && !this.showMycreatedEvents) {
            this.showMycreatedEvents = true;
            this.showMyattendingEvents = false;
        }
        else {
            this.showMycreatedEvents = false;
        }
    };
    ProfileComponent.prototype.onFileSelected = function (event) {
        var _this = this;
        this.profilePicRows = 2;
        this.changePictureRows = 1;
        this.picture = event.target.files[0];
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.user.profilePic = event.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
        this.show = true;
        this.saveChange = true;
    };
    ProfileComponent.prototype.uploadPhoto = function () {
        var _this = this;
        var fd = new FormData();
        fd.append("profilePic", this.picture, this.picture.name);
        console.log(this.picture);
        this.authService.updateProfilePic(fd)
            .subscribe(function (res) {
            _this.user.profilePic = res.profilePic;
            console.log(res.profilePic);
        }, function (err) {
            console.log(err);
        });
        this.profilePicRows = 3;
        this.changePictureRows = 0;
        this.saveChange = false;
    };
    ProfileComponent.prototype.cancel = function () {
        this.user.profilePic = this.tempPic;
        this.saveChange = false;
        this.show = false;
        this.profilePicRows = 3;
        this.changePictureRows = 0;
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile;
            _this.tempPic = _this.user.profilePic;
            _this.userCreatedEvents = _this.user.events.length;
            console.log(profile);
            console.log(_this.userCreatedEvents);
        }, function (err) {
            console.log(err);
            _this.show = false;
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/users-attending-events/users-attending-events.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/components/profile/users-attending-events/users-attending-events.component.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\r\n    max-width: 300px;\r\n    margin: 20px;\r\n    display: inline-block;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .example-header-image {\r\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n    background-size: cover;\r\n  }\r\n\r\n  .details\r\n  {\r\n    cursor: pointer;\r\n  }"

/***/ }),

/***/ "./src/app/components/profile/users-attending-events/users-attending-events.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/profile/users-attending-events/users-attending-events.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-slick  class=\"carousel\" #slickModal=\"slick-modal\" [config]=\"slideConfig\">\n<mat-card ngxSlickItem class=\"example-card\" *ngFor=\"let event of events; let i = index\">\n  \n    <mat-card-header>\n\n      <mat-card-title>event name:{{event.name}}</mat-card-title>\n      <mat-card-subtitle> Date:{{month[event.date.month]}}/{{event.date.day}}/{{event.date.year}}</mat-card-subtitle>      \n      <mat-card-subtitle>Amount Attending:{{event.attending.length}}</mat-card-subtitle>\n      <div>\n    </div>\n    </mat-card-header>\n    <img  mat-card-image [src]=\"event.image\"  height=\"142\" width=\"142\" >\n    <label for=\"\">About</label>\n    <p>{{event.location.state}} {{event.location.city}} {{event.location.country}}</p>\n\n    <mat-card-content>\n    </mat-card-content>\n    <mat-card-actions>\n        <button class=\"details\" mat-raised-button color=\"primary\" (click)=\"openDialog(i)\">More details</button>\n\n    </mat-card-actions>\n  \n  </mat-card>\n</ngx-slick>\n\n  "

/***/ }),

/***/ "./src/app/components/profile/users-attending-events/users-attending-events.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/profile/users-attending-events/users-attending-events.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: UsersAttendingEventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersAttendingEventsComponent", function() { return UsersAttendingEventsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/events.service */ "./src/app/services/events.service.ts");
/* harmony import */ var _events_single_event_single_event_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../events/single-event/single-event.component */ "./src/app/components/events/single-event/single-event.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsersAttendingEventsComponent = /** @class */ (function () {
    function UsersAttendingEventsComponent(eventsService, dialog) {
        this.eventsService = eventsService;
        this.dialog = dialog;
        this.deletedEvents = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.joinedEvents = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.leaveEvents = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.user = JSON.parse(localStorage.getItem('user'));
        this.month = ["January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"];
        this.slideConfig = { "slidesToShow": 3, "slidesToScroll": 2 };
    }
    UsersAttendingEventsComponent.prototype.openDialog = function (i) {
        var _this = this;
        console.log(this.events[i]);
        var dialog = this.dialog.open(_events_single_event_single_event_component__WEBPACK_IMPORTED_MODULE_2__["SingleEventComponent"], {
            data: {
                eventId: this.events[i]._id,
                eventDate: this.events[i].date
            }
        });
        dialog.afterClosed()
            .subscribe(function (res) {
            console.log(res);
            console.log(_this.events[i]);
            if (!res) {
                console.log("click out aaaaa");
            }
            else if (res === "delete") {
                _this.deletedEvents.emit({ i: i, _id: _this.events[i]._id });
                _this.events.splice(i, 1);
                console.log("delte " + res);
            }
            else if (res.leave) {
                console.log(res + " shoul alway be here");
                if (_this.events[i]._id = res.eventId._id) {
                    _this.events.splice(i, 1);
                    _this.leaveEvents.emit(res.eventId);
                }
            }
            else if (res.name && !res.image) {
                console.log(res.name + " edit events");
                if (res.date) {
                    _this.events[i].name = res.name || _this.events[i].name;
                    _this.events[i].details = res.details;
                    _this.events[i].date = res.date;
                }
                else {
                    _this.events[i].name = res.name;
                    _this.events[i].details = res.details;
                }
            }
            else if (res.image && !res.name) {
                console.log("just image");
                _this.events[i].image = res.image;
            }
            else {
                console.log("nothing happend");
            }
        });
    };
    UsersAttendingEventsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.eventsService.getUsersAttendingEvents(this.user.id).subscribe(function (res) {
            _this.events = res.attending;
            console.log("the whole res " + res);
            console.log(_this.events);
            for (var i = 0; i < _this.events.length; i++) {
                var date = new Date(_this.events[i].date);
                var year = date.getFullYear();
                var month = date.getMonth();
                var day = date.getDate();
                var time = {
                    year: year,
                    month: month,
                    day: day
                };
                _this.events[i].date = time;
            }
        }, function (err) {
            console.log(err);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UsersAttendingEventsComponent.prototype, "deletedEvents", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UsersAttendingEventsComponent.prototype, "joinedEvents", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UsersAttendingEventsComponent.prototype, "leaveEvents", void 0);
    UsersAttendingEventsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users-attending-events',
            template: __webpack_require__(/*! ./users-attending-events.component.html */ "./src/app/components/profile/users-attending-events/users-attending-events.component.html"),
            styles: [__webpack_require__(/*! ./users-attending-events.component.css */ "./src/app/components/profile/users-attending-events/users-attending-events.component.css")]
        }),
        __metadata("design:paramtypes", [_services_events_service__WEBPACK_IMPORTED_MODULE_1__["EventsService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], UsersAttendingEventsComponent);
    return UsersAttendingEventsComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/users-created-events/users-created-events.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/components/profile/users-created-events/users-created-events.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\r\n    max-width: 300px;\r\n    margin: 20px;\r\n    display: inline-block;\r\n  }\r\n\r\n  .example-header-image {\r\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n    background-size: cover;\r\n  }\r\n\r\n  .details\r\n  {\r\n    cursor: pointer;\r\n  }"

/***/ }),

/***/ "./src/app/components/profile/users-created-events/users-created-events.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/profile/users-created-events/users-created-events.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-slick  class=\"carousel\" #slickModal=\"slick-modal\" [config]=\"slideConfig\">\n<mat-card ngxSlickItem class=\"example-card\" *ngFor=\"let event of events; let i = index\">\n  \n      <mat-card-header>\n        \n        <mat-card-title>event name:{{event.name}}</mat-card-title>\n        <mat-card-subtitle> Date:{{month[event.date.month]}}/{{event.date.day}}/{{event.date.year}}</mat-card-subtitle>      \n        <mat-card-subtitle>Amount Attending:{{event.attending.length}}</mat-card-subtitle>\n        <div>\n      </div>\n      </mat-card-header>\n      <img  mat-card-image [src]=\"event.image\"  height=\"142\" width=\"142\" >\n      <label for=\"\">Where</label>\n      <p>{{event.location.state}} {{event.location.city}} {{event.location.country}}</p>\n      <mat-card-content>\n      </mat-card-content>\n      <mat-card-actions>\n        <button class=\"details\" mat-raised-button color=\"primary\" (click)=\"openDialog(i)\">More details</button>\n      </mat-card-actions>\n    </mat-card>\n  </ngx-slick>\n"

/***/ }),

/***/ "./src/app/components/profile/users-created-events/users-created-events.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/profile/users-created-events/users-created-events.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: UsersCreatedEventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersCreatedEventsComponent", function() { return UsersCreatedEventsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/events.service */ "./src/app/services/events.service.ts");
/* harmony import */ var _events_single_event_single_event_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../events/single-event/single-event.component */ "./src/app/components/events/single-event/single-event.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsersCreatedEventsComponent = /** @class */ (function () {
    function UsersCreatedEventsComponent(eventsService, dialog) {
        this.eventsService = eventsService;
        this.dialog = dialog;
        this.deletedEvents = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.joinedEvents = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.leaveEvents = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.user = JSON.parse(localStorage.getItem('user'));
        this.month = ["January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"];
        this.slideConfig = { "slidesToShow": 3, "slidesToScroll": 2 };
    }
    UsersCreatedEventsComponent.prototype.openDialog = function (i) {
        var _this = this;
        console.log(this.events[i]);
        var dialog = this.dialog.open(_events_single_event_single_event_component__WEBPACK_IMPORTED_MODULE_2__["SingleEventComponent"], {
            data: {
                eventId: this.events[i]._id,
                eventDate: this.events[i].date,
            }
        });
        dialog.afterClosed()
            .subscribe(function (res) {
            if (!res) {
                console.log("click out yyyyyy");
            }
            else if (res === "delete") {
                _this.deletedEvents.emit({ i: i, _id: _this.events[i]._id });
                _this.events.splice(i, 1);
                console.log("delte " + res);
            }
            else if (res.leave) {
                console.log("  this.events[i]._id :" + _this.events[i].attending + ":  res.eventId._id :" + res.eventId._id);
                if (_this.events[i]._id == res.eventId._id) {
                    for (var j = 0; j < _this.events[i].attending.length; j++) {
                        if (_this.events[i].attending[j] == _this.user.id) {
                            _this.events[i].attending.splice(j, 1);
                        }
                    }
                    _this.leaveEvents.emit(res.eventId);
                }
                // console.log("leaving event")
                // console.log(this.events[i].attending)
            }
            else if (res.join) {
                console.log(res);
                console.log(res.eventId);
                _this.events[i].attending.push(_this.user.id);
                _this.joinedEvents.emit(res.eventId);
            }
            else if (res.name && !res.image) {
                console.log(res.name + " edit events");
                if (res.date) {
                    _this.events[i].name = res.name || _this.events[i].name;
                    _this.events[i].details = res.details;
                    _this.events[i].date = res.date;
                }
                else {
                    _this.events[i].name = res.name;
                    _this.events[i].details = res.details;
                }
            }
            else if (res.image && !res.name) {
                console.log("just image");
                _this.events[i].image = res.image;
            }
        });
    };
    UsersCreatedEventsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.eventsService.getUsersEvents(this.user.id).subscribe(function (res) {
            console.log("the whole res " + res.events);
            _this.events = res.events;
            console.log(_this.events);
            for (var i = 0; i < _this.events.length; i++) {
                var date = new Date(_this.events[i].date);
                var year = date.getFullYear();
                var month = date.getMonth();
                var day = date.getDate();
                var time = {
                    year: year,
                    month: month,
                    day: day
                };
                _this.events[i].date = time;
            }
        }, function (err) {
            console.log(err);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UsersCreatedEventsComponent.prototype, "deletedEvents", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UsersCreatedEventsComponent.prototype, "joinedEvents", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UsersCreatedEventsComponent.prototype, "leaveEvents", void 0);
    UsersCreatedEventsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users-created-events',
            template: __webpack_require__(/*! ./users-created-events.component.html */ "./src/app/components/profile/users-created-events/users-created-events.component.html"),
            styles: [__webpack_require__(/*! ./users-created-events.component.css */ "./src/app/components/profile/users-created-events/users-created-events.component.css")]
        }),
        __metadata("design:paramtypes", [_services_events_service__WEBPACK_IMPORTED_MODULE_1__["EventsService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], UsersCreatedEventsComponent);
    return UsersCreatedEventsComponent;
}());



/***/ }),

/***/ "./src/app/components/signin/signin.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/signin/signin.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/signin/signin.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/signin/signin.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-flash-message></ng-flash-message>\n\n<form action=\"\" (submit)=\"onSignIn()\" #f=\"ngForm\">\n<div class=\"form-group\" >\n  <label>email</label>\n  <input type=\"text\" ngModel #email=ngModel name=\"email\" class=\"form-control\" required>\n  <span *ngIf=\"!email.valid && email.touched\">please enter a name</span>\n</div>\n\n<div class=\"form-group\" >\n  <label>password</label>\n  <input type=\"password\" ngModel #password=ngModel name=\"password\" class=\"form-control\" required>\n</div>\n<input type=\"submit\" class=\"btn btn-primary\" value=\"Log In\">\n</form>"

/***/ }),

/***/ "./src/app/components/signin/signin.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/signin/signin.component.ts ***!
  \*******************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SigninComponent = /** @class */ (function () {
    function SigninComponent(http, authService, router, ngFlashMessageService) {
        this.http = http;
        this.authService = authService;
        this.router = router;
        this.ngFlashMessageService = ngFlashMessageService;
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.onSignIn = function () {
        var _this = this;
        var user = {
            password: this.signinform.value.password,
            email: this.signinform.value.email,
        };
        this.authService.authenticateUser(user).subscribe(function (res) {
            if (res.success) {
                console.log(" token ::" + res.token + " user::" + res.user);
                _this.authService.storeData(res.token, res.user);
                _this.router.navigate(['/profile']);
            }
            else {
                console.log("bad");
                _this.ngFlashMessageService.showFlashMessage({
                    messages: ["Incorrect email or password"],
                    dismissible: true,
                    timeout: 4000,
                    type: 'danger'
                });
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], SigninComponent.prototype, "signinform", void 0);
    SigninComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/components/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/components/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__["NgFlashMessageService"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/components/signup/signup.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/signup/signup.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/signup/signup.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/signup/signup.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-flash-message></ng-flash-message>\n\n<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\" #f=\"ngForm\">\n\n  \n  <div class=\"form-group\" >\n    <label>First name</label>\n    <input type=\"text\" ngModel #firstname=ngModel name=\"firstname\" class=\"form-control\" required>\n    <span *ngIf=\"!firstname.valid && firstname.touched\">please enter your firstname</span>\n  </div>\n  <div class=\"form-group\">\n    <label>Last name</label>\n    <input type=\"text\" ngModel #lastname=ngModel name=\"lastname\" class=\"form-control\" required>\n    <span *ngIf=\"!lastname.valid && lastname.touched\">please enter your lastname</span>\n  </div>\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"text\" ngModel #email=ngModel name=\"email\" class=\"form-control\" required email>\n    <span *ngIf=\"!email.valid && email.touched\">please a valid email</span>\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" ngModel #password=ngModel name=\"password\" minlength=\"5\" required class=\"form-control\">\n    <span *ngIf=\"!password.valid && password.touched\">Password must be at least 5 char long</span>\n  </div>\n  <input [disabled]=\"!f.valid\" type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>"

/***/ }),

/***/ "./src/app/components/signup/signup.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignupComponent = /** @class */ (function () {
    function SignupComponent(http, authService, router, ngFlashMessageService) {
        this.http = http;
        this.authService = authService;
        this.router = router;
        this.ngFlashMessageService = ngFlashMessageService;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    // name:string
    // password:string
    // username:string
    // email:string
    SignupComponent.prototype.logInafterRegister = function () {
        var _this = this;
        this.authService.authenticateUser(this.user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeData(data.token, data.user);
                _this.router.navigate(['/profile']);
            }
            else {
                console.log("bad");
                _this.router.navigate(['/register']);
            }
        });
    };
    SignupComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        this.user =
            {
                firstname: this.signupform.value.firstname,
                password: this.signupform.value.password,
                lastname: this.signupform.value.lastname,
                email: this.signupform.value.email,
                events: []
            };
        this.authService.registerUser(this.user).subscribe(function (res) {
            console.log(res);
            if (res.success == "false") {
                _this.ngFlashMessageService.showFlashMessage({
                    messages: ["Already created an account with that email"],
                    dismissible: true,
                    timeout: 4000,
                    type: 'danger'
                });
            }
            else {
                _this.logInafterRegister();
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]
        // name:string
        // password:string
        // username:string
        // email:string
        )
    ], SignupComponent.prototype, "signupform", void 0);
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/components/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/components/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__["NgFlashMessageService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/pipes/filterlocation.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/pipes/filterlocation.pipe.ts ***!
  \**********************************************/
/*! exports provided: FilterlocationPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterlocationPipe", function() { return FilterlocationPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterlocationPipe = /** @class */ (function () {
    function FilterlocationPipe() {
    }
    FilterlocationPipe.prototype.transform = function (events, searchTerm) {
        if (searchTerm === undefined) {
            return events;
        }
        return events.filter(function (event) {
            return event.location.locationName.toLowerCase().includes(searchTerm.toLowerCase());
        });
    };
    FilterlocationPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filterlocation'
        })
    ], FilterlocationPipe);
    return FilterlocationPipe;
}());



/***/ }),

/***/ "./src/app/pipes/filtername.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/pipes/filtername.pipe.ts ***!
  \******************************************/
/*! exports provided: FilterByNamePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterByNamePipe", function() { return FilterByNamePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterByNamePipe = /** @class */ (function () {
    function FilterByNamePipe() {
    }
    FilterByNamePipe.prototype.transform = function (events, searchTerm) {
        if (searchTerm === undefined) {
            return events;
        }
        return events.filter(function (event) {
            return event.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
    };
    FilterByNamePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filtername'
        })
    ], FilterByNamePipe);
    return FilterByNamePipe;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('content-type', 'application/json');
        return this.http.post('users/register', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('content-type', 'application/json');
        return this.http.post('users/authenticate', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.loadToken = function () {
        ///id_token is the default name 
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.storeData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
        //console.log(this.user)
    };
    AuthService.prototype.logOut = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.isLoggedIn = function () {
        if (localStorage.getItem('id_token')) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService.prototype.updateProfilePic = function (fd) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.set("Authorization", localStorage.getItem('user'));
        return this.http.put('users/photo', fd, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.getProfile = function () {
        this.loadToken();
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.set("Authorization", this.authToken);
        headers.set('content-type', 'application/json');
        return this.http.get('users/profile', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    ;
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/comments.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/comments.service.ts ***!
  \**********************************************/
/*! exports provided: CommentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsService", function() { return CommentsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommentsService = /** @class */ (function () {
    function CommentsService(http) {
        this.http = http;
    }
    CommentsService.prototype.addComment = function (comment) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('content-type', 'application/json');
        return this.http.post('comments/addcomment', comment, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    CommentsService.prototype.getComments = function (eventId) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.set("Authorization", eventId);
        return this.http.get('comments/getcomments', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    ;
    CommentsService.prototype.deleteComment = function (commentId) {
        var comment = {
            commentId: commentId
        };
        console.log(comment);
        return this.http.put('comments/deletecomment', comment)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    CommentsService.prototype.editComment = function (commentId, commentText) {
        var comment = {
            commentId: commentId,
            commentText: commentText
        };
        console.log(comment);
        return this.http.put('comments/editcomment', comment)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    CommentsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], CommentsService);
    return CommentsService;
}());



/***/ }),

/***/ "./src/app/services/events.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/events.service.ts ***!
  \********************************************/
/*! exports provided: EventsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsService", function() { return EventsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventsService = /** @class */ (function () {
    function EventsService(http) {
        this.http = http;
        this.host = JSON.parse(localStorage.getItem('user'));
    }
    EventsService.prototype.getSingleEvent = function (eventId) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.set("Authorization", eventId);
        return this.http.get('events/getsingleevents', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return _this.allEvents = res.json(); }));
    };
    EventsService.prototype.getUsersAttendingEvents = function (userId) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.set("Authorization", userId);
        return this.http.get('users/getattendingevents', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    EventsService.prototype.getUsersEvents = function (userId) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.set("Authorization", userId);
        return this.http.get('users/getcreatedevents', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    EventsService.prototype.leaveEvent = function (eventId, userId) {
        var event = {
            eventId: eventId,
            userId: userId
        };
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('content-type', 'application/json');
        return this.http.put('events/leaveevent', event)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    EventsService.prototype.joinEvent = function (eventId, userId) {
        var userInfo = {
            eventId: eventId,
            userId: userId
        };
        console.log(userInfo);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('content-type', 'application/json');
        return this.http.post('events/join', userInfo, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    EventsService.prototype.updateEventImage = function (fd, eventId) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.set("Authorization", eventId);
        return this.http.put('events/photo', fd, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    EventsService.prototype.editEvent = function (event) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('content-type', 'application/json');
        return this.http.put('events/editevents', event, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    EventsService.prototype.addEvent = function (event) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('content-type', 'application/json');
        return this.http.post('events/addevents', event, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    EventsService.prototype.getEvents = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.set('content-type', 'application/json');
        return this.http.get('events/getevents', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return _this.allEvents = res.json(); }));
    };
    ;
    EventsService.prototype.deleteEvent = function (eventId, userId, image) {
        console.log(eventId, userId);
        var info = {
            eventId: eventId,
            userId: userId,
            image: image
        };
        return this.http.put('events/delete', info)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    EventsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], EventsService);
    return EventsService;
}());



/***/ }),

/***/ "./src/app/services/gaurd.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/gaurd.service.ts ***!
  \*******************************************/
/*! exports provided: GaurdService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaurdService", function() { return GaurdService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GaurdService = /** @class */ (function () {
    function GaurdService(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    GaurdService.prototype.canActivate = function () {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/']);
            return false;
        }
    };
    GaurdService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], GaurdService);
    return GaurdService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\burry\Desktop\code stuff\Projects\angular-events\angular-events\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map