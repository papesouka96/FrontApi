import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
roles:any;

constructor(private userService : UsersService){
  
}
ngOnInit(): void {
  this.roles = localStorage.getItem('role') == "admin"
 if (this.userService.getLoggedIn() !== "admin") {
    this.roles = true
    console.log('ok')
 } else {
  this.roles = false
  console.log('no')
 }
  // console.log(localStorage.getItem('role') == "admin")

  console.log(this.userService.getLoggedIn());
}
}
