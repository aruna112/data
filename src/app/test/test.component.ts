import { createOfflineCompileUrlResolver } from '@angular/compiler';
import { Component, Input, OnInit, Output } from '@angular/core';
import { TestService } from '../test.service';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  [x: string]: any;
  topics = ['angular', 'react', 'vue'];
  
  

  constructor() { }
  ngOnInit(): void {
   
    
  }
  

  onsubmit(){
    console.log(this.topics);
  }
}
