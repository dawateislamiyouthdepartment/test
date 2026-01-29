import React from 'react';
import { Menu, X } from 'lucide-react';

const Header = ({ activeTab, setActiveTab, mobileMenuOpen, setMobileMenuOpen }) => {
    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'events', label: 'Events' },
        { id: 'resources', label: 'Resources' },
        { id: 'centres', label: 'Centres' },
        { id: 'university', label: 'University' },
        { id: 'quran', label: 'Qur\'an' },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo Area */}
                    <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('home')}>
                        <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                            YE
                        </div>
                        <div className="leading-tight">
                            <h1 className="font-bold text-slate-900 tracking-tight">Youth & Education</h1>
                            <p className="text-xs text-emerald-600 font-medium">DAWAT-E-ISLAMI UK</p>
                        </div>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex gap-1">
                        {navItems.map(item => (
                            <button
                                key={item.id}
                                onClick={() => setActiveTab(item.id)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === item.id
                                    ? 'text-emerald-700 bg-emerald-50'
                                    : 'text-slate-600 hover:text-emerald-600 hover:bg-slate-50'
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                        <a
                            href="#"
                            className="ml-2 px-4 py-2 rounded-lg text-sm font-medium text-amber-600 hover:bg-amber-50"
                            onClick={(e) => { e.preventDefault(); alert("Redirecting to MadinanLight (Aqeedah)..."); }}
                        >
                            Aqeedah
                        </a>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-slate-600"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
                    <div className="flex flex-col p-4 gap-2">
                        {navItems.map(item => (
                            <button
                                key={item.id}
                                onClick={() => { setActiveTab(item.id); setMobileMenuOpen(false); }}
                                className={`text-left px-4 py-3 rounded-lg text-base font-medium ${activeTab === item.id ? 'bg-emerald-50 text-emerald-700' : 'text-slate-700'
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                        <button
                            onClick={() => { alert("Redirecting to MadinanLight..."); setMobileMenuOpen(false); }}
                            className="text-left px-4 py-3 rounded-lg text-base font-medium text-amber-600"
                        >
                            Aqeedah (MadinanLight)
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
