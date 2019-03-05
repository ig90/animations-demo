// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-zippy',
//   templateUrl: './zippy.component.html',
//   styleUrls: ['./zippy.component.scss']
// })
// export class ZippyComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import { Component, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css'],
})
export class ZippyComponent  {
  @Input('title') title: string;
  isExpanded: boolean;

  toggle() { 
    this.isExpanded = !this.isExpanded;
  }
}