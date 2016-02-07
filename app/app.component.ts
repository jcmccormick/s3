import {Component} from 'angular2/core';
import {FormsComponent} from './comp/form/forms.component';

@Component({

  selector: 'cl-app',
  template: `<cl-forms></cl-forms>`,
  directives: [FormsComponent]
  
})

export class AppComponent { }