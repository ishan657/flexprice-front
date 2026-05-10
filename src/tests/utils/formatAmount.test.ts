import { describe, expect, it } from 'vitest';

import { formatAmount } from '@/components/atoms/Input/Input';

describe('formatAmount', () => {
	it('formats integer amount', () => {
		expect(formatAmount('1000')).toBe('1,000');
	});

	it('formats decimal amount', () => {
		expect(formatAmount('99.99')).toBe('99.99');
	});
});
