import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  // a method that simply returns an array with authors
  getAuthors(){
    return ["author1","author2","author3"];
  }

  constructor() { 

  }
}
