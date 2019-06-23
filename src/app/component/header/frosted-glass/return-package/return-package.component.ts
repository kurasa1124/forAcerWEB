import { Component, OnInit } from '@angular/core';
import { LightBoxService } from '../../../../service/lightBox.service';

@Component({
  selector: 'app-return-package',
  templateUrl: './return-package.component.html',
  styleUrls: ['../return.scss']
})
export class ReturnPackageComponent implements OnInit {
  public ticketLength = 1;
  public noContinuous = false;
  constructor(public lightbox: LightBoxService) { }

  ngOnInit() {
  }

}
