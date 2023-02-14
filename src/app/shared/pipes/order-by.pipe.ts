import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(array: any[], key: string, isAsc: boolean): any[] {
    return array.sort((a: any, b: any) => {
      if(a[key] === b[key]) return 0;
      return isAsc ? (a[key] > b[key] ? -1 : 1) : (b[key] > a[key] ? -1 : 1);
    });
  }

}
