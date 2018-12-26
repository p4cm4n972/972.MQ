import { Component, OnInit, Input } from '@angular/core';
import { Rubrique } from '../main-nav/model';

@Component({
  selector: 'app-main-carousel',
  templateUrl: './main-carousel.component.html',
  styleUrls: ['./main-carousel.component.scss']
})
export class MainCarouselComponent implements OnInit {

  @Input() rubriquesList: Rubrique;

  constructor() { }

  ngOnInit() {
  }

}
