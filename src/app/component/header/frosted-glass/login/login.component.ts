import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import verification from 'verification-code';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../form.scss']
})
export class LoginComponent {
  @Output() forget = new EventEmitter();
  @Output() login = new EventEmitter();
  @Output() close = new EventEmitter();
  public remember = false;
  private _result = verification.create();
  private _code = this._result.code;
  public imgDataURL = this._result.dataURL;

  public reload() {
    this._result = verification.create();
    this._code = this._result.code;
    this.imgDataURL = this._result.dataURL;
  }

}
