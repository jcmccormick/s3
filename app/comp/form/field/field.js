System.register([], function(exports_1) {
    "use strict";
    var Field;
    return {
        setters:[],
        execute: function() {
            Field = (function () {
                function Field(id, name, kind, form_id) {
                    this.id = id;
                    this.name = name;
                    this.kind = kind;
                    this.form_id = form_id;
                }
                return Field;
            }());
            exports_1("Field", Field);
        }
    }
});
//# sourceMappingURL=field.js.map