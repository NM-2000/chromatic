import React from 'react';
import { ButtonProps } from '../../components-schema';
import Button from './Button';

export default {
    title: 'Button',
    component: Button,
};

const Template = (args: ButtonProps) => <Button {...args} />;

export const Primary = Template.bind({});
(Primary as any).args = {
    backgroundColor: '#E5E5E5',
    text: "Button",
    click: () => { console.log("Button") },
};
