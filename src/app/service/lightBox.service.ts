import { Injectable } from '@angular/core';

@Injectable({ providedIn: "root" })
export class LightBoxService {
  public showBlur = false;
  public showLogIn = false;
  public showPassword = false;
  public showSeats = false;
  public showPackages = false;
  public showIdentity = false;
  public showGroup = false;
  public showReturn = false;
  public showReturnPkg = false;
  public remainder = 0;
  public showQuickBuy = false;
  public area = "";
}
