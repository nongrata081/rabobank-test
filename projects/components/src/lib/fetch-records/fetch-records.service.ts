import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class FetchRecordsService {
	constructor(private http: HttpClient) {}

	public getJSON(): Observable<any> {
		return this.http.get('./records/dist/invalid-records.json');
	}
}
