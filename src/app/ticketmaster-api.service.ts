import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TicketmasterApiService {

  apiUrl: string;
  constructor(private http: HttpClient) { }

  callApi() {
    let searchUrl = `https://app.ticketmaster.com/discovery/v1/events.json?apikey=zgE7vAvkLIfsIIpuoTsD8Y7PGndTek6Y`
    return this.http.get(searchUrl)
  }
}


