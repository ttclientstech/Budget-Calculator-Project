"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
    const scrollToForm = () => {
        const formElement = document.getElementById("project-form");
        if (formElement) {
            formElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="relative overflow-hidden flex flex-col items-center justify-center min-h-[50vh] md:min-h-[60vh] w-full pt-12 md:pt-16 pb-8">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-secondary/30 rounded-full blur-[80px] md:blur-[120px] mix-blend-multiply opacity-50 animate-pulse" />
                <div className="absolute top-0 right-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-primary/5 rounded-full blur-[60px] md:blur-[100px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-secondary/20 rounded-full blur-[60px] md:blur-[100px] translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center justify-center flex-1">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }}
                    className="flex flex-col items-center text-center space-y-4 md:space-y-6 max-w-4xl mx-auto"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="inline-flex items-center rounded-full border border-primary/20 bg-secondary/50 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm shadow-sm"
                    >
                        <Sparkles className="mr-2 h-3.5 w-3.5" />
                        Talentronaut Technologies Pvt. Ltd.
                    </motion.div>

                    {/* Heading - Responsive Typography */}
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground font-serif leading-[1.1]"
                    >
                        <span className="block text-foreground">Transform Your</span>
                        <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent pb-2">
                            Financial Future
                        </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="max-w-[600px] text-muted-foreground text-lg sm:text-xl md:text-2xl/relaxed leading-relaxed font-light px-2"
                    >
                        Stop guessing. Start growing. Plan, track, and optimize your wealth with the tool trusted by thousands.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}
