import { Component, OnInit } from '@angular/core';
import { Answer } from '../answer';
import { AnswerService } from '../answer.service';

@Component({
    selector: 'show-answer',
    templateUrl: './show-answer.component.html',
    styleUrls: ['./show-answer.component.css']
})
export class ShowAnswerComponent implements OnInit {

    answers: Answer[];

    constructor(private answerService: AnswerService) { }

    ngOnInit() {
        this.createAnswer();
    }

    private createAnswer() {
        this.answerService.getAnswer(1)
            .subscribe(
                data => {
                   console.log(data);
                    this.answers = data;
                    //this.completeAnswer.answer = 'data:image/jpeg;base64,' + this.completeAnswer.answer;
                }
            );
    }

}
