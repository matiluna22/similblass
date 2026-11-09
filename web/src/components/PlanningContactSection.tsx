import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import type { ReactNode } from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { socialLinks, whatsappUrl } from '../utils/contact';
import { PlanningForm } from './PlanningForm';

const benefits = [
  {
    icon: '🧬',
    title: 'Asesoría 1 a 1 de Bióloga',
    text: 'Orientación técnica, científica y humana sin intermediarios ni paquetes genéricos.',
  },
  {
    icon: '🐾',
    title: 'Cupos Oficiales en Santuarios',
    text: 'Gestión directa de postulación en HESC, SANCCOB, Daktari y Nourish Eco Village.',
  },
  {
    icon: '🏰',
    title: 'Tarifas & Beneficios Mantis',
    text: 'Acceso a lodges all-inclusive en Kruger y hoteles en Cape Town.',
  },
  {
    icon: '🎒',
    title: 'Preparación Pre-Vuelo',
    text: 'Guía sobre vacunas, indumentaria para el bush, visas, dinero y seguridad.',
  },
];

export const PlanningContactSection = () => (
  <>
    <Box
      component="section"
      id="planificar"
      sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default', scrollMarginTop: 80 }}
    >
      <Container maxWidth={false} sx={{ maxWidth: 1120 }}>
        <Box sx={{ maxWidth: 760, mx: 'auto', mb: 5, textAlign: 'center' }}>
          <Typography variant="overline" sx={{ color: 'secondary.dark', fontWeight: 700 }}>
            Cotizador & Propuestas a Medida
          </Typography>
          <Typography component="h2" variant="h2" sx={{ mb: 1.5 }}>
            Planificá Tu Viaje o Voluntariado
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Conversá directamente con Victoria para diseñar una experiencia personalizada en
            Sudáfrica según tus intereses y fechas.
          </Typography>
        </Box>
        <Grid container spacing={4} sx={{ alignItems: 'flex-start' }}>
          <Grid size={{ xs: 12, lg: 7 }}>
            <Card sx={{ '&:hover': { transform: 'none' } }}>
              <CardContent sx={{ p: { xs: 3, md: 4.5 } }}>
                <PlanningForm />
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, lg: 5 }}>
            <Card
              sx={{
                height: '100%',
                bgcolor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
                '&:hover': { transform: 'none' },
              }}
            >
              <CardContent sx={{ p: { xs: 3, md: 4.5 } }}>
                <Chip
                  label="✨ Experiencia Personalizada"
                  color="secondary"
                  size="small"
                  sx={{ mb: 2, fontWeight: 700 }}
                />
                <Typography component="h3" variant="h5" sx={{ mb: 1.5, fontWeight: 700 }}>
                  ¿Qué incluye tu planificación con Victoria?
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
                  Cada viaje o proyecto de voluntariado está respaldado por mi experiencia directa
                  en el terreno sudafricano y la alianza oficial con Mantis Collection.
                </Typography>
                <Stack spacing={2.5}>
                  {benefits.map((benefit) => (
                    <Stack key={benefit.title} direction="row" spacing={2} sx={{ alignItems: 'flex-start' }}>
                      <Typography aria-hidden="true" sx={{ fontSize: '1.5rem', lineHeight: 1 }}>
                        {benefit.icon}
                      </Typography>
                      <Box>
                        <Typography sx={{ fontWeight: 700, fontSize: '0.95rem' }}>
                          {benefit.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {benefit.text}
                        </Typography>
                      </Box>
                    </Stack>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>

    <Box
      component="section"
      id="contacto"
      sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper', scrollMarginTop: 80 }}
    >
      <Container maxWidth={false} sx={{ maxWidth: 1120 }}>
        <Box sx={{ maxWidth: 760, mx: 'auto', mb: 5, textAlign: 'center' }}>
          <Typography variant="overline" sx={{ color: 'secondary.dark', fontWeight: 700 }}>
            Atención Personalizada
          </Typography>
          <Typography component="h2" variant="h2" sx={{ mb: 1.5 }}>
            Canales de Contacto Directo
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            ¿Tenés alguna consulta puntual? Escribime por cualquiera de mis canales oficiales.
          </Typography>
        </Box>

        <Grid container spacing={2.5}>
          <Grid size={{ xs: 12, md: 4 }}>
            <ContactCard
              icon={<WhatsAppIcon />}
              title="WhatsApp Directo"
              description="El canal más ágil para consultar dudas, fechas disponibles y coordinar llamadas."
              value="+54 9 342 523-7932"
              label="Escribir por WhatsApp"
              href={whatsappUrl('Hola Vicky! Te contacto desde tu web para hacerte una consulta.')}
              primary
            />
          </Grid>
          {socialLinks.map((link) => {
            const isInstagram = link.label === 'Instagram';
            return (
              <Grid key={link.label} size={{ xs: 12, md: 4 }}>
                <ContactCard
                  icon={isInstagram ? <InstagramIcon /> : <MusicNoteIcon />}
                  title={isInstagram ? 'Instagram Oficial' : 'TikTok Divulgación'}
                  description={
                    isInstagram
                      ? 'Historias en vivo desde Sudáfrica, tips de conservación y host en @mantis.ar_.'
                      : 'Videos sobre fauna salvaje, anécdotas de rescates y educación biológica.'
                  }
                  value="@vickyrosso_"
                  label={isInstagram ? 'Seguir en Instagram' : 'Ver en TikTok'}
                  href={link.href}
                />
              </Grid>
            );
          })}
        </Grid>

        <Card
          sx={{
            mt: 4,
            p: { xs: 2.5, md: 4 },
            bgcolor: 'primary.dark',
            color: 'common.white',
            '&:hover': { transform: 'none' },
          }}
        >
          <Typography variant="overline" sx={{ color: 'secondary.light', fontWeight: 700 }}>
            Alianza Oficial
          </Typography>
          <Typography component="h3" variant="h5" sx={{ mb: 1 }}>
            Mantis Collection · South Africa
          </Typography>
          <Typography sx={{ color: 'rgba(255,255,255,.82)' }}>
            Operador de ecoturismo y hotelería de conservación con presencia en Cape Town, Kruger
            National Park y reservas privadas. Asesoría directa y proyectos en conjunto con
            Victoria Rosso.
          </Typography>
        </Card>
      </Container>
    </Box>
  </>
);

interface ContactCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  value: string;
  label: string;
  href: string;
  primary?: boolean;
}

const ContactCard = ({
  icon,
  title,
  description,
  value,
  label,
  href,
  primary = false,
}: ContactCardProps) => (
  <Card sx={{ height: '100%', '&:hover': { transform: 'none' } }}>
    <CardContent sx={{ display: 'flex', height: '100%', flexDirection: 'column', p: 3 }}>
      <Box sx={{ color: primary ? 'whatsapp.dark' : 'secondary.dark', mb: 1 }}>{icon}</Box>
      <Typography component="h3" variant="h6">
        {title}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1, flex: 1 }}>
        {description}
      </Typography>
      <Typography sx={{ fontWeight: 700, my: 2 }}>
        {value}
      </Typography>
      <Button
        component="a"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        variant={primary ? 'contained' : 'outlined'}
        sx={
          primary
            ? {
                bgcolor: 'whatsapp.main',
                color: 'whatsapp.contrastText',
                '&:hover': { bgcolor: 'whatsapp.dark' },
              }
            : undefined
        }
      >
        {label}
      </Button>
    </CardContent>
  </Card>
);
