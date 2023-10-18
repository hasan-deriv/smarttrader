import { forwardRef, ElementRef, ComponentPropsWithoutRef } from 'react';
import {
    Root,
    Trigger,
    Portal,
    Sub,
    SubTrigger,
    SubContent,
    Content,
    Item,
    Label,
    Separator,
} from '@radix-ui/react-dropdown-menu';

const DropdownMenu = Root;
const DropdownMenuTrigger = Trigger;
const DropdownMenuPortal = Portal;
const DropdownMenuSub = Sub;

const DropdownMenuSubTrigger = forwardRef<ElementRef<typeof SubTrigger>, ComponentPropsWithoutRef<typeof SubTrigger>>(
    ({ children, ...props }, ref) => (
        <SubTrigger ref={ref} {...props}>
            {children}
        </SubTrigger>
    )
);
DropdownMenuSubTrigger.displayName = SubTrigger.displayName;

const DropdownMenuSubContent = forwardRef<ElementRef<typeof SubContent>, ComponentPropsWithoutRef<typeof SubContent>>(
    (props, ref) => <SubContent ref={ref} {...props} />
);
DropdownMenuSubContent.displayName = SubContent.displayName;

const DropdownMenuContent = forwardRef<ElementRef<typeof Content>, ComponentPropsWithoutRef<typeof Content>>(
    ({ sideOffset = 4, ...props }, ref) => (
        <Portal>
            <Content ref={ref} sideOffset={sideOffset} {...props} />
        </Portal>
    )
);
DropdownMenuContent.displayName = Content.displayName;

const DropdownMenuItem = forwardRef<ElementRef<typeof Item>, ComponentPropsWithoutRef<typeof Item>>((props, ref) => (
    <Item ref={ref} {...props} />
));
DropdownMenuItem.displayName = Item.displayName;

const DropdownMenuLabel = forwardRef<ElementRef<typeof Label>, ComponentPropsWithoutRef<typeof Label>>((props, ref) => (
    <Label ref={ref} {...props} />
));
DropdownMenuLabel.displayName = Label.displayName;

const DropdownMenuSeparator = forwardRef<ElementRef<typeof Separator>, ComponentPropsWithoutRef<typeof Separator>>(
    (props, ref) => <Separator ref={ref} {...props} />
);
DropdownMenuSeparator.displayName = Separator.displayName;

export {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuPortal,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
};
