import React from 'react';
import CustomInput from '../../Components/CustomInput'; // Adjust the path based on your structure

export default {
  title: 'Atoms/CustomInput',
  component: CustomInput,
  parameters: {
    docs: {
      description: {
        component: 'A customizable input component with support for different states such as error, success, and warning.',
      },
    },
  },
};

// Template for creating stories
const Template = (args) => <CustomInput {...args} />;

// Default story
export const Default = Template.bind({});
Default.args = {
  id: 'default-input',
  placeholder: 'Enter text',
  value: '',
  onChange: () => {},
};

// Error state story
export const ErrorState = Template.bind({});
ErrorState.args = {
  id: 'error-input',
  placeholder: 'Enter text',
  value: '',
  onChange: () => {},
  error: 'This field is required',
};

// Success state story
export const SuccessState = Template.bind({});
SuccessState.args = {
  id: 'success-input',
  placeholder: 'Enter text',
  value: '',
  onChange: () => {},
  success: 'Looks good!',
};

// Warning state story
export const WarningState = Template.bind({});
WarningState.args = {
  id: 'warning-input',
  placeholder: 'Enter text',
  value: '',
  onChange: () => {},
  warning: 'Check this input',
};

// With Label story
export const WithLabel = Template.bind({});
WithLabel.args = {
  id: 'label-input',
  placeholder: 'Enter text',
  value: '',
  onChange: () => {},
  label: 'Input Label',
};

// All states combined story
export const AllStates = Template.bind({});
AllStates.args = {
  id: 'all-states-input',
  placeholder: 'Enter text',
  value: '',
  onChange: () => {},
  error: 'This is an error message',
  success: 'This is a success message',
  warning: 'This is a warning message',
  label: 'Input Label',
};
