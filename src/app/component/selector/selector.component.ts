import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent implements OnInit {
  @Input() optionals: string[] = ['請選擇'];
  public active: string;
  public showOptionals = false;
  constructor() { }

  ngOnInit() {
    this.active = this.optionals[0];
  }

}
