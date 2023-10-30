import { ReactNode } from 'react';

type PaneProps = {
    isActive?: boolean;
    children: ReactNode;
};

export const TabPane = ({ children, isActive }: PaneProps) => {
    return (
        <div
            style={{
                background: isActive ? 'red' : 'transparent',
                marginTop: '30px',
            }}
        >
            {children}
        </div>
    );
};

TabPane.displayName = 'TabPane';
