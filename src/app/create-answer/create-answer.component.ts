import { Component, OnInit } from '@angular/core';
import { QuestionAnswer } from '../questionAnswer';
import { Question } from '../question';
import { Answer } from '../answer';
import { QuestionAnswerService } from '../question-answer.service';

@Component({
  selector: 'create-answer',
  templateUrl: './create-answer.component.html',
  styleUrls: ['./create-answer.component.css']
})
export class CreateAnswerComponent implements OnInit {
  questionAnswer: QuestionAnswer = new QuestionAnswer();
  showQuestion : boolean = false;
  constructor(private questionAnswerService : QuestionAnswerService ) { }

  ngOnInit() {
  }

  createQuestion() {
    this.showQuestion = true;
    let question : Question = new Question();
    question.category = 'Core JAVA';
    this.questionAnswer.question = question;
  }

  createParagraph() {
    let answer : Answer = new Answer();
    answer.type = 'text';
    this.questionAnswer.answer.push(answer);
  }

  createImage() {
    let answer : Answer = new Answer();
    answer.type = 'image';
    this.questionAnswer.answer.push(answer);
  }

  onSubmit() {
    console.log(this.questionAnswer);
    this.questionAnswerService.createQuestionWithAnswer(this.questionAnswer)
    .subscribe(data => console.log(data), error => console.log(error));

    ;
  }

}
