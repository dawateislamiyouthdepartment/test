import React from 'react';
import { Search, PlayCircle, BookOpen, Download } from 'lucide-react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import { RESOURCES_DATA } from '../../data/mockData';

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
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${resource.type === 'Video' ? 'bg-red-100 text-red-600' :
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

export default ResourcesPage;
