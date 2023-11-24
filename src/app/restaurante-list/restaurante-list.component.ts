import { Component, OnInit } from '@angular/core';
import { RestauranteService } from '../restaurante/restaurante.service';
import { Restaurante } from '../restaurante/restaurante';

@Component({
  selector: 'app-restaurante-list',
  templateUrl: './restaurante-list.component.html',
  styleUrls: ['./restaurante-list.component.css']
})
export class RestauranteListComponent implements OnInit {

  restaurantes: Array<Restaurante> = [];
  hrRestaurant!: Restaurante;
  bestRating: number = 0.0;
  selected: boolean = false;
  selectedRestaurante!: Restaurante;

  constructor(private restauranteService: RestauranteService) { }

  getRestaurantes(): void {
    this.restauranteService.getRestaurantes().subscribe((restaurantes) => {
      this.restaurantes = restaurantes;
      this.restaurantes.forEach((restaurante) => {
        if (restaurante.rating > this.bestRating) {
          this.bestRating = restaurante.rating;
          this.hrRestaurant = restaurante;
        }
      });
  });
  }

  onSelected(restaurante: Restaurante) {
    this.selected = true;
    this.selectedRestaurante = restaurante;
  }

  ngOnInit() {
    this.getRestaurantes();
  }

}
