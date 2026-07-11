import pipe1 from "../../assets/images/products/pro-10.jpg";
import pipe2 from "../../assets/images/products/pro-02.jpg";
import pipe3 from "../../assets/images/products/pro-03.jpg";
import pipe4 from "../../assets/images/products/pro-04.jpg";
import pipe5 from "../../assets/images/products/pro-05.jpg";
import pipe6 from "../../assets/images/products/pro-06.jpg";
import pipe7 from "../../assets/images/products/pro-07.jpg";
import pipe8 from "../../assets/images/products/pro-08.jpg";
import pipe9 from "../../assets/images/products/pro-09.jpg";
import pipe10 from "../../assets/images/products/pro-10.jpg";

const products = [
  {
    id: 1,
    name: "RCC Pipes",
    price: "₹500/m",
    rating: 4.8,
    reviews: 124,
    image: pipe1,
    category: "Drainage",
    description:
      "High-strength reinforced concrete pipes designed for drainage and sewer systems.",
  },
  {
    id: 2,
    name: "NP2 Pipes",
    price: "₹400/m",
    rating: 4.7,
    reviews: 98,
    image: pipe2,
    category: "Infrastructure",
    description:
      "Durable NP2 grade concrete pipes suitable for low-pressure applications.",
  },
  {
    id: 3,
    name: "NP3 Pipes",
    price: "₹500/m",
    rating: 4.9,
    reviews: 156,
    image: pipe3,
    category: "Construction",
    description:
      "Heavy-duty NP3 pipes for municipal and industrial infrastructure projects.",
  },
  {
    id: 4,
    name: "Jack Pipes",
    price: "₹550/m",
    rating: 4.8,
    reviews: 76,
    image: pipe4,
    category: "Underground",
    description:
      "Precision-engineered jacking pipes for trenchless construction methods.",
  },
  {
    id: 5,
    name: "Box Culverts",
    price: "₹700/m",
    rating: 4.9,
    reviews: 88,
    image: pipe5,
    category: "Road Projects",
    description:
      "Precast concrete box culverts for highways, railways and drainage systems.",
  },
  {
    id: 6,
    name: "Manholes",
    price: "₹450/m",
    rating: 4.6,
    reviews: 52,
    image: pipe6,
    category: "Utilities",
    description:
      "Robust precast manholes for sewer networks and utility access points.",
  },
  {
    id: 7,
    name: "Precast Products",
    price: "Custom",
    rating: 4.8,
    reviews: 64,
    image: pipe7,
    category: "Custom Solutions",
    description:
      "Tailored precast concrete solutions for specialized construction needs.",
  },
  {
    id: 8,
    name: "Concrete Rings",
    price: "₹350/m",
    rating: 4.7,
    reviews: 45,
    image: pipe8,
    category: "Utilities",
    description:
      "Strong and durable concrete rings for drainage and underground systems.",
  },
  {
    id: 9,
    name: "Drainage Chambers",
    price: "₹650/m",
    rating: 4.9,
    reviews: 83,
    image: pipe9,
    category: "Drainage",
    description:
      "High-quality precast drainage chambers built for long-term durability.",
  },
  {
    id: 10,
    name: "Custom RCC Solutions",
    price: "Quote",
    rating: 5.0,
    reviews: 39,
    image: pipe10,
    category: "Industrial",
    description:
      "Custom engineered RCC products for industrial and infrastructure projects.",
  },
  {
    id: 11,
    name: "Precast Concrete Slabs",
    price: "₹800/m²",
    rating: 4.8,
    reviews: 72,
    image: pipe1,
    category: "Construction",
    description:
      "High-quality precast concrete slabs for various construction applications.",
  },
  {
    id: 12,
    name: "Precast Concrete Beams",
    price: "₹900/m",
    rating: 4.9,
    reviews: 67,
    image: pipe2,
    category: "Construction",
    description:
      "Strong and durable precast concrete beams for various construction applications.",
  },
  {
    id: 13,
    name: "RCC Hume Pipes",
    price: "₹600/m",
    rating: 4.9,
    reviews: 91,
    image: pipe3,
    category: "Drainage",
    description:
      "Premium quality RCC Hume pipes suitable for stormwater, irrigation, and sewer applications.",
  },
  {
    id: 14,
    name: "Precast Compound Wall",
    price: "₹850/m",
    rating: 4.8,
    reviews: 54,
    image: pipe4,
    category: "Boundary",
    description:
      "Durable precast compound wall panels for residential, industrial, and commercial properties.",
  },
  {
    id: 15,
    name: "RCC U-Drains",
    price: "₹750/m",
    rating: 4.9,
    reviews: 78,
    image: pipe5,
    category: "Drainage",
    description:
      "Heavy-duty RCC U-drains designed for efficient surface water drainage systems.",
  },
  {
    id: 16,
    name: "Kerb Stones",
    price: "₹180/piece",
    rating: 4.7,
    reviews: 64,
    image: pipe6,
    category: "Road Projects",
    description:
      "High-strength precast kerb stones for roads, pavements, and landscaping projects.",
  },
  {
    id: 17,
    name: "Paver Blocks",
    price: "₹45/piece",
    rating: 4.8,
    reviews: 132,
    image: pipe7,
    category: "Landscaping",
    description:
      "Premium concrete paver blocks available in various shapes, colors, and finishes.",
  },
  {
    id: 18,
    name: "Interlocking Blocks",
    price: "₹55/piece",
    rating: 4.9,
    reviews: 101,
    image: pipe8,
    category: "Infrastructure",
    description:
      "Heavy-duty interlocking concrete blocks for industrial yards, roads, and parking areas.",
  },
  {
    id: 19,
    name: "Cable Trench Covers",
    price: "₹950/piece",
    rating: 4.8,
    reviews: 48,
    image: pipe9,
    category: "Utilities",
    description:
      "Precast cable trench covers engineered for electrical and utility infrastructure projects.",
  },
  {
    id: 20,
    name: "RCC Septic Tanks",
    price: "₹15,000/unit",
    rating: 4.9,
    reviews: 56,
    image: pipe10,
    category: "Sanitation",
    description:
      "Leak-proof precast RCC septic tanks manufactured for residential and commercial use.",
  },
  {
    id: 21,
    name: "Catch Pit Chambers",
    price: "₹3,200/unit",
    rating: 4.8,
    reviews: 42,
    image: pipe1,
    category: "Drainage",
    description:
      "Precast catch pit chambers for effective rainwater collection and drainage systems.",
  },
  {
    id: 22,
    name: "RCC Cover Slabs",
    price: "₹700/piece",
    rating: 4.7,
    reviews: 51,
    image: pipe2,
    category: "Utilities",
    description:
      "Heavy-duty RCC cover slabs for manholes, chambers, and utility access points.",
  },
  {
    id: 23,
    name: "Concrete Jersey Barriers",
    price: "₹2,800/piece",
    rating: 4.9,
    reviews: 69,
    image: pipe3,
    category: "Road Safety",
    description:
      "Precast concrete Jersey barriers designed for highways, traffic management, and construction sites.",
  },
  {
    id: 24,
    name: "RCC Lintels",
    price: "₹650/piece",
    rating: 4.8,
    reviews: 57,
    image: pipe4,
    category: "Construction",
    description:
      "Factory-made RCC lintels providing superior strength and faster installation.",
  },
  {
    id: 25,
    name: "Precast Staircase",
    price: "Quote",
    rating: 4.9,
    reviews: 37,
    image: pipe5,
    category: "Construction",
    description:
      "Custom precast staircase solutions for residential, commercial, and industrial buildings.",
  },
  {
    id: 26,
    name: "Retaining Wall Panels",
    price: "₹1,200/m²",
    rating: 4.8,
    reviews: 46,
    image: pipe6,
    category: "Infrastructure",
    description:
      "Precast retaining wall panels designed for soil retention and infrastructure development.",
  },
  {
    id: 27,
    name: "RCC Benchings",
    price: "₹4,500/unit",
    rating: 4.7,
    reviews: 28,
    image: pipe7,
    category: "Landscape",
    description:
      "Elegant and durable RCC benches suitable for parks, gardens, schools, and public spaces.",
  },
  {
    id: 28,
    name: "Concrete Bollards",
    price: "₹1,500/unit",
    rating: 4.8,
    reviews: 35,
    image: pipe8,
    category: "Road Safety",
    description:
      "High-strength precast concrete bollards for pedestrian safety and traffic control.",
  },
  {
    id: 29,
    name: "RCC Water Storage Tank",
    price: "Quote",
    rating: 5.0,
    reviews: 41,
    image: pipe9,
    category: "Water Management",
    description:
      "Custom-built RCC water storage tanks for residential, agricultural, and industrial applications.",
  },
  {
    id: 30,
    name: "Precast Drain Covers",
    price: "₹450/piece",
    rating: 4.8,
    reviews: 62,
    image: pipe10,
    category: "Drainage",
    description:
      "Heavy-duty precast drain covers designed for long-lasting performance and safety.",
  },
];

export default products;
