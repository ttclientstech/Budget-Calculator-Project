"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { X, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const contactSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    whatsapp: z.string().min(10, { message: "Please enter a valid WhatsApp number." }),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: ContactFormValues) => void;
    isSubmitting: boolean;
}

export default function ContactModal({ isOpen, onClose, onSubmit, isSubmitting }: ContactModalProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
    });

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    >
                        {/* Modal */}
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-card w-full max-w-md rounded-3xl shadow-2xl border border-white/20 overflow-hidden relative"
                        >
                            {/* Header */}
                            <div className="p-6 md:p-8 pb-0 flex justify-between items-start">
                                <div>
                                    <h3 className="text-2xl font-bold font-serif text-primary">Almost There!</h3>
                                    <p className="text-muted-foreground mt-2">
                                        Where should we send the proposal?
                                    </p>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="rounded-full p-2 hover:bg-secondary/50 transition-colors text-muted-foreground hover:text-foreground"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Form */}
                            <div className="p-6 md:p-8">
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                                    {/* Name */}
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                            Full Name
                                        </label>
                                        <input
                                            {...register("name")}
                                            type="text"
                                            placeholder="John Doe"
                                            className="flex h-12 w-full rounded-xl border-2 border-transparent bg-secondary/30 px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:border-primary/50 focus:bg-background focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                                        />
                                        {errors.name && (
                                            <p className="text-xs text-destructive flex items-center gap-1 font-medium">
                                                <AlertCircle className="w-3 h-3" /> {errors.name.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* Email */}
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                            Email Address
                                        </label>
                                        <input
                                            {...register("email")}
                                            type="email"
                                            placeholder="john@example.com"
                                            className="flex h-12 w-full rounded-xl border-2 border-transparent bg-secondary/30 px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:border-primary/50 focus:bg-background focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                                        />
                                        {errors.email && (
                                            <p className="text-xs text-destructive flex items-center gap-1 font-medium">
                                                <AlertCircle className="w-3 h-3" /> {errors.email.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* WhatsApp */}
                                    <div className="space-y-2">
                                        <label htmlFor="whatsapp" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                            WhatsApp Number
                                        </label>
                                        <input
                                            {...register("whatsapp")}
                                            type="tel"
                                            placeholder="+1 234 567 890"
                                            className="flex h-12 w-full rounded-xl border-2 border-transparent bg-secondary/30 px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:border-primary/50 focus:bg-background focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                                        />
                                        {errors.whatsapp && (
                                            <p className="text-xs text-destructive flex items-center gap-1 font-medium">
                                                <AlertCircle className="w-3 h-3" /> {errors.whatsapp.message}
                                            </p>
                                        )}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full inline-flex h-12 items-center justify-center rounded-full bg-primary text-base font-bold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none mt-4"
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center gap-2">
                                                <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                                                Sending...
                                            </span>
                                        ) : (
                                            "Submit Request"
                                        )}
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
