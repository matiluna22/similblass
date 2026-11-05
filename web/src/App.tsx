import React from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from './theme';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AuthorityBar } from './components/AuthorityBar';
import { ExpeditionCatalog } from './components/ExpeditionCatalog';
import { WhyUs } from './components/WhyUs';
import { AboutVictoria } from './components/AboutVictoria';
import { Testimonials } from './components/Testimonials';
import { FloatingSocialDock } from './components/FloatingSocialDock';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <Box component="main" id="contenido-principal" sx={{ flexGrow: 1 }}>
          <Hero />
          <AuthorityBar />
          <ExpeditionCatalog />
          <WhyUs />
          <AboutVictoria />
          <Testimonials />
        </Box>
        <Footer />
        <FloatingSocialDock />
      </Box>
    </ThemeProvider>
  );
};

export default App;
