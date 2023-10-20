import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  studentList: { studentName: string, age: string }[] = [];
  addStudent(e: Event, studentName: string, age: string) {
    e.preventDefault();
    if (studentName && age) {
      this.studentList.push({ studentName, age });
    }
  }
}
