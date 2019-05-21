import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() menu: boolean;
  @Output() showMenu = new EventEmitter();
  public isLogin: false;
  public name = 'XXX';
  public language: string[] = ['中文', '英文'];
  constructor() { }

  ngOnInit() {
  }

}
