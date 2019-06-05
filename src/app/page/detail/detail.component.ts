import { Component, OnInit, OnDestroy } from '@angular/core';
import * as moment from 'moment';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { LightBoxService } from '../../service/lightBox.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnDestroy {
  private _destroy$ = new Subject();
  public showSeat = true;
  public title: string = "標題";
  public time: string = moment().format("YYYY/MM/DD");
  public image: string = "https://image.freepik.com/free-vector/mother-s-day-card-with-elegant-flowers_1361-1320.jpg";
  public menu = ["活動資訊",
    "活動優惠",
    "座位表",
    "購買/退票",
    "選擇"]
  constructor(private _active: ActivatedRoute, public lightBox: LightBoxService) {
    this._active.queryParams.pipe(takeUntil(this._destroy$)).subscribe(param => {
      this.title = param.title;
      this.time = moment(param.time).format("YYYY/MM/DD HH:mm:ss");
      this.image = param.image
    })
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
