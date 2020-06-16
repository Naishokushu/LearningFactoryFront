import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sessionDate'
})
export class SessionDatePipe implements PipeTransform {

  public cards: any;
  public minValue: Date;
  public maxValue: Date;
  public minValueNumber: number;
  public maxValueNumber: number;

  constructor() {

  }
  transform(cards: any, minValue: Date, maxValue: Date): any {

    this.maxValueNumber = Date.parse(maxValue.toString()) + 86400000;
    this.minValueNumber = Date.parse(minValue.toString());
    if (!cards) {
      return cards;
    } else {
      cards = cards.filter((el) => {
        el.date = new Date(el.date);
        el.date = Date.parse(el.date.toString());
        return el.date <= this.maxValueNumber && el.date >= this.minValueNumber;
      }
      );
      return cards.sort();
    }
  }
}
