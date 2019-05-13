import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowAnswerComponent } from './show-answer/show-answer.component';
import { ShowQuestionComponent } from './show-question/show-question.component';

@NgModule({
   declarations: [
      AppComponent,
      ShowAnswerComponent,
      ShowQuestionComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
