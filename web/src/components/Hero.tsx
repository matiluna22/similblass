import React from 'react';
import { Box, Container, Typography, Button, Stack, Chip } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ExploreIcon from '@mui/icons-material/Explore';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const Hero: React.FC = () => {
  const openWhatsApp = () => {
    const msg = encodeURIComponent('Hola Vicky! Vengo de la web y quiero saber sobre las próximas expediciones a África.');
    window.open(`https://wa.me/5493425237932?text=${msg}`, '_blank');
  };

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#FFFFFF',
        pt: { xs: 12, md: 8 },
        pb: 8,
        backgroundImage: `linear-gradient(180deg, rgba(20, 39, 31, 0.75) 0%, rgba(28, 25, 23, 0.85) 100%), url('https://matiluna22.github.io/Victoria-Rosso-Web/imagenes%20jpg/posible%20banner%201.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 35%',
        backgroundAttachment: { xs: 'scroll', md: 'fixed' },
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
        {/* Badges / Micro-pills */}
        <Stack
          direction="row"
          spacing={1.5}
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            mb: 3,
            flexWrap: 'wrap',
            gap: 1,
          }}
        >
          <Chip
            label="EXPEDICIONES DE AUTOR & VOLUNTARIADOS"
            sx={{
              backgroundColor: 'rgba(180, 83, 9, 0.9)',
              color: '#FFFFFF',
              fontWeight: 700,
              fontSize: '0.75rem',
              letterSpacing: '0.08em',
              py: 0.5,
            }}
          />
          <Chip
            icon={<CheckCircleIcon sx={{ '&&': { color: '#4ADE80' } }} />}
            label="GRUPOS REDUCIDOS · MÁXIMO 10 VIAJEROS"
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(6px)',
              color: '#FFFFFF',
              fontWeight: 600,
              fontSize: '0.75rem',
            }}
          />
        </Stack>

        {/* Main Headline */}
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2.5rem', sm: '3.75rem', md: '4.8rem' },
            fontWeight: 700,
            lineHeight: 1.1,
            mb: 3,
            maxWidth: 1000,
            mx: 'auto',
            textShadow: '0 4px 20px rgba(0,0,0,0.5)',
          }}
        >
          África a través de los ojos de una{' '}
          <Box
            component="span"
            sx={{
              color: '#F59E0B',
              fontStyle: 'italic',
              textDecoration: 'underline',
              textDecorationColor: 'rgba(245, 158, 11, 0.4)',
              textUnderlineOffset: '8px',
            }}
          >
            bióloga
          </Box>
          .
        </Typography>

        {/* Subhead / Narrative manifesto */}
        <Typography
          variant="subtitle1"
          sx={{
            fontSize: { xs: '1.05rem', md: '1.35rem' },
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: 780,
            mx: 'auto',
            mb: 5,
            lineHeight: 1.6,
            fontWeight: 400,
            textShadow: '0 2px 8px rgba(0,0,0,0.4)',
          }}
        >
          Dejá atrás los safaris empaquetados y las excursiones masivas. Sumergite en la sabana africana
          para vivir el rastreo de fauna, la ciencia de campo y la conservación real junto a{' '}
          <strong>Victoria Rosso</strong>.
        </Typography>

        {/* CTAs */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: 520,
            mx: 'auto',
          }}
        >
          <Button
            component="a"
            href="#expediciones"
            variant="contained"
            color="primary"
            size="large"
            startIcon={<ExploreIcon />}
            sx={{
              width: { xs: '100%', sm: 'auto' },
              px: 4,
              py: 1.8,
              fontSize: '1.05rem',
              backgroundColor: '#B45309',
              boxShadow: '0 8px 24px rgba(180, 83, 9, 0.4)',
              '&:hover': {
                backgroundColor: '#92400E',
                transform: 'translateY(-2px)',
              },
            }}
          >
            Explorar Expediciones
          </Button>

          <Button
            variant="outlined"
            size="large"
            startIcon={<WhatsAppIcon sx={{ color: '#25D366' }} />}
            onClick={openWhatsApp}
            sx={{
              width: { xs: '100%', sm: 'auto' },
              px: 3.5,
              py: 1.8,
              fontSize: '1.05rem',
              color: '#FFFFFF',
              borderColor: 'rgba(255, 255, 255, 0.6)',
              backdropFilter: 'blur(8px)',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              '&:hover': {
                borderColor: '#25D366',
                backgroundColor: 'rgba(37, 211, 102, 0.15)',
                transform: 'translateY(-2px)',
              },
            }}
          >
            Escribir a Vicky
          </Button>
        </Stack>

        {/* Social Proof / Stats micro-bar */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: { xs: 3, md: 6 },
            mt: 7,
            pt: 4,
            borderTop: '1px solid rgba(255, 255, 255, 0.15)',
            flexWrap: 'wrap',
          }}
        >
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 700, color: '#F59E0B' }}>
              100%
            </Typography>
            <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              Ética & Conservación Real
            </Typography>
          </Box>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 700, color: '#F59E0B' }}>
              Máx. 10
            </Typography>
            <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              Viajeros por Grupo
            </Typography>
          </Box>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 700, color: '#F59E0B' }}>
              1 a 1
            </Typography>
            <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              Asesoría Directa con la Bióloga
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
