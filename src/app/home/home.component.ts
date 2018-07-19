import { Component, OnInit, Input } from '@angular/core';
import {GemModel} from '../gem-model';
import { removeDebugNodeFromIndex } from '../../../node_modules/@angular/core/src/debug/debug_node';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CartModel } from '../cart-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input()
  cart: CartModel;

  homeGems: GemModel[];
  
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    console.log(JSON.stringify(this.homeGems));
    
    this.httpClient.get('./assets/gems.json');

    this.httpClient.get<GemModel[]>('./assets/gems.JSON').subscribe((results) => {this.homeGems = results}) //this code will cause the program to not get the data if there are no users requesting it.
  }

}
