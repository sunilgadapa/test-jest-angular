import { Injectable } from '@angular/core';
import {Observable,of, from} from 'rxjs';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/throw';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AddservicetaskService {

  constructor(private http:HttpClient) {}

  getEmpTaskInfo(): Observable<any> {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    return this.http.get(url).pipe(map((response: any) => response.json()));
  
    }

}
