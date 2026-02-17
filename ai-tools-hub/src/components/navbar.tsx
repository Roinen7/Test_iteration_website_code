"use client";

import Link from "next/link";
import { Sparkles, Plus, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="gradient-bg p-2 rounded-xl">
                            <Sparkles className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xl font-semibold tracking-tight text-[#1D1D1F]">
                            AI<span className="gradient-text">ToolsHub</span>
                        </span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-8">
                        <Link href="/" className="text-sm font-medium text-[#86868B] hover:text-[#1D1D1F] transition-colors">
                            Explore
                        </Link>
                        <Link href="#categories" className="text-sm font-medium text-[#86868B] hover:text-[#1D1D1F] transition-colors">
                            Categories
                        </Link>
                        <Link href="/submit" className="text-sm font-medium text-[#86868B] hover:text-[#1D1D1F] transition-colors">
                            Submit Tool
                        </Link>
                    </nav>

                    <div className="hidden md:flex items-center gap-3">
                        <Link href="/submit">
                            <Button className="gradient-bg text-white border-0 rounded-full px-5 h-9 text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer">
                                <Plus className="w-4 h-4 mr-1.5" />
                                Submit Tool
                            </Button>
                        </Link>
                    </div>

                    <button className="md:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors" onClick={() => setMobileOpen(!mobileOpen)}>
                        {mobileOpen ? <X className="w-5 h-5 text-[#1D1D1F]" /> : <Menu className="w-5 h-5 text-[#1D1D1F]" />}
                    </button>
                </div>

                {mobileOpen && (
                    <div className="md:hidden pb-4 pt-2 border-t border-gray-100">
                        <nav className="flex flex-col gap-1">
                            <Link href="/" className="px-3 py-2.5 rounded-xl text-sm font-medium text-[#1D1D1F] hover:bg-gray-50 transition-colors" onClick={() => setMobileOpen(false)}>
                                Explore
                            </Link>
                            <Link href="#categories" className="px-3 py-2.5 rounded-xl text-sm font-medium text-[#1D1D1F] hover:bg-gray-50 transition-colors" onClick={() => setMobileOpen(false)}>
                                Categories
                            </Link>
                            <Link href="/submit" className="px-3 py-2.5 rounded-xl text-sm font-medium text-[#1D1D1F] hover:bg-gray-50 transition-colors" onClick={() => setMobileOpen(false)}>
                                Submit Tool
                            </Link>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
