import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  @Input() order = {
    id: 1234567890,
    status: "未付款",
    payMode: "ATM12345678980076",
    payLastTime: "2018/05/06",
    buyTime: "2018/05/01 14:50:04"
  }

  @Input() type = "noSeat";
  constructor() { }

  ngOnInit() {
  }

}
