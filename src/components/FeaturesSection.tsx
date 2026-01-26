"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, BarChart3 } from "lucide-react";

const features = [
    {
        icon: Zap,
        title: "Instant Setup",
        description: "Get your project off the ground in minutes, not days. We handle the complexity."
    },
    {
        icon: ShieldCheck,
        title: "Secure & Private",
        description: "Your data and intellectual property are protected with enterprise-grade security."
    },
    {
        icon: BarChart3,
        title: "Transparent & Fair",
        description: "Clear pricing, no hidden fees, and complete visibility into your project's progress."
    }
];

export default function FeaturesSection() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-serif text-primary">
                        Why Choose Talentronaut?
                    </h2>
                    <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
                        We combine speed, security, and transparency to deliver exceptional results.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="flex flex-col items-center text-center p-6 bg-background rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow"
                        >
                            <div className="p-3 bg-primary/10 rounded-full mb-4 text-primary">
                                <feature.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
