import { Component } from '@angular/core';
import {TopMenuComponent} from "../../components/top-menu/top-menu.component";
import {VideoListComponent} from "../../components/video-list/video-list.component";
import {AppModule} from "../../app.module";
import {PageTitleComponent} from "../../components/page-title/page-title.component";
import {VideoObjectList} from "../../mocks/video.object-list";

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.scss'],
  imports: [
    TopMenuComponent,
    VideoListComponent,
    PageTitleComponent
  ],
  standalone: true
})
export class PaginaInicialComponent {
    menuItems = ['Séries', 'Filmes', 'Documentários', 'Animes', 'Jogos']

    videoList = VideoObjectList()
}
