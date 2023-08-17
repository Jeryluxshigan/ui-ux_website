import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { LayoutComponent } from './layout/layout.component';
import { ComponentsComponent } from './components/components.component';
import { GridComponent } from './grid/grid.component';
import { ColumnsComponent } from './columns/columns.component';
import { IconsModule } from '@progress/kendo-angular-icons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { CardComponent } from './card/card.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { FooterComponent } from './footer/footer.component';







@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    MainBodyComponent,
    GettingStartedComponent,
    LayoutComponent,
    ComponentsComponent,
    GridComponent,
    ColumnsComponent,
    CardComponent,
    ButtonsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsModule,
    BrowserAnimationsModule,
    NavigationModule,
    InputsModule,
    LayoutModule,
    GridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
