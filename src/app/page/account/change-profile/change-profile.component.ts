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
  public birthDay = { year: new Date().getFullYear(), month: new Date().getMonth() + 1, date: new Date().getDate() }
  public checkRead = false;
  public orderRss = true;
  public rightRss = false;
  public years = new Array(new Date().getFullYear()).fill(0).map((e, i) => i + 1).filter(v => v > 1910).sort((a, b) => -1);
  public months = new Array(12).fill(0).map((e, i) => i + 1);
  public dates = new Array(moment(this.birthDay.month, "M").daysInMonth()).fill(0).map((e, i) => i + 1);
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

}
