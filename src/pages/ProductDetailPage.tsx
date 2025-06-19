import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Grid,
  Box,
  Button,
  Chip,
  Rating,
  Divider,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Card,
  CardMedia,
  Breadcrumbs,
  Link,
  useTheme,
} from '@mui/material';
import {
  Favorite,
  FavoriteBorder,
  Share,
  ShoppingCart,
  Add,
  Remove,
  ZoomIn,
} from '@mui/icons-material';
import { useParams, useNavigate } from 'react-router-dom';
import ProductCard from '../components/product/ProductCard';
import { getProductById, products } from '../data/products';
import { Product } from '../types';

const ProductDetailPage: React.FC = () => {
  const theme = useTheme();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (id) {
      const foundProduct = getProductById(id);
      if (foundProduct) {
        setProduct(foundProduct);
        setSelectedSize(foundProduct.sizes?.[0] || '');
        setSelectedColor(foundProduct.colors?.[0] || '');

        // Get related products from same category
        const related = products
          .filter(p => p.category.id === foundProduct.category.id && p.id !== foundProduct.id)
          .slice(0, 4);
        setRelatedProducts(related);
      } else {
        navigate('/products');
      }
    }
  }, [id, navigate]);

  if (!product) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4">Product not found</Typography>
      </Container>
    );
  }

  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(1, quantity + change));
  };

  const handleAddToCart = () => {
    console.log('Add to cart:', {
      product,
      quantity,
      selectedSize,
      selectedColor,
    });
    // TODO: Implement cart functionality
  };

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    // TODO: Implement favorites functionality
  };

  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Breadcrumbs */}
      <Breadcrumbs sx={{ mb: 3 }}>
        <Link href="/" color="inherit">
          Home
        </Link>
        <Link href="/products" color="inherit">
          Products
        </Link>
        <Link href={`/products/${product.category.slug}`} color="inherit">
          {product.category.name}
        </Link>
        <Typography color="text.primary">{product.name}</Typography>
      </Breadcrumbs>

      <Grid container spacing={4}>
        {/* Product Images */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box>
            {/* Main Image */}
            <Card sx={{ mb: 2, position: 'relative' }}>
              <CardMedia
                component="img"
                height="600"
                image={product.images[selectedImage]}
                alt={product.name}
                sx={{ objectFit: 'cover' }}
              />
              <IconButton
                sx={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                }}
              >
                <ZoomIn />
              </IconButton>
            </Card>

            {/* Image Thumbnails */}
            {product.images.length > 1 && (
              <Grid container spacing={1}>
                {product.images.map((image, index) => (
                  <Grid size={{ xs: 3 }} key={index}>
                    <Card
                      sx={{
                        cursor: 'pointer',
                        border: selectedImage === index ? 2 : 0,
                        borderColor: theme.palette.primary.main,
                      }}
                      onClick={() => setSelectedImage(index)}
                    >
                      <CardMedia
                        component="img"
                        height="100"
                        image={image}
                        alt={`${product.name} ${index + 1}`}
                        sx={{ objectFit: 'cover' }}
                      />
                    </Card>
                  </Grid>
                ))}
              </Grid>
            )}
          </Box>
        </Grid>

        {/* Product Information */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box>
            {/* Product Title and Rating */}
            <Typography
              variant="h4"
              component="h1"
              sx={{
                fontWeight: 600,
                mb: 2,
                color: theme.palette.text.primary,
              }}
            >
              {product.name}
            </Typography>

            {product.rating && (
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Rating value={product.rating} precision={0.1} readOnly />
                <Typography variant="body2" sx={{ ml: 1, color: 'text.secondary' }}>
                  ({product.reviewCount} reviews)
                </Typography>
              </Box>
            )}

            {/* Price */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  color: theme.palette.primary.main,
                }}
              >
                ₹{product.price.toLocaleString()}
              </Typography>
              {product.originalPrice && (
                <>
                  <Typography
                    variant="h6"
                    sx={{
                      textDecoration: 'line-through',
                      color: 'text.secondary',
                    }}
                  >
                    ₹{product.originalPrice.toLocaleString()}
                  </Typography>
                  <Chip
                    label={`${discountPercentage}% OFF`}
                    color="error"
                    size="small"
                    sx={{ fontWeight: 600 }}
                  />
                </>
              )}
            </Box>

            {/* Craft Type and Artisan */}
            <Box sx={{ mb: 3 }}>
              {product.craftType && (
                <Chip
                  label={`Craft: ${product.craftType}`}
                  variant="outlined"
                  sx={{
                    mr: 1,
                    mb: 1,
                    color: theme.palette.secondary.main,
                    borderColor: theme.palette.secondary.main,
                  }}
                />
              )}
              {product.artisan && (
                <Chip
                  label={`By: ${product.artisan}`}
                  variant="outlined"
                  sx={{
                    mr: 1,
                    mb: 1,
                    color: theme.palette.primary.main,
                    borderColor: theme.palette.primary.main,
                  }}
                />
              )}
            </Box>

            {/* Description */}
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                lineHeight: 1.7,
                color: 'text.secondary',
              }}
            >
              {product.description}
            </Typography>

            <Divider sx={{ my: 3 }} />

            {/* Size Selection */}
            {product.sizes && product.sizes.length > 0 && (
              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Size
                </Typography>
                <FormControl size="small" sx={{ minWidth: 120 }}>
                  <InputLabel>Select Size</InputLabel>
                  <Select
                    value={selectedSize}
                    label="Select Size"
                    onChange={(e) => setSelectedSize(e.target.value)}
                  >
                    {product.sizes.map((size) => (
                      <MenuItem key={size} value={size}>
                        {size}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            )}

            {/* Color Selection */}
            {product.colors && product.colors.length > 0 && (
              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Color
                </Typography>
                <FormControl size="small" sx={{ minWidth: 150 }}>
                  <InputLabel>Select Color</InputLabel>
                  <Select
                    value={selectedColor}
                    label="Select Color"
                    onChange={(e) => setSelectedColor(e.target.value)}
                  >
                    {product.colors.map((color) => (
                      <MenuItem key={color} value={color}>
                        {color}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            )}

            {/* Quantity Selection */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                Quantity
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconButton
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                  sx={{ border: 1, borderColor: 'divider' }}
                >
                  <Remove />
                </IconButton>
                <Typography
                  variant="h6"
                  sx={{
                    minWidth: 40,
                    textAlign: 'center',
                    fontWeight: 600,
                  }}
                >
                  {quantity}
                </Typography>
                <IconButton
                  onClick={() => handleQuantityChange(1)}
                  sx={{ border: 1, borderColor: 'divider' }}
                >
                  <Add />
                </IconButton>
              </Box>
            </Box>

            {/* Action Buttons */}
            <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<ShoppingCart />}
                onClick={handleAddToCart}
                disabled={!product.inStock}
                sx={{
                  flexGrow: 1,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                }}
              >
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </Button>
              <IconButton
                size="large"
                onClick={handleToggleFavorite}
                sx={{
                  border: 1,
                  borderColor: 'divider',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 0, 0, 0.04)',
                  },
                }}
              >
                {isFavorite ? (
                  <Favorite color="error" />
                ) : (
                  <FavoriteBorder />
                )}
              </IconButton>
              <IconButton
                size="large"
                sx={{ border: 1, borderColor: 'divider' }}
              >
                <Share />
              </IconButton>
            </Box>

            {/* Stock Status */}
            {product.inStock ? (
              <Chip
                label="In Stock"
                color="success"
                sx={{ fontWeight: 600 }}
              />
            ) : (
              <Chip
                label="Out of Stock"
                color="error"
                sx={{ fontWeight: 600 }}
              />
            )}
          </Box>
        </Grid>
      </Grid>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <Box sx={{ mt: 8 }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: 600,
              mb: 4,
              color: theme.palette.primary.main,
            }}
          >
            Related Products
          </Typography>
          <Grid container spacing={3}>
            {relatedProducts.map((relatedProduct) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={relatedProduct.id}>
                <ProductCard
                  product={relatedProduct}
                  onAddToCart={() => console.log('Add to cart:', relatedProduct)}
                  onToggleFavorite={() => console.log('Toggle favorite:', relatedProduct)}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Container>
  );
};

export default ProductDetailPage;
