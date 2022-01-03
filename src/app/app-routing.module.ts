import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeReferenceComponent } from './employee-reference/employee-reference.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
const routes: Routes = [
  
    
  {
    path: '',
    component: EmployeeComponent,
  },

   {
       path: 'employeereference',
      component: EmployeeReferenceComponent
    
    } , 
    
    {
        path: 'empedit/:id',
       component: EmployeeEditComponent
     
     }
      
     

      
    
 
      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
