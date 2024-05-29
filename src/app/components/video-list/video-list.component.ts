import {Component, Input} from '@angular/core';
import {NgFor} from "@angular/common";
import {Video} from "../../domain/Video";
import {VideoObjectList} from "../../mocks/video.object-list";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss'],
  imports: [NgFor, RouterLink],
  standalone: true
})
export class VideoListComponent {

  @Input() videoList?: Array<Video>;

}
