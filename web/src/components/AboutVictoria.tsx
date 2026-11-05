import React from 'react';
import { Box, Container, Typography, Grid, Button, Stack, Chip } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LaunchIcon from '@mui/icons-material/Launch';
import { MEDIA_COVERAGE } from '../data/expeditions';

export const AboutVictoria: React.FC = () => {
  const BASE_IMG_URL = 'https://matiluna22.github.io/Victoria-Rosso-Web/imagenes%20jpg';

  const openWhatsApp = () => {
    const msg = encodeURIComponent('Hola Vicky! Leí sobre tu trayectoria y me gustaría conversar sobre las opciones de viaje para este año.');
    window.open(`https://wa.me/5493425237932?text=${msg}`, '_blank');
  };

  return (
    <Box id="sobre-vicky" sx={{ py: 10, backgroundColor: '#FAF8F5' }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} sx={{ alignItems: 'center' }}>
          {/* Photos Grid Collage */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ position: 'relative' }}>
              <Box
                component="img"
                src={`${BASE_IMG_URL}/FOTO%20PRINCIPAL.jpg`}
                alt="Victoria Rosso en Sudáfrica"
                sx={{
                  width: '85%',
                  borderRadius: 4,
                  boxShadow: '0 16px 36px rgba(0,0,0,0.15)',
                  display: 'block',
                }}
              />
              <Box
                component="img"
                src={`${BASE_IMG_URL}/CHITABB.jpeg`}
                alt="Victoria Rosso en centro de fauna con chita"
                sx={{
                  position: 'absolute',
                  bottom: -24,
                  right: 0,
                  width: '52%',
                  aspectRatio: '4/3',
                  objectFit: 'cover',
                  borderRadius: 4,
                  border: '5px solid #FAF8F5',
                  boxShadow: '0 12px 30px rgba(0,0,0,0.2)',
                  backgroundColor: '#E7E5E4',
                }}
              />
            </Box>
          </Grid>

          {/* Bio Text */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Chip
              label="HOST & LÍDER DE EXPEDICIONES"
              sx={{
                backgroundColor: 'rgba(180, 83, 9, 0.12)',
                color: 'primary.dark',
                fontWeight: 700,
                letterSpacing: '0.08em',
                mb: 1.5,
              }}
            />
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2.2rem', md: '3rem' },
                fontWeight: 700,
                mb: 2,
              }}
            >
              Victoria Rosso
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: 'primary.main',
                fontWeight: 600,
                mb: 3,
                fontSize: '1.2rem',
              }}
            >
              Lic. en Biodiversidad · Investigadora CONICET · Divulgadora Científica
            </Typography>

            <Typography variant="body1" sx={{ color: 'text.primary', mb: 2.5, lineHeight: 1.8 }}>
              Nacida en Santa Fe, Argentina, Victoria pasó de soñar con la fauna africana viendo documentales a liderar iniciativas de conservación directa en Sudáfrica. Como bióloga graduada de la Universidad Nacional del Litoral e investigadora en ADN ambiental (eDNA), combina el rigor científico con una pasión arrolladora por contar la historia viva de cada especie.
            </Typography>

            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3.5, lineHeight: 1.8 }}>
              A través de <strong>Rosso Trips</strong>, Victoria abre un puente entre Latinoamérica y el continente africano para que jóvenes y mentes curiosas experimenten la sabana con sus propios ojos, sin filtros turísticos y con la certeza de que su paso genera un impacto positivo en las comunidades y reservas locales.
            </Typography>

            {/* CTAs */}
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 4 }}>
              <Button
                variant="contained"
                startIcon={<WhatsAppIcon />}
                onClick={openWhatsApp}
                sx={{
                  backgroundColor: '#B45309',
                  color: '#FFFFFF',
                  px: 3,
                  py: 1.2,
                  '&:hover': { backgroundColor: '#92400E' },
                }}
              >
                Conversar con Victoria
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<InstagramIcon />}
                component="a"
                href="https://instagram.com/vickyrosso_"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ px: 3, py: 1.2 }}
              >
                @vickyrosso_ en Instagram
              </Button>
            </Stack>

            {/* Press References */}
            <Box sx={{ pt: 2, borderTop: '1px solid rgba(0,0,0,0.08)' }}>
              <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.secondary', display: 'block', mb: 1 }}>
                EN LOS MEDIOS:
              </Typography>
              <Stack spacing={1}>
                {MEDIA_COVERAGE.map((item, idx) => (
                  <Box
                    key={idx}
                    component="a"
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      textDecoration: 'none',
                      color: 'text.primary',
                      fontSize: '0.85rem',
                      '&:hover': { color: 'primary.main' },
                    }}
                  >
                    <LaunchIcon sx={{ fontSize: 14, color: 'primary.main' }} />
                    <Box component="span" sx={{ fontWeight: 600 }}>{item.outlet}:</Box>
                    <Box component="span" sx={{ color: 'text.secondary' }}>{item.title}</Box>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
