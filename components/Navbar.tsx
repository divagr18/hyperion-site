"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Github, ArrowRight } from "lucide-react";

const navItems = ["Home", "Features", "Performance", "Pricing", "Blog", "Docs"];

function getNavHref(item: string) {
    if (item === "Home") return "/";
    if (item === "Pricing") return "/pricing";
    if (item === "Blog") return "/blog";
    if (item === "Docs") return "/docs";
    return `/#${item.toLowerCase().replace(" ", "-")}`;
}

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? "py-4"
                : "py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className={`transition-all duration-500 rounded-2xl h-16 flex items-center justify-between ${isScrolled
                    ? "glass-premium border border-white/5 shadow-2xl px-6"
                    : "bg-transparent border border-transparent px-0"
                    }`}>
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3 group cursor-pointer brightness-125 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:brightness-150 transition-all duration-300">
                        <div className="relative w-10 h-10 group-hover:scale-110 transition-transform duration-300">
                            <Image src="/HyperionLogo3.png" alt="Hyperion" width={40} height={40} className="w-full h-full object-contain" />
                        </div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent tracking-tight drop-shadow-[0_0_30px_rgba(255,255,255,0.7)]">
                            Hyperion
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => (
                            <Link
                                key={item}
                                href={getNavHref(item)}
                                className="px-4 py-2 text-[11px] font-bold text-neutral-400 uppercase tracking-[0.25em] hover:text-white hover:bg-white/[0.03] rounded-lg transition-all"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden md:flex items-center gap-4">
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden p-2 rounded-xl hover:bg-white/5 transition-colors group"
                        >
                            <Github size={20} className="text-neutral-500 group-hover:text-white transition-colors" />
                        </a>
                        <Link href="/beta" className="relative group px-6 py-2.5 rounded-xl overflow-hidden block">
                            <div className="absolute inset-0 bg-white text-black transition-transform duration-500 group-hover:scale-105" />
                            <span className="relative z-10 text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-2 text-black">
                                Join the beta <ArrowRight size={14} />
                            </span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 rounded-xl hover:bg-white/5 transition-colors"
                    >
                        {mobileMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-neutral-400" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="md:hidden mt-4 px-6 mx-6 glass-premium rounded-2xl border border-white/5 overflow-hidden py-8 space-y-4"
                >
                    {navItems.map((item) => (
                        <Link
                            key={item}
                            href={getNavHref(item)}
                            className="block text-sm font-bold text-neutral-400 uppercase tracking-widest hover:text-white"
                        >
                            {item}
                        </Link>
                    ))}
                    <div className="h-px bg-white/5 w-full my-4" />
                    <button className="w-full py-4 rounded-xl bg-white text-black font-bold uppercase tracking-widest text-xs">
                        Get Started
                    </button>
                </motion.div>
            )}
        </motion.nav>
    );
}
