import { Component, OnInit } from '@angular/core';
import { LightBoxService } from '../../../../service/lightBox.service';

@Component({
  selector: 'app-return-ticket',
  templateUrl: './return-ticket.component.html',
  styleUrls: ['../return.scss']
})
export class ReturnTicketComponent implements OnInit {

  constructor(public lightbox: LightBoxService) { }

  ngOnInit() {
  }
  public toggleActive(event) {
    let el = event.target as HTMLElement;
    console.log(el)
    if (el.classList.contains("active")) el.classList.remove("active");
    else el.classList.add("active");
  }
}
