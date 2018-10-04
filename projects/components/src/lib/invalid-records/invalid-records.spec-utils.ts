function getElements(element: Element, query: string): Element[] {
	return [].slice.call(element.querySelectorAll(query));
}

function getRows(tableElement: Element): Element[] {
	return getElements(tableElement, '.mat-row');
}

function getFooterCells(footerRow: Element): Element[] {
	let cells = getElements(footerRow, 'mat-footer-cell');
	if (!cells.length) {
		cells = getElements(footerRow, 'td');
	}

	return cells;
}

function getFooterRows(tableElement: Element): Element[] {
	return [].slice.call(tableElement.querySelectorAll('.mat-footer-row'));
}

function getHeaderRows(tableElement: Element): Element[] {
	return [].slice.call(tableElement.querySelectorAll('.mat-header-row'));
}

function getCells(row: Element): Element[] {
	if (!row) {
		return [];
	}

	let cells = getElements(row, 'mat-cell');
	if (!cells.length) {
		cells = getElements(row, 'td');
	}

	return cells;
}

function getHeaderCells(headerRow: Element): Element[] {
	let cells = getElements(headerRow, 'mat-header-cell');
	if (!cells.length) {
		cells = getElements(headerRow, 'th');
	}

	return cells;
}

function getActualTableContent(tableElement: Element): string[][] {
	let actualTableContent: Element[][] = [];
	getHeaderRows(tableElement).forEach(row => {
		actualTableContent.push(getHeaderCells(row));
	});

	// Check data row cells
	const rows = getRows(tableElement).map(row => getCells(row));
	actualTableContent = actualTableContent.concat(rows);

	getFooterRows(tableElement).forEach(row => {
		actualTableContent.push(getFooterCells(row));
	});

	// Convert the nodes into their text content;
	return actualTableContent.map(row =>
		row.map(cell => cell.textContent.trim())
	);
}

export function expectTableToMatchContent(
	tableElement: Element,
	expected: any[]
) {
	const missedExpectations: string[] = [];
	function checkCellContent(actualCell: string, expectedCell: string) {
		if (actualCell !== expectedCell) {
			missedExpectations.push(
				`Expected cell contents to be ${expectedCell} but was ${actualCell}`
			);
		}
	}

	const actual = getActualTableContent(tableElement);

	// Make sure the number of rows match
	if (actual.length !== expected.length) {
		missedExpectations.push(
			`Expected ${expected.length} total rows but got ${actual.length}`
		);
		fail(missedExpectations.join('\n'));
	}

	actual.forEach((row, rowIndex) => {
		const expectedRow = expected[rowIndex];

		// Make sure the number of cells match
		if (row.length !== expectedRow.length) {
			missedExpectations.push(
				`Expected ${expectedRow.length} cells in row but got ${row.length}`
			);
			fail(missedExpectations.join('\n'));
		}

		row.forEach((actualCell, cellIndex) => {
			const expectedCell = expectedRow ? expectedRow[cellIndex] : null;
			checkCellContent(actualCell, expectedCell);
		});
	});

	if (missedExpectations.length) {
		fail(missedExpectations.join('\n'));
	}
}
