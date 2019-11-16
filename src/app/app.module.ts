import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './layout/main-content/table/table.component';
import { SearchComponent } from './layout/search/search.component';
import {CoreModule} from './core/core/core.module';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserSignUpComponent } from './user/user-sign-up/user-sign-up.component';
import { UserComponent } from './user/user/user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GraphComponent } from './layout/main-content/graph/graph.component';
import { ClinicalTableComponent } from './layout/main-content/clinical-table/clinical-table.component';
import { GridModule, FreezeService, SelectionService,PageService,ToolbarService } from '@syncfusion/ej2-angular-grids';
import { FancyGridModule } from 'fancy-grid-angular';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { AgGridModule } from 'ag-grid-angular';
@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    SearchComponent,
    UserLoginComponent,
    UserSignUpComponent,
    UserComponent,
    GraphComponent,
    ClinicalTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    GridModule,
    FancyGridModule,
    AgGridModule.withComponents([])
  ],
  providers: [FreezeService, SelectionService,PageService,ToolbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
