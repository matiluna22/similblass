import { Box, Chip, Container, Grid, Paper, Stack, Typography } from '@mui/material';
import { imageUrl } from '../data/siteContent';

const credentials = [
  ['Lic. en Biodiversidad', 'Universidad Nacional del Litoral e intercambio académico en México'],
  ['Investigación CONICET & eDNA', 'Investigación de laboratorio y monitoreo ecológico'],
  ['Experiencia en conservación', 'Trabajo en SANCCOB, HESC, Daktari y Nourish Eco Village'],
  ['Host Oficial Mantis', 'Ecoturismo en Sudáfrica'],
];

export const ProfileSection = () => (
  <Box component="section" id="sobre-mi" sx={{ py: { xs: 8, md: 12 }, scrollMarginTop: 80 }}>
    <Container maxWidth={false} sx={{ maxWidth: 1240 }}>
      <Grid container spacing={{ xs: 5, md: 8 }} sx={{ alignItems: 'center' }}>
        <Grid size={{ xs: 12, md: 5 }}>
          <Box sx={{ position: 'relative', maxWidth: 500, mx: 'auto', pr: { xs: 2, md: 4 }, pb: 3 }}>
            <Box
              component="img"
              src={imageUrl('VICTORIA.jpeg')}
              alt="Victoria Rosso junto a rinocerontes en un santuario de conservación"
              loading="lazy"
              sx={{
                display: 'block',
                width: '100%',
                aspectRatio: '4 / 5',
                objectFit: 'cover',
                borderRadius: 3,
                boxShadow: 5,
              }}
            />
            <Paper
              elevation={3}
              sx={{
                position: 'absolute',
                right: 0,
                bottom: 0,
                px: 2.5,
                py: 1.75,
                borderRadius: 2,
                bgcolor: 'background.paper',
              }}
            >
              <Typography sx={{ fontWeight: 700 }}>Victoria Rosso</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Lic. en Biodiversidad · UNL
              </Typography>
            </Paper>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 7 }}>
          <Chip label="Conocé a tu anfitriona" color="secondary" sx={{ mb: 1.5 }} />
          <Typography component="h2" variant="h2" sx={{ mb: 2 }}>
            Ciencia, Conservación y la Pasión por la Sabana
          </Typography>
          <Typography variant="h6" sx={{ color: 'primary.dark', mb: 2, fontWeight: 600 }}>
            Nací en Argentina con la certeza de que proteger la biodiversidad es el trabajo más
            urgente y maravilloso del planeta.
          </Typography>
          <Typography sx={{ mb: 2 }}>
            Me gradué como <strong>Licenciada en Biodiversidad</strong> en la Universidad Nacional
            del Litoral (UNL) y realicé un intercambio académico en la Universidad Autónoma de
            Quintana Roo en México. Trabajé en investigación en laboratorio para el{' '}
            <strong>INLAIN - CONICET</strong> y en proyectos de{' '}
            <strong>ADN ambiental (eDNA)</strong> para monitoreo ecológico.
          </Typography>
          <Typography sx={{ mb: 2 }}>
            En Sudáfrica trabajé en primera línea de conservación: rehabilitando pingüinos
            africanos en <strong>SANCCOB</strong> (Cape Town), cuidando rinocerontes y guepardos
            en <strong>HESC</strong> (Greater Kruger), y colaborando en proyectos comunitarios y
            educativos en <strong>Daktari</strong> y <strong>Nourish Eco Village</strong>.
          </Typography>
          <Typography sx={{ mb: 3 }}>
            Hoy, como parte de <strong>Mantis</strong>, diseño proyectos personalizados de
            voluntariado y asesoro a viajeros que buscan safaris all-inclusive y turismo de
            conservación en Cape Town y Kruger National Park.
          </Typography>
          <Stack
            spacing={1.5}
            direction={{ xs: 'column', sm: 'row' }}
            useFlexGap
            sx={{ flexWrap: 'wrap' }}
          >
            {credentials.map(([title, detail]) => (
              <Paper
                key={title}
                variant="outlined"
                sx={{ flex: '1 1 220px', p: 2, borderColor: 'divider', borderRadius: 2 }}
              >
                <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'primary.dark' }}>
                  {title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {detail}
                </Typography>
              </Paper>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  </Box>
);
