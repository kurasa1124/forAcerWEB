import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QAComponent } from '../qa/qa.component';
import { RouterModule } from '@angular/router';
import { BuyWayComponent } from './buy-way/buy-way.component';
import { AtmComponent } from './atm/atm.component';
import { GetComponent } from './get/get.component';
import { JoinComponent } from './join/join.component';
import { BuyComponent } from './buy/buy.component';
import { ReturnComponent } from './return/return.component';
import { OthersComponent } from './others/others.component';
import { ChangeComponent } from './change/change.component';
import { CardComponent } from './card/card.component';
import { InvoiceComponent } from './invoice/invoice.component';

@NgModule({
  declarations: [
    QAComponent,
    BuyWayComponent,
    AtmComponent,
    GetComponent,
    JoinComponent,
    BuyComponent,
    ReturnComponent,
    OthersComponent,
    ChangeComponent,
    InvoiceComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "QA",
        component: QAComponent,
        children: [
          { path: "buy-way", component: BuyWayComponent },
          { path: "atm", component: AtmComponent },
          { path: "get", component: GetComponent },
          { path: "join", component: JoinComponent },
          { path: "buy", component: BuyComponent },
          { path: "return", component: ReturnComponent },
          { path: "others", component: OthersComponent },
          { path: "change", component: ChangeComponent },
          { path: "invoice", component: InvoiceComponent },
          { path: "card", component: CardComponent },
          { path: "**", redirectTo: "/" }
        ]
      }
    ])
  ]
})
export class QAModule { }
