import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './adminDashboard/admin.component';
import { AppComponent } from './app.component';
import { ManageCategoryComponent } from './Category/manage-category/manage-category.component';
import { LandinPageComponent } from './landin-page/landin-page.component';
import { UserComponent } from './userDashboard/user.component';

const routes: Routes = [
  {path:"adminDashboard" ,component:AdminComponent},
  { path: 'landingPage', component:LandinPageComponent  },
  { path: '', redirectTo: '/landingPage', pathMatch: 'full' },
  { path: 'userDashboard',  component:UserComponent ,canLoad:[UserComponent] ,},
  {path:'manageCategory'  ,component:ManageCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
