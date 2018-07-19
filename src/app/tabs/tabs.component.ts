import { Component, OnInit, Input } from '@angular/core';
import {GemModel} from '../gem-model'

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  @Input() 
  gem: GemModel;
  tab: number; 
  setTab(selectedTab: number) {
    this.tab =selectedTab; //This function will cause whatever tab (1,2 or 3) to be set to blue, depending which one the user clicks on.
  };

  constructor() { }

  ngOnInit() {
    this.tab = 1; //This will set the 1st tab (Description) to be set to blue as soon as the page renders on the screen.
  }

}
