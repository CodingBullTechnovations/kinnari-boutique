import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Grid,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Paper,
  Slider,
  TextField,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
  Card,
  CardContent,
  IconButton,
  Rating,
} from '@mui/material';
import { 
  ExpandMore, 
  FilterList, 
  Clear, 
  Favorite, 
  FavoriteBorder, 
  ShoppingCart,
  Visibility,
} from '@mui/icons-material';
import { useParams, useSearchParams } from 'react-router-dom';
import ProductCard from '../components/product/ProductCard';
import BreadcrumbNav from '../components/common/BreadcrumbNav';
import LazyImage from '../components/common/LazyImage';
import { products, categories, getProductsByCategory } from '../data/products';
import { Product } from '../types';
import { Link } from 'react-router-dom';

// Subcategory mapping for URL slugs to display names
const subcategoryMapping: { [key: string]: string } = {
  'kurtas': 'Kurta Sets',
  'dresses': 'Dresses',
  'sarees': 'Sarees',
  'tops': 'Tops & Blouses',
  'coord-sets': 'Co-ord Sets',
  'lehengas': 'Lehengas',
  'anarkali': 'Anarkali',
  'shirts': 'Shirts',
  'jackets': 'Nehru Jackets',
  'accessories': 'Accessories',
  'decor': 'Home Decor',
  'kitchen': 'Kitchen & Dining',
  'furnishing': 'Furnishing',
  'lighting': 'Lighting',
  'festive': 'Festive',
  'formal': 'Formal',
  'featured': 'Featured',
  'new': 'New Arrivals',
  'sale': 'Sale'
};

// Luxury Square Product Card - Perfect for Rich Indian Ladies
interface LuxurySquareProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onToggleFavorite?: (product: Product) => void;
  isFavorite?: boolean;
}

const LuxurySquareProductCard: React.FC<LuxurySquareProductCardProps> = ({
  product,
  onAddToCart,
  onToggleFavorite,
  isFavorite = false,
}) => {
  const theme = useTheme();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onAddToCart?.(product);
  };

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onToggleFavorite?.(product);
  };

  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Card
      component={Link}
      to={`/product/${product.id}`}
      sx={{
        textDecoration: 'none',
        color: 'inherit',
        position: 'relative',
        borderRadius: 4,
        overflow: 'hidden',
        transition: 'all 0.4s ease-in-out',
        boxShadow: `0 6px 24px rgba(114, 47, 55, 0.15)`,
        background: `linear-gradient(135deg, #FAF8F5, #F7F3F0)`,
        border: `1px solid rgba(212, 175, 55, 0.3)`,
        '&:hover': {
          transform: 'translateY(-8px) scale(1.02)',
          boxShadow: `0 16px 48px rgba(114, 47, 55, 0.25)`,
          '& .product-overlay': {
            opacity: 1,
          },
          '& .product-image': {
            transform: 'scale(1.1)',
          },
        },
      }}
    >
      {/* Discount Badge */}
      {discountPercentage > 0 && (
        <Chip
          label={`${discountPercentage}% OFF`}
          sx={{
            position: 'absolute',
            top: 8,
            left: 8,
            zIndex: 2,
            fontWeight: 700,
            fontSize: '0.75rem',
            background: `linear-gradient(135deg, #D4AF37, #B8941F)`,
            color: 'white',
            boxShadow: `0 2px 8px rgba(212, 175, 55, 0.4)`,
          }}
        />
      )}

      {/* Favorite Button */}
      <IconButton
        onClick={handleToggleFavorite}
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
          zIndex: 2,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(4px)',
          '&:hover': {
            backgroundColor: 'white',
            transform: 'scale(1.1)',
          },
          transition: 'all 0.3s ease-in-out',
        }}
      >
        {isFavorite ? (
          <Favorite sx={{ color: theme.palette.secondary.main }} />
        ) : (
          <FavoriteBorder sx={{ color: theme.palette.primary.main }} />
        )}
      </IconButton>

      {/* Perfect Square Image for Rich Indian Ladies */}
      <Box 
        sx={{ 
          position: 'relative', 
          width: '100%',
          aspectRatio: '1/1', // Perfect square
          overflow: 'hidden',
        }}
      >
        <LazyImage
          className="product-image"
          src={product.images[0]}
          alt={product.name}
          width={400}
          height={400}
          fallbackSrc={product.images[1]}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.4s ease-in-out',
          }}
        />
        
        {/* Elegant Overlay */}
        <Box
          className="product-overlay"
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            background: `linear-gradient(transparent, rgba(0,0,0,0.6))`,
            opacity: 0,
            transition: 'opacity 0.3s ease-in-out',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            p: 2,
          }}
        >
          <IconButton
            onClick={handleAddToCart}
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: 'white',
              '&:hover': {
                backgroundColor: theme.palette.primary.dark,
                transform: 'scale(1.1)',
              },
              transition: 'all 0.3s ease-in-out',
            }}
          >
            <ShoppingCart />
          </IconButton>
        </Box>
      </Box>

      {/* Elegant Product Details */}
      <CardContent sx={{ p: 3 }}>
        {/* Heritage Craft Type */}
        {product.craftType && (
          <Chip
            label={product.craftType}
            size="small"
            sx={{
              mb: 2,
              fontSize: '0.75rem',
              fontWeight: 600,
              color: theme.palette.secondary.main,
              backgroundColor: `${theme.palette.secondary.main}10`,
              border: `1px solid ${theme.palette.secondary.main}30`,
              fontFamily: "'Lora', serif",
            }}
          />
        )}

        {/* Elegant Product Name */}
        <Typography
          variant="h6"
          component="h3"
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 600,
            mb: 1,
            lineHeight: 1.3,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            color: theme.palette.text.primary,
            fontSize: '1.1rem',
          }}
        >
          {product.name}
        </Typography>

        {/* Single Line Description - Perfect for Rich Ladies */}
        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            mb: 2,
            lineHeight: 1.4,
            fontFamily: "'Lora', serif",
            fontStyle: 'italic',
            display: '-webkit-box',
            WebkitLineClamp: 1, // Only one line
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {product.description}
        </Typography>

        {/* Refined Rating */}
        {product.rating && (
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Rating
              value={product.rating}
              precision={0.1}
              size="small"
              readOnly
              sx={{
                '& .MuiRating-iconFilled': {
                  color: theme.palette.secondary.main,
                },
              }}
            />
            <Typography 
              variant="caption" 
              color="text.secondary" 
              sx={{ ml: 1, fontFamily: "'Lora', serif" }}
            >
              ({product.reviewCount})
            </Typography>
          </Box>
        )}

        {/* Luxurious Price Display */}
        <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1 }}>
          <Typography
            variant="h6"
            component="span"
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              color: theme.palette.primary.main,
              fontSize: '1.3rem',
            }}
          >
            ₹{product.price.toLocaleString()}
          </Typography>
          {product.originalPrice && (
            <Typography
              variant="body2"
              component="span"
              sx={{
                textDecoration: 'line-through',
                color: 'text.secondary',
                fontFamily: "'Lora', serif",
              }}
            >
              ₹{product.originalPrice.toLocaleString()}
            </Typography>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

const ProductsPage: React.FC = () => {
  const theme = useTheme();
  const { category, subcategory } = useParams<{ category: string; subcategory?: string }>();
  const [searchParams] = useSearchParams();

  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [sortBy, setSortBy] = useState<string>('name');
  const [priceRange, setPriceRange] = useState<number[]>([0, 10000]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>(searchParams.get('search') || '');

  // Get all available sizes and colors for filters
  const allSizes = Array.from(new Set(products.flatMap(p => p.sizes || [])));
  const allColors = Array.from(new Set(products.flatMap(p => p.colors || [])));

  useEffect(() => {
    let filtered = category ? getProductsByCategory(category) : products;

    // Apply subcategory filter if specified
    if (subcategory && subcategoryMapping[subcategory]) {
      const subcategoryName = subcategoryMapping[subcategory];
      filtered = filtered.filter(product =>
        product.subcategory === subcategoryName ||
        // Handle special cases for new arrivals and sale
        (subcategory === 'new' && product.featured) ||
        (subcategory === 'sale' && product.originalPrice) ||
        (subcategory === 'festive' && product.tags?.includes('festive')) ||
        (subcategory === 'formal' && product.tags?.includes('formal'))
      );
    }

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.craftType?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply price range filter
    filtered = filtered.filter(product =>
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Apply size filter
    if (selectedSizes.length > 0) {
      filtered = filtered.filter(product =>
        product.sizes?.some(size => selectedSizes.includes(size))
      );
    }

    // Apply color filter
    if (selectedColors.length > 0) {
      filtered = filtered.filter(product =>
        product.colors?.some(color => selectedColors.includes(color))
      );
    }

    // Apply sorting
    filtered = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    setFilteredProducts(filtered);
  }, [category, subcategory, sortBy, searchTerm, priceRange, selectedSizes, selectedColors]);

  const handleAddToCart = (product: Product) => {
    console.log('Add to cart:', product);
    // TODO: Implement cart functionality
  };

  const handleToggleFavorite = (product: Product) => {
    console.log('Toggle favorite:', product);
    // TODO: Implement favorites functionality
  };

  const handleSizeToggle = (size: string) => {
    setSelectedSizes(prev =>
      prev.includes(size)
        ? prev.filter(s => s !== size)
        : [...prev, size]
    );
  };

  const handleColorToggle = (color: string) => {
    setSelectedColors(prev =>
      prev.includes(color)
        ? prev.filter(c => c !== color)
        : [...prev, color]
    );
  };

  const clearAllFilters = () => {
    setPriceRange([0, 10000]);
    setSelectedSizes([]);
    setSelectedColors([]);
    setSearchTerm('');
  };

  const currentCategory = categories.find(cat => cat.slug === category);
  const currentSubcategory = subcategory ? subcategoryMapping[subcategory] : null;

  const pageTitle = searchTerm
    ? `Search results for "${searchTerm}"`
    : currentSubcategory
      ? currentSubcategory
      : currentCategory
        ? currentCategory.name
        : 'All Products';

  return (
    <Container maxWidth="xl" sx={{ py: 6 }}>
      {/* Enhanced Breadcrumbs */}
      <BreadcrumbNav />

      {/* Luxurious Page Header - Irresistible for Rich Indian Ladies */}
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontFamily: "'Dancing Script', cursive",
            fontWeight: 700,
            color: theme.palette.primary.main,
            mb: 3,
            fontSize: { xs: '3rem', md: '4.5rem' },
            letterSpacing: '0.02em',
            transform: 'rotate(-1deg)',
            textShadow: `0 4px 20px ${theme.palette.primary.main}20`,
          }}
        >
          {pageTitle}
        </Typography>
        {currentCategory?.description && (
          <Typography 
            variant="h6" 
            sx={{ 
              color: 'text.secondary',
              lineHeight: 1.7,
              fontFamily: "'Playfair Display', serif",
              fontStyle: 'italic',
              maxWidth: '600px',
              mx: 'auto',
              mb: 2,
            }}
          >
            "{currentCategory.description}"
          </Typography>
        )}
        <Typography 
          variant="h6" 
          sx={{ 
            color: theme.palette.secondary.main,
            fontFamily: "'Lora', serif",
            fontWeight: 600,
          }}
        >
          {filteredProducts.length} Exquisite Creations Await
        </Typography>
      </Box>

      {/* Luxurious Filters and Sorting - Optimized for Rich Indian Ladies */}
      <Grid container spacing={4} sx={{ mb: 6 }}>
        {/* Refined Filters Sidebar - Moved to far left for maximum space */}
        <Grid size={{ xs: 12, md: 2.5 }}>
          <Paper sx={{ 
            p: 4, 
            borderRadius: 4,
            background: `linear-gradient(135deg, #FAF8F5, #F7F3F0)`,
            boxShadow: '0 8px 32px rgba(114, 47, 55, 0.1)',
            border: `1px solid rgba(212, 175, 55, 0.2)`,
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 4 }}>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 600, 
                  display: 'flex', 
                  alignItems: 'center',
                  color: theme.palette.primary.main,
                  fontSize: '1.3rem',
                }}
              >
                <FilterList sx={{ mr: 1 }} />
                Refine Selection
              </Typography>
              <Button
                size="small"
                onClick={clearAllFilters}
                startIcon={<Clear />}
                sx={{ 
                  fontSize: '0.75rem',
                  fontFamily: "'Lora', serif",
                  color: theme.palette.secondary.main,
                }}
              >
                Clear All
              </Button>
            </Box>

            {/* Search Filter */}
            {!searchParams.get('search') && (
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
                  Search
                </Typography>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  sx={{ mb: 2 }}
                />
              </Box>
            )}

            {/* Price Range Filter */}
            <Accordion defaultExpanded sx={{ boxShadow: 'none', '&:before': { display: 'none' } }}>
              <AccordionSummary expandIcon={<ExpandMore />} sx={{ px: 0 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                  Price Range
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 0 }}>
                <Slider
                  value={priceRange}
                  onChange={(_, newValue) => setPriceRange(newValue as number[])}
                  valueLabelDisplay="auto"
                  min={0}
                  max={10000}
                  step={100}
                  valueLabelFormat={(value) => `₹${value}`}
                  sx={{ mb: 2 }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="caption">₹{priceRange[0]}</Typography>
                  <Typography variant="caption">₹{priceRange[1]}</Typography>
                </Box>
              </AccordionDetails>
            </Accordion>

            {/* Size Filter */}
            {allSizes.length > 0 && (
              <Accordion sx={{ boxShadow: 'none', '&:before': { display: 'none' } }}>
                <AccordionSummary expandIcon={<ExpandMore />} sx={{ px: 0 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                    Size
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ px: 0 }}>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {allSizes.map((size) => (
                      <Chip
                        key={size}
                        label={size}
                        size="small"
                        variant={selectedSizes.includes(size) ? 'filled' : 'outlined'}
                        onClick={() => handleSizeToggle(size)}
                        color="primary"
                      />
                    ))}
                  </Box>
                </AccordionDetails>
              </Accordion>
            )}

            {/* Color Filter */}
            {allColors.length > 0 && (
              <Accordion sx={{ boxShadow: 'none', '&:before': { display: 'none' } }}>
                <AccordionSummary expandIcon={<ExpandMore />} sx={{ px: 0 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                    Color
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ px: 0 }}>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {allColors.map((color) => (
                      <Chip
                        key={color}
                        label={color}
                        size="small"
                        variant={selectedColors.includes(color) ? 'filled' : 'outlined'}
                        onClick={() => handleColorToggle(color)}
                        color="secondary"
                      />
                    ))}
                  </Box>
                </AccordionDetails>
              </Accordion>
            )}
          </Paper>
        </Grid>

        {/* Elegant Products Section - Maximum Screen Utilization */}
        <Grid size={{ xs: 12, md: 9.5 }}>
          {/* Refined Sort and View Options */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
            <Typography 
              variant="h6" 
              sx={{ 
                fontFamily: "'Playfair Display', serif",
                fontWeight: 600,
                color: 'text.primary',
                fontSize: '1.2rem',
              }}
            >
              Showing {filteredProducts.length} Exquisite Pieces
            </Typography>
            <FormControl size="small" sx={{ minWidth: 220 }}>
              <InputLabel sx={{ fontFamily: "'Lora', serif" }}>Sort By</InputLabel>
              <Select
                value={sortBy}
                label="Sort By"
                onChange={(e) => setSortBy(e.target.value)}
                sx={{
                  fontFamily: "'Lora', serif",
                  borderRadius: 3,
                }}
              >
                <MenuItem value="name">Name (A-Z)</MenuItem>
                <MenuItem value="price-low">Price (Low to High)</MenuItem>
                <MenuItem value="price-high">Price (High to Low)</MenuItem>
                <MenuItem value="rating">Rating</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* Luxurious Square Products Grid - Perfect for Rich Indian Ladies */}
          <Grid container spacing={3}>
            {filteredProducts.map((product) => (
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={product.id}>
                <LuxurySquareProductCard
                  product={product}
                  onAddToCart={handleAddToCart}
                  onToggleFavorite={handleToggleFavorite}
                />
              </Grid>
            ))}
          </Grid>

          {/* No Products Message */}
          {filteredProducts.length === 0 && (
            <Box sx={{ textAlign: 'center', py: 8 }}>
              <Typography variant="h5" color="text.secondary" sx={{ mb: 2 }}>
                No products found
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                Try adjusting your filters or browse other categories.
              </Typography>
              <Button
                variant="outlined"
                onClick={clearAllFilters}
                startIcon={<Clear />}
              >
                Clear All Filters
              </Button>
            </Box>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductsPage;
