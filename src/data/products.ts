import { Product, ProductCategory } from '../types';

// Product Categories
export const categories: ProductCategory[] = [
  {
    id: 'women',
    name: "Women's Wear",
    slug: 'women',
    description: 'Elegant and traditional clothing for women',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=400&fit=crop&auto=format',
  },
  {
    id: 'men',
    name: "Men's Wear",
    slug: 'men',
    description: 'Traditional and contemporary clothing for men',
    image: 'https://images.unsplash.com/photo-1506629905607-d9c8e3b8e6e2?w=600&h=400&fit=crop&auto=format',
  },
  {
    id: 'home',
    name: 'Home & Living',
    slug: 'home',
    description: 'Handcrafted home decor and lifestyle products',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop&auto=format',
  },
];

// Sample Products
export const products: Product[] = [
  // Women's Wear
  {
    id: 'w001',
    name: 'Elegant Embroidered Kurta Set',
    description: 'Beautiful hand-embroidered kurta with matching dupatta and palazzo pants. Perfect for festive occasions.',
    price: 2499,
    originalPrice: 3499,
    images: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&h=800&fit=crop&auto=format',
    ],
    category: categories[0],
    subcategory: 'Kurta Sets',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Royal Blue', 'Emerald Green', 'Deep Red'],
    inStock: true,
    featured: true,
    rating: 4.5,
    reviewCount: 128,
    tags: ['embroidered', 'festive', 'traditional'],
    craftType: 'Hand Embroidery',
    artisan: 'Rajasthani Artisans',
  },
  {
    id: 'w002',
    name: 'Handwoven Silk Saree',
    description: 'Exquisite handwoven silk saree with traditional motifs. A timeless piece for special occasions.',
    price: 4999,
    originalPrice: 6999,
    images: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=800&fit=crop&auto=format',
    ],
    category: categories[0],
    subcategory: 'Sarees',
    sizes: ['One Size'],
    colors: ['Golden Yellow', 'Deep Purple', 'Maroon'],
    inStock: true,
    featured: true,
    rating: 4.8,
    reviewCount: 89,
    tags: ['silk', 'handwoven', 'traditional', 'wedding'],
    craftType: 'Handloom Weaving',
    artisan: 'Banarasi Weavers',
  },
  {
    id: 'w003',
    name: 'Block Print Cotton Dress',
    description: 'Comfortable cotton dress with beautiful block print patterns inspired by traditional Rajasthani motifs. Perfect for casual and semi-formal occasions.',
    price: 1799,
    images: [
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=800&fit=crop&auto=format',
    ],
    category: categories[0],
    subcategory: 'Dresses',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Indigo Blue', 'Rust Orange', 'Forest Green'],
    inStock: true,
    featured: false,
    rating: 4.3,
    reviewCount: 67,
    tags: ['cotton', 'block print', 'casual', 'rajasthani'],
    craftType: 'Block Printing',
    artisan: 'Rajasthani Block Printers',
  },
  {
    id: 'w004',
    name: 'Chanderi Silk Anarkali',
    description: 'Elegant Chanderi silk Anarkali with intricate zari work and traditional Indian embroidery. A perfect blend of grace and tradition.',
    price: 3299,
    originalPrice: 4499,
    images: [
      'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=800&fit=crop&auto=format',
    ],
    category: categories[0],
    subcategory: 'Anarkali',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Royal Purple', 'Emerald Green', 'Golden Yellow'],
    inStock: true,
    featured: true,
    rating: 4.7,
    reviewCount: 92,
    tags: ['silk', 'anarkali', 'festive', 'zari work'],
    craftType: 'Zari Embroidery',
    artisan: 'Chanderi Weavers',
  },

  // Men's Wear
  {
    id: 'm001',
    name: 'Classic Cotton Kurta',
    description: 'Comfortable and stylish cotton kurta for men. Perfect for festivals and casual occasions.',
    price: 1299,
    originalPrice: 1799,
    images: [
      'https://images.unsplash.com/photo-1506629905607-d9c8e3b8e6e2?w=600&h=800&fit=crop&auto=format',
    ],
    category: categories[1],
    subcategory: 'Kurtas',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Cream', 'Light Blue', 'Olive Green'],
    inStock: true,
    featured: true,
    rating: 4.4,
    reviewCount: 156,
    tags: ['cotton', 'casual', 'comfortable'],
    craftType: 'Traditional Tailoring',
  },
  {
    id: 'm002',
    name: 'Handwoven Silk Shirt',
    description: 'Premium handwoven silk shirt with subtle patterns. Ideal for formal and semi-formal occasions.',
    price: 2299,
    images: [
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&h=800&fit=crop&auto=format',
    ],
    category: categories[1],
    subcategory: 'Shirts',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Navy Blue', 'Charcoal Grey', 'Wine Red'],
    inStock: true,
    featured: false,
    rating: 4.6,
    reviewCount: 43,
    tags: ['silk', 'formal', 'handwoven'],
    craftType: 'Handloom Weaving',
  },

  // Home & Living
  {
    id: 'h001',
    name: 'Handcrafted Cushion Covers Set',
    description: 'Set of 4 beautiful handcrafted cushion covers with traditional embroidery. Perfect for home decoration.',
    price: 899,
    originalPrice: 1299,
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=800&fit=crop&auto=format',
    ],
    category: categories[2],
    subcategory: 'Cushions',
    sizes: ['16x16 inches', '18x18 inches'],
    colors: ['Multi-color', 'Blue & Gold', 'Red & Green'],
    inStock: true,
    featured: true,
    rating: 4.2,
    reviewCount: 234,
    tags: ['embroidered', 'home decor', 'traditional'],
    craftType: 'Hand Embroidery',
    artisan: 'Gujarat Artisans',
  },
  {
    id: 'h002',
    name: 'Handwoven Table Runner',
    description: 'Elegant handwoven table runner with traditional patterns. Adds a touch of elegance to your dining table.',
    price: 649,
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=800&fit=crop&auto=format',
    ],
    category: categories[2],
    subcategory: 'Table Linen',
    sizes: ['72 inches', '90 inches'],
    colors: ['Golden Brown', 'Deep Red', 'Forest Green'],
    inStock: true,
    featured: false,
    rating: 4.0,
    reviewCount: 78,
    tags: ['handwoven', 'table decor', 'traditional'],
    craftType: 'Handloom Weaving',
  },
  {
    id: 'h003',
    name: 'Brass Decorative Diya Set',
    description: 'Beautiful set of handcrafted brass diyas with intricate designs. Perfect for festivals and special occasions.',
    price: 899,
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=800&fit=crop&auto=format',
    ],
    category: categories[2],
    subcategory: 'Decorative Items',
    sizes: ['Set of 6', 'Set of 12'],
    colors: ['Antique Brass', 'Golden Finish'],
    inStock: true,
    featured: true,
    rating: 4.5,
    reviewCount: 156,
    tags: ['brass', 'diya', 'festival', 'traditional'],
    craftType: 'Brass Work',
    artisan: 'Moradabad Artisans',
  },
];

// Featured Products
export const featuredProducts = products.filter(product => product.featured);

// New Arrivals (last 3 products)
export const newArrivals = products.slice(-3);

// Sale Products (products with originalPrice)
export const saleProducts = products.filter(product => product.originalPrice);

// Get products by category
export const getProductsByCategory = (categorySlug: string) => {
  return products.filter(product => product.category.slug === categorySlug);
};

// Get products by subcategory
export const getProductsBySubcategory = (categorySlug: string, subcategoryName: string) => {
  return products.filter(product =>
    product.category.slug === categorySlug &&
    product.subcategory === subcategoryName
  );
};

// Get product by ID
export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};
