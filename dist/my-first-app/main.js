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

module.exports = ".container {\n  margin-top: 30px;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-todos></app-todos>\n\n"

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
    AppComponent.prototype.ngOnInit = function () {
    };
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _todos_todos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todos/todos.component */ "./src/app/todos/todos.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _todolist_todolist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todolist/todolist.component */ "./src/app/todolist/todolist.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _todos_todos_component__WEBPACK_IMPORTED_MODULE_3__["TodosComponent"],
                _todolist_todolist_component__WEBPACK_IMPORTED_MODULE_5__["TodolistComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/services/viewservice.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/viewservice.service.ts ***!
  \*************************************************/
/*! exports provided: ViewserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewserviceService", function() { return ViewserviceService; });
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

var ViewserviceService = /** @class */ (function () {
    function ViewserviceService() {
        this.viewList = [];
    }
    ViewserviceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ViewserviceService);
    return ViewserviceService;
}());



/***/ }),

/***/ "./src/app/todolist/todolist.component.css":
/*!*************************************************!*\
  !*** ./src/app/todolist/todolist.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* The container */\r\n.container {\r\n  display: block;\r\n  position: relative;\r\n  padding-left: 35px;\r\n  cursor: pointer;\r\n  font-size: 22px;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n/* Hide the browser's default checkbox */\r\n.container input {\r\n  position: absolute;\r\n  opacity: 0;\r\n  cursor: pointer;\r\n  height: 0;\r\n  width: 0;\r\n}\r\n/* Create a custom checkbox */\r\n.checkmark {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 25px;\r\n  width: 25px;\r\n  background-color: #eee;\r\n}\r\n/* On mouse-over, add a grey background color */\r\n.container:hover input ~ .checkmark {\r\n  background-color: #ccc;\r\n}\r\n/* When the checkbox is checked, add a blue background */\r\n.container input:checked ~ .checkmark {\r\n  background-color: #2196F3;\r\n}\r\n/* Create the checkmark/indicator (hidden when not checked) */\r\n.checkmark:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  display: none;\r\n}\r\n/* Show the checkmark when checked */\r\n.container input:checked ~ .checkmark:after {\r\n  display: block;\r\n}\r\n/* Style the checkmark/indicator */\r\n.container .checkmark:after {\r\n  left: 9px;\r\n  top: 5px;\r\n  width: 5px;\r\n  height: 10px;\r\n  border: solid white;\r\n  border-width: 0 3px 3px 0;\r\n  -webkit-transform: rotate(45deg);\r\n  transform: rotate(45deg);\r\n}\r\n.btnnalign{\r\n  position: absolute;\r\n    right: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/todolist/todolist.component.html":
/*!**************************************************!*\
  !*** ./src/app/todolist/todolist.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-7\">\n  <ul class=\"list-group\">\n    <li class=\"list-group-item listalign \" *ngFor=\"let x of inputList; let i= index\">\n      <label class=\"container\">\n        <input type=\"checkbox\" [(ngModel)]=\"x.checked\" checked=\"checked\">\n        <span class=\"checkmark\"></span>\n        <label #labelName [ngStyle]=\"{'text-decoration':getStyle(x.checked)}\"\n          style=\"word-break: break-all; max-width:170px;\">{{x.name}}</label>\n        <span class=\"btnnalign\"><button type=\"button\" class=\"btn btn-info btnalign\" (click)=\"onEdit(i)\">Edit</button>\n          <button type=\"button\" class=\"btn btn-danger btnalgn\" (click)=\"onDelete(i)\">Delete</button>\n        </span>\n      </label>\n    </li>\n  </ul>\n  <div>\n    <button type=\"button\" class=\"btn btn-default\" style=\"margin-left: 515px;\" (click)=\"clearCompleted() \"\n      *ngIf=\"inputList.length!=0\">Clear Completed</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/todolist/todolist.component.ts":
/*!************************************************!*\
  !*** ./src/app/todolist/todolist.component.ts ***!
  \************************************************/
/*! exports provided: TodolistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodolistComponent", function() { return TodolistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_viewservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/viewservice.service */ "./src/app/services/viewservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodolistComponent = /** @class */ (function () {
    function TodolistComponent(viewserviceService) {
        this.viewserviceService = viewserviceService;
        this.inputList = [];
        this.tempList = [];
        this.newtodoValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TodolistComponent.prototype.ngOnInit = function () {
    };
    TodolistComponent.prototype.onEdit = function (index) {
        this.newtodoValue.emit({
            editedIndex: index,
            editedValue: this.inputList[index].name
        });
    };
    //To delete the item from todos
    TodolistComponent.prototype.onDelete = function (index) {
        this.inputList.splice(index, 1);
    };
    TodolistComponent.prototype.getStyle = function (flag) {
        if (flag) {
            return "line-through";
        }
        return "none";
    };
    //To clear the checked items from the todos
    TodolistComponent.prototype.clearCompleted = function () {
        var _this = this;
        this.tempList = [];
        this.inputList.forEach(function (element, index) {
            if (!element.checked) {
                _this.tempList.push(element);
            }
        });
        this.inputList = this.tempList;
        this.viewserviceService.viewList = this.inputList;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TodolistComponent.prototype, "inputList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TodolistComponent.prototype, "newtodoValue", void 0);
    TodolistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-todolist",
            template: __webpack_require__(/*! ./todolist.component.html */ "./src/app/todolist/todolist.component.html"),
            styles: [__webpack_require__(/*! ./todolist.component.css */ "./src/app/todolist/todolist.component.css")]
        }),
        __metadata("design:paramtypes", [_services_viewservice_service__WEBPACK_IMPORTED_MODULE_1__["ViewserviceService"]])
    ], TodolistComponent);
    return TodolistComponent;
}());



/***/ }),

/***/ "./src/app/todos/todos.component.css":
/*!*******************************************!*\
  !*** ./src/app/todos/todos.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".todoapp {\r\n  background: #fff;\r\n  margin: 130px 0 40px 0;\r\n  position: relative;\r\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.new-todo  {\r\n  padding: 16px 16px 16px 60px;\r\n  border: none !important;\r\n  background: rgba(0, 0, 0, 0.003);\r\n  box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);\r\n}\r\n\r\n.txtalgn{\r\n  width: 400px !important;\r\n  margin-left: 529px !important;\r\n}\r\n\r\n.todoapp h1 {\r\n  position: absolute;\r\n  top: -155px;\r\n  width: 100%;\r\n  font-size: 100px;\r\n  font-weight: 100;\r\n  text-align: center;\r\n  color: rgba(175, 47, 47, 0.15);\r\n  -webkit-text-rendering: optimizeLegibility;\r\n  -moz-text-rendering: optimizeLegibility;\r\n  text-rendering: optimizeLegibility;\r\n}\r\n\r\n.new-todo, .edit {\r\n  position: relative;\r\n  margin: 0;\r\n  width: 100%;\r\n  font-size: 24px;\r\n  font-family: inherit;\r\n  font-weight: inherit;\r\n  line-height: 1.4em;\r\n  border: 0;\r\n  color: inherit;\r\n  padding: 6px;\r\n  border: 1px solid #999;\r\n  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);\r\n  box-sizing: border-box;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\n.main {\r\n  position: relative;\r\n  z-index: 2;\r\n  border-top: 1px solid #e6e6e6;\r\n}\r\n"

/***/ }),

/***/ "./src/app/todos/todos.component.html":
/*!********************************************!*\
  !*** ./src/app/todos/todos.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class =\"todoapp\">\n  <header class=\"header\">\n\n      <h1>todos</h1>\n\n          <input class=\"new-todo txtalgn\" placeholder=\"What needs to be done?\" name =\"newtodo\" [(ngModel)]=\"newtodo\"  #newtodo1 autofocus=\"\">\n\n          <button type=\"button\" class=\"btn btn-primary btnalgn\" *ngIf=\"!atUpdate\" (click)=\"onAdd(newtodo1.value)\" >Add\n\n          </button>\n          <button type=\"button\" class=\"btn btn-success btnalgn\" *ngIf=\"atUpdate\" (click)=\"onAdd(newtodo1.value)\">Update</button>\n        <app-todolist [inputList] = input (newtodoValue)=\"onUpdate($event)\"></app-todolist>\n\n  </header>\n\n  </section>\n"

/***/ }),

/***/ "./src/app/todos/todos.component.ts":
/*!******************************************!*\
  !*** ./src/app/todos/todos.component.ts ***!
  \******************************************/
/*! exports provided: TodosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosComponent", function() { return TodosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_viewservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/viewservice.service */ "./src/app/services/viewservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodosComponent = /** @class */ (function () {
    function TodosComponent(viewserviceService) {
        this.viewserviceService = viewserviceService;
        this.atUpdate = false;
        this.input = [];
    }
    TodosComponent.prototype.ngOnInit = function () {
    };
    //To add new item to todos
    TodosComponent.prototype.onAdd = function (event) {
        this.input = this.viewserviceService.viewList;
        if (event.length !== 0) {
            if (this.atUpdate) {
                this.input[this.currentIndex].name = event;
                this.input[this.currentIndex].checked = false;
                this.atUpdate = false;
            }
            else {
                this.input.push({ name: event, checked: false });
            }
        }
        this.newtodo = '';
    };
    //To update item to todos
    TodosComponent.prototype.onUpdate = function (value) {
        this.newtodo = value.editedValue;
        this.atUpdate = true;
        this.currentIndex = value.editedIndex;
    };
    TodosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todos',
            template: __webpack_require__(/*! ./todos.component.html */ "./src/app/todos/todos.component.html"),
            styles: [__webpack_require__(/*! ./todos.component.css */ "./src/app/todos/todos.component.css")]
        }),
        __metadata("design:paramtypes", [_services_viewservice_service__WEBPACK_IMPORTED_MODULE_1__["ViewserviceService"]])
    ], TodosComponent);
    return TodosComponent;
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

module.exports = __webpack_require__(/*! C:\Angular project\forms-td-start\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map