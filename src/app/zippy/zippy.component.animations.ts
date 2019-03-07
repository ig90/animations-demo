import { trigger, state, style, transition, animate } from '@angular/animations';

export const expandCollapse = trigger('expandCollapse', [
    state('collapsed', style({
        height: 0,
        paddingTop: 0,
        paddingBottom: 0,
    })),
    // state('expanded', style({
    //     height: '*',
    //     padding: '*',
    //     overflow: 'hidden'
    // })),
    transition('collapsed => expanded', [
        animate('300ms ease-out')
    ]),
    transition('expanded => collapsed', [
      animate('300ms ease-in')
  ])
])