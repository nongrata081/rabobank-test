import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TransactionRecord } from './transaction-record.interface';

@Injectable({
	providedIn: 'root'
})
export class FetchRecordsService {
	url = './records/dist/invalid-records.json';
	constructor(private http: HttpClient) {}

	public getJSON(): Observable<any> {
		return this.http.get<any>(this.url);
	}
}
