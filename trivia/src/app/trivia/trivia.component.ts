import { Component, OnInit } from '@angular/core';
import { Question } from '../question';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css']
})
export class TriviaComponent implements OnInit {
  public questions: Question[] = [{
    text: 'Florence Nightingale became known as \"the Lady With the Lamp\" during which war?',
    answers: [{
      correct: false,
      text: 'American Civil War'
    },
    {
      correct: false,
      text: 'World War I'
    },
    {
      correct: true,
      text: 'Crimean War'
    },
    {
      correct: false,
      text: 'World War II'
    }
    ]
  },
  {
    text: 'Whose experiment overturned the theory of parity in physics?',
    answers: [
      {
        correct: false,
        text: 'Marie Curie'
      },
      {
        correct: false,
        text: 'Rosalind Franklin'
      },
      {
        correct: true,
        text: 'Chien-Shiung Wu'
      },
      {
        correct: false,
        text: 'Katherine Johnson'
      }
    ]
  },
  {
    text: 'Who was named the first woman Treasury Secretary of the United States?',
    answers: [
      {
        correct: false,
        text: 'Hillary Rodham Clinton'
      },
      {
        correct: true,
        text: 'Janet Yellen'
      },
      {
        correct: false,
        text: 'Madeleine Albright'
      },
      {
        correct: false,
        text: 'Ruth Bader Ginsberg'
      }
    ]
  }
  ];
  public correctAnswers: 0;
  public onQuestionAnswered(isCorrect: boolean): void {
    if (isCorrect){
    this.correctAnswers++
    
    } 
  }

  constructor() { }

  ngOnInit(): void {
  }

}
