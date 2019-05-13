import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { QuestionService } from '../question.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show-question',
  templateUrl: './show-question.component.html',
  styleUrls: ['./show-question.component.css']
})
export class ShowQuestionComponent implements OnInit {

  questions: Question[];
  index: number;

  constructor(private questionService: QuestionService, private router: Router) { }

  showAnswer(question, index) {
    alert("hello alert" + question.categoryDesc);
    this.index = index;
    this.router.navigate(['/question/answer', question.id]);
  }

  ngOnInit() {
    this.showQuestion();
  }

  private showQuestion() {
    this.questionService.getQuestions()
        .subscribe(
            data => {
               console.log(data);
               this.questions = data;
            }
        );
}

}
