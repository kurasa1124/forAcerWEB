import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import verification from 'verification-code';
import { Router } from '@angular/router';
import { LightBoxService } from '../../../../service/lightBox.service';

@Component({
  selector: 'app-quick-order',
  templateUrl: './quick-order.component.html',
  styleUrls: ['../form.scss']
})
export class QuickOrderComponent {

  @Output() cancel = new EventEmitter();
  @Output() close = new EventEmitter();
  private _result = verification.create();
  private _code = this._result.code;
  public imgDataURL = this._result.dataURL;
  public number = 0;

  constructor(private _router: Router, private _lightbox: LightBoxService) { }

  public reload() {
    this._result = verification.create();
    this._code = this._result.code;
    this.imgDataURL = this._result.dataURL;
  }

  public send() {
    this._lightbox.showBlur = false;
    this._lightbox.showQuickBuy = false;
    this._router.navigate(['shopping-cart', 'orders']);
  }

}
