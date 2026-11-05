import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Container,
  Avatar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Expediciones', href: '#expediciones' },
    { label: 'Por qué con una Bióloga', href: '#por-que-con-biologa' },
    { label: 'Sobre Vicky', href: '#sobre-vicky' },
    { label: 'Experiencias', href: '#testimonios' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const openWhatsApp = () => {
    const msg = encodeURIComponent('Hola Vicky! Estoy viendo la web de Rosso Trips y me gustaría consultar sobre los próximos viajes a África.');
    window.open(`https://wa.me/5493425237932?text=${msg}`, '_blank');
  };

  return (
    <AppBar
      position="fixed"
      elevation={scrolled ? 4 : 0}
      sx={{
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(20, 39, 31, 0.4)',
        backdropFilter: 'blur(10px)',
        color: scrolled ? 'text.primary' : '#FFFFFF',
        transition: 'all 0.3s ease',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.06)' : '1px solid rgba(255,255,255,0.1)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', py: 1 }}>
          {/* Logo & Avatar */}
          <Box
            component="a"
            href="#"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <Avatar
              src="https://matiluna22.github.io/Victoria-Rosso-Web/imagenes%20jpg/FOTO%20PRINCIPAL.jpg"
              alt="Victoria Rosso"
              sx={{ width: 44, height: 44, border: '2px solid #B45309' }}
            />
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: '"Playfair Display", serif',
                  fontWeight: 700,
                  fontSize: { xs: '1.05rem', md: '1.25rem' },
                  letterSpacing: '0.04em',
                  lineHeight: 1.1,
                }}
              >
                ROSSO TRIPS
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  display: 'block',
                  color: scrolled ? 'primary.main' : '#E0A96D',
                  fontWeight: 600,
                  fontSize: '0.7rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                Expediciones & Biología en África
              </Typography>
            </Box>
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 3 }}>
            {navLinks.map((link) => (
              <Typography
                key={link.label}
                component="a"
                href={link.href}
                sx={{
                  color: scrolled ? 'text.primary' : '#FFFFFF',
                  textDecoration: 'none',
                  fontWeight: 500,
                  fontSize: '0.95rem',
                  transition: 'color 0.2s ease',
                  '&:hover': {
                    color: 'primary.main',
                  },
                }}
              >
                {link.label}
              </Typography>
            ))}
            <Button
              variant="contained"
              color="primary"
              startIcon={<WhatsAppIcon />}
              onClick={openWhatsApp}
              sx={{
                ml: 1,
                backgroundColor: '#B45309',
                color: '#FFFFFF',
                fontWeight: 600,
                boxShadow: '0 4px 12px rgba(180, 83, 9, 0.3)',
                '&:hover': {
                  backgroundColor: '#92400E',
                },
              }}
            >
              Consultar por WhatsApp
            </Button>
          </Box>

          {/* Mobile Hamburger */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              aria-label="Abrir menú de navegación"
              onClick={handleDrawerToggle}
              sx={{ color: scrolled ? 'text.primary' : '#FFFFFF' }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        slotProps={{
          paper: { sx: { width: 280, p: 2, backgroundColor: '#FAF8F5' } },
        }}
      >
        <Box sx={{ textAlign: 'center', my: 2 }}>
          <Avatar
            src="https://matiluna22.github.io/Victoria-Rosso-Web/imagenes%20jpg/FOTO%20PRINCIPAL.jpg"
            alt="Victoria Rosso"
            sx={{ width: 64, height: 64, mx: 'auto', mb: 1, border: '2px solid #B45309' }}
          />
          <Typography variant="h6" sx={{ fontFamily: '"Playfair Display", serif', fontWeight: 700 }}>
            ROSSO TRIPS
          </Typography>
          <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 600 }}>
            Victoria Rosso · Bióloga
          </Typography>
        </Box>
        <List sx={{ mt: 1 }}>
          {navLinks.map((link) => (
            <ListItem key={link.label} disablePadding>
              <ListItemButton
                component="a"
                href={link.href}
                onClick={handleDrawerToggle}
                sx={{ borderRadius: 2, mb: 0.5 }}
              >
                <ListItemText
                  primary={link.label}
                  slotProps={{ primary: { sx: { fontWeight: 600 } } }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Box sx={{ mt: 3 }}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            startIcon={<WhatsAppIcon />}
            onClick={() => {
              handleDrawerToggle();
              openWhatsApp();
            }}
          >
            Escribir a Vicky
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
};
