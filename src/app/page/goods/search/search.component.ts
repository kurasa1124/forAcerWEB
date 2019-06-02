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
