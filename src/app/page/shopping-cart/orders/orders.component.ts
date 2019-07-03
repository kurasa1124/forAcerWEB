import { Component, OnInit } from '@angular/core';
import * as chinese from "chinesegen"
// import { LightBoxComponent } from 'src/app/component/light-box/light-box.component';
import { LightBoxService } from '../../../service/lightBox.service';
import { Router } from '@angular/router';
import * as moment from 'moment';
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
  constructor(public lightBox: LightBoxService, private _router: Router) { }

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

  public routerTo() {
    this._router.navigate(['shopping-cart', 'complete'])
  }
}
