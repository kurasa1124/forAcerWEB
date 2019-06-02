import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoodsComponent } from './goods/goods.component';
import { CategoryComponent } from './category/category.component';
import { PackageComponent } from './package/package.component';
import { OthersComponent } from './others/others.component';
import { RouterModule } from '@angular/router';
import { ComponentModule } from '../../component/component.module';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { ReviewComponent } from './review/review.component';

@NgModule({
  declarations: [
    GoodsComponent,
    CategoryComponent,
    PackageComponent,
    OthersComponent,
    SearchComponent,
    ReviewComponent,
  ],
  imports: [
    ComponentModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: "goods",
        component: GoodsComponent,
        children: [
          { path: "category", component: CategoryComponent },
          { path: "package", component: PackageComponent },
          { path: "others", component: OthersComponent },
          { path: 'search', component: SearchComponent },
          { path: 'review', component: ReviewComponent },
          { path: "**", redirectTo: "/" }
        ]
      },
    ])
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class GoodsModule { }
