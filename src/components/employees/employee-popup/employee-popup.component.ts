import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { PopupComponent } from '../../common/popup/popup.component';
import { EmployeeElement } from '../employees.component';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { EDepartment, EJobTitle } from '../../../enums/common.enum';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-employee-popup',
  imports: [PopupComponent, ReactiveFormsModule, NgForOf],
  templateUrl: './employee-popup.component.html',
  styleUrls: ['./employee-popup.component.scss'],
})
export class EmployeePopupComponent {
  @Input() selectedEmployee: EmployeeElement | undefined;
  @Input() showPopup: boolean = false;

  @Output() close = new EventEmitter<void>();

  employeeForm = new FormGroup({
    empId: new FormControl(''),
    name: new FormControl(''),
    jobTitle: new FormControl(''),
    department: new FormControl(''),
  });

  public departments = Object.values(EDepartment);
  public jobTitles = Object.values(EJobTitle);

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedEmployee'] && this.selectedEmployee) {
      this.employeeForm.patchValue({
        empId: this.selectedEmployee.empId.toString(),
        name: this.selectedEmployee.name,
        jobTitle: this.selectedEmployee.jobTitle,
        department: this.selectedEmployee.department.toString(),
      });
    }
  }

  public closePopup() {
    this.close.emit();
  }

  public onSubmit() {
    if (this.employeeForm.valid) {
      console.log(this.employeeForm.value);
      this.closePopup();
    }
  }

  public onReset() {
    // set initial values
    this.employeeForm.patchValue({
      empId: this.selectedEmployee?.empId.toString() || '',
      name: this.selectedEmployee?.name || '',
      jobTitle: this.selectedEmployee?.jobTitle || '',
      department: this.selectedEmployee?.department.toString() || '',
    });
  }
}
