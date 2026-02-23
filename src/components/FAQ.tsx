"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { faqs } from "@/lib/mock-data";

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-[100px] bg-bg-off" id="faq">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-20 items-start">
                    <div>
                        <p className="text-[0.72rem] font-semibold tracking-[0.30em] uppercase text-muted mb-[18px]">Support</p>
                        <Reveal>
                            <h2 className="text-[clamp(1.9rem,3.5vw,3rem)] font-bold leading-[1.1] tracking-tight text-dark mb-5">
                                Common questions about<br />
                                <em className="font-serif italic font-normal tracking-normal text-dark/70">AI workflows</em>
                            </h2>
                            <p className="text-base text-dark2 leading-[1.7] max-w-[400px]">
                                Everything you need to know about our process, technology, and results. Can&apos;t find what you&apos;re looking for? Reach out.
                            </p>
                        </Reveal>
                    </div>

                    <div className="border-t border-border-light">
                        {faqs.map((faq, i) => (
                            <div key={i} className="border-b border-border-light overflow-hidden">
                                <button
                                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                    className="w-full bg-none border-none text-left py-[22px] flex items-center justify-between gap-5 cursor-pointer group"
                                >
                                    <span className={`text-[0.96rem] font-bold transition-colors ${openIndex === i ? 'text-dark' : 'text-dark2 group-hover:text-dark'}`}>
                                        {faq.q}
                                    </span>
                                    <div className={`w-6 h-6 border-[1.5px] border-border-light rounded-full flex items-center justify-center shrink-0 transition-all ${openIndex === i ? 'rotate-45 border-dark text-dark' : 'text-muted'}`}>
                                        +
                                    </div>
                                </button>
                                <div
                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === i ? 'max-h-[300px]' : 'max-h-0'
                                        }`}
                                >
                                    <div className="text-[0.92rem] text-dark2 leading-[1.75] pb-[22px]">
                                        {faq.a}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
