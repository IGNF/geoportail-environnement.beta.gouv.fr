import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'extendDate'
})
export class ExtendDatePipe extends DatePipe implements PipeTransform {

  constructor(
    @Inject(LOCALE_ID) locale: string
  ) {
    super(locale);
  }

  override transform(value: any, format = 'mediumDate', timezone?: any, locale?: any): any {
    let transformed;
    try {
      transformed = super.transform(value, format, timezone, locale);
    } catch {
      return value;
    }
    if (transformed) {
      return transformed;
    }
    return '';
  }

}
