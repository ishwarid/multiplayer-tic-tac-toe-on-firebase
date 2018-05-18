import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }
  buttonClick = function(val){
    console.log(val);
    
    console.log("cell value clikced is "+val);
      
    }
  ngOnInit() {
  }

}
