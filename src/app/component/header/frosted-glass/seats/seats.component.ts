import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LightBoxService } from '../../../../service/lightBox.service';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['../table.scss']
})
export class SeatsComponent implements OnInit {

  constructor(private _router: Router, private _lightbox: LightBoxService) { }

  ngOnInit() {
  }

  public gotoCart() {
    this._lightbox.showBlur = false;
    this._lightbox.showSeats = false;
    this._router.navigate(['shopping-cart', 'seat']);

  }

}
