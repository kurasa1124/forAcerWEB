import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './page/index/index.component';
import { AccountComponent } from './page/account/account.component';
import { GoodsComponent } from './page/goods/goods/goods.component';
import { NoticeComponent } from './page/notice/notice.component';
import { QAComponent } from './page/qa/qa.component';
import { DetailComponent } from './page/detail/detail.component';
const routes: Routes = [
  { path: '', pathMatch: "full", component: IndexComponent },
  { path: 'account', component: AccountComponent },
  { path: 'goods', component: GoodsComponent },
  { path: 'notice', component: NoticeComponent },
  { path: 'QA', component: QAComponent },
  { path: 'detail', component: DetailComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
