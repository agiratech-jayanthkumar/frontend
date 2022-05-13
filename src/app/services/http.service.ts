import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Employee } from '../Models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }
  
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${env.BASE_URL}/employees`);
  }
  getEmployee(id: string): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${env.BASE_URL}/employees/${id}`);
  }
}
