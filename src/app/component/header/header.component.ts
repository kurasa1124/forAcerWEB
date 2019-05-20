import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() showMenu = new EventEmitter();
  public name = 'XXX';
  public language: string[] = ['中文', '英文'];
  constructor() { }

  ngOnInit() {
  }

}
