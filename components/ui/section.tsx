import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    spacing?: "none" | "sm" | "default" | "lg"
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
    ({ className, spacing = "default", ...props }, ref) => {
        const spacingStyles = {
            none: "",
            sm: "py-8 md:py-12",
            default: "py-16 md:py-24",
            lg: "py-24 md:py-32",
        }

        return (
            <section
                ref={ref}
                className={cn(spacingStyles[spacing], className)}
                {...props}
            />
        )
    }
)
Section.displayName = "Section"

export { Section }
