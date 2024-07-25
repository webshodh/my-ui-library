// src/components/CustomButton.stories.js
import React from 'react';
import CustomButton from '../../Components/CustomButton';

// Define the default export with component and title
export default {
  title: 'Atoms/CustomButton',
  component: CustomButton,
};

// Define the Template for the stories
const Template = (args) => <CustomButton {...args} />;

// Default story
export const Default = Template.bind({});
Default.args = {
  children: 'Default Button',
};

// Secondary style story
export const Secondary = Template.bind({});
Secondary.args = {
  className: 'btn btn-secondary',
  children: 'Secondary Button',
};

// Custom style story
export const CustomStyle = Template.bind({});
CustomStyle.args = {
  className: 'btn-custom',
  children: 'Custom Styled Button',
};
