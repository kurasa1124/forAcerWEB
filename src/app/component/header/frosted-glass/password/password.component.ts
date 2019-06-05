import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import verification from 'verification-code';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['../form.scss']
})
export class PasswordComponent {
  @Output() cancel = new EventEmitter();
  @Output() close = new EventEmitter();
  private _result = verification.create();
  private _code = this._result.code;
  public imgDataURL = this._result.dataURL;

  public reload() {
    this._result = verification.create();
    this._code = this._result.code;
    this.imgDataURL = this._result.dataURL;
  }

}
