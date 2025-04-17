import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  @Output() itemSelected = new EventEmitter<string>();

  public selectComponent(item: string) {
    this.itemSelected.emit(item);
  }
}
