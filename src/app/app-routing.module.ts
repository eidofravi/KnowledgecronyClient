import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowAnswerComponent } from './show-answer/show-answer.component';
import { ShowQuestionComponent } from './show-question/show-question.component';
import { CreateAnswerComponent } from './create-answer/create-answer.component';

const routes: Routes = [
    { path: '', redirectTo: 'answer', pathMatch: 'full' },
    { path: 'answer', component: ShowAnswerComponent},
    { path: 'addAnswer', component: CreateAnswerComponent},
    { path: 'question', component: ShowQuestionComponent,
      children: [
        { path: 'answer/:id', component: ShowAnswerComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
