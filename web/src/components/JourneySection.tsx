import { Box, Container, Grid, Paper, Typography } from '@mui/material';

const pillars = [
  {
    icon: '🧬',
    title: 'Criterio Biológico & Ético',
    text: 'No recomiendo atracciones donde se explote a los animales. Cada centro de voluntariado y lodge promueve conservación real, sin caricias forzadas ni maltrato.',
  },
  {
    icon: '🤝',
    title: 'Contacto 1 a 1 sin Intermediarios',
    text: 'Hablás directamente conmigo. Conozco a los coordinadores, veterinarios, tiempos de viaje y detalles del día a día en Sudáfrica.',
  },
  {
    icon: '🌍',
    title: 'Alianza Oficial Mantis',
    text: 'Respaldo institucional de Mantis Collection para cotizar hoteles, traslados y lodges en Cape Town y Kruger.',
  },
  {
    icon: '🎒',
    title: 'Preparación Completa Pre-Viaje',
    text: 'Información sobre vacunas, dinero, visados, conectividad, seguro médico y la valija ideal para el clima sudafricano.',
  },
];

const steps = [
  {
    title: 'Contacto Inicial',
    text: 'Me escribís por WhatsApp contándome tu idea, si querés voluntariado o safari y tus meses tentativos.',
  },
  {
    title: 'Diseño a Medida',
    text: 'Preparo tu propuesta de voluntariado con cupos oficiales o cotizo tu itinerario con Mantis según tus gustos y presupuesto.',
  },
  {
    title: 'Charla Pre-Viaje',
    text: 'Revisamos la preparación, indumentaria para el bush, vacunas, traslados y logística en Sudáfrica.',
  },
  {
    title: '¡A Volar a África!',
    text: 'Llegás a Sudáfrica con tu viaje organizado y mi asistencia para cualquier consulta.',
  },
];

export const JourneySection = () => (
  <Box
    component="section"
    id="proceso"
    sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default', scrollMarginTop: 80 }}
  >
    <Container maxWidth={false} sx={{ maxWidth: 1240 }}>
      <Box sx={{ maxWidth: 760, mx: 'auto', mb: 6, textAlign: 'center' }}>
        <Typography variant="overline" sx={{ color: 'secondary.dark', fontWeight: 700 }}>
          Tu Viaje en Manos Expertas
        </Typography>
        <Typography component="h2" variant="h2" sx={{ mb: 1.5 }}>
          ¿Por qué viajar conmigo?
        </Typography>
        <Typography sx={{ color: 'text.secondary' }}>
          Unimos el rigor de la biología con la calidez del trato humano y el respaldo de marcas
          de prestigio global.
        </Typography>
      </Box>
      <Grid container spacing={2.5}>
        {pillars.map((pillar) => (
          <Grid key={pillar.title} size={{ xs: 12, sm: 6, lg: 3 }}>
            <Paper elevation={0} sx={{ height: '100%', p: 3, borderRadius: 3 }}>
              <Typography aria-hidden="true" sx={{ fontSize: '2rem', mb: 1 }}>
                {pillar.icon}
              </Typography>
              <Typography component="h3" variant="h6" sx={{ mb: 1 }}>
                {pillar.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {pillar.text}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Typography component="h3" variant="h4" sx={{ mt: { xs: 7, md: 9 }, mb: 3, textAlign: 'center' }}>
        El Camino Hacia tu Aventura en 4 Pasos Simples
      </Typography>
      <Grid container spacing={2.5} component="ol" sx={{ m: 0, p: 0, listStyle: 'none' }}>
        {steps.map((step, index) => (
          <Grid component="li" key={step.title} size={{ xs: 12, sm: 6, lg: 3 }}>
            <Paper
              elevation={0}
              sx={{
                height: '100%',
                p: 3,
                borderRadius: 3,
                bgcolor: 'background.paper',
                borderTop: '3px solid',
                borderColor: 'secondary.main',
              }}
            >
              <Typography variant="overline" sx={{ color: 'secondary.dark', fontWeight: 700 }}>
                {String(index + 1).padStart(2, '0')}
              </Typography>
              <Typography component="h4" variant="h6" sx={{ mb: 1 }}>
                {step.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {step.text}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);
