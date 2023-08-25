import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { LayoutComponent } from './layout/layout.component';
import { ComponentsComponent } from './components/components.component';
import { GridComponent } from './grid/grid.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { InputComponent } from './input/input.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ComboBoxComponent } from './combo-box/combo-box.component';
import { MultiselectComponent } from './multiselect/multiselect.component';
import { ModelComponent } from './model/model.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadiobuttonComponent } from './radiobutton/radiobutton.component';
import { TabComponent } from './tab/tab.component';

const routes: Routes = [
  { path: 'grid', component: GridComponent },
  { path: 'getting-started', component: GettingStartedComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'input', component: InputComponent },
  { path: 'dropdown', component: DropdownComponent },
  { path: 'datepicker', component: DatepickerComponent },
  { path: 'combo-box', component: ComboBoxComponent },
  { path: 'multiselect', component: MultiselectComponent },
  { path: 'model', component: ModelComponent },
  { path: 'checkbox', component: CheckboxComponent},
  { path: 'radiobutton', component: RadiobuttonComponent },
  { path: 'tab', component: TabComponent },
  
  // Add more routes for other main headings and their sub-items as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
