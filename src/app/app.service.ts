import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { Driver } from './Driver';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http : HttpClient) {}

  getAllDrivers(): Observable<any> {
    let url = "https://localhost:7054/Driver/all";
    return this.http.get(url);
  }

  createDriver(driver: Driver): Observable<any> {
    let url = "https://localhost:7054/Driver";
    return this.http.post(url, driver);
  }

}