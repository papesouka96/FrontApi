import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})

export class UtilisateurComponent implements OnInit {
users: any;
  constructor(private userService : UsersService){}

ngOnInit(): void {

  this.userService.getUsers().subscribe( 
      data =>{
        this.users = data;
               console.log(this.users)
              }
);
 

}
}



