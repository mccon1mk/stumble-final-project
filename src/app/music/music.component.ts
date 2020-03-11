import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  constructor() { }

  ngOnInit() {
        // Below is to populate the drop down with interests from ticket master website.
    // this.__TicketmasterApiService.getInterests()
    // .subscribe(Interests => this.Interests = Interests['_embedded']['classifications']);

  //   this.__TicketmasterApiService.getInterests()
  //   .subscribe(Interests => console.log(Interests['_embedded']['classifications']))
  // }

  }

}
