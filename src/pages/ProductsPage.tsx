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
} from '@mui/material';
import { ExpandMore, FilterList, Clear } from '@mui/icons-material';
import { useParams, useSearchParams } from 'react-router-dom';
import ProductCard from '../components/product/ProductCard';
import BreadcrumbNav from '../components/common/BreadcrumbNav';
import { products, categories, getProductsByCategory } from '../data/products';
import { Product } from '../types';

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
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Enhanced Breadcrumbs */}
      <BreadcrumbNav />

      {/* Enhanced Page Header */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: 600,
            color: theme.palette.primary.main,
            mb: 2,
            fontSize: { xs: '2rem', md: '2.75rem' },
          }}
        >
          {pageTitle}
        </Typography>
        {currentCategory?.description && (
          <Typography variant="h6" color="text.secondary" sx={{ lineHeight: 1.6 }}>
            {currentCategory.description}
          </Typography>
        )}
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {filteredProducts.length} products found
        </Typography>
      </Box>

      {/* Enhanced Filters and Sorting */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {/* Filters Sidebar */}
        <Grid size={{ xs: 12, md: 3 }}>
          <Paper sx={{ p: 3, borderRadius: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, display: 'flex', alignItems: 'center' }}>
                <FilterList sx={{ mr: 1 }} />
                Filters
              </Typography>
              <Button
                size="small"
                onClick={clearAllFilters}
                startIcon={<Clear />}
                sx={{ fontSize: '0.75rem' }}
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

        {/* Products Section */}
        <Grid size={{ xs: 12, md: 9 }}>
          {/* Sort and View Options */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="body2" color="text.secondary">
              Showing {filteredProducts.length} products
            </Typography>
            <FormControl size="small" sx={{ minWidth: 200 }}>
              <InputLabel>Sort By</InputLabel>
              <Select
                value={sortBy}
                label="Sort By"
                onChange={(e) => setSortBy(e.target.value)}
              >
                <MenuItem value="name">Name (A-Z)</MenuItem>
                <MenuItem value="price-low">Price (Low to High)</MenuItem>
                <MenuItem value="price-high">Price (High to Low)</MenuItem>
                <MenuItem value="rating">Rating</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* Products Grid */}
          <Grid container spacing={3}>
            {filteredProducts.map((product) => (
              <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={product.id}>
                <ProductCard
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
