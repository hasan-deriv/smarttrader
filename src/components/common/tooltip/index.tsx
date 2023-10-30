import { PropsWithChildren } from 'react';
import { Provider, Root, Trigger, Portal, Content, Arrow } from '@radix-ui/react-tooltip';

type TTooltip = {
    content: string;
    asChild?: boolean;
};

const Tooltip = ({ content, children, asChild }: PropsWithChildren<TTooltip>) => (
    <Provider>
        <Root>
            <Trigger asChild={asChild}>{children}</Trigger>
            <Portal>
                <Content
                    className='data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade rounded-[4px] bg-active p-1 text-xs text-prominent'
                    sideOffset={5}
                >
                    {content}
                    <Arrow className='fill-active' />
                </Content>
            </Portal>
        </Root>
    </Provider>
);

export default Tooltip;
