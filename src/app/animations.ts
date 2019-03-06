import { trigger, transition, style, state, animate, keyframes } from '@angular/animations';

export let fade = trigger('fade', [
    //  state('void', style({opacity: 0})),
     transition('void =>*', [ // or alias :enter
       style({ backgroundColor: '#212121', opacity: 0}), // or just use state
       animate(500)
     ]),
     transition('* => void', [ // or alias :leave
         animate( 500, style({ opacity: 0}) )
     ])
   ]);
export let slide = trigger('slide', [
    // state('void', style({transform: 'translateX(-20px)'})),
     transition(':enter', [
        style({transform: 'translateX(-20px)'}),
        animate(500)
     ]),
     transition(':leave', [
         animate('0.5s ease-in', keyframes([
            style({
                offset: .2,
                opacity: 1,
                transform: 'translateX(20px)'
            }),
            style({
                offset: 1,
                opacity: 0,
                transform: 'translateX(-100%)'
            })
        ]))
     ])
   ]);
