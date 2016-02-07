import {Component} from 'angular2/core';
import {Form} from './form';
import {FieldsComponent} from './field/fields.component';

@Component({

  selector: 'cl-form-detail',

  template: `
    <div *ngIf="form">
      <h2>{{form.name}}</h2>
      <div><label>id: </label>{{form.id}}</div>
      <div>
        <label>name: </label>  
        <div>
          <input [(ngModel)]="form.name" placeholder="name">
        </div>
      </div>
      <cl-fields [form]="form"></cl-fields>
    </div>
  `,

  inputs: ['form'],

  directives: [FieldsComponent]

})


export class FormDetailComponent {
  
  public form: Form;

}