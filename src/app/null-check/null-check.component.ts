import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-null-check',
  templateUrl: './null-check.component.html',
  styleUrls: ['./null-check.component.scss'],
})
export class NullCheckComponent implements OnInit {
  // CDP-10430
  title: string = '';

  constructor() {}

  ngOnInit(): void {
    // window['dessert'] = function (name: string) {
    //   console.log('name');
    // };

    // the following line was introduced in live code, causing the menu to not appear.  the default auto-generated unit tests catch this--both in the component itself and it's parent
    //window['dessert']('other');

    // if (window['dessert']) {
    //   window['dessert']('other');
    // }

    this.title = 'Pretend this is the main header menu';
  }
}
