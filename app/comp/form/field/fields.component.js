System.register(['angular2/core', './field-detail.component', './field.service'], function(exports_1) {
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
    var core_1, field_detail_component_1, field_service_1;
    var FieldsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (field_detail_component_1_1) {
                field_detail_component_1 = field_detail_component_1_1;
            },
            function (field_service_1_1) {
                field_service_1 = field_service_1_1;
            }],
        execute: function() {
            FieldsComponent = (function () {
                function FieldsComponent(_fieldService) {
                    this._fieldService = _fieldService;
                }
                FieldsComponent.prototype.onSelect = function (field) {
                    this.selectedField = field;
                };
                FieldsComponent.prototype.getFields = function () {
                    var _this = this;
                    this._fieldService.getFields(this.form.id).then(function (fields) { return _this.fields = fields; });
                };
                FieldsComponent.prototype.addField = function (field) {
                    this._fieldService.addField(name, kind, this.form.id);
                };
                FieldsComponent.prototype.ngOnInit = function () {
                    this.getFields();
                    this.title = this.form.name + " Fields";
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], FieldsComponent.prototype, "form", void 0);
                FieldsComponent = __decorate([
                    core_1.Component({
                        selector: 'cl-fields',
                        template: "\n    <div>\n      <h3>{{title}}</h3>\n      <label>New</label>\n      <input #newField\n        (keyup.enter)=\"addField(newField.value); newField.value=''\"\n        (blur)=\"addField(newField.value); newField.value='' \">\n      <cl-kinds [field]=\"newField\"></cl-kinds>\n      <button (click)=addField(newField)>Add</button>\n      <ul>\n        <li *ngFor=\"#field of fields\" [class.selected]=\"field === selectedField\" (click)=\"onSelect(field)\">\n          {{field.name}}\n        </li>\n      </ul>\n      <cl-field-detail [field]=\"selectedField\"></cl-field-detail>\n    </div>\n  ",
                        directives: [field_detail_component_1.FieldDetailComponent],
                        providers: [field_service_1.FieldService],
                        inputs: ['form']
                    }), 
                    __metadata('design:paramtypes', [field_service_1.FieldService])
                ], FieldsComponent);
                return FieldsComponent;
            }());
            exports_1("FieldsComponent", FieldsComponent);
        }
    }
});
//# sourceMappingURL=fields.component.js.map