import { Component } from '@angular/core';
import { TicketmasterApiService } from './ticketmaster-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stumble-app';

  constructor(private ticketMasterApi: TicketmasterApiService) { }

  loadData() {
    console.log('OKAYYYYY JOHNATHON!');
    this.ticketMasterApi.callApi().subscribe(data => {
      console.log(data);
    })
  }
}
