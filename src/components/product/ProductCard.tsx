import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  IconButton,
  Rating,
  useTheme,
} from '@mui/material';
import {
  Favorite,
  FavoriteBorder,
  ShoppingCart,
  Visibility,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { Product } from '../../types';
import QuickViewModal from './QuickViewModal';
import LazyImage from '../common/LazyImage';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onToggleFavorite?: (product: Product) => void;
  isFavorite?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onToggleFavorite,
  isFavorite = false,
}) => {
  const theme = useTheme();
  const [quickViewOpen, setQuickViewOpen] = useState(false);

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

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setQuickViewOpen(true);
  };

  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Card
      component={Link}
      to={`/product/${product.id}`}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        textDecoration: 'none',
        color: 'inherit',
        position: 'relative',
        borderRadius: 4,
        overflow: 'hidden',
        transition: 'all 0.4s ease-in-out',
        boxShadow: `0 4px 20px ${theme.palette.primary.main}08`,
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: `0 16px 48px ${theme.palette.primary.main}20`,
          '& .product-actions': {
            opacity: 1,
            transform: 'translateY(0)',
          },
          '& .product-image': {
            transform: 'scale(1.05)',
          },
        },
      }}
    >
      {/* Discount Badge */}
      {discountPercentage > 0 && (
        <Chip
          label={`${discountPercentage}% OFF`}
          color="error"
          size="small"
          sx={{
            position: 'absolute',
            top: 8,
            left: 8,
            zIndex: 1,
            fontWeight: 600,
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
          zIndex: 1,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 1)',
          },
        }}
      >
        {isFavorite ? (
          <Favorite color="error" />
        ) : (
          <FavoriteBorder />
        )}
      </IconButton>

      {/* Enhanced Product Image */}
      <Box sx={{ position: 'relative', overflow: 'hidden', height: 380 }}>
        <LazyImage
          className="product-image"
          src={product.images[0]}
          alt={product.name}
          width={500}
          height={380}
          fallbackSrc={product.images[1]}
          style={{
            transition: 'transform 0.3s ease-in-out',
          }}
        />
      </Box>

      {/* Enhanced Product Actions Overlay */}
      <Box
        className="product-actions"
        sx={{
          position: 'absolute',
          bottom: 20,
          left: '50%',
          transform: 'translateX(-50%) translateY(20px)',
          opacity: 0,
          transition: 'all 0.4s ease-in-out',
          display: 'flex',
          gap: 1,
          justifyContent: 'center',
          zIndex: 2,
        }}
      >
        <IconButton
          onClick={handleQuickView}
          sx={{
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText,
            width: 48,
            height: 48,
            boxShadow: `0 6px 20px ${theme.palette.secondary.main}40`,
            '&:hover': {
              backgroundColor: theme.palette.secondary.dark,
              transform: 'scale(1.1)',
              boxShadow: `0 8px 28px ${theme.palette.secondary.main}50`,
            },
            transition: 'all 0.3s ease-in-out',
          }}
        >
          <Visibility />
        </IconButton>

        <IconButton
          onClick={handleAddToCart}
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: 'white',
            width: 48,
            height: 48,
            boxShadow: `0 6px 20px ${theme.palette.primary.main}40`,
            '&:hover': {
              backgroundColor: theme.palette.primary.dark,
              transform: 'scale(1.1)',
              boxShadow: `0 8px 28px ${theme.palette.primary.main}50`,
            },
            transition: 'all 0.3s ease-in-out',
          }}
        >
          <ShoppingCart />
        </IconButton>
      </Box>

      {/* Enhanced Product Details */}
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        {/* Craft Type */}
        {product.craftType && (
          <Chip
            label={product.craftType}
            size="small"
            variant="outlined"
            sx={{
              mb: 2,
              fontSize: '0.75rem',
              height: 28,
              fontWeight: 500,
              color: theme.palette.secondary.main,
              borderColor: theme.palette.secondary.main,
              backgroundColor: `${theme.palette.secondary.main}08`,
              '&:hover': {
                backgroundColor: `${theme.palette.secondary.main}15`,
              },
            }}
          />
        )}

        {/* Product Name */}
        <Typography
          variant="h6"
          component="h3"
          sx={{
            fontWeight: 600,
            mb: 1,
            lineHeight: 1.3,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            color: theme.palette.text.primary,
          }}
        >
          {product.name}
        </Typography>

        {/* Product Description */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 2,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            lineHeight: 1.4,
          }}
        >
          {product.description}
        </Typography>

        {/* Rating */}
        {product.rating && (
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Rating
              value={product.rating}
              precision={0.1}
              size="small"
              readOnly
            />
            <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
              ({product.reviewCount})
            </Typography>
          </Box>
        )}

        {/* Price */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography
            variant="h6"
            component="span"
            sx={{
              fontWeight: 700,
              color: theme.palette.primary.main,
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
              }}
            >
              ₹{product.originalPrice.toLocaleString()}
            </Typography>
          )}
        </Box>

        {/* Stock Status */}
        {!product.inStock && (
          <Chip
            label="Out of Stock"
            color="error"
            size="small"
            sx={{ mt: 1 }}
          />
        )}
      </CardContent>

      {/* Quick View Modal */}
      <QuickViewModal
        product={product}
        open={quickViewOpen}
        onClose={() => setQuickViewOpen(false)}
        onToggleFavorite={onToggleFavorite}
        isFavorite={isFavorite}
      />
    </Card>
  );
};

export default ProductCard;
