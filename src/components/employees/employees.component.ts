import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { EmployeePopupComponent } from './employee-popup/employee-popup.component';
import { EDepartment, EJobTitle } from '../../enums/common.enum';
import { MatIconModule } from '@angular/material/icon';

export interface EmployeeElement {
  empId: number;
  name: string;
  jobTitle: EJobTitle;
  department: EDepartment;
}

const ELEMENT_DATA: EmployeeElement[] = [
  {
    empId: 1,
    name: 'Hydrogen',
    jobTitle: EJobTitle.SoftwareEngineer,
    department: EDepartment.SoftwareDevelopment,
  },
  {
    empId: 2,
    name: 'Helium',
    jobTitle: EJobTitle.SoftwareEngineer,
    department: EDepartment.SoftwareDevelopment,
  },
  {
    empId: 3,
    name: 'Lithium',
    jobTitle: EJobTitle.SoftwareEngineer,
    department: EDepartment.SoftwareDevelopment,
  },
  {
    empId: 4,
    name: 'Beryllium',
    jobTitle: EJobTitle.SoftwareEngineer,
    department: EDepartment.SoftwareDevelopment,
  },
  {
    empId: 5,
    name: 'Boron',
    jobTitle: EJobTitle.SoftwareEngineer,
    department: EDepartment.SoftwareDevelopment,
  },
];

@Component({
  selector: 'app-employees',
  imports: [MatTableModule, MatIconModule, EmployeePopupComponent],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss',
})
export class EmployeesComponent {
  public displayedColumns: string[] = [
    'empId',
    'name',
    'jobTitle',
    'department',
    'actions',
  ];
  public dataSource = ELEMENT_DATA;
  public showPopup = false;

  public selectedEmployee: EmployeeElement | undefined;

  public openViewEmployeePopup(row: any) {
    this.showPopup = true;
    this.selectedEmployee = row;
  }

  closePopup() {
    this.showPopup = false;
    this.selectedEmployee = undefined;
  }

  onEdit(row: EmployeeElement) {
    this.openViewEmployeePopup(row);
  }

  onDelete(row: EmployeeElement) {}
}
