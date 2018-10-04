import {
	TestBed,
	async,
	ComponentFixture
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material';
import { ComponentsModule } from '../../projects/components/src/lib/components.module';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
	let app: AppComponent;
	let fixture: ComponentFixture<AppComponent>;
	let de: DebugElement;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule,
				MatIconModule,
				HttpClientModule,
				MDBBootstrapModule.forRoot(),
				ComponentsModule
			],
			declarations: [AppComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AppComponent);
		app = fixture.debugElement.componentInstance;
		de = fixture.debugElement;
		fixture.detectChanges();
	});

	it('should create the app', async(() => {
		expect(app).toBeTruthy();
	}));

	it('should render header', () => {
		expect(de.query(By.css('lib-header'))).toBeTruthy();
	});

	it('should render invalid-records component', () => {
		expect(
			de.query(By.css('lib-invalid-records'))
		).toBeTruthy();
	});

	it('should render footer', () => {
		expect(de.query(By.css('lib-footer'))).toBeTruthy();
	});
});
