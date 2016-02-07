import {Injectable} from 'angular2/core';
import {FORMS} from './mock-forms';

@Injectable()

export class FormService {

  getForms() {

    return Promise.resolve(FORMS);

  }

  addForm(name:string) {

    if (name) {

      const id: number = FORMS.length + 1;

      FORMS.push({ id, name });
      
    }
  }
}