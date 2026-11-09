import { useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FAQ_GROUPS } from '../data/siteContent';

export const FaqSection = () => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState<string | false>(false);
  const group = FAQ_GROUPS[selected];

  return (
    <Box
      component="section"
      id="faq"
      aria-label="Preguntas frecuentes sobre voluntariados y safaris"
      sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper', scrollMarginTop: 80 }}
    >
      <Container maxWidth={false} sx={{ maxWidth: 920 }}>
        <Box sx={{ maxWidth: 760, mx: 'auto', mb: 4, textAlign: 'center' }}>
          <Typography variant="overline" sx={{ color: 'secondary.dark', fontWeight: 700 }}>
            Dudas Habituales
          </Typography>
          <Typography component="h2" variant="h2" sx={{ mb: 1.5 }}>
            Preguntas Frecuentes
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Todo lo que necesitás saber antes de embarcarte en tu próxima experiencia en Sudáfrica.
          </Typography>
        </Box>

        <Tabs
          value={selected}
          onChange={(_, nextValue: number) => {
            setSelected(nextValue);
            setExpanded(false);
          }}
          centered
          variant="scrollable"
          scrollButtons="auto"
          aria-label="Categorías de preguntas frecuentes"
          sx={{ mb: 3, '& .MuiTab-root': { minHeight: 52, fontWeight: 700 } }}
        >
          {FAQ_GROUPS.map((item, index) => (
            <Tab
              key={item.id}
              id={`${item.id}-tab`}
              aria-controls={`${item.id}-panel`}
              label={item.label}
              value={index}
            />
          ))}
        </Tabs>
        <Box
          id={`${group.id}-panel`}
          role="tabpanel"
          aria-labelledby={`${group.id}-tab`}
          tabIndex={0}
        >
          {group.questions.map((faq, index) => (
            <Accordion
              key={faq.question}
              disableGutters
              expanded={expanded === faq.question}
              onChange={(_, isExpanded) => setExpanded(isExpanded ? faq.question : false)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`${group.id}-answer-${index}`}
                id={`${group.id}-question-${index}`}
              >
                <Typography sx={{ fontWeight: 600 }}>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails id={`${group.id}-answer-${index}`}>
                <Typography sx={{ color: 'text.secondary' }}>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
