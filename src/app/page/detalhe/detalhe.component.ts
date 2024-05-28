import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Video} from "../../domain/Video";
import {VideoObjectList} from "../../mocks/video.object-list";
import {PageTitleComponent} from "../../components/page-title/page-title.component";

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.scss'],
  standalone: true,
  imports: [
    PageTitleComponent
  ]
})
export class DetalheComponent implements OnInit{

  constructor(protected route: ActivatedRoute){

  }

  videoList: Array<Video> = VideoObjectList()

  ngOnInit(){
    this.route.params.subscribe(rez => {
        console.log(this.videoList.filter(video => video.id == rez['id']))
    })
  }

}
