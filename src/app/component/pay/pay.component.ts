import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import * as chinese from "chinesegen";
import * as moment from "moment";
@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss']
})
export class PayComponent implements OnInit {
  @Input() buttonName: string = "送出表單";
  @Output() send = new EventEmitter();
  @Input() showTicket = false;
  public payment = {
    delivery: 0,
    invoice: 0,
    payment: 0,
    card: 0
  }
  public fakeWord = chinese({ count: 900, freq: true }).text;
  public checkRead = false;
  public tickets = [0, 1, 2];
  public months = Array(12).fill('').map((e, i) => i + 1);
  public years = [2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2032]
  public cards = [
    { image: "https://picsum.photos/1000?random", title: chinese({ count: 30, freq: true }).text, text: moment().format("YYYY/MM/DD") + "-" + moment().add(1, "month").format("YYYY/MM/DD") },
    { image: "https://picsum.photos/1000?random", title: chinese({ count: 30, freq: true }).text, text: moment().format("YYYY/MM/DD") + "-" + moment().add(1, "month").format("YYYY/MM/DD") },
    { image: "https://picsum.photos/1000?random", title: chinese({ count: 30, freq: true }).text, text: moment().format("YYYY/MM/DD") + "-" + moment().add(1, "month").format("YYYY/MM/DD") },
    { image: "https://picsum.photos/1000?random", title: chinese({ count: 30, freq: true }).text, text: moment().format("YYYY/MM/DD") + "-" + moment().add(1, "month").format("YYYY/MM/DD") },
    { image: "https://picsum.photos/1000?random", title: chinese({ count: 30, freq: true }).text, text: moment().format("YYYY/MM/DD") + "-" + moment().add(1, "month").format("YYYY/MM/DD") },
    { image: "https://picsum.photos/1000?random", title: chinese({ count: 30, freq: true }).text, text: moment().format("YYYY/MM/DD") + "-" + moment().add(1, "month").format("YYYY/MM/DD") },
    { image: "https://picsum.photos/1000?random", title: chinese({ count: 30, freq: true }).text, text: moment().format("YYYY/MM/DD") + "-" + moment().add(1, "month").format("YYYY/MM/DD") },
    { image: "https://picsum.photos/1000?random", title: chinese({ count: 30, freq: true }).text, text: moment().format("YYYY/MM/DD") + "-" + moment().add(1, "month").format("YYYY/MM/DD") },
    { image: "https://picsum.photos/1000?random", title: chinese({ count: 30, freq: true }).text, text: moment().format("YYYY/MM/DD") + "-" + moment().add(1, "month").format("YYYY/MM/DD") },
  ]
  constructor() { }

  ngOnInit() {
  }

  public remove(value) {
    let idx = this.tickets.indexOf(value)
    this.tickets.splice(idx, idx + 1);
  }

}
