import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import InquiryForm from "@/components/InquiryForm";
import Link from "next/link";

const MarketingPage = () => {
    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Service Hero */}
            <section className="relative min-h-[72vh] flex items-center pt-[100px] pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_70%_at_60%_40%,#fee2e2_0%,#fef2f2_40%,#ffffff_80%)]"></div>
                <div className="absolute inset-0 z-0 opacity-5 bg-[repeating-linear-gradient(0deg,transparent,transparent_44px,rgba(32,40,49,1)_44px,rgba(32,40,49,1)_45px),repeating-linear-gradient(90deg,transparent,transparent_44px,rgba(32,40,49,1)_44px,rgba(32,40,49,1)_45px)]"></div>

                <div className="container-custom">
                    <Reveal className="w-[72px] h-[72px] rounded-[18px] bg-red-600 text-white flex items-center justify-center text-[2rem] mb-7 shadow-[0_8px_32px_rgba(0,0,0,0.15)]">
                        🚀
                    </Reveal>
                    <Reveal delay={0.1} className="inline-flex items-center gap-[6px] bg-white/70 border border-white/90 rounded-full px-[14px] py-[5px] text-[0.78rem] font-semibold text-dark mb-5 backdrop-blur-md">
                        ✦ AI Marketing & Sales
                    </Reveal>
                    <Reveal delay={0.2}>
                        <h1 className="text-[clamp(2.6rem,5.5vw,4.8rem)] font-bold leading-[1.06] tracking-tight text-dark mb-6 max-w-[820px]">
                            Automate Your Pipeline from<br />
                            <em className="font-serif italic font-normal tracking-normal text-dark/70">Lead Gen to Closing</em>
                        </h1>
                        <p className="text-[clamp(1rem,1.4vw,1.15rem)] text-dark2 leading-[1.7] max-w-[580px] mb-10">
                            Eliminate cold outreach manual labor and forgotten follow-ups. We build end-to-end marketing engines that qualify leads and nurture them automatically.
                        </p>
                    </Reveal>

                    <Reveal delay={0.3}>
                        <div className="flex gap-[14px] flex-wrap">
                            <a href="#contact" className="inline-block bg-red-600 text-white rounded-[10px] px-7 py-[15px] text-[0.96rem] font-semibold no-underline transition-all hover:opacity-85 hover:-translate-y-0.5">
                                Scale Your Growth →
                            </a>
                            <Link href="/#portfolio" className="inline-block bg-transparent text-dark border-[1.5px] border-dark2 rounded-[10px] px-7 py-[15px] text-[0.96rem] font-semibold no-underline transition-all hover:bg-dark/5 hover:-translate-y-0.5">
                                See Campaign Results
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Problem / Solution Section */}
            <section className="py-24 bg-white border-y border-border-light">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-stretch">
                        <Reveal className="bg-orange-50/50 border border-orange-100 p-10 rounded-2xl h-full">
                            <div className="text-[0.72rem] font-bold tracking-[0.25em] uppercase text-orange-600 mb-4">The Friction</div>
                            <h2 className="text-[clamp(1.7rem,2.8vw,2.4rem)] font-bold leading-[1.15] tracking-tight text-dark mb-5">Manual outreach is slow<br /><em className="font-serif italic font-normal text-dark/70">and inefficient</em></h2>
                            <p className="text-[0.96rem] text-dark2 leading-[1.78] mb-6">Your sales team spends 80% of their time on low-value tasks: manual LinkedIn messaging, email follow-ups, and managing spreadsheets. Only 20% is spent actually closing.</p>
                            <ul className="list-none flex flex-col gap-3">
                                {["Inconsistent follow-up cycles", "Manual lead data entry in CRM", "Spammy-looking generic outreach", "High cost per lead with low conversion"].map((pain, i) => (
                                    <li key={i} className="text-[0.92rem] text-dark2 flex items-start gap-2.5 leading-normal">
                                        <div className="w-[18px] h-[18px] rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 mt-[2px] text-[0.7rem] font-bold">✕</div>
                                        {pain}
                                    </li>
                                ))}
                            </ul>
                        </Reveal>
                        <Reveal delay={0.2} className="bg-rose-50/50 border border-rose-100 p-10 rounded-2xl h-full">
                            <div className="text-[0.72rem] font-bold tracking-[0.25em] uppercase text-rose-600 mb-4">The Solution</div>
                            <h2 className="text-[clamp(1.7rem,2.8vw,2.4rem)] font-bold leading-[1.15] tracking-tight text-dark mb-5">High-performance<br /><em className="font-serif italic font-normal text-dark/70">automated sales engines</em></h2>
                            <p className="text-[0.96rem] text-dark2 leading-[1.78] mb-6">We build systems that research prospects, craft personalized messages, and handle follow-ups across multiple channels until they book a meeting on your calendar.</p>
                            <ul className="list-none flex flex-col gap-3">
                                {["Personalized AI-generated outreach", "Automated multichannel follow-ups", "Direct lead-to-meeting conversion", "Self-cleaning CRM data management"].map((sol, i) => (
                                    <li key={i} className="text-[0.92rem] text-dark2 flex items-start gap-2.5 leading-normal">
                                        <div className="w-[18px] h-[18px] rounded-full bg-rose-600 text-white flex items-center justify-center shrink-0 mt-[2px] text-[0.7rem]">✓</div>
                                        {sol}
                                    </li>
                                ))}
                            </ul>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Strategies */}
            <section className="py-24 bg-bg-off">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <Reveal>
                            <p className="text-[0.72rem] font-semibold tracking-[0.30em] uppercase text-muted mb-4">Strategies</p>
                            <h2 className="text-[clamp(1.9rem,3.2vw,2.7rem)] font-bold tracking-tight text-dark mb-4">Precision-engineered <em className="font-serif italic font-normal opacity-70">growth</em></h2>
                        </Reveal>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: "🎯", title: "Targeted Prospecting", desc: "Automated scraping and enrichment of high-intent leads based on your ICP." },
                            { icon: "✉️", title: "Cold Email Systems", desc: "Enterprise-grade email infrastructure with automated secondary domains and warmups." },
                            { icon: "📱", title: "LinkedIn Automation", desc: "Human-like LinkedIn outreach that builds connections and starts real conversations." },
                            { icon: "🔄", title: "Omnichannel Nurturing", desc: "Seamlessly moving leads through email, SMS, and social touchpoints." },
                            { icon: "📈", title: "Funnel Optimization", desc: "AI-driven A/B testing of messaging and landing pages for maximum ROI." },
                            { icon: "🤖", title: "Sales Co-pilots", desc: "AI assistants that draft research-backed responses for your sales reps." }
                        ].map((feat, i) => (
                            <Reveal key={i} delay={i * 0.05}>
                                <div className="bg-white border border-border p-8 rounded-xl h-full shadow-sm hover:shadow-md transition-shadow">
                                    <div className="text-2xl mb-4">{feat.icon}</div>
                                    <h3 className="text-lg font-bold text-dark mb-3Alpha">{feat.title}</h3>
                                    <p className="text-[0.88rem] text-muted leading-relaxed">{feat.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <InquiryForm />
            <Footer />
        </main>
    );
};

export default MarketingPage;

