import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../../models/Task';
import { UiService } from '../../../services/ToDoServices/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Output() OnAddTask: EventEmitter<Task> = new EventEmitter();
  text: string = "";
  day: string = "";
  reminder: boolean = false;
  showAddTask: boolean = false;
  subscription!: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value)
  }

  onSubmit(){
    if(this.text.length <= 0 || this.day.length <= 0){
      alert("Please fill task and day fields");
      return;
    }
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.OnAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
