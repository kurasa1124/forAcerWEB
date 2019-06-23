import { Component, OnInit } from '@angular/core';
import { LightBoxService } from '../../../service/lightBox.service';
import { TokenService } from '../../../service/token.service';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['../about.component.scss']
})
export class DonationComponent implements OnInit {
  public showForm = false;
  public showCard = false;
  public optionals = ['方案選擇', '純捐款'];
  constructor(public lightBox: LightBoxService, public token: TokenService) { }

  ngOnInit() {
  }

  public async thank() {
    await alert("感謝您的支持與贊助");
    this.showCard = false;
    this.showForm = false;
  }
}
