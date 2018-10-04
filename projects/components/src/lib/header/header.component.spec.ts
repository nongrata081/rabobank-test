import {
	async,
	ComponentFixture,
	TestBed
} from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('HeaderComponent', () => {
	let component: HeaderComponent;
	let fixture: ComponentFixture<HeaderComponent>;
	let de: DebugElement;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [MDBBootstrapModule.forRoot()],
			declarations: [HeaderComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(HeaderComponent);
		component = fixture.componentInstance;
		de = fixture.debugElement;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should have a "Customer statement processor" title', () => {
		expect(component.title).toEqual('Customer statement processor');
	});

	it('should render text in navbar', () => {
		expect(
			de.query(By.css('mdb-navbar mdb-navbar-brand span.navbar-brand'))
				.nativeElement.innerText
		).toContain('Customer statement processor');
	});
});
