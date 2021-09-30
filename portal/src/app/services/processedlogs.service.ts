import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, map, tap, retry } from 'rxjs/operators';

import { Plogs } from '../schemas/plogs';

const httpOptions = {
  observe: 'response',
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ProcessedlogsService {
  private url: string =
    environment.PlogBaseURL + environment.BasePath + environment.PlogEndPoint;
  id: any = {};

  constructor(private http: HttpClient) {}

  createProcessedLogs(post: Plogs): Observable<Plogs> {
    this.url = this.url;
    return this.http.post<Plogs>(this.url, JSON.stringify(post));
  }
}
