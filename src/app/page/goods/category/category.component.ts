import { Component, OnInit } from '@angular/core';
import * as chinese from "chinesegen"
import * as moment from "moment";
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  public cards = [
    { image: "https://picsum.photos/1000?random", title: chinese({ count: 30, freq: true }).text, text: moment().format("YYYY/MM/DD") + "-" + moment().add(1, "month").format("YYYY/MM/DD") },
    { image: "https://picsum.photos/1000?random", title: chinese({ count: 30, freq: true }).text, text: moment().format("YYYY/MM/DD") + "-" + moment().add(1, "month").format("YYYY/MM/DD") },
    { image: "https://picsum.photos/1000?random", title: chinese({ count: 30, freq: true }).text, text: moment().format("YYYY/MM/DD") + "-" + moment().add(1, "month").format("YYYY/MM/DD") },
    { image: "https://picsum.photos/1000?random", title: chinese({ count: 30, freq: true }).text, text: moment().format("YYYY/MM/DD") + "-" + moment().add(1, "month").format("YYYY/MM/DD") },
    { image: "https://picsum.photos/1000?random", title: chinese({ count: 30, freq: true }).text, text: moment().format("YYYY/MM/DD") + "-" + moment().add(1, "month").format("YYYY/MM/DD") },
    { image: "https://picsum.photos/1000?random", title: chinese({ count: 30, freq: true }).text, text: moment().format("YYYY/MM/DD") + "-" + moment().add(1, "month").format("YYYY/MM/DD") },
    { image: "https://picsum.photos/1000?random", title: chinese({ count: 30, freq: true }).text, text: moment().format("YYYY/MM/DD") + "-" + moment().add(1, "month").format("YYYY/MM/DD") },
    { image: "https://picsum.photos/1000?random", title: chinese({ count: 30, freq: true }).text, text: moment().format("YYYY/MM/DD") + "-" + moment().add(1, "month").format("YYYY/MM/DD") },
    { image: "https://picsum.photos/1000?random", title: chinese({ count: 30, freq: true }).text, text: moment().format("YYYY/MM/DD") + "-" + moment().add(1, "month").format("YYYY/MM/DD") },
  ]

  public isSingle(idx: number, length: number): boolean {
    if (this.viewport.width > 960) return (idx % 4 == 0) && (idx + 1 == length);
    if (this.viewport.width > 480) return (idx % 2 == 0) && (idx + 1 == length);
    // if (this.viewport.width > 320) return (idx % 2 == 0) && (idx + 1 == length);
    return;
  }

  public get viewport() {
    let e = window as unknown as HTMLElement;
    let a = 'inner';
    if (!('innerWidth' in window)) {
      a = 'client';
      e = document.documentElement || document.body;
    }
    return { width: e[a + 'Width'], height: e[a + 'Height'] };
  }

}
