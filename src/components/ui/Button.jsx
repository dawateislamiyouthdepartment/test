import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyle = "px-5 py-2.5 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 active:scale-95";
    const variants = {
        primary: "bg-emerald-600 text-white hover:bg-emerald-700 shadow-md shadow-emerald-600/20",
        secondary: "bg-amber-400 text-emerald-900 hover:bg-amber-50",
        outline: "border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50",
        ghost: "text-slate-600 hover:bg-slate-100"
    };
    return (
        <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
};

export default Button;
