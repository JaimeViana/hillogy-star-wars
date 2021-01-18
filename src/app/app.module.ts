import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StarshipsListComponent } from './components/ships/starships-list/starships-list.component';
import { StarshipComponent } from './components/ships/starship/starship.component';
import { StarshipsFormComponent } from './components/ships/starships-form/starships-form.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OnlyLoggedUserGuardService } from '../app/guards/only-logged-user-guard.service';
import { NavbarMenuComponent } from '../app/components/navbar-menu/navbar-menu.component';
import { FakeComponent } from './components/fake/fake.component';


@NgModule({
  declarations: [
    AppComponent,
    StarshipsListComponent,
    StarshipComponent,
    StarshipsFormComponent,
    LoginComponent,
    RegisterComponent,
    NavbarMenuComponent,
    FakeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [OnlyLoggedUserGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
