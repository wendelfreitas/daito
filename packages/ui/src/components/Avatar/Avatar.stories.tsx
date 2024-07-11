import { StoryFn, Meta } from '@storybook/react';
import { Avatar, AvatarFallback, AvatarImage } from './Avatar';

const meta: Meta = {
  title: 'Components/Avatar',
  tags: ['autodocs'],
  component: Avatar,
};

export default meta;

export const Default: StoryFn = () => (
  <Avatar>
    <AvatarImage src="https://github.com/shadcn.png" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
);
