import { TestBed } from '@angular/core/testing';

import { FetchRecordsService } from './fetch-records.service';
import {
	HttpClientTestingModule,
	HttpTestingController
} from '@angular/common/http/testing';
// import { TransactionRecords } from './transaction-record.interface';
const FetchRecordsServiceStub = require('./fetch-records.service.stub.json');

describe('FetchRecordsService', () => {
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

	it('should retrieve records from json file', () => {
		const serviceStub = FetchRecordsServiceStub.invalidRecords.byReference;
		service.getJSON().subscribe(records => {
			expect(records.length).toBe(3);
		});
		const request = httpMock.expectOne(service.url);
		expect(request.request.method).toBe('GET');
		request.flush(serviceStub);
	});
});
