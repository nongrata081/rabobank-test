import { Component, OnInit } from '@angular/core';
import { FetchRecordsService } from '../fetch-records/fetch-records.service';

@Component({
	selector: 'lib-invalid-records',
	templateUrl: './invalid-records.component.html',
	styleUrls: ['./invalid-records.component.css']
})
export class InvalidRecordsComponent implements OnInit {
	invalidReference = [];
	invalidEndBalance = [];
	displayedColumns: string[] = ['reference', 'description'];

	constructor(private fetchRecordsService: FetchRecordsService) {}

	ngOnInit() {
		this.fetchRecordsService.getJSON().subscribe(data => {
			this.invalidReference = data.invalidRecords.byReference;
			this.invalidEndBalance = data.invalidRecords.byEndBalance;
		});
	}
}
