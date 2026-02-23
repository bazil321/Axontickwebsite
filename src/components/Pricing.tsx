import Reveal from "./Reveal";

const Pricing = () => {
    const plans = [
        {
            tier: "Starter",
            price: "499",
            desc: "Perfect for small businesses looking to automate their first workflow.",
            features: ["1 Custom AI Agent", "WhatsApp & Website Integration", "500 Conversations/mo", "Standard Support"],
            cta: "Get Started",
            featured: false,
        },
        {
            tier: "Professional",
            price: "1,299",
            desc: "Ideal for growing companies with multiple customer channels.",
            features: ["3 Custom AI Agents", "Omnichannel Integration", "2,500 Conversations/mo", "Priority Support", "CRM Sync"],
            cta: "Most Popular",
            featured: true,
        },
        {
            tier: "Enterprise",
            price: "Custom",
            desc: "Tailored solutions for large-scale operations and complex needs.",
            features: ["Unlimited AI Agents", "Custom API Integrations", "Unlimited Conversations", "24/7 Dedicated Support", "On-premise Options"],
            cta: "Contact Us",
            featured: false,
        }
    ];

    return (
        <section className="py-[100px] bg-bg-off" id="packages">
            <div className="container-custom">
                <div className="text-center mb-[56px]">
                    <Reveal>
                        <p className="text-[0.72rem] font-semibold tracking-[0.30em] uppercase text-muted mb-[18px]">Investment</p>
                        <h2 className="text-[clamp(1.9rem,3.2vw,2.7rem)] font-bold leading-[1.1] tracking-tight text-dark mb-[14px]">
                            Simple, transparent<br />
                            <em className="font-serif italic font-normal tracking-normal text-dark/70">pricing plans</em>
                        </h2>
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                    {plans.map((plan, i) => (
                        <Reveal key={i} delay={i * 0.1} className="h-full">
                            <div className={`border border-border rounded-2xl p-10 flex flex-col transition-all hover:-translate-y-[5px] hover:shadow-[0_20px_48px_rgba(0,0,0,0.1)] relative h-full ${plan.featured ? 'bg-dark border-dark shadow-card -translate-y-[7px]' : 'bg-white'}`}>
                                {plan.featured && (
                                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold text-dark text-[0.74rem] font-extrabold tracking-widest uppercase px-4 py-1.5 rounded-full whitespace-nowrap">
                                        Most Popular
                                    </div>
                                )}
                                <div className={`text-[0.78rem] font-bold uppercase tracking-[0.2em] mb-5 ${plan.featured ? 'text-white/50' : 'text-muted'}`}>
                                    {plan.tier}
                                </div>
                                <div className="flex items-baseline gap-1">
                                    <span className={`text-[clamp(2.4rem,3vw,3.2rem)] font-bold tracking-tighter leading-none ${plan.featured ? 'text-white' : 'text-dark'}`}>
                                        ${plan.price}
                                    </span>
                                    {plan.price !== "Custom" && <span className={`text-[0.88rem] font-medium ${plan.featured ? 'text-white/40' : 'text-muted'}`}>/mo</span>}
                                </div>
                                <p className={`text-[0.88rem] leading-[1.65] my-8 ${plan.featured ? 'text-white/50' : 'text-muted'}`}>
                                    {plan.desc}
                                </p>
                                <div className={`h-[1px] mb-7 ${plan.featured ? 'bg-white/10' : 'bg-border-light'}`}></div>
                                <ul className="list-none flex flex-col gap-3 flex-1 mb-9">
                                    {plan.features.map((feat, j) => (
                                        <li key={j} className={`text-[0.9rem] flex items-start gap-2.5 leading-relaxed ${plan.featured ? 'text-white/70' : 'text-dark2'}`}>
                                            <div className={`w-[18px] h-[18px] rounded-[5px] flex items-center justify-center shrink-0 mt-0.5 ${plan.featured ? 'bg-white/12' : 'bg-dark/5'}`}>
                                                <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                            </div>
                                            {feat}
                                        </li>
                                    ))}
                                </ul>
                                <button className={`w-full py-[15px] rounded-[10px] text-[0.96rem] font-bold transition-all hover:-translate-y-[2px] ${plan.featured ? 'bg-white text-dark hover:opacity-90' : 'bg-transparent text-dark border-[1.5px] border-border hover:bg-bg-off'}`}>
                                    {plan.cta}
                                </button>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
