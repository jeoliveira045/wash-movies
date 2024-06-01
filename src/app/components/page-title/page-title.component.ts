import {Component, Input, Output} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss'],
  standalone: true,
  imports: [
    RouterLink
  ]
})
export class PageTitleComponent {
    @Input() titlePhoto?: string;
}
