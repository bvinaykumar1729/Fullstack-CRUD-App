import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit  {

  dataSource:Employee[]=[];

  displayedColumns: string[] = ['employeeId', 'employeeName', 'employeeContactNumber',
     'employeeAddress','employeeDepartment','employeeGender','employeeSkills','edit','delete'];

constructor(private employeeService:EmployeeService,
  private router:Router
){
this.getEmployeeList();
}
  ngOnInit(): void {
      
  }

  updateEmployee(employeeId:number):void{
    console.log(employeeId);
    this.router.navigate(['/employee',{employeeId:employeeId}])
  }

  deleteEmployee(employeeId:number):void{
    console.log(employeeId);
    this.employeeService.deleteEmployee(employeeId).subscribe(
      {
        next:(res:any)=>{
          console.log(res);
          this.getEmployeeList();
          
        },
        error:(err:HttpErrorResponse)=>{
          console.log(err);
          

        }
      }
    )
    
  }
  getEmployeeList():void{
    this.employeeService.getEmployees().subscribe(
      {
        next:(res:Employee[])=>{
          console.log(res);
          this.dataSource=res;
        },
        error:(err:HttpErrorResponse)=>{
          console.log(err);
          
        }
      }
    )
  }

}
