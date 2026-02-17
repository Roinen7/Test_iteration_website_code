"use client";

import { Filter, X } from "lucide-react";

const CATEGORIES = ["Chatbot", "Image Generation", "Copywriting", "Video", "Code", "Productivity", "Marketing", "Design", "Audio", "Research"];
const PRICING_OPTIONS = ["All", "Free", "Freemium", "Paid"];

interface SidebarFilterProps {
    selectedCategories: string[];
    onCategoryChange: (categories: string[]) => void;
    selectedPricing: string;
    onPricingChange: (pricing: string) => void;
    toolCount: number;
}

export function SidebarFilter({ selectedCategories, onCategoryChange, selectedPricing, onPricingChange, toolCount }: SidebarFilterProps) {
    const toggleCategory = (cat: string) => {
        if (selectedCategories.includes(cat)) {
            onCategoryChange(selectedCategories.filter((c) => c !== cat));
        } else {
            onCategoryChange([...selectedCategories, cat]);
        }
    };

    return (
        <aside className="w-full lg:w-64 shrink-0">
            <div className="sticky top-24 bg-white rounded-2xl border border-gray-100 p-5">
                <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2">
                        <Filter className="w-4 h-4 text-[#86868B]" />
                        <h2 className="text-sm font-semibold text-[#1D1D1F]">Filters</h2>
                    </div>
                </div>

                <div className="mb-5 pb-4 border-b border-gray-100">
                    <span className="text-xs text-[#86868B]">Showing <span className="font-semibold text-[#1D1D1F]">{toolCount}</span> tools</span>
                </div>

                <div className="mb-6">
                    <h3 className="text-xs font-semibold text-[#1D1D1F] uppercase tracking-wider mb-3">Category</h3>
                    <div className="space-y-1">
                        {CATEGORIES.map((cat) => (
                            <label key={cat} className="flex items-center gap-2.5 px-2.5 py-2 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors group">
                                <input type="checkbox" className="hidden" checked={selectedCategories.includes(cat)} onChange={() => toggleCategory(cat)} />
                                <div className={`w-4 h-4 rounded-md border-2 flex items-center justify-center transition-all ${selectedCategories.includes(cat) ? "gradient-bg border-transparent" : "border-gray-300"}`}>
                                    {selectedCategories.includes(cat) && <div className="w-2 h-2 bg-white rounded-sm" />}
                                </div>
                                <span className="text-sm text-[#1D1D1F]">{cat}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-xs font-semibold text-[#1D1D1F] uppercase tracking-wider mb-3">Pricing</h3>
                    <div className="space-y-1">
                        {PRICING_OPTIONS.map((price) => (
                            <label key={price} className="flex items-center gap-2.5 px-2.5 py-2 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors group">
                                <input type="radio" className="hidden" name="pricing" checked={selectedPricing === price} onChange={() => onPricingChange(price)} />
                                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${selectedPricing === price ? "border-indigo-500" : "border-gray-300"}`}>
                                    {selectedPricing === price && <div className="w-2 h-2 rounded-full gradient-bg" />}
                                </div>
                                <span className="text-sm text-[#1D1D1F]">{price}</span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
        </aside>
    );
}
