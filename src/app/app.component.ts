import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { EmployeesComponent } from '../components/employees/employees.component';
import { DepartmentsComponent } from '../components/departments/departments.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    NgIf,
    RouterOutlet,
    SidebarComponent,
    EmployeesComponent,
    DepartmentsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public selectedItem = 'employees';

  onItemSelected(item: string) {
    this.selectedItem = item;
    console.log(this.selectedItem);
  }
}
