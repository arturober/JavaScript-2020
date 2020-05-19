import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Evento } from '../interfaces/evento';

@Component({
  selector: 'evento-add',
  templateUrl: './evento-add.component.html',
  styleUrls: ['./evento-add.component.css']
})
export class EventoAddComponent implements OnInit {
  newEvento: Evento;
  nombreArchivo: string;
  @Output() add = new EventEmitter<Evento>();

  constructor() { }

  ngOnInit(): void {
    this.resetFormulario();
  }

  addEvento() {
    this.add.emit(this.newEvento);
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
