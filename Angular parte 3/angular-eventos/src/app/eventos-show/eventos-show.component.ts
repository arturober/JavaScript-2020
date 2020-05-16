import { Component, OnInit } from '@angular/core';
import { Evento } from '../interfaces/evento';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'eventos-show',
  templateUrl: './eventos-show.component.html',
  styleUrls: ['./eventos-show.component.css']
})
export class EventosShowComponent implements OnInit {
  eventos: Evento[];
  newEvento: Evento;
  search = '';
  nombreArchivo: string;

  constructor() { }

  ngOnInit(): void {
    this.resetFormulario();
    this.eventos = [
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

  orderDate() {
    this.eventos.sort((e1, e2) => e1.date.localeCompare(e2.date));
    this.eventos = [...this.eventos];
  }

  orderPrice() {
    this.eventos.sort((e1, e2) => e1.price - e2.price);
    this.eventos = [...this.eventos];
  }

  addEvento() {
    this.eventos.push({...this.newEvento});
    this.eventos = [...this.eventos];
    this.resetFormulario();
  }

  private resetFormulario() {
    this.newEvento = {
      title: '',
      description: '',
      image: '',
      price: 0,
      date: ''
    };
    this.nombreArchivo = '';
  }

  changeImage(fileInput: HTMLInputElement) {
    if (!fileInput.files || fileInput.files.length === 0) { return; }
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', e => {
      this.newEvento.image = reader.result as string;
    });
  }
}
