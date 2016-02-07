import {Injectable} from 'angular2/core';
import {FIELDS} from './mock-fields';

@Injectable()

export class FieldService {

  getFields(form_id) {

    return Promise.resolve(FIELDS.filter(field => field.form_id === form_id));

  }

  addField(name:string,kind:number,form_id:number) {

    if (name && kind && form_id) {

      const id: number = FIELDS.length + 1;

      FIELDS.push({ id, name, kind, form_id });
      
    }
  }
}