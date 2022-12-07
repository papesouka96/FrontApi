import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { env } from 'src/env';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  nom: unknown;
  users: any;
  user: any;
  firstName: any;

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

  addUsers(user: User){
    return this.httpClient.post<User>(`${env.apiUrl}/post`,user);
  }
}
