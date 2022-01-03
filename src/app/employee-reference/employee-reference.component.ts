import { Component, OnInit } from '@angular/core';
import { EmployeeTypeDetails, AuthEmployeeService } from 'src/app/Services/auth-employee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee-reference',
  templateUrl: './employee-reference.component.html',
  styleUrls: ['./employee-reference.component.css']
})
export class EmployeeReferenceComponent implements OnInit {
  employeetypedetails



  credentialtypes: EmployeeTypeDetails={
    ID:0,
    Code: '',
    Description:'',
    SysDate: '',


}

selectedemployeetype = {
  ID:0,
    Code: '',
    Description:'',
    SysDate: '',
}

tool;
tooledit;

  edited = true;
  constructor(private authEmployee: AuthEmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.tooledit=true;
    this.authEmployee.getemployeestypes().subscribe(
      (result) => {
        console.log("helllooo" + result)
        this.employeetypedetails = result;
         
        console.log("fff" + JSON.stringify(this.employeetypedetails))
      }
  

      

    )

  }
 get(){
  this.authEmployee.getemployeestypes().subscribe(
    (result) => {
      console.log("helllooo" + result)
      this.employeetypedetails = result;
       
      console.log("fff" + JSON.stringify(this.employeetypedetails))
    }
  )


 }
 

  registeremployeetype() {
    console.log('sending data works');
    //this.SaveGroup();
    this.authEmployee.registeremployetype(this.credentialtypes).subscribe(
      (res) => {
        console.log("helllooo" + res);
        /*this.credentialtypes.SysDate=new Date();*/
        this.get();


      }

      )
      }
  
      calling(y) {
        console.log('aaa');
        this.tool = true,
        this.tooledit=false;
          this.selectedemployeetype = y
        console.log("yeahh" + JSON.stringify(this.selectedemployeetype))
    
    
      }
   
      delete(z) {
        this.selectedemployeetype.ID = z
        console.log("mmmmmmmmmmmm" + this.selectedemployeetype.ID)
        this.authEmployee.deletetype(this.selectedemployeetype.ID).subscribe(res => {
          
          console.log("hiii" + res)
        })
    
      }

      updateemptype(y) {
        this.authEmployee.updatetype(this.selectedemployeetype).subscribe(res => {

          console.log(res);
        })
    
      }

      reload(){
        this.router.routeReuseStrategy.shouldReuseRoute=()=>false;
        this.router.onSameUrlNavigation='reload';
        this.router.navigate(['/employeereference']);
      }






}


