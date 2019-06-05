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
  public selectTime = ["請選擇", "2018-08-26 18:30"];
  public selectPrice = ["請選擇", 500, 1200];
  public ticketLength = 1;
  public hasPlace = false;
  public changeSeat = false;
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
      this._router.navigate(['shopping-cart', 'pay'])
      return
    }
    this._router.navigate(['shopping-cart', 'pay'])
  }

}
