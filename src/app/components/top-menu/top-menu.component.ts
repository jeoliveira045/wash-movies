import {Component, Input} from '@angular/core';
import {NgFor} from "@angular/common";

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss'],
  imports:[NgFor],
  standalone: true
})
export class TopMenuComponent {

    @Input() topMenuItems?: Array<any>

  constructor() {

  }
}
