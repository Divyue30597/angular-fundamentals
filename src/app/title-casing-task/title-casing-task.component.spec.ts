import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleCasingTaskComponent } from './title-casing-task.component';

describe('TitleCasingTaskComponent', () => {
  let component: TitleCasingTaskComponent;
  let fixture: ComponentFixture<TitleCasingTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleCasingTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleCasingTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
