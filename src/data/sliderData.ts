import { SlideItem } from '../components/common/ImageSlider';

export const heroSlides: SlideItem[] = [
  {
    id: 'featured-collection',
    title: 'Handcrafted Elegance',
    subtitle: 'New Collection',
    description: 'Discover our latest collection of handwoven sarees and traditional wear, crafted by skilled artisans.',
    image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=1200&h=600&fit=crop&auto=format',
    href: '/products/women',
    buttonText: 'Shop Collection',
    overlay: true,
  },
  {
    id: 'festive-wear',
    title: 'Festive Splendor',
    subtitle: 'Special Occasion',
    description: 'Celebrate in style with our exquisite festive wear collection featuring rich fabrics and intricate embroidery.',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1200&h=600&fit=crop&auto=format',
    href: '/products/women/festive',
    buttonText: 'Explore Festive',
    overlay: true,
  },
  {
    id: 'artisan-crafts',
    title: 'Artisan Heritage',
    subtitle: 'Handmade Excellence',
    description: 'Support traditional craftsmanship with our curated selection of handmade products by Indian artisans.',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=1200&h=600&fit=crop&auto=format',
    href: '/products/home',
    buttonText: 'Discover Crafts',
    overlay: true,
  },
  {
    id: 'sustainable-fashion',
    title: 'Sustainable Style',
    subtitle: 'Eco-Friendly',
    description: 'Embrace sustainable fashion with our eco-friendly collection made from organic and natural materials.',
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=1200&h=600&fit=crop&auto=format',
    href: '/products/sustainable',
    buttonText: 'Shop Sustainable',
    overlay: true,
  },
];

export const featuredProductSlides: SlideItem[] = [
  {
    id: 'handwoven-sarees',
    title: 'Handwoven Heritage Sarees',
    subtitle: 'Artisan Crafted',
    description: 'Exquisite handwoven sarees that celebrate India\'s rich textile heritage, crafted by master weavers using traditional techniques passed down through generations.',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=1400&h=700&fit=crop&auto=format&q=80',
    href: '/products/women/sarees',
    buttonText: 'Explore Sarees',
  },
  {
    id: 'embroidered-kurtas',
    title: 'Hand Embroidered Kurta Sets',
    subtitle: 'Contemporary Elegance',
    description: 'Beautifully embroidered kurta sets that blend traditional craftsmanship with modern silhouettes, perfect for every celebration.',
    image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=1400&h=700&fit=crop&auto=format&q=80',
    href: '/products/women/kurtas',
    buttonText: 'Shop Kurtas',
  },
  {
    id: 'artisan-home-decor',
    title: 'Artisan Home Collections',
    subtitle: 'Handcrafted Beauty',
    description: 'Transform your living spaces with our curated collection of handcrafted home decor, each piece telling a story of Indian artistry.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1400&h=700&fit=crop&auto=format&q=80',
    href: '/products/home',
    buttonText: 'Discover Home',
  },
  {
    id: 'festive-collection',
    title: 'Festive Celebration Wear',
    subtitle: 'Special Occasions',
    description: 'Celebrate life\'s precious moments in our stunning festive collection, featuring rich fabrics, intricate embellishments, and timeless designs.',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1400&h=700&fit=crop&auto=format&q=80',
    href: '/products/women/festive',
    buttonText: 'Shop Festive',
  },
];

export const testimonialSlides: SlideItem[] = [
  {
    id: 'customer-1',
    title: '"Absolutely Beautiful Quality"',
    subtitle: 'Priya Sharma, Mumbai',
    description: 'The handwork on my saree is incredible. You can feel the love and craftsmanship in every thread. Highly recommended!',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=400&fit=crop&auto=format',
    overlay: false,
  },
  {
    id: 'customer-2',
    title: '"Authentic Indian Craftsmanship"',
    subtitle: 'Rajesh Kumar, Delhi',
    description: 'Finally found a place that offers genuine traditional wear. The quality and authenticity are unmatched.',
    image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&h=400&fit=crop&auto=format',
    overlay: false,
  },
  {
    id: 'customer-3',
    title: '"Perfect for Special Occasions"',
    subtitle: 'Anita Patel, Bangalore',
    description: 'Wore their kurta set to my friends wedding and received so many compliments. The fit and finish are perfect.',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&h=400&fit=crop&auto=format',
    overlay: false,
  },
];

const sliderData = {
  heroSlides,
  featuredProductSlides,
  testimonialSlides,
};

export default sliderData;
