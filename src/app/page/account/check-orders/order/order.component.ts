import { Component, OnInit, Input } from '@angular/core';
import { LightBoxService } from '../../../../service/lightBox.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  @Input() order = {
    id: 1234567890,
    status: "未付款",
    payMode: "ATM12345678980076",
    payLastTime: "2018/05/06",
    buyTime: "2018/05/01 14:50:04"
  }

  @Input() type = "noSeat";
  public showMore = false;

  constructor(public lightBox: LightBoxService, ) { }

  ngOnInit() {
  }

  public return() {
    if (this.type == 'package') this.lightBox.showReturnPkg = true;
    else this.lightBox.showReturn = true;
    this.lightBox.showBlur = true;
  }

}
