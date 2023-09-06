import { Component, ViewChild } from '@angular/core';
import { ContextMenuSelectEvent } from '@progress/kendo-angular-menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('grid', { static: true }) grid: any;
  @ViewChild('gridContextMenu', { static: true }) gridContextMenu: any;

  public gridData: any[] = [
    { ProductID: 1, ProductName: 'Product 1', UnitPrice: 10 },
    { ProductID: 2, ProductName: 'Product 2', UnitPrice: 20 },
    { ProductID: 3, ProductName: 'Product 3', UnitPrice: 30 }
    // Add more data as needed
  ];

  public contextMenuItems = [
    { text: 'Edit', icon: 'edit', click: this.editItem.bind(this) },
    { text: 'Delete', icon: 'delete', click: this.deleteItem.bind(this) }
    // Add more menu items as needed
  ];

  public onCellClick(event: any): void {
    // Handle cell click event here
    console.log('Cell Clicked:', event);
  }

  public onContextMenuItemClick(event: ContextMenuSelectEvent): void {
    // Handle context menu item click event here
    console.log('Context Menu Item Clicked:', event.item);
  }

  public editItem(event: any): void {
    // Implement the edit action here
    console.log('Edit Clicked');
  }

  public deleteItem(event: any): void {
    // Implement the delete action here
    console.log('Delete Clicked');
  }
}
