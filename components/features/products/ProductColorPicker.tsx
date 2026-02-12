"use client";

import { useState } from "react";
import { PRODUCT_COLORS } from "@/lib/products";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export function ProductColorPicker() {
    const [selectedColor, setSelectedColor] = useState(PRODUCT_COLORS[0]);

    return (
        <div className="bg-zinc-50 border border-zinc-100 rounded-2xl p-8 max-w-xl">
            <div className="flex items-baseline justify-between mb-4">
                <h3 className="text-lg font-bold text-zinc-900">Available Colors</h3>
                <span className="text-sm font-medium text-zinc-500 uppercase tracking-widest">
                    {selectedColor?.name}
                </span>
            </div>

            <div className="flex flex-wrap gap-4">
                {PRODUCT_COLORS.map((color) => (
                    <button
                        key={color.name}
                        onClick={() => setSelectedColor(color)}
                        className={cn(
                            "group relative w-16 h-16 rounded-full border-2 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
                            selectedColor.name === color.name
                                ? "border-blue-600 scale-110"
                                : "border-white hover:scale-105 hover:border-zinc-300"
                        )}

                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                        aria-label={`Select ${color.name} color`}
                    >
                        {selectedColor.name === color.name && (
                            <span className="absolute inset-0 flex items-center justify-center text-white drop-shadow-md">
                                <Check className="w-5 h-5 stroke-[3px]" />
                            </span>
                        )}
                        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                            {color.name}
                        </span>
                    </button>
                ))}
            </div>
            <p className="mt-4 text-xs text-zinc-400">
                * Colors shown are indicative. Actual finish may vary slightly.
            </p>
        </div>
    );
}
