import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  s_id;
  s;
  s_name="";
  s_mobile="";
  s_email="";
  s_course="";
  id;
  stud_list_update;

  constructor(private activateroute:ActivatedRoute,private stud:StudentService) { }

  ngOnInit() {

      this.id=this.activateroute.snapshot.paramMap.get("id");
      this.s=this.stud.stud_list[this.id];

      this.s_id=this.s.s_id;
      this.s_name=this.s.s_name;
      this.s_email=this.s.s_email;
      this.s_mobile=this.s.s_mobile;
      this.s_course=this.s.s_course;      
  }
  
  update()
  {
    if(this.s_id!="" && this.s_name!="" && this.s_email!="" && this.s_mobile!="" && this.s_course!="")
    {
      this.stud_list_update ={  
        s_id:this.s_id,
        s_name:this.s_name,
        s_email:this.s_email,
        s_mobile:this.s_mobile,
        s_course:this.s_course,  
      }

      if(this.stud.s_update(this.stud_list_update,this.id)==true)
      {
        alert("Record Updated Successfully..!");
        this.s_id=this.s_name=this.s_email=this.s_mobile=this.s_course="";
      }
    }
    else
    {
      alert("Please Enter all Fields..!");
    }
  
  }
}
