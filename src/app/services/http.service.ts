import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Employee } from '../Models/employee.model';
import { environment as env } from 'src/environments/environment';

@Injectable()
export class HttpService {
  selectedEmployee : Employee;
  employees:Employee[];

  constructor(private http:HttpClient) { }
  
  getEmployeeList() {
    return this.http.get(`${env.BASE_URL}/`);
  }

  postEmployee(emp: Employee) {
    return this.http.post(`${env.BASE_URL}/add`, emp);
  }

  // getEmployee(id: string): Observable<Employee[]> {
  //   return this.http.get<Employee[]>(`${env.BASE_URL}/employees/${id}`);
  // }
  putEmployee(emp: Employee) {
    return this.http.put(`${env.BASE_URL}/${emp._id}`, emp);
  }

  deleteEmployee(_id: string) {
    return this.http.delete(`${env.BASE_URL}/${_id}`);
  }
}
