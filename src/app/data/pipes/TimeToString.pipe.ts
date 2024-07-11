import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeToNumber',
  standalone: true
})
export class TimeToNumberPipe implements PipeTransform {
  transform(timeString: number): string {
    const hours = Math.floor(timeString / 60);
    const minutes = timeString % 60;

    return `${hours}h ${minutes}m`;
  }
}
