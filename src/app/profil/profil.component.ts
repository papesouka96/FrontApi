import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgModel, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})

export class ProfilComponent implements OnInit { 
  users: any;
  userEditForm : FormGroup;
  showForm = false; 
  p: number= 1;
  itemsperpage: number= 5;
  totalUser:any; 
  searchText:any;
  user:any; userActif:any;
  verifPass:any = true;
  registerForm!:FormGroup;
  submitted = false;
  
    constructor(private userService : UsersService, private formBuilder : FormBuilder){
      this.userEditForm = this.formBuilder.group({
        id:[''],
        photo: ['', [Validators.required]],
        password: ['', [Validators.required]],
        password2: ['', [Validators.required]],
      });
    }
  
  ngOnInit(): void {
  
    this.userService.getUsers().subscribe( 
        data =>{
  
          this.users = data;
  
          this.userActif = this.users.filter((e:any)=> e.etat == true && e.email == localStorage.getItem('userEmail'))
          console.log(this.userActif)
        }
  ); 
  
  }
 

  getUserData(){
    this.showForm = true;
    let id;
    for (const iterator of this.userActif) {
     id = iterator._id
    }
    console.log(id)
    this.userEditForm = this.formBuilder.group({
        id:[id],
        password: ["", [Validators.required]],
        password2: ["", [Validators.required]],
      });
    console.log(id)
  }
  
  
  modifUsers (){
  
  const id =  this.userEditForm.value.id;
   const user ={
    photo: this.userEditForm.value.photo,
    password: this.userEditForm.value.password,
    password2: this.userEditForm.value.password2
   }
  console.log(user)
  
   this.userService.changeRole(id,this.user).subscribe(
  
    data=>{
      this.ngOnInit();
      this.showForm = false
    }
   );
  }

  checkPassword=()=>{

    let pass1 = (<HTMLInputElement>document.getElementById("pass1")).value;
    let pass2 = (<HTMLInputElement>document.getElementById("pass2")).value;

    console.log(pass1 != pass2)

    if( pass1 != pass2)
    {
      this.verifPass = false;
      this.registerForm = this.formBuilder.group(
        {

        password:[''],
        password2:[''],

      })

      setTimeout(()=>{ this.verifPass = true}, 3001);
    }
 }



  
  }
  
  




