import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgModel, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-page-archive',
  templateUrl: './page-archive.component.html',
  styleUrls: ['./page-archive.component.css']
})

export class PageArchiveComponent implements OnInit {

users: any;
userEditForm : FormGroup;
showForm = false; 
p: number= 1;
itemsperpage: number= 5;
totalUser:any; 
searchText:any;
user = []; userArchive =[];

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
        this.userArchive = this.users.filter((e:any)=> e.etat == false)
               console.log(this.userArchive)
              }
);

}

retrieveData(){
  this.userService.getUsers().subscribe((data:any)=>{
    this.users = data;
     this.totalUser = data.length; 
  })
}


ddeleteId=(id:any,etat:any)=> {

  if (confirm('Voule-vouz désarchiver')) {
    etat == true ? etat = false : etat = true
  
   const user ={
   etat : etat
  
   }
  
   this.userService.modifUsers(id,user).subscribe(
  
    data=>{
      this.ngOnInit();
    }
   );
  }
  
}

/* 
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
    //this.ngOnInit();
    this.showForm = false
  }
 );
} */

}



