import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { env } from 'src/env'
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient : HttpClient) { }

  getUsers(){
    return this.httpClient.get(`${env.apiUrl}/getAll`)
  };

  changeRole(id:any,user: User){
   
    return this.httpClient.patch<User>(`${env.apiUrl}/update/${id}`,user);
  };


  modifUsers(id:any,user: User){
   
    return this.httpClient.patch<User>(`${env.apiUrl}/update/${id}`,user);
  }
}


