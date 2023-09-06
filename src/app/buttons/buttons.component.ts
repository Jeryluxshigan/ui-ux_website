import { Component } from '@angular/core';
import {
  SVGIcon,
  boldIcon,
  italicIcon,
  underlineIcon,
} from "@progress/kendo-svg-icons";

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent {
  public onButtonClick(): void {
    console.log("click");
    alert("Kendo Angular UI Button was clicked.");
  }
  public boldSVG: SVGIcon = boldIcon;
  public italicSVG: SVGIcon = italicIcon;
  public underlineSVG: SVGIcon = underlineIcon;
}
