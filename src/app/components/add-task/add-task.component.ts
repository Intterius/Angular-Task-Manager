import { UiService } from './../../services/ui.service';
import { Task } from './../../mock-tasks';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  @Output() createdTask: EventEmitter<Task> = new EventEmitter();

  text: string;
  dayTime: string;
  reminder: boolean = false;
  subscription: Subscription;
  showForm: boolean = false;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => {
      this.showForm = value;
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit(event: Event) {
    event.preventDefault();
    if (!this.text) {
      alert('Please introduce a description for you task.');
      return;
    }
    const task = {
      text: this.text,
      day: this.dayTime,
      reminder: this.reminder,
    };
    this.createdTask.emit(task);

    this.text = '';
    this.dayTime = '';
    this.reminder = false;
  }
}
