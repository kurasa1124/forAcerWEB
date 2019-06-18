import { Component, OnInit } from '@angular/core';
import * as chinese from "chinesegen"
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  public payment = {
    delivery: 0,
    invoice: 0,
    payment: 0,
    card: 0
  }
  public showPay = false;
  public checkRead = false;
  public tickets = [0, 1, 2];
  public months = Array(12).fill('').map((e, i) => i + 1);
  public years = [2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2032]
  public cards = [
    { image: "http://pipsum.com/1100x1100.jpg", title: chinese({ count: 5, freq: true }).text, text: "尚未開始" },
    { image: "http://pipsum.com/1200x1200.jpg", title: chinese({ count: 5, freq: true }).text, text: "尚未開始" },
    { image: "http://pipsum.com/1300x1300.jpg", title: chinese({ count: 5, freq: true }).text, text: "尚未開始" },
    { image: "http://pipsum.com/1400x1400.jpg", title: chinese({ count: 5, freq: true }).text, text: "尚未開始" },
    { image: "http://pipsum.com/1500x1500.jpg", title: chinese({ count: 5, freq: true }).text, text: "尚未開始" },
    { image: "http://pipsum.com/600x600.jpg", title: chinese({ count: 5, freq: true }).text, text: "尚未開始" },
    { image: "http://pipsum.com/700x700.jpg", title: chinese({ count: 5, freq: true }).text, text: "尚未開始" },
    { image: "http://pipsum.com/800x800.jpg", title: chinese({ count: 5, freq: true }).text, text: "尚未開始" },
    { image: "http://pipsum.com/900x900.jpg", title: chinese({ count: 5, freq: true }).text, text: "尚未開始" },
  ]
  constructor() { }

  ngOnInit() {
  }

  public remove(value) {
    let idx = this.tickets.indexOf(value)
    this.tickets.splice(idx, idx + 1);
  }

  public scrollTo(el: HTMLElement) {
    console.log(el)
    setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" }), 100)
  }

}
