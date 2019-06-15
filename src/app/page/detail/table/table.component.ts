import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LightBoxService } from '../../../service/lightBox.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() type = "seats";
  constructor(private _router: Router, private _lightbox: LightBoxService) { }

  ngOnInit() {
  }

  public gotoCart() {
    this._lightbox.showBlur = false;
    this._lightbox.showSeats = false;
    this._router.navigate(['shopping-cart', 'seat']);
  }

}
