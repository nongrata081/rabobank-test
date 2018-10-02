import { AppPage } from './app.po';

describe('workspace-project App', () => {
	let page: AppPage;

	beforeEach(() => {
		page = new AppPage();
	});

	it('should display app title', () => {
		page.navigateTo();
		expect(page.getElementText('app-root .navbar-brand')).toEqual(
			'Customer statement processor'
		);
	});

	it('should render header', () => {
		expect(page.isElementPresent('app-root nav.navbar')).toBe(true);
	});

	it('should display content page title', () => {
		expect(page.getElementText('app-root .content-page-title')).toEqual(
			'Invalid records'
		);
	});

	it('should display reference category text', () => {
		expect(page.getElementText('app-root h5.reference')).toEqual(
			'By reference'
		);
	});

	it('should render invalid reference records table', () => {
		expect(page.isElementPresent('app-root table.invalid-reference')).toBe(
			true
		);
	});

	it('should render 3 invalid reference records', () => {
		expect(page.getElementsCount('table.invalid-reference > tbody > tr')).toBe(
			3
		);
	});

	it('should render same reference value for invalid reference records', () => {
		expect(
			page.getFirstElementsText('table.invalid-reference > tbody > tr > td')
		).toEqual('112806');
	});

	it('should render proper text for invalid reference descriptions', () => {
		expect(
			page.getElementsText(
				'table.invalid-reference > tbody > tr > td.mat-column-description'
			)
		).toEqual(page.referenceDescriptions);
	});

	it('should display end balance category text', () => {
		expect(page.getElementText('app-root h5.balance')).toEqual(
			'By end balance'
		);
	});

	it('should render invalid end balance records table', () => {
		expect(page.isElementPresent('app-root table.invalid-end-balance')).toBe(
			true
		);
	});

	it('should render 1 invalid end-balance record', () => {
		expect(
			page.getElementsCount('table.invalid-end-balance > tbody > tr')
		).toBe(1);
	});

	it('should render proper text for invalid end balance descriptions', () => {
		expect(
			page.getElementsText(
				'table.invalid-end-balance > tbody > tr > td.mat-column-description'
			)
		).toEqual(page.endBalanceDescriptions);
	});

	it('should render footer', () => {
		expect(page.isElementPresent('footer')).toBe(true);
	});

	it('should display proper footer text', () => {
		expect(page.getElementText('.footer-copyright')).toEqual(
			'made by Vahan Minasian'
		);
	});
});
