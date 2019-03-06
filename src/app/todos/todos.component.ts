import { Component } from '@angular/core';
import { fade, slide } from '../animations';
// import { trigger, transition, state, style, animate } from '@angular/animations';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations: [
    fade,
    slide
  ]
})
export class TodosComponent {
  items: any[] = [
    'task 1',
    'task 2',
    'task 3'];

  addItem(input: HTMLInputElement) {
    this.items.splice(0, 0, input.value);
    input.value = '';
  }

  removeItem(item) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }

  animationStarted($event) {
    console.log($event);
  }
  animationDone($event) {
    console.log($event);
  }
}
