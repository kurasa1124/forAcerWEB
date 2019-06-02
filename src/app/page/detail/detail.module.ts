import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';
import { RouterModule } from '@angular/router';
import { ComponentModule } from '../../component/component.module';

@NgModule({
  declarations: [DetailComponent, MenuComponent, ContentComponent],
  imports: [
    ComponentModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: "detail",
        component: DetailComponent,
        children: [
          { path: "content", component: ContentComponent }
        ]
      }
    ])
  ]
})
export class DetailModule { }
