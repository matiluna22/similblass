import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Tabs,
  Tab,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
  Button,
  Stack,
  Dialog,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GroupsIcon from '@mui/icons-material/Groups';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { EXPEDITIONS } from '../data/expeditions';
import type { Expedition } from '../types/expedition';

export const ExpeditionCatalog: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<'all' | 'safari' | 'volunteering'>('all');
  const [activeExpedition, setActiveExpedition] = useState<Expedition | null>(null);

  const filteredExpeditions = EXPEDITIONS.filter((item) => {
    if (selectedTab === 'all') return true;
    return item.category === selectedTab;
  });

  const handleOpenWhatsApp = (text: string) => {
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/5493425237932?text=${encoded}`, '_blank');
  };

  return (
    <Box id="expediciones" sx={{ py: 10, backgroundColor: '#FAF8F5' }}>
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Chip
            label="CALENDARIO DE EXPEDICIONES ÁFRICA"
            sx={{
              backgroundColor: 'rgba(180, 83, 9, 0.12)',
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
            Viví África en Primera Persona
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              maxWidth: 680,
              mx: 'auto',
              fontSize: '1.1rem',
            }}
          >
            Cada viaje está diseñado meticulosamente con criterios de biología, conservación y respeto absoluto por la fauna silvestre. Elegí la experiencia que resuene con vos:
          </Typography>

          {/* Filter Tabs */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Tabs
              value={selectedTab}
              onChange={(_, val) => setSelectedTab(val)}
              textColor="primary"
              indicatorColor="primary"
              sx={{
                backgroundColor: '#FFFFFF',
                borderRadius: 30,
                p: 0.5,
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                '& .MuiTab-root': {
                  borderRadius: 20,
                  textTransform: 'none',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  minHeight: 44,
                  px: 3,
                },
              }}
            >
              <Tab value="all" label="Todas las Experiencias" />
              <Tab value="safari" label="Safaris de Inmersión" />
              <Tab value="volunteering" label="Voluntariados de Conservación" />
            </Tabs>
          </Box>
        </Box>

        {/* Expeditions Grid */}
        <Grid container spacing={4}>
          {filteredExpeditions.map((exp) => (
            <Grid size={{ xs: 12, md: 4 }} key={exp.id} sx={{ display: 'flex' }}>
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  height: '100%',
                  border: '1px solid rgba(0,0,0,0.06)',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                {/* Image & Status Badge */}
                <Box sx={{ position: 'relative', height: 260, overflow: 'hidden' }}>
                  <CardMedia
                    component="img"
                    image={exp.image}
                    alt={exp.title}
                    sx={{
                      height: '100%',
                      width: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease',
                      '&:hover': {
                        transform: 'scale(1.04)',
                      },
                    }}
                  />
                  {/* Category Pill */}
                  <Chip
                    label={exp.highlightPill}
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: 14,
                      left: 14,
                      backgroundColor: 'rgba(20, 39, 31, 0.85)',
                      backdropFilter: 'blur(4px)',
                      color: '#FFFFFF',
                      fontWeight: 700,
                      fontSize: '0.72rem',
                    }}
                  />
                  {/* Availability Badge */}
                  <Chip
                    label={exp.statusBadge}
                    size="small"
                    sx={{
                      position: 'absolute',
                      bottom: 14,
                      right: 14,
                      backgroundColor: exp.spotsLeft <= 3 ? '#DC2626' : '#B45309',
                      color: '#FFFFFF',
                      fontWeight: 700,
                      fontSize: '0.72rem',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
                    }}
                  />
                </Box>

                {/* Content */}
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  {/* Meta Specs */}
                  <Stack direction="row" spacing={2} sx={{ mb: 1.5, color: 'text.secondary', fontSize: '0.85rem' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <LocationOnIcon fontSize="small" sx={{ color: 'primary.main', fontSize: 18 }} />
                      <Typography variant="caption" sx={{ fontWeight: 600 }}>
                        {exp.destination}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <GroupsIcon fontSize="small" sx={{ color: 'secondary.main', fontSize: 18 }} />
                      <Typography variant="caption" sx={{ fontWeight: 600 }}>
                        Máx. {exp.spotsTotal}
                      </Typography>
                    </Box>
                  </Stack>

                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, lineHeight: 1.25 }}>
                    {exp.title}
                  </Typography>

                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2.5, lineHeight: 1.5 }}>
                    {exp.subtitle}
                  </Typography>

                  <Divider sx={{ mb: 2 }} />

                  {/* Highlights list */}
                  <Typography variant="caption" sx={{ fontWeight: 700, color: 'secondary.main', display: 'block', mb: 1, letterSpacing: '0.05em' }}>
                    LO DESTACADO:
                  </Typography>
                  <List dense disablePadding sx={{ mb: 2 }}>
                    {exp.highlights.slice(0, 2).map((h, i) => (
                      <ListItem key={i} disableGutters sx={{ alignItems: 'flex-start', py: 0.3 }}>
                        <ListItemIcon sx={{ minWidth: 22, mt: '3px' }}>
                          <CheckCircleIcon sx={{ fontSize: 16, color: 'secondary.main' }} />
                        </ListItemIcon>
                        <ListItemText
                          primary={h}
                          slotProps={{ primary: { variant: 'caption', color: 'text.primary', sx: { lineHeight: 1.3 } } }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>

                {/* Card Actions */}
                <CardActions sx={{ p: 3, pt: 0, gap: 1 }}>
                  <Button
                    fullWidth
                    variant="contained"
                    startIcon={<WhatsAppIcon />}
                    onClick={() => handleOpenWhatsApp(exp.whatsAppText)}
                    sx={{
                      backgroundColor: '#25D366',
                      color: '#FFFFFF',
                      fontWeight: 600,
                      py: 1.2,
                      '&:hover': {
                        backgroundColor: '#1EBE5D',
                      },
                    }}
                  >
                    Consultar Cupo
                  </Button>
                  <Button
                    variant="outlined"
                    color="inherit"
                    onClick={() => setActiveExpedition(exp)}
                    sx={{
                      borderColor: 'rgba(0,0,0,0.15)',
                      minWidth: 44,
                      px: 2,
                      fontWeight: 600,
                      '&:hover': {
                        borderColor: 'primary.main',
                        color: 'primary.main',
                      },
                    }}
                  >
                    Detalles
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Details Modal */}
      {activeExpedition && (
        <Dialog
          open={Boolean(activeExpedition)}
          onClose={() => setActiveExpedition(null)}
          maxWidth="md"
          fullWidth
          slotProps={{
            paper: { sx: { borderRadius: 4, overflow: 'hidden' } },
          }}
        >
          <Box sx={{ position: 'relative', height: 280 }}>
            <CardMedia
              component="img"
              image={activeExpedition.image}
              alt={activeExpedition.title}
              sx={{ height: '100%', width: '100%', objectFit: 'cover' }}
            />
            <IconButton
              onClick={() => setActiveExpedition(null)}
              sx={{
                position: 'absolute',
                top: 12,
                right: 12,
                backgroundColor: 'rgba(0,0,0,0.5)',
                color: '#FFFFFF',
                '&:hover': { backgroundColor: 'rgba(0,0,0,0.8)' },
              }}
            >
              <CloseIcon />
            </IconButton>
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                p: 3,
                background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                color: '#FFFFFF',
              }}
            >
              <Typography variant="overline" sx={{ color: '#F59E0B', fontWeight: 700 }}>
                {activeExpedition.destination} · {activeExpedition.duration}
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 700 }}>
                {activeExpedition.title}
              </Typography>
            </Box>
          </Box>

          <DialogContent sx={{ p: 4 }}>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7, color: 'text.primary' }}>
              {activeExpedition.description}
            </Typography>

            <Grid container spacing={3}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'secondary.main', mb: 1 }}>
                  Vivencias Clave:
                </Typography>
                <List dense disablePadding>
                  {activeExpedition.highlights.map((h, i) => (
                    <ListItem key={i} disableGutters sx={{ alignItems: 'flex-start', py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 24, mt: '3px' }}>
                        <CheckCircleIcon sx={{ fontSize: 18, color: 'secondary.main' }} />
                      </ListItemIcon>
                      <ListItemText primary={h} slotProps={{ primary: { variant: 'body2' } }} />
                    </ListItem>
                  ))}
                </List>
              </Grid>

              <Grid size={{ xs: 12, sm: 6 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}>
                  Qué Incluye:
                </Typography>
                <List dense disablePadding>
                  {activeExpedition.includes.map((inc, i) => (
                    <ListItem key={i} disableGutters sx={{ alignItems: 'flex-start', py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 24, mt: '3px' }}>
                        <CheckCircleIcon sx={{ fontSize: 18, color: 'primary.main' }} />
                      </ListItemIcon>
                      <ListItemText primary={inc} slotProps={{ primary: { variant: 'body2' } }} />
                    </ListItem>
                  ))}
                </List>
              </Grid>
            </Grid>
          </DialogContent>

          <DialogActions sx={{ p: 3, pt: 0, backgroundColor: '#FAF8F5', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
            <Button onClick={() => setActiveExpedition(null)} sx={{ color: 'text.secondary' }}>
              Cerrar
            </Button>
            <Button
              variant="contained"
              startIcon={<WhatsAppIcon />}
              onClick={() => {
                const text = activeExpedition.whatsAppText;
                setActiveExpedition(null);
                handleOpenWhatsApp(text);
              }}
              sx={{
                backgroundColor: '#25D366',
                color: '#FFFFFF',
                px: 3,
                fontWeight: 600,
                '&:hover': { backgroundColor: '#1EBE5D' },
              }}
            >
              Consultar por WhatsApp
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Box>
  );
};
