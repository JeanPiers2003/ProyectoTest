import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {Pagina2Component} from "./components/pagina2/pagina2.component";
import {Pagina3Component} from "./components/pagina3/pagina3.component";
import {Pagina4Component} from "./components/pagina4/pagina4.component";

import {HomeComponent} from "./components/home/home.component";
import {PagenotfoundComponent} from "./components/pagenotfound/pagenotfound.component";
//rutas de navegacion
const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch : 'full'},
  {path: 'home',component: HomeComponent},
  {path: 'pagina2',component: Pagina2Component},
  {path: 'pagina3',component: Pagina3Component},
  {path: 'pagina4',component: Pagina4Component},
  {path: '**',component: PagenotfoundComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
