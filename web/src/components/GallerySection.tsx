import { useMemo, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Dialog,
  DialogContent,
  IconButton,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { GALLERY_ITEMS, imageUrl } from '../data/siteContent';

const filters = [
  { value: 'all', label: 'Todas las Fotos' },
  { value: 'rhino', label: 'Rinocerontes' },
  { value: 'predator', label: 'Guepardos & Aves' },
  { value: 'vicky', label: 'Victoria en Campo' },
];

export const GallerySection = () => {
  const [filter, setFilter] = useState('all');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const visibleItems = useMemo(
    () =>
      GALLERY_ITEMS.filter((item) => filter === 'all' || item.categories.includes(filter)),
    [filter],
  );
  const activeItem = activeIndex === null ? null : visibleItems[activeIndex];

  const movePhoto = (offset: number) => {
    if (activeIndex === null || visibleItems.length === 0) return;
    setActiveIndex((activeIndex + offset + visibleItems.length) % visibleItems.length);
  };

  return (
    <Box component="section" id="galeria" sx={{ py: { xs: 8, md: 12 }, scrollMarginTop: 80 }}>
      <Container maxWidth={false} sx={{ maxWidth: 1240 }}>
        <Box sx={{ maxWidth: 760, mx: 'auto', mb: 4, textAlign: 'center' }}>
          <Typography variant="overline" sx={{ color: 'secondary.dark', fontWeight: 700 }}>
            Fotografía & Vida Silvestre
          </Typography>
          <Typography component="h2" variant="h2" sx={{ mb: 1.5 }}>
            Sudáfrica a través de mis ojos.
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Imágenes tomadas durante mi participación en proyectos y excursiones dentro de la
            sabana africana. Seleccioná una foto para apreciarla en detalle.
          </Typography>
        </Box>

        <ToggleButtonGroup
          exclusive
          value={filter}
          onChange={(_, value: string | null) => value && setFilter(value)}
          aria-label="Filtros de imágenes"
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            mb: 4,
            gap: 1,
            '& .MuiToggleButtonGroup-grouped': {
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: '24px !important',
              px: 2,
              minHeight: 44,
              textTransform: 'none',
            },
          }}
        >
          {filters.map((item) => (
            <ToggleButton key={item.value} value={item.value} aria-label={item.label}>
              {item.label}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', lg: 'repeat(3, minmax(0, 1fr))' },
            gap: 2,
          }}
        >
          {visibleItems.map((item, index) => (
            <Card
              key={item.image}
              sx={{
                overflow: 'hidden',
                gridColumn: item.featured ? { xs: 'auto', sm: 'span 2' } : 'auto',
                '&:hover': { transform: 'none' },
              }}
            >
              <CardActionArea
                onClick={() => setActiveIndex(index)}
                aria-label={`Ampliar foto: ${item.title}`}
                sx={{ height: '100%', position: 'relative' }}
              >
                <CardMedia
                  component="img"
                  image={imageUrl(item.image)}
                  alt={item.alt}
                  loading="lazy"
                  sx={{
                    width: '100%',
                    height: item.featured ? { xs: 260, sm: 340 } : 280,
                    objectFit: 'cover',
                  }}
                />
                <CardContent
                  sx={{
                    position: 'absolute',
                    insetInline: 0,
                    bottom: 0,
                    color: 'common.white',
                    background: 'linear-gradient(transparent, rgba(22,36,23,.88))',
                    pt: 6,
                  }}
                >
                  <Typography component="h3" variant="h6">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,.82)' }}>
                    {item.caption}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </Container>

      <Dialog
        open={Boolean(activeItem)}
        onClose={() => setActiveIndex(null)}
        maxWidth="lg"
        fullWidth
        aria-labelledby="gallery-dialog-title"
        onKeyDown={(event) => {
          if (event.key === 'ArrowLeft') movePhoto(-1);
          if (event.key === 'ArrowRight') movePhoto(1);
        }}
      >
        {activeItem && (
          <>
            <Stack direction="row" sx={{ justifyContent: 'flex-end', p: 1 }}>
              <IconButton aria-label="Cerrar visualizador de fotos" onClick={() => setActiveIndex(null)}>
                <CloseIcon />
              </IconButton>
            </Stack>
            <DialogContent sx={{ pt: 0, textAlign: 'center' }}>
              <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                <IconButton aria-label="Foto anterior" onClick={() => movePhoto(-1)}>
                  <ArrowBackIosNewIcon />
                </IconButton>
                <Box
                  component="img"
                  src={imageUrl(activeItem.image)}
                  alt={activeItem.alt}
                  sx={{ maxHeight: '70vh', width: '100%', objectFit: 'contain' }}
                />
                <IconButton aria-label="Foto siguiente" onClick={() => movePhoto(1)}>
                  <ArrowForwardIosIcon />
                </IconButton>
              </Stack>
              <Typography id="gallery-dialog-title" component="h2" variant="h5" sx={{ mt: 2 }}>
                {activeItem.title}
              </Typography>
              <Typography sx={{ color: 'text.secondary', mt: 1 }}>
                {activeItem.description}
              </Typography>
              <Button onClick={() => setActiveIndex(null)} sx={{ mt: 2 }}>
                Cerrar
              </Button>
            </DialogContent>
          </>
        )}
      </Dialog>
    </Box>
  );
};
