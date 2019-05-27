import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-card-sport',
  templateUrl: './card-sport.component.html',
  styleUrls: ['./card-sport.component.scss']
})
export class CardSportComponent implements OnInit {
  @Input() logo1: string = "http://twbsball.dils.tku.edu.tw/wiki/images/8/84/Lionlogo.jpg";
  @Input() logo2: string = "https://upload.wikimedia.org/wikipedia/zh/thumb/4/40/Cpbl-stast-chinatrust-brothers.png/220px-Cpbl-stast-chinatrust-brothers.png"
  @Input() text: string = "03/14  澄清湖棒球場";
  @Input() team1: string = "統一";
  @Input() team2: string = "中信"
  constructor() { }

  ngOnInit() {
  }

}
