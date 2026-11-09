import { useEffect, useState } from 'react';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { imageUrl } from '../data/siteContent';

const links = [
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Prensa', href: '#prensa' },
  { label: 'Servicios', href: '#experiencias' },
  { label: 'Viajá conmigo', href: '#proceso' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Preguntas', href: '#faq' },
  { label: 'Contacto', href: '#contacto' },
];

export const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('#inicio');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveLink(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-20% 0px -70% 0px' },
    );
    document.querySelectorAll('main section[id]').forEach((section) => observer.observe(section));
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <AppBar
      component="header"
      position="fixed"
      elevation={scrolled ? 2 : 0}
      sx={{
        color: scrolled ? 'text.primary' : 'common.white',
        bgcolor: scrolled ? 'rgba(250,248,245,.97)' : 'rgba(22,36,23,.4)',
        borderBottom: '1px solid',
        borderColor: scrolled ? 'divider' : 'rgba(255,255,255,.16)',
        backdropFilter: 'blur(12px)',
        transition: 'background-color .25s ease, color .25s ease',
      }}
    >
      <Container maxWidth={false} sx={{ maxWidth: 1240 }}>
        <Toolbar disableGutters sx={{ minHeight: { xs: 72, nav: 76 }, gap: 1.5 }}>
          <Box
            component="a"
            href="#inicio"
            aria-label="Victoria Rosso — Inicio"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.25,
              color: 'inherit',
              textDecoration: 'none',
              flexShrink: 0,
            }}
          >
            <Avatar
              src={imageUrl('FOTO PRINCIPAL.jpg')}
              alt="Victoria Rosso, bióloga"
              sx={{ width: { xs: 42, nav: 46 }, height: { xs: 42, nav: 46 } }}
            />
            <Box>
              <Typography
                sx={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: { xs: '1rem', nav: '.98rem', lg: '1.1rem' },
                  fontWeight: 700,
                  lineHeight: 1.2,
                }}
              >
                Victoria Rosso
              </Typography>
              <Typography
                sx={{
                  color: scrolled ? 'text.secondary' : 'rgba(255,255,255,.85)',
                  fontSize: { xs: '.62rem', lg: '.7rem' },
                  lineHeight: 1.3,
                  whiteSpace: 'nowrap',
                }}
              >
                Bióloga · Divulgadora Científica
              </Typography>
            </Box>
          </Box>

          <Box
            component="nav"
            aria-label="Navegación principal"
            sx={{
              display: { xs: 'none', nav: 'flex' },
              alignItems: 'center',
              justifyContent: 'flex-end',
              gap: { nav: 1, lg: 1.75 },
              flex: 1,
              ml: 1,
            }}
          >
            {links.map((link) => (
              <Typography
                key={link.href}
                component="a"
                href={link.href}
                aria-current={activeLink === link.href ? 'location' : undefined}
                sx={{
                  color: 'inherit',
                  fontSize: { nav: '.68rem', lg: '.82rem' },
                  fontWeight: 600,
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  '&:hover, &[aria-current="location"]': { color: 'secondary.main' },
                  '&:focus-visible': { outline: '2px solid', outlineColor: 'secondary.main', outlineOffset: 4 },
                }}
              >
                {link.label}
              </Typography>
            ))}
            <Button
              component="a"
              href="#planificar"
              size="small"
              variant="contained"
              sx={{
                display: { xs: 'none', lg: 'inline-flex' },
                whiteSpace: 'nowrap',
                px: 1.5,
                fontSize: '.75rem',
              }}
            >
              Planificar mi viaje
            </Button>
          </Box>

          <IconButton
            aria-label={open ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
            sx={{ display: { xs: 'inline-flex', nav: 'none' }, ml: 'auto', color: 'inherit' }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={open}
        onClose={closeMenu}
        slotProps={{ paper: { id: 'mobile-navigation', sx: { width: 290, p: 2, bgcolor: 'background.default' } } }}
      >
        <Typography variant="h6" sx={{ fontFamily: '"Playfair Display", Georgia, serif', p: 1 }}>
          Victoria Rosso
        </Typography>
        <List>
          {links.map((link) => (
            <ListItem key={link.href} disablePadding>
              <ListItemButton component="a" href={link.href} onClick={closeMenu}>
                <ListItemText
                  primary={link.label}
                  slotProps={{
                    primary: {
                      sx: {
                        color: activeLink === link.href ? 'primary.main' : 'text.primary',
                        fontWeight: activeLink === link.href ? 700 : 400,
                      },
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton component="a" href="#planificar" onClick={closeMenu}>
              <ListItemText primary="Planificar mi viaje" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
};
