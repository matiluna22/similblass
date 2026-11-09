import { useRef, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LaunchIcon from '@mui/icons-material/Launch';
import { imageUrl, PRESS_ITEMS } from '../data/siteContent';

export const PressSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const item = PRESS_ITEMS[activeIndex];
  const move = (offset: number) =>
    setActiveIndex((index) => (index + offset + PRESS_ITEMS.length) % PRESS_ITEMS.length);

  return (
    <Box
      component="section"
      id="prensa"
      aria-label="Notas y menciones en medios de comunicación"
      sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper', scrollMarginTop: 80 }}
    >
      <Container maxWidth={false} sx={{ maxWidth: 1120 }}>
        <Box sx={{ maxWidth: 760, mx: 'auto', mb: { xs: 4, md: 6 }, textAlign: 'center' }}>
          <Typography variant="overline" sx={{ color: 'secondary.dark', fontWeight: 700 }}>
            Prensa & Divulgación
          </Typography>
          <Typography component="h2" variant="h2" sx={{ mb: 1.5 }}>
            Historias que trascienden fronteras
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Conocé las notas y entrevistas en medios sobre mi labor como bióloga en Sudáfrica, la
            conservación de fauna salvaje y el impacto de viajar con propósito.
          </Typography>
        </Box>

        <Box
          role="region"
          aria-roledescription="carrusel"
          aria-label="Notas de prensa destacadas"
          onKeyDown={(event) => {
            if (event.key === 'ArrowLeft') move(-1);
            if (event.key === 'ArrowRight') move(1);
          }}
          onTouchStart={(event) => {
            touchStartX.current = event.touches[0]?.clientX ?? null;
          }}
          onTouchEnd={(event) => {
            const startX = touchStartX.current;
            const endX = event.changedTouches[0]?.clientX;
            if (startX !== null && endX !== undefined && Math.abs(endX - startX) > 40) {
              move(endX < startX ? 1 : -1);
            }
            touchStartX.current = null;
          }}
          tabIndex={0}
          sx={{ outline: 'none', '&:focus-visible': { outline: '3px solid', outlineColor: 'secondary.main', outlineOffset: 4 } }}
        >
          <Stack direction="row" spacing={{ xs: 0.5, md: 2 }} sx={{ alignItems: 'center' }}>
            <IconButton
              aria-label="Ver nota anterior"
              onClick={() => move(-1)}
              sx={{ display: { xs: 'none', press: 'inline-flex' }, flexShrink: 0 }}
            >
              <ArrowBackIosNewIcon />
            </IconButton>
            <Card
              key={item.outlet}
              component="article"
              aria-label={`${activeIndex + 1} de ${PRESS_ITEMS.length}: ${item.outlet}`}
              aria-roledescription="diapositiva"
              sx={{
                display: 'flex',
                flex: 1,
                minWidth: 0,
                flexDirection: { xs: 'column', press: 'row' },
                overflow: 'hidden',
                border: '1px solid',
                borderColor: 'divider',
                boxShadow: 2,
                '&:hover': { transform: 'none', boxShadow: 2 },
              }}
            >
              <Box
                component="img"
                src={imageUrl(item.image)}
                alt={item.alt}
                loading="lazy"
                sx={{
                  width: { xs: '100%', press: '38%' },
                  height: { xs: 220, press: 'auto' },
                  minHeight: { press: 350 },
                  objectFit: 'cover',
                }}
              />
              <CardContent
                sx={{
                  display: 'flex',
                  flex: 1,
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  p: { xs: 2.5, md: 4 },
                  '&:last-child': { pb: { xs: 2.5, md: 4 } },
                }}
              >
                <Stack
                  direction="row"
                  sx={{ justifyContent: 'space-between', width: '100%', gap: 1, mb: 2 }}
                >
                  <Typography
                    variant="overline"
                    sx={{ color: 'primary.dark', fontWeight: 700, letterSpacing: '.08em' }}
                  >
                    {item.category}
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary', whiteSpace: 'nowrap' }}>
                    Nota {activeIndex + 1} de {PRESS_ITEMS.length}
                  </Typography>
                </Stack>
                <Typography component="h3" variant="h4" sx={{ mb: 2, fontSize: { xs: '1.4rem', md: '1.8rem' } }}>
                  {item.title}
                </Typography>
                <Typography sx={{ color: 'text.secondary', mb: 3 }}>
                  {item.description}
                </Typography>
                <Button
                  component="a"
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  endIcon={<LaunchIcon />}
                  sx={{ mt: 'auto' }}
                >
                  Leer nota completa
                </Button>
              </CardContent>
            </Card>
            <IconButton
              aria-label="Ver siguiente nota"
              onClick={() => move(1)}
              sx={{ display: { xs: 'none', press: 'inline-flex' }, flexShrink: 0 }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </Stack>

          <Stack
            direction="row"
            spacing={2}
            sx={{ alignItems: 'center', justifyContent: 'center', mt: 2 }}
          >
            <IconButton
              aria-label="Nota anterior"
              onClick={() => move(-1)}
              sx={{ display: { xs: 'inline-flex', press: 'none' } }}
            >
              <ArrowBackIosNewIcon />
            </IconButton>
            <Stack direction="row" role="group" aria-label="Seleccionar nota" spacing={1}>
              {PRESS_ITEMS.map((pressItem, index) => (
                <Button
                  key={pressItem.outlet}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Ver nota ${index + 1}: ${pressItem.outlet}`}
                  aria-pressed={index === activeIndex}
                  sx={{
                    minWidth: 40,
                    width: 40,
                    height: 40,
                    p: 0,
                    borderRadius: '50%',
                    color: index === activeIndex ? 'common.white' : 'primary.dark',
                    bgcolor: index === activeIndex ? 'primary.main' : 'action.hover',
                    '&:hover': { bgcolor: index === activeIndex ? 'primary.dark' : 'action.selected' },
                  }}
                >
                  {index + 1}
                </Button>
              ))}
            </Stack>
            <IconButton
              aria-label="Siguiente nota"
              onClick={() => move(1)}
              sx={{ display: { xs: 'inline-flex', press: 'none' } }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};
