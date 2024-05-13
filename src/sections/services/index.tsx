/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Box,
  ThemeProvider,
  Typography,
  createTheme,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import ILUSTRATION_NOT from 'src/assets/illustrations/Notebook.png'
import VECTOR_RED  from 'src/assets/illustrations/VECTOR_RED.svg'
import VECTOR_YELLO  from 'src/assets/illustrations/VECTOR_YELLOW.svg'

export default function ServicesSection() {
  const t = useTheme();
  const downSm = useMediaQuery(t.breakpoints.down('sm'));
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 1000,
        lg: 1200,
        xl: 1536,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box id="home-section" display="flex" justifyContent="center" sx={{ marginTop: 1, p: 2}}>
        <Box sx={{display: 'flex', flexDirection: {xs: 'column', sm: 'row'}}}>
          <Box >
            <Typography variant='h5' sx={{ color: 'white', marginBottom: 1}}>Garanta uma carreira de sucesso</Typography>
            <Typography sx={{ color: '#0038EA', fontWeight: 600,fontSize: {xs: '30px', sm: '30px'} }}>Desenvolvedor</Typography>
            <Typography sx={{ color: '#FFFF47', fontWeight: 600, fontSize: {xs: '60px', md: '70px'}}}>FullStack</Typography>
            <Typography variant='body1' sx={{color: 'white', marginBottom: 2, whiteSpace: { xs: 'nowrap', sm: 'normal' }}}>Imagem um lugar onde o futuro da tecnlogia não só é <br />
            ensinado, mas vivenciado em cada aula!</Typography>
            <Typography   variant='body1' sx={{color: 'white', marginBottom: 2, fontSize: {xs: '14px', md: '16px'}}}>Onde você não apenas aprende progamação e inteligência <br /> artificial mas se prepara para enfrentar os desafios reais do <br />
            mercado de trabalho com confiança</Typography>
            <Typography   variant='body1' sx={{color: 'white', marginBottom: 4}}>Esse lugar existe e está mais perto do que você imagina!</Typography>

            <Typography  sx={{ color: '#FFFF47', fontWeight: 600, marginBottom: 2, fontSize: {xs: '12px', md: '16px'}}}><img style={{marginRight: 9}} src={VECTOR_YELLO} alt="Vector" />PROFESSORES FORMADOS E ATUANTES NA ÁREA</Typography>
            <Typography sx={{ color: '#FFFF47', fontWeight: 600,  marginBottom: 2, fontSize: {xs: '12px', md: '16px'}}}><img style={{marginRight: 9}} src={VECTOR_YELLO} alt="Vector" />08 PROJETOS REAIS PARA SEU PORTFÓLIO</Typography>
            <Typography  sx={{ color: '#FFFF47', fontWeight: 600,  marginBottom: 2, fontSize: {xs: '12px', md: '16px'}}}><img style={{marginRight: 9}} src={VECTOR_YELLO} alt="Vector" />PARA INICIANTES E PROFISSIONAIS</Typography>
            <Typography sx={{ color: '#FFFF47', fontWeight: 600,  marginBottom: 2, fontSize: {xs: '12px', md: '16px'}}}><img style={{marginRight: 9}} src={VECTOR_YELLO} alt="Vector" />ACOMPANHAMENTO DE CARREIRA</Typography>
            <Typography  sx={{ color: '#FF5C00', fontWeight: 600,  marginBottom: 2, fontSize: {xs: '12px', md: '16px'}}}><img style={{marginRight: 9}} src={VECTOR_RED} alt="Vector" />+BÔNUS: CURSO DE REACT NATIVE</Typography>
          </Box>
          <Box sx={{ marginTop: 5}}>
            <img src={ILUSTRATION_NOT} alt="Imagem notBook" style={{ width: '1000px'}} />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
