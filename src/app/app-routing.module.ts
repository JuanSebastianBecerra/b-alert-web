import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateConfigurationComponent } from './create-configuration/create-configuration.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'create-configuration', component: CreateConfigurationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }