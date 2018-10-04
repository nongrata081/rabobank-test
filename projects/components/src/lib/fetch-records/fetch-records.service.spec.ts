import { TestBed } from '@angular/core/testing';

import { FetchRecordsService } from './fetch-records.service';
import {
	HttpClientTestingModule,
	HttpTestingController
} from '@angular/common/http/testing';
import { Records } from './transaction-record.interface';
const FetchRecordsServiceStub: Records = require('./fetch-records.service.stub.json');

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

	it('should retrieve invalid reference records from json file', () => {
		const serviceStub =
			FetchRecordsServiceStub.invalidRecords.byReference;
		service.getJSON().subscribe(records => {
			expect(records.length).toBe(3);
		});
		const request = httpMock.expectOne(service.url);
		expect(request.request.method).toBe('GET');
		request.flush(serviceStub);
	});

	it('should retrieve invalid end balance records from json file', () => {
		const serviceStub =
			FetchRecordsServiceStub.invalidRecords.byEndBalance;
		service.getJSON().subscribe(records => {
			expect(records.length).toBe(1);
		});
		const request = httpMock.expectOne(service.url);
		expect(request.request.method).toBe('GET');
		request.flush(serviceStub);
	});
});
