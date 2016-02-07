import {Component, OnInit, Input} from 'angular2/core';
import {Field} from './field';
import {FieldDetailComponent} from './field-detail.component';
import {FieldService} from './field.service';

@Component({

  selector: 'cl-fields',

  template: `
    <div>
      <h3>{{title}}</h3>
      <label>New</label>
      <input #newField
        (keyup.enter)="addField(newField.value); newField.value=''"
        (blur)="addField(newField.value); newField.value='' ">
      <cl-kinds [field]="newField"></cl-kinds>
      <button (click)=addField(newField)>Add</button>
      <ul>
        <li *ngFor="#field of fields" [class.selected]="field === selectedField" (click)="onSelect(field)">
          {{field.name}}
        </li>
      </ul>
      <cl-field-detail [field]="selectedField"></cl-field-detail>
    </div>
  `,

  directives: [FieldDetailComponent],

  providers: [FieldService],

  inputs: ['form']

})

export class FieldsComponent implements OnInit {
  
  @Input() form;

  public title: string;

  public fields: Field[];

  public selectedField: Field;

  constructor(

     private _fieldService: FieldService

  ) { }

  onSelect(field:Field) {

    this.selectedField = field;

  }

  getFields() {

    this._fieldService.getFields(this.form.id).then(fields => this.fields = fields);
  
  }

  addField(field:{name:string, kind:number}) {

    this._fieldService.addField(name, kind, this.form.id);

  }

  ngOnInit() {

    this.getFields();

    this.title = this.form.name + " Fields";

  }

}