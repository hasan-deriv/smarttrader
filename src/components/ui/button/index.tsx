import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { type VariantProps } from 'class-variance-authority';
import { cn } from 'Utils/cn';
import { buttonVariants } from './variants';

interface ButtonProps
    extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, color, fullwidth, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button';
        return (
            <Comp className={cn(buttonVariants({ variant, size, color, fullwidth, className }))} ref={ref} {...props} />
        );
    }
);
Button.displayName = 'Button';

export { Button };
