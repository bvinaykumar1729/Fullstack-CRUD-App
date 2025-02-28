import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeResolver } from './employee-resolver';

const routes: Routes = [
  {path: 'header', component: HeaderComponent},
  {path:'employee',component:EmployeeComponent,resolve:{employee:EmployeeResolver}},
  {path:'employee-list',component:EmployeeListComponent},
  {path: '',component: HomeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
