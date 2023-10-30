import { Children, FunctionComponent, ReactNode, cloneElement, isValidElement, useState } from 'react';

type TProps = {
    children: React.ReactNode;
};

export const TabContainer = ({ children }: TProps) => {
    const [value, setValue] = useState(0);

    const handleClick = (idx: number) => {
        setValue(idx);
    };

    const iterateOverChildren = (reactChildren: ReactNode, parent: 'TabList' | 'TabContent'): ReactNode => {
        return Children.map(reactChildren, (child, idx) => {
            if (!isValidElement(child)) return child;
            if (parent === 'TabList') {
                return cloneElement(child, {
                    ...child.props,
                    activeIdx: value,
                    onClick: () => handleClick(idx),
                });
            }
        });
    };

    const renderChildren = Children.map(children, child => {
        if (!isValidElement(child)) return null;
        const childType = child.type as FunctionComponent;
        const name = childType.displayName;
        if (name === 'TabList') {
            return cloneElement(child, {
                ...child.props,
                children: iterateOverChildren(child.props.children, name),
                activeIdx: value,
            });
        }
        if (name === 'TabContent') {
            return cloneElement(child, {
                ...child.props,
                activeIdx: value,
            });
        }
    });

    return <div className='tab-container'>{renderChildren}</div>;
};
