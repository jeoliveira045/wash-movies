import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Video} from "../../domain/Video";
import {VideoObjectList} from "../../mocks/video.object-list";
import {PageTitleComponent} from "../../components/page-title/page-title.component";
import {TopMenuComponent} from "../../components/top-menu/top-menu.component";

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.scss'],
  standalone: true,
  imports: [
    PageTitleComponent,
    TopMenuComponent
  ]
})
export class DetalheComponent implements OnInit{

  constructor(protected route: ActivatedRoute){

  }

  menuItems = ['Séries', 'Filmes', 'Documentários', 'Animes', 'Jogos']

  videoList: Array<Video> = VideoObjectList()

  videoDetail?: Video

  ngOnInit(){
    this.route.params.subscribe(rez => {
        this.videoDetail = this.videoList.find(video => video.id == rez['id'])
    })
  }

}
