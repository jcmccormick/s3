import {Component} from 'angular2/core';
import {Field} from './field';

@Component({

  selector: 'cl-field-detail',

  template: `
    <div *ngIf="field">
      <h2>{{field.name}}</h2>
      <div><label>id: </label>{{field.id}}</div>
      <div>
        <label>name: </label>  
        <div>
          <input [(ngModel)]="field.name" placeholder="name">
        </div>
      </div>
    </div>
  `,

  inputs: ['field']

})

export class FieldDetailComponent {

  public field: Field;
  
}