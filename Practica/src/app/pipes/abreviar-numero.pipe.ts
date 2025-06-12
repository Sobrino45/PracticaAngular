import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abreviarNumero',
  standalone: true
})
export class AbreviarNumeroPipe implements PipeTransform {
  transform(value: number | null | undefined): string {
    if (value == null || isNaN(value)) {
      return 'N/A';
    }

    if (value >= 1_000_000_000) {
      return (value / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'G';
    } else if (value >= 1_000_000) {
      return (value / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
    } else if (value >= 1_000) {
      return (value / 1_000).toFixed(1).replace(/\.0$/, '') + 'k';
    } else {
      return value.toString();
    }
  }
}
