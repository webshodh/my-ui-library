// src/stories/Components/SearchBar.stories.js

import React, { useState } from 'react';
import SearchBar from '../../Components/SearchBar';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/SearchBar',
  component: SearchBar,
  parameters: {
    docs: {
      description: {
        component: 'The SearchBar component allows users to enter search terms. It takes `searchTerm` as a controlled value and `onSearch` as a callback function.',
      },
    },
  },
};

const Template = (args) => {
  const [searchTerm, setSearchTerm] = useState(args.searchTerm);
  const handleSearch = (value) => {
    setSearchTerm(value);
    args.onSearch(value);
  };

  return (
    <SearchBar
      {...args}
      searchTerm={searchTerm}
      onSearch={handleSearch}
    />
  );
};

// Default SearchBar
export const Default = Template.bind({});
Default.args = {
  searchTerm: '',
  onSearch: action('search'),
};

// SearchBar with Placeholder Text
export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  searchTerm: '',
  onSearch: action('search'),
  placeholder: 'Search for items...',
};

// SearchBar with Initial Value
export const WithInitialValue = Template.bind({});
WithInitialValue.args = {
  searchTerm: 'Initial search term',
  onSearch: action('search'),
};

// SearchBar with Custom Style
export const WithCustomStyle = Template.bind({});
WithCustomStyle.args = {
  searchTerm: '',
  onSearch: action('search'),
  placeholder: 'Search...',
  style: { border: '2px solid red' },
};

// SearchBar with Error Message
export const WithError = Template.bind({});
WithError.args = {
  searchTerm: '',
  onSearch: action('search'),
  placeholder: 'Search...',
  error: 'An error occurred',
};

// Disabled SearchBar
export const Disabled = Template.bind({});
Disabled.args = {
  searchTerm: '',
  onSearch: action('search'),
  placeholder: 'Search...',
  disabled: true,
};

// SearchBar with Custom Class
export const WithCustomClass = Template.bind({});
WithCustomClass.args = {
  searchTerm: '',
  onSearch: action('search'),
  placeholder: 'Search...',
  className: 'my-custom-class',
};
