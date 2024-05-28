import {Component, Input, Output} from '@angular/core';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss'],
  standalone: true
})
export class PageTitleComponent {
    @Input() titlePhoto?: string;
}
