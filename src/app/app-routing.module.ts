import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateConfigurationComponent } from './create-configuration/create-configuration.component';
import { LandingpageComponent } from './landingpage/landingpage.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'create-configuration', component: CreateConfigurationComponent },
  { path: 'landingpage', component: LandingpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }