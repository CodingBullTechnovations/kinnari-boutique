import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  Button,
  IconButton,
  Grid,
  Chip,
  Rating,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  useTheme,
  useMediaQuery,
  Fade,
} from '@mui/material';
import {
  Close,
  ShoppingCart,
  Favorite,
  FavoriteBorder,
  ZoomIn,
} from '@mui/icons-material';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';

interface QuickViewModalProps {
  product: Product | null;
  open: boolean;
  onClose: () => void;
  onToggleFavorite?: (product: Product) => void;
  isFavorite?: boolean;
}

const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  open,
  onClose,
  onToggleFavorite,
  isFavorite = false,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { addToCart } = useCart();
  
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize, selectedColor);
    onClose();
  };

  const handleToggleFavorite = () => {
    onToggleFavorite?.(product);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      fullScreen={isMobile}
      TransitionComponent={Fade}
      sx={{
        '& .MuiDialog-paper': {
          borderRadius: isMobile ? 0 : 3,
          maxHeight: '90vh',
        },
      }}
    >
      <DialogContent sx={{ p: 0, position: 'relative' }}>
        {/* Close Button */}
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            zIndex: 1,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 1)',
            },
          }}
        >
          <Close />
        </IconButton>

        <Grid container sx={{ minHeight: isMobile ? '100vh' : 600 }}>
          {/* Product Images */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ position: 'relative', height: '100%' }}>
              <Box
                component="img"
                src={product.images[selectedImage]}
                alt={product.name}
                sx={{
                  width: '100%',
                  height: { xs: 400, md: '100%' },
                  objectFit: 'cover',
                }}
              />
              
              {/* Image Thumbnails */}
              {product.images.length > 1 && (
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 16,
                    left: 16,
                    display: 'flex',
                    gap: 1,
                  }}
                >
                  {product.images.slice(0, 4).map((image, index) => (
                    <Box
                      key={index}
                      component="img"
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      onClick={() => setSelectedImage(index)}
                      sx={{
                        width: 60,
                        height: 60,
                        objectFit: 'cover',
                        borderRadius: 1,
                        cursor: 'pointer',
                        border: selectedImage === index ? 2 : 1,
                        borderColor: selectedImage === index 
                          ? theme.palette.primary.main 
                          : 'rgba(255, 255, 255, 0.5)',
                        opacity: selectedImage === index ? 1 : 0.7,
                        transition: 'all 0.2s ease-in-out',
                        '&:hover': {
                          opacity: 1,
                        },
                      }}
                    />
                  ))}
                </Box>
              )}
            </Box>
          </Grid>

          {/* Product Details */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ p: { xs: 3, md: 4 }, height: '100%', overflow: 'auto' }}>
              {/* Craft Type */}
              {product.craftType && (
                <Chip
                  label={product.craftType}
                  size="small"
                  sx={{
                    mb: 2,
                    backgroundColor: `${theme.palette.secondary.main}15`,
                    color: theme.palette.secondary.main,
                    fontWeight: 500,
                  }}
                />
              )}

              {/* Product Name */}
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  lineHeight: 1.3,
                }}
              >
                {product.name}
              </Typography>

              {/* Rating */}
              {product.rating && (
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Rating value={product.rating} precision={0.1} size="small" readOnly />
                  <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                    ({product.reviewCount} reviews)
                  </Typography>
                </Box>
              )}

              {/* Price */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    color: theme.palette.primary.main,
                  }}
                >
                  ₹{product.price.toLocaleString()}
                </Typography>
                {product.originalPrice && (
                  <Typography
                    variant="h6"
                    sx={{
                      textDecoration: 'line-through',
                      color: 'text.secondary',
                    }}
                  >
                    ₹{product.originalPrice.toLocaleString()}
                  </Typography>
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

              {/* Size Selection */}
              {product.sizes && product.sizes.length > 0 && (
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel>Size</InputLabel>
                  <Select
                    value={selectedSize}
                    label="Size"
                    onChange={(e) => setSelectedSize(e.target.value)}
                  >
                    {product.sizes.map((size) => (
                      <MenuItem key={size} value={size}>
                        {size}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}

              {/* Color Selection */}
              {product.colors && product.colors.length > 0 && (
                <FormControl fullWidth sx={{ mb: 3 }}>
                  <InputLabel>Color</InputLabel>
                  <Select
                    value={selectedColor}
                    label="Color"
                    onChange={(e) => setSelectedColor(e.target.value)}
                  >
                    {product.colors.map((color) => (
                      <MenuItem key={color} value={color}>
                        {color}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}

              {/* Action Buttons */}
              <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<ShoppingCart />}
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  sx={{
                    flexGrow: 1,
                    py: 1.5,
                    fontWeight: 600,
                  }}
                >
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </Button>
                
                <IconButton
                  onClick={handleToggleFavorite}
                  sx={{
                    border: 1,
                    borderColor: 'divider',
                    '&:hover': {
                      borderColor: theme.palette.error.main,
                      backgroundColor: `${theme.palette.error.main}10`,
                    },
                  }}
                >
                  {isFavorite ? (
                    <Favorite color="error" />
                  ) : (
                    <FavoriteBorder />
                  )}
                </IconButton>
              </Box>

              {/* Stock Status */}
              {!product.inStock && (
                <Chip
                  label="Out of Stock"
                  color="error"
                  size="small"
                />
              )}
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default QuickViewModal;
