import React, { useState } from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { EVENTS_DATA } from '../../data/mockData';

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
                            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${filter === f ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
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

export default EventsPage;
