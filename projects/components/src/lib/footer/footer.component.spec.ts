import {
	async,
	ComponentFixture,
	TestBed
} from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('FooterComponent', () => {
	let component: FooterComponent;
	let fixture: ComponentFixture<FooterComponent>;
	let de: DebugElement;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [FooterComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(FooterComponent);
		component = fixture.componentInstance;
		de = fixture.debugElement;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should render proper author credentials', () => {
		expect(
			de.query(By.css('footer')).nativeElement.innerText
		).toContain(
			component.copyrightMessage + ' ' + component.author
		);
	});

	it("should render link to author's facebook page", () => {
		expect(
			de.query(By.css('.footer-copyright a')).nativeElement
				.href
		).toBe(component.authorFbLink);
	});
});
