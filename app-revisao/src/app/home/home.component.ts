import { FilmeService } from './../service/filme.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cep:string = '';

  constructor(private filmesSrv: FilmeService) { }

  ngOnInit(): void {
  }

  getCEP() {
    this.filmesSrv.getCEPAPI(this.cep).subscribe(
      resp => console.log(resp)
    );
  }

}
