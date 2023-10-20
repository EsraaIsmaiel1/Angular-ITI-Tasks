import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  studentName:string = "";
  age:string = "";
  studentList: { studentName: string, age: string}[] = [];

  addStudent(e:Event){
      e.preventDefault();
      for (let student of this.studentList) {
        if (student.studentName === this.studentName) {
          return alert("Student already exists");
        }
      }
      this.studentList.push({ studentName: this.studentName, age: this.age });
      this.studentName = "";
      this.age = "";
      return null;
    }

get studentNameValid(){
return this.studentName.length >=4 && this.studentName.length != 0
}
get studentAgeValid(){
  let age = parseInt(this.age);
  return age >= 18 && age !=0 && typeof age == "number"
  }


  removeStudent(i:number){
    this.studentList = this.studentList.filter((student,index)=> index !=i);
}
}
