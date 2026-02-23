import Link from "next/link";
import Reveal from "./Reveal";

const Hero = () => {
    return (
        <section className="relative min-h-[88vh] flex items-center pt-[100px] pb-[72px] overflow-hidden">
            <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_70%_at_65%_40%,#fff2e1_0%,#fdf6ec_35%,#ffffff_78%)]"></div>
            <div className="absolute inset-0 z-0 opacity-[0.035] bg-[repeating-linear-gradient(0deg,transparent,transparent_44px,rgba(32,40,49,1)_44px,rgba(32,40,49,1)_45px),repeating-linear-gradient(90deg,transparent,transparent_44px,rgba(32,40,49,1)_44px,rgba(32,40,49,1)_45px)]"></div>

            <div className="container-custom">
                <div className="inline-flex items-center gap-[6px] bg-[#f0c62e]/12 border border-[#f0c62e]/40 rounded-full px-[14px] py-[5px] text-[0.78rem] font-semibold text-[#9a7300] mb-[22px] animate-fadeUp opacity-0 [animation-fill-mode:forwards] [animation-delay:0.08s]">
                    ✦ Pakistan&apos;s Top Automation Agency
                </div>

                <p className="text-[0.72rem] font-semibold tracking-[0.30em] text-muted uppercase mb-6 animate-fadeUp opacity-0 [animation-fill-mode:forwards] [animation-delay:0.2s]">
                    Unlock Your Next Level
                </p>

                <h1 className="text-[clamp(2.8rem,6vw,5.2rem)] font-bold leading-[1.06] tracking-tight text-dark mb-[26px] max-w-[820px] animate-fadeUp opacity-0 [animation-fill-mode:forwards] [animation-delay:0.35s]">
                    Scale Your Business with<br />
                    <em className="font-serif italic font-normal tracking-normal text-dark/70">AI-Powered Workflows</em>
                </h1>

                <p className="text-[clamp(0.98rem,1.4vw,1.1rem)] text-dark2 leading-[1.7] max-w-[520px] mb-10 animate-fadeUp opacity-0 [animation-fill-mode:forwards] [animation-delay:0.5s]">
                    Replace manual bottlenecks with high-performance AI workflows. Our systems handle your operations so you can focus on scaling to the next level.
                </p>

                <div className="flex gap-[14px] flex-wrap animate-fadeUp opacity-0 [animation-fill-mode:forwards] [animation-delay:0.65s]">
                    <Link href="/#builder" className="inline-block bg-dark text-white rounded-[10px] px-7 py-[15px] text-[0.96rem] font-semibold no-underline transition-all hover:opacity-80 hover:-translate-y-[2px] whitespace-nowrap">
                        Deploy Your First Agent →
                    </Link>
                    <Link href="/#services" className="inline-block bg-transparent text-dark border-[1.5px] border-dark2 rounded-[10px] px-7 py-[15px] text-[0.96rem] font-semibold no-underline transition-all hover:bg-dark/5 hover:-translate-y-[2px]">
                        View Our Services
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
