import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncator',
  pure:false
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, maxLength: number = 200): string {
    console.log('pipe call');
    if (value.length > maxLength) return `${value.substring(0, maxLength)}...`;
    else return value;
  }
}
