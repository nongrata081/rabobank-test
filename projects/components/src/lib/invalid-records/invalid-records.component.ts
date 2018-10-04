import { Component, OnInit } from '@angular/core';
import { FetchRecordsService } from '../fetch-records/fetch-records.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'lib-invalid-records',
	templateUrl: './invalid-records.component.html',
	styleUrls: ['./invalid-records.component.css']
})
export class InvalidRecordsComponent implements OnInit {
	pageTitle = 'Invalid records';
	referenceTableHeading = 'By reference';
	balanceTableHeading = 'By end balance';
	invalidReference = [];
	invalidEndBalance = [];
	json: Observable<any>;
	displayedColumns: string[] = ['reference', 'description'];
	columnTitles = {
		reference: 'Transaction reference',
		description: 'Description'
	};

	constructor(public fetchRecordsService: FetchRecordsService) {}

	ngOnInit() {
		this.json = this.fetchRecordsService.getJSON();
		this.fetchRecordsService.getJSON().subscribe(data => {
			this.invalidReference =
				data.invalidRecords.byReference;
			this.invalidEndBalance =
				data.invalidRecords.byEndBalance;
		});
	}
}
