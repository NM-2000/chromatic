import React from 'react';
import { ButtonStackProps } from '../../components-schema';
import ButtonStack from './ButtonStack';

export default {
    title: 'ButtonStack',
    component: ButtonStack,
};

const Template = (args: ButtonStackProps) => <ButtonStack {...args} />;

export const Primary = Template.bind({});
(Primary as any).args = {
    backgroundColor: 'coral',
    text: "This is a ButtonStack",
    buttons: [
        {
            backgroundColor: '#E5E5E5',
            text: "Button #1",
            click: () => { console.log("Button1") },
        },
        {
            backgroundColor: '#E5E5E5',
            text: "Button #2",
            click: () => { console.log("Button2") },
        },
        {
            backgroundColor: '#E5E5E5',
            text: "Button #3",
            click: () => { console.log("Button3") },
        }
    ]
    
};
