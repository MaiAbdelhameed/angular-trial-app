import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEvent } from './events';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private eventsUrl: string = "/assets/data/events.json";

  constructor(private http: HttpClient) { }

  getEvents(): Observable<IEvent>{
    return this.http.get<IEvent>(this.eventsUrl).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(() => error.message || "Server Error");

  }
}
