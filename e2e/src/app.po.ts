import { browser, $, $$ } from 'protractor';

export class AppPage {
	referenceDescriptions = [
		'Candy from Jan de Vries',
		'Clothes from Richard Theu�',
		'Subscription from Vincent Dekker'
	];

	endBalanceDescriptions = ['Flowers for Richard Dekker'];

	navigateTo() {
		return browser.get('/');
	}

	isElementPresent(el) {
		return $(el).isPresent();
	}

	getElementText(el) {
		return $(el).getText();
	}

	getElementsText(el) {
		return $$(el).getText();
	}

	getFirstElementsText(els) {
		return $$(els)
			.first()
			.getText();
	}

	getElementsCount(els) {
		return $$(els).count();
	}
}
