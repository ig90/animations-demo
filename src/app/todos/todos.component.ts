import { Component } from '@angular/core';
import { fade, slide, fadeInAnimation, bounceOutLeftAnimation } from '../animations';
import { transition, trigger, query, style, animate, useAnimation, animateChild, group, stagger } from '@angular/animations';
// import { trigger, transition, state, style, animate } from '@angular/animations';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations: [
   // fade,
   // slide,
    trigger('todosAnimation', [
      transition(':enter', [
        group([
          query('h1', [
            style({transform: 'translateY(-20px)'}),
            animate(1000)
          ]),
          query('@todoAnimation',
            stagger('200ms', animateChild()) // 200ms delay between animating each todo item
          )
        ])
      ])
    ]),
    trigger('todoAnimation', [
      transition(':enter', [
          useAnimation(fadeInAnimation, {
              params: {
                  duration: '500ms',
              }
          })
      ]),
      transition(':leave', [
          style({ backgroundColor: 'red'}),
          animate(500),
          useAnimation(bounceOutLeftAnimation)
      ])
    ])
  ]
})
export class TodosComponent {
  items: any[] = [
    'task 1',
    'task 2',
    'task 3',
    'task 4',
    'task 5',
    'task 6'
  ];

  addItem(input: HTMLInputElement) {
    this.items.splice(0, 0, input.value);
    input.value = '';
  }

  removeItem(item) {
    const index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }

  animationStarted($event) {
    console.log($event);
  }
  animationDone($event) {
    console.log($event);
  }
}
