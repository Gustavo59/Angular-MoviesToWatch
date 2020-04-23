import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(user, password) {
    if (user === "gsbarros" && password === "senha") {
      return true;
    } else {
      return false;
    }
  }
}
