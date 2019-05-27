import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { SliderComponent } from './component/slider/slider.component';
import { CardComponent } from './component/card/card.component';
import { CardSportComponent } from './component/card-sport/card-sport.component';
import { AdComponent } from './component/ad/ad.component';
import { MenuComponent } from './component/menu/menu.component';
import { CalendarComponent } from './component/calendar/calendar.component';
import { LightBoxComponent } from './component/light-box/light-box.component';
import { SelectorComponent } from './component/selector/selector.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeekPickerComponent } from './index/tools/week-picker/week-picker.component';
import { SearchComponent } from './index/tools/search/search.component';
import { ToolsComponent } from './index/tools/tools.component';
import { DatePickerComponent } from './index/tools/date-picker/date-picker.component';
import { QuickBuyComponent } from './index/tools/quick-buy/quick-buy.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TitleComponent } from './index/title/title.component';
import { FrostedGlassComponent } from './component/header/frosted-glass/frosted-glass.component';
import { LoginComponent } from './component/header/frosted-glass/login/login.component';
import { PasswordComponent } from './component/header/frosted-glass/password/password.component';
import { UserListComponent } from './component/header/user-list/user-list.component';
import { AccountComponent } from './page/account/account.component';
import { TokenService } from './service/token.service';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    CardComponent,
    CardSportComponent,
    AdComponent,
    MenuComponent,
    CalendarComponent,
    LightBoxComponent,
    SelectorComponent,
    WeekPickerComponent,
    SearchComponent,
    ToolsComponent,
    DatePickerComponent,
    QuickBuyComponent,
    TitleComponent,
    FrostedGlassComponent,
    LoginComponent,
    PasswordComponent,
    UserListComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [TokenService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
