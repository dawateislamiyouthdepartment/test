import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

// Layout
import Header from './components/layout/Header';
import Stats from './components/home/Stats';
import Hero from './components/home/Hero';
import QuickActions from './components/home/QuickActions';

// UI
import Card from './components/ui/Card';
import Badge from './components/ui/Badge';
import Button from './components/ui/Button';
import AdminPanel from './components/ui/AdminPanel';

// Pages
import EventsPage from './pages/EventsPage';
import ResourcesPage from './pages/ResourcesPage';
import CentresPage from './pages/CentresPage';
import QuranPage from './pages/QuranPage';
import UniversityPage from './pages/UniversityPage';

const App = () => {
    const [activeTab, setActiveTab] = useState('home');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [showAdmin, setShowAdmin] = useState(false);

    // Toggle admin view with 'A' key for demo purposes
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'A' && e.shiftKey) setShowAdmin(prev => !prev);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const renderContent = () => {
        switch (activeTab) {
            case 'home':
                return (
                    <>
                        <Hero setActiveTab={setActiveTab} />
                        <QuickActions setActiveTab={setActiveTab} />
                        <div className="max-w-7xl mx-auto px-4 py-8">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold text-slate-900">Latest Updates</h2>
                                <button onClick={() => setActiveTab('events')} className="text-emerald-600 font-medium text-sm flex items-center hover:underline">
                                    View all <ArrowRight size={16} />
                                </button>
                            </div>
                            <div className="grid md:grid-cols-3 gap-6 mb-12">
                                {/* Announcements / Featured */}
                                <Card className="md:col-span-2 p-6 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white border-none">
                                    <Badge color="amber">Featured</Badge>
                                    <h3 className="text-2xl font-bold mt-4 mb-2">Winter Conference 2024</h3>
                                    <p className="text-emerald-100 mb-6 max-w-lg">Registration is now open for the largest youth gathering of the year. Don't miss out on early bird tickets.</p>
                                    <Button className="bg-white text-emerald-900 hover:bg-emerald-50 border-none">Register Now</Button>
                                </Card>
                                <Card className="p-6">
                                    <h3 className="font-bold text-slate-900 mb-4">News Board</h3>
                                    <ul className="space-y-4">
                                        <li className="flex gap-3 items-start pb-3 border-b border-slate-50">
                                            <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2"></div>
                                            <div>
                                                <p className="text-sm font-medium text-slate-800">New Centre opening in Leeds</p>
                                                <p className="text-xs text-slate-400">2 days ago</p>
                                            </div>
                                        </li>
                                        <li className="flex gap-3 items-start pb-3 border-b border-slate-50">
                                            <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2"></div>
                                            <div>
                                                <p className="text-sm font-medium text-slate-800">Exam dua cards available for download</p>
                                                <p className="text-xs text-slate-400">5 days ago</p>
                                            </div>
                                        </li>
                                    </ul>
                                </Card>
                            </div>
                        </div>
                        <Stats />
                    </>
                );
            case 'events': return <EventsPage />;
            case 'resources': return <ResourcesPage />;
            case 'centres': return <CentresPage />;
            case 'quran': return <QuranPage />;
            case 'university': return <UniversityPage />;
            default: return <div className="p-10 text-center">Page Under Construction</div>;
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
            <Header
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
            />

            <main className="pb-16 md:pb-0">
                {renderContent()}
            </main>

            <footer className="bg-slate-900 text-slate-400 py-12 mt-12">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
                    <div>
                        <div className="text-white font-bold text-xl mb-4">Youth & Education</div>
                        <p className="text-sm mb-4">Empowering the youth with knowledge and character. A department of Dawat-e-Islami UK.</p>
                        <div className="flex gap-4">
                            {/* Social Placeholders */}
                            <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">X</div>
                            <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">In</div>
                            <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">Yt</div>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li className="hover:text-white cursor-pointer" onClick={() => setActiveTab('events')}>Events</li>
                            <li className="hover:text-white cursor-pointer" onClick={() => setActiveTab('university')}>University</li>
                            <li className="hover:text-white cursor-pointer">Travel With Us</li>
                            <li className="hover:text-white cursor-pointer">Careers</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4">Support</h4>
                        <ul className="space-y-2 text-sm">
                            <li className="hover:text-white cursor-pointer">Contact Us</li>
                            <li className="hover:text-white cursor-pointer">Safeguarding Policy</li>
                            <li className="hover:text-white cursor-pointer">Ask a Scholar</li>
                            <li className="hover:text-white cursor-pointer">Donate</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4">Newsletter</h4>
                        <div className="flex gap-2">
                            <input type="email" placeholder="Email address" className="bg-slate-800 border-none rounded-lg px-3 py-2 text-sm w-full focus:ring-1 focus:ring-emerald-500" />
                            <button className="bg-emerald-600 text-white rounded-lg px-3 hover:bg-emerald-700">Go</button>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-xs text-center">
                    © {new Date().getFullYear()} Youth & Education Department (Dawat-e-Islami). All rights reserved.
                </div>
            </footer>

            {showAdmin && <AdminPanel />}
        </div>
    );
};

export default App;
