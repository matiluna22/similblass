import { Fab, Tooltip } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { whatsappUrl } from '../utils/contact';

export const SocialDock = () => (
  <Tooltip title="Chatear con Victoria Rosso por WhatsApp" placement="left">
    <Fab
      component="a"
      href={whatsappUrl(
        'Hola Vicky! Estuve viendo tu sitio web y me gustaría hacerte una consulta para viajar a Sudáfrica.',
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatear con Victoria Rosso por WhatsApp"
      sx={{
        position: 'fixed',
        right: { xs: 16, md: 24 },
        bottom: { xs: 16, md: 24 },
        zIndex: (theme) => theme.zIndex.speedDial,
        width: { xs: 54, md: 60 },
        height: { xs: 54, md: 60 },
        bgcolor: 'whatsapp.main',
        color: 'whatsapp.contrastText',
        '&:hover': { bgcolor: 'whatsapp.dark' },
      }}
    >
      <WhatsAppIcon />
    </Fab>
  </Tooltip>
);
