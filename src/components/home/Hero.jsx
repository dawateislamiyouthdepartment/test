import React from 'react';
import { BookOpen } from 'lucide-react';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

const Hero = ({ setActiveTab }) => (
    <div className="relative bg-emerald-900 text-white overflow-hidden">
        {/* Abstract Pattern Background */}
        <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%">
                <pattern id="islamic-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M0 20 L20 0 L40 20 L20 40 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#islamic-pattern)" />
            </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24 sm:px-6 lg:px-8 text-center sm:text-left">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <Badge color="amber">New Semester</Badge>
                    <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                        Inspiring the <span className="text-amber-400">Next Generation</span>
                    </h1>
                    <p className="mt-4 text-lg text-emerald-100 max-w-xl">
                        Empowering British Muslim youth with knowledge, character, and skills. Join a community that grows together.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <Button variant="secondary" onClick={() => setActiveTab('events')}>
                            Find an Event
                        </Button>
                        <Button variant="outline" className="border-emerald-300 text-emerald-100 hover:bg-emerald-800" onClick={() => setActiveTab('university')}>
                            Uni Sign Up
                        </Button>
                    </div>
                </div>
                {/* Abstract Illustration Placeholder */}
                <div className="hidden md:flex justify-center items-center">
                    <div className="w-80 h-80 bg-emerald-800/50 rounded-full flex items-center justify-center relative backdrop-blur-sm border border-emerald-700">
                        <div className="absolute inset-0 border-2 border-amber-400/30 rounded-full animate-pulse"></div>
                        <BookOpen size={100} className="text-emerald-200 opacity-80" />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Hero;
