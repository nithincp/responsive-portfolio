import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
