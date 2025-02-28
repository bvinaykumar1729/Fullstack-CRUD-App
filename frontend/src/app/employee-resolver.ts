import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { EmployeeService } from "./services/employee.service";
import { inject } from "@angular/core";
import { Observable, of } from "rxjs";
import { Employee } from "./employee.model";

export const EmployeeResolver:ResolveFn<any>=
(route:ActivatedRouteSnapshot,
    state:RouterStateSnapshot,
    employeeService:EmployeeService = inject(EmployeeService)):Observable<Employee>=>{


        const employeeId = route.paramMap.get('employeeId');

        if(employeeId){
            //make api call and get data for given employeeId
            return employeeService.getEmployee(Number(employeeId));
        }
        else{
            //create and return empty employee details
          const  employee:Employee = {
                
                employeeName: '',
                employeeContactNumber: '',
                employeeAddress: '',
                employeeGender: '',
                employeeDepartment: '',
                employeeSkills:''
              }
              return of(employee);
        }


    }
