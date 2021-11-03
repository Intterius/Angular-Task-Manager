import { Task } from './../../mock-tasks';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Output() deletedTask: EventEmitter<Task> = new EventEmitter();
  @Output() toggleTask: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}

  deleteTask(task: Task): void {
    this.deletedTask.emit(task);
  }

  toggleReminder(task: Task): void {
    this.toggleTask.emit(task);
  }
}
