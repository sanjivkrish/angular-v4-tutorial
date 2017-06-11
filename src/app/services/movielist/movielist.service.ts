import { Injectable } from '@angular/core';

@Injectable()
export class MovielistService {
  movieList: string[] = ['Batman', 'BvS', 'Wonder Woman'];

  constructor() { }

  getMovies() {
    return this.movieList;
  }

}
