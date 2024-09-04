import type { Meta, StoryObj } from '@storybook/vue3';
import Avatar from './Avatar.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Avatar',
  component: Avatar,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    // size: { control: 'number' },
    // backgroundColor: { control: 'color' },
  },
  args: {
    // primary: false,
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    // onClick: fn(),
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    // primary: true,
    // label: 'Avatar',
  },
};

export const Secondary: Story = {
  args: {
    // primary: false,
    // label: 'Avatar',
  },
};

export const Large: Story = {
  args: {
    // label: 'Avatar',
    // size: 'large',
  },
};

export const Small: Story = {
  args: {
    // label: 'Avatar',
    // size: 'small',
  },
};
