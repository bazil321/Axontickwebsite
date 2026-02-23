import Reveal from "./Reveal";

const FinalCTA = () => {
    return (
        <section className="py-[100px]">
            <div className="container-custom">
                <div className="bg-dark rounded-[20px] p-20 grid grid-cols-1 lg:grid-cols-[1fr_auto] items-center gap-14 relative overflow-hidden">
                    {/* Background shapes */}
                    <div className="absolute -right-20 -top-20 w-[400px] h-[400px] rounded-full bg-gold/5 pointer-events-none"></div>
                    <div className="absolute -left-10 -bottom-[60px] w-[300px] h-[300px] rounded-full bg-white/[0.03] pointer-events-none"></div>

                    <div>
                        <p className="text-[0.72rem] font-bold tracking-[0.28em] uppercase text-gold mb-[18px]">Ready to scale?</p>
                        <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-bold text-white leading-[1.1] tracking-tight mb-4">
                            Deploy your first <em className="font-serif italic font-normal text-white/50">digital worker</em> in 48 hours
                        </h2>
                        <p className="text-[0.96rem] text-white/50 leading-[1.7] max-w-[460px]">
                            Join the future of business operations. Describe your manual bottleneck today, and we&apos;ll build the AI workflow to eliminate it.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3.5 min-w-[260px] relative z-10">
                        <input
                            type="email"
                            placeholder="Your work email"
                            className="w-full px-[18px] py-3.5 rounded-[10px] border-[1.5px] border-white/18 bg-white/5 text-white text-[0.92rem] focus:outline-none focus:border-white/40"
                        />
                        <button className="w-full bg-gold text-dark border-none rounded-[10px] p-[15px] font-bold text-[0.96rem] cursor-pointer transition-all hover:opacity-90 hover:-translate-y-0.5">
                            Start Your Analysis →
                        </button>
                        <p className="text-[0.76rem] text-white/30 text-center">No commitment required.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
