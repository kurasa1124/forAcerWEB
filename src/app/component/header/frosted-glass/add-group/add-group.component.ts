import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LightBoxService } from '../../../../service/lightBox.service';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['../table.scss']
})
export class AddGroupComponent implements OnInit {

  constructor(private _router: Router, public lightbox: LightBoxService) { }

  ngOnInit() {
  }

  public gotoCart() {
    this.lightbox.showBlur = false;
    this.lightbox.showSeats = false;
    this._router.navigate(['shopping-cart', 'seat']);
  }

  public togglePrice(event) {
    let el = event.target as HTMLElement;
    if (el.classList.contains("active")) el.classList.remove("active");
    else el.classList.add("active");
  }

}
