import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { ComponentsComponent } from './components/components.component';
import { GridComponent } from './grid/grid.component';
import { IconsModule } from '@progress/kendo-angular-icons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ButtonsComponent } from './buttons/buttons.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { FooterComponent } from './footer/footer.component';
import { InputComponent } from './input/input.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ComboBoxComponent } from './combo-box/combo-box.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { MultiselectComponent } from './multiselect/multiselect.component';
import { ModelComponent } from './model/model.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadiobuttonComponent } from './radiobutton/radiobutton.component';
import { UploadsModule } from '@progress/kendo-angular-upload';
import { HttpClientModule } from '@angular/common/http';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { LabelModule } from '@progress/kendo-angular-label';
import { TabComponent } from './tab/tab.component';
import { SwitchComponent } from './switch/switch.component';
import { NotificationComponent } from './notification/notification.component';
import { NotificationModule } from '@progress/kendo-angular-notification';
import { ToolKitComponent } from './tool-kit/tool-kit.component';
import { LoaderComponent } from './loader/loader.component';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { PopupModule } from '@progress/kendo-angular-popup';
import { PopupComponent } from './popup/popup.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { TextAreaComponent } from './text-area/text-area.component';















@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    MainBodyComponent,
    GettingStartedComponent,
    ComponentsComponent,
    GridComponent,
    ButtonsComponent,
    FooterComponent,
    InputComponent,
    DropdownComponent,
    DatepickerComponent,
    ComboBoxComponent,
    MultiselectComponent,
    ModelComponent,
    CheckboxComponent,
    RadiobuttonComponent,
    TabComponent,
    SwitchComponent,
    NotificationComponent,
    ToolKitComponent,
    LoaderComponent,
    PopupComponent,
    TextAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsModule,
    BrowserAnimationsModule,
    NavigationModule,
    InputsModule,
    LayoutModule,
    GridModule,
    DropDownsModule,
    DateInputsModule,
    UploadsModule,
    HttpClientModule,
    DialogsModule,
    LabelModule,
    NotificationModule,
    IndicatorsModule,
    PopupModule,
    ButtonsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
