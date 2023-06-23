import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-screate',
  templateUrl: './screate.component.html',
  styleUrls: ['./screate.component.css']
})
export class ScreateComponent implements OnInit {

  s_id     = ""; 
  s_name   = ""; 
  s_email  = ""; 
  s_mobile = ""; 
  s_course = "";  
  new_stud;
  constructor( private stud:StudentService) { }

  ngOnInit() {
  }

  add()
  {
    if(this.s_id!="" && this.s_name!="" && this.s_email!="" && this.s_mobile!="" && this.s_course!="")
    {
        this.new_stud={
          s_id     :this.s_id,
          s_name   :this.s_name,
          s_email  :this.s_email,
          s_mobile :this.s_mobile,
          s_course :this.s_course
        }
        if(this.stud.s_add(this.new_stud)==true)
        {
          alert("Student added Successfully..!");
          this.s_id=this.s_name=this.s_email=this.s_mobile=this.s_course="";
        }
    }
    else
    {
      alert("Please Enter all Fields..!");
    }
  
  }

}