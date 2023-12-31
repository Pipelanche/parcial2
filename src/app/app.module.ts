import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestauranteListComponent } from './restaurante-list/restaurante-list.component';
import { RestauranteModule } from './restaurante/restaurante.module';
import { HttpClientModule } from '@angular/common/http';
import { RestauranteDetailComponent } from './restaurante-detail/restaurante-detail.component';

@NgModule({
  declarations: [		
    AppComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RestauranteModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
