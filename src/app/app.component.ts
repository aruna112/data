import { Component } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public name = "aruna";
  public myId = "testid";
  public greeting = "";
  public colors = ["red","blue","green","yellow"]
  
  

  constructor(){}

  ngOninit(){
  
}

greatuser(){
  return "hello" + this.name;
}
onClick(event: any){
  console.log(event)
  this.greeting = event.type; 
}
logMessage(value: any){
  console.log(value);
}
}