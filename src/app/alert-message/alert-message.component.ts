import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.scss'],
})
export class AlertMessageComponent implements OnInit {
  // CDP-7590
  @Input() accountName: string = 'Account3423';

  constructor() {}

  ngOnInit(): void {}

  alert() {
    const msg = `${this.accountName}`;
    //const msg = `<span class="glassbox">${this.accountName}</span>`;
    window.alert(`Are you sure you want to delete ${msg}`);
  }
}
