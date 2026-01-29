import React from 'react';

const Badge = ({ children, color = 'emerald' }) => {
    const colors = {
        emerald: "bg-emerald-100 text-emerald-800",
        amber: "bg-amber-100 text-amber-800",
        blue: "bg-blue-100 text-blue-800",
        purple: "bg-purple-100 text-purple-800"
    };
    return (
        <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${colors[color] || colors.emerald}`}>
            {children}
        </span>
    );
};

export default Badge;
