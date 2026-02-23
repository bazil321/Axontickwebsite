"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { portfolio as mockPortfolio } from "@/lib/mock-data";

interface PortfolioProps {
    initialProjects?: any[];
}

const Portfolio = ({ initialProjects }: PortfolioProps) => {
    const portfolio = initialProjects || mockPortfolio;
    const [filter, setFilter] = useState("all");

    const categories = [
        { id: "all", label: "All Projects" },
        { id: "chatbot", label: "Chatbot" },
        { id: "voice", label: "Voice Automation" },
        { id: "automation", label: "Automation" },
        { id: "web", label: "Web & CMS" },
        { id: "data", label: "Data & Scraping" },
    ];

    const filteredItems = filter === "all"
        ? portfolio
        : portfolio.filter(item => item.cat === filter);

    return (
        <section className="py-[100px] bg-bg-off" id="portfolio">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <Reveal>
                        <p className="text-[0.72rem] font-semibold tracking-[0.30em] uppercase text-muted mb-[18px]">Featured Projects</p>
                        <h2 className="text-[clamp(1.9rem,3.2vw,2.7rem)] font-bold leading-[1.1] tracking-tight text-dark mb-3.5">
                            See how we&apos;ve helped businesses<br />
                            <em className="font-serif italic font-normal tracking-normal text-dark/70">transform with AI automation</em>
                        </h2>
                        <p className="text-base text-dark2 leading-[1.7] max-w-[500px] mx-auto">
                            Real projects, real clients, real results. Click any project to learn more.
                        </p>
                    </Reveal>
                </div>

                {/* Filter tabs */}
                <Reveal delay={0.1}>
                    <div className="flex gap-2 flex-wrap justify-center mb-12">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setFilter(cat.id)}
                                className={`px-5 py-2 border-[1.5px] border-border-light rounded-full text-[0.84rem] font-semibold cursor-pointer transition-all ${filter === cat.id
                                    ? "bg-dark text-white border-dark"
                                    : "bg-white text-dark2 hover:border-dark hover:text-dark"
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredItems.map((item, i) => (
                        <Reveal key={i} delay={i * 0.05} className="h-full">
                            <div className="bg-white border border-border rounded-[14px] overflow-hidden transition-all hover:-translate-y-[5px] hover:shadow-[0_20px_48px_rgba(0,0,0,0.1)] h-full flex flex-col cursor-pointer">
                                <div className="h-[180px] flex items-center justify-center text-[3.5rem] relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100">
                                    {item.emoji}
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <span className="inline-block text-[0.72rem] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md mb-3 w-fit bg-blue-50 text-blue-700">
                                        {item.tag}
                                    </span>
                                    <h3 className="text-base font-bold text-dark mb-2 leading-tight">{item.name}</h3>
                                    <p className="text-[0.86rem] text-muted leading-[1.65] flex-1">{item.desc}</p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
