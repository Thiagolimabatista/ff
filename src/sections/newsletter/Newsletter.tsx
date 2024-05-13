import { Box, Typography, Grid } from '@mui/material';
import cl from 'src/assets/illustrations/cl.png'

export default function Newsletter() {
  return (
    <Box display="flex" justifyContent="center">
      <Grid
        container
        sx={{
          maxWidth: 1200,
          pt: { xs: 3, sm: 9 },
          display: 'flex',
          justifyContent: 'center',

          p: 4,
          borderRadius: '15px',
          marginTop: 4,
        }}
      >
        <Grid item xs={12} sm={6} md={5}>
          {/* Gif */}
          <Box>
            <Typography variant="h3" sx={{ color: 'white', fontWeight: 800 }}>
            <strong style={{color: '#FFFF47', fontWeight: 800}}>&lt;</strong> Aulas ao vivo e
            </Typography>
            <Typography variant="h2" sx={{ color: 'blue', fontWeight: 800 }}>
              Presencial  <strong style={{color: '#FFFF47', fontWeight: 800}}>&gt;</strong> 
            </Typography>
            <Typography variant="body1" sx={{ color: 'white' }}>
              Na Maximum, acreditamos que a melhor maneira de <br /> aprender é fazendo. É por isso que
              nossos cursos são <br /> desenhados para te dar não apenas conhecimento, mas <br /> habilidades
              práticas que as empresas de tecnologia <br /> estão procurando agora Seja desenvolvimento
              FullStack <br /> ou aplicações avançadas de inteligência artificial, nosso <br /> objetivo é
              capacitar você para uma carreira promissora <br /> na área de tecnologia.
            </Typography>
            <Typography variant="h4" sx={{ color: 'blue', marginTop: 2 }}>
            <strong style={{color: '#FFFF47', fontWeight: 800}}>&lt; /</strong>O Diferencial?
            </Typography>
            <Typography sx={{ color: 'white' }}>
              Uma formação prática e intensiva que vai além das salas <br /> de aula tradicionais. Aqui, o
              aprendizado contínuo é <br /> parte do pacote, garantindo que você esteja sempre à <br /> frente no
              jogo tecnológico.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          {/* Acesso Vitalício */}
          <Box sx={{ marginBottom: 2}}>
          <img src={cl} alt="Imagem camera" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
