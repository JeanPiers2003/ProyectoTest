import { Component } from '@angular/core';

interface Answers {
  question1: string;
  question2: string;
  question3: string;
  question4: string;
  question5: string;
  question6: string;
  question7: string;
  question8: string;
  question9: string;
  question10: string;
}1
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showResult = false;
  answers: Answers = {
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: '',
    question6: '',
    question7: '',
    question8: '',
    question9: '',
    question10: '',
};
  recommendedCareer = '';

  submitForm() {
    // Calcula la carrera recomendada según las respuestas del usuario
    if (this.answers.question1 === 'salud'
      && this.answers.question2 === 'analisis'&&
      this.answers.question3 === 'analisis')

    {this.recommendedCareer = 'Medicina';
    }
    else if (this.answers.question1 === 'ingenieria' &&
      this.answers.question2 === 'creatividad')

    {      this.recommendedCareer = 'Ingeniería en Diseño';
    } else if (this.answers.question1 === 'arte'
      && this.answers.question2 === 'comunicacion'
      && this.answers.question3 === 'comunicacion')
    {
      this.recommendedCareer = 'Comunicación Visual';
    }
    else {
      this.recommendedCareer = 'No se encontró una carrera recomendada';
    }

    this.showResult = true;
  }

  resetForm() {
    this.resetForm()
  }
}
