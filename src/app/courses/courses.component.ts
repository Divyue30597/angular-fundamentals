import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses;
  imageUrl: string = "https://c4.wallpaperflare.com/wallpaper/214/187/691/video-games-video-game-art-ultrawide-ultra-wide-need-for-speed-heat-hd-wallpaper-preview.jpg";
  colspan: number = 2;
  isActive = true;
  email: any;
  course = {
    title: "The complete Angular Course",
    rating: 4.9745,
    student: 300000,
    price: 455,
    releaseDate: new Date(2016, 3, 1)
  }
  text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  onSave($event: any) {
    // To stop DOM bubble up, we use $event.stopPropagation so that 
    // So when we call this, this event will not bubble up, in other words
    // it's not going to hit the second handler.
    $event.stopPropagation();
    console.log("Button was clicked", $event);
  }

  onDivClick() {
    console.log("Div was clicked");
  }

  onKeyUp(name: any) {
    // we want to submit this form only if the user presses enter.
    console.log(name);
  }

  onKeyUp2() {
    console.log(this.email);
  }

  ngOnInit(): void {
  }

}
