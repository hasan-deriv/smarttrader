import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react';

type TabProps = {
    onClick?: () => void;
    isActive?: boolean;
    children: ReactNode;
};

export const Tab = forwardRef<ElementRef<'button'>, ComponentPropsWithoutRef<'button'> & TabProps>(
    ({ children, onClick, isActive }: TabProps, ref) => {
        return (
            <button onClick={onClick} className={isActive ? 'selected' : ''} ref={ref}>
                {children}
                {isActive ? <div className='underline' /> : null}
            </button>
        );
    }
);
Tab.displayName = 'Tab';
