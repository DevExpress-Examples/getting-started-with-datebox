import { Injectable } from '@angular/core';


const holidays = [
    new Date(0, 0, 1),
    new Date(0, 0, 20),
    new Date(0, 1, 17),
    new Date(0, 4, 10),
    new Date(0, 4, 25),
    new Date(0, 5, 21),
    new Date(0, 6, 4),
    new Date(0, 8, 7),
    new Date(0, 9, 5),
    new Date(0, 9, 12),
    new Date(0, 10, 11),
    new Date(0, 10, 26),
    new Date(0, 10, 27),
    new Date(0, 11, 24),
    new Date(0, 11, 25),
    new Date(0, 11, 31)
];

@Injectable({
  providedIn: 'root'
})
export class AppService {

  getHolidays(): Date[] {
      return holidays;
  }
}
