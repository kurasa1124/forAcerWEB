import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from "moment";
import * as chinese from "chinesegen"
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ResizeEvent } from 'angular-resizable-element';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnDestroy, AfterViewInit {
  @ViewChild("content") content: ElementRef;
  private _destroy$ = new Subject();
  public iframe: SafeResourceUrl;
  public date: Date;
  public newsTr = new Array(7).fill("").map((e, i) => i);
  public fake = chinese({ count: 100, freq: true }).text;
  constructor(private _active: ActivatedRoute, private _router: Router, private sanitizer: DomSanitizer) {
    this._active.queryParams.pipe(takeUntil(this._destroy$)).subscribe(param => {
      if (!param.date || !moment(param.date).isValid()) this._router.navigate([], { queryParams: { date: moment().format("YYYY-MM-DD") } })
      this.date = param.date;
    });
  }

  public get iframeWidth() {
    let parent = this.content.nativeElement as HTMLElement;
    let width = Math.round(parent.clientWidth / 2);
    if (width > 564) return 500;
    if (width < 300) return width * 2 - 64;
    return width - 64;
  }

  ngAfterViewInit(): void {
    this.iframe = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FGOSUBAR%2F&tabs=timeline&width=${this.iframeWidth}&height=350&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1778311828912618`)
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
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


  public resize() {
    this.iframe = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FGOSUBAR%2F&tabs=timeline&width=${this.iframeWidth}&height=350&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1778311828912618`)
  }

}
