import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmplyeeserviceService {
  getEmpTaskInfo() {
    throw new Error('Method not implemented.');
  }

  constructor(private https: HttpClient) { }


}
