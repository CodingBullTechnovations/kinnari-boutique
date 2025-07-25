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
    id: 'signature-sarees',
    title: 'Signature Saree Collection',
    subtitle: 'Timeless Elegance',
    description: 'Discover our signature collection of handwoven sarees that blend traditional artistry with contemporary design for the modern woman.',
    image: 'https://cdn.pixabay.com/photo/2016/03/27/07/32/indian-1282610_1280.jpg',
    href: '/products/women/sarees',
    buttonText: 'Shop Sarees',
  },
  {
    id: 'designer-lehengas',
    title: 'Designer Lehenga Collection',
    subtitle: 'Bridal Couture',
    description: 'Exquisite designer lehengas crafted with intricate embroidery and premium fabrics, perfect for weddings and special celebrations.',
    image: 'https://cdn.pixabay.com/photo/2019/07/14/17/22/woman-4337438_1280.jpg',
    href: '/products/women/lehengas',
    buttonText: 'View Lehengas',
  },
  {
    id: 'heritage-jewelry',
    title: 'Heritage Jewelry Collection',
    subtitle: 'Antique Treasures',
    description: 'Stunning heritage jewelry pieces inspired by traditional Indian craftsmanship, featuring intricate designs and precious stones.',
    image: 'https://cdn.pixabay.com/photo/2017/08/06/12/52/woman-2592247_1280.jpg',
    href: '/products/jewelry',
    buttonText: 'Explore Jewelry',
  },
  {
    id: 'festive-collection',
    title: 'Festive Special Collection',
    subtitle: 'Celebration Ready',
    description: 'Get ready for every celebration with our festive collection featuring rich fabrics, vibrant colors, and traditional embellishments.',
    image: 'https://cdn.pixabay.com/photo/2020/02/06/09/39/indian-4823717_1280.jpg',
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
