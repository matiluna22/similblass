import React from 'react';
import { Box, Container, Typography, Grid, Paper, Chip, Stack } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import StarIcon from '@mui/icons-material/Star';
import { TESTIMONIALS } from '../data/expeditions';

export const Testimonials: React.FC = () => {
  return (
    <Box id="testimonios" sx={{ py: 10, backgroundColor: '#FFFFFF' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 7 }}>
          <Chip
            label="COMUNIDAD DE VIAJEROS"
            sx={{
              backgroundColor: 'rgba(180, 83, 9, 0.1)',
              color: 'primary.dark',
              fontWeight: 700,
              letterSpacing: '0.08em',
              mb: 1.5,
            }}
          />
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.8rem' },
              fontWeight: 700,
              mb: 2,
            }}
          >
            Voces desde la Sabana
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              maxWidth: 640,
              mx: 'auto',
              fontSize: '1.1rem',
            }}
          >
            Quienes viajaron con Vicky no vivieron unas vacaciones comunes: formaron parte de un equipo de exploración y volvieron con la mirada transformada.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {TESTIMONIALS.map((t) => (
            <Grid size={{ xs: 12, md: 4 }} key={t.id} sx={{ display: 'flex' }}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  backgroundColor: '#FAF8F5',
                  border: '1px solid rgba(0,0,0,0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  width: '100%',
                  position: 'relative',
                }}
              >
                <Box>
                  <FormatQuoteIcon sx={{ fontSize: 40, color: 'primary.main', opacity: 0.5, mb: 1 }} />
                  {/* Stars */}
                  <Stack direction="row" spacing={0.5} sx={{ mb: 2 }}>
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} sx={{ fontSize: 18, color: '#F59E0B' }} />
                    ))}
                  </Stack>
                  <Typography variant="body1" sx={{ color: 'text.primary', fontStyle: 'italic', mb: 3, lineHeight: 1.7 }}>
                    "{t.quote}"
                  </Typography>
                </Box>

                <Box sx={{ pt: 2, borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                    {t.name}
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
                    {t.location}
                  </Typography>
                  <Chip
                    label={t.expedition}
                    size="small"
                    sx={{ mt: 1, backgroundColor: 'rgba(30, 58, 47, 0.08)', color: 'secondary.main', fontWeight: 600, fontSize: '0.7rem' }}
                  />
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
