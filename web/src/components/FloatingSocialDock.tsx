import React from 'react';
import { Box, Fab, Tooltip, Stack, Typography } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

export const FloatingSocialDock: React.FC = () => {
  const handleOpenWhatsApp = () => {
    const text = encodeURIComponent('Hola Vicky! Estoy viendo Rosso Trips y me gustaría consultar sobre las próximas fechas a África.');
    window.open(`https://wa.me/5493425237932?text=${text}`, '_blank');
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: { xs: 20, md: 32 },
        right: { xs: 16, md: 32 },
        zIndex: 1300,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: 1.5,
      }}
    >
      {/* Social mini buttons */}
      <Stack direction="row" spacing={1} sx={{ mb: 0.5 }}>
        {/* TikTok Pill */}
        <Tooltip title="Seguí a Vicky en TikTok (@vickyrosso_)" placement="left" arrow>
          <Box
            component="a"
            href="https://www.tiktok.com/@vickyrosso_"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 0.8,
              backgroundColor: '#000000',
              color: '#FFFFFF',
              px: 1.8,
              py: 0.8,
              borderRadius: 20,
              textDecoration: 'none',
              boxShadow: '0 4px 14px rgba(0,0,0,0.25)',
              transition: 'transform 0.2s ease',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          >
            {/* TikTok SVG Icon */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.13V9.4a6.33 6.33 0 0 0-.86-.06A6.34 6.34 0 0 0 3 15.68a6.34 6.34 0 0 0 10.82 4.47 6.29 6.29 0 0 0 1.96-4.52V8.92a8.28 8.28 0 0 0 4.81 1.52v-3.5a4.86 4.86 0 0 1-1-.25z"/>
            </svg>
            <Typography variant="caption" sx={{ fontWeight: 700, fontSize: '0.75rem' }}>
              TikTok
            </Typography>
          </Box>
        </Tooltip>

        {/* Instagram Pill */}
        <Tooltip title="Instagram (@vickyrosso_)" placement="left" arrow>
          <Box
            component="a"
            href="https://instagram.com/vickyrosso_"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 0.8,
              background: 'linear-gradient(45deg, #F09433 0%, #E6683C 25%, #DC2743 50%, #CC2366 75%, #BC1888 100%)',
              color: '#FFFFFF',
              px: 1.8,
              py: 0.8,
              borderRadius: 20,
              textDecoration: 'none',
              boxShadow: '0 4px 14px rgba(0,0,0,0.25)',
              transition: 'transform 0.2s ease',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          >
            <InstagramIcon sx={{ fontSize: 18 }} />
            <Typography variant="caption" sx={{ fontWeight: 700, fontSize: '0.75rem' }}>
              Instagram
            </Typography>
          </Box>
        </Tooltip>
      </Stack>

      {/* Main WhatsApp FAB */}
      <Tooltip title="Conversar 1 a 1 por WhatsApp con Victoria" placement="left" arrow>
        <Fab
          color="success"
          aria-label="Contactar por WhatsApp"
          onClick={handleOpenWhatsApp}
          sx={{
            backgroundColor: '#25D366',
            color: '#FFFFFF',
            width: { xs: 60, md: 66 },
            height: { xs: 60, md: 66 },
            boxShadow: '0 6px 20px rgba(37, 211, 102, 0.45)',
            '&:hover': {
              backgroundColor: '#1EBE5D',
              transform: 'scale(1.06)',
            },
            transition: 'all 0.25s ease',
          }}
        >
          <WhatsAppIcon sx={{ fontSize: { xs: 32, md: 36 } }} />
        </Fab>
      </Tooltip>
    </Box>
  );
};

