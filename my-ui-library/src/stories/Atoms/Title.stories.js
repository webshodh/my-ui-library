import React from 'react';
import Title from '../../Components/Title'; // Adjust the path based on your structure

export default {
  title: 'Atoms/Title',
  component: Title,
  parameters: {
    docs: {
      description: {
        component: 'A simple Title component that displays a title in a styled <h3> element.',
      },
    },
  },
};

// Template for creating stories
const Template = (args) => <Title {...args} />;

// Default story
export const Default = Template.bind({});
Default.args = {
  title: 'Default Title',
};

// Custom Title story
export const CustomTitle = Template.bind({});
CustomTitle.args = {
  title: 'Custom Title Example',
};
