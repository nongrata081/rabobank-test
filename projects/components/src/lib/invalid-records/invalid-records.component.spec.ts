import {
	async,
	ComponentFixture,
	fakeAsync,
	TestBed
} from '@angular/core/testing';

import { InvalidRecordsComponent } from './invalid-records.component';
import { MatTableModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FetchRecordsService } from '../fetch-records/fetch-records.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';

describe('InvalidRecordsComponent', () => {
	let component: InvalidRecordsComponent;
	let fixture: ComponentFixture<InvalidRecordsComponent>;
	let de: DebugElement;
	let fetchRecordsService: FetchRecordsService;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [MatTableModule, HttpClientTestingModule],
			declarations: [InvalidRecordsComponent],
			providers: [FetchRecordsService]
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

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should have "reference" and "describe" columns for data table', () => {
		expect(component.displayedColumns).toEqual([
			'reference',
			'description'
		]);
	});

	it('should have records data defined', () => {
		fetchRecordsService.getJSON().subscribe(data => {
			expect(data).toBeDefined();
		});
	});
});
