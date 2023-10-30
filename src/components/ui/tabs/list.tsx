import { useEffect, useRef, useState } from 'react';

type TProps = {
    children: React.ReactNode;
    activeIdx?: number;
};

export const TabList = ({ children, activeIdx = 0 }: TProps) => {
    const [width, setWidth] = useState(0);
    const [left, setLeft] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current) {
            const childArr = [...ref.current.children];
            const buttons = childArr.filter(child => {
                if (child.nodeName === 'BUTTON') return child;
            });
            const activeChild = buttons[activeIdx] as HTMLElement;
            setWidth(activeChild.clientWidth);
            setLeft(activeChild.offsetLeft);
        }
    }, [activeIdx]);

    return (
        <div className='relative flex' ref={ref}>
            {children}
            <div
                className='indicator absolute bottom-0 my-auto h-1 bg-red-700 ease-in-out [transition:left_0.4s,width_0.2s_0.1s]'
                style={{ width: `${width}px`, left: `${left}px` }}
            />
        </div>
    );
};

TabList.displayName = 'TabList';
