System.register(['angular2/core', './mock-fields'], function(exports_1) {
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
    var core_1, mock_fields_1;
    var FieldService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_fields_1_1) {
                mock_fields_1 = mock_fields_1_1;
            }],
        execute: function() {
            FieldService = (function () {
                function FieldService() {
                }
                FieldService.prototype.getFields = function (form_id) {
                    return Promise.resolve(mock_fields_1.FIELDS.filter(function (field) { return field.form_id === form_id; }));
                };
                FieldService.prototype.addField = function (name, kind, form_id) {
                    if (name && kind && form_id) {
                        var id = mock_fields_1.FIELDS.length + 1;
                        mock_fields_1.FIELDS.push({ id: id, name: name, kind: kind, form_id: form_id });
                    }
                };
                FieldService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], FieldService);
                return FieldService;
            }());
            exports_1("FieldService", FieldService);
        }
    }
});
//# sourceMappingURL=field.service.js.map