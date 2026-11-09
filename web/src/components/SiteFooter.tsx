import { Box, Container, Divider, Grid, Stack, Typography } from '@mui/material';
import { socialLinks, whatsappUrl } from '../utils/contact';
import { imageUrl } from '../data/siteContent';

const footerSections = [
  {
    title: 'Experiencias',
    links: [
      ['Voluntariados con Fauna', '#experiencias'],
      ['HESC Rinocerontes & Guepardos', '#experiencias'],
      ['SANCCOB Pingüinos Africanos', '#experiencias'],
      ['Daktari Bush School', '#experiencias'],
      ['Safaris All-Inclusive Mantis', '#experiencias'],
    ],
  },
  {
    title: 'Destinos',
    links: [
      ['Parque Nacional Kruger', '#experiencias'],
      ['Cape Town (Ciudad del Cabo)', '#experiencias'],
      ['Garden Route & Botlierskop', '#experiencias'],
      ['Hoedspruit & Limpopo', '#experiencias'],
      ['Notas en Prensa', '#prensa'],
      ['Galería de Campo', '#galeria'],
    ],
  },
];

export const SiteFooter = () => (
  <Box component="footer" sx={{ py: 6, pb: { xs: 10, md: 7 }, bgcolor: 'primary.dark', color: 'common.white' }}>
    <Container maxWidth={false} sx={{ maxWidth: 1240 }}>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', mb: 2 }}>
            <Box
              component="img"
              src={imageUrl('FOTO PRINCIPAL.jpg')}
              alt="Victoria Rosso"
              sx={{ width: 52, height: 52, borderRadius: '50%', objectFit: 'cover' }}
            />
            <Box>
              <Typography variant="h5" sx={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
                Victoria Rosso
              </Typography>
              <Typography variant="caption" sx={{ color: 'secondary.light' }}>
                Lic. en Biodiversidad
              </Typography>
            </Box>
          </Stack>
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,.78)', maxWidth: 380 }}>
            Bióloga argentina especializada en conservación de fauna y ecoturismo en Sudáfrica.
            Asesoramiento en proyectos de voluntariado ético y representación oficial de Mantis
            Collection.
          </Typography>
        </Grid>
        {footerSections.map((section) => (
          <Grid key={section.title} size={{ xs: 12, sm: 6, md: 2.5 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1.5 }}>
              {section.title}
            </Typography>
            <Stack spacing={1}>
              {section.links.map(([label, href]) => (
                <Typography
                  key={label}
                  component="a"
                  href={href}
                  variant="body2"
                  sx={{ color: 'rgba(255,255,255,.78)', textDecoration: 'none', '&:hover': { color: 'secondary.light' } }}
                >
                  {label}
                </Typography>
              ))}
            </Stack>
          </Grid>
        ))}
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1.5 }}>
            Conectá con Vicky
          </Typography>
          <Stack spacing={1}>
            {socialLinks.map((link) => (
              <Typography
                key={link.label}
                component="a"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                variant="body2"
                sx={{ color: 'rgba(255,255,255,.78)', textDecoration: 'none', '&:hover': { color: 'secondary.light' } }}
              >
                {link.label}: @vickyrosso_
              </Typography>
            ))}
            <Typography
              component="a"
              href={whatsappUrl('Hola Vicky! Te contacto desde tu sitio web.')}
              target="_blank"
              rel="noopener noreferrer"
              variant="body2"
              sx={{ color: 'rgba(255,255,255,.78)', textDecoration: 'none', '&:hover': { color: 'secondary.light' } }}
            >
              WhatsApp: +54 9 342 523-7932
            </Typography>
          </Stack>
        </Grid>
      </Grid>
      <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,.18)' }} />
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={1} sx={{ justifyContent: 'space-between' }}>
        <Typography variant="caption" sx={{ color: 'rgba(255,255,255,.7)' }}>
          © 2026 Victoria Rosso. Todos los derechos reservados. Diseñado para la conservación y
          divulgación de la fauna africana.
        </Typography>
        <Typography variant="caption" sx={{ color: 'secondary.light' }}>
          🌿 Conservación Ética · 🐾 Bienestar Animal · 🌍 Alianza con Mantis
        </Typography>
      </Stack>
    </Container>
  </Box>
);
