import { ComponentProps } from 'react';
import { cn } from 'Utils/cn';

type PaneProps = ComponentProps<'div'>;

export const TabPane = ({ children, className }: PaneProps) => {
    return <div className={cn(className)}>{children}</div>;
};

TabPane.displayName = 'TabPane';
