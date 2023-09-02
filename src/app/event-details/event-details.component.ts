import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit{
  public events:any;
  public errorMsg:any;

  constructor(private _eventService: EventsService){}

  ngOnInit(): void {
      this._eventService.getEvents()
      .subscribe({next: data => this.events = data, error: err=> this.errorMsg = err});;
  }

}
