import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm = new FormGroup({
    username: new FormControl ('', [Validators.required , Validators.minLength(4)]),
    email: new FormControl ('', [Validators.required , Validators.email]),
    password: new FormControl ('', Validators.required)

  })
  get username(){
    return this.registerForm.controls['username']
  }
  get email(){
    return this.registerForm.controls['email']
  }
  get password(){
    return this.registerForm.controls['password']
  }
}
