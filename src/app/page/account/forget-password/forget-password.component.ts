import { Component, OnInit } from '@angular/core';
import verification from 'verification-code';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {

  private _result = verification.create();
  private _code = this._result.code;
  public imgDataURL = this._result.dataURL;

  public reload() {
    this._result = verification.create();
    this._code = this._result.code;
    this.imgDataURL = this._result.dataURL;
  }

}
