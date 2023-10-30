import { ReactNode } from 'react';

type TabProps = {
    onClick?: () => void;
    isActive?: boolean;
    children: ReactNode;
};

export const Tab = ({ children, onClick, isActive }: TabProps) => {
    return (
        <button onClick={onClick} className={isActive ? 'selected' : ''}>
            {children}
        </button>
    );
};

Tab.displayName = 'Tab';
