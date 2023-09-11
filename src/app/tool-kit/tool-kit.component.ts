import { Component } from '@angular/core';

@Component({
  selector: 'app-tool-kit',
  templateUrl: './tool-kit.component.html',
  styleUrls: ['./tool-kit.component.scss']
})
export class ToolKitComponent {
  public onButtonClick(): void {
    console.log("click");
    alert("Kendo Angular UI Button was clicked.");
  }
  public value = `<p> </p>`;
}
