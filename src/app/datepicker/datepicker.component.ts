import { Component } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent {
  public onButtonClick(): void {
    console.log("click");
    alert("Kendo Angular UI Button was clicked.");
  }

}
