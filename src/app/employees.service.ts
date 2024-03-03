import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  apiUrl = 'https://dummy.restapiexample.com/api/v1';
  constructor(private _http: HttpClient) {}

  getEmployees() {
    return this._http.get(this.apiUrl + '/employees');
  }

  getEmployeesbyId(id: any) {
    return this._http.get(this.apiUrl + `/employee/${id}`);
  }

  addEmployee(empDetails: any) {
    return this._http.post(this.apiUrl + '/create', empDetails);
  }

  updateEmployee(id: any, updateEmp: any) {
    return this._http.put(this.apiUrl + `/update/${id}`, updateEmp);
  }

  deleteEmployee(id: any) {
    return this._http.delete(this.apiUrl + `/delete/${id}`);
  }
}
