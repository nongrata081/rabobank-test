import { async, ComponentFixture, TestBed } from '@angular/core/testing';

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

	it('should have a copyright message', () => {
		expect(component.copyrightMessage).toEqual('made by');
	});

	it('should have author name', () => {
		expect(component.author).toEqual('Vahan Minasian');
	});

	it('should render text in footer element', () => {
		expect(de.query(By.css('footer')).nativeElement.innerText).toContain(
			'made by Vahan Minasian'
		);
	});

	it('link in footer should be leading to facebook page', () => {
		expect(de.query(By.css('.footer-copyright a')).nativeElement.href).toBe(
			'https://www.facebook.com/vaan.minasian'
		);
	});
});
