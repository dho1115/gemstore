import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@Angular/forms'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GemComponent } from './gem/gem.component';
import { WavePipe } from './wave.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { TabsComponent } from './tabs/tabs.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { RouterModule,Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
{path: 'home', component: HomeComponent},  
//{path: '', redirectTo: 'home'},
{path: '**', component: HomeComponent}, {path: 'cart', component: CartComponent},
{path: 'not-found', component: NotFoundComponent}
] //default behavior where every route goes to home.component.

//import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GemComponent,
    WavePipe,
    NavbarComponent,
    TabsComponent,
    ReviewsComponent,
    CartComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
    RouterModule.forRoot(
		  appRoutes,
          { enableTracing: true }
        )
           // <-- debugging purposes only
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
