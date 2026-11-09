import React, { useState } from 'react';
import {
  Alert,
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

const experienceOptions = [
  'Voluntariado con Fauna Silvestre',
  'Safari All-Inclusive Mantis (Lujo & Ecoturismo)',
  'Combinación Voluntariado + Safari',
  'Turismo Cape Town & Viñedos',
  'Consulta General',
];

const destinationOptions = [
  'Sin preferencia particular',
  'HESC (Rinocerontes y Guepardos - Kruger)',
  'SANCCOB (Pingüinos Africanos - Cape Town)',
  'Daktari Bush School (Orfanato de Fauna)',
  'Nourish Eco Village (Comunidad Sustentable)',
  'Parque Nacional Kruger (Lodges Mantis All-Inclusive)',
  'Cape Town & Garden Route (Mantis Collection)',
];

export const PlanningForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experienceType: 'Voluntariado con Fauna Silvestre',
    destination: 'Sin preferencia particular',
    travelDate: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [toast, setToast] = useState<{ open: boolean; message: string; severity: 'error' | 'success' }>({
    open: false,
    message: '',
    severity: 'success',
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const isFormValid = formData.name.trim() && formData.email.trim() && formData.phone.trim();

  const buildWhatsAppMessage = () => {
    return `Hola Vicky! 👋 Te contacto desde tu sitio web.
🌿 Mi nombre es: ${formData.name.trim()}
📧 Email: ${formData.email.trim()}
📱 Teléfono/WhatsApp: ${formData.phone.trim()}
✈️ Tipo de experiencia: ${formData.experienceType}
📍 Destino de interés: ${formData.destination}
🗓️ Fecha estimada: ${formData.travelDate.trim() || 'A coordinar'}
💬 Mensaje: ${formData.message.trim() || 'Sin detalles adicionales'}

¡Me gustaría que me asesores para planificar mi viaje a Sudáfrica!`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    if (!isFormValid) {
      setToast({
        open: true,
        message: 'Por favor completá los campos obligatorios (*)',
        severity: 'error',
      });
      return;
    }

    const waText = encodeURIComponent(buildWhatsAppMessage());
    const waUrl = `https://wa.me/5493425237932?text=${waText}`;

    setToast({
      open: true,
      message: '¡Gracias! Abriendo WhatsApp con los datos de tu consulta...',
      severity: 'success',
    });

    setTimeout(() => {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }, 600);
  };

  const handleEmailFallback = () => {
    setSubmitted(true);
    if (!isFormValid) {
      setToast({
        open: true,
        message: 'Por favor completá los campos obligatorios (*) antes de enviar el correo',
        severity: 'error',
      });
      return;
    }

    const subject = encodeURIComponent(
      `Consulta de Viaje a Sudáfrica - ${formData.name.trim() || 'Interesado'}`,
    );
    const body = encodeURIComponent(
      `Hola Vicky,

Me contacto a través de tu sitio web para consultarte sobre viajes y voluntariados en Sudáfrica:

- Nombre: ${formData.name.trim()}
- Email: ${formData.email.trim()}
- Teléfono: ${formData.phone.trim()}
- Tipo de Experiencia: ${formData.experienceType}
- Destino de Interés: ${formData.destination}
- Fechas Estimadas: ${formData.travelDate.trim() || 'A coordinar'}
- Mensaje y Consultas:
${formData.message.trim() || 'Sin consultas adicionales'}

Muchas gracias!`,
    );

    window.location.href = `mailto:viickyrosso@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <Typography variant="h5" component="h3" sx={{ mb: 1, fontWeight: 700 }}>
        Completá tus datos
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
        Te responderé por WhatsApp a la brevedad con una propuesta diseñada a tu medida.
      </Typography>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            required
            label="Nombre y Apellido"
            placeholder="Ej: Valentina Morales"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            error={submitted && !formData.name.trim()}
            helperText={submitted && !formData.name.trim() ? 'Campo obligatorio' : ''}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            required
            type="email"
            label="Correo Electrónico"
            placeholder="nombre@correo.com"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            error={submitted && !formData.email.trim()}
            helperText={submitted && !formData.email.trim() ? 'Campo obligatorio' : ''}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            required
            label="Teléfono / WhatsApp"
            placeholder="+54 9 11 1234-5678"
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            error={submitted && !formData.phone.trim()}
            helperText={submitted && !formData.phone.trim() ? 'Campo obligatorio' : ''}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <FormControl fullWidth required>
            <InputLabel id="experience-type-label">¿Qué tipo de viaje te interesa?</InputLabel>
            <Select
              labelId="experience-type-label"
              id="experience-type-select"
              value={formData.experienceType}
              label="¿Qué tipo de viaje te interesa?"
              onChange={(e) => handleChange('experienceType', e.target.value)}
            >
              {experienceOptions.map((opt) => (
                <MenuItem key={opt} value={opt}>
                  {opt}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid size={{ xs: 12, sm: 6 }}>
          <FormControl fullWidth>
            <InputLabel id="destination-label">Destino o Centro de Interés</InputLabel>
            <Select
              labelId="destination-label"
              id="destination-select"
              value={formData.destination}
              label="Destino o Centro de Interés"
              onChange={(e) => handleChange('destination', e.target.value)}
            >
              {destinationOptions.map((opt) => (
                <MenuItem key={opt} value={opt}>
                  {opt}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            label="Fecha o Mes Estimado de Viaje"
            placeholder="Ej: Octubre - Noviembre 2026"
            value={formData.travelDate}
            onChange={(e) => handleChange('travelDate', e.target.value)}
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <TextField
            fullWidth
            multiline
            rows={3}
            label="Contame sobre vos y tus expectativas"
            placeholder="¿Cuántas semanas te gustaría viajar? ¿Viajás en grupo o solo? ¿Qué animales te encantaría conocer?"
            value={formData.message}
            onChange={(e) => handleChange('message', e.target.value)}
          />
        </Grid>

        <Grid size={{ xs: 12 }} sx={{ mt: 1 }}>
          <Button
            type="submit"
            variant="contained"
            size="large"
            fullWidth
            startIcon={<WhatsAppIcon />}
            sx={{
              py: 1.5,
              fontSize: '1rem',
              bgcolor: 'whatsapp.main',
              color: 'whatsapp.contrastText',
              '&:hover': { bgcolor: 'whatsapp.dark' },
            }}
          >
            Enviar Consulta y Abrir en WhatsApp
          </Button>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Button
            type="button"
            variant="outlined"
            size="medium"
            fullWidth
            startIcon={<EmailIcon />}
            onClick={handleEmailFallback}
            sx={{
              borderColor: 'primary.main',
              color: 'primary.dark',
              '&:hover': { borderColor: 'primary.dark', bgcolor: 'action.hover' },
            }}
          >
            O Enviar por Correo Electrónico
          </Button>
        </Grid>
      </Grid>

      <Snackbar
        open={toast.open}
        autoHideDuration={4500}
        onClose={() => setToast((prev) => ({ ...prev, open: false }))}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setToast((prev) => ({ ...prev, open: false }))}
          severity={toast.severity}
          sx={{ width: '100%' }}
        >
          {toast.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

