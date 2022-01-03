import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee,EmployeeDetails, AuthEmployeeService } from 'src/app/Services/auth-employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeedetails: any = []; 
obj:any;
 
temp:number;

  edited
  tool
  toggleBool: boolean=false;
  tooledit

  credentials: EmployeeDetails = {
    EmployeeID: 0,
    Code: '',
    Name: '',
    EmployeeType: '',
    Email: '',
    DOB:'',
    Gender: '',
    Active: '',
  };


  selectedemployee = {
    EmployeeID: 0,
    Code: '',
    Name: '',
    EmployeeType: '',
    Email: '',
    DOB: '',
    Gender: '',
    Active: '',
  }



  constructor(private authEmployee: AuthEmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.tooledit=true
    this.getRef();
    
      this.edited =true;
      this.authEmployee.getemployees().subscribe(
        
        (result) => {
          console.log("helllooo" + result)
          this.employeedetails = result;
  
          console.log("fff" + JSON.stringify(this.employeedetails))
         
        }
  
      )
  
  
    

  }


  register() {
    console.log('sending data works');
    //this.SaveGroup();
    this.authEmployee.register(this.credentials).subscribe(
      (res) => {
        console.log("helllooo"+res)
       this.get();
        

        }
        //this.router.navigateByUrl('/')

      

    )


  }



  delete(id) {
    this.selectedemployee.EmployeeID = id
    console.log("mmmmmmmmmmmm" + this.selectedemployee.EmployeeID)
    this.authEmployee.delete(this.selectedemployee.EmployeeID).subscribe(res => {
      
      console.log("hiii" + res)
    })

  }

  edit(x) {
   console.log('aaa');
    this.tool = true,
      this.selectedemployee = x;
      this.tooledit=false;
   // console.log("yeahh" + JSON.stringify(this.selectedemployee))
    /*this.obj=JSON.stringify(x)*/
   /* console.log("yesssssssssss" + JSON.stringify(x))*/
  /* this.obj=this.selectedemployee.EmployeeID
   console.log("yesssssssssss" + this.selectedemployee.EmployeeID)
this.router.navigateByUrl("empedit/"+this.obj)*/

/*this.temp=this.selectedemployee.EmployeeID;
this.router.navigateByUrl("empedit/"+this.temp)*/
  }

  ReferenceArray:any[]
getRef(){
  this.authEmployee.getemployeestypes().subscribe(
    res=>{
this.ReferenceArray =res;
    },err=>{}
  )
}

  get(){
    this.authEmployee.getemployees().subscribe(
        
      (result) => {
        console.log("helllooo" + result)
        this.employeedetails = result;

        console.log("fff" + JSON.stringify(this.employeedetails))
       
      }

    )


  }



  update(x) {
    console.log(this.authEmployee.update(this.selectedemployee))
    this.authEmployee.update(this.selectedemployee).subscribe(res => {

      console.log(res);
    })

  }


  reset(employeeForm:NgForm){
    employeeForm.reset();
    this.toggleBool= true;
    console.log('resettttttttttttttt')
  }
  
  reload(){
    this.router.routeReuseStrategy.shouldReuseRoute=()=>false;
    this.router.onSameUrlNavigation='reload';
    this.router.navigate(['/']);
  }

  reset1(employeeeditForm:NgForm){
    employeeeditForm.reset();
    this.toggleBool= true;
    console.log('resettttttttttttttt')
  }







}
