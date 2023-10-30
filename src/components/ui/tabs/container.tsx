import { Children, ComponentProps, FunctionComponent, ReactNode, cloneElement, isValidElement, useState } from 'react';
import { cn } from 'Utils/cn';

type TProps = ComponentProps<'div'> & {
    variant?: 'basic' | 'standard';
    size?: 'lg' | 'sm';
    indicatorColor?: 'primary';
};

export const TabContainer = ({
    children,
    className,
    variant = 'standard',
    indicatorColor = 'primary',
    size = 'lg',
}: TProps) => {
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
                    isActive: value === idx,
                    onClick: () => handleClick(idx),
                    variant,
                    size,
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
                variant,
                indicatorColor,
                size,
            });
        }
        if (name === 'TabContent') {
            return cloneElement(child, {
                ...child.props,
                activeIdx: value,
            });
        }
    });

    return <div className={cn('tab-container', className)}>{renderChildren}</div>;
};
