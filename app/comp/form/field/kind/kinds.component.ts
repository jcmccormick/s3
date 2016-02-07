import {Component} from 'angular2/core';
import {Kind} from './kind';

@Component({

  selector: 'cl-kinds',

  template: `
    <select [(ngModel)]="field.kind">
      <option *ngFor="#kind of kinds" [value]="kind.type">{{kind.name}}</option>
    </select>
  `,

  inputs: ['field']

})

export class KindsComponent {

  public field: Kind;
  
}