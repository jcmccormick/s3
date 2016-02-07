System.register(['angular2/core', './form-detail.component', './form.service'], function(exports_1) {
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
    var core_1, form_detail_component_1, form_service_1;
    var FormsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (form_detail_component_1_1) {
                form_detail_component_1 = form_detail_component_1_1;
            },
            function (form_service_1_1) {
                form_service_1 = form_service_1_1;
            }],
        execute: function() {
            FormsComponent = (function () {
                function FormsComponent(_formService) {
                    this._formService = _formService;
                    this.title = 'Clerkr Forms';
                }
                FormsComponent.prototype.onSelect = function (form) {
                    this.selectedForm = form;
                };
                FormsComponent.prototype.deSelect = function () {
                    this.selectedForm = null;
                };
                FormsComponent.prototype.getForms = function () {
                    var _this = this;
                    this._formService.getForms().then(function (forms) { return _this.forms = forms; });
                };
                FormsComponent.prototype.addForm = function (name) {
                    this._formService.addForm(name);
                };
                FormsComponent.prototype.ngOnInit = function () {
                    this.getForms();
                };
                FormsComponent = __decorate([
                    core_1.Component({
                        selector: 'cl-forms',
                        template: "\n    <pre class=\"special\" *ngIf=\"selectedForm\">{{selectedForm | json}} <br> <button (click)=\"deSelect()\">Close</button></pre>\n    <h1>{{title}}</h1>\n    <h2>My Forms</h2>\n    <label>New</label>\n    <input #newForm\n      (keyup.enter)=\"addForm(newForm.value); newForm.value=''\"\n      (blur)=\"addForm(newForm.value); newForm.value='' \">\n    <button (click)=addForm(newForm.value)>Add</button>\n\n    <ul class=\"forms\">\n      <li *ngFor=\"#form of forms\" [class.selected]=\"form === selectedForm\" (click)=\"onSelect(form)\">\n        <span class=\"badge\">{{form.id}}</span> {{form.name}}\n      </li>\n    </ul>\n    <cl-form-detail [form]=\"selectedForm\"></cl-form-detail>\n  ",
                        styles: ["\n    .special {\n      position: fixed;\n      top:0;\n      right:0;\n      padding: 5px;\n      background: rgba(0,0,0,.5);\n      color: white;\n      text-size: 14px;\n    }\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .forms {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 10em;\n    }\n    .forms li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0em;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .forms li.selected:hover {\n      color: white;\n    }\n    .forms li:hover {\n      color: #607D8B;\n      background-color: #EEE;\n      left: .1em;\n    }\n    .forms .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0em 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0px 0px 4px;\n    }\n  "],
                        directives: [form_detail_component_1.FormDetailComponent],
                        providers: [form_service_1.FormService]
                    }), 
                    __metadata('design:paramtypes', [form_service_1.FormService])
                ], FormsComponent);
                return FormsComponent;
            }());
            exports_1("FormsComponent", FormsComponent);
        }
    }
});
//# sourceMappingURL=forms.component.js.map