import React from 'react';
import LoadingSpinner from '../../Components/LoadingSpinner'; // Adjust the path based on your structure

export default {
  title: 'Atoms/LoadingSpinner',
  component: LoadingSpinner,
  parameters: {
    docs: {
      description: {
        component: 'A simple loading spinner component that displays a spinner in the center of the screen.',
      },
    },
  },
};

// Template for creating stories
const Template = () => <LoadingSpinner />;

// Default story
export const Default = Template.bind({});
Default.args = {};
