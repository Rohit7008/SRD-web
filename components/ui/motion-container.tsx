"use client"

import { motion } from "framer-motion"

interface MotionContainerProps {
    children: React.ReactNode
    className?: string
    delay?: number
}

export const MotionContainer = ({ children, className, delay = 0 }: MotionContainerProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export const MotionItem = ({ children, className, delay = 0 }: MotionContainerProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
