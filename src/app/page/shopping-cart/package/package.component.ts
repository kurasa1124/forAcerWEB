import { Component, OnInit } from '@angular/core';
import { LightBoxService } from '../../../service/lightBox.service';
import { TokenService } from '../../../service/token.service';
import { Router } from '@angular/router';

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
  public get ticketArray() {
    return Array(this.ticketLength - 1).fill('')
  }
  constructor(public lightBox: LightBoxService, private _token: TokenService, private _router: Router) { }

  ngOnInit() {
  }

  public addToCart() {
    if (!this._token.isLogin) {
      this.lightBox.showLogIn = true;
      this.lightBox.showBlur = true;
      this._router.navigate(['shopping-cart', 'orders'])
      return
    }
    this._router.navigate(['shopping-cart', 'orders'])
  }

  public newRow(event) {
    let td = event.target;
    let row = td.parentElement.cloneNode(true) as HTMLElement;
    let tr = td.parentElement;
    tr.parentElement.append(row);
    row.lastChild.addEventListener("click", () => {
      this.newRow({ target: row.lastChild })
    })
  }

}
