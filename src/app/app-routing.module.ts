import { ContactComponent } from './contact/contact.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { RouterModule, Routes } from '@angular/router';
import { WorkComponent } from './work/work.component';




const appRoutes: Routes = [


  { path: '', component: MainComponent},


  { path: '', component: HeaderComponent, outlet: 'header'  },

  { path: 'aboutMe', component: AboutMeComponent },


  { path: 'work', component: WorkComponent },

  { path: 'contact', component: ContactComponent },





];

@NgModule({
  imports: [
     RouterModule.forRoot(
      appRoutes)
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
