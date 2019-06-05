import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { RouterModule } from '@angular/router';
import { JoinMemberComponent } from './join-member/join-member.component';
import { FormsModule } from '@angular/forms';
import { PasswordStrengthBarModule } from 'ng2-password-strength-bar';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ChangeProfileComponent } from './change-profile/change-profile.component';
import { CheckOrdersComponent } from './check-orders/check-orders.component';
import { ComponentModule } from '../../component/component.module';

import { OrderComponent } from './check-orders/order/order.component';

@NgModule({
  declarations: [
    OrderComponent,
    AccountComponent,
    JoinMemberComponent,
    ForgetPasswordComponent,
    ChangePasswordComponent,
    ChangeProfileComponent,
    CheckOrdersComponent,
  ],
  imports: [
    ComponentModule,
    CommonModule,
    FormsModule,
    PasswordStrengthBarModule,
    RouterModule.forChild([
      {
        path: "account",
        component: AccountComponent,
        children: [
          { path: "joinMember", component: JoinMemberComponent },
          { path: "forgetPassword", component: ForgetPasswordComponent },
          { path: "changePassword", component: ChangePasswordComponent },
          { path: "changeProfile", component: ChangeProfileComponent },
          { path: "checkOrders", component: CheckOrdersComponent },
          { path: "**", redirectTo: "/" }
        ]
      },
    ])
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AccountModule { }
