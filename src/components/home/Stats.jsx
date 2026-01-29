import React from 'react';
import { Users, Calendar, GraduationCap, MapPin } from 'lucide-react';

const Stats = () => (
    <div className="bg-white py-12 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                    { label: "Youth Engaged", value: "15k+", icon: Users },
                    { label: "Events Held", value: "350+", icon: Calendar },
                    { label: "Uni Partners", value: "40+", icon: GraduationCap },
                    { label: "Centres", value: "28", icon: MapPin },
                ].map((stat, i) => (
                    <div key={i} className="flex flex-col items-center">
                        <stat.icon className="text-emerald-200 mb-2" size={32} />
                        <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                        <div className="text-sm text-slate-500 uppercase tracking-wide font-medium">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default Stats;
