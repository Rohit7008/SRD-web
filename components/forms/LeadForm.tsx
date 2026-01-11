"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, ChevronRight, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"


export function LeadForm() {
    const [step, setStep] = React.useState<number>(0)
    const [loading, setLoading] = React.useState(false)
    const [completed, setCompleted] = React.useState(false)

    // Simple state for demo
    const [formData, setFormData] = React.useState({
        name: "",
        phone: "",
        service: "",
        location: "Bengaluru", // Default
    })

    const handleNext = () => {
        setStep((prev) => prev + 1)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        // WhatsApp Integration
        const message = `*New Site Visit Request*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Service:* ${formData.service}\n*Location:* ${formData.location}`
        const encodedMessage = encodeURIComponent(message)
        const whatsappUrl = `https://wa.me/919876543210?text=${encodedMessage}`

        // Redirect to WhatsApp
        window.open(whatsappUrl, '_blank')

        setLoading(false)
        setCompleted(true)
    }

    if (completed) {
        return (
            <Card className="w-full max-w-md mx-auto border-none shadow-none bg-green-50/50">
                <CardContent className="pt-6 text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                        <Check className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold font-heading text-zinc-900 mb-2">Request Received!</h3>
                    <p className="text-zinc-600 mb-6">
                        Our expert will call you shortly to schedule your free site visit.
                    </p>
                    <Button
                        variant="outline"
                        onClick={() => {
                            setCompleted(false)
                            setStep(0)
                            setFormData({ ...formData, name: "", phone: "", service: "" })
                        }}
                    >
                        Submit Another Request
                    </Button>
                </CardContent>
            </Card>
        )
    }

    return (
        <Card className="w-full max-w-md mx-auto border-none shadow-xl bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-zinc-100">
                <div
                    className="h-full bg-zinc-900 transition-all duration-300"
                    style={{ width: `${((step + 1) / 3) * 100}%` }}
                />
            </div>

            <CardContent className="pt-8 px-6 pb-8">
                <div className="mb-6">
                    <h3 className="text-2xl font-bold font-heading text-zinc-900">
                        Get Free Site Visit
                    </h3>
                    <p className="text-zinc-500 text-sm mt-1">
                        Expert consultation at your location in Bengaluru.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <AnimatePresence mode="wait">
                        {step === 0 && (
                            <motion.div
                                key="step0"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-4"
                            >
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">What are you looking for?</label>
                                    <div className="grid grid-cols-1 gap-2">
                                        {["UPVC Windows", "Aluminium Windows", "Interiors / Decor"].map((s) => (
                                            <button
                                                key={s}
                                                type="button"
                                                onClick={() => {
                                                    setFormData({ ...formData, service: s })
                                                    handleNext()
                                                }}
                                                className={cn(
                                                    "w-full text-left px-4 py-3 rounded-lg border text-sm transition-all hover:bg-zinc-50",
                                                    formData.service === s
                                                        ? "border-zinc-900 bg-zinc-50 ring-1 ring-zinc-900"
                                                        : "border-zinc-200"
                                                )}
                                            >
                                                {s}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {step === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-4"
                            >
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Your Name</label>
                                    <Input
                                        placeholder="Enter your full name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Phone Number</label>
                                    <Input
                                        placeholder="+91 98765 43210"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        required
                                    />
                                </div>
                                <Button
                                    type="button"
                                    className="w-full"
                                    onClick={() => {
                                        if (formData.name && formData.phone) handleNext()
                                    }}
                                >
                                    Next <ChevronRight className="w-4 h-4 ml-2" />
                                </Button>
                                <button
                                    type="button"
                                    onClick={() => setStep(0)}
                                    className="w-full text-xs text-zinc-500 hover:text-zinc-900 underline"
                                >
                                    Back
                                </button>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-4"
                            >
                                <div className="bg-zinc-50 p-4 rounded-lg text-sm space-y-2">
                                    <div className="flex justify-between">
                                        <span className="text-zinc-500">Service:</span>
                                        <span className="font-medium">{formData.service}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-zinc-500">Name:</span>
                                        <span className="font-medium">{formData.name}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-zinc-500">Phone:</span>
                                        <span className="font-medium">{formData.phone}</span>
                                    </div>
                                </div>

                                <Button type="submit" className="w-full" disabled={loading}>
                                    {loading ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Scheduling...
                                        </>
                                    ) : (
                                        "Confirm Free Site Visit"
                                    )}
                                </Button>
                                <button
                                    type="button"
                                    onClick={() => setStep(1)}
                                    className="w-full text-xs text-zinc-500 hover:text-zinc-900 underline"
                                >
                                    Back
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </form>
            </CardContent>
        </Card>
    )
}
