import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GettingStartedComponent } from './getting-started/getting-started.component';
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
import { SwitchComponent } from './switch/switch.component';
import { NotificationComponent } from './notification/notification.component';
import { ToolKitComponent } from './tool-kit/tool-kit.component';
import { LoaderComponent } from './loader/loader.component';
import { PopupComponent } from './popup/popup.component';
import { TextAreaComponent } from './text-area/text-area.component';


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
  { path: 'switch', component: SwitchComponent },
  { path: 'notification', component: NotificationComponent },
  { path: 'tool-kit', component: ToolKitComponent },
  { path: 'loader', component: LoaderComponent },
  { path: 'popup', component: PopupComponent },
  { path: 'text-area', component: TextAreaComponent },
  
  // Add more routes for other main headings and their sub-items as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
