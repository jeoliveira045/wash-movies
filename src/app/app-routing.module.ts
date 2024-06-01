import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PaginaInicialComponent} from "./page/pagina-inicial/pagina-inicial.component";
import {VideoListComponent} from "./components/video-list/video-list.component";
import {DetalheComponent} from "./page/detalhe/detalhe.component";
import {RatingComponent} from "./components/rating/rating.component";

const routes: Routes = [
  {
    path: 'pagina-inicial',
    component: PaginaInicialComponent
  },
  {
    path:'detalhes/:id',
    component: DetalheComponent
  },
  {
    path:'star',
    component: RatingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
