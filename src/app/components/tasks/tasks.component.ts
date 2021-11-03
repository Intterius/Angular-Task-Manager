import { TaskService } from './../../services/task.service';
import { Component, OnInit } from '@angular/core';
import { Task } from '../../mock-tasks';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  deleteTask(task: Task): void {
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter((el) => el.id !== task.id);
    });
  }

  toggleTaskReminder(task: Task): void {
    task.reminder = !task.reminder;
    this.taskService.toggleTask(task).subscribe();
  }

  addTask(task: Task): void {
    this.taskService.addTask(task).subscribe((t) => {
      this.tasks.unshift(t);
    });
  }
}
