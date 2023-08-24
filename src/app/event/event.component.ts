import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit{
  public events :any = [];

  constructor(private _eventsService: EventsService){}

  ngOnInit(): void {
    this.events=this._eventsService.getEvents();
  }
}
