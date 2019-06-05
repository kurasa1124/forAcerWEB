import { Component, OnInit } from '@angular/core';
import { LightBoxService } from '../../../service/lightBox.service';
import verification from 'verification-code';
import { TokenService } from '../../../service/token.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.scss']
})
export class SeatComponent implements OnInit {
  public computerChoice = true;
  public noContinuous = true;
  public selectId: string;
  public seatMap = false;
  public seats: { id: string, title: string, price: string, num: string, color: string }[];
  private _result = verification.create();
  public verificationValue: string;
  public code = this._result.code;
  public imgDataURL = this._result.dataURL;
  constructor(public lightBox: LightBoxService, private _token: TokenService, private _router: Router) { }

  ngOnInit() {

  }

  public setTable(colors) {
    let areas = document.querySelectorAll("area");
    let datas = Array.from(areas).map(area => area.title.split(" ").filter(value => value != ""));
    let prices = datas
      .map(data => data[1].replace(/:/g, "：").replace(/,/g, "").split("：")[1])
      .filter((element, index, arr) => arr.indexOf(element) === index)
      .sort((a, b) => Number(b) - Number(a));
    this.seats = datas.map((data, i) => {
      let price = data[1].replace(/:/g, "：").replace(/,/g, "").split("：")[1];
      return {
        id: areas[i].id,
        title: data[0].replace(/:/g, "：").split("：")[1],
        price: price,
        num: data[2].replace(/:/g, "：").split("：")[1],
        color: colors[prices.indexOf(price)]
      }
    })
  }

  public hover(area: HTMLAreaElement) {
    if (!area) {
      this.selectId = null
      return
    }
    this.selectId = area.id;
  }

  public next() {
    if (!this.selectId) return;
    if (!this.computerChoice) { this.seatMap = true; return }
    this.lightBox.showBlur = true;
    this.lightBox.showIdentity = true
  }

  public reload() {
    this._result = verification.create();
    this.code = this._result.code;
    this.imgDataURL = this._result.dataURL;
  }

  public addToCart() {
    if (!this._token.isLogin) {
      this.lightBox.showLogIn = true;
      this.lightBox.showBlur = true;
      this._router.navigate(['shopping-cart', 'pay'])
      return
    }
    this._router.navigate(['shopping-cart', 'pay'])
  }

}
