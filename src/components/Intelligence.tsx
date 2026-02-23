import Reveal from "./Reveal";
import { services } from "@/lib/mock-data";

const Intelligence = () => {
    return (
        <section className="py-[100px]" id="services">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-16">
                    <div>
                        <p className="text-[0.72rem] font-semibold tracking-[0.30em] uppercase text-muted mb-[18px]">Why Axontick</p>
                        <Reveal>
                            <h2 className="text-[clamp(1.9rem,3.5vw,3rem)] font-bold leading-[1.1] tracking-tight text-dark mb-5">
                                We Build The<br />
                                <em className="font-serif italic font-normal tracking-normal">Future of Work</em>
                            </h2>
                        </Reveal>
                    </div>
                    <Reveal delay={0.1}>
                        <div className="pt-2">
                            <p className="text-base font-bold text-dark mb-[14px]">Proven Results, Unmatched Expertise</p>
                            <p className="text-[0.96rem] text-dark2 leading-[1.78]">
                                Axontick is a premier AI automation agency dedicated to transforming how businesses operate. We don&apos;t just implement tools — we engineer intelligent ecosystems that drive efficiency, reduce costs, and unlock unprecedented growth. Our team combines cutting-edge AI with deep industry knowledge to deliver solutions that are practical and results-oriented.
                            </p>
                        </div>
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
                    {services.map((service, i) => (
                        <Reveal key={i} delay={i * 0.1}>
                            <div className="bg-white border border-border rounded-xl p-7 transition-transform hover:-translate-y-1 shadow-card h-full">
                                <div className="w-10 h-10 rounded-lg bg-bg-off flex items-center justify-center text-[1.15rem] mb-4">
                                    {service.icon}
                                </div>
                                <h3 className="text-base font-bold text-dark mb-2.5">{service.title}</h3>
                                <p className="text-[0.86rem] text-muted leading-[1.65]">{service.desc}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Intelligence;
