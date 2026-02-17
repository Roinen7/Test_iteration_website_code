"use client";

import { Search, Sparkles } from "lucide-react";

interface HeroSectionProps {
    searchQuery: string;
    onSearchChange: (query: string) => void;
}

export function HeroSection({ searchQuery, onSearchChange }: HeroSectionProps) {
    return (
        <section className="relative pt-32 pb-16 px-4 overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 left-1/4 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-40" />
                <div className="absolute top-32 right-1/4 w-72 h-72 bg-pink-100 rounded-full blur-3xl opacity-40" />
            </div>

            <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 mb-6">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                    <span className="text-xs font-medium text-indigo-600">Discover 1000+ AI Tools</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1D1D1F] leading-tight mb-5">
                    Find the <span className="gradient-text">Perfect AI Tool</span><br />for Every Task
                </h1>

                <p className="text-lg text-[#86868B] max-w-xl mx-auto mb-10 leading-relaxed">
                    Explore our curated collection of the best AI tools. Search, filter, and discover tools to supercharge your productivity.
                </p>

                <div className="relative max-w-2xl mx-auto group">
                    <div className="absolute -inset-0.5 gradient-bg rounded-2xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 blur-sm" />
                    <div className="relative flex items-center bg-white rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-200 group-focus-within:border-transparent transition-all duration-300">
                        <Search className="absolute left-4 w-5 h-5 text-[#86868B]" />
                        <input
                            type="text"
                            placeholder="Search AI tools..."
                            value={searchQuery}
                            onChange={(e) => onSearchChange(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 bg-transparent text-[#1D1D1F] placeholder-[#C7C7CC] rounded-2xl focus:outline-none text-base"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
