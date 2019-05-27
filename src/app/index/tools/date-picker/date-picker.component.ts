import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from "moment"


@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {
  public showCalendar: boolean = false;
  public date: moment.Moment;
  constructor(private _active: ActivatedRoute, private _router: Router) {
    this._active.queryParams.subscribe(param => this.date = moment(param.date))
  }

  ngOnInit() {
  }

  public changeDate(event) {
    if (!this.date.isSame(event)) this.showCalendar = false;
    this._router.navigate([], { queryParams: { date: moment(event).format("YYYY-MM-DD") } })
  }

}
