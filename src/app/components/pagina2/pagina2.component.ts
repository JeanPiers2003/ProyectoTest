import {Component, OnInit} from '@angular/core';
import {Router, withNavigationErrorHandler} from "@angular/router";

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.css']
})
export class Pagina2Component {
  constructor(private router:Router) {
  }
  ngOnit(){

  }
  navegar() {
  this.router.navigate(['/pagina2']);
  }
}
