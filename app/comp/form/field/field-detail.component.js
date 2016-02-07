System.register(['angular2/core'], function(exports_1) {
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
    var core_1;
    var FieldDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FieldDetailComponent = (function () {
                function FieldDetailComponent() {
                }
                FieldDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'cl-field-detail',
                        template: "\n    <div *ngIf=\"field\">\n      <h2>{{field.name}}</h2>\n      <div><label>id: </label>{{field.id}}</div>\n      <div>\n        <label>name: </label>  \n        <div>\n          <input [(ngModel)]=\"field.name\" placeholder=\"name\">\n        </div>\n      </div>\n    </div>\n  ",
                        inputs: ['field']
                    }), 
                    __metadata('design:paramtypes', [])
                ], FieldDetailComponent);
                return FieldDetailComponent;
            }());
            exports_1("FieldDetailComponent", FieldDetailComponent);
        }
    }
});
//# sourceMappingURL=field-detail.component.js.map