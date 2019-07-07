import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { take, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnDestroy {
  private _destroy = new Subject();
  public isPackage = false;
  public isQuick = false;
  public isComplete = false;
  constructor(private _router: Router) {
    this._router.events.pipe(takeUntil(this._destroy)).subscribe(event => {
      if (!(event instanceof ActivationEnd)) return
      if (event.snapshot.routeConfig.path == "shopping-cart") return
      this.isPackage = event.snapshot.routeConfig.path == "package";
      this.isQuick = event.snapshot.routeConfig.path == "quick-code";
      this.isComplete = event.snapshot.routeConfig.path == "complete";
    })
  }
  public async timeOut() {
    await alert("您已超過結帳時間，請重新訂購");
    this._router.navigate([''])
  }
  ngOnDestroy(): void {
    this._destroy.next();
    this._destroy.complete();
  }
}
