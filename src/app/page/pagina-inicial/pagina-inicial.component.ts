import { Component } from '@angular/core';
import {TopMenuComponent} from "../../components/top-menu/top-menu.component";

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.scss'],
  imports: [
    TopMenuComponent
  ],
  standalone: true
})
export class PaginaInicialComponent {
    menuItems = ['Séries', 'Filmes', 'Documentários']
}
