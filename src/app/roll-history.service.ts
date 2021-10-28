import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RollHistoryService {

  constructor() { }

  rollHistory: any[] = [];

  addRollHistory = (rh: any) => {
    this.rollHistory = [
      rh, ...this.rollHistory
    ]
  };

}
