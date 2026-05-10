import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';

import ContactUsDialog from './ContactUsDialog';

/**
 * ContactUsDialog
 *
 * A reusable dialog component that provides users with
 * multiple support/contact options including:
 *
 * - Slack community
 * - Email support
 * - Calendly booking
 *
 * Props:
 * - isOpen: Controls dialog visibility
 * - onOpenChange: Callback triggered when dialog open state changes
 * - title: Optional dialog title
 * - description: Optional dialog description
 */

const meta: Meta<typeof ContactUsDialog> = {
	title: 'Molecules/ContactUsDialog',

	component: ContactUsDialog,

	parameters: {
		layout: 'centered',

		docs: {
			description: {
				component: 'Reusable support dialog with Slack, Email, and Calendly contact actions.',
			},
		},
	},

	tags: ['autodocs'],

	argTypes: {
		isOpen: {
			control: 'boolean',
			description: 'Controls dialog visibility',
		},

		title: {
			control: 'text',
			description: 'Dialog title',
		},

		description: {
			control: 'text',
			description: 'Dialog description',
		},

		onOpenChange: {
			action: 'open changed',
			description: 'Triggered when dialog open state changes',
		},
	},
};

export default meta;

type Story = StoryObj<typeof ContactUsDialog>;

/**
 * Default happy-path story
 */
export const Default: Story = {
	args: {
		isOpen: true,

		title: 'Contact us',

		description: 'Reach out to continue or get help.',
	},
};

/**
 * Custom content variant
 */
export const CustomContent: Story = {
	args: {
		isOpen: true,

		title: 'Need assistance?',

		description: 'Choose your preferred support channel.',
	},
};

/**
 * Closed dialog state
 */
export const Closed: Story = {
	args: {
		isOpen: false,
	},
};

/**
 * Long content variant
 */
export const LongContent: Story = {
	args: {
		isOpen: true,

		title: 'Need help with billing, integrations, pricing, or technical support?',

		description:
			'Our support team is available through multiple channels. Join the Slack community for quick discussions, send us an email for detailed assistance, or book a dedicated call with our team.',
	},
};

/**
 * Interaction test story
 */
export const InteractionTest: Story = {
	args: {
		isOpen: true,
	},

	play: async ({ canvasElement }) => {
		const canvas = within(document.body);

		const slackButton = await canvas.findByRole('button', {
			name: /contact slack/i,
		});

		await userEvent.hover(slackButton);

		await expect(slackButton).toBeInTheDocument();
	},
};
