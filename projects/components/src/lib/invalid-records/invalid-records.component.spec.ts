import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidRecordsComponent } from './invalid-records.component';
import { MatTableModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

describe('InvalidRecordsComponent', () => {
	let component: InvalidRecordsComponent;
	let fixture: ComponentFixture<InvalidRecordsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [MatTableModule, HttpClientModule],
			declarations: [InvalidRecordsComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(InvalidRecordsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
