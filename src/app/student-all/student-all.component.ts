import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { Student } from '../student';
import { Message } from '../message';

@Component({
  selector: 'app-student-all',
  templateUrl: './student-all.component.html',
  styleUrls: ['./student-all.component.css']
})
export class StudentAllComponent implements OnInit {

  students : Student[] | undefined;
  message : Message = new Message();
  constructor(private service:StudentService, private router:Router) {
 }
  ngOnInit(): void {
  this.getAllStudents();
  }
  getAllStudents(){
  this.service.getAllStudents().subscribe(data=>{this.students=data}
 ,
  error=>{
  this.students=[]
  });
  }
  deleteStudent(id:String){
  this.service.deleteOneStudent(id).subscribe(data=>{
    this.message=data,
    this.getAllStudents();
    },
    error=>{console.log(error)}
    );

    }
    editStudent(id:String){
    this.router.navigate(['edit',id]);
    }
   }

