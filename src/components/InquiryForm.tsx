"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const InquiryForm = () => {
    const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        setTimeout(() => setStatus("sent"), 1000);
    };

    return (
        <section className="py-[100px] bg-white" id="contact">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* Left Side Content */}
                    <div>
                        <p className="text-[0.72rem] font-semibold tracking-[0.30em] uppercase text-muted mb-[18px]">Custom Inquiry</p>
                        <Reveal>
                            <h2 className="text-[clamp(1.9rem,3.5vw,3rem)] font-bold leading-[1.1] tracking-tight text-dark mb-5">
                                Tell us what you need —<br />
                                <em className="font-serif italic font-normal tracking-normal text-dark/70">we&apos;ll handle the rest</em>
                            </h2>
                            <p className="text-base text-dark2 leading-[1.7] max-w-[500px] mb-10">
                                Every automation we build is crafted manually by our team. No templates, no shortcuts. Describe your challenge and we&apos;ll come back to you with a tailored plan within 24 hours.
                            </p>
                        </Reveal>

                        <div className="flex flex-col gap-3.5 mb-10">
                            {[
                                { title: "Fully custom-built", desc: "Every agent and workflow is engineered from scratch by our in-house team." },
                                { title: "Free initial analysis", desc: "We&apos;ll review your workflow and identify automation opportunities at no cost." },
                                { title: "Response within 24 hours", desc: "Tell us your budget and goals — we&apos;ll reply with a realistic scope and timeline." }
                            ].map((item, i) => (
                                <Reveal key={i} delay={i * 0.1}>
                                    <div className="flex items-start gap-3.5">
                                        <div className="w-[22px] h-[22px] rounded-md bg-dark flex items-center justify-center shrink-0 mt-[1px]">
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                        </div>
                                        <div className="text-[0.94rem] text-dark2 leading-tight">
                                            <strong className="text-dark font-bold block mb-0.5">{item.title}</strong>
                                            {item.desc}
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>

                        <Reveal delay={0.4}>
                            <div className="flex gap-3.5 flex-wrap">
                                <a href="#contact" className="inline-block bg-dark text-white rounded-[10px] px-7 py-[15px] text-[0.96rem] font-semibold transition-all hover:opacity-80 hover:-translate-y-0.5">
                                    Book a Free Consultation →
                                </a>
                                <a href="#portfolio" className="inline-block bg-transparent text-dark border-[1.5px] border-dark2 rounded-[10px] px-7 py-[15px] text-[0.96rem] font-semibold transition-all hover:bg-dark/5 hover:-translate-y-0.5">
                                    See Our Work
                                </a>
                            </div>
                        </Reveal>
                    </div>

                    {/* Right Side Form */}
                    <Reveal delay={0.2}>
                        <div className="bg-white border border-border rounded-2xl p-9 shadow-card">
                            <div className="flex items-center justify-between mb-7">
                                <h3 className="font-bold text-[1.05rem] text-dark">Define Your Requirements</h3>
                                <div className="bg-[#f0c62e]/15 border border-[#f0c62e]/35 rounded-full px-3 py-1 text-[0.74rem] font-bold text-[#7a5a00]">
                                    ⚡ Reply in 24hrs
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="space-y-2">
                                    <label className="text-[0.78rem] font-bold uppercase tracking-widest text-muted">Your Name</label>
                                    <input type="text" required placeholder="e.g. Sarah Khan" className="w-full px-3.5 py-3 border-[1.5px] border-border-light rounded-[10px] font-medium text-[0.92rem] focus:outline-none focus:border-dark transition-colors" />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <div className="space-y-2">
                                        <label className="text-[0.78rem] font-bold uppercase tracking-widest text-muted">Work Email</label>
                                        <input type="email" required placeholder="you@company.com" className="w-full px-3.5 py-3 border-[1.5px] border-border-light rounded-[10px] font-medium text-[0.92rem] focus:outline-none focus:border-dark transition-colors" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[0.78rem] font-bold uppercase tracking-widest text-muted">Company / Project</label>
                                        <input type="text" required placeholder="e.g. Acme Inc." className="w-full px-3.5 py-3 border-[1.5px] border-border-light rounded-[10px] font-medium text-[0.92rem] focus:outline-none focus:border-dark transition-colors" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[0.78rem] font-bold uppercase tracking-widest text-muted">Service You Need</label>
                                    <select className="w-full px-3.5 py-3 border-[1.5px] border-border-light rounded-[10px] font-medium text-[0.92rem] bg-white focus:outline-none focus:border-dark transition-colors appearance-none">
                                        <option disabled selected>Select a service...</option>
                                        <option>Omnichannel Chatbot</option>
                                        <option>AI Voice Agent</option>
                                        <option>Marketing & Sales Automation</option>
                                        <option>Workflow Automation</option>
                                        <option>HR & Support Automation</option>
                                        <option>Data Analytics & AI System</option>
                                    </select>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <div className="space-y-2">
                                        <label className="text-[0.78rem] font-bold uppercase tracking-widest text-muted">Budget Range</label>
                                        <select className="w-full px-3.5 py-3 border-[1.5px] border-border-light rounded-[10px] font-medium text-[0.92rem] bg-white focus:outline-none focus:border-dark transition-colors appearance-none">
                                            <option disabled selected>Your budget...</option>
                                            <option>Under $500</option>
                                            <option>$500 – $1,500</option>
                                            <option>$1,500 – $5,000</option>
                                            <option>$5,000 – $15,000</option>
                                            <option>$15,000+</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[0.78rem] font-bold uppercase tracking-widest text-muted">Timeline</label>
                                        <select className="w-full px-3.5 py-3 border-[1.5px] border-border-light rounded-[10px] font-medium text-[0.92rem] bg-white focus:outline-none focus:border-dark transition-colors appearance-none">
                                            <option disabled selected>How soon...</option>
                                            <option>ASAP</option>
                                            <option>Within 2 weeks</option>
                                            <option>1 month</option>
                                            <option>No rush</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[0.78rem] font-bold uppercase tracking-widest text-muted">Describe Your Challenge</label>
                                    <textarea rows={4} placeholder="Tell us what you&apos;re trying to automate or build..." className="w-full px-3.5 py-3 border-[1.5px] border-border-light rounded-[10px] font-medium text-[0.92rem] focus:outline-none focus:border-dark transition-colors resize-none"></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={status !== "idle"}
                                    className={`w-full py-4 rounded-[10px] font-bold text-[1rem] transition-all relative ${status === "sent" ? "bg-green-600 text-white" : "bg-dark text-white hover:opacity-85 hover:-translate-y-0.5"
                                        }`}
                                >
                                    {status === "idle" && "Send Inquiry →"}
                                    {status === "submitting" && "Sending..."}
                                    {status === "sent" && "✓ Inquiry Sent! We'll reply soon."}
                                </button>
                                <p className="text-[0.78rem] text-muted text-center mt-3">No commitment. Free analysis included.</p>
                            </form>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default InquiryForm;
