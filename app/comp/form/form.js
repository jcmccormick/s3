System.register([], function(exports_1) {
    "use strict";
    var Form;
    return {
        setters:[],
        execute: function() {
            Form = (function () {
                function Form(id, name, fields) {
                    this.id = id;
                    this.name = name;
                    this.fields = fields;
                }
                return Form;
            }());
            exports_1("Form", Form);
        }
    }
});
//# sourceMappingURL=form.js.map