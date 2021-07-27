import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  @Input('isFavourite')
  isSelected: boolean = false;
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
  constructor() { }

  ngOnInit(): void {
  }

}

export interface FavouriteChangesEventArgs {
  newValue: Boolean;
}

