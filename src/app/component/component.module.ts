import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { SelectorComponent } from './selector/selector.component';
import { SearchComponent } from '../page/index/tools/search/search.component';
import { CalendarComponent } from './calendar/calendar.component';
import { SliderComponent } from './slider/slider.component';
import { TitleComponent } from '../page/index/title/title.component';
import { CardSportComponent } from './card-sport/card-sport.component';

@NgModule({
  declarations: [
    CardComponent,
    SelectorComponent,
    CalendarComponent,
    SliderComponent,
    TitleComponent,
    CardSportComponent,
  ],
  exports: [
    CardComponent,
    SelectorComponent,
    CalendarComponent,
    SliderComponent,
    TitleComponent,
    CardSportComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentModule { }
