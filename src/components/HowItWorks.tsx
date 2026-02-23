import Reveal from "./Reveal";
import { steps } from "@/lib/mock-data";

const HowItWorks = () => {
    return (
        <section className="py-[100px] bg-dark relative overflow-hidden" id="how">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[28vw] italic text-white/[0.025] whitespace-nowrap pointer-events-none select-none leading-none">
                Process
            </div>

            <div className="container-custom">
                <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-[72px] gap-10">
                    <div>
                        <p className="text-[0.72rem] font-semibold tracking-[0.30em] uppercase text-white/40 mb-[18px]">The Process</p>
                        <Reveal>
                            <h2 className="text-[clamp(1.9rem,3.5vw,3rem)] font-bold leading-[1.1] tracking-tight text-white m-0">
                                From brief to <em className="italic font-serif font-normal text-white/65">live automation</em><br />
                                in 3 simple steps
                            </h2>
                        </Reveal>
                    </div>
                    <Reveal delay={0.1}>
                        <p className="text-[0.96rem] text-white/50 leading-[1.7] max-w-[380px] shrink-0">
                            Our streamlined deployment process means your first autonomous agent can be live within 48 hours — no engineering team required.
                        </p>
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {steps.map((step, i) => (
                        <Reveal key={i} delay={i * 0.1}>
                            <div className="bg-white/5 border border-white/10 rounded-[14px] p-9 relative transition-colors hover:bg-white/10 hover:border-white/20 h-full group">
                                <div className="text-[0.78rem] font-bold text-gold tracking-widest uppercase mb-5">Step {step.number}</div>
                                <h3 className="text-[1.25rem] font-bold text-white mb-3 leading-[1.3]">{step.title}</h3>
                                <p className="text-[0.9rem] text-white/50 leading-[1.7]">{step.desc}</p>
                                <div className="inline-flex items-center gap-[6px] bg-gold/12 border border-gold/25 rounded-full px-3 py-[5px] text-[0.76rem] font-semibold text-gold mt-5">
                                    {step.pill}
                                </div>
                                <div className="absolute bottom-5 right-6 font-serif text-[5rem] text-white/5 leading-none pointer-events-none select-none transition-colors group-hover:text-white/10">
                                    {step.number}
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
