import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowAnswerComponent } from './show-answer/show-answer.component';

const routes: Routes = [
    { path: '', redirectTo: 'answer', pathMatch: 'full' },
    { path: 'answer', component: ShowAnswerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
