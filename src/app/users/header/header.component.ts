import { Component, ElementRef, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
roles:any;
image= localStorage.getItem('img')
img: any;

constructor(private userService : UsersService, private router: Router, private el: ElementRef, private sanitizer: DomSanitizer){
  
}
ngOnInit(): void {
  this.roles = localStorage.getItem('role') == "admin"
 if (this.userService.getLoggedIn() !== "admin") {
    this.roles = true
    // console.log('ok')
 } else {
  this.roles = false
 
 }
  
    const imgRead = this.convertFile(<any>this.image?.replace(/['"]+/g, '')) 
    this.img  = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(imgRead))
}
logOut(){
  this.userService.getLogOut();
  this.router.navigateByUrl('login')
}

convertFile(str:any) {
  var pos = str.indexOf(';base64,');
  var type = str.substring(5, pos);
  var b64 = str.substr(pos + 8);

  // decode base64
  var imageContent = atob(b64);

  // create an ArrayBuffer and a view (as unsigned 8-bit)
  var buffer = new ArrayBuffer(imageContent.length);
  var view = new Uint8Array(buffer);

  // fill the view, using the decoded base64
  for(var n = 0; n < imageContent.length; n++) {
    view[n] = imageContent.charCodeAt(n);
  }

  // convert ArrayBuffer to Blob
 return new Blob([buffer], { type: type });

}


}

