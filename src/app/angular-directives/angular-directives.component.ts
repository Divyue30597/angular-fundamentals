import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-directives',
  templateUrl: './angular-directives.component.html',
  styleUrls: ['./angular-directives.component.css']
})
export class AngularDirectivesComponent implements OnInit {
  courses1 = [1, 2];
  courses2 = [];
  courses3 = [1, 2, 3];
  viewMode = 'map';
  courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
    
  ];
  
  onAdd() {
    this.courses.push({id: 4, name:'course4'})
  }

  onRemove(course: any) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index,1);
  }

  onChange(course: any) {
    course.name = 'UPDATED';
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
