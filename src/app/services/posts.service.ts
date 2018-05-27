import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private _http: HttpClient
  ) { }

  getPosts ( topic: string ) {

    return this._http.get(`https://www.reddit.com/r/${topic}.json`);

  }

}
