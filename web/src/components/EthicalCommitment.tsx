import { Box, Container, Typography } from '@mui/material';
import { imageUrl } from '../data/siteContent';

export const EthicalCommitment = () => (
  <Box
    component="section"
    aria-label="Compromiso ético con la fauna africana"
    sx={{
      position: 'relative',
      py: { xs: 9, md: 12 },
      color: 'common.white',
      bgcolor: 'primary.dark',
      backgroundImage: `linear-gradient(rgba(22,36,23,.72), rgba(22,36,23,.72)), url("${imageUrl('POSIBLE BANNER 2.JPG')}")`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }}
  >
    <Container maxWidth={false} sx={{ maxWidth: 1000, textAlign: 'center' }}>
      <Typography variant="overline" sx={{ color: 'secondary.light', fontWeight: 700 }}>
        Filosofía de Impacto
      </Typography>
      <Typography
        component="blockquote"
        variant="h3"
        sx={{ m: 0, mt: 2, fontSize: { xs: '1.6rem', md: '2.25rem' }, lineHeight: 1.5 }}
      >
        “Creo que la conservación efectiva comienza con la ciencia, se fortalece a través de la
        colaboración y llega a las personas mediante la educación y la vivencia en primera
        persona.”
      </Typography>
      <Typography sx={{ mt: 2, color: 'rgba(255,255,255,.85)' }}>
        — Victoria Rosso, Licenciada en Biodiversidad
      </Typography>
    </Container>
  </Box>
);
