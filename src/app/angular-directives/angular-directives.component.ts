import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
  subjects!: any; 

  courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
  ];

  loadSubjects(){
    this.subjects = [
      {id: 1, name:'subject1'},
      {id: 2, name:'subject2'},
      {id: 3, name:'subject3'},
    ];
  }
  canSave: boolean = false;
  task1 = {
    title: 'Review Application',
    assignee: {
      name: 'John'
    }
  }

  task2 = {
    title: 'Review Application',
    assignee: {
      name: null
    }
  }
  

  @Input('isFavourite')
  isSelected!: boolean;
  // isFavourite: boolean = false;
  // Attaching an alias to property is the best approach since we 
  // dont have to make any changes while reusing the property. 
  // isFavourite is changed to isSelected
  @Output('change')
  click = new EventEmitter();

  onClick() {
    this.isSelected = !this.isSelected;
    this.click.emit({newValue: this.isSelected});
  }

  trackCourses(index, subject){
    return subject ? subject.id : undefined;
  }

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
