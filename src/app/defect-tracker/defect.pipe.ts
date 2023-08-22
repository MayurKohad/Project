import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defect'
})
export class DefectPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) return null;
    if (!args) return value;
    
    args =args.toLowerCase();
// debugger;

    return value.filter(function(item) {
      return JSON.stringify(item).toLowerCase().includes(args);
    // => {
    //   let rVal = (val.id.toLocaleLowerCase().includes(args)) || (val.Whizible_id.toLocaleLowerCase().includes(args));
    //   return rVal;
    })

  }
}
