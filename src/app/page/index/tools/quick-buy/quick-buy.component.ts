import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-quick-buy',
  templateUrl: './quick-buy.component.html',
  styleUrls: ['./quick-buy.component.scss']
})
export class QuickBuyComponent {
  public showBefore = localStorage.showHintBefore;
  constructor() {
    localStorage.showHintBefore = "true";
  }
}
