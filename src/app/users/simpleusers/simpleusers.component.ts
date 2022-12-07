import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-simpleusers',
  templateUrl: './simpleusers.component.html',
  styleUrls: ['./simpleusers.component.css']
})
export class SimpleusersComponent implements OnInit {
users:any;
/* showForm: any; */
  /* userEditForm: FormGroup; */
showForm = false; 
p: number= 1;
itemsperpage: number= 5;
totalUser:any; 
searchText:any;
user = [];
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
