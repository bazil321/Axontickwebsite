import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import InquiryForm from "@/components/InquiryForm";
import Link from "next/link";

const VoiceAgentPage = () => {
    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Service Hero */}
            <section className="relative min-h-[72vh] flex items-center pt-[100px] pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_70%_at_60%_40%,#fef3c7_0%,#fffbeb_40%,#ffffff_80%)]"></div>
                <div className="absolute inset-0 z-0 opacity-5 bg-[repeating-linear-gradient(0deg,transparent,transparent_44px,rgba(32,40,49,1)_44px,rgba(32,40,49,1)_45px),repeating-linear-gradient(90deg,transparent,transparent_44px,rgba(32,40,49,1)_44px,rgba(32,40,49,1)_45px)]"></div>

                <div className="container-custom">
                    <Reveal className="w-[72px] h-[72px] rounded-[18px] bg-gold text-dark flex items-center justify-center text-[2rem] mb-7 shadow-[0_8px_32px_rgba(0,0,0,0.15)]">
                        🎙️
                    </Reveal>
                    <Reveal delay={0.1} className="inline-flex items-center gap-[6px] bg-white/70 border border-white/90 rounded-full px-[14px] py-[5px] text-[0.78rem] font-semibold text-dark mb-5 backdrop-blur-md">
                        ✦ AI Voice Receptionist
                    </Reveal>
                    <Reveal delay={0.2}>
                        <h1 className="text-[clamp(2.6rem,5.5vw,4.8rem)] font-bold leading-[1.06] tracking-tight text-dark mb-6 max-w-[820px]">
                            Human-Like Voice Agents for<br />
                            <em className="font-serif italic font-normal tracking-normal text-dark/70">Inbound & Outbound Calls</em>
                        </h1>
                        <p className="text-[clamp(1rem,1.4vw,1.15rem)] text-dark2 leading-[1.7] max-w-[580px] mb-10">
                            Deploy intelligent voice agents that sound human, understand context, and can handle everything from booking appointments to qualifying leads over the phone.
                        </p>
                    </Reveal>

                    <Reveal delay={0.3}>
                        <div className="flex gap-[14px] flex-wrap">
                            <a href="#contact" className="inline-block bg-dark text-white rounded-[10px] px-7 py-[15px] text-[0.96rem] font-semibold no-underline transition-all hover:opacity-85 hover:-translate-y-0.5">
                                Listen to a Demo →
                            </a>
                            <Link href="/#portfolio" className="inline-block bg-transparent text-dark border-[1.5px] border-dark2 rounded-[10px] px-7 py-[15px] text-[0.96rem] font-semibold no-underline transition-all hover:bg-dark/5 hover:-translate-y-0.5">
                                See Case Studies
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Problem / Solution Section */}
            <section className="py-24 bg-white border-y border-border-light">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-stretch">
                        <Reveal className="bg-red-50/50 border border-red-100 p-10 rounded-2xl h-full">
                            <div className="text-[0.72rem] font-bold tracking-[0.25em] uppercase text-red-600 mb-4">The Challenge</div>
                            <h2 className="text-[clamp(1.7rem,2.8vw,2.4rem)] font-bold leading-[1.15] tracking-tight text-dark mb-5">Missed calls mean<br /><em className="font-serif italic font-normal text-dark/70">missed revenue</em></h2>
                            <p className="text-[0.96rem] text-dark2 leading-[1.78] mb-6">Every unanswered call is a lost opportunity. Hiring a 24/7 call center is expensive, and tiered IVR systems frustrate your customers.</p>
                            <ul className="list-none flex flex-col gap-3">
                                {["Customers hate waiting on hold", "Human receptionists are expensive and limited", "Manual data entry after calls is prone to error", "Missing calls after hours or on weekends"].map((pain, i) => (
                                    <li key={i} className="text-[0.92rem] text-dark2 flex items-start gap-2.5 leading-normal">
                                        <div className="w-[18px] h-[18px] rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-[2px] text-[0.7rem] font-bold">✕</div>
                                        {pain}
                                    </li>
                                ))}
                            </ul>
                        </Reveal>
                        <Reveal delay={0.2} className="bg-amber-50/50 border border-amber-100 p-10 rounded-2xl h-full">
                            <div className="text-[0.72rem] font-bold tracking-[0.25em] uppercase text-amber-600 mb-4">The Solution</div>
                            <h2 className="text-[clamp(1.7rem,2.8vw,2.4rem)] font-bold leading-[1.15] tracking-tight text-dark mb-5">An agent that never<br /><em className="font-serif italic font-normal text-dark/70">misses a single call</em></h2>
                            <p className="text-[0.96rem] text-dark2 leading-[1.78] mb-6">Our AI voice agents handle inbound and outbound calls with zero latency. They integrate with your calendar, CRM, and task management systems.</p>
                            <ul className="list-none flex flex-col gap-3">
                                {["Human-like natural conversations", "Instant appointment booking", "Automatic call summarization & CRM logging", "24/7 availability with zero downtime"].map((sol, i) => (
                                    <li key={i} className="text-[0.92rem] text-dark2 flex items-start gap-2.5 leading-normal">
                                        <div className="w-[18px] h-[18px] rounded-full bg-gold text-dark flex items-center justify-center shrink-0 mt-[2px] text-[0.7rem]">✓</div>
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
                            <h2 className="text-[clamp(1.9rem,3.2vw,2.7rem)] font-bold tracking-tight text-dark mb-4">Voice technology that <em className="font-serif italic font-normal opacity-70">feels real</em></h2>
                        </Reveal>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: "⚡", title: "Ultra-Low Latency", desc: "Responses so fast (under 500ms) that conversations feel completely natural and fluid." },
                            { icon: "🗣️", title: "Natural Prosody", desc: "Advanced speech synthesis with human-like breathing, pauses, and emotional nuance." },
                            { icon: "📅", title: "Booking Integration", desc: "Checks your live calendar and books appointments directly during the call." },
                            { icon: "📞", title: "Twilio & Vapi Native", desc: "Built on enterprise-grade voice infrastructure for crystalline audio and global reliability." },
                            { icon: "🔄", title: "Smart Escalation", desc: "Knows exactly when to transfer to a human specialist for complex inquiries." },
                            { icon: "📝", title: "Auto-Transcriptions", desc: "Every call is transcribed and summarized into your CRM automatically." }
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

export default VoiceAgentPage;

