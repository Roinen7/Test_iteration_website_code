"use client";

import { useState, useEffect, useMemo } from "react";
import { supabase } from "@/lib/supabase";
import { HeroSection } from "@/components/hero-section";
import { SidebarFilter } from "@/components/sidebar-filter";
import { ToolGrid } from "@/components/tool-grid";
import { Tool } from "@/components/tool-card";
import { Loader2 } from "lucide-react";

export default function HomePage() {
  const [tools, setTools] = useState<Tool[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPricing, setSelectedPricing] = useState("All");

  useEffect(() => {
    async function fetchTools() {
      setLoading(true);
      const { data, error } = await supabase.from("tools").select("*").order("name");
      if (data) setTools(data);
      setLoading(false);
    }
    fetchTools();
  }, []);

  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      const matchesSearch = !searchQuery || tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || tool.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(tool.category);
      const matchesPricing = selectedPricing === "All" || tool.pricing_type === selectedPricing;
      return matchesSearch && matchesCategory && matchesPricing;
    });
  }, [tools, searchQuery, selectedCategories, selectedPricing]);

  return (
    <>
      <HeroSection searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <section id="categories" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex flex-col lg:flex-row gap-8">
          <SidebarFilter selectedCategories={selectedCategories} onCategoryChange={setSelectedCategories} selectedPricing={selectedPricing} onPricingChange={setSelectedPricing} toolCount={filteredTools.length} />
          <div className="flex-1">
            {loading ? <div className="flex justify-center py-20"><Loader2 className="animate-spin text-indigo-500" /></div> : <ToolGrid tools={filteredTools} />}
          </div>
        </div>
      </section>
    </>
  );
}
