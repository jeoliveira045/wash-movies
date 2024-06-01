import {Component, Input, OnInit} from '@angular/core';
import {NgFor} from "@angular/common";

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  standalone: true,
  imports: [
    NgFor
  ]
})
export class RatingComponent implements OnInit {

  @Input() ratingValue?: number

  starArray: Array<string> = new Array<string>()

  constructor() {
    this.ratingValue = 0
  }

  ngOnInit(){
    if(this.ratingValue){
      for(let star = 0; star < this.ratingValue; star++){
        this.starArray.push('star')
      }
    }

  }

}
