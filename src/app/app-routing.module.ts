import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { StarshipComponent } from './components/ships/starship/starship.component';
import { StarshipsListComponent } from './components/ships/starships-list/starships-list.component';
import { StarshipsFormComponent } from './components/ships/starships-form/starships-form.component';
import { OnlyLoggedUserGuardService } from './guards/only-logged-user-guard.service';
import { FakeComponent } from './components/fake/fake.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/ships' },
  { path: 'ships', component: StarshipsListComponent, canActivate: [OnlyLoggedUserGuardService] },
  { path: 'ships/new', component: StarshipsFormComponent, canActivate: [OnlyLoggedUserGuardService] },
  { path: 'ships/:shipId', component: StarshipComponent, canActivate: [OnlyLoggedUserGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'fake', component: FakeComponent },
  { path: '**', redirectTo: '/ships' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }