import { Component, OnInit } from '@angular/core';
import * as chinese from "chinesegen"

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.scss']
})
export class PackageComponent {

  public cards = [
    { image: "http://pipsum.com/1100x1100.jpg", title: chinese({ count: 5, freq: true }).text, text: "尚未開始" },
    { image: "http://pipsum.com/1200x1200.jpg", title: chinese({ count: 5, freq: true }).text, text: "尚未開始" },
    { image: "http://pipsum.com/1300x1300.jpg", title: chinese({ count: 5, freq: true }).text, text: "尚未開始" },
    { image: "http://pipsum.com/1400x1400.jpg", title: chinese({ count: 5, freq: true }).text, text: "尚未開始" },
    { image: "http://pipsum.com/1500x1500.jpg", title: chinese({ count: 5, freq: true }).text, text: "尚未開始" },
    { image: "http://pipsum.com/600x600.jpg", title: chinese({ count: 5, freq: true }).text, text: "尚未開始" },
    { image: "http://pipsum.com/700x700.jpg", title: chinese({ count: 5, freq: true }).text, text: "尚未開始" },
    { image: "http://pipsum.com/800x800.jpg", title: chinese({ count: 5, freq: true }).text, text: "尚未開始" },
    { image: "http://pipsum.com/900x900.jpg", title: chinese({ count: 5, freq: true }).text, text: "尚未開始" },
  ]

}
