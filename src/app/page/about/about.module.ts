import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { UsComponent } from './us/us.component';
import { PrivicyComponent } from './privicy/privicy.component';
import { ServiceComponent } from './service/service.component';
import { RouterModule } from '@angular/router';
import { DonationComponent } from './donation/donation.component';
import { FormComponent } from './donation/form/form.component';
import { ComponentModule } from '../../component/component.module';

@NgModule({
  declarations: [AboutComponent, UsComponent, PrivicyComponent, ServiceComponent, DonationComponent, FormComponent],
  imports: [
    ComponentModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: "about",
        component: AboutComponent,
        children: [
          { path: "us", component: UsComponent },
          { path: "privicy", component: PrivicyComponent },
          { path: "service", component: ServiceComponent },
          { path: "donation", component: DonationComponent },
          { path: "**", redirectTo: "/" }
        ]
      }
    ])
  ]
})
export class AboutModule { }
