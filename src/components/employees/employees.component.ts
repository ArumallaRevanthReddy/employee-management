import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

export interface EmployeeElement {
  empId: number;
  name: string;
  jobTitle: string;
  department: number;
}

const ELEMENT_DATA: EmployeeElement[] = [
  { empId: 1, name: 'Hydrogen', jobTitle: 'Software Engineer', department: 1 },
  { empId: 2, name: 'Helium', jobTitle: 'Software Engineer', department: 2 },
  { empId: 3, name: 'Lithium', jobTitle: 'Software Engineer', department: 3 },
  { empId: 4, name: 'Beryllium', jobTitle: 'Software Engineer', department: 4 },
  { empId: 5, name: 'Boron', jobTitle: 'Software Engineer', department: 5 },
];

@Component({
  selector: 'app-employees',
  imports: [MatTableModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss',
})
export class EmployeesComponent {
  displayedColumns: string[] = ['empId', 'name', 'jobTitle', 'department'];
  dataSource = ELEMENT_DATA;

  public openViewEmployee(row: any) {
    console.log(row);
  }
}
