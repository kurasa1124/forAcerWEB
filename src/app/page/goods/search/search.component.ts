import { Component } from '@angular/core';
import * as moment from 'moment';
import { ActivatedRoute, Router } from '@angular/router';
import * as chinese from "chinesegen"
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  public showCalendar1: boolean = false;
  public showCalendar2: boolean = false;
  public startDate: moment.Moment;
  public endDate: moment.Moment;
  public keyword: string;
  public search: string;

  constructor(private _active: ActivatedRoute, private _router: Router) {
    this._active.queryParams.subscribe(param => {
      this.search = param.keyword;
      this.keyword = this.search;
    })
  }

  public getDate(event) {
    return moment(event)
  }

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
    if (this.viewport.width > 480) return (idx % 3 == 0) && (idx + 1 == length);
    if (this.viewport.width > 320) return (idx % 2 == 0) && (idx + 1 == length);
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
