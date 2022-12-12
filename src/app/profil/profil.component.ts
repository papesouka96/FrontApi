import { Component, OnInit} from '@angular/core';

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
  userService: any;
  
  
  constructor(private usersService : UsersService){
    
  }
  ngOnInit(): void {
  
    this.userService.getUsers().subscribe( 
      (data: any) =>{
  
          this.users = data;
  
          this.userActif = this.users.filter((e:any)=> e.etat == true)
          console.log(this.userActif)
        }
  ); 
  
  }
}

