import Reveal from "./Reveal";
import { stats } from "@/lib/mock-data";

const Stats = () => {

    return (
        <section className="bg-dark py-[52px]">
            <div className="grid grid-cols-2 md:grid-cols-4 max-w-[1340px] mx-auto px-12 md:px-12 gap-9 lg:gap-0">
                {stats.map((stat, i) => (
                    <Reveal key={i} delay={i * 0.1}>
                        <div className={`space-y-2 ${i !== stats.length - 1 ? 'md:border-r border-white/10' : ''} ${i % 2 === 0 ? 'border-r border-white/10 md:border-r' : 'md:border-r border-white/10 lg:border-none'} px-8 first:pl-0 last:border-none`}>
                            <div className="text-[clamp(2rem,3.2vw,3rem)] font-bold text-white tracking-tight leading-none">
                                {stat.number}<span className="text-gold">{stat.suffix}</span>
                            </div>
                            <div className="text-[0.86rem] text-white/50">
                                {stat.label}
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
};

export default Stats;
