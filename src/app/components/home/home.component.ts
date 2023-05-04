import { Component } from '@angular/core';

interface Answers {
  question1: string;
  question2: string;
  // Agrega más preguntas según sea necesario
}
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
};
  recommendedCareer = '';

  submitForm() {
    // Calcula la carrera recomendada según las respuestas del usuario
    if (this.answers.question1 === 'salud' && this.answers.question2 === 'analisis') {
      this.recommendedCareer = 'Medicina';
    } else if (this.answers.question1 === 'ingenieria' && this.answers.question2 === 'creatividad') {
      this.recommendedCareer = 'Ingeniería en Diseño';
    } else if (this.answers.question1 === 'arte' && this.answers.question2 === 'comunicacion') {
      this.recommendedCareer = 'Comunicación Visual';
    } else {
      this.recommendedCareer = 'No se encontró una carrera recomendada';
    }

    this.showResult = true;
  }

  resetForm() {
    this.resetForm()
  }
}
