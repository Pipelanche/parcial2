import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestauranteComponent } from './restaurante.component';
import { RestauranteListComponent } from '../restaurante-list/restaurante-list.component';
import { RestauranteDetailComponent } from '../restaurante-detail/restaurante-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [RestauranteListComponent, RestauranteDetailComponent],
  declarations: [RestauranteListComponent, RestauranteDetailComponent]
})
export class RestauranteModule { }
