import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import InquiryForm from "@/components/InquiryForm";
import Link from "next/link";

const ChatbotPage = () => {
    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Service Hero */}
            <section className="relative min-h-[72vh] flex items-center pt-[100px] pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_70%_at_60%_40%,#dbeafe_0%,#eff6ff_40%,#ffffff_80%)]"></div>
                <div className="absolute inset-0 z-0 opacity-5 bg-[repeating-linear-gradient(0deg,transparent,transparent_44px,rgba(32,40,49,1)_44px,rgba(32,40,49,1)_45px),repeating-linear-gradient(90deg,transparent,transparent_44px,rgba(32,40,49,1)_44px,rgba(32,40,49,1)_45px)]"></div>

                <div className="container-custom">
                    <Reveal className="w-[72px] h-[72px] rounded-[18px] bg-blue-600 text-white flex items-center justify-center text-[2rem] mb-7 shadow-[0_8px_32px_rgba(0,0,0,0.15)]">
                        💬
                    </Reveal>
                    <Reveal delay={0.1} className="inline-flex items-center gap-[6px] bg-white/70 border border-white/90 rounded-full px-[14px] py-[5px] text-[0.78rem] font-semibold text-dark mb-5 backdrop-blur-md">
                        ✦ Omnichannel AI Agent
                    </Reveal>
                    <Reveal delay={0.2}>
                        <h1 className="text-[clamp(2.6rem,5.5vw,4.8rem)] font-bold leading-[1.06] tracking-tight text-dark mb-6 max-w-[820px]">
                            Turn Every Message Into a<br />
                            <em className="font-serif italic font-normal tracking-normal text-dark/70">Qualified Lead or Resolved Ticket</em>
                        </h1>
                        <p className="text-[clamp(1rem,1.4vw,1.15rem)] text-dark2 leading-[1.7] max-w-[580px] mb-10">
                            We build intelligent chatbots that run 24/7 across Email, WhatsApp, Website, Slack, Discord, and SMS — handling inquiries, qualifying leads, and escalating only when a human is truly needed.
                        </p>
                    </Reveal>

                    <Reveal delay={0.3}>
                        <div className="flex gap-[14px] flex-wrap">
                            <a href="#contact" className="inline-block bg-blue-600 text-white rounded-[10px] px-7 py-[15px] text-[0.96rem] font-semibold no-underline transition-all hover:opacity-85 hover:-translate-y-0.5">
                                Get a Free Analysis →
                            </a>
                            <Link href="/#portfolio" className="inline-block bg-transparent text-dark border-[1.5px] border-dark2 rounded-[10px] px-7 py-[15px] text-[0.96rem] font-semibold no-underline transition-all hover:bg-dark/5 hover:-translate-y-0.5">
                                See Real Projects
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
                            <div className="text-[0.72rem] font-bold tracking-[0.25em] uppercase text-red-600 mb-4">The Problem</div>
                            <h2 className="text-[clamp(1.7rem,2.8vw,2.4rem)] font-bold leading-[1.15] tracking-tight text-dark mb-5">Your team is buried in<br /><em className="font-serif italic font-normal text-dark/70">repetitive messages</em></h2>
                            <p className="text-[0.96rem] text-dark2 leading-[1.78] mb-6">Every day, the same questions flood your inbox: pricing, availability, order status, refund policies. Your best people are copy-pasting answers instead of doing meaningful work.</p>
                            <ul className="list-none flex flex-col gap-3">
                                {["Response times stretch to hours — customers leave", "Support staff burn out on repetitive tickets", "Leads go cold before anyone responds", "Scaling means skyrocketing salary costs"].map((pain, i) => (
                                    <li key={i} className="text-[0.92rem] text-dark2 flex items-start gap-2.5 leading-normal">
                                        <div className="w-[18px] h-[18px] rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-[2px] text-[0.7rem] font-bold">✕</div>
                                        {pain}
                                    </li>
                                ))}
                            </ul>
                        </Reveal>
                        <Reveal delay={0.2} className="bg-blue-50/50 border border-blue-100 p-10 rounded-2xl h-full">
                            <div className="text-[0.72rem] font-bold tracking-[0.25em] uppercase text-blue-600 mb-4">The Solution</div>
                            <h2 className="text-[clamp(1.7rem,2.8vw,2.4rem)] font-bold leading-[1.15] tracking-tight text-dark mb-5">An agent that answers<br /><em className="font-serif italic font-normal text-dark/70">every message instantly</em></h2>
                            <p className="text-[0.96rem] text-dark2 leading-[1.78] mb-6">We build a custom chatbot trained on your business — your products, your tone, your policies. It answers instantly, qualifies leads, books meetings, and hands off complex cases.</p>
                            <ul className="list-none flex flex-col gap-3">
                                {["Instant, accurate responses across all channels", "Seamless handoff to humans with context", "Lead scoring and CRM sync built-in", "Continuous learning from conversations"].map((sol, i) => (
                                    <li key={i} className="text-[0.92rem] text-dark2 flex items-start gap-2.5 leading-normal">
                                        <div className="w-[18px] h-[18px] rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 mt-[2px] text-[0.7rem]">✓</div>
                                        {sol}
                                    </li>
                                ))}
                            </ul>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 bg-bg-off">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <Reveal>
                            <p className="text-[0.72rem] font-semibold tracking-[0.30em] uppercase text-muted mb-4">Features</p>
                            <h2 className="text-[clamp(1.9rem,3.2vw,2.7rem)] font-bold tracking-tight text-dark mb-4">Built for <em className="font-serif italic font-normal opacity-70">performance & scale</em></h2>
                        </Reveal>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: "🌍", title: "Omnichannel Presence", desc: "Deploy on WhatsApp, Website, Email, Slack, Telegram, and more from a single brain." },
                            { icon: "🧠", title: "Natural Conversations", desc: "Uses advanced LLMs (GPT-4o, Claude 3.5) to understand intent and nuance, not just keywords." },
                            { icon: "⚡", title: "Instant Lead Qualification", desc: "Qualify leads based on your specific criteria and push them directly to your CRM or Sales team." },
                            { icon: "📅", title: "Meeting Scheduling", desc: "Native integration with Calendly, Google Calendar, and Outlook to book meetings in-chat." },
                            { icon: "🔗", title: "Deep Integrations", desc: "Connects to Shopify, HubSpot, Salesforce, WordPress, and 5000+ other apps via n8n or Make." },
                            { icon: "📊", title: "Advanced Analytics", desc: "Track every conversation, sentiment trends, and conversion rates with real-time dashboards." }
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

            {/* Use Cases */}
            <section className="py-24 bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-1">
                            <Reveal>
                                <p className="text-[0.72rem] font-semibold tracking-[0.30em] uppercase text-muted mb-4">Use Cases</p>
                                <h2 className="text-[2.2rem] font-bold tracking-tight text-dark mb-6 leading-tight">Where our AI Agents <em className="font-serif italic font-normal opacity-70">excel</em></h2>
                                <div className="flex flex-col gap-4">
                                    <div className="p-4 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg">
                                        <p className="text-[0.9rem] font-bold text-blue-900 mb-1">E-commerce</p>
                                        <p className="text-[0.84rem] text-blue-800/80 leading-relaxed">Handling order status inquiries and recommending products based on user needs.</p>
                                    </div>
                                    <div className="p-4 bg-emerald-50 border-l-4 border-emerald-600 rounded-r-lg">
                                        <p className="text-[0.9rem] font-bold text-emerald-900 mb-1">Real Estate</p>
                                        <p className="text-[0.84rem] text-emerald-800/80 leading-relaxed">Qualifying property buyers and scheduling viewings automatically 24/7.</p>
                                    </div>
                                    <div className="p-4 bg-purple-50 border-l-4 border-purple-600 rounded-r-lg">
                                        <p className="text-[0.9rem] font-bold text-purple-900 mb-1">SaaS & Software</p>
                                        <p className="text-[0.84rem] text-purple-800/80 leading-relaxed">Providing l1 technical support and helping users navigate complex documentation.</p>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                        <div className="lg:col-span-2">
                            <Reveal delay={0.2}>
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border aspect-square md:aspect-video bg-zinc-900">
                                    <div className="absolute inset-0 flex items-center justify-center text-white/20 font-serif italic text-2xl">
                                        Interactive Chatbot Interface Mockup
                                    </div>
                                    {/* Decorative elements to mimic an interface */}
                                    <div className="absolute top-0 left-0 right-0 h-12 bg-white/5 border-b border-whiteAlpha-10 flex items-center px-4 gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-400/50"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-400/50"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-400/50"></div>
                                    </div>
                                    <div className="absolute bottom-8 left-8 right-8 space-y-4">
                                        <div className="bg-white/10 p-4 rounded-xl rounded-bl-none max-w-[80%] text-[0.86rem] text-white/70">
                                            Hello! I&apos;m looking for an automation solution for my customer support.
                                        </div>
                                        <div className="bg-blue-600 p-4 rounded-xl rounded-br-none max-w-[80%] ml-auto text-[0.86rem] text-white">
                                            Hi! I can certainly help with that. Our AI agents can handle up to 90% of support tickets automatically. Would you like to see a demo?
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>

            <InquiryForm />
            <Footer />
        </main>
    );
};

export default ChatbotPage;

