import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TicketmasterApiService {

  apiUrl: string;
  constructor(private http: HttpClient) { }
}
