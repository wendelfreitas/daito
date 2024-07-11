import { StoryFn, Meta } from '@storybook/react';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './Card';

const meta: Meta = {
  title: 'Components/Card',
  tags: ['autodocs'],
  component: Card,
};

export default meta;

export const Default: StoryFn = () => (
  <Card>
    <CardHeader>
      <CardTitle>Card Title</CardTitle>
      <CardDescription>Card Description</CardDescription>
    </CardHeader>
    <CardContent>
      <p>Card Content</p>
    </CardContent>
    <CardFooter>
      <p>Card Footer</p>
    </CardFooter>
  </Card>
);
