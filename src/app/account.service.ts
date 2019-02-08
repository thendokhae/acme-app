import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Account } from '../app/models/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  BASE_URL = 'http://localhost:8080/api/';
  constructor(private httpClient: HttpClient) { }

  public getAllAcccount(): Observable<any> {
    return this.httpClient.get<any[]>(this.BASE_URL + 'accounts');
  }
}
