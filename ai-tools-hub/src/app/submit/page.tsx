"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, CheckCircle2, ArrowLeft } from "lucide-react";
import Link from "next/link";

const CATEGORIES = ["Chatbot", "Image Generation", "Copywriting", "Video", "Code", "Productivity", "Marketing", "Design", "Audio", "Research"];
const PRICING_OPTIONS = ["Free", "Freemium", "Paid"];

export default function SubmitPage() {
    const [formData, setFormData] = useState({ name: "", url: "", description: "", category: "", pricing_type: "" });
    const [status, setStatus] = useState("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.url) return;
        setStatus("loading");
        const { error } = await supabase.from("tools").insert([formData]);
        if (!error) {
            setStatus("success");
            setFormData({ name: "", url: "", description: "", category: "", pricing_type: "" });
        } else {
            setStatus("error");
        }
    };

    return (
        <div className="pt-28 pb-20 px-4 max-w-2xl mx-auto">
            <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-[#86868B] mb-8"><ArrowLeft className="w-4 h-4" /> Back</Link>
            <h1 className="text-3xl font-bold mb-8">Submit an <span className="gradient-text">AI Tool</span></h1>

            {status === "success" && <div className="p-4 bg-green-50 text-green-700 rounded-xl mb-6">Submitted successfully!</div>}

            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-2xl border border-gray-100Shadow-sm">
                <div className="space-y-2">
                    <Label>Tool Name</Label>
                    <Input value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                </div>
                <div className="space-y-2">
                    <Label>Website URL</Label>
                    <Input value={formData.url} onChange={(e) => setFormData({ ...formData, url: e.target.value })} />
                </div>
                <div className="space-y-2">
                    <Label>Description</Label>
                    <Textarea value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <Select onValueChange={(v) => setFormData({ ...formData, category: v })}>
                        <SelectTrigger><SelectValue placeholder="Category" /></SelectTrigger>
                        <SelectContent>{CATEGORIES.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
                    </Select>
                    <Select onValueChange={(v) => setFormData({ ...formData, pricing_type: v })}>
                        <SelectTrigger><SelectValue placeholder="Pricing" /></SelectTrigger>
                        <SelectContent>{PRICING_OPTIONS.map(p => <SelectItem key={p} value={p}>{p}</SelectItem>)}</SelectContent>
                    </Select>
                </div>
                <Button className="w-full gradient-bg text-white h-12 rounded-xl" disabled={status === "loading"}>
                    <Send className="w-4 h-4 mr-2" /> Submit Tool
                </Button>
            </form>
        </div>
    );
}
