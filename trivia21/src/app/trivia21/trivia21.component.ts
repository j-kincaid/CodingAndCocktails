import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trivia21',
  templateUrl: './trivia21.component.html',
  styleUrls: ['./trivia21.component.css']
})
export class Trivia21Component implements OnInit {

  public questions = [{
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
    text: 'In a quarter-mile race, which animal can be expected to win?',
    answers: [
      {
        correct: false,
        text: 'Lion'
      },
      {
        correct: true,
        text: 'Pronghorn Antelope'
      },
      {
        correct: false,
        text: 'Quarter Horse'
      },
      {
        correct: false,
        text: 'Giraffe'
      }
    ]
  }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
