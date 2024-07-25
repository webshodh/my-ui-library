import React from 'react';
import ErrorBoundary from '../../Components/ErrorBoundryWrapper'; // Adjust the import path if needed

export default {
  title: 'Components/ErrorBoundary',
  component: ErrorBoundary,
};

// Template for ErrorBoundary stories
const Template = (args) => (
  <ErrorBoundary {...args}>
    <div>
      <p>This is a test component within the ErrorBoundary.</p>
    </div>
  </ErrorBoundary>
);

// Default story
export const Default = Template.bind({});
Default.args = {};

// Story with custom error message
export const WithCustomErrorMessage = Template.bind({});
WithCustomErrorMessage.args = {
  errorMessage: "A custom error message for testing purposes."
};

// Story with retry button
export const WithRetryButton = Template.bind({});
WithRetryButton.args = {
  withRetry: true,
};

// Story with support contact information
export const WithSupportContact = Template.bind({});
WithSupportContact.args = {
  errorMessage: "An error has occurred.",
  supportContact: "support@example.com",
};

// Story without any error to demonstrate normal rendering
export const WithoutError = () => (
  <ErrorBoundary>
    <div>
      <p>No errors here!</p>
    </div>
  </ErrorBoundary>
);
