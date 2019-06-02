import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerComponent } from './tools/date-picker/date-picker.component';
import { QuickBuyComponent } from './tools/quick-buy/quick-buy.component';
import { WeekPickerComponent } from './tools/week-picker/week-picker.component';
import { ToolsComponent } from './tools/tools.component';
import { IndexComponent } from './index.component';
import { RouterModule } from '@angular/router';
import { ComponentModule } from '../../component/component.module';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './tools/search/search.component';

@NgModule({
  declarations: [
    IndexComponent,
    ToolsComponent,
    DatePickerComponent,
    QuickBuyComponent,
    WeekPickerComponent,
    SearchComponent
  ],
  imports: [
    FormsModule,
    ComponentModule,
    CommonModule,
    RouterModule
  ]
})
export class IndexModule { }
