import { render, screen } from '@testing-library/react';

import { describe, expect, it } from 'vitest';

import DropdownMenu from '@/components/molecules/DropdownMenu/DropdownMenu';

describe('DropdownMenu', () => {
	it('renders trigger button', () => {
		render(
			<DropdownMenu
				options={[
					{
						label: 'Edit',
					},
				]}
			/>,
		);

		expect(screen.getByRole('button')).toBeInTheDocument();
	});
});
