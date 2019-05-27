import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef } from '@angular/core';
import * as TinyDatePicker from 'tiny-date-picker';
import * as moment from "moment";
import { ActivatedRoute } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  host: { "[@slideIn]": "" },
  animations: [
    trigger("slideIn", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate(".25s ease-in-out", style({ opacity: 1 }))
      ]),
      transition(":leave", [
        style({ opacity: 1 }),
        animate(".25s ease-in-out", style({ opacity: 0 }))
      ])
    ])
  ]
})
export class CalendarComponent implements OnInit {
  @ViewChild("calendar") calendar: ElementRef;
  private _date = moment();
  @Output() select = new EventEmitter();
  public datePicker: TinyDatePicker;
  constructor(private _active: ActivatedRoute) {
    this._active.queryParams.subscribe(param => {
      this._date = moment(param.date);
    })
  }

  ngOnInit() {
    this._datePicker()
  }

  ngOnDestroy(): void {
    this.datePicker.destroy();
  }

  private _datePicker() {
    let element = this.calendar.nativeElement
    this.datePicker = TinyDatePicker(element, {
      lang: this._lang.tw,
      format(date) {
        return date.toLocaleDateString();
      },
      parse(str) {
        let date = moment(str).valueOf();
        return isNaN(date) ? moment() : date;
      },
      mode: 'dp-permanent',
      hilightedDate: this._date,
      min: '10/1/2016',
      max: '10/1/2020',
      inRange(dt) {
        return dt.getFullYear() % 2 > 0;
      },
      dateClass(dt) {
        return dt.getFullYear() % 2 ? 'odd-date' : 'even-date';
      },
      dayOffset: 1
    })
    this.datePicker.open();
    this.datePicker.on('statechange', (event, picker) => this.select.emit(picker.state.selectedDate));
  }

  private _lang = {
    tw: {
      days: ['日', '一', '二', '三', '四', '五', '六'],
      months: [
        '一月',
        '二月',
        '三月',
        '四月',
        '五月',
        '六月',
        '七月',
        '八月',
        '九月',
        '十月',
        '十一月',
        '十二月',
      ],
      today: '今天',
      clear: '清除',
      close: '關閉',
    },
    en: {
      days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      today: 'Today',
      clear: 'Clear',
      close: 'Close',
    }
  }

}
