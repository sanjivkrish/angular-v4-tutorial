import { Component, OnInit } from '@angular/core';
import { MovielistService } from '../services/movielist/movielist.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  listTitle: string = 'Sample list';
  listItems: any[] = ['one', 'two', 'three'];

  constructor(private _moviesList: MovielistService) {
    this.listItems = this._moviesList.getMovies();
  }

  ngOnInit() {
  }

}
