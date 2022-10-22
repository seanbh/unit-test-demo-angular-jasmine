import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountDataService {
  constructor() {}

  getAccountData() {
    return of({ name: 'Bill Johnson' });
  }
}
