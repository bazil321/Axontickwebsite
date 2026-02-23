import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import InquiryForm from "@/components/InquiryForm";
import Link from "next/link";

const DataAnalyticsPage = () => {
    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Service Hero */}
            <section className="relative min-h-[72vh] flex items-center pt-[100px] pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_70%_at_60%_40%,#f5f3ff_0%,#faf5ff_40%,#ffffff_80%)]"></div>
                <div className="absolute inset-0 z-0 opacity-5 bg-[repeating-linear-gradient(0deg,transparent,transparent_44px,rgba(32,40,49,1)_44px,rgba(32,40,49,1)_45px),repeating-linear-gradient(90deg,transparent,transparent_44px,rgba(32,40,49,1)_44px,rgba(32,40,49,1)_45px)]"></div>

                <div className="container-custom">
                    <Reveal className="w-[72px] h-[72px] rounded-[18px] bg-purple-600 text-white flex items-center justify-center text-[2rem] mb-7 shadow-[0_8px_32px_rgba(0,0,0,0.15)]">
                        📊
                    </Reveal>
                    <Reveal delay={0.1} className="inline-flex items-center gap-[6px] bg-white/70 border border-white/90 rounded-full px-[14px] py-[5px] text-[0.78rem] font-semibold text-dark mb-5 backdrop-blur-md">
                        ✦ AI Data Intelligence
                    </Reveal>
                    <Reveal delay={0.2}>
                        <h1 className="text-[clamp(2.6rem,5.5vw,4.8rem)] font-bold leading-[1.06] tracking-tight text-dark mb-6 max-w-[820px]">
                            Extract Actionable Insights with<br />
                            <em className="font-serif italic font-normal tracking-normal text-dark/70">Custom AI Models</em>
                        </h1>
                        <p className="text-[clamp(1rem,1.4vw,1.15rem)] text-dark2 leading-[1.7] max-w-[580px] mb-10">
                            Transform raw data into strategic growth. We build scraping engines, predictive models, and real-time dashboards to give you a competitive edge.
                        </p>
                    </Reveal>

                    <Reveal delay={0.3}>
                        <div className="flex gap-[14px] flex-wrap">
                            <a href="#contact" className="inline-block bg-purple-600 text-white rounded-[10px] px-7 py-[15px] text-[0.96rem] font-semibold no-underline transition-all hover:opacity-85 hover:-translate-y-0.5">
                                Unlock Insights →
                            </a>
                            <Link href="/#portfolio" className="inline-block bg-transparent text-dark border-[1.5px] border-dark2 rounded-[10px] px-7 py-[15px] text-[0.96rem] font-semibold no-underline transition-all hover:bg-dark/5 hover:-translate-y-0.5">
                                Data Case Studies
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Problem / Solution Section */}
            <section className="py-24 bg-white border-y border-border-light">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-stretch">
                        <Reveal className="bg-indigo-50/50 border border-indigo-100 p-10 rounded-2xl h-full">
                            <div className="text-[0.72rem] font-bold tracking-[0.25em] uppercase text-indigo-600 mb-4">The Gap</div>
                            <h2 className="text-[clamp(1.7rem,2.8vw,2.4rem)] font-bold leading-[1.15] tracking-tight text-dark mb-5">Data is everywhere, but<br /><em className="font-serif italic font-normal text-dark/70">insights are missing</em></h2>
                            <p className="text-[0.96rem] text-dark2 leading-[1.78] mb-6">You have access to more data than ever, but it&apos;s scattered across platforms, unorganized, and impossible to act on without manual analysis.</p>
                            <ul className="list-none flex flex-col gap-3">
                                {["Inability to track competitor pricing", "Hard to spot trends before they happen", "Manual report generation takes days", "Fragmented customer data profiles"].map((pain, i) => (
                                    <li key={i} className="text-[0.92rem] text-dark2 flex items-start gap-2.5 leading-normal">
                                        <div className="w-[18px] h-[18px] rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 mt-[2px] text-[0.7rem] font-bold">✕</div>
                                        {pain}
                                    </li>
                                ))}
                            </ul>
                        </Reveal>
                        <Reveal delay={0.2} className="bg-purple-50/50 border border-purple-100 p-10 rounded-2xl h-full">
                            <div className="text-[0.72rem] font-bold tracking-[0.25em] uppercase text-purple-600 mb-4">The Solution</div>
                            <h2 className="text-[clamp(1.7rem,2.8vw,2.4rem)] font-bold leading-[1.15] tracking-tight text-dark mb-5">Intelligence systems that<br /><em className="font-serif italic font-normal text-dark/70">work while you sleep</em></h2>
                            <p className="text-[0.96rem] text-dark2 leading-[1.78] mb-6">We build custom AI engines that scrape, clean, and analyze data in real-time, providing you with actionable alerts and predictive insights.</p>
                            <ul className="list-none flex flex-col gap-3">
                                {["Automated competitor monitoring", "Predictive demand forecasting", "Real-time performance dashboards", "Unified customer intelligence Hub"].map((sol, i) => (
                                    <li key={i} className="text-[0.92rem] text-dark2 flex items-start gap-2.5 leading-normal">
                                        <div className="w-[18px] h-[18px] rounded-full bg-purple-600 text-white flex items-center justify-center shrink-0 mt-[2px] text-[0.7rem]">✓</div>
                                        {sol}
                                    </li>
                                ))}
                            </ul>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Capabilities */}
            <section className="py-24 bg-bg-off">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <Reveal>
                            <p className="text-[0.72rem] font-semibold tracking-[0.30em] uppercase text-muted mb-4">Capabilities</p>
                            <h2 className="text-[clamp(1.9rem,3.2vw,2.7rem)] font-bold tracking-tight text-dark mb-4">Turn raw data <em className="font-serif italic font-normal opacity-70">into revenue</em></h2>
                        </Reveal>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: "🕷️", title: "Custom Web Scrapers", desc: "Collect data from any website at scale, including competitor prices and market trends." },
                            { icon: "🧹", title: "Automated Data Cleaning", desc: "AI-driven pipelines that normalize and deduplicate data from multiple sources." },
                            { icon: "🔮", title: "Predictive Modeling", desc: "Custom ML models to forecast sales, churn, and customer lifetime value." },
                            { icon: "🔍", title: "Semantic Search", desc: "Build RAG systems that allow you to &quot;chat&quot; with your entire internal dataset." },
                            { icon: "📊", title: "Real-time Dashboards", desc: "Custom visualization (Streamlit, Tableau, or Custom React) for live monitoring." },
                            { icon: "🔔", title: "Intelligent Alerts", desc: "Get notified on Slack or Email when the data shows significant anomalies or opportunities." }
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

export default DataAnalyticsPage;

