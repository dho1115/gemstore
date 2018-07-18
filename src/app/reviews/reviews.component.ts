import { Component, OnInit, Input } from '@angular/core';
import {GemModel} from '../gem-model';
import { TouchSequence } from '../../../node_modules/@types/selenium-webdriver';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  @Input() 
  gem: GemModel;
  
  constructor() { }
 
  ngOnInit() {
    
    }
  
    submitClicked() {    
      if(!this.gem.reviews) {
        this.gem.reviews = [];
      }
    } 
  
    this.gem.reviews.push(this.newReview);
      this.newReview = {
        id: -1,
        createddate: "",
        rating: 5,
        author: "",
        body: ""
      }
  
}
