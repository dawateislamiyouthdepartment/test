import React from 'react';
import { MapPin } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { CENTRES_DATA } from '../data/mockData';

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

export default CentresPage;
