import { trigger, transition, style, state, animate, keyframes, animation } from '@angular/animations';

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
     transition(':enter', [
        style({transform: 'translateX(-20px)'}),
        animate(500)
     ]),
     transition(':leave', [
     ])
   ]);

export let fadeInAnimation = animation([
    style({ opacity: 0}),
    animate('{{ duration }} {{ easing }}')
], {
    params: {
        duration: '2s',
        easing: 'ease-out'
    }
});

export let bounceOutLeftAnimation = animation(
     animate('0.5s ease-in', keyframes([
        style({
            offset: .2,
            opacity: 1,
            transform: 'translateX(10px)'
        }),
        style({
            offset: 1,
            opacity: 0,
            transform: 'translateX(-100%)'
        })
    ]))
);
