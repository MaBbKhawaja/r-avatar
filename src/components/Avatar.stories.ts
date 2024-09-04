import type { Meta, StoryObj } from '@storybook/vue3';
import Avatar from './Avatar.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Avatar',
  component: Avatar,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    image: {control: 'text'},
    fontColor: {control: 'color'},
    name: {control: 'text'},
    size: {control: 'number'},
    color: {control: 'color'},
    fontSize: {control: 'number'}
  },
  args: {
    // image: "https://amymhaddad.s3.amazonaws.com/morocco-blue.png",
    // fontColor: "red",
    name: "Mirza",
    size: 200,
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;


export const WithBackgroundImage: Story = {
  args: {
    image: "https://amymhaddad.s3.amazonaws.com/morocco-blue.png",
    name: "Mirza",
    size: 200,
    color: "orange",
    fontSize: 90
  },
};

export const WithoutBackgroundImage: Story = {
  args: {
    name: "Mirza",
    size: 200,
    color: "orange",
    fontSize: 90
  },
};

export const WithFontColor: Story = {
  args: {
    fontColor: "red",
    name: "Mirza",
    size: 200,
    color: "#000",
    fontSize: 90
  },
};

export const fontSize: Story = {
  args: {
    fontColor: "red",
    name: "Mirza",
    size: 200,
    color: "#000",
    fontSize: 20
  },
};
export const AvatarSize: Story = {
  args: {
    fontColor: "red",
    name: "Mirza",
    size: 100,
    color: "#000",
  },
};
export const BorderRadius: Story = {
  args: {
    fontColor: "red",
    name: "Mirza Anees baig Barlas",
    size: 100,
    radius: 20
  },
};