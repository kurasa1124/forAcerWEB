import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../service/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})

export class AccountComponent {
  public activeImage: string;
  constructor(public token: TokenService, private _router: Router) {
    this._router.events.subscribe(event => {
      this.activeImage = this._router.url.split("/")[2];
    })
  }
}
