import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-week-picker',
  templateUrl: './week-picker.component.html',
  styleUrls: ['./week-picker.component.scss']
})
export class WeekPickerComponent implements OnInit {
  public dates = [];
  constructor() { }

  ngOnInit() {
  }

}
