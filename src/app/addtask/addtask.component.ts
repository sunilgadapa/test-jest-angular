import { Component, OnInit, Input} from '@angular/core';
import { AddservicetaskService } from '../addservicetask.service';
import { AddEmployeeComponent } from '../add-employee/add-employee.component'


@Component({
  selector: 'app-addtask',
  standalone: true,
  imports: [],
  templateUrl: './addtask.component.html',
  styleUrl: './addtask.component.css'
})
export class AddtaskComponent {

  constructor(private empservice:AddservicetaskService) { }
  @Input() item = "";

  ngonit(){
   
    }
  }


