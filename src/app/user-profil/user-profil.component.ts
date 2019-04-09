import { Component, OnInit, } from '@angular/core';



@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.css']
})
export class UserProfilComponent implements OnInit {

Person = {
  name: 'Doe',
  firstName: 'John',
  age: 25,
  quote: '',
  photo: 'https://randomuser.me/api/portraits/lego/2.jpg'
};

age = false

displayAge(age){
  if( this.age === true){
    return this.age = false
  }else{
    return this.age = true
  };
}



constructor() { 
}


  ngOnInit() {
  }


}
  
