import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  switchMap,
  throwError,
} from 'rxjs';
import { Item, LivrosResultado } from 'src/app/models/book';
import { LivroVolumeInfo } from 'src/app/models/livro-volume-info';
import { LivroService } from 'src/app/services/livro.service';

const DEBOUNCE_TIME = 500;
@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css'],
})
export class ListaLivrosComponent implements OnChanges {
  campoBusca = new FormControl();

  mensagemError = '';

  livrosResultado: LivrosResultado;

  livrosEncontrados$ = this.campoBusca.valueChanges.pipe(
    debounceTime(DEBOUNCE_TIME),
    filter((value) => value.length >= 3),
    distinctUntilChanged(),
    switchMap((value) => this.service.buscar(value)),
    map((response) => (this.livrosResultado = response)),
    map((response) => response.items ?? []),
    map((items) => this.livrosResultadoParaLivros(items)),
    catchError((error) => {
      this.mensagemError = 'Ops, ocorreu um erro. Recarregue a aplicação';

      console.log({ error });
      return throwError(() => new Error(this.mensagemError));
    })
  );

  constructor(private service: LivroService) {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log({ livrosEncontrados: this.livrosEncontrados$ });
  }

  livrosResultadoParaLivros(items: Item[]): LivroVolumeInfo[] {
    return items.map((item) => new LivroVolumeInfo(item));
  }
}
