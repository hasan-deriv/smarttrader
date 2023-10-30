import type { Meta, StoryObj } from '@storybook/react';

import { Tab, TabContainer, TabContent, TabList, TabPane } from 'Components/ui/tabs';

const meta = {
    title: 'Tabs',
    component: TabContainer,
    render: ({ ...args }) => (
        <TabContainer {...args}>
            <TabList>
                <Tab>Home</Tab>
                <Tab>Profile</Tab>
                <Tab>Contact</Tab>
            </TabList>
            <TabContent>
                <TabPane>Home Tab</TabPane>
                <TabPane>Profile Tab</TabPane>
                <TabPane>Contact Tab</TabPane>
            </TabContent>
        </TabContainer>
    ),
} satisfies Meta<typeof TabContainer>;

export default meta;
type TTabsStory = StoryObj<typeof meta>;

export const Primary: TTabsStory = {
    args: {
        children: '',
    },
};
