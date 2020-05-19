import { Injectable } from '@angular/core';
import { Evento } from '../interfaces/evento';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  constructor() { }

  getEventos(): Evento[] {
    return [
      {
        title: 'Evento de prueba',
        description: 'Nos lo pasaremos genial',
        date: '2021-03-15',
        image: 'assets/evento1.jpg',
        price: 23.95
      }, {
        title: 'Evento de prueba 2',
        description: 'Este es peor',
        date: '2021-08-14',
        image: 'assets/evento2.jpg',
        price: 15.5
      }
    ];
  }
}
