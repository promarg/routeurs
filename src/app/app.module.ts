import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfilComponent } from './user-profil/user-profil.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule, } from '@angular/router';
import { ROUTES } from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    UserProfilComponent,
    SignUpComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
