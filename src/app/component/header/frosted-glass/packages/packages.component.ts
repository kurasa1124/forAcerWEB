import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LightBoxService } from '../../../../service/lightBox.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['../table.scss']
})
export class PackagesComponent implements OnInit {

  constructor(private _router: Router, private _lightbox: LightBoxService) { }

  ngOnInit() {
  }

  public gotoCart() {
    this._router.navigate(['shopping-cart', 'package']);
    this._lightbox.showBlur = false;
    this._lightbox.showPackages = false;
  }

}
