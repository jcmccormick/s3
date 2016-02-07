System.register(['angular2/core', './field/fields.component'], function(exports_1) {
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
    var core_1, fields_component_1;
    var FormDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (fields_component_1_1) {
                fields_component_1 = fields_component_1_1;
            }],
        execute: function() {
            FormDetailComponent = (function () {
                function FormDetailComponent() {
                }
                FormDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'cl-form-detail',
                        template: "\n    <div *ngIf=\"form\">\n      <h2>{{form.name}}</h2>\n      <div><label>id: </label>{{form.id}}</div>\n      <div>\n        <label>name: </label>  \n        <div>\n          <input [(ngModel)]=\"form.name\" placeholder=\"name\">\n        </div>\n      </div>\n      <cl-fields [form]=\"form\"></cl-fields>\n    </div>\n  ",
                        inputs: ['form'],
                        directives: [fields_component_1.FieldsComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], FormDetailComponent);
                return FormDetailComponent;
            }());
            exports_1("FormDetailComponent", FormDetailComponent);
        }
    }
});
//# sourceMappingURL=form-detail.component.js.map