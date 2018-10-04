import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'lib-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
	copyrightMessage = 'made by';
	author = 'Vahan Minasian';
	authorFbLink = 'https://www.facebook.com/vaan.minasian';

	constructor() {}

	ngOnInit() {}
}
