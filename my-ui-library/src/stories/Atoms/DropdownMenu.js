import React from 'react';
import DropdownMenu from '../../Components/DropdownMenu'; // Adjust the import path if needed

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Atoms/DropdownMenu',
  component: DropdownMenu,
};

// Basic Template
const Template = (args) => <DropdownMenu {...args} />;

// Default Dropdown Menu
export const Default = Template.bind({});
Default.args = {
  title: 'Menu',
  items: [
    { text: 'Item 1', href: '#' },
    { text: 'Item 2', href: '#' },
    { text: 'Item 3', href: '#' },
  ],
};

// Dropdown with Submenu
export const WithSubMenu = Template.bind({});
WithSubMenu.args = {
  title: 'Menu with Submenu',
  items: [
    { text: 'Item 1', href: '#' },
    {
      text: 'Item 2 with Submenu',
      submenu: [
        { text: 'Subitem 1', href: '#' },
        { text: 'Subitem 2', href: '#' },
      ],
    },
    { text: 'Item 3', href: '#' },
  ],
};

// Dropdown with Nested Submenu
export const NestedSubMenu = Template.bind({});
NestedSubMenu.args = {
  title: 'Nested Submenu',
  items: [
    { text: 'Item 1', href: '#' },
    {
      text: 'Item 2 with Submenu',
      submenu: [
        {
          text: 'Submenu 1',
          submenu: [
            { text: 'Subitem 1', href: '#' },
            { text: 'Subitem 2', href: '#' },
          ],
        },
        { text: 'Submenu 2', href: '#' },
      ],
    },
    { text: 'Item 3', href: '#' },
  ],
};

// Dropdown with Custom Styling
export const CustomStyled = Template.bind({});
CustomStyled.args = {
  title: 'Custom Styled Menu',
  items: [
    { text: 'Item 1', href: '#' },
    { text: 'Item 2', href: '#' },
    { text: 'Item 3', href: '#' },
  ],
};

// Dropdown with No Items
export const NoItems = Template.bind({});
NoItems.args = {
  title: 'Empty Menu',
  items: [],
};

// Dropdown Menu with Long Text
export const LongText = Template.bind({});
LongText.args = {
  title: 'Menu with Long Text',
  items: [
    { text: 'This is a very long menu item that should be wrapped or truncated based on the styling', href: '#' },
    { text: 'Short Item', href: '#' },
  ],
};

// Dropdown with Links
export const WithLinks = Template.bind({});
WithLinks.args = {
  title: 'Menu with Links',
  items: [
    { text: 'Home', href: 'https://example.com' },
    { text: 'About', href: 'https://example.com/about' },
    { text: 'Contact', href: 'https://example.com/contact' },
  ],
};

// Dropdown with Disabled Items
export const DisabledItems = Template.bind({});
DisabledItems.args = {
  title: 'Menu with Disabled Items',
  items: [
    { text: 'Item 1', href: '#' },
    { text: 'Item 2 (Disabled)', href: '#', disabled: true },
    { text: 'Item 3', href: '#' },
  ],
};
