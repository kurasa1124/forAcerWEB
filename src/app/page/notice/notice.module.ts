import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticeComponent } from './notice.component';
import { RouterModule } from '@angular/router';
import { BuyComponent } from './buy/buy.component';
import { WebBuyComponent } from './web-buy/web-buy.component';
import { FaxCardComponent } from './fax-card/fax-card.component';
import { PointBuyComponent } from './point-buy/point-buy.component';
import { ReturnComponent } from './return/return.component';
import { CheckComponent } from './check/check.component';

@NgModule({
  declarations: [NoticeComponent, BuyComponent, WebBuyComponent, FaxCardComponent, PointBuyComponent, ReturnComponent, CheckComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "notice",
        component: NoticeComponent,
        children: [
          { path: "buy", component: BuyComponent },
          { path: "web-buy", component: WebBuyComponent },
          { path: "fax-card", component: FaxCardComponent },
          { path: "point-buy", component: PointBuyComponent },
          { path: "return", component: ReturnComponent },
          { path: "check", component: CheckComponent },
          { path: "**", redirectTo: "/" }
        ]
      }
    ])
  ]
})
export class NoticeModule { }
