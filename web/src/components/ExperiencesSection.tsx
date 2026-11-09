import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { EXPERIENCE_GROUPS, imageUrl } from '../data/siteContent';
import { whatsappUrl } from '../utils/contact';

export const ExperiencesSection = () => {
  const [selected, setSelected] = useState(0);
  const [videoFailed, setVideoFailed] = useState(false);
  const group = EXPERIENCE_GROUPS[selected];

  return (
    <Box
      component="section"
      id="experiencias"
      sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default', scrollMarginTop: 80 }}
    >
      <Container maxWidth={false} sx={{ maxWidth: 1240 }}>
        <Box sx={{ maxWidth: 780, mx: 'auto', mb: 5, textAlign: 'center' }}>
          <Typography variant="overline" sx={{ color: 'secondary.dark', fontWeight: 700 }}>
            Experiencias
          </Typography>
          <Typography component="h2" variant="h2" sx={{ mb: 1.5 }}>
            Encontrá tu forma de descubrir Sudáfrica
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Experiencias personalizadas con acompañamiento, pensadas para tus intereses y
            objetivos. Desde safaris y actividades en Ciudad del Cabo hasta proyectos de
            conservación, educación ambiental y programas vinculados a la fauna silvestre.
          </Typography>
        </Box>

        <Tabs
          value={selected}
          onChange={(_, nextValue: number) => setSelected(nextValue)}
          centered
          variant="scrollable"
          scrollButtons="auto"
          aria-label="Opciones de viaje a Sudáfrica"
          sx={{ mb: 4, '& .MuiTab-root': { minHeight: 52, fontWeight: 700 } }}
        >
          {EXPERIENCE_GROUPS.map((item, index) => (
            <Tab
              key={item.id}
              id={`experience-tab-${item.id}`}
              aria-controls={`experience-panel-${item.id}`}
              label={item.label}
              value={index}
            />
          ))}
        </Tabs>

        {EXPERIENCE_GROUPS.map((item, index) => (
          <Box
            key={item.id}
            id={`experience-panel-${item.id}`}
            role="tabpanel"
            aria-labelledby={`experience-tab-${item.id}`}
            hidden={selected !== index}
            tabIndex={0}
          >
            <Grid container spacing={3}>
              {item.items.map((experience) => (
                <Grid key={experience.title} size={{ xs: 12, md: 4 }} sx={{ display: 'flex' }}>
                  <Card
                    sx={{
                      display: 'flex',
                      width: '100%',
                      flexDirection: 'column',
                      overflow: 'hidden',
                      '&:hover': { transform: 'none' },
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={imageUrl(experience.image)}
                      alt={experience.alt}
                      loading="lazy"
                      sx={{ height: { xs: 225, md: 245 }, objectFit: 'cover' }}
                    />
                    <CardContent sx={{ flex: 1, p: { xs: 2.5, md: 3 } }}>
                      <Chip label={experience.tag} size="small" color="secondary" sx={{ mb: 1.5 }} />
                      <Typography component="h3" variant="h5" sx={{ mb: 1.5 }}>
                        {experience.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {experience.description}
                      </Typography>
                      {experience.highlights.length > 0 && (
                        <List dense disablePadding sx={{ mt: 1.5 }}>
                          {experience.highlights.map((highlight) => (
                            <ListItem key={highlight} disableGutters alignItems="flex-start">
                              <ListItemIcon sx={{ minWidth: 28, mt: 0.25 }}>
                                <CheckCircleIcon fontSize="small" color="primary" />
                              </ListItemIcon>
                              <ListItemText
                                primary={highlight}
                                slotProps={{ primary: { variant: 'body2' } }}
                              />
                            </ListItem>
                          ))}
                        </List>
                      )}
                    </CardContent>
                    <CardActions sx={{ px: 3, pb: 3 }}>
                      <Button
                        component="a"
                        href={whatsappUrl(experience.inquiry)}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="contained"
                        color="success"
                        startIcon={<WhatsAppIcon />}
                        sx={{
                          width: '100%',
                          bgcolor: 'whatsapp.main',
                          color: 'whatsapp.contrastText',
                          '&:hover': { bgcolor: 'whatsapp.dark' },
                        }}
                      >
                        {selected === 0 ? 'Quiero saber más' : 'Consultar experiencia'}
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {selected === 0 ? (
              <Paper
                elevation={0}
                sx={{
                  mt: 4,
                  p: { xs: 3, md: 4 },
                  borderRadius: 3,
                  color: 'common.white',
                  bgcolor: 'primary.dark',
                }}
              >
                <Typography variant="overline" sx={{ color: 'secondary.light', fontWeight: 700 }}>
                  Servicio de Asesoría Integral
                </Typography>
                <Typography component="h3" variant="h4" sx={{ my: 1 }}>
                  {group.advisoryTitle}
                </Typography>
                <Typography sx={{ mb: 2 }}>{group.advisoryDescription}</Typography>
                <Stack spacing={1}>
                  {group.advisorySteps.map((step, stepIndex) => (
                    <Typography key={step} variant="body2">
                      <strong>{stepIndex + 1}.</strong> {step}
                    </Typography>
                  ))}
                </Stack>
                <Button
                  component="a"
                  href={whatsappUrl('Hola Vicky! Quiero planificar mi proyecto de voluntariado en Sudáfrica.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  color="secondary"
                  sx={{ mt: 3, color: 'secondary.contrastText' }}
                >
                  Quiero mi proyecto de voluntariado
                </Button>
              </Paper>
            ) : (
              <>
                <Paper
                  elevation={0}
                  sx={{ mt: 4, p: { xs: 2.5, md: 4 }, borderRadius: 3, bgcolor: 'background.paper' }}
                >
                  <Box sx={{ maxWidth: 760, mx: 'auto', mb: 2, textAlign: 'center' }}>
                    <Typography variant="overline" sx={{ color: 'secondary.dark', fontWeight: 700 }}>
                      Presentación de la Empresa
                    </Typography>
                    <Typography component="h3" variant="h4" sx={{ my: 1 }}>
                      Conocé a Mantis Collection
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                      Una colección de ecoturismo reconocida por su hospitalidad sustentable y
                      conservación activa.
                    </Typography>
                  </Box>
                  {videoFailed ? (
                    <Button
                      component="a"
                      href="https://www.youtube.com/watch?v=wxFANu4Wjtk"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver la presentación de Mantis Collection en YouTube
                    </Button>
                  ) : (
                    <Box
                      component="iframe"
                      src="https://www.youtube-nocookie.com/embed/wxFANu4Wjtk"
                      title="Presentación de Mantis Collection"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      onError={() => setVideoFailed(true)}
                      sx={{
                        display: 'block',
                        width: '100%',
                        maxWidth: 900,
                        aspectRatio: '16 / 9',
                        mx: 'auto',
                        border: 0,
                        borderRadius: 2,
                      }}
                    />
                  )}
                  {!videoFailed && (
                    <Typography variant="body2" sx={{ mt: 1.5, textAlign: 'center' }}>
                      Si el video no se reproduce,{' '}
                      <Box
                        component="a"
                        href="https://www.youtube.com/watch?v=wxFANu4Wjtk"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ color: 'primary.main', textDecoration: 'underline' }}
                      >
                        abrilo directamente en YouTube
                      </Box>
                      .
                    </Typography>
                  )}
                </Paper>
                <Paper
                  elevation={0}
                  sx={{ mt: 4, p: { xs: 3, md: 4 }, borderRadius: 3, bgcolor: 'primary.dark', color: 'common.white' }}
                >
                  <Typography variant="overline" sx={{ color: 'secondary.light', fontWeight: 700 }}>
                    Ecoturismo de Conservación
                  </Typography>
                  <Typography component="h3" variant="h4" sx={{ my: 1 }}>
                    {group.advisoryTitle}
                  </Typography>
                  <Typography sx={{ mb: 2 }}>{group.advisoryDescription}</Typography>
                  <Stack spacing={1}>
                    {group.advisorySteps.map((step) => (
                      <Typography key={step} variant="body2">
                        ✓ {step}
                      </Typography>
                    ))}
                  </Stack>
                  <Button
                    component="a"
                    href={whatsappUrl('Hola Vicky! Quiero conocer más sobre los safaris Mantis.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                    color="secondary"
                    sx={{ mt: 3, color: 'secondary.contrastText' }}
                  >
                    Cotizar safari All-Inclusive
                  </Button>
                </Paper>
              </>
            )}
          </Box>
        ))}
      </Container>
    </Box>
  );
};
