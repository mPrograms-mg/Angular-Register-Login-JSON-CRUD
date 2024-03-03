import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EmptyError } from 'rxjs';
import { EmployeesService } from 'src/app/employees.service';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css'],
})
export class AddEmpComponent {
  AddEmployee: FormGroup;
  constructor(
    private dialog: MatDialog,
    private fb: FormBuilder,
    private empService: EmployeesService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.AddEmployee = this.fb.group({
      name: new FormControl(''),
      salary: new FormControl(''),
      age: new FormControl(''),
    });
  }

  close() {
    this.dialog.closeAll();
  }

  SubmitForm() {
    console.log(this.AddEmployee.value);

    this.empService
      .addEmployee(this.AddEmployee.value)
      .subscribe((res: any) => {
        console.log(res);
        this.dialog.closeAll();
      });
  }
}
