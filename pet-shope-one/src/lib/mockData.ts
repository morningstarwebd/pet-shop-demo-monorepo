// Naaz Cool Pet Shop — Static Mock Data
// Used until Firebase is integrated

export interface Pet {
    id: string;
    name: string;
    breed: string;
    price: number;
    age_weeks: number;
    gender: "male" | "female";
    vibe: "energetic" | "calm" | "playful" | "cuddly";
    image: string;
    is_certified: boolean;
    is_vaccinated: boolean;
    is_new: boolean;
}

export interface Product {
    id: string;
    name: string;
    brand: string;
    category: string;
    price: number;
    discount_price?: number;
    image: string;
    rating: number;
    review_count: number;
}

export interface Breed {
    id: string;
    name: string;
    price_range: string;
    image: string;
}

export interface Testimonial {
    id: string;
    quote: string;
    name: string;
    location: string;
    pet: string;
    rating: number;
    photo: string;
}

export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    category: string;
    image: string;
    slug: string;
}

export const featuredPets: Pet[] = [
    {
        id: "1",
        name: "Buddy",
        breed: "Golden Retriever",
        price: 35000,
        age_weeks: 8,
        gender: "male",
        vibe: "playful",
        image: "/images/pets/golden-retriever.png",
        is_certified: true,
        is_vaccinated: true,
        is_new: false,
    },
    {
        id: "2",
        name: "Luna",
        breed: "Siberian Husky",
        price: 42000,
        age_weeks: 10,
        gender: "female",
        vibe: "energetic",
        image: "/images/pets/husky.png",
        is_certified: true,
        is_vaccinated: true,
        is_new: true,
    },
    {
        id: "3",
        name: "Mochi",
        breed: "French Bulldog",
        price: 55000,
        age_weeks: 7,
        gender: "male",
        vibe: "cuddly",
        image: "/images/pets/french-bulldog.png",
        is_certified: true,
        is_vaccinated: false,
        is_new: false,
    },
    {
        id: "4",
        name: "Suki",
        breed: "Pomeranian",
        price: 28000,
        age_weeks: 9,
        gender: "female",
        vibe: "playful",
        image: "/images/pets/pomeranian.png",
        is_certified: true,
        is_vaccinated: true,
        is_new: true,
    },
];

export const featuredProducts: Product[] = [
    {
        id: "p1",
        name: "Adult Dog Food 3kg",
        brand: "Royal Canin",
        category: "Food",
        price: 2400,
        discount_price: 1920,
        image: "/images/products/dog-food.png",
        rating: 4.8,
        review_count: 120,
    },
    {
        id: "p2",
        name: "Premium Leather Collar",
        brand: "Naaz Cool",
        category: "Accessories",
        price: 899,
        image: "/images/products/dog-food.png",
        rating: 4.6,
        review_count: 85,
    },
    {
        id: "p3",
        name: "Orthopedic Dog Bed — Large",
        brand: "PetComfort",
        category: "Beds",
        price: 3500,
        discount_price: 2799,
        image: "/images/products/dog-food.png",
        rating: 4.9,
        review_count: 210,
    },
    {
        id: "p4",
        name: "Interactive Puzzle Toy",
        brand: "PlayPets",
        category: "Toys",
        price: 649,
        image: "/images/products/dog-food.png",
        rating: 4.7,
        review_count: 96,
    },
];

export const breeds: Breed[] = [
    {
        id: "b1",
        name: "Golden Retriever",
        price_range: "₹25,000 — ₹40,000",
        image: "/images/pets/golden-retriever.png",
    },
    {
        id: "b2",
        name: "Siberian Husky",
        price_range: "₹35,000 — ₹50,000",
        image: "/images/pets/husky.png",
    },
    {
        id: "b3",
        name: "French Bulldog",
        price_range: "₹45,000 — ₹65,000",
        image: "/images/pets/french-bulldog.png",
    },
    {
        id: "b4",
        name: "Pomeranian",
        price_range: "₹20,000 — ₹35,000",
        image: "/images/pets/pomeranian.png",
    },
    {
        id: "b5",
        name: "Labrador Retriever",
        price_range: "₹15,000 — ₹30,000",
        image: "/images/pets/golden-retriever.png",
    },
    {
        id: "b6",
        name: "Shih Tzu",
        price_range: "₹25,000 — ₹45,000",
        image: "/images/pets/pomeranian.png",
    },
];

export const testimonials: Testimonial[] = [
    {
        id: "t1",
        quote:
            "Best experience ever. Our husky arrived healthy and absolutely adorable. Will never buy elsewhere.",
        name: "Priya Sharma",
        location: "Mumbai",
        pet: "Husky 🐺",
        rating: 5,
        photo: "",
    },
    {
        id: "t2",
        quote:
            "The grooming service is unreal. My pomeranian came back looking like a movie star. Highly recommend the Royal package!",
        name: "Arjun Kapoor",
        location: "Delhi",
        pet: "Pomeranian 🐕",
        rating: 5,
        photo: "",
    },
    {
        id: "t3",
        quote:
            "Naaz Cool made getting our first pet a breeze. The team guided us through everything — breed selection, health certificates, even first-week care tips.",
        name: "Sneha Reddy",
        location: "Bengaluru",
        pet: "Golden Retriever 🐶",
        rating: 5,
        photo: "",
    },
];

export const blogPosts: BlogPost[] = [
    {
        id: "bl1",
        title: "Top 5 Dog Breeds for Apartment Living in India",
        excerpt:
            "Not all breeds are suited for small spaces. Here are our top picks that thrive in Indian apartments...",
        category: "Breed Guide",
        image: "/images/pets/french-bulldog.png",
        slug: "top-5-apartment-breeds",
    },
    {
        id: "bl2",
        title: "Complete Grooming Guide: From Bath to Blowout",
        excerpt:
            "Everything you need to know about keeping your pet fresh, clean, and looking their absolute best...",
        category: "Grooming",
        image: "/images/grooming/grooming-main.png",
        slug: "grooming-guide",
    },
    {
        id: "bl3",
        title: "Understanding Your Puppy's First 30 Days at Home",
        excerpt:
            "The first month is crucial. Learn how to make your new pup feel safe, loved, and at home...",
        category: "Pet Care",
        image: "/images/pets/golden-retriever.png",
        slug: "puppy-first-30-days",
    },
];

export const promiseCards = [
    {
        icon: "Shield",
        title: "HEALTH CERTIFIED",
        description:
            "Every pet passes our 25-point health check before joining the Naaz Cool family.",
    },
    {
        icon: "Truck",
        title: "PAN INDIA DELIVERY",
        description:
            "Safe, temperature-controlled transport to your doorstep. Your pet's comfort is our priority.",
    },
    {
        icon: "Star",
        title: "PREMIUM BREEDS ONLY",
        description:
            "We hand-pick every breed from certified, ethical breeders. Quality you can trust.",
    },
    {
        icon: "HeadphonesIcon",
        title: "24/7 SUPPORT",
        description:
            "WhatsApp us anytime. Vet advice, care tips, or just to share photos — we're here for you.",
    },
];

export const groomingServices = [
    "Bath & Blow Dry",
    "Full Groom Package",
    "Nail Trim",
    "Ear Cleaning",
    "Teeth Brushing",
];

export const formatPrice = (price: number): string => {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
    }).format(price);
};
