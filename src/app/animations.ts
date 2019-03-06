import { trigger, transition, style, state, animate } from '@angular/animations';

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
