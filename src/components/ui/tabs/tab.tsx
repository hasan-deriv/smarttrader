import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from 'Utils/cn';

const tabVariants = cva('', {
    variants: {
        variant: {
            basic: '',
            standard: 'flex-auto',
        },
        size: {
            lg: 'text-[1.3225rem] px-5 py-1.5',
            sm: 'text-[0.813rem] px-2 py-[9px]',
        },
        isActive: {
            true: 'font-bold',
        },
    },
});

interface TabProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof tabVariants> {
    onClick?: () => void;
    isActive?: boolean;
}

export const Tab = ({ children, onClick, isActive, className, variant, size }: TabProps) => {
    return (
        <button onClick={onClick} className={cn(tabVariants({ variant, size, isActive }), className)}>
            {children}
        </button>
    );
};

Tab.displayName = 'Tab';
