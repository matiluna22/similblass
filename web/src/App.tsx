import React from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from './theme';
import { SiteHeader } from './components/SiteHeader';
import { LandingHero } from './components/LandingHero';
import { ProfileSection } from './components/ProfileSection';
import { EthicalCommitment } from './components/EthicalCommitment';
import { PressSection } from './components/PressSection';
import { ExperiencesSection } from './components/ExperiencesSection';
import { JourneySection } from './components/JourneySection';
import { GallerySection } from './components/GallerySection';
import { FaqSection } from './components/FaqSection';
import { PlanningContactSection } from './components/PlanningContactSection';
import { SiteFooter } from './components/SiteFooter';
import { SocialDock } from './components/SocialDock';

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Box
          component="a"
          href="#contenido-principal"
          sx={{
            position: 'absolute',
            top: -80,
            left: 16,
            zIndex: 1600,
            px: 2,
            py: 1,
            color: 'common.white',
            bgcolor: 'primary.dark',
            borderRadius: 1,
            '&:focus': { top: 8 },
          }}
        >
          Saltar al contenido principal
        </Box>
        <SiteHeader />
        <Box component="main" id="contenido-principal" sx={{ flexGrow: 1 }}>
          <LandingHero />
          <ProfileSection />
          <EthicalCommitment />
          <PressSection />
          <ExperiencesSection />
          <JourneySection />
          <GallerySection />
          <FaqSection />
          <PlanningContactSection />
        </Box>
        <SiteFooter />
        <SocialDock />
      </Box>
    </ThemeProvider>
  );
};

export default App;
