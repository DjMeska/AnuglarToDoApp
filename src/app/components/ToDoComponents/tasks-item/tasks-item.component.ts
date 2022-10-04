import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Task} from '../../../models/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent  {

  faTimes = faTimes

  @Input() task : any
  @Output() OnDeleteTask: EventEmitter<Task> = new EventEmitter<Task>()
  @Output() OnToggleReminder: EventEmitter<Task> = new EventEmitter<Task>()

  constructor() { }

  onDelete(task: Task) {
    this.OnDeleteTask.emit(task);
  }

  onToggle(task: Task) {
    this.OnToggleReminder.emit(task);
  }


}
