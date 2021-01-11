import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StarshipsListComponent } from './ships/starships-list/starships-list.component';
import { StarshipComponent } from './ships/starship/starship.component';
import { StarshipsFormComponent } from './ships/starships-form/starships-form.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    StarshipsListComponent,
    StarshipComponent,
    StarshipsFormComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
