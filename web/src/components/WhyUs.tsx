import React from 'react';
import { Box, Container, Typography, Grid, Paper, Chip } from '@mui/material';
import ShieldCheckIcon from '@mui/icons-material/Security';
import UsersIcon from '@mui/icons-material/People';
import AwardIcon from '@mui/icons-material/WorkspacePremium';
import CompassIcon from '@mui/icons-material/Explore';
import { PILLARS } from '../data/expeditions';

export const WhyUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheckIcon sx={{ fontSize: 36, color: '#B45309' }} />;
      case 'Users':
        return <UsersIcon sx={{ fontSize: 36, color: '#1E3A2F' }} />;
      case 'Award':
        return <AwardIcon sx={{ fontSize: 36, color: '#B45309' }} />;
      case 'Compass':
        return <CompassIcon sx={{ fontSize: 36, color: '#1E3A2F' }} />;
      default:
        return <CompassIcon sx={{ fontSize: 36, color: '#B45309' }} />;
    }
  };

  return (
    <Box id="por-que-con-biologa" sx={{ py: 10, backgroundColor: '#FFFFFF' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 7 }}>
          <Chip
            label="EL VALOR DIFERENCIAL"
            sx={{
              backgroundColor: 'rgba(30, 58, 47, 0.1)',
              color: 'secondary.main',
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
            ¿Por qué viajar con una Bióloga?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              maxWidth: 720,
              mx: 'auto',
              fontSize: '1.1rem',
            }}
          >
            Un safari no debería ser una visita a un zoológico a cielo abierto. Viajar con Rosso Trips significa comprender la ecología, interpretar las señales de la naturaleza y apoyar la conservación con un rigor ético innegociable.
          </Typography>
        </Box>

        <Grid container spacing={3.5}>
          {PILLARS.map((p, idx) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={idx} sx={{ display: 'flex' }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3.5,
                  borderRadius: 4,
                  backgroundColor: '#FAF8F5',
                  border: '1px solid rgba(0,0,0,0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  transition: 'transform 0.25s ease, border-color 0.25s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    borderColor: 'primary.main',
                  },
                }}
              >
                <Box sx={{ mb: 2 }}>{getIcon(p.icon)}</Box>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, lineHeight: 1.25 }}>
                  {p.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                  {p.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
