import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { TokenService } from '../../../service/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-profile',
  templateUrl: './change-profile.component.html',
  styleUrls: ['./change-profile.component.scss']
})
export class ChangeProfileComponent {
  public country = ['本國', '外國'];
  public rightEmail = false;
  public showCalendar: boolean = false;
  public birthDay: moment.Moment;
  public checkRead = false;
  public orderRss = true;
  public rightRss = false;
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

}
