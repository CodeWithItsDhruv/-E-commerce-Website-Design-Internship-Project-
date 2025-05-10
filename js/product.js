/**
 * Product functionality for ShopEase e-commerce website
 */

// Sample product data with more details
const productData = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 2999,
        originalPrice: 3999,
        category: "electronics",
        images: [
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Wireless+Headphones",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Headphones+Side",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Headphones+Front",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Headphones+Features"
        ],
        description: "Experience immersive sound with our Premium Wireless Headphones. Features active noise cancellation and 40-hour battery life.",
        highlights: [
            "Active Noise Cancellation",
            "40-hour battery life",
            "Bluetooth 5.0 connectivity",
            "Premium memory foam ear cushions",
            "Built-in microphone for calls"
        ],
        specifications: {
            "Brand": "ShopEase Audio",
            "Model": "WH-1000",
            "Type": "Over-ear",
            "Connectivity": "Bluetooth 5.0, 3.5mm jack",
            "Battery Life": "40 hours",
            "Weight": "250g",
            "Charging Time": "2 hours",
            "Driver Size": "40mm",
            "Frequency Response": "20Hz - 20kHz",
            "Impedance": "32 ohms"
        },
        colors: [
            { name: "Black", code: "#333333" },
            { name: "White", code: "#FFFFFF" },
            { name: "Blue", code: "#2196F3" }
        ],
        rating: 4.5,
        reviews: 128,
        inStock: true
    },
    {
        id: 2,
        name: "Smartwatch Pro",
        price: 4999,
        originalPrice: 5999,
        category: "electronics",
        images: [
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Smartwatch+Pro",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Watch+Side",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Watch+Band",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Watch+Features"
        ],
        description: "Advanced smartwatch with health monitoring and fitness tracking features.",
        highlights: [
            "Heart Rate Monitor",
            "Sleep Tracking",
            "Water Resistant",
            "Long Battery Life",
            "Multiple Sport Modes"
        ],
        specifications: {
            "Brand": "ShopEase Tech",
            "Display": "1.4\" AMOLED",
            "Battery": "420mAh",
            "Water Resistance": "5ATM",
            "Sensors": "Heart Rate, SpO2",
            "Connectivity": "Bluetooth 5.0"
        },
        colors: [
            { name: "Black", code: "#000000" },
            { name: "Silver", code: "#C0C0C0" }
        ],
        rating: 4.7,
        reviews: 245,
        inStock: true
    },
    {
        id: 3,
        name: "Running Shoes",
        price: 1999,
        originalPrice: 2499,
        category: "sports",
        images: [
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Running+Shoes",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Shoes+Side",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Shoes+Top",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Shoes+Features"
        ],
        description: "High-quality running shoes designed for comfort and durability.",
        highlights: [
            "Breathable Material",
            "Cushioned Sole",
            "Durable Construction",
            "Arch Support",
            "Lightweight"
        ],
        specifications: {
            "Brand": "ShopEase Sports",
            "Type": "Running",
            "Sole Material": "Rubber",
            "Upper Material": "Synthetic",
            "Insole Material": "EVA",
            "Weight": "250g"
        },
        colors: [
            { name: "Black", code: "#000000" },
            { name: "White", code: "#FFFFFF" },
            { name: "Red", code: "#FF0000" }
        ],
        rating: 4.8,
        reviews: 312,
        inStock: true
    },
    {
        id: 4,
        name: "Stainless Steel Water Bottle",
        price: 199,
        originalPrice: 399,
        category: "home",
        images: [
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Water+Bottle",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Water+Bottle+Side",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Water+Bottle+Top",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Water+Bottle+Features"
        ],
        description: "Stay hydrated in style with our premium stainless steel water bottle. Features double-wall vacuum insulation to keep your drinks cold for 24 hours or hot for 12 hours. Perfect for gym, office, or outdoor activities.",
        highlights: [
            "Double-wall Vacuum Insulation",
            "24 Hours Cold / 12 Hours Hot",
            "BPA-Free",
            "Leak-proof Design",
            "500ml Capacity"
        ],
        specifications: {
            "Brand": "ShopEase Home",
            "Material": "18/8 Stainless Steel",
            "Capacity": "500ml",
            "Insulation": "Double-wall Vacuum",
            "Cold Retention": "24 Hours",
            "Hot Retention": "12 Hours",
            "Weight": "300g",
            "Dimensions": "9 x 9 x 26 cm"
        },
        colors: [
            { name: "Silver", code: "#C0C0C0" },
            { name: "Matte Black", code: "#28282B" },
            { name: "Rose Gold", code: "#B76E79" }
        ],
        rating: 4.6,
        reviews: 156,
        inStock: true
    },
    {
        id: 5,
        name: "Fitness Tracker",
        price: 1499,
        originalPrice: 1999,
        category: "electronics",
        images: [
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Fitness+Tracker",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Tracker+Side",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Tracker+Band",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Tracker+Features"
        ],
        description: "Advanced fitness tracker with heart rate monitoring, sleep tracking, and activity tracking.",
        highlights: [
            "Heart Rate Monitoring",
            "Sleep Tracking",
            "Activity Tracking",
            "Water Resistant",
            "Long Battery Life"
        ],
        specifications: {
            "Brand": "ShopEase Health",
            "Display": "AMOLED",
            "Battery": "300mAh",
            "Water Resistance": "5ATM",
            "Sensors": "Heart Rate, Oxygen, Accelerometer",
            "Connectivity": "Bluetooth 5.0"
        },
        colors: [
            { name: "Black", code: "#000000" },
            { name: "Silver", code: "#C0C0C0" }
        ],
        rating: 4.4,
        reviews: 198,
        inStock: true
    },
    {
        id: 6,
        name: "Backpack Pro",
        price: 1299,
        originalPrice: 1799,
        category: "fashion",
        images: [
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Backpack+Pro",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Backpack+Side",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Backpack+Inside",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Backpack+Features"
        ],
        description: "Professional backpack with laptop compartment and anti-theft features. Water-resistant material and USB charging port.",
        highlights: [
            "Anti-theft Design",
            "USB Charging Port",
            "Water Resistant",
            "15.6\" Laptop Pocket",
            "Multiple Compartments"
        ],
        specifications: {
            "Brand": "ShopEase Travel",
            "Capacity": "25L",
            "Material": "Polyester",
            "Dimensions": "45x30x15cm",
            "Weight": "980g",
            "Warranty": "1 year"
        },
        colors: [
            { name: "Black", code: "#000000" },
            { name: "Navy", code: "#000080" },
            { name: "Grey", code: "#808080" }
        ],
        rating: 4.6,
        reviews: 167,
        inStock: true
    },
    {
        id: 7,
        name: "Desk Lamp LED",
        price: 799,
        originalPrice: 999,
        category: "home",
        images: [
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Desk+Lamp",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Lamp+Side",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Lamp+Light",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Lamp+Features"
        ],
        description: "Eco-friendly LED desk lamp with adjustable brightness and color temperature.",
        highlights: [
            "Adjustable Brightness",
            "Color Temperature",
            "Eco-friendly",
            "Energy Efficient",
            "USB Charging"
        ],
        specifications: {
            "Brand": "ShopEase Home",
            "Power": "5W",
            "Color Temperature": "Warm White",
            "Brightness": "300 lumens",
            "Material": "Aluminum",
            "Dimensions": "12x6x6 inches"
        },
        colors: [
            { name: "White", code: "#FFFFFF" },
            { name: "Warm White", code: "#FFD700" }
        ],
        rating: 4.5,
        reviews: 145,
        inStock: true
    },
    {
        id: 8,
        name: "Yoga Mat",
        price: 599,
        originalPrice: 799,
        category: "sports",
        images: [
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Yoga+Mat+Basic",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Mat+Side+View",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Mat+Texture",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Mat+Features"
        ],
        description: "Premium eco-friendly yoga mat with excellent grip and cushioning. Perfect for all types of yoga practices. Features alignment lines and moisture-resistant surface.",
        highlights: [
            "6mm Thickness",
            "Eco-friendly Material",
            "Non-slip Surface",
            "Alignment Lines",
            "Carrying Strap Included"
        ],
        specifications: {
            "Brand": "ShopEase Fitness",
            "Material": "TPE Eco-friendly",
            "Thickness": "6mm",
            "Length": "183cm",
            "Width": "61cm",
            "Weight": "1.8kg",
            "Care Instructions": "Wipe clean with damp cloth"
        },
        colors: [
            { name: "Purple", code: "#800080" },
            { name: "Blue", code: "#0000FF" },
            { name: "Green", code: "#008000" }
        ],
        rating: 4.3,
        reviews: 178,
        inStock: true
    },
    {
        id: 9,
        name: "Professional Hair Dryer",
        price: 2499,
        originalPrice: 3499,
        category: "beauty",
        images: [
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Hair+Dryer",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Dryer+Side",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Dryer+Nozzle",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Dryer+Features"
        ],
        rating: 4.7,
        reviews: 156,
        inStock: true
    },
    {
        id: 10,
        name: "Smart LED TV 55-inch",
        price: 39999,
        originalPrice: 49999,
        category: "electronics",
        images: [
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Smart+TV",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=TV+Side",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=TV+Ports",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=TV+Features"
        ],
        rating: 4.8,
        reviews: 203,
        inStock: true
    },
    {
        id: 11,
        name: "Coffee Maker Pro",
        price: 4999,
        originalPrice: 6999,
        category: "home",
        images: [
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Coffee+Maker",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Maker+Side",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Maker+Front",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Maker+Features"
        ],
        rating: 4.6,
        reviews: 178,
        inStock: true
    },
    {
        id: 12,
        name: "Leather Laptop Bag",
        price: 1999,
        originalPrice: 2999,
        category: "fashion",
        images: [
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Laptop+Bag",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Bag+Side",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Bag+Inside",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Bag+Features"
        ],
        rating: 4.5,
        reviews: 142,
        inStock: true
    },
    {
        id: 13,
        name: "Gaming Keyboard RGB",
        price: 2999,
        originalPrice: 3999,
        category: "electronics",
        images: [
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Gaming+Keyboard",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Keyboard+Side",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Keyboard+RGB",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Keyboard+Features"
        ],
        rating: 4.7,
        reviews: 189,
        inStock: true
    },
    {
        id: 14,
        name: "Fitness Resistance Bands Set",
        price: 799,
        originalPrice: 1299,
        category: "sports",
        images: [
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Resistance+Bands",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Bands+Set",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Bands+Usage",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Bands+Features"
        ],
        rating: 4.5,
        reviews: 234,
        inStock: true
    },
    {
        id: 15,
        name: "Smart Robot Vacuum Cleaner",
        price: 14999,
        originalPrice: 19999,
        category: "home",
        images: [
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Robot+Vacuum",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Vacuum+Side",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Vacuum+Top",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Vacuum+Features"
        ],
        description: "Smart robot vacuum with mapping technology, app control, and automatic charging. Features multiple cleaning modes and works on all floor types.",
        highlights: [
            "Smart Mapping",
            "App Control",
            "Auto Charging",
            "Multiple Modes",
            "HEPA Filter"
        ],
        specifications: {
            "Brand": "ShopEase Home",
            "Battery": "5200mAh",
            "Runtime": "150 minutes",
            "Suction Power": "2500Pa",
            "Noise Level": "65dB",
            "Filter": "HEPA"
        },
        colors: [
            { name: "White", code: "#FFFFFF" },
            { name: "Black", code: "#000000" }
        ],
        rating: 4.6,
        reviews: 167,
        inStock: true
    },
    {
        id: 16,
        name: "Digital Drawing Tablet",
        price: 5999,
        originalPrice: 7999,
        category: "electronics",
        images: [
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Drawing+Tablet",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Tablet+Side",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Tablet+Usage",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Tablet+Features"
        ],
        description: "Professional drawing tablet with 8192 pressure levels, tilt support, and customizable shortcut keys. Perfect for digital artists and designers.",
        highlights: [
            "8192 Pressure Levels",
            "Tilt Support",
            "Customizable Keys",
            "Battery-free Pen",
            "Large Active Area"
        ],
        specifications: {
            "Brand": "ShopEase Art",
            "Active Area": "10 x 6 inches",
            "Resolution": "5080 LPI",
            "Pressure Levels": "8192",
            "Interface": "USB-C",
            "OS Support": "Windows/MacOS"
        },
        colors: [
            { name: "Black", code: "#000000" }
        ],
        rating: 4.8,
        reviews: 145,
        inStock: true
    },
    {
        id: 17,
        name: "Air Purifier HEPA",
        price: 8999,
        originalPrice: 11999,
        category: "home",
        images: [
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Air+Purifier",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Purifier+Side",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Purifier+Front",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Purifier+Features"
        ],
        description: "Advanced air purifier with True HEPA filter, activated carbon filter, and UV-C light. Removes 99.97% of airborne particles as small as 0.3 microns.",
        highlights: [
            "True HEPA Filter",
            "UV-C Light",
            "Air Quality Sensor",
            "Timer Function",
            "Silent Operation"
        ],
        specifications: {
            "Brand": "ShopEase Home",
            "Coverage": "400 sq ft",
            "CADR": "300 m³/h",
            "Noise Level": "25-52 dB",
            "Power": "45W",
            "Filter Life": "6 months"
        },
        colors: [
            { name: "White", code: "#FFFFFF" }
        ],
        rating: 4.7,
        reviews: 178,
        inStock: true
    },
    {
        id: 18,
        name: "Wireless Charger Stand",
        price: 1499,
        originalPrice: 1999,
        category: "electronics",
        images: [
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Charger+Stand",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Stand+Side",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Stand+Usage",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Stand+Features"
        ],
        description: "2-in-1 wireless charging stand for smartphone and smartwatch. Features fast charging and adjustable angle.",
        highlights: [
            "15W Fast Charging",
            "Dual Device",
            "Adjustable Angle",
            "LED Indicator",
            "Safety Protection"
        ],
        specifications: {
            "Brand": "ShopEase Tech",
            "Input": "QC 3.0",
            "Output": "15W max",
            "Material": "ABS + Aluminum",
            "Cable": "1.5m USB-C",
            "Compatibility": "Universal"
        },
        colors: [
            { name: "Black", code: "#000000" },
            { name: "White", code: "#FFFFFF" }
        ],
        rating: 4.5,
        reviews: 234,
        inStock: true
    },
    {
        id: 19,
        name: "Yoga Mat Premium",
        price: 1299,
        originalPrice: 1799,
        category: "sports",
        images: [
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Yoga+Mat",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Mat+Side",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Mat+Rolled",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Mat+Features"
        ],
        rating: 4.6,
        reviews: 178,
        inStock: true
    },
    {
        id: 20,
        name: "Smart Light Bulb",
        price: 799,
        originalPrice: 999,
        category: "home",
        images: [
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Smart+Bulb",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Bulb+Side",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Bulb+On",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Bulb+Features"
        ],
        description: "Smart LED bulb with millions of colors and app control. Works with voice assistants.",
        highlights: [
            "16M Colors",
            "App Control",
            "Voice Compatible",
            "Schedules",
            "Energy Efficient"
        ],
        specifications: {
            "Brand": "ShopEase Smart",
            "Wattage": "9W",
            "Lumens": "800lm",
            "Base": "E27",
            "Life": "25000 hours",
            "Connectivity": "WiFi"
        },
        colors: [
            { name: "White", code: "#FFFFFF" }
        ],
        rating: 4.4,
        reviews: 245,
        inStock: true
    },
    {
        id: 21,
        name: "Face Moisturizer",
        price: 599,
        originalPrice: 799,
        category: "beauty",
        images: [
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Face+Moisturizer",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Moisturizer+Side",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Moisturizer+Back",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Moisturizer+Features"
        ],
        rating: 4.5,
        reviews: 312,
        inStock: true
    },
    {
        id: 22,
        name: "Smart Door Lock",
        price: 7999,
        originalPrice: 9999,
        category: "home",
        images: [
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Smart+Lock",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Lock+Side",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Lock+Usage",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Lock+Features"
        ],
        description: "Smart door lock with fingerprint, PIN, and app access. Features auto-lock, temporary access codes, and break-in alarm.",
        highlights: [
            "Fingerprint Access",
            "PIN Code",
            "App Control",
            "Auto-lock",
            "Break-in Alarm"
        ],
        specifications: {
            "Brand": "ShopEase Security",
            "Power": "4 AA Batteries",
            "Unlock Methods": "Multiple",
            "App Support": "Yes",
            "Material": "Zinc Alloy",
            "Warranty": "2 years"
        },
        colors: [
            { name: "Silver", code: "#C0C0C0" },
            { name: "Black", code: "#000000" }
        ],
        rating: 4.6,
        reviews: 167,
        inStock: true
    },
    {
        id: 23,
        name: "Wireless Earbuds Pro",
        price: 4999,
        originalPrice: 6999,
        category: "electronics",
        images: [
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Wireless+Earbuds",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Earbuds+Case",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Earbuds+Fit",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Earbuds+Features"
        ],
        description: "Premium wireless earbuds with active noise cancellation, transparency mode, and spatial audio. Features 24-hour battery life with case.",
        highlights: [
            "Active Noise Cancellation",
            "Transparency Mode",
            "Spatial Audio",
            "24hr Battery Life",
            "Water Resistant"
        ],
        specifications: {
            "Brand": "ShopEase Audio",
            "Battery Life": "6hrs + 18hrs case",
            "Connectivity": "Bluetooth 5.0",
            "Water Resistance": "IPX4",
            "Charging": "USB-C, Wireless",
            "Weight": "5.4g each"
        },
        colors: [
            { name: "White", code: "#FFFFFF" },
            { name: "Black", code: "#000000" }
        ],
        rating: 4.8,
        reviews: 289,
        inStock: true
    },
    {
        id: 24,
        name: "Yoga Block Set",
        price: 599,
        originalPrice: 899,
        category: "sports",
        images: [
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Yoga+Blocks",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Blocks+Set",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Blocks+Usage",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Blocks+Features"
        ],
        description: "High-density foam yoga blocks set with strap. Perfect for improving flexibility and maintaining proper alignment in yoga poses.",
        highlights: [
            "High-density Foam",
            "Non-slip Surface",
            "Includes Strap",
            "Lightweight",
            "Moisture-resistant"
        ],
        specifications: {
            "Brand": "ShopEase Fitness",
            "Material": "EVA Foam",
            "Size": "9x6x4 inches",
            "Weight": "200g each",
            "Pieces": "2 blocks + strap",
            "Color": "Multiple options"
        },
        colors: [
            { name: "Purple", code: "#800080" },
            { name: "Blue", code: "#0000FF" },
            { name: "Black", code: "#000000" }
        ],
        rating: 4.5,
        reviews: 156,
        inStock: true
    },
    {
        id: 25,
        name: "Blender Pro",
        price: 3999,
        originalPrice: 4999,
        category: "home",
        images: [
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Blender+Pro",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Blender+Side",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Blender+Top",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Blender+Features"
        ],
        description: "Professional-grade blender with variable speed control and pulse function. Perfect for smoothies, soups, and food processing.",
        highlights: [
            "1200W Motor",
            "Variable Speed",
            "6 Pre-set Programs",
            "2L Capacity",
            "Dishwasher Safe"
        ],
        specifications: {
            "Brand": "ShopEase Kitchen",
            "Power": "1200W",
            "Capacity": "2L",
            "Speed": "Variable",
            "Material": "Tritan",
            "Warranty": "2 years"
        },
        colors: [
            { name: "Silver", code: "#C0C0C0" },
            { name: "Black", code: "#000000" }
        ],
        rating: 4.7,
        reviews: 189,
        inStock: true
    },
    {
        id: 26,
        name: "Gaming Console Pro",
        price: 49999,
        originalPrice: 54999,
        category: "electronics",
        images: [
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Gaming+Console",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Console+Side",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Console+Front",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Console+Features"
        ],
        description: "Next-gen gaming console with 4K graphics, ray tracing, and fast loading. Includes wireless controller and built-in storage.",
        highlights: [
            "4K Gaming",
            "Ray Tracing",
            "Fast Loading",
            "Wireless Controller",
            "Digital Edition"
        ],
        specifications: {
            "Brand": "ShopEase Gaming",
            "Storage": "1TB SSD",
            "Resolution": "4K",
            "RAM": "16GB",
            "Processor": "Custom 8-core",
            "Warranty": "1 year"
        },
        colors: [
            { name: "White", code: "#FFFFFF" },
            { name: "Black", code: "#000000" }
        ],
        rating: 4.9,
        reviews: 456,
        inStock: true
    },
    {
        id: 27,
        name: "Massage Chair",
        price: 29999,
        originalPrice: 34999,
        category: "home",
        images: [
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Massage+Chair",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Chair+Side",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Chair+Back",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Chair+Features"
        ],
        description: "Full-body massage chair with zero gravity, heat therapy, and multiple massage modes. Features Bluetooth speakers and USB charging.",
        highlights: [
            "Zero Gravity",
            "Heat Therapy",
            "Multiple Modes",
            "Bluetooth Audio",
            "USB Charging"
        ],
        specifications: {
            "Brand": "ShopEase Wellness",
            "Power": "200W",
            "Programs": "8",
            "Weight Capacity": "120kg",
            "Material": "PU Leather",
            "Warranty": "3 years"
        },
        colors: [
            { name: "Black", code: "#000000" },
            { name: "Brown", code: "#8B4513" }
        ],
        rating: 4.7,
        reviews: 178,
        inStock: true
    },
    {
        id: 28,
        name: "Digital Piano",
        price: 34999,
        originalPrice: 39999,
        category: "electronics",
        images: [
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Digital+Piano",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Piano+Side",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Piano+Keys",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Piano+Features"
        ],
        description: "88-key weighted digital piano with authentic grand piano sound. Features built-in lessons, recording, and USB-MIDI connectivity.",
        highlights: [
            "88 Weighted Keys",
            "Grand Piano Sound",
            "Built-in Lessons",
            "Recording Function",
            "USB-MIDI"
        ],
        specifications: {
            "Brand": "ShopEase Music",
            "Keys": "88 Weighted",
            "Polyphony": "192",
            "Sounds": "24",
            "Speakers": "2x20W",
            "Connections": "USB, MIDI"
        },
        colors: [
            { name: "Black", code: "#000000" },
            { name: "White", code: "#FFFFFF" }
        ],
        rating: 4.8,
        reviews: 145,
        inStock: true
    },
    {
        id: 29,
        name: "Smart Garden",
        price: 8999,
        originalPrice: 9999,
        category: "home",
        images: [
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Smart+Garden",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Garden+Side",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Garden+Plants",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Garden+Features"
        ],
        description: "Indoor smart garden with automatic watering and LED grow lights. Grow fresh herbs and vegetables year-round.",
        highlights: [
            "Auto Watering",
            "LED Grow Lights",
            "Smart App Control",
            "6 Plant Pods",
            "Nutrient System"
        ],
        specifications: {
            "Brand": "ShopEase Garden",
            "Capacity": "6 Plants",
            "Power": "30W",
            "Water Tank": "2.5L",
            "Light Cycle": "16/8",
            "App Control": "Yes"
        },
        colors: [
            { name: "White", code: "#FFFFFF" },
            { name: "Grey", code: "#808080" }
        ],
        rating: 4.6,
        reviews: 167,
        inStock: true
    },
    {
        id: 30,
        name: "Electric Toothbrush Pro",
        price: 2999,
        originalPrice: 3999,
        category: "beauty",
        images: [
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Electric+Toothbrush",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Toothbrush+Side",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Toothbrush+Heads",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Toothbrush+Features"
        ],
        description: "Smart electric toothbrush with pressure sensor and multiple cleaning modes. Features app connectivity and real-time feedback.",
        highlights: [
            "Pressure Sensor",
            "5 Cleaning Modes",
            "App Connectivity",
            "30-day Battery",
            "Timer Function"
        ],
        specifications: {
            "Brand": "ShopEase Care",
            "Battery": "Lithium-ion",
            "Runtime": "30 days",
            "Modes": "5",
            "Charging": "USB-C",
            "Warranty": "2 years"
        },
        colors: [
            { name: "White", code: "#FFFFFF" },
            { name: "Black", code: "#000000" },
            { name: "Pink", code: "#FFC0CB" }
        ],
        rating: 4.7,
        reviews: 234,
        inStock: true
    },
    {
        id: 31,
        name: "Dumbbell Set Adjustable",
        price: 7999,
        originalPrice: 9999,
        category: "sports",
        images: [
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Dumbbell+Set",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Dumbbells+Side",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Dumbbells+Rack",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Dumbbells+Features"
        ],
        description: "Adjustable dumbbell set with quick-lock mechanism. Weight range from 2.5kg to 24kg per dumbbell. Space-saving design.",
        highlights: [
            "2.5-24kg Range",
            "Quick-lock System",
            "Space-saving",
            "Durable Build",
            "Storage Tray"
        ],
        specifications: {
            "Brand": "ShopEase Fitness",
            "Weight Range": "2.5-24kg",
            "Increments": "2.5kg",
            "Material": "Steel, Nylon",
            "Handle": "Knurled Steel",
            "Warranty": "1 year"
        },
        colors: [
            { name: "Black", code: "#000000" }
        ],
        rating: 4.8,
        reviews: 189,
        inStock: true
    },
    {
        id: 32,
        name: "Air Fryer Digital",
        price: 4999,
        originalPrice: 5999,
        category: "home",
        images: [
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Air+Fryer",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Fryer+Side",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Fryer+Basket",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Fryer+Features"
        ],
        description: "Digital air fryer with 8 preset programs and large capacity. Features touch control panel and dishwasher-safe parts.",
        highlights: [
            "8 Preset Programs",
            "Digital Controls",
            "6L Capacity",
            "Non-stick Basket",
            "Recipe Book"
        ],
        specifications: {
            "Brand": "ShopEase Kitchen",
            "Capacity": "6L",
            "Power": "1700W",
            "Temperature": "80-200°C",
            "Timer": "60 minutes",
            "Display": "LED Touch"
        },
        colors: [
            { name: "Black", code: "#000000" },
            { name: "White", code: "#FFFFFF" }
        ],
        rating: 4.6,
        reviews: 278,
        inStock: true
    },
    {
        id: 33,
        name: "Wireless Mouse Silent",
        price: 999,
        originalPrice: 1499,
        category: "electronics",
        images: [
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Wireless+Mouse",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Mouse+Side",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Mouse+Top",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Mouse+Features"
        ],
        description: "Silent wireless mouse with ergonomic design and long battery life. Perfect for office use with noise-free clicks.",
        highlights: [
            "Silent Clicks",
            "Ergonomic Design",
            "18-month Battery",
            "Adjustable DPI",
            "Universal Compatible"
        ],
        specifications: {
            "Brand": "ShopEase Tech",
            "DPI Range": "800-2400",
            "Buttons": "6",
            "Battery": "1xAA",
            "Range": "10m",
            "Weight": "90g"
        },
        colors: [
            { name: "Black", code: "#000000" },
            { name: "Grey", code: "#808080" },
            { name: "Rose Gold", code: "#B76E79" }
        ],
        rating: 4.5,
        reviews: 167,
        inStock: true
    },
    {
        id: 34,
        name: "Mechanical Keyboard TKL",
        price: 5999,
        originalPrice: 7499,
        category: "electronics",
        images: [
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Mechanical+Keyboard",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Keyboard+Side",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Keyboard+Switches",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Keyboard+Features"
        ],
        description: "Tenkeyless mechanical keyboard with hot-swappable switches and RGB backlighting. Perfect for gaming and typing.",
        highlights: [
            "Hot-swappable Switches",
            "RGB Backlighting",
            "TKL Layout",
            "PBT Keycaps",
            "N-key Rollover"
        ],
        specifications: {
            "Brand": "ShopEase Gaming",
            "Layout": "TKL (87 keys)",
            "Switches": "Mechanical",
            "Keycaps": "PBT Double-shot",
            "Interface": "USB-C",
            "Weight": "900g"
        },
        colors: [
            { name: "Black", code: "#000000" },
            { name: "White", code: "#FFFFFF" }
        ],
        rating: 4.7,
        reviews: 245,
        inStock: true
    },
    {
        id: 35,
        name: "Smart Scale",
        price: 1999,
        originalPrice: 2499,
        category: "health",
        images: [
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Smart+Scale",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Scale+Side",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Scale+Display",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Scale+Features"
        ],
        description: "Smart body composition scale with app connectivity. Measures weight, body fat, muscle mass, and more.",
        highlights: [
            "13 Body Metrics",
            "App Connectivity",
            "Multiple Users",
            "High Precision",
            "Auto Recognition"
        ],
        specifications: {
            "Brand": "ShopEase Health",
            "Capacity": "180kg",
            "Accuracy": "0.1kg",
            "Power": "4xAAA",
            "Display": "LED",
            "Connectivity": "Bluetooth"
        },
        colors: [
            { name: "White", code: "#FFFFFF" },
            { name: "Black", code: "#000000" }
        ],
        rating: 4.6,
        reviews: 189,
        inStock: true
    },
    {
        id: 36,
        name: "Coffee Grinder",
        price: 2499,
        originalPrice: 2999,
        category: "home",
        images: [
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Coffee+Grinder",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Grinder+Side",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Grinder+Top",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Grinder+Features"
        ],
        description: "Electric coffee grinder with conical burr and 40 grind settings. Perfect for espresso to French press.",
        highlights: [
            "40 Grind Settings",
            "Conical Burr",
            "Timer Function",
            "250g Capacity",
            "Low Noise"
        ],
        specifications: {
            "Brand": "ShopEase Kitchen",
            "Power": "150W",
            "Capacity": "250g",
            "Settings": "40",
            "Material": "Stainless Steel",
            "Warranty": "2 years"
        },
        colors: [
            { name: "Silver", code: "#C0C0C0" },
            { name: "Black", code: "#000000" }
        ],
        rating: 4.7,
        reviews: 156,
        inStock: true
    },
    {
        id: 37,
        name: "Laptop Stand",
        price: 999,
        originalPrice: 1299,
        category: "electronics",
        images: [
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Laptop+Stand",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Stand+Side",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Stand+Folded",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Stand+Features"
        ],
        description: "Adjustable aluminum laptop stand with cooling design. Compatible with laptops up to 17 inches.",
        highlights: [
            "Adjustable Height",
            "Cooling Design",
            "Foldable",
            "Anti-slip",
            "Cable Management"
        ],
        specifications: {
            "Brand": "ShopEase Tech",
            "Material": "Aluminum",
            "Compatible": "Up to 17\"",
            "Weight Capacity": "10kg",
            "Angles": "6 levels",
            "Foldable": "Yes"
        },
        colors: [
            { name: "Silver", code: "#C0C0C0" },
            { name: "Space Grey", code: "#4A4A4A" }
        ],
        rating: 4.6,
        reviews: 189,
        inStock: true
    },
    {
        id: 38,
        name: "Smart Door Bell",
        price: 3999,
        originalPrice: 4999,
        category: "home",
        images: [
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Smart+Doorbell",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Doorbell+Side",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Doorbell+Camera",
            "https://placehold.co/600x600/f8f9fa/4CAF50?text=Doorbell+Features"
        ],
        description: "WiFi video doorbell with HD camera and two-way audio. Features motion detection and night vision.",
        highlights: [
            "1080p HD Video",
            "Two-way Audio",
            "Motion Detection",
            "Night Vision",
            "Cloud Storage"
        ],
        specifications: {
            "Brand": "ShopEase Smart",
            "Resolution": "1080p",
            "Power": "Battery/Wired",
            "Storage": "Cloud/Local",
            "Connectivity": "2.4GHz WiFi",
            "Weather Resistant": "IP65"
        },
        colors: [
            { name: "Black", code: "#000000" },
            { name: "Silver", code: "#C0C0C0" }
        ],
        rating: 4.7,
        reviews: 234,
        inStock: true
    }
];

// Make productData available globally
window.productData = productData;

// Function to generate star rating HTML
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let starsHTML = '';
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }
    
    // Add half star if needed
    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    
    // Add empty stars
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }
    
    return starsHTML;
}

// Function to calculate discount percentage
function calculateDiscount(currentPrice, originalPrice) {
    return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
}

// Function to format price in Indian Rupees
function formatPrice(price) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
    }).format(price);
}

// Function to get placeholder image URL for a product
function getPlaceholderImage(productName, index = 1) {
    return `https://placehold.co/600x600/f8f9fa/4CAF50?text=${encodeURIComponent(productName + ' ' + index)}`;
}

// Function to load product details
function loadProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    const product = productData.find(p => p.id === parseInt(productId));
    
    if (product) {
        // Update main image and thumbnails
        const mainImage = document.getElementById('main-product-image');
        if (mainImage) {
            const mainImageUrl = product.images && product.images[0] && !product.images[0].startsWith('/images/') 
                ? product.images[0] 
                : getPlaceholderImage(product.name, 1);
            mainImage.src = mainImageUrl;
            mainImage.alt = product.name;
        }

        // Update product details
        document.querySelector('.product-title').textContent = product.name;
        document.querySelector('#category-badge').textContent = product.category;
        document.querySelector('#product-category').textContent = product.category;
    
    // Update price
        const currentPrice = document.querySelector('.current-price');
        const originalPrice = document.querySelector('.original-price');
        const discountTag = document.querySelector('.discount-tag');
        
        if (currentPrice) currentPrice.textContent = formatPrice(product.price);
        if (originalPrice) originalPrice.textContent = formatPrice(product.originalPrice);
        if (discountTag) discountTag.textContent = `${calculateDiscount(product.price, product.originalPrice)}% off`;
    
    // Update rating
        const ratingContainer = document.querySelector('.rating');
        if (ratingContainer) {
            ratingContainer.innerHTML = generateStars(product.rating);
        }

        // Update review count
        const reviewCount = document.querySelector('.review-count');
        if (reviewCount) {
            reviewCount.textContent = `(${product.reviews} Reviews)`;
        }

        // Update description
        const description = document.querySelector('.product-description');
        if (description) {
            description.textContent = product.description;
        }

        // Update highlights
        const highlightsList = document.querySelector('.highlights-list');
        if (highlightsList && product.highlights) {
            highlightsList.innerHTML = product.highlights.map(highlight => `
                <li><i class="fas fa-check"></i>${highlight}</li>
            `).join('');
        }

        // Update specifications in grid layout
        const specificationsGrid = document.querySelector('.specifications-grid');
        if (specificationsGrid && product.specifications) {
            specificationsGrid.innerHTML = Object.entries(product.specifications).map(([key, value]) => `
                <div class="spec-item">
                    <span class="spec-label">${key}:</span>
                    <span class="spec-value">${value}</span>
                </div>
            `).join('');
        }

        // Load related products
    const relatedProducts = productData
            .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4);
    
        const relatedGrid = document.getElementById('related-products');
        if (relatedGrid) {
            relatedGrid.innerHTML = relatedProducts.map(relatedProduct => `
                <div class="related-product-card">
                    <a href="product-view.html?id=${relatedProduct.id}">
                        <img src="${relatedProduct.images[0]}" alt="${relatedProduct.name}" class="related-product-image">
                        <div class="related-product-info">
                            <h3 class="related-product-title">${relatedProduct.name}</h3>
                            <div class="rating">${generateStars(relatedProduct.rating)}</div>
                            <div class="related-product-price">
                                ${formatPrice(relatedProduct.price)}
                                <span class="original-price">${formatPrice(relatedProduct.originalPrice)}</span>
                    </div>
                </div>
            </a>
        </div>
    `).join('');
        }

        // Set up thumbnail click handlers
        const thumbnails = document.querySelectorAll('.thumbnail');
        thumbnails.forEach((thumbnail, index) => {
            let thumbnailUrl;
            if (product.images && product.images[index] && !product.images[index].startsWith('/images/')) {
                thumbnailUrl = product.images[index];
            } else {
                thumbnailUrl = getPlaceholderImage(product.name, index + 1);
            }
            
            thumbnail.src = thumbnailUrl;
            thumbnail.alt = `${product.name} - View ${index + 1}`;

            thumbnail.addEventListener('click', function() {
                mainImage.src = this.src.replace('120x120', '600x600');
                thumbnails.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
        });
    });

        // Set up quantity controls
    const quantityInput = document.getElementById('quantity');
        const minusBtn = document.querySelector('.minus');
        const plusBtn = document.querySelector('.plus');
    
    if (minusBtn && plusBtn && quantityInput) {
            minusBtn.addEventListener('click', () => {
            const currentValue = parseInt(quantityInput.value);
            if (currentValue > 1) {
                quantityInput.value = currentValue - 1;
            }
        });
        
            plusBtn.addEventListener('click', () => {
            const currentValue = parseInt(quantityInput.value);
                quantityInput.value = currentValue + 1;
        });
    }
    
        // Set up add to cart button
    const addToCartBtn = document.querySelector('.add-to-cart-btn');
    if (addToCartBtn) {
            addToCartBtn.addEventListener('click', () => {
                const quantity = parseInt(quantityInput.value);
                addToCart(product.id, quantity);
            });
        }
    } else {
        // Handle product not found
        document.querySelector('.product-container').innerHTML = `
            <div class="error-message">
                <h2>Product Not Found</h2>
                <p>Sorry, we couldn't find the product you're looking for.</p>
                <a href="products.html" class="back-to-products">Back to Products</a>
            </div>
        `;
    }
}

// Function to show notification
function showNotification(message) {
    // Create notification element if it doesn't exist
    let notification = document.querySelector('.cart-notification');
    if (!notification) {
        notification = document.createElement('div');
        notification.className = 'cart-notification';
        document.body.appendChild(notification);
        
        // Add styles
        notification.style.position = 'fixed';
        notification.style.bottom = '20px';
        notification.style.right = '20px';
        notification.style.backgroundColor = '#4CAF50';
        notification.style.color = 'white';
        notification.style.padding = '12px 20px';
        notification.style.borderRadius = '4px';
        notification.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
        notification.style.zIndex = '1000';
        notification.style.transform = 'translateY(100px)';
        notification.style.opacity = '0';
        notification.style.transition = 'all 0.3s ease';
    }
    
    // Set notification content
    notification.textContent = message;
    
    // Show notification
    setTimeout(() => {
        notification.style.transform = 'translateY(0)';
        notification.style.opacity = '1';
    }, 10);
    
    // Hide notification after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateY(100px)';
        notification.style.opacity = '0';
    }, 3000);
}

// Function to change main image
function changeImage(imageSrc, thumbnailEl) {
    const mainImage = document.querySelector('.main-image');
    const allThumbnails = document.querySelectorAll('.thumbnail');
    
    if (mainImage) {
        mainImage.style.opacity = '0';
        setTimeout(() => {
            mainImage.src = imageSrc;
            mainImage.style.opacity = '1';
        }, 300);
    }
    
    allThumbnails.forEach(thumb => {
        thumb.style.border = '2px solid transparent';
    });
    
    if (thumbnailEl) {
        thumbnailEl.style.border = '2px solid #4CAF50';
    }
}

// Function to select color
function selectColor(colorEl) {
    const allColors = document.querySelectorAll('.color-option');
    allColors.forEach(color => {
        color.style.transform = 'scale(1)';
        color.style.boxShadow = 'none';
    });
    
    colorEl.style.transform = 'scale(1.1)';
    colorEl.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
}

// Function to load related products
function loadRelatedProducts(category, currentProductId) {
    const relatedProducts = productData
        .filter(p => p.category === category && p.id !== currentProductId)
        .slice(0, 4);
    
    const container = document.getElementById('related-products');
    if (!container) return;

    // Add section title with style
    const sectionTitle = document.querySelector('.related-title');
    if (sectionTitle) {
        sectionTitle.style.cssText = `
            font-size: 24px;
            color: #333;
            margin-bottom: 30px;
            font-weight: 600;
            position: relative;
            padding-bottom: 10px;
            border-bottom: 2px solid #f5f5f5;
        `;
    }
    
    container.style.cssText = `
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 25px;
        padding: 20px 0;
    `;
    
    container.innerHTML = relatedProducts.map(product => `
        <div class="related-product-card" style="
            background: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            height: 100%;
            display: flex;
            flex-direction: column;
        ">
            <a href="product-view.html?id=${product.id}" class="product-link" style="text-decoration: none; color: inherit;">
                <div class="image-container" style="
                    position: relative;
                    padding-top: 100%;
                    overflow: hidden;
                    border-bottom: 1px solid #f5f5f5;
                ">
                    <img src="${product.images[0]}" alt="${product.name}" style="
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        transition: transform 0.3s ease;
                    ">
                </div>
                <div class="product-info" style="padding: 15px;">
                    <h4 style="
                        font-size: 16px;
                        margin: 0 0 8px 0;
                        color: #333;
                        line-height: 1.4;
                        height: 2.8em;
                        overflow: hidden;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                    ">${product.name}</h4>
                    <div class="rating" style="
                        color: #ffc107;
                        font-size: 14px;
                        margin-bottom: 8px;
                    ">
                        ${generateStars(product.rating)}
                        <span style="color: #666; margin-left: 5px;">(${product.reviews})</span>
                    </div>
                    <div class="price-container" style="
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        margin-bottom: 15px;
                    ">
                        <span class="current-price" style="
                            font-size: 18px;
                            font-weight: 600;
                            color: #4CAF50;
                        ">₹${product.price.toLocaleString('en-IN')}</span>
                        <span class="original-price" style="
                            font-size: 14px;
                            color: #999;
                            text-decoration: line-through;
                        ">₹${product.originalPrice.toLocaleString('en-IN')}</span>
                        <span class="discount" style="
                            background: #ffebee;
                            color: #e53935;
                            padding: 2px 6px;
                            border-radius: 4px;
                            font-size: 12px;
                            font-weight: 500;
                        ">${calculateDiscount(product.price, product.originalPrice)}% OFF</span>
                    </div>
                </div>
            </a>
            <button onclick="addToCart(${product.id})" class="add-to-cart-btn" style="
                width: calc(100% - 30px);
                margin: 0 15px 15px;
                padding: 10px;
                background-color: #4CAF50;
                color: white;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                font-weight: 500;
                transition: background-color 0.3s ease;
                margin-top: auto;
            ">Add to Cart</button>
        </div>
    `).join('');
    
    // Add hover effects
    const productCards = container.querySelectorAll('.related-product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.15)';
            const img = this.querySelector('img');
            if (img) img.style.transform = 'scale(1.05)';
        });

        card.addEventListener('mouseout', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            const img = this.querySelector('img');
            if (img) img.style.transform = 'scale(1)';
        });

        const addToCartBtn = card.querySelector('.add-to-cart-btn');
        if (addToCartBtn) {
            addToCartBtn.addEventListener('mouseover', function() {
                this.style.backgroundColor = '#45a049';
            });
            addToCartBtn.addEventListener('mouseout', function() {
                this.style.backgroundColor = '#4CAF50';
            });
        }
    });
}

// Function to show error message when product is not found
function showErrorMessage() {
    const container = document.querySelector('.product-container');
    if (container) {
        container.innerHTML = `
            <div class="error-message" style="text-align: center; padding: 40px;">
                <h2>Product Not Found</h2>
                <p>Sorry, we couldn't find the product you're looking for.</p>
                <a href="products.html" class="browse-all-btn" 
                   style="display: inline-block; margin-top: 20px; padding: 10px 20px; 
                          background-color: #4CAF50; color: white; text-decoration: none; 
                          border-radius: 6px;">Browse All Products</a>
            </div>
        `;
    }
}

// Function to add product to cart
function addToCart(productId, quantity) {
    const product = productData.find(p => p.id === productId);
    if (!product) return;
    
    // Get existing cart
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Check if product already in cart
    const existingProduct = cart.find(item => item.id === productId);
    
    if (existingProduct) {
        existingProduct.quantity += quantity;
    } else {
        cart.push({
            ...product,
            quantity: quantity
        });
    }
    
    // Save cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Show success notification
    showNotification(`${product.name} added to cart!`);
    
    // Update cart count in header
    updateCartDisplay();
}

// Initialize product page
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('product-view.html')) {
        loadProductDetails();
        initQuantityControls();
        
        // Set up event listeners for add to cart and buy now buttons
        const addToCartBtn = document.querySelector('.add-to-cart');
    const buyNowBtn = document.querySelector('.buy-now');
        const wishlistBtn = document.querySelector('.wishlist');
        
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function() {
                const urlParams = new URLSearchParams(window.location.search);
                const productId = parseInt(urlParams.get('id'));
                if (productId) addToCart(productId);
        });
    }
    
    if (buyNowBtn) {
        buyNowBtn.addEventListener('click', function() {
                const urlParams = new URLSearchParams(window.location.search);
                const productId = parseInt(urlParams.get('id'));
                if (productId) {
                    addToCart(productId);
            window.location.href = 'checkout.html';
                }
        });
    }
    
    if (wishlistBtn) {
        wishlistBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            const isActive = this.classList.contains('active');
            
                const urlParams = new URLSearchParams(window.location.search);
                const productId = parseInt(urlParams.get('id'));
                const product = productData.find(p => p.id === productId);
                
                if (product) {
            let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
            
            if (isActive) {
                if (!wishlist.some(item => item.id === product.id)) {
                    wishlist.push(product);
                    localStorage.setItem('wishlist', JSON.stringify(wishlist));
                }
                showNotification('Added to wishlist!');
            } else {
                wishlist = wishlist.filter(item => item.id !== product.id);
                localStorage.setItem('wishlist', JSON.stringify(wishlist));
                showNotification('Removed from wishlist!');
            }
            }
        });
    }
    }
});

// Add styles for consistent price display
const style = document.createElement('style');
style.textContent = `
    .price-container {
        margin: 20px 0;
    }
    .price {
        display: flex;
        align-items: center;
        gap: 15px;
    }
    .current-price {
        font-size: 24px;
        font-weight: 600;
        color: #4CAF50;
    }
    .original-price {
        font-size: 18px;
        color: #999;
        text-decoration: line-through;
    }
    .discount-tag {
        display: inline-block;
        background-color: #ffebee;
        color: #e53935;
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 500;
        margin-top: 5px;
    }
`;
document.head.appendChild(style);

// Image Gallery and Magnifier functionality
const mainImage = document.getElementById('main-product-image');
const magnifierLens = document.querySelector('.magnifier-lens');
const magnifiedImage = document.querySelector('.magnified-image');
const imageContainer = document.querySelector('.image-magnifier-container');
    const thumbnails = document.querySelectorAll('.thumbnail');
const prevButton = document.querySelector('.image-control.prev');
const nextButton = document.querySelector('.image-control.next');

let currentImageIndex = 0;
const images = [
    'https://placehold.co/600x600/f8f9fa/4CAF50?text=Product+Image',
    'https://placehold.co/600x600/f8f9fa/4CAF50?text=Product+Image+2',
    'https://placehold.co/600x600/f8f9fa/4CAF50?text=Product+Image+3',
    'https://placehold.co/600x600/f8f9fa/4CAF50?text=Product+Image+4'
];

// Magnifier functionality
imageContainer.addEventListener('mousemove', (e) => {
    const bounds = imageContainer.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const y = e.clientY - bounds.top;
    
    // Move magnifier lens
    magnifierLens.style.left = `${x - magnifierLens.offsetWidth / 2}px`;
    magnifierLens.style.top = `${y - magnifierLens.offsetHeight / 2}px`;
    
    // Calculate magnified image position
    const xPercent = ((x / bounds.width) * 100).toFixed(2);
    const yPercent = ((y / bounds.height) * 100).toFixed(2);
    
    magnifiedImage.style.backgroundImage = `url(${mainImage.src})`;
    magnifiedImage.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
    magnifiedImage.style.backgroundSize = '300%';
});

// Image gallery navigation
function updateImage(index) {
    currentImageIndex = index;
    mainImage.src = images[index];
    thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

prevButton.addEventListener('click', () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImage(newIndex);
});

nextButton.addEventListener('click', () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    updateImage(newIndex);
});

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        updateImage(index);
    });
});

// Initialize first image
updateImage(0); 

// Specifications Toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const specHeader = document.querySelector('.specifications-header');
    const specContent = document.querySelector('.specifications-content');
    const toggleButton = document.querySelector('.toggle-specifications');

    if (specHeader && specContent && toggleButton) {
        specHeader.addEventListener('click', function() {
            specContent.classList.toggle('active');
            toggleButton.classList.toggle('active');
        });
    }
});