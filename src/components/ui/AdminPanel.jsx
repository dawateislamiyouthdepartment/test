import React from 'react';

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

export default AdminPanel;
