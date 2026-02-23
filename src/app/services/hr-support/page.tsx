import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import InquiryForm from "@/components/InquiryForm";
import Link from "next/link";

const HRSupportPage = () => {
    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Service Hero */}
            <section className="relative min-h-[72vh] flex items-center pt-[100px] pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_70%_at_60%_40%,#f0fdf4_0%,#f7fee7_40%,#ffffff_80%)]"></div>
                <div className="absolute inset-0 z-0 opacity-5 bg-[repeating-linear-gradient(0deg,transparent,transparent_44px,rgba(32,40,49,1)_44px,rgba(32,40,49,1)_45px),repeating-linear-gradient(90deg,transparent,transparent_44px,rgba(32,40,49,1)_44px,rgba(32,40,49,1)_45px)]"></div>

                <div className="container-custom">
                    <Reveal className="w-[72px] h-[72px] rounded-[18px] bg-green-600 text-white flex items-center justify-center text-[2rem] mb-7 shadow-[0_8px_32px_rgba(0,0,0,0.15)]">
                        👥
                    </Reveal>
                    <Reveal delay={0.1} className="inline-flex items-center gap-[6px] bg-white/70 border border-white/90 rounded-full px-[14px] py-[5px] text-[0.78rem] font-semibold text-dark mb-5 backdrop-blur-md">
                        ✦ HR & Operations AI
                    </Reveal>
                    <Reveal delay={0.2}>
                        <h1 className="text-[clamp(2.6rem,5.5vw,4.8rem)] font-bold leading-[1.06] tracking-tight text-dark mb-6 max-w-[820px]">
                            Streamline Onboarding and<br />
                            <em className="font-serif italic font-normal tracking-normal text-dark/70">Employee Support</em>
                        </h1>
                        <p className="text-[clamp(1rem,1.4vw,1.15rem)] text-dark2 leading-[1.7] max-w-[580px] mb-10">
                            Automate internal ticketing, employee onboarding, and knowledge management. Free your HR team from answering the same policy questions every day.
                        </p>
                    </Reveal>

                    <Reveal delay={0.3}>
                        <div className="flex gap-[14px] flex-wrap">
                            <a href="#contact" className="inline-block bg-green-600 text-white rounded-[10px] px-7 py-[15px] text-[0.96rem] font-semibold no-underline transition-all hover:opacity-85 hover:-translate-y-0.5">
                                Optimize Operations →
                            </a>
                            <Link href="/#portfolio" className="inline-block bg-transparent text-dark border-[1.5px] border-dark2 rounded-[10px] px-7 py-[15px] text-[0.96rem] font-semibold no-underline transition-all hover:bg-dark/5 hover:-translate-y-0.5">
                                Internal Case Studies
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Problem / Solution Section */}
            <section className="py-24 bg-white border-y border-border-light">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-stretch">
                        <Reveal className="bg-slate-50 border border-slate-100 p-10 rounded-2xl h-full">
                            <div className="text-[0.72rem] font-bold tracking-[0.25em] uppercase text-slate-500 mb-4">The Overhead</div>
                            <h2 className="text-[clamp(1.7rem,2.8vw,2.4rem)] font-bold leading-[1.15] tracking-tight text-dark mb-5">Admin tasks are eating<br /><em className="font-serif italic font-normal text-dark/70">your team&apos;s time</em></h2>
                            <p className="text-[0.96rem] text-dark2 leading-[1.78] mb-6">Your HR and Ops teams are bogged down by repetitive requests: password resets, policy clarifications, onboarding paperwork, and vacation requests.</p>
                            <ul className="list-none flex flex-col gap-3">
                                {["Delayed onboarding for new hires", "Employee frustration with slow response", "Valuable staff stuck in data entry", "Information silos across different docs"].map((pain, i) => (
                                    <li key={i} className="text-[0.92rem] text-dark2 flex items-start gap-2.5 leading-normal">
                                        <div className="w-[18px] h-[18px] rounded-full bg-slate-100 text-slate-500 flex items-center justify-center shrink-0 mt-[2px] text-[0.7rem] font-bold">✕</div>
                                        {pain}
                                    </li>
                                ))}
                            </ul>
                        </Reveal>
                        <Reveal delay={0.2} className="bg-green-50/50 border border-green-100 p-10 rounded-2xl h-full">
                            <div className="text-[0.72rem] font-bold tracking-[0.25em] uppercase text-green-600 mb-4">The Solution</div>
                            <h2 className="text-[clamp(1.7rem,2.8vw,2.4rem)] font-bold leading-[1.15] tracking-tight text-dark mb-5">Seamless internal<br /><em className="font-serif italic font-normal text-dark/70">automation pipelines</em></h2>
                            <p className="text-[0.96rem] text-dark2 leading-[1.78] mb-6">We build internal AI assistants and automated workflows that handle the &quot;busy work,&quot; allowing your team to focus on culture, strategy, and talent.</p>
                            <ul className="list-none flex flex-col gap-3">
                                {["24/7 internal policy assistants", "One-click onboarding automation", "Automated ticketing & resolution", "Centralized AI knowledge base"].map((sol, i) => (
                                    <li key={i} className="text-[0.92rem] text-dark2 flex items-start gap-2.5 leading-normal">
                                        <div className="w-[18px] h-[18px] rounded-full bg-green-600 text-white flex items-center justify-center shrink-0 mt-[2px] text-[0.7rem]">✓</div>
                                        {sol}
                                    </li>
                                ))}
                            </ul>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Solutions */}
            <section className="py-24 bg-bg-off">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <Reveal>
                            <p className="text-[0.72rem] font-semibold tracking-[0.30em] uppercase text-muted mb-4">Solutions</p>
                            <h2 className="text-[clamp(1.9rem,3.2vw,2.7rem)] font-bold tracking-tight text-dark mb-4">Operations <em className="font-serif italic font-normal opacity-70">on autopilot</em></h2>
                        </Reveal>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: "📄", title: "Automated Onboarding", desc: "Instantly create accounts, send contracts, and guide new hires through their first week." },
                            { icon: "🙋", title: "Employee Self-Service", desc: "AI assistants that answer questions about benefits, payroll, and company policies." },
                            { icon: "🎟️", title: "Smart Ticketing", desc: "Automatically categorizes and routes internal requests to the right department." },
                            { icon: "📂", title: "Knowledge Retrieval", desc: "Conversational search across your company Google Drive, Notion, or Slack." },
                            { icon: "🗓️", title: "Leave Management", desc: "Automated handling of time-off requests with calendar and payroll sync." },
                            { icon: "📈", title: "Performance Tracking", desc: "Automated report generation and feedback cycle reminders." }
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

export default HRSupportPage;

