import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Box,
  Button,
  TextField,
  Card,
  CardContent,
  Divider,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Paper,
  Stepper,
  Step,
  StepLabel,
  useTheme,
} from '@mui/material';
import {
  ArrowBack,
  Lock,
  CreditCard,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const steps = ['Shipping Information', 'Payment Method', 'Review Order'];

const CheckoutPage: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { cart, clearCart } = useCart();

  const [activeStep, setActiveStep] = useState(0);
  const [shippingInfo, setShippingInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    country: 'India',
  });
  const [paymentMethod, setPaymentMethod] = useState('card');

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleShippingChange = (field: string, value: string) => {
    setShippingInfo(prev => ({ ...prev, [field]: value }));
  };

  const handlePlaceOrder = () => {
    // TODO: Implement order placement logic
    console.log('Order placed:', {
      cart,
      shippingInfo,
      paymentMethod,
    });
    clearCart();
    navigate('/order-confirmation');
  };

  if (cart.items.length === 0) {
    return (
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>
            Your cart is empty
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
            Add some items to your cart before proceeding to checkout.
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/products')}
            sx={{ px: 4, py: 1.5 }}
          >
            Continue Shopping
          </Button>
        </Box>
      </Container>
    );
  }

  const renderShippingForm = () => (
    <Card>
      <CardContent sx={{ p: 4 }}>
        <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
          Shipping Information
        </Typography>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              label="First Name"
              value={shippingInfo.firstName}
              onChange={(e) => handleShippingChange('firstName', e.target.value)}
              required
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              label="Last Name"
              value={shippingInfo.lastName}
              onChange={(e) => handleShippingChange('lastName', e.target.value)}
              required
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              value={shippingInfo.email}
              onChange={(e) => handleShippingChange('email', e.target.value)}
              required
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              label="Phone"
              value={shippingInfo.phone}
              onChange={(e) => handleShippingChange('phone', e.target.value)}
              required
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Address"
              multiline
              rows={2}
              value={shippingInfo.address}
              onChange={(e) => handleShippingChange('address', e.target.value)}
              required
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <TextField
              fullWidth
              label="City"
              value={shippingInfo.city}
              onChange={(e) => handleShippingChange('city', e.target.value)}
              required
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <TextField
              fullWidth
              label="State"
              value={shippingInfo.state}
              onChange={(e) => handleShippingChange('state', e.target.value)}
              required
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <TextField
              fullWidth
              label="Pincode"
              value={shippingInfo.pincode}
              onChange={(e) => handleShippingChange('pincode', e.target.value)}
              required
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );

  const renderPaymentForm = () => (
    <Card>
      <CardContent sx={{ p: 4 }}>
        <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
          Payment Method
        </Typography>
        <FormControl component="fieldset">
          <FormLabel component="legend" sx={{ mb: 2 }}>
            Choose your payment method
          </FormLabel>
          <RadioGroup
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <FormControlLabel
              value="card"
              control={<Radio />}
              label={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CreditCard />
                  <span>Credit/Debit Card</span>
                </Box>
              }
            />
            <FormControlLabel
              value="upi"
              control={<Radio />}
              label="UPI Payment"
            />
            <FormControlLabel
              value="cod"
              control={<Radio />}
              label="Cash on Delivery"
            />
          </RadioGroup>
        </FormControl>

        {paymentMethod === 'card' && (
          <Box sx={{ mt: 3 }}>
            <Grid container spacing={3}>
              <Grid size={{ xs: 12 }}>
                <TextField
                  fullWidth
                  label="Card Number"
                  placeholder="1234 5678 9012 3456"
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  label="Expiry Date"
                  placeholder="MM/YY"
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  label="CVV"
                  placeholder="123"
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextField
                  fullWidth
                  label="Cardholder Name"
                />
              </Grid>
            </Grid>
          </Box>
        )}

        {paymentMethod === 'upi' && (
          <Box sx={{ mt: 3 }}>
            <TextField
              fullWidth
              label="UPI ID"
              placeholder="yourname@upi"
            />
          </Box>
        )}
      </CardContent>
    </Card>
  );

  const renderOrderReview = () => (
    <Card>
      <CardContent sx={{ p: 4 }}>
        <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
          Review Your Order
        </Typography>

        {/* Order Items */}
        <Box sx={{ mb: 3 }}>
          {cart.items.map((item) => (
            <Box
              key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                py: 2,
                borderBottom: '1px solid',
                borderColor: 'divider',
              }}
            >
              <Box>
                <Typography variant="body1" sx={{ fontWeight: 600 }}>
                  {item.product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Qty: {item.quantity}
                  {item.selectedSize && ` • Size: ${item.selectedSize}`}
                  {item.selectedColor && ` • Color: ${item.selectedColor}`}
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                ₹{(item.product.price * item.quantity).toLocaleString()}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Shipping Information */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            Shipping Address
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {shippingInfo.firstName} {shippingInfo.lastName}<br />
            {shippingInfo.address}<br />
            {shippingInfo.city}, {shippingInfo.state} {shippingInfo.pincode}<br />
            {shippingInfo.phone}
          </Typography>
        </Box>

        {/* Payment Method */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
            Payment Method
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {paymentMethod === 'card' && 'Credit/Debit Card'}
            {paymentMethod === 'upi' && 'UPI Payment'}
            {paymentMethod === 'cod' && 'Cash on Delivery'}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return renderShippingForm();
      case 1:
        return renderPaymentForm();
      case 2:
        return renderOrderReview();
      default:
        return 'Unknown step';
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
        <Button
          startIcon={<ArrowBack />}
          onClick={() => navigate('/cart')}
          sx={{ mr: 2 }}
        >
          Back to Cart
        </Button>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 600,
            color: theme.palette.primary.main,
          }}
        >
          Checkout
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* Checkout Form */}
        <Grid size={{ xs: 12, md: 8 }}>
          {/* Stepper */}
          <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {/* Step Content */}
          {getStepContent(activeStep)}

          {/* Navigation Buttons */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              variant="outlined"
            >
              Back
            </Button>
            <Button
              variant="contained"
              onClick={activeStep === steps.length - 1 ? handlePlaceOrder : handleNext}
              sx={{ px: 4 }}
            >
              {activeStep === steps.length - 1 ? 'Place Order' : 'Next'}
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

            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mt: 2 }}>
              <Lock fontSize="small" color="success" />
              <Typography
                variant="body2"
                sx={{
                  color: 'text.secondary',
                  fontSize: '0.875rem',
                }}
              >
                Secure checkout with SSL encryption
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CheckoutPage;
