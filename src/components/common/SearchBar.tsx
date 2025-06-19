import React, { useState, useEffect } from 'react';
import {
  Box,
  TextField,
  InputAdornment,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  Chip,
  useTheme,
  Fade,
  Popper,
  ClickAwayListener,
} from '@mui/material';
import { Search, TrendingUp, History } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { products } from '../../data/products';
import { Product } from '../../types';

interface SearchBarProps {
  onClose?: () => void;
  autoFocus?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ onClose, autoFocus = false }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  // Mock trending searches and recent searches
  const trendingSearches = ['Kurtas', 'Sarees', 'Embroidered', 'Cotton', 'Handloom'];
  const recentSearches = ['Silk Sarees', 'Mirror Work', 'Block Print'];

  useEffect(() => {
    if (searchTerm.length > 1) {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.craftType?.toLowerCase().includes(searchTerm.toLowerCase())
      ).slice(0, 6);
      setSuggestions(filtered);
      setIsOpen(true);
    } else {
      setSuggestions([]);
      setIsOpen(false);
    }
  }, [searchTerm]);

  const handleSearch = (term: string) => {
    if (term.trim()) {
      navigate(`/products?search=${encodeURIComponent(term.trim())}`);
      setSearchTerm('');
      setIsOpen(false);
      onClose?.();
    }
  };

  const handleProductClick = (product: Product) => {
    navigate(`/product/${product.id}`);
    setSearchTerm('');
    setIsOpen(false);
    onClose?.();
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleSearch(searchTerm);
    }
  };

  const handleClickAway = () => {
    setIsOpen(false);
  };

  const handleFocus = (event: React.FocusEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    if (searchTerm.length > 1) {
      setIsOpen(true);
    }
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box sx={{ position: 'relative', width: '100%', maxWidth: 600 }}>
        <TextField
          fullWidth
          placeholder="Search for products, categories, or crafts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
          onFocus={handleFocus}
          autoFocus={autoFocus}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search color="action" />
              </InputAdornment>
            ),
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: 3,
              backgroundColor: theme.palette.background.paper,
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.primary.main,
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.primary.main,
                borderWidth: 2,
              },
            },
          }}
        />

        <Popper
          open={isOpen}
          anchorEl={anchorEl}
          placement="bottom-start"
          style={{ width: anchorEl?.clientWidth, zIndex: 1300 }}
        >
          <Fade in={isOpen}>
            <Paper
              elevation={8}
              sx={{
                mt: 1,
                borderRadius: 3,
                overflow: 'hidden',
                maxHeight: 400,
                overflowY: 'auto',
              }}
            >
              {/* Product Suggestions */}
              {suggestions.length > 0 && (
                <List sx={{ py: 0 }}>
                  <ListItem sx={{ backgroundColor: theme.palette.grey[50], py: 1 }}>
                    <Typography variant="subtitle2" color="text.secondary" sx={{ fontWeight: 600 }}>
                      Products
                    </Typography>
                  </ListItem>
                  {suggestions.map((product) => (
                    <ListItem
                      key={product.id}
                      onClick={() => handleProductClick(product)}
                      sx={{
                        cursor: 'pointer',
                        '&:hover': {
                          backgroundColor: theme.palette.primary.light + '10',
                        },
                      }}
                    >
                      <ListItemAvatar>
                        <Avatar
                          src={product.images[0]}
                          alt={product.name}
                          sx={{ width: 40, height: 40, borderRadius: 2 }}
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary={product.name}
                        secondary={`₹${product.price.toLocaleString()} • ${product.category.name}`}
                        primaryTypographyProps={{
                          fontSize: '0.9rem',
                          fontWeight: 500,
                        }}
                        secondaryTypographyProps={{
                          fontSize: '0.8rem',
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              )}

              {/* Trending and Recent Searches */}
              {searchTerm.length === 0 && (
                <Box sx={{ p: 2 }}>
                  {/* Trending Searches */}
                  <Box sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <TrendingUp sx={{ mr: 1, fontSize: '1.2rem', color: theme.palette.secondary.main }} />
                      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                        Trending Searches
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {trendingSearches.map((term) => (
                        <Chip
                          key={term}
                          label={term}
                          size="small"
                          onClick={() => handleSearch(term)}
                          sx={{
                            backgroundColor: theme.palette.secondary.light + '20',
                            color: theme.palette.secondary.main,
                            '&:hover': {
                              backgroundColor: theme.palette.secondary.light + '40',
                            },
                          }}
                        />
                      ))}
                    </Box>
                  </Box>

                  {/* Recent Searches */}
                  <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <History sx={{ mr: 1, fontSize: '1.2rem', color: theme.palette.text.secondary }} />
                      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                        Recent Searches
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {recentSearches.map((term) => (
                        <Chip
                          key={term}
                          label={term}
                          size="small"
                          variant="outlined"
                          onClick={() => handleSearch(term)}
                          sx={{
                            '&:hover': {
                              backgroundColor: theme.palette.primary.light + '10',
                            },
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                </Box>
              )}

              {/* No Results */}
              {searchTerm.length > 1 && suggestions.length === 0 && (
                <Box sx={{ p: 3, textAlign: 'center' }}>
                  <Typography variant="body2" color="text.secondary">
                    No products found for "{searchTerm}"
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Try searching for categories like "Kurtas", "Sarees", or "Embroidered"
                  </Typography>
                </Box>
              )}
            </Paper>
          </Fade>
        </Popper>
      </Box>
    </ClickAwayListener>
  );
};

export default SearchBar;
