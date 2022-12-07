import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { env } from 'src/env';
import { BehaviorSubject, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  private currentUserSubject: BehaviorSubject<User>;

  constructor(private httpClient:HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse((localStorage.getItem('currentUser')!)));
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  getConnexion(user:User){
    return this.httpClient.post<User>(`${env.apiUrl}/login`,user).
      pipe(map(user => {
        console.log(user.data?.token)
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user.data?.token));
        this.currentUserSubject.next(user);
        return user;
      }));

  }

  getLoggedIn(){

    if(!this.currentUserValue) {
      return false;
    }
    return true;
  }

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
