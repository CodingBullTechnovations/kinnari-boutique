import React from 'react';
import {
  Dialog,
  DialogContent,
  Box,
  IconButton,
  useTheme,
  useMediaQuery,
  Fade,
} from '@mui/material';
import { Close } from '@mui/icons-material';
import SearchBar from './SearchBar';

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ open, onClose }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      fullScreen={isMobile}
      TransitionComponent={Fade}
      sx={{
        '& .MuiDialog-paper': {
          borderRadius: isMobile ? 0 : 4,
          backgroundColor: theme.palette.background.default,
          backgroundImage: 'none',
          boxShadow: isMobile ? 'none' : theme.shadows[24],
        },
        '& .MuiBackdrop-root': {
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(8px)',
        },
      }}
    >
      <DialogContent
        sx={{
          p: { xs: 2, md: 4 },
          position: 'relative',
          minHeight: isMobile ? '100vh' : 'auto',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Close Button */}
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[2],
            '&:hover': {
              backgroundColor: theme.palette.grey[100],
            },
          }}
        >
          <Close />
        </IconButton>

        {/* Search Content */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: isMobile ? 'flex-start' : 'center',
            minHeight: isMobile ? 'calc(100vh - 64px)' : 300,
            pt: isMobile ? 8 : 4,
          }}
        >
          <Box
            sx={{
              width: '100%',
              maxWidth: 600,
              px: 2,
            }}
          >
            <SearchBar onClose={onClose} autoFocus />
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default SearchModal;
