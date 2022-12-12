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
  imgSelected:any;
 

  constructor(private userService : UsersService, private formBuilder: FormBuilder ,) {
    this.registerForm = this.formBuilder.group({
      id:[''],
      prenom: ['', [Validators.required,UsernameValidator.cannotContainSpace]],
      nom: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      roles: ['', [Validators.required]],
      img: [''],
      
    });
  }
  ngOnInit():void {
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
//  if(this.registerForm.invalid){

//   return ;
// } 

 /* /insertion sur la base de données/ */
  const user ={
   prenom : this.registerForm.value.prenom,
   nom : this.registerForm.value.nom,
   email : this.registerForm.value.email,
   roles : this.registerForm.value.roles,
   password: this.registerForm.value.password,
   matricule : Math.random().toString(26).slice(2),  
   date_inscri: new Date().toISOString(),
   etat: true,
   img : this.imgSelected
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
      console.log(data)
      this.closePopup()
      
     this.ngOnInit(); 

    }


   );




}




onFileSelected(event: any) {


  let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imgSelected = reader.result; 
        console.log(this.imgSelected);
      };
    }
//   if(!event.target.files[0] || event.target.files[0].length == 0) {
//     // this.msg = 'You must select an image';
//     return;
//   }
  
//   var mimeType = event.target.files[0].type;
  
//   if (mimeType.match(/image\/*/) == null) {
//     // this.msg = "Only images are supported";
//     return;
//   }
  
//   var reader = new FileReader();
//   reader.readAsDataURL(event.target.files[0]);
  
//   reader.onload = (_event) => {
//     // this.msg = "";
//     this.imgSelected = reader.result; 
//   }

}

selectFile(event: any) { //Angular 11, for stricter type
  // if(!event.target.files[0] || event.target.files[0].length == 0) {
  //   this.msg = 'You must select an image';
  //   return;
  // }
  
  // var mimeType = event.target.files[0].type;
  
  // if (mimeType.match(/image\/*/) == null) {
  //   this.msg = "Only images are supported";
  //   return;
  // }
  
  // var reader = new FileReader();
  // reader.readAsDataURL(event.target.files[0]);
  
  // reader.onload = (_event) => {
  //   this.msg = "";
  //   this.url = reader.result; 
  // }
}
displayStyle = "none";
  
openPopup() {
  this.displayStyle = "block";
}
closePopup() {
  this.displayStyle = "none";
}

}

