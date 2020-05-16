import { Pipe, PipeTransform } from '@angular/core';
import { Evento } from '../interfaces/evento';

@Pipe({
  name: 'eventosFilter'
})
export class EventosFilterPipe implements PipeTransform {

  transform(eventos: Evento[], search: string): Evento[] {
    if (!search) {
      return eventos;
    }

    return eventos.filter(e =>
      e.title.toLowerCase().includes(search.toLowerCase()) ||
      e.description.toLowerCase().includes(search.toLowerCase())
    );
  }

}
