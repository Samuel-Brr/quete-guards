import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  roles = [ 'ANONYMOUS', 'USER', 'ADMIN']

  private role = this.roles[2]

  constructor() { }

  get getRole(){
    return this.role
  }
}
