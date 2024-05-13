import { Box, Container, Typography } from '@mui/material';
import { CustomTypography } from 'src/components/custom-typography/CustomTypography';
import heroAbout from '../../../public/assets/background/hero_about.png';

export default function About() {
  return (
    <>
      <Box
        sx={{
          textAlign: 'center',
          color: '#ffffff',
          backgroundImage: `url(${heroAbout})`,
          backgroundSize: { xs: 'contain', sm: '100%' },
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: { xs: '30vh', sm: '60vh' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />

      <Box>
        <Container>
          <Typography
            sx={{
              fontSize: { xs: '18px', sm: '26px' },
              fontWeight: 400,
              marginTop: { xs: 1, sm: 8 },
            }}
          >
            A Férias Fácil Operadora é uma plataforma exclusiva para agentes de viagem que queiram
            levar experiências únicas para seus clientes. Com sede em Uberlândia - MG, no coração do
            Triângulo Mineiro, atendemos agentes do Brasil todo, oferecendo soluções para viagens
            como: hospedagem, passagem aérea, seguro viagem, tradutor e muito mais.
          </Typography>

          <CustomTypography marginTop={4}>
            Nossa equipe é composta por especialistas no mercado de turismo, proporcionando um
            atendimento exclusivo com foco total no cliente.
          </CustomTypography>

          <CustomTypography marginTop={4}>
            Entre para esse mundo de experiência. <strong>Faça já o seu cadastro.</strong>
          </CustomTypography>

          <CustomTypography marginTop={4}>
            <strong>Nossa missão:</strong>
            <br />
            Proporcionar aos consultores de viagens um atendimento com empatia, qualidade,
            eficiência, compartilhando nosso vasto conhecimento de um jeito fácil.
          </CustomTypography>
          <CustomTypography marginTop={4}>
            <strong>Nossa visão:</strong>
            <br />
            Estar sempre em evidência no mercado de viagens, sendo reconhecida por sua qualidade,
            parceria, inovação e exclusividade.
          </CustomTypography>
          <CustomTypography marginTop={4} marginBottom={20}>
            <strong>Nossos valores:</strong>
            <br />
            <ul>
              <li>Foco no cliente</li>
              <li>Agilidade</li>
              <li>Responsabilidade</li>
              <li>Credibilidade</li>
            </ul>
            <Box id="newsletter-section" />
          </CustomTypography>
          {/* <CustomTypography>
            <strong>Conheça nossa equipe</strong>
          </CustomTypography>
          <CustomTypography marginTop={2}>
            {' '}
            <strong>Nossos diretores:</strong>
          </CustomTypography>
          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2
          }}>
   {aboutDiretores.map((item, index) => (
           
             
          
              <Box
                sx={{
                  width: '222px',
                  height: '238px',
                  borderRadius: 2,
                  border: 2,
                  marginTop: 2,
                  marginBottom: 5,
                  boxShadow: 4,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}
              >
                <Box
                  sx={{
                    border: 2,
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  {item.image}
                </Box>
                <CustomTypography fontSize="16px" marginTop={4} color="#212B36">
                  {' '}
                  <strong>{item.name}</strong>
                </CustomTypography>
                <CustomTypography fontSize="14px" color="#637381">
                  {item.cargo}
                </CustomTypography>
              </Box>
          
          ))}
          </Box> */}
        </Container>
      </Box>
    </>
  );
}
