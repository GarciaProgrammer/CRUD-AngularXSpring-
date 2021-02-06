import { AddFilmesComponent } from './add-filmes/add-filmes.component';
import { ListFilmesComponent } from './list-filmes/list-filmes.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'filmes', component: ListFilmesComponent},
  {path: 'filmes/add', component: AddFilmesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
