import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenService } from '../../../service/token.service';
import * as moment from 'moment';

@Component({
  selector: 'app-join-member',
  templateUrl: './join-member.component.html',
  styleUrls: ['./join-member.component.scss']
})
export class JoinMemberComponent {
  public showPassword1 = false;
  public showPassword2 = false;
  public country = ['本國', '外國'];
  public rightEmail = false;
  public showCalendar: boolean = false;
  public birthDay: moment.Moment;
  public checkRead = false;
  public orderRss = false;
  public password = "";

  constructor(public token: TokenService, private _router: Router) { }

  public emailChange(event) {
    let input = event.target as HTMLInputElement;
    let emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
    if (input.value.search(emailRule) != -1) {
      this.rightEmail = true
    } else {
      this.rightEmail = false
    }
  }

  public birthDayChange(event) {
    this.birthDay = moment(event);
  }

  public joinMember() {
    this.token.isLogin = true;
    this._router.navigate([''])
  }
}
