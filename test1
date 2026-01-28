import React, { useState, useEffect, useMemo } from 'react';
import { 
  Calendar, BookOpen, MapPin, GraduationCap, Plane, 
  HelpCircle, Menu, X, ChevronRight, Search, Filter, 
  Heart, Download, Users, Clock, Globe, Shield, 
  PlayCircle, LayoutGrid, List, CheckCircle, ArrowRight
} from 'lucide-react';

// --- MOCK DATA ---

const EVENTS_DATA = [
  {
    id: 1,
    title: "National Youth Circle",
    date: "2023-11-15",
    time: "19:00 - 21:00",
    location: "Bradford Hub",
    category: "Youth Circle",
    description: "Join us for an evening of inspiration and brotherhood. Weekly gathering discussing modern challenges.",
    recurring: true
  },
  {
    id: 2,
    title: "University Leadership Summit",
    date: "2023-11-20",
    time: "10:00 - 16:00",
    location: "Manchester Central",
    category: "University",
    description: "Empowering student ambassadors with leadership skills and strategic planning for campus activities.",
    recurring: false
  },
  {
    id: 3,
    title: "Winter Peaks Retreat",
    date: "2023-12-05",
    time: "08:00 (3 Days)",
    location: "Lake District",
    category: "Travel",
    description: "Disconnect to reconnect. Hiking, spiritual workshops, and team building in nature.",
    recurring: false
  }
];

const RESOURCES_DATA = [
  {
    id: 1,
    title: "Exam Duas & Study Tips",
    type: "PDF",
    category: "Study",
    downloads: 1240,
    description: "A pocket guide for students during exam season."
  },
  {
    id: 2,
    title: "Understanding Prayer (Salah)",
    type: "Video",
    category: "Islamic Learning",
    downloads: 850,
    description: "Visual guide to perfecting your prayer."
  },
  {
    id: 3,
    title: "Mental Wellbeing Toolkit",
    type: "Toolkit",
    category: "Wellbeing",
    downloads: 530,
    description: "Islamic perspectives on anxiety and practical coping mechanisms."
  }
];

const CENTRES_DATA = [
  {
    id: 1,
    name: "Faizan-e-Madina Bradford",
    city: "Bradford",
    address: "123 Leeds Road, BD1",
    activities: ["Weekly Circle", "Archery Club", "Evening Classes"]
  },
  {
    id: 2,
    name: "Birmingham Youth Hub",
    city: "Birmingham",
    address: "45 Wright Street, B10",
    activities: ["Football", "Study Space", "Qur'an Class"]
  },
  {
    id: 3,
    name: "London East Centre",
    city: "London",
    address: "88 Romford Road, E12",
    activities: ["Mentoring", "Food Bank", "Social Evenings"]
  }
];

const QURAN_DATA = [
  { number: 1, name: "Al-Fatiha", english: "The Opener", verses: 7 },
  { number: 36, name: "Ya-Sin", english: "Ya Sin", verses: 83 },
  { number: 55, name: "Ar-Rahman", english: "The Beneficent", verses: 78 },
  { number: 67, name: "Al-Mulk", english: "The Sovereignty", verses: 30 },
];

// --- COMPONENTS ---

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "px-5 py-2.5 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 active:scale-95";
  const variants = {
    primary: "bg-emerald-600 text-white hover:bg-emerald-700 shadow-md shadow-emerald-600/20",
    secondary: "bg-amber-400 text-emerald-900 hover:bg-amber-500",
    outline: "border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50",
    ghost: "text-slate-600 hover:bg-slate-100"
  };
  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow ${className}`}>
    {children}
  </div>
);

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

// --- SECTIONS ---

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
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === item.id 
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
                className={`text-left px-4 py-3 rounded-lg text-base font-medium ${
                  activeTab === item.id ? 'bg-emerald-50 text-emerald-700' : 'text-slate-700'
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

const Hero = ({ setActiveTab }) => (
  <div className="relative bg-emerald-900 text-white overflow-hidden">
    {/* Abstract Pattern Background */}
    <div className="absolute inset-0 opacity-10">
      <svg width="100%" height="100%">
        <pattern id="islamic-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M0 20 L20 0 L40 20 L20 40 Z" fill="none" stroke="currentColor" strokeWidth="1"/>
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

// --- PAGE COMPONENTS ---

const EventsPage = () => {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Youth Circle', 'University', 'Travel', 'Workshop'];

  const filteredEvents = filter === 'All' 
    ? EVENTS_DATA 
    : EVENTS_DATA.filter(e => e.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Upcoming Events</h2>
          <p className="text-slate-500">Join the brotherhood and learn together.</p>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                filter === f ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {filteredEvents.map(event => (
          <Card key={event.id} className="flex flex-col h-full">
            <div className="bg-emerald-50 p-6 flex flex-col items-center text-center border-b border-emerald-100">
              <span className="text-emerald-800 font-bold text-xl">{new Date(event.date).getDate()}</span>
              <span className="text-emerald-600 text-sm font-medium uppercase">{new Date(event.date).toLocaleString('default', { month: 'short' })}</span>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <Badge color="blue">{event.category}</Badge>
                {event.recurring && <Badge color="amber">Weekly</Badge>}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{event.title}</h3>
              <p className="text-slate-600 text-sm mb-4 flex-1">{event.description}</p>
              
              <div className="space-y-2 text-sm text-slate-500 mb-6">
                <div className="flex items-center gap-2">
                  <Clock size={16} /> {event.time}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} /> {event.location}
                </div>
              </div>

              <div className="flex gap-2 mt-auto">
                <Button variant="primary" className="flex-1 text-sm">Register</Button>
                <Button variant="outline" className="px-3" title="Add to Calendar">
                  <Calendar size={18} />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

const ResourcesPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Resource Library</h2>
        <div className="relative">
          <Search className="absolute left-3 top-3 text-slate-400" size={20} />
          <input 
            type="text" 
            placeholder="Search for articles, PDFs, or videos..." 
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {RESOURCES_DATA.map(resource => (
          <Card key={resource.id} className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                resource.type === 'Video' ? 'bg-red-100 text-red-600' : 
                resource.type === 'PDF' ? 'bg-blue-100 text-blue-600' : 'bg-purple-100 text-purple-600'
              }`}>
                {resource.type === 'Video' ? <PlayCircle size={20} /> : <BookOpen size={20} />}
              </div>
              <Badge>{resource.category}</Badge>
            </div>
            <h3 className="font-bold text-slate-900 mb-2">{resource.title}</h3>
            <p className="text-sm text-slate-500 mb-4">{resource.description}</p>
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <span className="text-xs text-slate-400">{resource.downloads} downloads</span>
              <button className="text-emerald-600 hover:text-emerald-700 font-medium text-sm flex items-center gap-1">
                Download <Download size={16} />
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

const CentresPage = () => {
  // Placeholder for map functionality
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Find a Youth Centre</h2>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-slate-200 rounded-xl h-96 flex items-center justify-center relative overflow-hidden group">
            <MapPin size={48} className="text-slate-400 mb-2" />
            <span className="text-slate-500 font-medium">Interactive Map Loading...</span>
            {/* Visual Flair for Demo */}
            <div className="absolute inset-0 bg-emerald-900/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Button variant="primary">View on Google Maps</Button>
            </div>
          </div>
        </div>
        <div className="space-y-4 h-96 overflow-y-auto pr-2">
          {CENTRES_DATA.map(centre => (
            <Card key={centre.id} className="p-4 cursor-pointer hover:border-emerald-500 transition-colors">
              <h3 className="font-bold text-slate-900">{centre.name}</h3>
              <p className="text-sm text-slate-500 mb-2">{centre.address}</p>
              <div className="flex flex-wrap gap-1 mt-2">
                {centre.activities.map((act, i) => (
                  <span key={i} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">{act}</span>
                ))}
              </div>
              <div className="mt-3 flex gap-2">
                <button className="text-xs bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-md font-medium flex-1">Directions</button>
                <button className="text-xs bg-slate-50 text-slate-700 px-3 py-1.5 rounded-md font-medium flex-1">Contact</button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

const QuranPage = () => {
  const [selectedSurah, setSelectedSurah] = useState(QURAN_DATA[0]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-4 gap-8">
        <div className="md:col-span-1 space-y-2">
           <h3 className="font-bold text-slate-900 mb-4">Select Surah</h3>
           {QURAN_DATA.map(surah => (
             <button
              key={surah.number}
              onClick={() => setSelectedSurah(surah)}
              className={`w-full text-left px-4 py-3 rounded-lg flex justify-between items-center ${
                selectedSurah.number === surah.number 
                ? 'bg-emerald-600 text-white' 
                : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-100'
              }`}
             >
               <div>
                 <span className="font-bold">{surah.number}. {surah.name}</span>
                 <p className={`text-xs ${selectedSurah.number === surah.number ? 'text-emerald-100' : 'text-slate-400'}`}>{surah.english}</p>
               </div>
               <ChevronRight size={16} />
             </button>
           ))}
        </div>
        
        <div className="md:col-span-3">
          <Card className="p-8 min-h-[500px] flex flex-col items-center text-center">
             <div className="mb-8 border-b border-slate-100 pb-4 w-full">
               <h2 className="text-3xl font-bold text-emerald-800 mb-1">{selectedSurah.name}</h2>
               <p className="text-slate-500">{selectedSurah.english} • {selectedSurah.verses} Verses</p>
             </div>
             
             <div className="space-y-12 max-w-2xl">
               {/* Mock Verses */}
               <div>
                 <p className="text-3xl font-serif leading-loose text-slate-800 mb-4" dir="rtl">بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ</p>
                 <p className="text-lg text-slate-600">In the name of Allah, the Entirely Merciful, the Especially Merciful.</p>
               </div>
               <div>
                 <p className="text-3xl font-serif leading-loose text-slate-800 mb-4" dir="rtl">ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ</p>
                 <p className="text-lg text-slate-600">[All] praise is [due] to Allah, Lord of the worlds -</p>
               </div>
             </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

const UniversityPage = () => {
  const [role, setRole] = useState('student');

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-900">University Network</h2>
        <p className="text-slate-500 mt-2">Join a society or start one at your campus.</p>
      </div>

      <div className="flex bg-slate-100 p-1 rounded-xl mb-8">
        <button 
          onClick={() => setRole('student')}
          className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
            role === 'student' ? 'bg-white shadow-sm text-emerald-700' : 'text-slate-500'
          }`}
        >
          I'm a Student
        </button>
        <button 
          onClick={() => setRole('admin')}
          className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
            role === 'admin' ? 'bg-white shadow-sm text-emerald-700' : 'text-slate-500'
          }`}
        >
          University Staff
        </button>
      </div>

      <Card className="p-6 md:p-8">
        <form className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
              <input type="text" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-emerald-500 focus:outline-none" placeholder="Ali" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
              <input type="text" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-emerald-500 focus:outline-none" placeholder="Ahmed" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">University Name</label>
            <input type="text" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-emerald-500 focus:outline-none" placeholder="e.g. University of Manchester" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
            <input type="email" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-emerald-500 focus:outline-none" placeholder="ali@uni.ac.uk" />
          </div>
          
          {role === 'student' && (
             <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Interested in being an Ambassador?</label>
              <select className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-emerald-500 focus:outline-none bg-white">
                <option>Yes, I want to lead</option>
                <option>No, just want to join events</option>
                <option>Maybe later</option>
              </select>
             </div>
          )}

          <div className="pt-4">
            <Button className="w-full">Submit Application</Button>
            <p className="text-xs text-center text-slate-400 mt-3">By submitting, you agree to our privacy policy.</p>
          </div>
        </form>
      </Card>
    </div>
  );
};

// --- ADMIN PREVIEW ---
const AdminPanel = () => (
  <div className="fixed bottom-4 right-4 z-50">
    <div className="bg-slate-900 text-slate-300 px-4 py-2 rounded-lg shadow-lg text-xs font-mono border border-slate-700">
      <p className="font-bold text-white mb-1">CMS PREVIEW</p>
      <div className="flex flex-col gap-1">
        <span>• Edit "Events" (Collection)</span>
        <span>• Edit "Centres" (Collection)</span>
        <span>• Analytics View</span>
      </div>
    </div>
  </div>
);

// --- MAIN APP COMPONENT ---

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
