import React, { useState, useRef } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Badge,
  Menu,
  MenuItem,
  Button,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import {
  ShoppingCart,
  Search,
  Menu as MenuIcon,
  Person,
  Favorite,
  Close,
  KeyboardArrowDown,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import SearchModal from '../common/SearchModal';
import MegaMenu, { MegaMenuCategory } from './MegaMenu';

const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { getCartItemCount } = useCart();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuAnchor, setUserMenuAnchor] = useState<null | HTMLElement>(null);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [megaMenuAnchor, setMegaMenuAnchor] = useState<null | HTMLElement>(null);
  const megaMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navigationItems: MegaMenuCategory[] = [
    {
      label: "Women's Wear",
      href: '/products/women',
      children: [
        {
          label: 'Kurtas & Kurta Sets',
          href: '/products/women/kurtas',
          description: 'Traditional and contemporary kurtas',
          isTrending: true
        },
        {
          label: 'Dresses & Jumpsuits',
          href: '/products/women/dresses',
          description: 'Modern silhouettes with Indian touch'
        },
        {
          label: 'Sarees',
          href: '/products/women/sarees',
          description: 'Handwoven traditional sarees'
        },
        {
          label: 'Tops & Blouses',
          href: '/products/women/tops',
          description: 'Versatile tops for every occasion'
        },
        {
          label: 'Co-ord Sets',
          href: '/products/women/coord-sets',
          description: 'Matching sets for effortless style',
          isNew: true
        },
        {
          label: 'Lehengas',
          href: '/products/women/lehengas',
          description: 'Festive and wedding wear'
        },
      ],
      featured: {
        title: 'New Collection: Festive Elegance',
        description: 'Discover our latest festive collection featuring intricate embroidery and premium fabrics.',
        image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=500&h=400&fit=crop&auto=format',
        href: '/products/women/festive'
      },
      highlights: [
        'Handcrafted by skilled artisans',
        'Premium quality fabrics',
        'Authentic Indian designs',
        'Size inclusive collection'
      ]
    },
    {
      label: "Men's Wear",
      href: '/products/men',
      children: [
        {
          label: 'Kurtas',
          href: '/products/men/kurtas',
          description: 'Classic and contemporary kurtas'
        },
        {
          label: 'Shirts',
          href: '/products/men/shirts',
          description: 'Formal and casual shirts'
        },
        {
          label: 'Nehru Jackets',
          href: '/products/men/jackets',
          description: 'Traditional Indian jackets',
          isTrending: true
        },
        {
          label: 'Accessories',
          href: '/products/men/accessories',
          description: 'Complete your look'
        },
      ],
      featured: {
        title: 'Gentleman\'s Collection',
        description: 'Sophisticated menswear that blends tradition with modern style.',
        image: 'https://images.unsplash.com/photo-1506629905607-d9c8e3b8e6e2?w=500&h=400&fit=crop&auto=format',
        href: '/products/men/formal'
      },
      highlights: [
        'Tailored fit options',
        'Breathable fabrics',
        'Versatile designs',
        'Easy care instructions'
      ]
    },
    {
      label: 'Home & Living',
      href: '/products/home',
      children: [
        {
          label: 'Home Decor',
          href: '/products/home/decor',
          description: 'Beautiful decorative pieces'
        },
        {
          label: 'Kitchen & Dining',
          href: '/products/home/kitchen',
          description: 'Functional and stylish kitchenware'
        },
        {
          label: 'Furnishing',
          href: '/products/home/furnishing',
          description: 'Cushions, curtains, and more'
        },
        {
          label: 'Lighting',
          href: '/products/home/lighting',
          description: 'Traditional and modern lighting',
          isNew: true
        },
      ],
      featured: {
        title: 'Artisan Home Collection',
        description: 'Transform your space with handcrafted home decor pieces.',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=400&fit=crop&auto=format',
        href: '/products/home/featured'
      },
      highlights: [
        'Eco-friendly materials',
        'Unique handcrafted pieces',
        'Traditional techniques',
        'Modern functionality'
      ]
    },
  ];

  const simpleNavItems = [
    { label: 'New Arrivals', href: '/products/new' },
    { label: 'Sale', href: '/products/sale' },
  ];

  const handleUserMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setUserMenuAnchor(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setUserMenuAnchor(null);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMegaMenuOpen = (event: React.MouseEvent<HTMLElement>, categoryLabel: string) => {
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current);
    }
    setMegaMenuAnchor(event.currentTarget);
    setActiveCategory(categoryLabel);
    setMegaMenuOpen(true);
  };

  const handleMegaMenuClick = (event: React.MouseEvent<HTMLElement>, categoryLabel: string) => {
    event.preventDefault();
    if (megaMenuOpen && activeCategory === categoryLabel) {
      // If clicking the same category that's already open, close it
      handleMegaMenuClose();
    } else {
      // Open the mega menu for this category
      handleMegaMenuOpen(event, categoryLabel);
    }
  };

  const handleMegaMenuClose = () => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false);
      setActiveCategory(null);
      setMegaMenuAnchor(null);
    }, 200);
  };

  const handleMegaMenuMouseEnter = () => {
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current);
    }
  };

  const handleMegaMenuMouseLeave = () => {
    handleMegaMenuClose();
  };

  return (
    <>
      <AppBar position="sticky" elevation={0}>
        <Toolbar sx={{ px: { xs: 2, md: 4 }, py: 1 }}>
          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleMobileMenuToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}

          {/* Enhanced Logo */}
          <Box
            component={Link}
            to="/"
            sx={{
              textDecoration: 'none',
              color: 'inherit',
              display: 'flex',
              alignItems: 'center',
              flexGrow: { xs: 1, md: 0 },
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.02)',
              },
            }}
          >
            <Typography
              variant="h4"
              component="h1"
              sx={{
                fontFamily: 'Playfair Display, serif',
                fontWeight: 700,
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '0.5px',
                fontSize: { xs: '1.5rem', md: '2rem' },
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -2,
                  left: 0,
                  width: '100%',
                  height: 2,
                  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  transform: 'scaleX(0)',
                  transformOrigin: 'left',
                  transition: 'transform 0.3s ease-in-out',
                },
                '&:hover::after': {
                  transform: 'scaleX(1)',
                },
              }}
            >
              Kinnari Boutique
            </Typography>
          </Box>

          {/* Enhanced Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: 'flex', ml: 6, flexGrow: 1 }}>
              {navigationItems.map((item) => (
                <Button
                  key={item.label}
                  onMouseEnter={(e) => handleMegaMenuOpen(e, item.label)}
                  onMouseLeave={handleMegaMenuClose}
                  onClick={(e) => handleMegaMenuClick(e, item.label)}
                  sx={{
                    color: 'text.primary',
                    mx: 1.5,
                    px: 2,
                    py: 1,
                    fontWeight: 500,
                    fontSize: '0.95rem',
                    borderRadius: 2,
                    position: 'relative',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      backgroundColor: `${theme.palette.primary.main}08`,
                      color: theme.palette.primary.main,
                      transform: 'translateY(-1px)',
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: '50%',
                      width: activeCategory === item.label ? '80%' : 0,
                      height: 2,
                      backgroundColor: theme.palette.primary.main,
                      transition: 'all 0.3s ease-in-out',
                      transform: 'translateX(-50%)',
                    },
                    '&:hover::after': {
                      width: '80%',
                    },
                  }}
                  endIcon={item.children ? <KeyboardArrowDown /> : undefined}
                >
                  {item.label}
                </Button>
              ))}

              {/* Simple navigation items without mega menu */}
              {simpleNavItems.map((item) => (
                <Button
                  key={item.label}
                  component={Link}
                  to={item.href}
                  sx={{
                    color: 'text.primary',
                    mx: 1.5,
                    px: 2,
                    py: 1,
                    fontWeight: 500,
                    fontSize: '0.95rem',
                    borderRadius: 2,
                    position: 'relative',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      backgroundColor: `${theme.palette.primary.main}08`,
                      color: theme.palette.primary.main,
                      transform: 'translateY(-1px)',
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: '50%',
                      width: 0,
                      height: 2,
                      backgroundColor: theme.palette.primary.main,
                      transition: 'all 0.3s ease-in-out',
                      transform: 'translateX(-50%)',
                    },
                    '&:hover::after': {
                      width: '80%',
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}

          {/* Enhanced Action Icons */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton
              color="inherit"
              onClick={() => setSearchModalOpen(true)}
              sx={{
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  backgroundColor: `${theme.palette.primary.main}10`,
                  color: theme.palette.primary.main,
                  transform: 'scale(1.1)',
                },
              }}
            >
              <Search />
            </IconButton>

            <IconButton
              color="inherit"
              sx={{
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  backgroundColor: `${theme.palette.error.main}10`,
                  color: theme.palette.error.main,
                  transform: 'scale(1.1)',
                },
              }}
            >
              <Favorite />
            </IconButton>

            <IconButton
              color="inherit"
              onClick={handleUserMenuOpen}
              sx={{
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  backgroundColor: `${theme.palette.secondary.main}10`,
                  color: theme.palette.secondary.main,
                  transform: 'scale(1.1)',
                },
              }}
            >
              <Person />
            </IconButton>

            <IconButton
              color="inherit"
              component={Link}
              to="/cart"
              sx={{
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  backgroundColor: `${theme.palette.primary.main}10`,
                  color: theme.palette.primary.main,
                  transform: 'scale(1.1)',
                },
              }}
            >
              <Badge
                badgeContent={getCartItemCount()}
                color="secondary"
                sx={{
                  '& .MuiBadge-badge': {
                    backgroundColor: theme.palette.secondary.main,
                    color: theme.palette.secondary.contrastText,
                    fontWeight: 600,
                  },
                }}
              >
                <ShoppingCart />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* User Menu */}
      <Menu
        anchorEl={userMenuAnchor}
        open={Boolean(userMenuAnchor)}
        onClose={handleUserMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleUserMenuClose}>My Account</MenuItem>
        <MenuItem onClick={handleUserMenuClose}>Orders</MenuItem>
        <MenuItem onClick={handleUserMenuClose}>Wishlist</MenuItem>
        <Divider />
        <MenuItem onClick={handleUserMenuClose}>Sign In</MenuItem>
        <MenuItem onClick={handleUserMenuClose}>Sign Up</MenuItem>
      </Menu>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={mobileMenuOpen}
        onClose={handleMobileMenuToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: 280,
            backgroundColor: 'background.paper',
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Menu
          </Typography>
          <IconButton onClick={handleMobileMenuToggle}>
            <Close />
          </IconButton>
        </Box>
        <Divider />
        <List>
          {[...navigationItems, ...simpleNavItems].map((item) => (
            <ListItem
              key={item.label}
              component={Link}
              to={item.href}
              onClick={handleMobileMenuToggle}
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(139, 69, 19, 0.08)',
                },
              }}
            >
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Search Modal */}
      <SearchModal
        open={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
      />

      {/* Mega Menu */}
      <Box
        onMouseEnter={handleMegaMenuMouseEnter}
        onMouseLeave={handleMegaMenuMouseLeave}
      >
        <MegaMenu
          categories={navigationItems}
          anchorEl={megaMenuAnchor}
          open={megaMenuOpen}
          onClose={() => setMegaMenuOpen(false)}
          activeCategory={activeCategory}
        />
      </Box>
    </>
  );
};

export default Header;
