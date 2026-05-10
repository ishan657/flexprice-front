import type { Meta, StoryObj } from '@storybook/react';

import { expect, userEvent, within } from '@storybook/test';

import TutorialCards from './TutorialCards';

/**
 * TutorialCards
 *
 * Organism component displaying
 * tutorial/resource cards with:
 * - image previews
 * - titles
 * - CTA interactions
 */

const meta: Meta<typeof TutorialCards> = {
	title: 'Organisms/TutorialCards',

	component: TutorialCards,

	parameters: {
		layout: 'centered',
	},

	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TutorialCards>;

const mockTutorials = [
	{
		title: 'Getting Started',

		imageUrl: 'https://mintlify.s3.us-west-1.amazonaws.com/flexprice/UsageBaseMetering(1).jpg',

		onClick: () => {},
	},

	{
		title: 'Usage Based Billing',

		imageUrl: 'https://mintlify.s3.us-west-1.amazonaws.com/flexprice/UsageBaseMetering(1).jpg',

		onClick: () => {},
	},

	{
		title: 'Advanced Pricing',

		imageUrl: 'https://mintlify.s3.us-west-1.amazonaws.com/flexprice/UsageBaseMetering(1).jpg',

		onClick: () => {},
	},
];

export const Default: Story = {
	args: {
		tutorials: mockTutorials,
	},
};

export const SingleCard: Story = {
	args: {
		tutorials: [mockTutorials[0]],
	},
};

export const Empty: Story = {
	args: {
		tutorials: [],
	},
};

export const MissingImages: Story = {
	args: {
		tutorials: [
			{
				title: 'Fallback Image Card',

				imageUrl: '',

				onClick: () => {},
			},
		],
	},
};

export const InteractionTest: Story = {
	args: {
		tutorials: mockTutorials,
	},

	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const card = await canvas.findByText(/getting started/i);

		await userEvent.hover(card);

		await expect(card).toBeInTheDocument();
	},
};
