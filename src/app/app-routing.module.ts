import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { StarshipComponent } from './components/ships/starship/starship.component';
import { StarshipsListComponent } from './components/ships/starships-list/starships-list.component';
import { StarshipsFormComponent } from './components/ships/starships-form/starships-form.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/ships' },
  { path: 'ships', component: StarshipsListComponent },
  { path: 'ships/new', component: StarshipsFormComponent },
  { path: 'ships/:shipId', component: StarshipComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '/ships' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }