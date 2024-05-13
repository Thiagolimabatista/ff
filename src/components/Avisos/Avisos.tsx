import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import ic_warning from '../../assets/icons/ic_warning.png';

const WarningMessage = () => (
  <Box sx={{ display: 'flex', gap: 2, marginTop: 4 }}>
    <Box sx={{ width: 40, height: 40, display: { xs: 'none', md: 'block' } }}>
      <img src={ic_warning} alt="Warning icon" />
    </Box>
    <Typography sx={{ color: '#0063FF' }}>
      Por favor, atente-se a todas as modificações realizadas, pois elas serão refletidas
      imediatamente no site <Link sx={{ color: '#5BBAFF' }}>https://ffoperadora.com.br/</Link>,
      especialmente na seção de bloqueios. Verifique todas as informações com cuidado antes de
      clicar em salvar.
    </Typography>
  </Box>
);

export default WarningMessage;
