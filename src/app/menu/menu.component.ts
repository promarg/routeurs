import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { UserProfilComponent } from '../user-profil/user-profil.component';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor( ) { }

  ngOnInit() {
  }

}
const ROUTES: Routes=[
  {path:'sign-up', component: SignUpComponent},
  {path: 'user', component: UserProfilComponent},
  {path:'', component: UserProfilComponent}
]

export{ROUTES};