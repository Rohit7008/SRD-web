
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
        "french-doors": {
            id: "french-doors",
            title: "French Doors",
            description: "Charming addition to any home or conservatory.",
            longDescription: "Charming addition to any home or conservatory. The extensive opening allows unrestricted access to your home as well as maximum ventilation and practical entry into your garden.",
            features: ["Unrestricted Access", "Maximum Ventilation", "Practical Garden Entry"],
            image: "/images/french_door_garden_1769016541444.png",
            category: "upvc"
        },
        "single-leaf-doors": {
            id: "single-leaf-doors",
            title: "Single Leaf Doors",
            description: "Suitable for domestic and light commercial use.",
            longDescription: "Single leaf door is suitable for domestic and light commercial use and is compatible with a wide range of hardware, making them a versatile choice Suitable for both traditional and contemporary styling.",
            features: ["Versatile Choice", "Domestic & Commercial", "Compatible Hardware"],
            image: "/images/single_leaf_door_1769016600646.png",
            category: "upvc"
        },
        "double-leaf-doors": {
            id: "double-leaf-doors",
            title: "Double Leaf Doors",
            description: "Double sash for larger clear openings.",
            longDescription: "Double sash for larger clear openings. Available in swing or out swing option. Heavy duty hinge minimized deflection by wear out & possible to adjust vertically & horizontally the window. Multipoint locking mechanism for a tighter seal.",
            features: ["Large Clear Openings", "Heavy Duty Hinges", "Multipoint Locking", "Adjustable"],
            image: "/images/double_leaf_door_1769016625650.png",
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
        "casement-windows": {
            id: "casement-windows",
            title: "Aluminium Casement Windows",
            description: "Smart choice for any home with ultra slim frame design.",
            longDescription: "Aluminium Casement Windows are the smart choice for any home. Combining a uniquely strong, durable and light material with a clean, ultra slim frame design allows an abundance of natural light to flood into home.",
            features: ["Strong & Durable", "Light Material", "Ultra Slim Frame", "Abundant Natural Light"],
            image: "/images/aluminium_casement_window_1769010141339.png",
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
        "double-leaf-front-doors": {
            id: "double-leaf-front-doors",
            title: "Double Leaf Front Doors",
            description: "Suit wider door openings with two door panels.",
            longDescription: "Aluminium double leaf front doors will suit wider door openings. They consist of two door panels which swing outwards and meet in the centre when closed.",
            features: ["Suit Wider Openings", "Outward Swing", "Centre Meeting"],
            image: "/images/double_leaf_door_1769016625650.png",
            category: "aluminium"
        },
        "partitions": {
            id: "partitions",
            title: "Toughened Glass Partition Bangalore",
            description: "Split up working spaces while utilizing light.",
            longDescription: "Glass partitioning is often used in Bangalore offices to split up working spaces without losing the sense of openness. However, it can also be used in the home - in kitchen, bathroom, or study spaces - therefore utilizing the most space and light available.",
            features: ["Space Division", "Light Maximization", "Office & Home Use"],
            image: "/images/toughened_glass_partition_1769016480903.png",
            category: "aluminium"
        },
        "board-partitions": {
            id: "board-partitions",
            title: "Glass and Particle Board Partition",
            description: "Made out of Aluminium Frames with glass panes or particle board.",
            longDescription: "Made out of Aluminium Frames with glass panes inside or particle board mounted board fittings to make partitions in big halls or office cubicles.",
            features: ["Aluminium Frames", "Particle Board Options", "Ideal for Big Halls", "Office Cubicles"],
            image: "/images/glass_particle_board_partition_1769016502970.png",
            category: "aluminium"
        }
    }
};
