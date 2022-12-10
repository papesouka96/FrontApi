import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private userService : UsersService, private formBuilder: FormBuilder ,private route: Router) {
    
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

  /* console.log(user)*/

  this.userService.getConnexion(user).subscribe(
    data=>{
      console.log(data.data?.roles)
      if (data.data?.roles == "Administrateur" || data.data?.roles == "admin") {
          this.route.navigateByUrl('admin')
      } else {
        this.route.navigateByUrl('user')
      }
    }
   );
 



}

}

