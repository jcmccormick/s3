import {Component, OnInit} from 'angular2/core';
import {Form} from './form';
import {FormDetailComponent} from './form-detail.component';
import {FormService} from './form.service';

@Component({
  selector: 'cl-forms',
  template: `
    <pre class="special" *ngIf="selectedForm">{{selectedForm | json}} <br> <button (click)="deSelect()">Close</button></pre>
    <h1>{{title}}</h1>
    <h2>My Forms</h2>
    <label>New</label>
    <input #newForm
      (keyup.enter)="addForm(newForm.value); newForm.value=''"
      (blur)="addForm(newForm.value); newForm.value='' ">
    <button (click)=addForm(newForm.value)>Add</button>

    <ul class="forms">
      <li *ngFor="#form of forms" [class.selected]="form === selectedForm" (click)="onSelect(form)">
        <span class="badge">{{form.id}}</span> {{form.name}}
      </li>
    </ul>
    <cl-form-detail [form]="selectedForm"></cl-form-detail>
  `,
  styles:[`
    .special {
      position: fixed;
      top:0;
      right:0;
      padding: 5px;
      background: rgba(0,0,0,.5);
      color: white;
      text-size: 14px;
    }
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .forms {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 10em;
    }
    .forms li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0em;
      height: 1.6em;
      border-radius: 4px;
    }
    .forms li.selected:hover {
      color: white;
    }
    .forms li:hover {
      color: #607D8B;
      background-color: #EEE;
      left: .1em;
    }
    .forms .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0em 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0px 0px 4px;
    }
  `],

  directives: [FormDetailComponent],

  providers: [FormService]

})

export class FormsComponent implements OnInit {

  constructor(

    private _formService: FormService

  ) { }

  public title = 'Clerkr Forms';
  public forms: Form[];
  public selectedForm: Form;

  onSelect(form:Form) {

    this.selectedForm = form;

  }

  deSelect() {

    this.selectedForm = null;

  }

  getForms() {

    this._formService.getForms().then(forms => this.forms = forms);

  }

  addForm(name:string) {

    this._formService.addForm(name);

  }

  ngOnInit() {

    this.getForms();

  }

}