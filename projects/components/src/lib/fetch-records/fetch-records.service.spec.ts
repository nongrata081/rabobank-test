import { TestBed, inject } from '@angular/core/testing';

import { FetchRecordsService } from './fetch-records.service';

describe('FetchRecordsService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [FetchRecordsService]
		});
	});

	it('should be created', inject(
		[FetchRecordsService],
		(service: FetchRecordsService) => {
			expect(service).toBeTruthy();
		}
	));
});
