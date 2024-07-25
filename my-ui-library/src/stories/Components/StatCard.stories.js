// src/stories/Components/StatCard.stories.js
import React from 'react';
import StatCard from '../../Components/StatCard';

export default {
  title: 'Components/StatCard',
  component: StatCard,
  parameters: {
    docs: {
      description: {
        component: 'The StatCard component displays a statistic with a gradient background. It accepts a title, value, and a color to apply different gradients.',
      },
    },
  },
};

const Template = (args) => <StatCard {...args} />;

export const Green = Template.bind({});
Green.args = {
  title: 'Green Card',
  value: '123',
  color: 'green',
};

export const Red = Template.bind({});
Red.args = {
  title: 'Red Card',
  value: '456',
  color: 'red',
};

export const Yellow = Template.bind({});
Yellow.args = {
  title: 'Yellow Card',
  value: '789',
  color: 'yellow',
};

export const Blue = Template.bind({});
Blue.args = {
  title: 'Blue Card',
  value: '101',
  color: 'blue',
};

export const Orange = Template.bind({});
Orange.args = {
  title: 'Orange Card',
  value: '202',
  color: 'orange',
};
