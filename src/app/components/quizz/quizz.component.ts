import { Component, OnInit } from '@angular/core';
import { QuestionData } from 'src/app/models/questionData';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {

  questionsData: QuestionData[] = [];
  selectedQuestion: number = 0;

  constructor(
    private service: QuestionsService
  ) { }

  ngOnInit(): void {
    this.getQuestions(5);
  }

  getQuestions(amount: number): void {
    this.service.getQuestions(amount).subscribe({
      next: (res) => {
        this.questionsData = this.createAnswers(res.results);
      }
    })
  }

  shuffleArray(array: string[]): string[] {
    const number = 0.5;
    return array.sort(() => Math.random() - number);
  }

  createAnswers(array: QuestionData[]): QuestionData[] {
    return array.map((question) => ({
      ...question,
      answers: this.shuffleArray([...question.incorrect_answers,
        question.correct_answer])
    }))
  }
}
