import React from 'react';
import AlertMessage from '../../Components/AlertMessage';

// Default export with metadata about the component
export default {
  title: 'Atoms/AlertMessage',
  component: AlertMessage,
  parameters: {
    docs: {
      description: {
        component: 'A customizable alert message component that uses Bootstrap styles and icons.',
      },
    },
  },
};

// Template for creating stories
const Template = (args) => <AlertMessage {...args} />;

// Default story
export const Default = Template.bind({});
Default.args = {
  message: 'This is a warning message.',
};

// Warning type story
export const Warning = Template.bind({});
Warning.args = {
  message: 'This is a warning message.',
  type: 'warning',
};

// Danger type story
export const Danger = Template.bind({});
Danger.args = {
  message: 'This is a danger message.',
  type: 'danger',
  icon: 'bi-x-circle',
};

// Info type story
export const Info = Template.bind({});
Info.args = {
  message: 'This is an info message.',
  type: 'info',
  icon: 'bi-info-circle',
};

// Success type story
export const Success = Template.bind({});
Success.args = {
  message: 'This is a success message.',
  type: 'success',
  icon: 'bi-check-circle',
};
