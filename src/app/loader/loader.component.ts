import { Component } from '@angular/core';
import {
  LoaderType,
  LoaderThemeColor,
  LoaderSize,
} from "@progress/kendo-angular-indicators";

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  public onButtonClick(): void {
    console.log("click");
    alert("Kendo Angular UI Button was clicked.");
  }
  public loaders = [
    {
      type: <LoaderType>"pulsing",
      themeColor: <LoaderThemeColor>"primary",
      size: <LoaderSize>"medium",
    },
    {
      type: <LoaderType>"infinite-spinner",
      themeColor: <LoaderThemeColor>"secondary",
      size: <LoaderSize>"medium",
    },
    {
      type: <LoaderType>"converging-spinner",
      themeColor: <LoaderThemeColor>"info",
      size: <LoaderSize>"medium",
    },
  ];
}
