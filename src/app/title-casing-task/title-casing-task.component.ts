import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-casing-task',
  templateUrl: './title-casing-task.component.html',
  styleUrls: ['./title-casing-task.component.css']
})
export class TitleCasingTaskComponent implements OnInit {
  title!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
