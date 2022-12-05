import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
/* import { Person } from './Person'; */

@Component({
  selector: 'app-inscrption',
  templateUrl: './inscrption.component.html',
  styleUrls: ['./inscrption.component.css']
})
export class InscrptionComponent {
  registerForm!:FormGroup;
  title = 'angularvalidate';
  submitted = false;

  constructor(private formBuilder: FormBuilder ,) {

  }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required/* , Validators.minLength(4) */]],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      roles: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }
  
onSubmit(){
this.submitted = true
if(this.registerForm.invalid){
  return
}
alert("Success")
}

}
