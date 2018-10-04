import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Records } from './transaction-record.interface';

@Injectable({
	providedIn: 'root'
})
export class FetchRecordsService {
	url = 'assets/records/invalid-records.json';
	constructor(private http: HttpClient) {}

	public getJSON(): Observable<Records> {
		return this.http.get<any>(this.url);
	}
}
