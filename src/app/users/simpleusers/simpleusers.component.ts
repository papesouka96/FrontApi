import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-simpleusers',
  templateUrl: './simpleusers.component.html',
  styleUrls: ['./simpleusers.component.css']
})
export class SimpleusersComponent implements OnInit {
users:any;
  constructor(private userService : UsersService){}

  ngOnInit(): void {
  this.userService.getUsers().subscribe( /* déclarer le service getusers */
    data =>{
      this.users = data;
      console.log(this.users)
     /*  console.log(data) */
    }
  );

}
}
