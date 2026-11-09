import { Box, Button, Container, Stack, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { imageUrl } from '../data/siteContent';

export const LandingHero = () => (
  <Box
    component="section"
    id="inicio"
    aria-label="Introducción a Victoria Rosso y experiencias en Sudáfrica"
    sx={{
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      minHeight: { xs: 'min(760px, 100svh)', md: 'min(800px, 100svh)' },
      color: 'common.white',
      overflow: 'hidden',
      bgcolor: 'primary.dark',
      scrollMarginTop: '80px',
    }}
  >
    <Box
      component="img"
      src={imageUrl('FOTO PRINCIPAL.jpg')}
      alt="Victoria Rosso en un safari en la sabana de Sudáfrica"
      fetchPriority="high"
      sx={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center 44%',
      }}
    />
    <Box
      aria-hidden="true"
      sx={{
        position: 'absolute',
        inset: 0,
        bgcolor: 'rgba(22,36,23,.58)',
        background:
          'linear-gradient(90deg, rgba(22,36,23,.82) 0%, rgba(22,36,23,.53) 52%, rgba(22,36,23,.18) 100%)',
      }}
    />
    <Container maxWidth={false} sx={{ maxWidth: 1240, position: 'relative', py: { xs: 16, md: 20 } }}>
      <Box sx={{ maxWidth: 780 }}>
        <Typography
          component="p"
          sx={{
            display: 'inline-flex',
            px: 2,
            py: 0.75,
            mb: 2.5,
            border: '1px solid rgba(255,255,255,.45)',
            borderRadius: 30,
            bgcolor: 'rgba(22,36,23,.38)',
            color: 'common.white',
            fontSize: '.82rem',
            fontWeight: 700,
          }}
        >
          Licenciada en Biodiversidad · Host Sudáfrica - Mantis
        </Typography>
        <Typography
          component="h1"
          sx={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: { xs: '2.7rem', sm: '3.7rem', md: '4.5rem' },
            fontWeight: 700,
            lineHeight: 1.12,
            mb: 2.5,
            textShadow: '0 3px 20px rgba(0,0,0,.32)',
          }}
        >
          Sudáfrica a través de los ojos de una bióloga.
        </Typography>
        <Typography
          sx={{
            maxWidth: 720,
            mb: 4,
            color: 'rgba(255,255,255,.94)',
            fontSize: { xs: '1rem', md: '1.1rem' },
            lineHeight: 1.8,
          }}
        >
          Me presento, soy <strong>Victoria Rosso</strong>. Me gustaría acompañarte durante
          experiencias personalizadas en Sudáfrica, diseñadas según tus intereses: trabajá con
          animales en proyectos de conservación, viví safaris inolvidables, descubrí Ciudad del
          Cabo o participá en programas profesionales vinculados a la fauna silvestre.
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
          <Button
            component="a"
            href="#experiencias"
            variant="contained"
            color="secondary"
            size="large"
            endIcon={<ArrowDownwardIcon />}
            sx={{ color: 'secondary.contrastText', alignSelf: { xs: 'stretch', sm: 'flex-start' } }}
          >
            Explorar servicios
          </Button>
          <Button
            component="a"
            href="#planificar"
            variant="outlined"
            size="large"
            sx={{
              color: 'common.white',
              borderColor: 'rgba(255,255,255,.75)',
              alignSelf: { xs: 'stretch', sm: 'flex-start' },
              '&:hover': { borderColor: 'common.white', bgcolor: 'rgba(255,255,255,.12)' },
            }}
          >
            Planificar mi viaje
          </Button>
        </Stack>
      </Box>
    </Container>
  </Box>
);
