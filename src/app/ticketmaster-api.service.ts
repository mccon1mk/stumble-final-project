import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TicketmasterApiService {

  apiUrl: string;

  constructor(private http: HttpClient) { }

  randomData() {
    let searchUrl = `https://app.ticketmaster.com/discovery/v2/attractions.json?apikey=oJg1ssT8GkVknKJ2kFY8qAx3Dzw4GeYd`
    return this.http.get(searchUrl)
  }

  getMusic() {
    let musicUrl =`https://app.ticketmaster.com/discovery/v2/events.json?apikey=oJg1ssT8GkVknKJ2kFY8qAx3Dzw4GeYd&keyword=music`
    return this.http.get(musicUrl);
  }

  
}


