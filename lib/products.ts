
export const PRODUCT_COLORS = [
    { name: "Wall Nut", hex: "#5D4037" }, // Dark Brown
    { name: "Gray", hex: "#52525b" }, // Zinc-600
    { name: "Golden Oak", hex: "#B8860B" }, // Dark Goldenrod
    { name: "Black", hex: "#18181b" }, // Zinc-950
];

export interface Product {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    features: string[];
    image: string;
    category: "upvc" | "aluminium";
}

export const PRODUCTS: Record<string, Record<string, Product>> = {
    upvc: {
        "sliding-windows": {
            id: "sliding-windows",
            title: "UPVC Sliding Windows Bangalore",
            description: "Traditional style and contemporary performance for Bangalore homes.",
            longDescription: "Our UPVC Sliding Windows are designed to handle Bangalore's unique weather. They feature two sashes, with at least one sash sliding horizontally past another. They create a contemporary look while allowing in breezes from multiple directions—perfect for ventilating your home after a heavy rain.",
            features: ["Traditional Style", "Contemporary Performance", "Horizontal Sliding Sashes", "Multi-direction Ventilation"],
            image: "/images/upvc_sliding_window_1769009483560.png",
            category: "upvc"
        },
        "fixed-windows": {
            id: "fixed-windows",
            title: "UPVC Fixed Windows",
            description: "Great way of bringing light and views into a space. Affordable and energy efficient.",
            longDescription: "Fixed windows in UPVC frames are a great way of bringing light and views into a space, improve energy efficiency and are affordable. The basic function of a window is to admit daylight in acceptable and consistent quantities, while maintaining the ambient temperature inside the house.",
            features: ["Maximum Light", "Energy Efficient", "Affordable", "Temperature Maintenance"],
            image: "/images/upvc_fixed_window_view_1769016648166.png",
            category: "upvc"
        },
        "casement-windows": {
            id: "casement-windows",
            title: "UPVC Casement Windows",
            description: "Available with a range of options to suit every home and budget.",
            longDescription: "UPVC Casement Windows are available with a range of options to suit every home and budget. Simply have sashes that open out on special hinges that use friction to keep them open in the position you chose.",
            features: ["Special Friction Hinges", "Suit Every Budget", "Customizable Opening Positions"],
            image: "/images/upvc.png",
            category: "upvc"
        },
        "french-windows": {
            id: "french-windows",
            title: "UPVC French Windows",
            description: "Classic good looks with a maximum glass area which optimizes visibility.",
            longDescription: "Two fully opening sashes with a floating mullion, incorporating Warm Edge Spacer Bars, Sound Insulation & Excellent Thermal insulation properties. Classic good looks with a maximum glass area which optimizes visibility, making it a perfect choice for conservatories, balconies, porches or extensions.",
            features: ["Floating Mullion", "Warm Edge Spacer Bars", "Sound Insulation", "Thermal Insulation", "Maximized Visibility"],
            image: "/images/upvc_french_doors_1769009826593.png",
            category: "upvc"
        },
        "sliding-doors": {
            id: "sliding-doors",
            title: "UPVC Sliding Doors Bangalore",
            description: "Space-saving sliding doors with maximum glass area.",
            longDescription: "Maximize your view with our UPVC sliding doors, a popular choice for balconies and sit-outs in Bangalore apartments. They offer classic good looks with a maximum glass area which optimizes visibility, making it a perfect choice for conservatories, balconies, porches or extensions.",
            features: ["Maximum Glass Area", "Optimized Visibility", "Classic Look", "Balcony Ready"],
            image: "/images/upvc_sliding_patio_door_1769017888626.png",
            category: "upvc"
        },

        "foldable-sliding-windows": {
            id: "foldable-sliding-windows",
            title: "UPVC Foldable Sliding Windows",
            description: "Innovative foldable mechanism for maximum openness.",
            longDescription: "Our UPVC Foldable Sliding Windows (Bi-Fold) offer the ultimate flexibility for your home. By folding the sashes to one side, you can open up the entire aperture, merging your indoor and outdoor spaces. Perfect for balconies, terraces, and garden-facing rooms, they provide maximum ventilation and an unobstructed view.",
            features: ["Maximum Openness", "Bi-Fold Mechanism", "Seamless Transition", "Unobstructed View"],
            image: "/images/upvc_foldable_sliding_window_real_1769899977001.png",
            category: "upvc"
        },
        "upvc-partitions": {
            id: "upvc-partitions",
            title: "UPVC Partitions",
            description: "Sleek and durable partitions for modern office and home interiors.",
            longDescription: "UPVC Partitions are an excellent choice for dividing spaces in offices or homes while maintaining an open and airy feel. Built with durable UPVC frames and high-quality glass, they offer sound insulation and a modern aesthetic. Ideal for creating cabins, meeting rooms, or separate living areas.",
            features: ["Sound Insulation", "Modern Aesthetic", "Space Division", "Durable Frames"],
            image: "/images/upvc_partitions_1769899302276.png",
            category: "upvc"
        }
    },
    aluminium: {
        "sliding-windows": {
            id: "sliding-windows",
            title: "Aluminium Sliding Windows Bangalore",
            description: "Uniquely designed to carry a wide range of glass thickness.",
            longDescription: "Our Aluminium Sliding Windows are a favorite in modern Bangalore architecture. They are uniquely designed to carry a wide range of glass thickness for sound reduction—essential for blocking out city traffic noise. Best suited for exposed locations.",
            features: ["Double Glazed Options", "Sound Reduction", "Exposed Locations", "Intricate Manufacture"],
            image: "/images/aluminium_sliding_window_modern_1769016564516.png",
            category: "aluminium"
        },
        "fixed-windows": {
            id: "fixed-windows",
            title: "Aluminium Fixed Windows",
            description: "Admit daylight in acceptable and consistent quantities.",
            longDescription: "The basic function of a window is to admit daylight in acceptable and consistent quantities, while maintaining the ambient temperature inside the house",
            features: ["Daylight Maximization", "Consistent Quality", "Ambient Temperature Control"],
            image: "/images/upvc_fixed_window_view_1769016648166.png",
            category: "aluminium"
        },
        "shower-cubicles": {
            id: "shower-cubicles",
            title: "Shower Cubicles",
            description: "Luxury glass shower enclosures for modern bathrooms.",
            longDescription: "Transform your bathroom with our premium shower cubicles. Featuring toughened glass and corrosion-resistant fittings, they offer a spa-like experience with a watertight execution and elegant design.",
            features: ["Watertight", "Toughened Glass", "Corrosion Resistant", "Elegant Design"],
            image: "/images/shower_cubical_1769899677610.png",
            category: "aluminium"
        },
        "combination-windows": {
            id: "combination-windows",
            title: "Combination Windows",
            description: "Integration of different window types.",
            longDescription: "An integration of sliding, casement and fixed window or two windows of the same type (like casement-casement) or different types (casement-slider or fixed-slider), combination window can be made available in a variety of sizes and designs as per your need.",
            features: ["Custom Configurations", "Versatile Sizes", "Integrated Design"],
            image: "/images/combination_window_1769016525414.png",
            category: "aluminium"
        },
        "sliding-doors": {
            id: "sliding-doors",
            title: "Aluminium Sliding Doors",
            description: "Give you more glass and less frame.",
            longDescription: "Aluminium sliding doors give you more glass and less frame which results in more light being let through. The rooms in your property will seem bigger, brighter and warmer.",
            features: ["More Glass Less Frame", "Max Light", "Spacious Feel", "Warmer Rooms"],
            image: "/images/aluminium_sliding_window_modern_1769016564516.png",
            category: "aluminium"
        },
        "structural-glazing": {
            id: "structural-glazing",
            title: "Structural Glazing",
            description: "Seamless glass facades for modern commercial buildings.",
            longDescription: "Structural glazing systems offer a flush glass surface for commercial buildings, utilizing high-performance silicone bonding. This creates a continuous, seamless look that maximizes natural light and provides superior weather resistance.",
            features: ["Seamless Facade", "High Performance", "Weather Resistant", "Modern Look"],
            image: "/images/structural_glazing_1769899627474.png",
            category: "aluminium"
        },
        "frameless-glass-doors": {
            id: "frameless-glass-doors",
            title: "Frameless Glass Doors",
            description: "Elegant and minimal glass doors for a premium look.",
            longDescription: "Our frameless glass doors provide a contemporary and luxurious entrance to any room. Made with toughened safety glass and high-quality hardware, they ensure transparency and light flow while maintaining durability.",
            features: ["Toughened Glass", "Minimalist Design", "Luxury Look", "High Durability"],
            image: "/images/frameless_glass_door_1769899641320.png",
            category: "aluminium"
        },
        "aluminium-partitions": {
            id: "aluminium-partitions",
            title: "Aluminium Partitions",
            description: "Versatile and durable partitioning systems for offices.",
            longDescription: "High-quality aluminium partitioning systems designed for modern workspaces. These partitions allow for flexible office layouts, combining solid and glass panels to balance privacy and openness.",
            features: ["Flexible Layouts", "Durable Aluminium", "Privacy Options", "Quick Installation"],
            image: "/images/aluminium_partitions_1769899659115.png",
            category: "aluminium"
        },
        "acp-cladding": {
            id: "acp-cladding",
            title: "ACP Cladding",
            description: "Aluminum Composite Panels for modern building exteriors.",
            longDescription: "ACP (Aluminum Composite Panel) cladding is the perfect solution for modernizing building facades. Lightweight, durable, and available in various finishes, it provides weather protection and a sleek, contemporary aesthetic.",
            features: ["Modern Facade", "Weather Protection", "Lightweight", "Durable"],
            image: "/images/acp_cladding_real_1769899993594.png",
            category: "aluminium"
        }
    }
};
