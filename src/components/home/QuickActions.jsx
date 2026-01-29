import React from 'react';
import { Calendar, BookOpen, MapPin, GraduationCap, Plane, HelpCircle } from 'lucide-react';

const QuickActions = ({ setActiveTab }) => {
    const actions = [
        { label: "Events", icon: Calendar, tab: 'events', color: 'bg-blue-50 text-blue-600' },
        { label: "Resources", icon: BookOpen, tab: 'resources', color: 'bg-emerald-50 text-emerald-600' },
        { label: "Centres", icon: MapPin, tab: 'centres', color: 'bg-red-50 text-red-600' },
        { label: "University", icon: GraduationCap, tab: 'university', color: 'bg-purple-50 text-purple-600' },
        { label: "Travel", icon: Plane, tab: 'events', color: 'bg-orange-50 text-orange-600' }, // Redirects to events with Travel filter ideally
        { label: "Help", icon: HelpCircle, tab: 'help', color: 'bg-teal-50 text-teal-600' },
    ];

    return (
        <div className="py-8 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
                    {actions.map((action, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveTab(action.tab)}
                            className="flex flex-col items-center gap-2 group"
                        >
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm transition-transform group-hover:-translate-y-1 ${action.color}`}>
                                <action.icon size={24} />
                            </div>
                            <span className="text-xs sm:text-sm font-medium text-slate-700">{action.label}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default QuickActions;
