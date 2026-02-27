import Link from "next/link";
import Reveal from "./Reveal";
import { solutions } from "@/lib/mock-data";

const Solutions = () => {
    return (
        <section className="py-[100px] bg-bg-off" id="portfolio">
            <div className="container-custom">
                <div className="text-center mb-[56px]">
                    <Reveal>
                        <p className="text-[0.72rem] font-semibold tracking-[0.30em] uppercase text-muted mb-[18px]">Our Expertise</p>
                        <h2 className="text-[clamp(1.9rem,3.2vw,2.7rem)] font-bold leading-[1.1] tracking-tight text-dark mb-[14px]">
                            Comprehensive AI Automation<br />
                            <em className="font-serif italic font-normal tracking-normal text-dark/70">Solutions</em> for Your Business
                        </h2>
                        <p className="text-base text-dark2 leading-[1.7] max-w-[500px] mx-auto">
                            Tailored automation built to scale your operations — from customer-facing chatbots to backend workflows.
                        </p>
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {solutions.map((sol, i) => (
                        <Reveal key={sol.id} delay={i * 0.1}>
                            <div className="bg-white border border-border rounded-[14px] p-10 flex flex-col gap-[18px] transition-all hover:-translate-y-[5px] hover:shadow-[0_20px_48px_rgba(0,0,0,0.1)] relative overflow-hidden group">
                                <div className="absolute top-0 left-0 right-0 h-[3px] bg-dark opacity-0 transition-opacity group-hover:opacity-100"></div>
                                <div className="w-12 h-12 rounded-xl bg-dark text-white flex items-center justify-center text-[1.3rem]">
                                    {sol.icon}
                                </div>
                                <h3 className="text-[1.1rem] font-bold text-dark">{sol.title}</h3>
                                <p className="text-[0.9rem] text-muted leading-[1.7] flex-1">{sol.desc}</p>
                                <ul className="list-none flex flex-col gap-2">
                                    {sol.features.map((feat, j) => (
                                        <li key={j} className="text-[0.86rem] font-semibold text-dark2 flex items-center gap-2">
                                            <div className="w-[5px] h-[5px] rounded-full bg-gold shrink-0"></div>
                                            {feat}
                                        </li>
                                    ))}
                                </ul>
                                <Link href={sol.link || "#"} className="inline-block bg-dark text-white rounded-[10px] px-[22px] py-[14px] text-[0.92rem] font-semibold no-underline w-fit transition-all hover:opacity-80 hover:-translate-y-px">
                                    Get Started →
                                </Link>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Solutions;
