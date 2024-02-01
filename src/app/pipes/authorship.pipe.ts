import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'authorship',
})
export class AuthorshipPipe implements PipeTransform {
  transform(value: string[]): string {
    if (value?.length) {
      return value[0];
    }

    return '';
  }
}
