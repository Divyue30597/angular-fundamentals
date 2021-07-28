import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-forms-contact',
  templateUrl: './template-driven-forms-contact.component.html',
  styleUrls: ['./template-driven-forms-contact.component.css']
})
export class TemplateDrivenFormsContactComponent implements OnInit {

  onLog(x){
    console.log(x);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
