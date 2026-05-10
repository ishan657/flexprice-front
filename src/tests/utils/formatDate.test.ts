import { describe, expect, it } from 'vitest';

import formatDate from '@/utils/common/format_date';

describe('formatDate', () => {
	it('formats ISO date', () => {
		const result = formatDate('2025-01-01');

		expect(result).toBeTruthy();
	});
});
