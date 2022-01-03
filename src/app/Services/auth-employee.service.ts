import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



export interface EmployeeDetails {
  EmployeeID: number,
  Code: string,
  Name: string,
  EmployeeType:string,
  Email: string,
  DOB: string,
  Gender: string,
  Active:string
  
}

export interface EmployeeTypeDetails {
  ID: number,
  Code: string,
  Description: string,
  SysDate: string,
  

}


export class Employee {

  EmployeeID: number;
  Code: string;
  Name: string;
  EmployeeType: string;
  Email: string;
  DOB: string;
  Gender: string;
  Active: string;



};






@Injectable({
  providedIn: 'root'
})
export class AuthEmployeeService {

  constructor(private http: HttpClient) { }
  di: string;
  public register(employee:EmployeeDetails): Observable<any> {
    return this.http.post('https://localhost:44342/api/Emplyees/AddEmployees',employee);
  }

  public registeremployetype(employeetype: EmployeeTypeDetails): Observable<any> {
    return this.http.post('https://localhost:44342/api/EmpType/InsertEmployeeType', employeetype);
  }
  public getemployees(): Observable<any> {
    return this.http.get('https://localhost:44342/api/Emplyees/GetAllEmployees');
  }

  public getemployeestypes(): Observable<any> {
    return this.http.get('https://localhost:44342/api/EmpType/GetAllEmployeeTypes');
  }
  public delete(EmployeeID): Observable<any> {
    return this.http.delete('https://localhost:44342/api/Emplyees/DelEmployeebyID/'+ EmployeeID);
  }

  public deletetype(ID): Observable<any> {
    return this.http.delete('https://localhost:44342/api/EmpType/DeleteEmployeeType/'+ID);
  }

  public update(employee: EmployeeDetails): Observable<any> {
    return this.http.put('https://localhost:44342/api/Emplyees/UpdateEmployee', employee);
  }


  public updatetype(employeetype:EmployeeTypeDetails): Observable<any> {
    return this.http.put('https://localhost:44342/api/EmpType/UpdateEmployeeType',employeetype);
  }

  public getbyid(id:number): Observable<any> {
    return this.http.get('https://localhost:44342/api/Emplyees/GetEmployeebyID/'+id);
  }
  
}
