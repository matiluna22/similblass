import React from 'react';
import { Box, Container, Typography, Grid, Stack, Divider } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const CURRENT_YEAR = 2026;

export const Footer: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#14271F', color: '#FFFFFF', pt: 8, pb: 12 }}>
      <Container maxWidth="lg">
        <Grid container spacing={5} sx={{ justifyContent: 'space-between' }}>
          {/* Brand & Manifesto */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography
              variant="h5"
              sx={{
                fontFamily: '"Playfair Display", serif',
                fontWeight: 700,
                letterSpacing: '0.04em',
                mb: 1.5,
                color: '#FAF8F5',
              }}
            >
              ROSSO TRIPS
            </Typography>
            <Typography variant="caption" sx={{ color: '#F59E0B', fontWeight: 700, letterSpacing: '0.1em', display: 'block', mb: 2 }}>
              VICTORIA ROSSO · BIÓLOGA & DIVULGADORA
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.8, maxWidth: 420 }}>
              Expediciones de autor, safaris All-Inclusive y programas de voluntariado de conservación en África. Conectamos viajeros conscientes con el trabajo de campo científico y la protección de la fauna salvaje.
            </Typography>
          </Grid>

          {/* Direct channels */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#FAF8F5', mb: 2, letterSpacing: '0.05em' }}>
              CANALES DIRECTOS
            </Typography>
            <Stack spacing={1.5}>
              <Box
                component="a"
                href="https://wa.me/5493425237932"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  fontSize: '0.9rem',
                  '&:hover': { color: '#25D366' },
                }}
              >
                <WhatsAppIcon sx={{ fontSize: 18, color: '#25D366' }} />
                +54 9 342 523 7932
              </Box>

              <Box
                component="a"
                href="https://instagram.com/vickyrosso_"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  fontSize: '0.9rem',
                  '&:hover': { color: '#E1306C' },
                }}
              >
                <InstagramIcon sx={{ fontSize: 18, color: '#E1306C' }} />
                @vickyrosso_ (Instagram)
              </Box>

              <Box
                component="a"
                href="https://www.tiktok.com/@vickyrosso_"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  fontSize: '0.9rem',
                  '&:hover': { color: '#FFFFFF' },
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.13V9.4a6.33 6.33 0 0 0-.86-.06A6.34 6.34 0 0 0 3 15.68a6.34 6.34 0 0 0 10.82 4.47 6.29 6.29 0 0 0 1.96-4.52V8.92a8.28 8.28 0 0 0 4.81 1.52v-3.5a4.86 4.86 0 0 1-1-.25z"/>
                </svg>
                @vickyrosso_ (TikTok)
              </Box>
            </Stack>
          </Grid>

          {/* Quick links */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#FAF8F5', mb: 2, letterSpacing: '0.05em' }}>
              SECCIONES
            </Typography>
            <Stack spacing={1}>
              {['Expediciones', 'Por qué con una Bióloga', 'Sobre Vicky', 'Experiencias'].map((item) => (
                <Box
                  key={item}
                  component="a"
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  sx={{
                    color: 'rgba(255, 255, 255, 0.75)',
                    textDecoration: 'none',
                    fontSize: '0.88rem',
                    '&:hover': { color: '#F59E0B' },
                  }}
                >
                  {item}
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 5, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

        {/* Ethical commitment & Copyright */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
          <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.6)', textAlign: { xs: 'center', md: 'left' }, maxWidth: 600 }}>
            Compromiso ético: Rosso Trips opera bajo estrictos protocolos de bienestar animal. No avalamos ni promovemos la interacción artificial o el cautiverio con fines de lucro.
          </Typography>
          <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
            © {CURRENT_YEAR} Rosso Trips · Desarrollado para Victoria Rosso
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
