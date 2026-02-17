import { Sparkles } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-gray-100 bg-[#FAFAFA]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="gradient-bg p-2 rounded-xl">
                                <Sparkles className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-lg font-semibold tracking-tight text-[#1D1D1F]">
                                AI<span className="gradient-text">ToolsHub</span>
                            </span>
                        </Link>
                        <p className="text-sm text-[#86868B] max-w-sm leading-relaxed">
                            Discover the best AI tools to supercharge your workflow.
                            Curated, organized, and constantly updated.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-[#1D1D1F] mb-3">Explore</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-sm text-[#86868B] hover:text-[#1D1D1F] transition-colors">All Tools</Link></li>
                            <li><Link href="#categories" className="text-sm text-[#86868B] hover:text-[#1D1D1F] transition-colors">Categories</Link></li>
                            <li><Link href="/submit" className="text-sm text-[#86868B] hover:text-[#1D1D1F] transition-colors">Submit a Tool</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-[#1D1D1F] mb-3">Categories</h3>
                        <ul className="space-y-2">
                            {["Chatbot", "Image Generation", "Copywriting", "Video", "Code"].map((cat) => (
                                <li key={cat} className="text-sm text-[#86868B]">{cat}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-xs text-[#86868B]">© {new Date().getFullYear()} AIToolsHub. All rights reserved.</p>
                    <p className="text-xs text-[#86868B]">Built with ❤️ and AI</p>
                </div>
            </div>
        </footer>
    );
}
