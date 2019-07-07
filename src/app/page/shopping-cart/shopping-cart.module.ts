import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './shopping-cart.component';
import { RouterModule } from '@angular/router';
import { SeatComponent } from './seat/seat.component';
import { PackageComponent } from './package/package.component';
import { CountdownModule } from 'ngx-countdown';
import { CompleteComponent } from './complete/complete.component';
import { MapComponent } from './map/map.component';
import { SeatContentComponent } from './seat-content/seat-content.component';
import { FormsModule } from '@angular/forms';
import { ComponentModule } from '../../component/component.module';
import { NoSeatComponent } from './orders/no-seat/no-seat.component';
import { SeatInfoComponent } from './orders/seat-info/seat-info.component';
import { PayPackageComponent } from './orders/package/package.component';
import { OrdersComponent } from './orders/orders.component';
import { QuickCodeComponent } from './quick-code/quick-code.component';
@NgModule({
  declarations: [
    ShoppingCartComponent,
    SeatComponent,
    PackageComponent,
    CompleteComponent,
    MapComponent,
    SeatContentComponent,
    PayPackageComponent,
    NoSeatComponent,
    SeatInfoComponent,
    OrdersComponent,
    QuickCodeComponent
  ],
  imports: [
    ComponentModule,
    FormsModule,
    CountdownModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: 'shopping-cart',
        component: ShoppingCartComponent,
        children: [
          { path: "seat", component: SeatComponent },
          { path: "package", component: PackageComponent },
          { path: "quick-code", component: QuickCodeComponent },
          { path: "orders", component: OrdersComponent },
          { path: "complete", component: CompleteComponent },
          { path: "**", redirectTo: "/" }
        ]
      }
    ])
  ]
})
export class ShappingCartModule { }
