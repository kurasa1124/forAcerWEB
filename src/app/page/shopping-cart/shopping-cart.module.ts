import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './shopping-cart.component';
import { RouterModule } from '@angular/router';
import { SeatComponent } from './seat/seat.component';
import { PackageComponent } from './package/package.component';
import { CountdownModule } from 'ngx-countdown';
import { PayComponent } from './pay/pay.component';
import { CompleteComponent } from './complete/complete.component';
import { MapComponent } from './map/map.component';
import { SeatContentComponent } from './seat-content/seat-content.component';
import { FormsModule } from '@angular/forms';
import { ComponentModule } from '../../component/component.module';
import { NoSeatComponent } from './pay/no-seat/no-seat.component';
import { SeatInfoComponent } from './pay/seat-info/seat-info.component';
import { PayPackageComponent } from './pay/package/package.component';
@NgModule({
  declarations: [
    ShoppingCartComponent,
    SeatComponent,
    PackageComponent,
    PayComponent,
    CompleteComponent,
    MapComponent,
    SeatContentComponent,
    PayPackageComponent,
    NoSeatComponent,
    SeatInfoComponent
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
          { path: "pay", component: PayComponent },
          { path: "complete", component: CompleteComponent },
          { path: "**", redirectTo: "/" }
        ]
      }
    ])
  ]
})
export class ShappingCartModule { }
