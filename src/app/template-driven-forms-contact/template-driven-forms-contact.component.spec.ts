import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenFormsContactComponent } from './template-driven-forms-contact.component';

describe('TemplateDrivenFormsContactComponent', () => {
  let component: TemplateDrivenFormsContactComponent;
  let fixture: ComponentFixture<TemplateDrivenFormsContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateDrivenFormsContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenFormsContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
