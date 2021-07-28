import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsService } from './authors.service';
import { AuthorsComponent } from './authors/authors.component';
import { CoursesService } from './courses.service';
import { CoursesComponent } from './courses/courses.component';
import { SummaryPipe } from './summary.pipe';
import { FavouriteComponent } from './favourite/favourite.component';
import { TitleCasingTaskComponent } from './title-casing-task/title-casing-task.component';
import { TitleCasePipe } from './title-case.pipe';
import { AngularDirectivesComponent } from './angular-directives/angular-directives.component';
import { ZippyComponent } from './zippy/zippy.component';
import { TemplateDrivenFormsContactComponent } from './template-driven-forms-contact/template-driven-forms-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    CoursesComponent,
    FavouriteComponent,
    SummaryPipe,
    TitleCasingTaskComponent,
    TitleCasePipe,
    AngularDirectivesComponent,
    ZippyComponent,
    TemplateDrivenFormsContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    // registering a new service here in provider so angular 
    // can provide that as a dependency while instantiating conponents
    AuthorsService,
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
