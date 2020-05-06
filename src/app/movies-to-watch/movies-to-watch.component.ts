import { Component, OnInit } from '@angular/core';
import { TowatchDataService } from '../service/data/towatch-data.service';

export class Towatch {
  constructor(
    public id: number,
    public name: string,
    public watched: boolean,
    public addedDate: Date
  ) {

  }
}

@Component({
  selector: 'app-movies-to-watch',
  templateUrl: './movies-to-watch.component.html',
  styleUrls: ['./movies-to-watch.component.css']
})
export class MoviesTowatchComponent implements OnInit {

  towatch: Towatch[]

  message: string

  constructor(
    private towatchService: TowatchDataService
  ) { }

  ngOnInit(): void {
    this.refreshTowatch();
  }

  refreshTowatch() {
    this.towatchService.retrieveAllTowatch('gsbarros').subscribe(
      response => {
        this.towatch = response;
      }
    )
  }

  deleteTowatch(id) {
    this.towatchService.deleteTowatch('gsbarros', id).subscribe(
      response => {
        this.message = `Delete of ToWatch ${id} Succesful!`;

        this.refreshTowatch();
      }
    )
  }

}
