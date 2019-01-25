import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeeklyOverviewService {

  private readonly API_TIME_ENTRY_TYPES_URL = 'https://app.apacta.com/api/v1/time_entry_types';
  private readonly API_TIME_ENTRIES_URL = 'https://app.apacta.com/api/v1/time_entries';
  private readonly API_KEY = '?api_key=dd3d895b-69f1-41fe-8249-3f46bbf11edf';
  
  constructor(private HTTP: HttpClient) { }

  public getTimeEntryTypes() {
    return this.HTTP.get(this.API_TIME_ENTRY_TYPES_URL + this.API_KEY);
  }

  public getTimeEntries() {
    return this.HTTP.get(this.API_TIME_ENTRIES_URL + this.API_KEY);
  }
}
