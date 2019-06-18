import { Component, OnInit, Input, ViewChild, ElementRef, QueryList } from '@angular/core';
import * as moment from "moment";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-week-picker',
  templateUrl: './week-picker.component.html',
  styleUrls: ['./week-picker.component.scss']
})
export class WeekPickerComponent implements OnInit {
  public selectDate = moment();
  public dates = [];
  constructor(private _active: ActivatedRoute, private _router: Router) {

    this._active.queryParams.subscribe(param => {

      this.dates = [];
      this._setWeek(param.date)
    })
  }

  private _setWeek(date) {
    let select = moment(date, "YYYY-MM-DD");
    this.selectDate = select;
    for (let i = -3; i <= 3; i++) {
      this.dates.push(moment(select).add(i, "day"))
    }
  }

  public changeDate(date: moment.Moment) {
    this._router.navigate([], { queryParams: { date: date.format("YYYY-MM-DD") } })
  }

  ngOnInit() {
  }

}
