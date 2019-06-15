import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as ColorThief from "color-thief";
import * as convert from "color-convert"

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnChanges {
  @Input() hoverId: string;
  @Output() hoverChange = new EventEmitter();
  @Output() colorChange = new EventEmitter();
  @Output() heightChange = new EventEmitter();
  public colorThief = new ColorThief();

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    let id = changes.hoverId.currentValue;
    if (!id) return
    let area = document.getElementById(id);
    area.focus();
  }

  public imgOnLoad(ImageMap: HTMLImageElement) {
    let colors = this.colorThief.getPalette(ImageMap, 10)
    let hex = colors.map(color => "#" + convert.rgb.hex(color));
    this.colorChange.emit(hex.sort((a, b) => a.localeCompare(b)));
    this.heightChange.emit(ImageMap.height);
    this._setHover()
  }

  private _setHover() {
    let areas = document.querySelectorAll("area");
    areas.forEach(area => {
      area.addEventListener("mouseenter", () => {
        area.focus({
          preventScroll: false
        });
        this.hoverChange.emit(area);
      })
      area.addEventListener("mouseleave", () => {
        area.blur();
        this.hoverChange.emit();
      })
    })
  }

}
