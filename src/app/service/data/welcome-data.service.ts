import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class HellowWorldBean {
  constructor(public message: string) { }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }

  executeHelloWorldBeanService() {
    return this.http.get<HellowWorldBean>('http://localhost:8080/hello-world-bean');
  }

  executeHelloWorldServiceWithPathVariable(name) {
    return this.http.get<HellowWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`);
  }
}
