import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mail'
})
export class MailPipe implements PipeTransform {

  transform(name: string | undefined): string {
    return `${name}@labfortraining.it`;
  }

}
