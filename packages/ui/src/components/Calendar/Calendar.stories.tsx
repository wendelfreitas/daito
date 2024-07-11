import * as React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Calendar } from './Calendar';

const meta: Meta = {
  title: 'Components/Calendar',
  tags: ['autodocs'],
  component: Calendar,
};

export default meta;

export const Default: StoryFn = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  );
};
