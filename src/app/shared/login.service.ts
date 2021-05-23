import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
 
  checkUsername(username: string, password: string) {
    if (username == 'sadhu' && password == 'soup')
      return true;
    else
      return false;
  }
}
