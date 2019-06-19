import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent implements OnInit {
  @Input() optionals: string[] = ['請選擇'];
  @Input() default: string;
  @Input() showIcon = true;
  @Output() select = new EventEmitter();
  public active: string;
  public showOptionals = false;
  constructor() { }

  ngOnInit() {
    this.active = this.optionals[0];
    if (this.default) this.active = this.default;
  }

}
