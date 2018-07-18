import { Component, OnInit, Input } from '@angular/core';
import {GemModel} from '../gem-model';

@Component({
  selector: 'app-gem',
  templateUrl: './gem.component.html',
  styleUrls: ['./gem.component.css']
})

export class GemComponent implements OnInit {
  @Input() gem: GemModel; //@Input() means that the information is supplied by the parent object (home.component.ts);
  
  //*** From tabs component.ts***

  tab: number; 
  setTab(selectedTab: number) {
    this.tab =selectedTab; //This function will cause whatever tab (1,2 or 3) to be set to blue, depending which one the user clicks on.
  };

  //*****
  
  constructor() { }
  
  ngOnInit() {
    if(this.gem.inventory == 0) {
      this.gem.name = "SOLD OUT!!!"; //Since the Hexagonal already started with "0", we mark it as sold out. We cannot mark it "Sold Out" in the add to cart because the button is diabled.
    }
  } 

  addToCart() {
    this.gem.inventory = this.gem.inventory-1;
    if(this.gem.inventory == 0) {
      this.gem.name = "SOLD OUT!!!"
    }
  }
}
