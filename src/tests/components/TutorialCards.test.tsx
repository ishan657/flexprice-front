import { render, screen } from '@testing-library/react';

import { describe, expect, it } from 'vitest';

import TutorialCards from '@/components/organisms/QueryableDataArea/TutorialCards';
describe('TutorialCards', () => {
	it('renders tutorial title', () => {
		render(
			<TutorialCards
				tutorials={[
					{
						title: 'Getting Started',
					},
				]}
			/>,
		);

		expect(screen.getByText(/getting started/i)).toBeInTheDocument();
	});
});
