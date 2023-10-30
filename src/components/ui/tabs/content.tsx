import { Children, ReactNode } from 'react';

type ContentProps = {
    activeIdx?: number;
    children: ReactNode;
};

export const TabContent = ({ children, activeIdx }: ContentProps) => {
    const childArr = Children.toArray(children);
    const activeChild = childArr.find((_el, i) => i === activeIdx);
    return <div>{activeChild}</div>;
};

TabContent.displayName = 'TabContent';
