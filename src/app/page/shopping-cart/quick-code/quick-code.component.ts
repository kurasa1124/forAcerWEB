import { Component, OnInit } from '@angular/core';
import { LightBoxService } from '../../../service/lightBox.service';
import verification from 'verification-code';
import { TokenService } from '../../../service/token.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-quick-code',
  templateUrl: './quick-code.component.html',
  styleUrls: ['./quick-code.component.scss']
})
export class QuickCodeComponent implements OnInit {
  public sessions = ["請選擇場次時間", "2019-01-28 13:00"]
  private _destroy = new Subject()
  public imageHeight: 0;
  public computerChoice = true;
  public noContinuous = true;
  public selectId: string;
  public seatMap = false;
  public seats: { id: string, title: string, price: string, num: number, color: string }[];
  private _result = verification.create();
  public verificationValue: string = "";
  public code = this._result.code;
  public imgDataURL = this._result.dataURL;
  constructor(public lightBox: LightBoxService, private _token: TokenService, private _router: Router, private _active: ActivatedRoute, public token: TokenService) {
    this._active.queryParams.pipe(takeUntil(this._destroy)).subscribe(param => {
      if (!param.seatMap) return;
      this.seatMap = true;
      this.computerChoice = false;
    })
  }

  ngOnInit() {
    this._destroy.next();
    this._destroy.complete();
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
      let num = Number(data[2].replace(/:/g, "：").split("：")[1]);
      return {
        id: areas[i].id,
        title: data[0].replace(/:/g, "：").split("：")[1],
        price: price,
        num: isNaN(num) ? 0 : num,
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
    this.seatMap = true
    // if (!this.computerChoice) { this.seatMap = true; return }
    // this.lightBox.showBlur = true;
    // this.lightBox.showIdentity = true;
    this.lightBox.area = this.seats.find(seat => seat.id == this.selectId).title;
    this.lightBox.remainder = this.seats.find(seat => seat.id == this.selectId).num;
  }

  public reload() {
    this._result = verification.create();
    this.code = this._result.code;
    this.imgDataURL = this._result.dataURL;
  }

  public addToCart() {
    // if (!this._token.isLogin) {
    //   this.lightBox.showLogIn = true;
    //   this.lightBox.showBlur = true;
    //   this._router.navigate(['shopping-cart', 'orders'])
    //   return
    // }
    if (this.verificationValue.toLocaleLowerCase() != this.code) {
      alert("請輸入正確的驗證碼");
      return
    }
    this._router.navigate(['shopping-cart', 'orders'])
  }
  public scroll(nav: HTMLElement, pos: string) {
    if (pos == 'left') nav.scrollLeft -= nav.clientWidth;
    if (pos == 'right') nav.scrollLeft += nav.clientWidth;
  }

}
