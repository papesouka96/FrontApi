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
  user = []; userActif:any = [];
  
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
  
          this.userActif = this.users.filter((e:any)=> e.etat == true)
          console.log(this.userActif)
        }
  ); 
  
  }
 

  getUserData(id:any,photo:any,password:any,password2:any){
    this.showForm = true;
    this.userEditForm = this.formBuilder.group({
        id:[id],
        photo: [photo, [Validators.required]],
        password: [password, [Validators.required]],
        password2: [password2, [Validators.required]],
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
  
   this.userService.changeRole(id,user).subscribe(
  
    data=>{
      this.ngOnInit();
      this.showForm = false
    }
   );
  }
  
  }
  
  


