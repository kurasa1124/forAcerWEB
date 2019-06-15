import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from "moment";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() image: string = "https://image.freepik.com/free-vector/mother-s-day-card-with-elegant-flowers_1361-1320.jpg"
  @Input() title: string = "標題";
  @Input() text: string = "副標";
  @Input() tag = {
    name: "標籤",
    color: "#3b5998"
  }
  @Input() showTag = true;

  constructor(private _router: Router) {

  }

  public goDetail() {
    this._router.navigate(['detail', 'content'], {
      queryParams: {
        title: this.title,
        range: moment().format("YYYY/MM/DD") + " - " + moment().add(1, "month").format("YYYY/MM/DD"),
        image: this.image
      }
    })
  }

}
