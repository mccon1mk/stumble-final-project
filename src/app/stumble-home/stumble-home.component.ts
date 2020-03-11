import { Component, OnInit } from '@angular/core';
import { TicketmasterApiService } from '../ticketmaster-api.service';

@Component({
  selector: 'app-stumble-home',
  templateUrl: './stumble-home.component.html',
  styleUrls: ['./stumble-home.component.css']
})
export class StumbleHomeComponent implements OnInit {

  public randomData;


  constructor(private __TicketmasterApiService: TicketmasterApiService) { }

  textSearch = null;

  userSearch = {
    textSearch: this.textSearch
  };


  ngOnInit() {

    // this.__TicketmasterApiService.randomData().subscribe(data => {
    //   console.log(data['_embedded']['attractions'][0]['images'][1]['url']);
    // })

    // this.__TicketmasterApiService.randomData().subscribe(resp => console.log(resp['_embedded']['attractions']))

    // this.__TicketmasterApiService.randomData().subscribe(resp => this.randomData = resp['_embedded']['attractions'])

  }



  onSearch() {
    // let searchCriteria: any = this.textSearch;
    this.__TicketmasterApiService.randomData().subscribe(data => {
      this.randomData = (data as any).hits
      console.log(data);
    });


  }
}
