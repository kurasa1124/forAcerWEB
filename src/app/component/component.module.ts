import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { SelectorComponent } from './selector/selector.component';
import { SearchComponent } from '../page/index/tools/search/search.component';
import { CalendarComponent } from './calendar/calendar.component';
import { SliderComponent } from './slider/slider.component';
import { TitleComponent } from '../page/index/title/title.component';
import { CardSportComponent } from './card-sport/card-sport.component';
import { SeatsComponent } from './header/frosted-glass/seats/seats.component';
import { PackagesComponent } from './header/frosted-glass/packages/packages.component';
import { IdentityComponent } from './header/frosted-glass/identity/identity.component';
import { NoSeatComponent } from './no-seat/no-seat.component';
import { PackageComponent } from './package/package.component';
import { SeatInfoComponent } from './seat-info/seat-info.component';
import { AddGroupComponent } from './header/frosted-glass/add-group/add-group.component';
import { ReturnTicketComponent } from './header/frosted-glass/return-ticket/return-ticket.component';
import { ReturnPackageComponent } from './header/frosted-glass/return-package/return-package.component';
import { FormsModule } from '@angular/forms';
import { PayComponent } from './pay/pay.component';
import { QuickOrderComponent } from './header/frosted-glass/quick-order/quick-order.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CardComponent,
    SelectorComponent,
    CalendarComponent,
    SliderComponent,
    TitleComponent,
    CardSportComponent,
    SeatsComponent,
    PackagesComponent,
    IdentityComponent,
    NoSeatComponent,
    PackageComponent,
    SeatInfoComponent,
    AddGroupComponent,
    ReturnTicketComponent,
    ReturnPackageComponent,
    PayComponent,
    QuickOrderComponent
  ],
  exports: [
    CardComponent,
    SelectorComponent,
    CalendarComponent,
    SliderComponent,
    TitleComponent,
    CardSportComponent,
    SeatsComponent,
    PackagesComponent,
    IdentityComponent,
    NoSeatComponent,
    PackageComponent,
    SeatInfoComponent,
    AddGroupComponent,
    ReturnTicketComponent,
    ReturnPackageComponent,
    PayComponent,
    QuickOrderComponent
  ],
  imports: [
    RouterModule,
    FormsModule,
    CommonModule
  ]
})
export class ComponentModule { }
