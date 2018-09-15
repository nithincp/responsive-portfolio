import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { HeaderComponent } from './header/header.component';
import { ModuleWithProviders } from '@angular/core';




const appRoutes: Routes = [

  // {path: '', component: HeaderComponent}
   { path: '', component: MainComponent}
  // { path: 'aboutMe', component: AboutMeComponent }



];

// const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

@NgModule({
  imports: [
  RouterModule.forRoot(appRoutes)
  ],

    exports: [RouterModule]

})
export class AppRoutingModule { }
