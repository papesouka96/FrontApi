import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgModel, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})

export class UtilisateurComponent implements OnInit {

users: any;
userEditForm : FormGroup;
showForm = false; 
p: number= 1;
 itemsperpage: number= 5;
totalUser:any; 

  constructor(private userService : UsersService, private formBuilder : FormBuilder){
    this.userEditForm = this.formBuilder.group({
      id:[''],
      prenom: ['', [Validators.required]],
      nom: ['', [Validators.required]],
      email: ['', [Validators.required]],
    });
  }

ngOnInit(): void {

  this.userService.getUsers().subscribe( 
      data =>{

        this.users = data;
               console.log(this.users)
              }
);
}

retrieveData(){
  this.userService.getUsers().subscribe((data:any)=>{
    this.users = data;
     this.totalUser = data.length; 
  })
}

changeRole=(id:any,roles:any)=> {
 roles == "admin" ? roles ="utilisateur": roles = "admin"

 const user ={
  roles : roles

 }

 this.userService.changeRole(id,user).subscribe(

  data=>{
    this.ngOnInit();
  }
 );
}


deleteId=(id:any,etat:any)=> {
etat == "0" ? etat ="1":etat= "0"

 const user ={
 etat : etat

 }

 this.userService.deleteId(id,user).subscribe(

  data=>{
    this.ngOnInit();
  }
 );
}

getUserData(id:any,email:any,prenom:any,nom:any){
  this.showForm = true;
  this.userEditForm = this.formBuilder.group({
      id:[id],
      prenom: [prenom, [Validators.required]],
      nom: [nom, [Validators.required]],
      email: [email, [Validators.required]],
    });
  console.log(id)
}


modifUsers (){

const id =  this.userEditForm.value.id;
 const user ={
  nom : this.userEditForm.value.nom,
  prenom: this.userEditForm.value.prenom,
  email: this.userEditForm.value.email
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



