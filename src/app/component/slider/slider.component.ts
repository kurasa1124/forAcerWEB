import { Component, OnInit } from '@angular/core';
import scrollSnapPolyfill from 'css-scroll-snap-polyfill'
import * as smoothscroll from 'smoothscroll-polyfill';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  public sliders: string[] = ["slider1.jpg", "slider2.jpg"];
  public active = 0;
  constructor() { }

  ngOnInit() {
    scrollSnapPolyfill();
    smoothscroll.polyfill();
  }

  public changeActive(num: number, element: HTMLElement) {
    element.scrollBy({
      behavior: "smooth",
      top: 0,
      left: screen.width * num
    });
    this.active = num;
  }

}
