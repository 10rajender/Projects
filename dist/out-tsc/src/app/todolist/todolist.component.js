"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TodolistComponent = /** @class */ (function () {
    function TodolistComponent() {
        this.todo = [];
        this.inputList = [];
        this.newtodoValue = new core_1.EventEmitter();
    }
    TodolistComponent.prototype.ngOnInit = function () { };
    TodolistComponent.prototype.onEdit = function (index) {
        this.newtodoValue.emit({
            editedIndex: index,
            editedValue: this.inputList[index]
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], TodolistComponent.prototype, "inputList", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], TodolistComponent.prototype, "newtodoValue", void 0);
    TodolistComponent = __decorate([
        core_1.Component({
            selector: "app-todolist",
            templateUrl: "./todolist.component.html",
            styleUrls: ["./todolist.component.css"]
        }),
        __metadata("design:paramtypes", [])
    ], TodolistComponent);
    return TodolistComponent;
}());
exports.TodolistComponent = TodolistComponent;
//# sourceMappingURL=todolist.component.js.map