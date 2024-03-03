import { Component } from '@angular/core';
import { EmployeesService } from '../../employees.service';
import { MatDialog } from '@angular/material/dialog';
import { AddEmpComponent } from './add-emp/add-emp.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  displayedColumns: string[] = [
    'id',
    'employee_name',
    'employee_salary',
    'employee_age',
    'action',
  ];
  dataSource: any = [];
  constructor(
    private empService: EmployeesService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getEmploye();
  }

  getEmploye() {
    this.empService.getEmployees().subscribe((res: any) => {
      console.log('Employee..', res?.data);
      if (res) {
        this.dataSource = res?.data;
      }
    });
  }

  addEmployee() {
    this.dialog.open(AddEmpComponent, {
      width: '400px',
      height: '400px',
    });
  }

  deleteEmp(id: any) {
    this.empService.deleteEmployee(id).subscribe((res: any) => {
      console.log('res..', res);
      this.getEmploye();
    });
  }

  editEmp(id: any) {
    this.empService.getEmployeesbyId(id).subscribe((res: any) => {
      console.log('res..', res);
    });

    this.dialog.open(AddEmpComponent, {
      width: '400px',
      height: '400px',
    });
  }
}
