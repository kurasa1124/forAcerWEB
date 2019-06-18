import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from "moment";
import * as chinese from "chinesegen"
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnDestroy, AfterViewInit {
  private _destroy$ = new Subject();
  public date: Date;

  constructor(private _active: ActivatedRoute, private _router: Router) {
    this._active.queryParams.pipe(takeUntil(this._destroy$)).subscribe(param => {
      if (!param.date || !moment(param.date).isValid()) this._router.navigate([], { queryParams: { date: moment().format("YYYY-MM-DD") } })
      this.date = param.date;
    });
  }

  ngAfterViewInit(): void {
    // this.fillFb();
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  public fillFb() {
    if (this.viewport.width > 960) return;
    let fb = document.getElementById("fb") as HTMLElement;
    let limit = document.querySelector(".limit") as HTMLElement;
    let vmin = this.viewport.width > this.viewport.height ? this.viewport.height : this.viewport.width;
    let scale = (limit.clientWidth - vmin * 0.08) / 500;
    fb.style.transform = `scale(${scale})`;
    fb.parentElement.style.paddingBottom = `${scale * vmin / 100}rem`
  }

  public cards = [
    { image: "http://pipsum.com/1100x1100.jpg", title: chinese({ count: 30, freq: true }).text, text: moment().format("YYYY/MM/DD") + "-" + moment().add(1, "month").format("YYYY/MM/DD") },
    { image: "http://pipsum.com/1200x1200.jpg", title: chinese({ count: 30, freq: true }).text, text: moment().format("YYYY/MM/DD") + "-" + moment().add(1, "month").format("YYYY/MM/DD") },
    { image: "http://pipsum.com/1300x1300.jpg", title: chinese({ count: 30, freq: true }).text, text: moment().format("YYYY/MM/DD") + "-" + moment().add(1, "month").format("YYYY/MM/DD") },
    { image: "http://pipsum.com/1400x1400.jpg", title: chinese({ count: 30, freq: true }).text, text: moment().format("YYYY/MM/DD") + "-" + moment().add(1, "month").format("YYYY/MM/DD") },
    { image: "http://pipsum.com/1500x1500.jpg", title: chinese({ count: 30, freq: true }).text, text: moment().format("YYYY/MM/DD") + "-" + moment().add(1, "month").format("YYYY/MM/DD") },
    { image: "http://pipsum.com/600x600.jpg", title: chinese({ count: 30, freq: true }).text, text: moment().format("YYYY/MM/DD") + "-" + moment().add(1, "month").format("YYYY/MM/DD") },
    { image: "http://pipsum.com/700x700.jpg", title: chinese({ count: 30, freq: true }).text, text: moment().format("YYYY/MM/DD") + "-" + moment().add(1, "month").format("YYYY/MM/DD") },
    { image: "http://pipsum.com/800x800.jpg", title: chinese({ count: 30, freq: true }).text, text: moment().format("YYYY/MM/DD") + "-" + moment().add(1, "month").format("YYYY/MM/DD") },
    { image: "http://pipsum.com/900x900.jpg", title: chinese({ count: 30, freq: true }).text, text: moment().format("YYYY/MM/DD") + "-" + moment().add(1, "month").format("YYYY/MM/DD") },
  ]

  public sports = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

  public isSingle(idx: number, length: number): boolean {
    if (this.viewport.width > 960) return (idx % 4 == 0) && (idx + 1 == length);
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

  public calcIframeSize(maxWidth: HTMLElement) {
    return `scale(${maxWidth.clientWidth / 500})`
  }


  public routerTo(url: string) {
    this._router.navigateByUrl(url)
  }
}
