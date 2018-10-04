import {
	async,
	ComponentFixture,
	fakeAsync,
	TestBed
} from '@angular/core/testing';

import { InvalidRecordsComponent } from './invalid-records.component';
import { MatTableModule } from '@angular/material';
import { DebugElement } from '@angular/core';
import { of } from 'rxjs';
import { FetchRecordsService } from '../fetch-records/fetch-records.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { expectTableToMatchContent } from './invalid-records.spec-utils';
import * as fetchRecordsServiceStub from '../fetch-records/fetch-records.service.stub.json';

describe('InvalidRecordsComponent', () => {
	let component: InvalidRecordsComponent;
	let fixture: ComponentFixture<InvalidRecordsComponent>;
	let de: DebugElement;
	let fetchRecordsService: FetchRecordsService;
	let serviceStub: any;

	beforeEach(async(() => {
		serviceStub = {
			getJSON: () => of(fetchRecordsServiceStub)
		};

		TestBed.configureTestingModule({
			imports: [MatTableModule, HttpClientTestingModule],
			declarations: [InvalidRecordsComponent],
			providers: [
				{
					provide: FetchRecordsService,
					useValue: serviceStub
				}
			]
		}).compileComponents();

		fetchRecordsService = TestBed.get(FetchRecordsService);
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(
			InvalidRecordsComponent
		);
		component = fixture.componentInstance;
		de = fixture.debugElement;
		fixture.detectChanges();
	});

	it('should render proper content-page-title', () => {
		expect(
			de.query(By.css('.content-page-title')).nativeElement
				.innerText
		).toEqual(component.pageTitle);
	});

	it('should render proper table headings', () => {
		expect(
			de.query(By.css('.table-heading.reference'))
				.nativeElement.innerText
		).toEqual(component.referenceTableHeading);
		expect(
			de.query(By.css('.table-heading.balance'))
				.nativeElement.innerText
		).toEqual(component.balanceTableHeading);
	});

	it('should retrieve proper amount of records', () => {
		fixture.detectChanges();
		expect(component.invalidReference.length).toEqual(3);
		expect(component.invalidEndBalance.length).toEqual(1);
	});

	it('should render reference table with proper content', () => {
		fixture.detectChanges();

		const tableElement = fixture.nativeElement.querySelector(
			'.invalid-reference'
		);
		const data = component.invalidReference;
		const columns = component.columnTitles;
		expectTableToMatchContent(tableElement, [
			[columns.reference, columns.description],
			[data[0].reference, data[0].description],
			[data[1].reference, data[1].description],
			[data[2].reference, data[2].description]
		]);
	});

	it('should render end balance table with proper content', () => {
		fixture.detectChanges();

		const tableElement = fixture.nativeElement.querySelector(
			'.invalid-end-balance'
		);
		const data = component.invalidEndBalance;
		const columns = component.columnTitles;
		expectTableToMatchContent(tableElement, [
			[columns.reference, columns.description],
			[data[0].reference, data[0].description]
		]);
	});
});
