import prisma from "@/lib/prisma";

const TrustBar = async () => {
    const logos = await prisma.trustLogo.findMany({
        orderBy: { order: "asc" },
    });

    const displayLogos = logos.length > 0 ? [...logos, ...logos] : [];

    return (
        <section className="py-[52px] border-b border-border-light overflow-hidden">
            <div className="text-center text-[0.75rem] font-semibold tracking-[0.25em] uppercase text-muted mb-8">
                Our Customers
            </div>
            <div className="relative overflow-hidden group">
                {/* Fades */}
                <div className="absolute inset-y-0 left-0 w-[100px] z-10 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-[100px] z-10 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

                <div className="flex gap-16 w-max animate-scroll px-8 group-hover:[animation-play-state:paused]">
                    {displayLogos.map((logo, i) => (
                        <div key={`${logo.id}-${i}`} className="flex items-center gap-[10px] whitespace-nowrap font-bold text-[1.05rem] text-dark/20 tracking-tight transition-colors cursor-default hover:text-dark/55">
                            <div className="w-[7px] h-[7px] rounded-full bg-current opacity-50"></div>
                            {logo.name}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustBar;
