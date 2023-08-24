import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit{
  public events:any=[];

  constructor(private _eventService: EventsService){}

  ngOnInit(): void {
      this.events=this._eventService.getEvents();
  }

}
