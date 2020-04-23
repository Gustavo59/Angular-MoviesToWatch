import { Component, OnInit } from '@angular/core';

export class ToWatch {
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
export class MoviesToWatchComponent implements OnInit {

  toWatch = [
    new ToWatch(1, 'Breathless', false, new Date()),
    new ToWatch(2, 'Bennys Video', false, new Date()),
    new ToWatch(3, 'Serious Man', false, new Date())
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
