import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


 
 
import { ItemsComponent } from './items/items.component';
import { UsersComponent } from './users/users.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminComponent } from './adminDashboard/admin.component';
 
 
  
import { MatListModule } from '@angular/material/list';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule,FormsModule}  from '@angular/forms';
import { LandinPageComponent } from './landin-page/landin-page.component';

import {UserComponent} from './userDashboard/user.component';
import { ManageCategoryComponent } from './Category/manage-category/manage-category.component';
import { ManageUserCompComponent } from './manageUser/manage-user-comp/manage-user-comp.component';
import { ManageProductCompComponent } from './manageProduct/manage-product-comp/manage-product-comp.component';
 
@NgModule({
  declarations: [
    AppComponent,
     AdminComponent,
    UserComponent,
    ItemsComponent,
    UsersComponent,
    HeaderComponent,
    SideNavComponent,
    LandinPageComponent,
    ManageCategoryComponent,
    ManageUserCompComponent,
    ManageProductCompComponent,
     
     
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatListModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
