import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {env} from 'src/env';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient : HttpClient) { }  /* injection des dépendances */
  
  getUsers(){
    return this.httpClient.get('http://127.0.0.1:3001/api/getAll')
  };
  changeRole(id:any, user: User){
    return this.httpClient.patch<User>(`${env.apiUrl}/update/${id}`, user)
  }
  
}


