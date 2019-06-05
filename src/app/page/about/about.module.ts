import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { UsComponent } from './us/us.component';
import { PrivicyComponent } from './privicy/privicy.component';
import { ServiceComponent } from './service/service.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AboutComponent, UsComponent, PrivicyComponent, ServiceComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "about",
        component: AboutComponent,
        children: [
          { path: "us", component: UsComponent },
          { path: "privicy", component: PrivicyComponent },
          { path: "service", component: ServiceComponent },
          { path: "**", redirectTo: "/" }
        ]
      }
    ])
  ]
})
export class AboutModule { }
