import { Pipe, PipeTransform } from '@angular/core';
import { AddtaskComponent } from '../app/addtask/addtask.component'
@Pipe({
  name: 'checkdata',
  standalone: true
})
export class CheckdataPipe implements PipeTransform {

  transform(items: any): unknown {
   
  
    return null;
  }

}
