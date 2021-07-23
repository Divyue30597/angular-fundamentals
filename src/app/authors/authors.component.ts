import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'authors', // decoratives - Selectors
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  // creating a field to hold the list of authors
  authors;
  
  // injecting this service (AuthorsService) into 
  // the constructor of authors component 
  // service: AuthorsService means adding a service of type AuthorsService
  constructor(service: AuthorsService) { 
    // Initializing the authors here to get authors from AuthorsService
    this.authors = service.getAuthors();
  }

  //Interface
  ngOnInit(): void {
  }

}
