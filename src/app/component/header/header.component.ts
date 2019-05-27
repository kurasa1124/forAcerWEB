import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TokenService } from '../../service/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() menu: boolean;
  @Output() showMenu = new EventEmitter();
  public showUserList = false;
  public name = 'XXX';
  public language: string[] = ['中文', '英文'];
  public showLogin = false;
  public photoUrl = "http://pipsum.com/100x100.jpg"
  constructor(public token: TokenService) { }

}
