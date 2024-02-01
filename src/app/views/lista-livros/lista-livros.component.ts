import { Component } from '@angular/core';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css'],
})
export class ListaLivrosComponent {
  listaLivros: [];

  campoBusca = '';

  constructor(private service: LivroService) {}

  buscarLivros() {
    this.service.buscar(this.campoBusca).subscribe({
      next: (response) => {
        console.log({ response });
      },
    });
  }
}
