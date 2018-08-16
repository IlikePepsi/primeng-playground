import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

import { MessageService } from './messages/message.service';

import { MockData } from './mock-data';

const httpOtions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json',
	})
}

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

	constructor(
		private http: HttpClient,
		private messageService: MessageService) { }

	private mockDataUrl = 'api/mockdata';

	private log(message: string) {
		this.messageService.add(`MockDataService: ${message}`);
	}

	getData(): Observable<MockData[]> {
		return this.http.get<MockData[]>(this.mockDataUrl)
			.pipe(
				tap(_ => this.log('fetched mockData')),
				catchError(this.handleError('getData', []))
				);
	}

	private handleError<T> (operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			console.error(error);
			this.log(`${operation} failed: ${error.message}`);
			return of(result as T);
		};
	}
}


