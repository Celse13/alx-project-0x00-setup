import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, size = 'medium', shape = 'rounded-md', className = '' }) => {
    const sizeStyles: Record<ButtonProps['size'], string> = {
        small: 'px-2 py-0.5 text-sm',
        medium: 'px-3 py-1 text-base',
        large: 'px-4 py-2 text-lg'
    };

    const shapeStyles: Record<ButtonProps['shape'], string> = {
        'rounded-sm': 'rounded-sm',
        'rounded-md': 'rounded-md',
        'rounded-full': 'rounded-full'
    };

    return (
        <button 
            className={`
                border 
                bg-blue-500 
                text-white 
                ${sizeStyles[size]} 
                ${shapeStyles[shape]}
                ${className}
            `}
        >
            {title}
        </button>
    );
};

export default Button;
