import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
/* import { Person } from './Person'; */
import { UsernameValidator } from '../username.validator';
@Component({
  selector: 'app-inscrption',
  templateUrl: './inscrption.component.html',
  styleUrls: ['./inscrption.component.css']
})
export class InscrptionComponent {
  registerForm!:FormGroup;
  title = 'angularvalidate';
  submitted = false;
  verifPass:any = true;

  constructor(private userService : UsersService, private formBuilder: FormBuilder ,) {
    this.registerForm = this.formBuilder.group({
      id:[''],
      prenom: ['', [Validators.required,UsernameValidator.cannotContainSpace]],
      nom: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      roles: ['', [Validators.required]],
      
    });
  }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
     prenom:['',[Validators.required,UsernameValidator.cannotContainSpace]],
      nom:['',Validators.required,UsernameValidator.cannotContainSpace],
      email:['',[Validators.required,Validators.email]],
      roles:['',Validators.required],
      password:['',[Validators.required,Validators.minLength(8)]],
      passwordc:['',Validators.required]
      })
  }

  checkPassword =()=>{

    let pass1 = (<HTMLInputElement>document.getElementById("pass1")).value;
    let pass2 = (<HTMLInputElement>document.getElementById("pass2")).value;

    console.log(pass1 != pass2)

    if( pass1 != pass2)
    {

      this.verifPass = false;
      console.log(this.verifPass)
      this.registerForm = this.formBuilder.group(
        {

        password:[''],
        passwordc:[''],

      })

      setTimeout(()=>{ this.verifPass = true}, 3000);

      
    }
 }
  
onSubmit(){
this.submitted = true
console.log(new Date().toISOString())
 if(this.registerForm.invalid){

  return ;
} 

 /* /insertion sur la base de données/ */
  const user ={
   prenom : this.registerForm.value. prenom,
   nom : this.registerForm.value. nom,
   email : this.registerForm.value. email,
   roles : this.registerForm.value. roles,
   password: this.registerForm.value. password,
   matricule :  Math.floor((1 + Math.random()) * 0x10000)
   .toString(16)
   .substring(1),
      
   
   date_inscri: new Date().toISOString(),
   etat: true
  }

  // const user ={
  //   prenom: "katy",
  //   nom:"soumbane",
  //   email: "awasoumbane281@gmail.com",
  //   password: "1238",
  //   roles: "admin",
  // date_inscri: "2022-05-12",
  // matricule: "1234",
  //  etat: false
  // }

  console.log(user)

  this.userService.addUsers(user).subscribe(
    data=>{
      this.ngOnInit();
      
    alert("Inscription reussie")
    }
   );




}

}
