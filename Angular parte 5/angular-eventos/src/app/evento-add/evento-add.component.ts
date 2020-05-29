import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Evento } from '../interfaces/evento';
import { EventosService } from '../services/eventos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'evento-add',
  templateUrl: './evento-add.component.html',
  styleUrls: ['./evento-add.component.css']
})
export class EventoAddComponent implements OnInit {
  newEvento: Evento;
  nombreArchivo: string;
  @Output() add = new EventEmitter<Evento>();

  constructor(private eventosService: EventosService, private router: Router) { }

  ngOnInit(): void {
    this.resetFormulario();
  }

  addEvento() {
    this.eventosService.addEvento(this.newEvento).subscribe(
      evento => this.router.navigate(['/eventos'])
    );
  }

  resetFormulario() {
    this.newEvento = {
      name: '',
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
