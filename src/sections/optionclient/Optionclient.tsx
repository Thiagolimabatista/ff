import { Box, Grid, Typography } from '@mui/material';


export default function OptionClient() {
  return (
    <Box display="flex" justifyContent="center">
      <Grid
        container
        sx={{
          maxWidth: 1200,
          pt: { xs: 3, sm: 9 },
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: '#0330DF',
          p: 4,
          borderRadius: '15px',
          marginTop: 4
        }}
      >
        <Grid item xs={12} sm={6} md={6}>
          {/* Gif */}
          <Box>gif</Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          {/* Acesso Vitalício */}
          <Box>
            <Typography variant="h1" sx={{ color: 'white'}}>ACESSO <strong style={{ color: '#FFFF47'}}>VITALÍCIO</strong></Typography>
            <Typography  variant="body1" sx={{ color: 'white', fontWeight: 500}}> 
              Você terá acesso ao portal do aluno onde poderá acompanhar seu progresso e também todos os materiais disponibilizados em aula, vídeos e exercícios fundamentais para o seu desenvolvimento.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
