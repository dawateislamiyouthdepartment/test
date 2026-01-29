import React, { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';

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
                    className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${role === 'student' ? 'bg-white shadow-sm text-emerald-700' : 'text-slate-500'
                        }`}
                >
                    I'm a Student
                </button>
                <button
                    onClick={() => setRole('admin')}
                    className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${role === 'admin' ? 'bg-white shadow-sm text-emerald-700' : 'text-slate-500'
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

export default UniversityPage;
