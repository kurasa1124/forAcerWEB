import { Component, OnInit } from '@angular/core';
import { LightBoxService } from '../../../../service/lightBox.service';
import { TokenService } from '../../../../service/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-identity',
  templateUrl: './identity.component.html',
  styleUrls: ['./identity.component.scss']
})
export class IdentityComponent implements OnInit {

  constructor(public lightBox: LightBoxService, private _token: TokenService, private _router: Router) { }

  ngOnInit() {
  }

  public addUp(input: HTMLInputElement, add = true) {
    if (add) input.valueAsNumber++;
    else input.valueAsNumber == 0 ? 0 : input.valueAsNumber--;
  }

  public addToCart() {
    this.lightBox.showIdentity = false;
    if (!this._token.isLogin) { this.lightBox.showLogIn = true; return }
    this.lightBox.showBlur = false;
    this._router.navigate(['shopping-cart', 'pay'])
  }

}
