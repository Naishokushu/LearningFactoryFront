import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sujet'
})
export class SujetPipe implements PipeTransform {

  transform(Cards: any, Topic: string): any {
    console.log('Slides :');
    console.log(Cards);
    console.log('topic :');
    console.log(Topic);
    if (!Cards || !Topic || Topic === 'all') {
      console.log('on filtre pas');
      return Cards;
    }

    console.log('on filtre');
    console.log(Cards.filter(el => el === Topic));
    return Cards.filter(el => el === Topic);
  }

}
