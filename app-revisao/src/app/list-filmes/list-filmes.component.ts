import { Filme } from './../interface/filme';
import { FilmeService } from './../service/filme.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-filmes',
  templateUrl: './list-filmes.component.html',
  styleUrls: ['./list-filmes.component.scss']
})
export class ListFilmesComponent implements OnInit {

  filmes: Observable<Filme[]> = new Observable();

  constructor(private filmService: FilmeService) { }

  ngOnInit(): void {
    this.getListFilmes();
  }

  getListFilmes() {
    this.filmes = this.filmService.getFilmes();
  }

  delete(id?: string) {
    this.filmService.deleteFilme(id).subscribe(
      (resp) => {
        alert("Filme Apagado!!");
        this.getListFilmes();
      }
    )
  }

}
