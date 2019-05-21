import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { SliderComponent } from './component/slider/slider.component';
import { CardRowComponent } from './component/card-row/card-row.component';
import { CardColumnComponent } from './component/card-column/card-column.component';
import { CardSportComponent } from './component/card-sport/card-sport.component';
import { AdComponent } from './component/ad/ad.component';
import { MenuComponent } from './component/menu/menu.component';
import { CalendarComponent } from './component/calendar/calendar.component';
import { LightBoxComponent } from './component/light-box/light-box.component';
import { SelectorComponent } from './component/selector/selector.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    CardRowComponent,
    CardColumnComponent,
    CardSportComponent,
    AdComponent,
    MenuComponent,
    CalendarComponent,
    LightBoxComponent,
    SelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
