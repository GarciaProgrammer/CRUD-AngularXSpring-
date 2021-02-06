import { Filme } from './../interface/filme';
import { FilmeService } from './../service/filme.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-filmes',
  templateUrl: './add-filmes.component.html',
  styleUrls: ['./add-filmes.component.scss']
})
export class AddFilmesComponent implements OnInit {

  filme: Filme = {};

  constructor(private filmService: FilmeService,
              private router: Router) { }

  ngOnInit(): void {
  }

  salvar(){
    this.filmService.addFilme(this.filme).subscribe(
      (filme: Filme) => {
          alert("Filme " + filme.titulo + " Salvo com Sucesso!");
          this.router.navigate(["/filmes"]);
      },
      error => {
        console.error(error);
      }
    )
  }

}
