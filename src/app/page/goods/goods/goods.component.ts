import { Component, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnDestroy {
  private _destroy$ = new Subject();
  public title: string;
  public titles = {
    package: "套票商品",
    others: "其他",
    search: "搜尋商品",
    review: "精彩回顧"
  }
  constructor(private _router: Router, private _active: ActivatedRoute) {
    this._active.queryParams
      .pipe(takeUntil(this._destroy$))
      .subscribe(param => {
        this.title = param.title;
      })
    this._router.events.pipe(
      takeUntil(this._destroy$),
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      let path = event.url.split("/")[2].split("?")[0];
      if (path == "category") return;
      this.title = this.titles[path];
    });
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

}
