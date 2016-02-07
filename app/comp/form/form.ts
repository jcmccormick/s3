import {Field} from './field/field';

export class Form {

  constructor(

    public id: number,
    public name: string,
    public fields: Field[]
    
  ) { }

}