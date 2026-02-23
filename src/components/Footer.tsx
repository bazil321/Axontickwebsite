import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-dark pt-16 pb-8 border-t border-white/5">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
                    <div className="lg:col-span-1.6">
                        <Link href="/" className="flex items-center gap-[10px] no-underline mb-[18px]">
                            <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                    <polygon
                                        points="12,2 22,8 22,16 12,22 2,16 2,8"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinejoin="round"
                                    />
                                    <polygon
                                        points="12,7 17,10 17,14 12,17 7,14 7,10"
                                        fill="rgba(240,198,46,0.6)"
                                    />
                                </svg>
                            </div>
                            <span className="font-bold text-[1.05rem] text-white">Axontick</span>
                        </Link>
                        <p className="text-[0.86rem] text-white/40 leading-[1.7] mb-6 max-w-[280px]">
                            Replace manual bottlenecks with high-performance AI workflows. Our systems handle your operations so you can focus on scaling.
                        </p>
                        <div className="flex gap-[10px]">
                            {/* Social buttons - Placeholder paths for now */}
                            <a href="#" className="w-9 h-9 border border-white/10 rounded-lg flex items-center justify-center cursor-pointer transition-all text-white/40 text-[0.82rem] font-bold hover:border-white/35 hover:text-white hover:bg-white/5">TW</a>
                            <a href="#" className="w-9 h-9 border border-white/10 rounded-lg flex items-center justify-center cursor-pointer transition-all text-white/40 text-[0.82rem] font-bold hover:border-white/35 hover:text-white hover:bg-white/5">LI</a>
                            <a href="#" className="w-9 h-9 border border-white/10 rounded-lg flex items-center justify-center cursor-pointer transition-all text-white/40 text-[0.82rem] font-bold hover:border-white/35 hover:text-white hover:bg-white/5">IG</a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-[0.78rem] font-bold uppercase tracking-[0.18em] text-white/40 mb-5">Services</h4>
                        <ul className="list-none flex flex-col gap-3">
                            <li><Link href="/services/chatbot" className="no-underline text-[0.88rem] text-white/55 transition-colors hover:text-white">Chatbots</Link></li>
                            <li><Link href="/services/voice-agent" className="no-underline text-[0.88rem] text-white/55 transition-colors hover:text-white">Voice Agents</Link></li>
                            <li><Link href="/services/marketing-automation" className="no-underline text-[0.88rem] text-white/55 transition-colors hover:text-white">Marketing</Link></li>
                            <li><Link href="/services/workflow-automation" className="no-underline text-[0.88rem] text-white/55 transition-colors hover:text-white">Workflows</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[0.78rem] font-bold uppercase tracking-[0.18em] text-white/40 mb-5">Company</h4>
                        <ul className="list-none flex flex-col gap-3">
                            <li><Link href="/#portfolio" className="no-underline text-[0.88rem] text-white/55 transition-colors hover:text-white">Portfolio</Link></li>
                            <li><Link href="/#packages" className="no-underline text-[0.88rem] text-white/55 transition-colors hover:text-white">Pricing</Link></li>
                            <li><Link href="/#faq" className="no-underline text-[0.88rem] text-white/55 transition-colors hover:text-white">FAQ</Link></li>
                            <li><Link href="/#contact" className="no-underline text-[0.88rem] text-white/55 transition-colors hover:text-white">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[0.78rem] font-bold uppercase tracking-[0.18em] text-white/40 mb-5">Legal</h4>
                        <ul className="list-none flex flex-col gap-3">
                            <li><Link href="#" className="no-underline text-[0.88rem] text-white/55 transition-colors hover:text-white">Privacy Policy</Link></li>
                            <li><Link href="#" className="no-underline text-[0.88rem] text-white/55 transition-colors hover:text-white">Terms of Service</Link></li>
                            <li><Link href="#" className="no-underline text-[0.88rem] text-white/55 transition-colors hover:text-white">Cookie Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-7 border-t border-white/5 flex flex-wrap justify-between items-center gap-5">
                    <p className="text-[0.82rem] text-white/25">© {new Date().getFullYear()} Axontick. All rights reserved.</p>
                    <div className="flex gap-7">
                        <Link href="#" className="text-[0.82rem] text-white/25 no-underline transition-colors hover:text-white/60">Privacy</Link>
                        <Link href="#" className="text-[0.82rem] text-white/25 no-underline transition-colors hover:text-white/60">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
