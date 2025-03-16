export const products = [
  {
    id: 1,
    title: "Apple MacBook Pro 14-inch",
    price: 1999.99,
    rating: 4.8,
    reviews: 2456,
    image: "https://picsum.photos/id/1/400/400",
    category: "Electronics",
    description: "Latest M2 Pro chip, 16GB RAM, 512GB SSD"
  },
  {
    id: 2,
    title: "Wireless Noise-Cancelling Headphones",
    price: 299.99,
    rating: 4.7,
    reviews: 1823,
    image: "https://picsum.photos/id/2/400/400",
    category: "Electronics",
    description: "40h battery life, premium sound quality"
  },
  // ... adding 38 more products with different categories and details
].concat(Array.from({ length: 38 }, (_, i) => ({
  id: i + 3,
  title: `Product ${i + 3}`,
  price: Math.round(Math.random() * 1000 * 100) / 100,
  rating: Math.round((3.5 + Math.random() * 1.5) * 10) / 10,
  reviews: Math.floor(Math.random() * 2000),
  image: `https://picsum.photos/id/${i + 3}/400/400`,
  category: ["Electronics", "Books", "Home & Kitchen", "Fashion", "Sports", "Beauty"][Math.floor(Math.random() * 6)],
  description: `High-quality product with amazing features and specifications.`
})));
