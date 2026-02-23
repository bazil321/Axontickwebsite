import Reveal from "./Reveal";
import { testimonials } from "@/lib/mock-data";

const Testimonials = () => {
    return (
        <section className="py-[100px]" id="testimonials">
            <div className="container-custom">
                <div className="text-center mb-[56px]">
                    <Reveal>
                        <p className="text-[0.72rem] font-semibold tracking-[0.30em] uppercase text-muted mb-[18px]">Validation</p>
                        <h2 className="text-[clamp(1.9rem,3.2vw,2.7rem)] font-bold leading-[1.1] tracking-tight text-dark mb-[14px]">
                            Trusted by innovative<br />
                            <em className="font-serif italic font-normal tracking-normal text-dark/70">business leaders</em>
                        </h2>
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testi, i) => (
                        <Reveal key={i} delay={i * 0.1}>
                            <div className="border border-border-light rounded-[14px] p-9 flex flex-col gap-5 transition-all hover:border-border hover:-translate-y-1">
                                <div className="flex gap-[3px]">
                                    {[1, 2, 3, 4, 5].map((s) => (
                                        <span key={s} className="text-gold text-[0.95rem]">★</span>
                                    ))}
                                </div>
                                <p className="text-[0.96rem] text-dark leading-[1.72] flex-1">
                                    &quot;{testi.quote}&quot;
                                </p>
                                <div className="flex items-center gap-3.5 pt-5 border-t border-border-light">
                                    <div className="w-11 h-11 rounded-full bg-dark flex items-center justify-center font-bold text-[0.9rem] text-white shrink-0">
                                        {testi.avatar}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[0.92rem] text-dark leading-tight">{testi.author}</h4>
                                        <p className="text-[0.8rem] text-muted">{testi.role}</p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
