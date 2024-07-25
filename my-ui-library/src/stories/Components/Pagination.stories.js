// src/stories/Pagination.stories.js

import React from 'react';
import Pagination from '../../Components/Pagination'; // Adjust the import path if needed

export default {
  title: 'Components/Pagination',
  component: Pagination,
};

// Basic Template
const Template = (args) => <Pagination {...args} />;

// Default Pagination with 5 pages
export const Default = Template.bind({});
Default.args = {
  currentPage: 1,
  totalPages: 5,
  onPageChange: (page) => console.log(`Page changed to: ${page}`),
};

// Middle of the Pagination with 10 pages
export const MiddlePage = Template.bind({});
MiddlePage.args = {
  currentPage: 5,
  totalPages: 10,
  onPageChange: (page) => console.log(`Page changed to: ${page}`),
};

// Last Page with 5 pages
export const LastPage = Template.bind({});
LastPage.args = {
  currentPage: 5,
  totalPages: 5,
  onPageChange: (page) => console.log(`Page changed to: ${page}`),
};

// Single Page (edge case)
export const SinglePage = Template.bind({});
SinglePage.args = {
  currentPage: 1,
  totalPages: 1,
  onPageChange: (page) => console.log(`Page changed to: ${page}`),
};

// Scenario with 3 pages
export const ThreePages = Template.bind({});
ThreePages.args = {
  currentPage: 2,
  totalPages: 3,
  onPageChange: (page) => console.log(`Page changed to: ${page}`),
};

// Scenario with more than 10 pages
export const ManyPages = Template.bind({});
ManyPages.args = {
  currentPage: 7,
  totalPages: 15,
  onPageChange: (page) => console.log(`Page changed to: ${page}`),
};

// Scenario with 2 pages and disabled previous button
export const DisabledPrevious = Template.bind({});
DisabledPrevious.args = {
  currentPage: 1,
  totalPages: 2,
  onPageChange: (page) => console.log(`Page changed to: ${page}`),
};

// Scenario with 2 pages and disabled next button
export const DisabledNext = Template.bind({});
DisabledNext.args = {
  currentPage: 2,
  totalPages: 2,
  onPageChange: (page) => console.log(`Page changed to: ${page}`),
};

