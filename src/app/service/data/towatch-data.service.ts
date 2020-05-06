import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Towatch } from 'src/app/movies-to-watch/movies-to-watch.component';

@Injectable({
  providedIn: 'root'
})
export class TowatchDataService {

  constructor(
    private http: HttpClient
  ) { }

  retrieveAllTowatch(username) {
    return this.http.get<Towatch[]>(`http://localhost:8080/users/${username}/towatch`);
  }

  deleteTowatch(username, id) {
    return this.http.delete(`http://localhost:8080/users/${username}/towatch/${id}`)
  }
}
