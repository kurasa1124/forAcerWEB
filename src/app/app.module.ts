import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TokenService } from './service/token.service';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { MenuComponent } from './component/menu/menu.component';
import { LightBoxComponent } from './component/light-box/light-box.component';
import { UserListComponent } from './component/header/user-list/user-list.component';
import { FrostedGlassComponent } from './component/header/frosted-glass/frosted-glass.component';
import { PasswordComponent } from './component/header/frosted-glass/password/password.component';
import { LoginComponent } from './component/header/frosted-glass/login/login.component';
import { IndexModule } from './page/index/index.module';
import { AccountModule } from './page/account/account.module';
import { GoodsModule } from './page/goods/goods.module';
import { ComponentModule } from './component/component.module';
import { NoticeModule } from './page/notice/notice.module';
import { QAModule } from './page/qa/qa.module';
import { DetailModule } from './page/detail/detail.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    LightBoxComponent,
    UserListComponent,
    FrostedGlassComponent,
    PasswordComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    ComponentModule,
    IndexModule,
    AccountModule,
    GoodsModule,
    NoticeModule,
    QAModule,
    DetailModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [TokenService],
  bootstrap: [AppComponent],
})
export class AppModule { }
