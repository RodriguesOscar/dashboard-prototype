import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Destination } from '../models/destination';

interface ApiResponse {
  destinations: Destination[];
}

@Injectable({
  providedIn: 'root',
})
export class DestinationService {
  private apiUrl = 'https://dummyjson.com/c/47be-fa6a-4fd7-a60c';

  constructor(private http: HttpClient) {}

  getDestinations(): Observable<Destination[]> {
    return this.http.get<ApiResponse>(this.apiUrl).pipe(map((response) => response.destinations));
  }

  getDestination(id: number): Observable<Destination> {
    return this.http
      .get<ApiResponse>(this.apiUrl)
      .pipe(map((response) => response.destinations.find((dest) => dest.id === id)!));
  }
}
