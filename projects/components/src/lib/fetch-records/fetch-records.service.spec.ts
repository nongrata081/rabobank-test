import { TestBed } from '@angular/core/testing';

import { FetchRecordsService } from './fetch-records.service';
import {
	HttpClientTestingModule,
	HttpTestingController
} from '@angular/common/http/testing';
// import { TransactionRecords } from './transaction-record.interface';

fdescribe('FetchRecordsService', () => {
	let service: FetchRecordsService;
	let httpMock: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [FetchRecordsService]
		});

		service = TestBed.get(FetchRecordsService);
		httpMock = TestBed.get(HttpTestingController);
	});

	afterEach(() => {
		httpMock.verify();
	});

	fit('should retrieve records from json file', () => {
		const transactionRecordsMock = [
			{
				reference: '112806',
				accountNumber: 'NL74ABNA0248990274',
				description: 'Candy from Jan de Vries',
				startBalance: '109.75',
				mutation: '-23.94',
				endBalance: '85.81'
			},
			{
				reference: '112806',
				accountNumber: 'NL91RABO0315273637',
				description: 'Clothes from Richard Theu�',
				startBalance: '31.03',
				mutation: '+0.27',
				endBalance: '31.3'
			}
		];
		service.getJSON().subscribe(records => {
			expect(records.length).toBe(2);
		});
		const request = httpMock.expectOne(service.url);
		expect(request.request.method).toBe('GET');
		request.flush(transactionRecordsMock);
	});
});
