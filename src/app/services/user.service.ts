import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { USERS } from './user.mock';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users:User[] = USERS;

  constructor() { }

  isValidUser(userName: string, password: string): boolean {

    for (let i = 0; i< this.users.length; i++) {
    
    const user = this.users[i];
    
    if (userName === user.userName && password === user.password) {
    
    return true;
    
    }
    
    }
    
    return false;
    
    }
  
    }

