import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from "@angular/router";
import {CreateEmpComponent} from "./create-emp/create-emp.component";
import {AllEmpComponent} from "./all-emp/all-emp.component";
import {EditEmpComponent} from "./edit-emp/edit-emp.component";

const routes: Routes = [
  {path:'',redirectTo:'/create',pathMatch:'full' },
  {path:'create', component:CreateEmpComponent},
  {path:'allEmp', component: AllEmpComponent},
  {path:'update/:id', component:EditEmpComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
