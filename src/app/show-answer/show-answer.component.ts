import { Component, OnInit } from '@angular/core';
import { Answer } from '../answer';
import { AnswerService } from '../answer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'show-answer',
    templateUrl: './show-answer.component.html',
    styleUrls: ['./show-answer.component.css']
})
export class ShowAnswerComponent implements OnInit {

    answers: Answer[];

    constructor(private answerService: AnswerService,
      private route: ActivatedRoute) {

      }

    ngOnInit() {
      this.route.paramMap.subscribe(params => {
         this.createAnswer(Number(params.get('id')));
      })

    }

    private createAnswer(id : number) {
        this.answerService.getAnswer(id)
            .subscribe(
                data => {
                   console.log(data);
                    this.answers = data;
                    //this.completeAnswer.answer = 'data:image/jpeg;base64,' + this.completeAnswer.answer;
                }
            );
    }

}
