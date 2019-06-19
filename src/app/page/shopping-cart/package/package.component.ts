import { Component, OnInit } from '@angular/core';
import { LightBoxService } from '../../../service/lightBox.service';
import { TokenService } from '../../../service/token.service';
import { Router } from '@angular/router';
import verification from 'verification-code';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.scss']
})
export class PackageComponent implements OnInit {
  public noContinuous = true;
  public times = ["請選擇", "2018-08-26 18:30"];
  public prices = ["請選擇", 500, 1200];
  public ticketLength = 0;
  public hasPlace = false;
  public changeSeat = false;
  public selectTime = []
  public selectPrice = [];
  private _result = verification.create();
  public verificationValue: string = "";
  public code = this._result.code;
  public imgDataURL = this._result.dataURL;
  public get ticketArray() {
    return Array(this.ticketLength - 1).fill('')
  }
  constructor(public lightBox: LightBoxService, public token: TokenService, private _router: Router) { }

  ngOnInit() {
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
  public reload() {
    this._result = verification.create();
    this.code = this._result.code;
    this.imgDataURL = this._result.dataURL;
  }

  public newRow(event) {
    let td = event.target;
    let row = td.parentElement.cloneNode(true) as HTMLElement;
    let tr = td.parentElement;
    tr.parentElement.append(row);
    row.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
    row.lastChild.addEventListener("click", () => {
      this.newRow({ target: row.lastChild })
    })
  }

}
