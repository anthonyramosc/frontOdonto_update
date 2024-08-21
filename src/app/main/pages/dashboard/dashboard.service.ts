import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FullCalendarModule } from 'primeng-lts/fullcalendar';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getEvents() {
    return this.http.get<any[]>('showcase/resources/data/calendarevents.json')
                .toPromise()
                .then(data => { return data; });
  }
}
