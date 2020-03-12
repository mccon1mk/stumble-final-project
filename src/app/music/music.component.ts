import { Component, OnInit } from '@angular/core';
import {TicketmasterApiService} from '../ticketmaster-api.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  public music;

  constructor(private _TicketmasterApiService: TicketmasterApiService) { }

  ngOnInit() {


  }
 getMusic() {
this._TicketmasterApiService.getMusic().subscribe(resp => this.music = resp['_embedded'] ['events']);
 }
}
