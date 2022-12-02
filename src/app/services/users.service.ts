import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient : HttpClient) { }

  getUsers(){
    return this.httpClient.get('http://127.0.0.1:3001/api/getAll')
  };

}
