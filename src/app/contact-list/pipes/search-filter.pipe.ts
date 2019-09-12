import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(data: any, name?: any): any {
    if(name === undefined) return data;

    return data.filter(item=>{
      return item.firstName.toLowerCase().includes(name.toLowerCase());
    })



  }

}
