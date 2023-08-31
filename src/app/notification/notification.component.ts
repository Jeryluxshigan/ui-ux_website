import { Component } from '@angular/core';
import { NotificationService } from "@progress/kendo-angular-notification";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {
  constructor(private notificationService: NotificationService) {}

  public show(): void {
    this.notificationService.show({
      content: "Your data has been saved. Time for tea!",
    });
  }
  public onButtonClick(): void {
    console.log("click");
    alert("Kendo Angular UI Button was clicked.");
  }
}
