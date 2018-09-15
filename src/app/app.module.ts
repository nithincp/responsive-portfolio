import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { AboutMeComponent } from './about-me/about-me.component';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
