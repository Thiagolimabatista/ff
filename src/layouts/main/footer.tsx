import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled, useTheme } from '@mui/material/styles';
import { Link, Container, Typography } from '@mui/material';

import logo from 'src/assets/logos/logo_main.png';
import logoLZT from 'src/assets/logos/logolzt.png';

import { socialIcons, contactInfo } from '../../utils/data';

const TextFooter = styled(Typography)(() => ({
  color: '#fff',
  fontWeight: '600',
}));

const Footer = () => {
  const theme = useTheme();
  const scrolling = (elementId: string) => {
    const section = document.querySelector(elementId);
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <Box
      sx={{
        background: '#00042D',
      }}
    >
      <Container>
        <Grid container spacing={4} padding={2}>
          <Grid item xs={12} md={6}>
            <img src={logo} alt="Logo FF Operadora" />
          </Grid>
          <Grid item xs={6}>
            <Grid
              container
              sx={{
                pl: 1.8,
                display: 'flex',
                justifyContent: { xs: 'flex-start', md: 'flex-end' },
                alignItems: 'center',
              }}
            >
              <Grid item xs={12} sm={3} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                <Link sx={{ color: '#0063FF' }} href="/registration">
                  Cadastre-se
                </Link>
              </Grid>
              <Grid item xs={12} sm={3} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                <Link
                  href="https://ffoperadora.infotravel.com.br/infotravel/login.xhtml"
                  sx={{
                    py: { xs: 0.7, sm: 0.9 },
                    px: { xs: 2, sm: 2.5 },
                    marginLeft: 2,
                    filter: 'brightness(105%)',
                    borderRadius: 0.7,
                    fontFamily: theme.typography.fontSecondaryFamily,
                    fontWeight: theme.typography.fontWeightLight,
                    backgroundColor: '#0063ff',
                    color: theme.palette.primary.contrastText,
                    '&:hover': {
                      py: { xs: 0.6, sm: 0.8 },
                      px: { xs: 1.9, sm: 2.4 },
                      textDecoration: 'none',
                      backgroundColor: theme.palette.grey[100],
                      color: theme.palette.primary.main,
                      borderColor: theme.palette.primary.main,
                      border: 1,
                    },
                  }}
                >
                  Entrar
                </Link>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box
              onClick={() => scrolling('#home')}
              sx={{
                marginLeft: 2,
              }}
            >
              <TextFooter
                onClick={() => {
                  scrolling('#home-section');
                }}
                sx={{ marginBottom: 2, cursor: 'pointer' }}
              >
                Home
              </TextFooter>
              <TextFooter
                onClick={() => scrolling('#newsletter-section')}
                sx={{ marginBottom: 2, cursor: 'pointer' }}
              >
                Novidades
              </TextFooter>
              <TextFooter sx={{ marginBottom: 2 }}>Quem somos</TextFooter>
            </Box>
            <Box sx={{ marginTop: 8, marginBottom: 4 }}>
              <img src={logoLZT} alt="Logo LZT" />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            {contactInfo.map((info, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  gap: 1,
                }}
              >
                <Box
                  sx={{
                    width: 14,
                    height: 14,
                  }}
                >
                  <img src={info.icon} alt={`Logo ${index}`} />
                </Box>
                <Typography
                  sx={{
                    color: '#fff',
                    fontWeight: '400',
                    marginTop: 1,
                  }}
                >
                  {info.text}
                  {info.additionalInfo && (
                    <Typography
                      sx={{
                        color: '#fff',
                        fontWeight: '400',
                        fontSize: 12,
                      }}
                    >
                      {info.additionalInfo}
                    </Typography>
                  )}
                </Typography>
              </Box>
            ))}
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                marginLeft: 2,
                marginTop: 9,
              }}
            >
              {socialIcons.map((socialIcon, index) => (
                <img key={index} src={socialIcon.icon} alt={socialIcon.alt} />
              ))}
            </Box>
          </Grid>

          <Typography
            sx={{
              color: '#E5F0FF80',
              opacity: '80%',
              fontSize: '14px',
              padding: 4,
            }}
          >
            FÉRIAS FÁCIL TURISMO LTDA | 71.156.988/0001-20 | AV RONDON PACHECO 1756 CEP 38408343-
            UBERLÂNDIA - MINAS GERAIS - BRASIL | FÉRIAS FÁCIL OPERADORA. Para mais informações sobre
            reembolsos, devoluções, cancelamentos, SAC e demais questões relacionadas ao pagamento
            entrar em contato conosco. <a href="/loginffo">Login como Admin</a>
          </Typography>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
