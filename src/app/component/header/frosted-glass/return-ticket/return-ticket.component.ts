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
    if (el.classList.contains("active")) el.classList.remove("active");
    else el.classList.add("active");
    if (el.nodeName == "TH") {
      let tds = document.querySelectorAll(".return");
      if (el.classList.contains("active")) {
        tds.forEach(td => { td.classList.remove("active"); td.classList.add("active") })
      } else {
        tds.forEach(td => td.classList.remove("active"))
      }
    }
  }
  public async return() {
    await alert("退票完成");
    this.lightbox.showBlur = false;
    this.lightbox.showReturn = false
  }
}
