import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-sdetails',
  templateUrl: './sdetails.component.html',
  styleUrls: ['./sdetails.component.css']
})
export class SdetailsComponent implements OnInit {

  s_id;
  s;
  s_name="";
  s_mobile="";
  s_email="";
  s_course="";
  id;

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

}
