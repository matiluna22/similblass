import React from 'react';
import { Box, Container, Typography, Stack } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import BiotechIcon from '@mui/icons-material/Biotech';
import HotelIcon from '@mui/icons-material/Hotel';
import PetsIcon from '@mui/icons-material/Pets';
import NewspaperIcon from '@mui/icons-material/Newspaper';

export const AuthorityBar: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#FFFFFF',
        py: 4,
        borderBottom: '1px solid rgba(0,0,0,0.06)',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="overline"
          sx={{
            display: 'block',
            textAlign: 'center',
            color: 'text.secondary',
            fontWeight: 700,
            letterSpacing: '0.12em',
            mb: 2.5,
          }}
        >
          RESPALDO CIENTÍFICO Y ALIANZAS INTERNACIONALES
        </Typography>

        <Stack
          direction="row"
          spacing={{ xs: 2, md: 4 }}
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <SchoolIcon sx={{ color: 'secondary.main', fontSize: 28 }} />
            <Box>
              <Typography variant="body2" sx={{ fontWeight: 700, lineHeight: 1.1 }}>
                UNL
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                Lic. en Biodiversidad
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <BiotechIcon sx={{ color: 'primary.main', fontSize: 28 }} />
            <Box>
              <Typography variant="body2" sx={{ fontWeight: 700, lineHeight: 1.1 }}>
                CONICET
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                Investigación & eDNA
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <HotelIcon sx={{ color: 'secondary.main', fontSize: 28 }} />
            <Box>
              <Typography variant="body2" sx={{ fontWeight: 700, lineHeight: 1.1 }}>
                Mantis Collection
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                Host Oficial Sudáfrica
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <PetsIcon sx={{ color: 'primary.main', fontSize: 26 }} />
            <Box>
              <Typography variant="body2" sx={{ fontWeight: 700, lineHeight: 1.1 }}>
                HESC & SANCCOB
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                Centros de Conservación
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <NewspaperIcon sx={{ color: 'text.secondary', fontSize: 26 }} />
            <Box>
              <Typography variant="body2" sx={{ fontWeight: 700, lineHeight: 1.1 }}>
                Prensa Destacada
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                El Litoral · Radio Eme
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
