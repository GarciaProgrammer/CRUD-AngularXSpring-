import { Observable } from 'rxjs';
import { Filme } from './../interface/filme';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  urlApiFilmes:string = "http://localhost:8080/filmes";

  constructor(private http: HttpClient) { }

  getCEPAPI(cep: string) {
    const urlApi: string = "https://viacep.com.br/ws/" + cep + "/json/";
    return this.http.get(urlApi);
  }

  addFilme(filme: Filme) {
    const url: string = "http://localhost:8080/filmes";
    return this.http.post(url, filme);
  }

  getFilmes(): Observable<any> {
    return this.http.get(this.urlApiFilmes);
  }

  updateFilme(id:string, filme: Filme) {
    const urlUpdate = this.urlApiFilmes + '/' + id;
    return this.http.put(urlUpdate, filme);
  }

  deleteFilme(id?: string) {
    const urlDelete = this.urlApiFilmes + '/' + id;
    return this.http.delete(urlDelete);
  }
}
