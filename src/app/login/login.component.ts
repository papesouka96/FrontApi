import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
/* import { Person } from './Person'; */


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  registerForm!:FormGroup;
  title = 'angularvalidate';
  submitted = false;

  constructor(private userService : UsersService, private formBuilder: FormBuilder ,) {
    
  }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
    
      email:['',[Validators.required,Validators.email]],
      
      password:['',[Validators.required,Validators.minLength(4)]],
      
      })
  }

 
  
onSubmit(){
this.submitted = true

 if(this.registerForm.invalid){

  return ;
} 

 /* /insertion sur la base de données/ */
  const user ={
 
   email : this.registerForm.value. email,
   password: this.registerForm.value. password,
  
  }

  console.log(user)

  this.userService.getConnexion(user).subscribe(
    data=>{
      this.ngOnInit();
    
    }
   );




}

}

