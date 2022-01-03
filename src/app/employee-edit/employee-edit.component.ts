import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute} from '@angular/router'
import { EmployeeComponent } from '../employee/employee.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
id:number;

  constructor(private ref:ActivatedRoute) { }

  ngOnInit(): void {
this.id = this.ref.snapshot.params.x
console.log("tttttttt"+this.id);


  }

GetbyID(){
  
  


}










}
