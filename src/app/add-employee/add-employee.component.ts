import { Component, OnInit} from '@angular/core';
import { EmplyeeserviceService } from '../emplyeeservice.service'

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent  {
  //constructor(private empservice:EmplyeeserviceService)
  constructor(private empservice:EmplyeeserviceService) { }

  latestItem = "send data to child"
  ngOninit(){
  this.getempDAta()

  }
  getempDAta(){
    
    }
}

