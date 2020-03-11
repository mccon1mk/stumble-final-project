import { Component, OnInit } from '@angular/core';
import { TicketmasterApiService } from '../ticketmaster-api.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  public sports;

  constructor(private __TicketmasterApiService: TicketmasterApiService) { }

  ngOnInit() {
    this.__TicketmasterApiService.getSports().subscribe(resp => this.sports = resp['_embedded']['events'])

  }

}
