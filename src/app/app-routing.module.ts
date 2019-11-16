import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TableComponent} from './layout/main-content/table/table.component';
import {AppComponent} from './app.component';
import {SearchComponent} from './layout/search/search.component';
import {UserLoginComponent} from './user/user-login/user-login.component';
import {UserSignUpComponent} from './user/user-sign-up/user-sign-up.component';
import {GraphComponent} from './layout/main-content/graph/graph.component';
import {ClinicalTableComponent} from './layout/main-content/clinical-table/clinical-table.component'
const routes: Routes = [
  {
  path: '',
  component: SearchComponent
},
{
  path: 'graph/:id',
  component: GraphComponent
},
  {
    path: 'table/:id',
    component: TableComponent
  },
  {
    path: 'sign-in',
    component: UserLoginComponent
  },
  {
    path: 'sign-up',
    component: UserSignUpComponent
  },
  {
    path:'c-table/:id',
    component:ClinicalTableComponent
  },
  {
    path: '**',
    redirectTo: '',
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
