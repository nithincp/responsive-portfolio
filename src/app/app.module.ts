import { AboutMeComponent } from './about-me/about-me.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './/app-routing.module';
import { WorkComponent } from './work/work.component';
// import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
      MainComponent,
    AboutMeComponent,
    WorkComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule

 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
