import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'menuFilter'
})
export class MenuFilterPipe implements PipeTransform {

  transform(data: any, letter?: any): any {


    if(data == undefined) return null

    else{

      return data.filter(name=>{
        
        if (name.firstName == null) return

        else{return name.firstName.charAt(0).toUpperCase() == letter}
      })
    
    }

  }

}
