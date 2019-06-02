import { Component } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-check-orders',
  templateUrl: './check-orders.component.html',
  styleUrls: ['./check-orders.component.scss']
})
export class CheckOrdersComponent {
  public showCalendar1: boolean = false;
  public showCalendar2: boolean = false;
  public startDate: moment.Moment;
  public endDate: moment.Moment;

  public getDate(event) {
    return moment(event)
  }

}
