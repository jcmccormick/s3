import {Field} from './field';

export var FIELDS: Field[] = [

  { id: 1, name: "First Name", kind: { id:1, name:"Text" }, form_id: 1 },

  { id: 2, name: "Last Name", kind: { id:1, name:"Text" }, form_id: 5 },

  { id: 3, name: "Email", kind: { id:3, name:"Email" }, form_id: 4 },

  { id: 4, name: "Date", kind: { id: 4, name:" Date" } , form_id: 2 },

  { id: 5, name: "Time", kind: { id: 5, name: " Time" }, form_id: 3 },

  { id: 6, name: "Bio", kind: { id:2, name:"Textarea" }, form_id: 2 }
  
]