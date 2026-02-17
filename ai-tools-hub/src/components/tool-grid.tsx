"use client";

import { ToolCard, Tool } from "./tool-card";
import { Frown } from "lucide-react";

interface ToolGridProps {
    tools: Tool[];
}

export function ToolGrid({ tools }: ToolGridProps) {
    if (tools.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-20 text-center">
                <Frown className="w-8 h-8 text-[#C7C7CC] mb-4" />
                <h3 className="text-lg font-semibold text-[#1D1D1F] mb-2">No tools found</h3>
                <p className="text-sm text-[#86868B]">Try adjusting your filters or search query.</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {tools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
            ))}
        </div>
    );
}
