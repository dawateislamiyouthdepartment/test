import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import Card from '../components/ui/Card';
import { QURAN_DATA } from '../data/mockData';

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
                            className={`w-full text-left px-4 py-3 rounded-lg flex justify-between items-center ${selectedSurah.number === surah.number
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

export default QuranPage;
