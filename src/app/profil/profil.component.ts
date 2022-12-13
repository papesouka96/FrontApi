import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
 
  users: any;
  showForm = false; 
  p: number= 1;
  itemsperpage: number= 5;
  totalUser:any; 
  user = []; userActif:any = [];
  userServices: any;
  // img:any;
  image:any;

  src:any;

  @ViewChild('imgRef')
  img:ElementRef | any;
  submitted = false;

  
  constructor(private userService : UsersService, private domSanitizer: DomSanitizer, private formBuilder : FormBuilder){
    
    this.userEditForm = this.formBuilder.group({
      id:[''],
      photo: ['', [Validators.required]],
      password: ['', [Validators.required]],
      password2: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {

    this.src = localStorage.getItem('img');

    this.userService.getUsers().subscribe( 
      (data: any) =>{
  
          this.users = data;
       /*    this.userActif = this.users.filter((e:any)=> e.etat == true) */
       this.userActif = this.users.filter((e:any)=> e.etat == true && e.email == localStorage.getItem('userEmail'));
       console.log(this.userActif)
        }
    ); 

    const reader = new FileReader();
    
      // reader.readAsDataURL(file);
    
      reader.onload = () => {
        this.img = reader.result as string;
        // this.uploadForm.patchValue({
          // imgSrc: reader.result
        // });
      };
      console.log(this.img)
        this.img = localStorage.getItem('img');
        // this.image =btoa(this.img);
        // console.log(this.image)
       this.image= 'data:image/jpeg;base64,' +this.img
        
          // this.myForm.patchValue({
  
          //   fileSource: reader.result
  
          // });
  
    
        // let objectURL = 'data:image/jpeg;base64,' + this.img;

         this.image = this.domSanitizer.bypassSecurityTrustUrl(this.img );
        //  console.log(this.image)
  }

   convertBase64ToBlob(base64Image: string) {
    // Split into two parts
    const parts = base64Image.split(';base64,');
  
    // Hold the content type
    const imageType = parts[0].split(':')[1];
  
    // Decode Base64 string
    const decodedData = window.atob(parts[1]);
  
    // Create UNIT8ARRAY of size same as row data length
    const uInt8Array = new Uint8Array(decodedData.length);
  
    // Insert all character code into uInt8Array
    for (let i = 0; i < decodedData.length; ++i) {
      uInt8Array[i] = decodedData.charCodeAt(i);
    }
  
    // Return BLOB image after conversion
    return new Blob([uInt8Array], { type: imageType });
  }


  
  
}

