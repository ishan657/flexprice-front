import { describe, expect, it } from 'vitest';

import formatChips from '@/utils/common/format_chips';

describe('formatChips', () => {
	it('formats active status', () => {
		expect(formatChips('active')).toBeTruthy();
	});
});
