import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Response} from "@angular/http";
import { Observable, of  } from 'rxjs';
import { Employee } from "src/app/models/Employee/Employee";
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly API_USERS_URL = 'https://app.apacta.com/api/v1/users';
  private readonly API_KEY = '?api_key=dd3d895b-69f1-41fe-8249-3f46bbf11edf';

  constructor(private HTTP: HttpClient) { }
  
  public getEmployees(): Observable<Employee[]> {

    return this.HTTP.get<Employee[]>(this.API_USERS_URL + this.API_KEY);
  }
}
