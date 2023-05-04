import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgOptimizedImage} from "@angular/common";
import {NavmenuComponent} from "./components/navmenu/navmenu.component";
import {HomeComponent} from "./components/home/home.component";
import {PagenotfoundComponent} from "./components/pagenotfound/pagenotfound.component";
@NgModule({
  declarations: [
    AppComponent,
    NavmenuComponent,
    HomeComponent,
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
