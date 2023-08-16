import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { LayoutComponent } from './layout/layout.component';
import { ComponentsComponent } from './components/components.component';
import { GridComponent } from './grid/grid.component';
import { ColumnsComponent } from './columns/columns.component';
import { CardComponent } from '@progress/kendo-angular-layout';
import { ButtonComponent } from '@progress/kendo-angular-buttons';

const routes: Routes = [
  { path: 'grid', component: GridComponent },
  { path: 'getting-started', component: GettingStartedComponent },
  { path: 'columns', component: ColumnsComponent },
  { path: 'buttons', component: ButtonComponent },
  { path: 'card', component: CardComponent },
  
  // Add more routes for other main headings and their sub-items as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
