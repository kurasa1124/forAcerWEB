import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import scrollSnapPolyfill from 'css-scroll-snap-polyfill'
import * as smoothscroll from 'smoothscroll-polyfill';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  public sliders: string[] = ["slider1.jpg", "slider2.jpg", "slider3.jpg"];
  public active = 0;
  public timer;
  @ViewChild("carousel") public carousel: ElementRef;
  constructor() { }

  ngOnInit() {
    scrollSnapPolyfill();
    smoothscroll.polyfill();
    this.startCarousel();
  }
  ngOnDestroy(): void {
    this.stopCarousel()
  }
  public startCarousel() {
    this.timer = setInterval(() => this.changeActive(this.active + 1), 3000)
  }
  public stopCarousel() {
    clearInterval(this.timer)
  }
  public changeActive(num: number) {
    if (num >= this.sliders.length) num = 0;
    if (num < 0) num = this.sliders.length - 1;
    let carousel = this.carousel.nativeElement
    this.active = num;
    carousel.scrollTo({
      behavior: "smooth",
      top: 0,
      left: screen.width * num
    });
  }

}
