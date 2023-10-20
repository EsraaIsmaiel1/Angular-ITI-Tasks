import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent {
@Input() studentList: { studentName: string, age: string }[] =[];
 removeStudent(i:number){
  this.studentList = this.studentList.filter((student,index)=> index !=i);
}
}
