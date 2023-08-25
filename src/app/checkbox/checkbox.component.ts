import { Component } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  public onButtonClick(): void {
    console.log("click");
    alert("Kendo Angular UI Button was clicked.");
  }
}
