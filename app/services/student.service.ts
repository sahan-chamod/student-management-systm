import { Injectable } from '@angular/core';
import { Student } from '../classes/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  stud_list:Student[]=[
    {
      s_id:1,
      s_name:"Jayes Khairnar",
      s_email:"ajkhairnar111198920@gmail.com",
      s_mobile:7028156545,
      s_course:"MCS"
    }
  ];
  constructor() { }

  getAll()
  {
    console.log("fetched..!");
    return this.stud_list;
  }

  s_add(stud:Student)
  {
    this.stud_list.push(stud);
    return true;
  }

  s_update(stud:Student,pos:number)
  {
    this.stud_list[pos]=stud;
    return true;
  }
  s_delete(pos:number)
  {
    this.stud_list.splice(pos,1);
    return true;
  }

}
