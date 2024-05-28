import {Component, Input} from '@angular/core';
import {NgFor} from "@angular/common";
import {Video} from "../../domain/Video";
import {VideoObjectList} from "../../mocks/video.object-list";

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss'],
  imports:[NgFor],
  standalone: true
})
export class VideoListComponent {

  @Input() videoList?: Array<Video>;

}
