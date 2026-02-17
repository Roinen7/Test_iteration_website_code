"use client";

import { ExternalLink, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export interface Tool {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    pricing_type: string;
    image_url: string | null;
}

const categoryColors: Record<string, string> = {
    Chatbot: "bg-blue-50 text-blue-600 border-blue-100",
    "Image Generation": "bg-purple-50 text-purple-600 border-purple-100",
    Copywriting: "bg-emerald-50 text-emerald-600 border-emerald-100",
    Video: "bg-rose-50 text-rose-600 border-rose-100",
    Code: "bg-amber-50 text-amber-600 border-amber-100",
};

export function ToolCard({ tool }: { tool: Tool }) {
    return (
        <div className="group relative bg-white rounded-2xl border border-gray-100 p-5 card-hover">
            <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#F5F5F7] flex items-center justify-center text-2xl">
                    🤖
                </div>
                <Badge variant="outline" className={`text-[10px] uppercase font-medium px-2.5 py-0.5 rounded-full border bg-indigo-50 text-indigo-600 border-indigo-100`}>
                    {tool.pricing_type}
                </Badge>
            </div>

            <h3 className="text-base font-semibold text-[#1D1D1F] mb-1.5 group-hover:text-indigo-600 transition-colors">
                {tool.name}
            </h3>

            <p className="text-sm text-[#86868B] leading-relaxed mb-4 line-clamp-2">
                {tool.description}
            </p>

            <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                <div className="flex items-center gap-1.5">
                    <Tag className="w-3 h-3 text-[#C7C7CC]" />
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${categoryColors[tool.category] || "bg-gray-50 text-gray-600 border-gray-100"}`}>
                        {tool.category}
                    </span>
                </div>
                <a href={tool.url} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="gradient-bg text-white border-0 rounded-full h-8 px-4 text-xs font-medium hover:opacity-90 transition-opacity cursor-pointer">
                        Visit <ExternalLink className="w-3 h-3 ml-1" />
                    </Button>
                </a>
            </div>
        </div>
    );
}
