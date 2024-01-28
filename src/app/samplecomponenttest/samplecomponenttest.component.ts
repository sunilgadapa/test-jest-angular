import { Component} from '@angular/core';
import { AddservicetaskService } from '../addservicetask.service';

@Component({
  selector: 'app-samplecomponenttest',
  standalone: true,
  imports: [],
  templateUrl: './samplecomponenttest.component.html',
  styleUrl: './samplecomponenttest.component.css'
})
export class SamplecomponenttestComponent {

  serviceData : any;

  constructor(private empservice:AddservicetaskService) {}

  ngOninit(): void{
    this.getserviceData();
  }

  getserviceData(){
    this.empservice.getEmpTaskInfo().subscribe({
    next: (data: any) => {
     this.serviceData = data;
     console.log('checking output serive data',this.serviceData);
    },
    error: (err: any) => {

    }, 
  
    })


 
  }
}

