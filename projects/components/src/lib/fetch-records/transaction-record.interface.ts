export interface TransactionRecord {
	reference: string;
	accountNumber: string;
	description: string;
	startBalance: string;
	mutation: string;
	endBalance: string;
}

export interface Records {
	invalidRecords: {
		byReference: TransactionRecord[];
		byEndBalance: TransactionRecord[];
	};
	length;
}
