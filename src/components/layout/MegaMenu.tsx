import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  Card,
  CardMedia,
  CardContent,
  useTheme,
  Fade,
  Popper,
  ClickAwayListener,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { ArrowForward, TrendingUp, Star } from '@mui/icons-material';

interface SubCategory {
  label: string;
  href: string;
  description?: string;
  isNew?: boolean;
  isTrending?: boolean;
}

interface MegaMenuCategory {
  label: string;
  href: string;
  children?: SubCategory[];
  featured?: {
    title: string;
    description: string;
    image: string;
    href: string;
  };
  highlights?: string[];
}

interface MegaMenuProps {
  categories: MegaMenuCategory[];
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: () => void;
  activeCategory: string | null;
}

const MegaMenu: React.FC<MegaMenuProps> = ({
  categories,
  anchorEl,
  open,
  onClose,
  activeCategory,
}) => {
  const theme = useTheme();
  const activeCategoryData = categories.find(cat => cat.label === activeCategory);

  if (!activeCategoryData || !activeCategoryData.children) {
    return null;
  }

  return (
    <Popper
      open={open}
      anchorEl={anchorEl}
      placement="bottom"
      style={{
        zIndex: 1400,
        width: '100vw',
        maxWidth: '1200px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
      modifiers={[
        {
          name: 'offset',
          options: {
            offset: [0, 12],
          },
        },
        {
          name: 'preventOverflow',
          options: {
            boundary: 'viewport',
            padding: 16,
          },
        },
      ]}
    >
      <ClickAwayListener onClickAway={onClose}>
        <Fade in={open} timeout={300}>
          <Paper
            elevation={8}
            sx={{
              width: { xs: '90vw', md: '800px', lg: '1000px' },
              maxWidth: '95vw',
              borderRadius: 3,
              overflow: 'hidden',
              background: `linear-gradient(135deg, ${theme.palette.background.paper}, ${theme.palette.neutral.light})`,
              border: `1px solid ${theme.palette.divider}`,
              boxShadow: `0 20px 60px rgba(0,0,0,0.15)`,
              transform: open ? 'translateY(0) scale(1)' : 'translateY(-10px) scale(0.95)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <Box sx={{ p: 4 }}>
              {/* Header */}
              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    color: theme.palette.primary.main,
                    mb: 1,
                    fontFamily: 'Playfair Display, serif',
                  }}
                >
                  {activeCategoryData.label}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    fontSize: '0.9rem',
                  }}
                >
                  Discover our curated collection of authentic Indian fashion
                </Typography>
              </Box>

              <Grid container spacing={4}>
                {/* Categories List */}
                <Grid size={{ xs: 12, md: 6 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 2,
                      color: theme.palette.text.primary,
                      fontSize: '1.1rem',
                    }}
                  >
                    Categories
                  </Typography>
                  <List sx={{ p: 0 }}>
                    {activeCategoryData.children.map((subcat, index) => (
                      <ListItem
                        key={subcat.label}
                        component={Link}
                        to={subcat.href}
                        onClick={onClose}
                        sx={{
                          px: 0,
                          py: 1.5,
                          borderRadius: 2,
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            backgroundColor: `${theme.palette.primary.main}08`,
                            transform: 'translateX(8px)',
                            '& .arrow-icon': {
                              opacity: 1,
                              transform: 'translateX(4px)',
                            },
                          },
                          textDecoration: 'none',
                          color: 'inherit',
                        }}
                      >
                        <ListItemText
                          primary={
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                              <Typography
                                variant="body1"
                                sx={{
                                  fontWeight: 500,
                                  color: theme.palette.text.primary,
                                }}
                              >
                                {subcat.label}
                              </Typography>
                              {subcat.isNew && (
                                <Box
                                  sx={{
                                    px: 1,
                                    py: 0.3,
                                    backgroundColor: theme.palette.success.main,
                                    color: 'white',
                                    borderRadius: 1,
                                    fontSize: '0.7rem',
                                    fontWeight: 600,
                                  }}
                                >
                                  NEW
                                </Box>
                              )}
                              {subcat.isTrending && (
                                <TrendingUp
                                  sx={{
                                    fontSize: 16,
                                    color: theme.palette.warning.main,
                                  }}
                                />
                              )}
                              <ArrowForward
                                className="arrow-icon"
                                sx={{
                                  fontSize: 16,
                                  opacity: 0,
                                  transition: 'all 0.2s ease',
                                  color: theme.palette.primary.main,
                                }}
                              />
                            </Box>
                          }
                          secondary={subcat.description && (
                            <Typography
                              variant="caption"
                              sx={{
                                color: 'text.secondary',
                                fontSize: '0.8rem',
                                mt: 0.5,
                                display: 'block',
                              }}
                            >
                              {subcat.description}
                            </Typography>
                          )}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Grid>

                {/* Featured Section */}
                {activeCategoryData.featured && (
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        mb: 2,
                        color: theme.palette.text.primary,
                        fontSize: '1.1rem',
                      }}
                    >
                      Featured
                    </Typography>
                    <Card
                      component={Link}
                      to={activeCategoryData.featured.href}
                      onClick={onClose}
                      sx={{
                        textDecoration: 'none',
                        borderRadius: 3,
                        overflow: 'hidden',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: `0 12px 40px ${theme.palette.primary.main}20`,
                        },
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="160"
                        image={activeCategoryData.featured.image}
                        alt={activeCategoryData.featured.title}
                        sx={{
                          objectFit: 'cover',
                        }}
                      />
                      <CardContent sx={{ p: 2.5 }}>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            mb: 1,
                            color: theme.palette.primary.main,
                            fontSize: '1rem',
                          }}
                        >
                          {activeCategoryData.featured.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'text.secondary',
                            lineHeight: 1.5,
                          }}
                        >
                          {activeCategoryData.featured.description}
                        </Typography>
                      </CardContent>
                    </Card>

                    {/* Highlights */}
                    {activeCategoryData.highlights && (
                      <Box sx={{ mt: 3 }}>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            fontWeight: 600,
                            mb: 1.5,
                            color: theme.palette.text.primary,
                          }}
                        >
                          Why Choose Us
                        </Typography>
                        {activeCategoryData.highlights.map((highlight, index) => (
                          <Box
                            key={index}
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 1,
                              mb: 1,
                            }}
                          >
                            <Star
                              sx={{
                                fontSize: 14,
                                color: theme.palette.warning.main,
                              }}
                            />
                            <Typography
                              variant="caption"
                              sx={{
                                color: 'text.secondary',
                                fontSize: '0.8rem',
                              }}
                            >
                              {highlight}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    )}
                  </Grid>
                )}
              </Grid>
            </Box>
          </Paper>
        </Fade>
      </ClickAwayListener>
    </Popper>
  );
};

export default MegaMenu;
export type { MegaMenuCategory, SubCategory };
