import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class TicketmasterApiService {

  apiUrl: string;

  constructor(private http: HttpClient) { }

  randomData() {
    let searchUrl = `https://app.ticketmaster.com/discovery/v2/attractions.json?size=200?apikey=${environment.apiKey}`
    return this.http.get(searchUrl)
  }

  getMusic() {
    let InterestsUrl = "https://app.ticketmaster.com/discovery/v2/classifications.json?size=200&apikey=oJg1ssT8GkVknKJ2kFY8qAx3Dzw4GeYd"
    return this.http.get(InterestsUrl);
  }

  userSearch() {
    let searchTerm = "https://app.ticketmaster.com/discovery/v2/attractions.json?apikey=oJg1ssT8GkVknKJ2kFY8qAx3Dzw4GeYd&keyword=family"
    return this.http.get(searchTerm);
  }
}


