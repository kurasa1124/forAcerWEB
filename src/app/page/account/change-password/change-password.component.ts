import { Component, OnInit } from '@angular/core';
import verification from 'verification-code';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  public showPassword1 = false;
  public showPassword2 = false;
  public showOldPassword = false;
  public password = "";
  private _result = verification.create();
  private _code = this._result.code;
  public imgDataURL = this._result.dataURL;

  constructor() { }

  ngOnInit() {
  }

  public reload() {
    this._result = verification.create();
    this._code = this._result.code;
    this.imgDataURL = this._result.dataURL;
  }

}
