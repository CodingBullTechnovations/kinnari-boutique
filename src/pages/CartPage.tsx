import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Divider,
  Chip,
  Paper,
  useTheme,
} from '@mui/material';
import {
  Add,
  Remove,
  Delete,
  ShoppingCartOutlined,
  ArrowBack,
} from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CartPage: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  if (cart.items.length === 0) {
    return (
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center' }}>
          <ShoppingCartOutlined
            sx={{
              fontSize: 120,
              color: 'text.secondary',
              mb: 3,
            }}
          />
          <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>
            Your cart is empty
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
            Looks like you haven't added any items to your cart yet.
          </Typography>
          <Button
            variant="contained"
            size="large"
            component={Link}
            to="/products"
            sx={{ px: 4, py: 1.5 }}
          >
            Continue Shopping
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
        <IconButton
          onClick={() => navigate(-1)}
          sx={{ mr: 2 }}
        >
          <ArrowBack />
        </IconButton>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 600,
            color: theme.palette.primary.main,
          }}
        >
          Shopping Cart ({cart.itemCount} items)
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* Cart Items */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Box sx={{ mb: 3 }}>
            {cart.items.map((item, index) => (
              <Card key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`} sx={{ mb: 2 }}>
                <CardContent>
                  <Grid container spacing={3} alignItems="center">
                    {/* Product Image */}
                    <Grid size={{ xs: 12, sm: 3 }}>
                      <CardMedia
                        component="img"
                        height="120"
                        image={item.product.images[0]}
                        alt={item.product.name}
                        sx={{
                          objectFit: 'cover',
                          borderRadius: 1,
                        }}
                      />
                    </Grid>

                    {/* Product Details */}
                    <Grid size={{ xs: 12, sm: 5 }}>
                      <Typography
                        variant="h6"
                        component={Link}
                        to={`/product/${item.product.id}`}
                        sx={{
                          textDecoration: 'none',
                          color: 'inherit',
                          fontWeight: 600,
                          '&:hover': {
                            color: theme.palette.primary.main,
                          },
                        }}
                      >
                        {item.product.name}
                      </Typography>

                      <Box sx={{ mt: 1, mb: 2 }}>
                        {item.selectedSize && (
                          <Chip
                            label={`Size: ${item.selectedSize}`}
                            size="small"
                            variant="outlined"
                            sx={{ mr: 1, mb: 1 }}
                          />
                        )}
                        {item.selectedColor && (
                          <Chip
                            label={`Color: ${item.selectedColor}`}
                            size="small"
                            variant="outlined"
                            sx={{ mr: 1, mb: 1 }}
                          />
                        )}
                      </Box>

                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: theme.palette.primary.main,
                        }}
                      >
                        ₹{item.product.price.toLocaleString()}
                      </Typography>
                    </Grid>

                    {/* Quantity Controls */}
                    <Grid size={{ xs: 12, sm: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <IconButton
                          size="small"
                          onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                          sx={{ border: 1, borderColor: 'divider' }}
                        >
                          <Remove />
                        </IconButton>
                        <Typography
                          variant="body1"
                          sx={{
                            minWidth: 30,
                            textAlign: 'center',
                            fontWeight: 600,
                          }}
                        >
                          {item.quantity}
                        </Typography>
                        <IconButton
                          size="small"
                          onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                          sx={{ border: 1, borderColor: 'divider' }}
                        >
                          <Add />
                        </IconButton>
                      </Box>
                    </Grid>

                    {/* Remove Button */}
                    <Grid size={{ xs: 12, sm: 2 }}>
                      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 700,
                            color: theme.palette.text.primary,
                          }}
                        >
                          ₹{(item.product.price * item.quantity).toLocaleString()}
                        </Typography>
                        <IconButton
                          color="error"
                          onClick={() => removeFromCart(item.product.id)}
                          sx={{
                            '&:hover': {
                              backgroundColor: 'rgba(255, 0, 0, 0.04)',
                            },
                          }}
                        >
                          <Delete />
                        </IconButton>
                      </Box>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            ))}
          </Box>

          {/* Clear Cart Button */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Button
              variant="outlined"
              color="error"
              onClick={clearCart}
              startIcon={<Delete />}
            >
              Clear Cart
            </Button>
            <Button
              variant="outlined"
              component={Link}
              to="/products"
              startIcon={<ArrowBack />}
            >
              Continue Shopping
            </Button>
          </Box>
        </Grid>

        {/* Order Summary */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Paper sx={{ p: 3, position: 'sticky', top: 20 }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                mb: 3,
                color: theme.palette.primary.main,
              }}
            >
              Order Summary
            </Typography>

            <Box sx={{ mb: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body1">Subtotal ({cart.itemCount} items)</Typography>
                <Typography variant="body1" sx={{ fontWeight: 600 }}>
                  ₹{cart.total.toLocaleString()}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body1">Shipping</Typography>
                <Typography variant="body1" sx={{ fontWeight: 600, color: 'success.main' }}>
                  Free
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body1">Tax</Typography>
                <Typography variant="body1" sx={{ fontWeight: 600 }}>
                  ₹{Math.round(cart.total * 0.18).toLocaleString()}
                </Typography>
              </Box>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                Total
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: theme.palette.primary.main,
                }}
              >
                ₹{Math.round(cart.total * 1.18).toLocaleString()}
              </Typography>
            </Box>

            <Button
              variant="contained"
              size="large"
              fullWidth
              onClick={handleCheckout}
              sx={{
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                mb: 2,
              }}
            >
              Proceed to Checkout
            </Button>

            <Typography
              variant="body2"
              sx={{
                textAlign: 'center',
                color: 'text.secondary',
                fontSize: '0.875rem',
              }}
            >
              Secure checkout with SSL encryption
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CartPage;
