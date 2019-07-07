import { Component, OnInit, OnDestroy } from '@angular/core';
import { LightBoxService } from '../../../../service/lightBox.service';

@Component({
  selector: 'app-quick-buy',
  templateUrl: './quick-buy.component.html',
  styleUrls: ['./quick-buy.component.scss']
})
export class QuickBuyComponent {
  public showBefore = localStorage.showHintBefore;
  constructor(public lightBox: LightBoxService) {
    localStorage.showHintBefore = "true";
  }
}
