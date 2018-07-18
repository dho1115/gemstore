import { Component, OnInit } from '@angular/core';
import {GemModel} from '../gem-model';
import { removeDebugNodeFromIndex } from '../../../node_modules/@angular/core/src/debug/debug_node';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeGems: GemModel[] = [{
    id: 1,
    name: 'Dodecahedron',
    price: 35.95,
    description: 'Some of these gems have hidden qualities inside them that make it shine beyond their lustre. The Dodecahedron gem is one of them.',
    fullImagePath: './assets/gem-01.gif',
    inventory: 10,
    colors: ["red,","green","blue"],
    reviews: [{
      id: 1,
      createdate: 'Tuesday',
      author: 'joe@codingtemple.com',
      rating: 5,
      body: 'I love this product!'
  },
   {
       id: 2,
       createdate: 'Wednesday',
       author: 'ripalp@codingtemple.com',
       rating: 1,
       body: 'I hate this product'
   }]
}, {
  id: 2,
  name: 'Pentagonal',
  price: 15.95,
  description: 'Some of these PENTAGONAL GEMS have BEAUTIFUL qualities inside them that make it shine beyond their lustre. The PENTAGONAL gem is one of them.',
  fullImagePath: './assets/gem-02.gif',
  inventory: 7,
  colors: ["red","orange","blue"]
}, {
  id: 3,
  name: 'Hexagonal',
  price: 79.25,
  description: 'Some of these HEXAGONAL GEMSTONES have hidden qualities inside them that make it shine BEYOND THEIR YEARS! The HEXAGONAL gem is one of them.',
  fullImagePath: './assets/gem-05.gif',
  inventory: 0,
  colors: ["maroon","violet","Ivory"]
}];

  constructor() { }

  ngOnInit() {
  }

}
