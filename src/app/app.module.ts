import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgOptimizedImage} from "@angular/common";
import {NavmenuComponent} from "./components/navmenu/navmenu.component";
import {HomeComponent} from "./components/home/home.component";
import {PagenotfoundComponent} from "./components/pagenotfound/pagenotfound.component";
import {Pagina2Component} from "./components/pagina2/pagina2.component";
import {Pagina3Component} from "./components/pagina3/pagina3.component";
import {Pagina4Component} from "./components/pagina4/pagina4.component";
@NgModule({
  declarations: [
    AppComponent,
    NavmenuComponent,
    HomeComponent,
    Pagina2Component,
    Pagina3Component,
    Pagina4Component,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
