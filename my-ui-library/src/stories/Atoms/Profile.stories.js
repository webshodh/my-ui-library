// src/stories/Profile.stories.js

import React from 'react';
import Profile from '../../Components/Profile'; // Adjust the import path if needed
import { FaBars } from 'react-icons/fa';

export default {
  title: 'Atoms/Profile',
  component: Profile,
};

const Template = (args) => <Profile {...args} />;

export const Default = Template.bind({});
Default.args = {
  displayName: 'John Doe',
  onSidebarToggle: () => alert('Sidebar toggled'),
  onLogout: () => alert('Logged out'),
};

export const WithLongName = Template.bind({});
WithLongName.args = {
  displayName: 'Alexander Graham Bell',
  onSidebarToggle: () => alert('Sidebar toggled'),
  onLogout: () => alert('Logged out'),
};

export const WithoutDropdown = Template.bind({});
WithoutDropdown.args = {
  displayName: 'Jane Smith',
  onSidebarToggle: () => alert('Sidebar toggled'),
  onLogout: () => alert('Logged out'),
  showDropdown: false, // This will hide the dropdown
};
