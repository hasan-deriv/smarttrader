import type { Meta, StoryObj } from '@storybook/react';

import { Tabs, TabsList, TabsTrigger, TabsContent } from 'Components/ui/tabs';

const meta = {
    title: 'Tabs',
    component: Tabs,
} satisfies Meta<typeof Tabs>;

export default meta;
type TTabsStory = StoryObj<typeof meta>;

const TabsExample = () => (
    <Tabs defaultValue='account' className='w-[400px]'>
        <TabsList>
            <TabsTrigger value='account'>Account</TabsTrigger>
            <TabsTrigger value='password'>Password</TabsTrigger>
        </TabsList>
        <TabsContent value='account'>Make changes to your account here.</TabsContent>
        <TabsContent value='password'>Change your password here.</TabsContent>
    </Tabs>
);

export const Primary: TTabsStory = {
    render: () => <TabsExample />,
};
